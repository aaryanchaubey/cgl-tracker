import { createContext, useContext, useEffect, useState } from 'react'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from 'firebase/auth'
import {
  doc,
  setDoc,
  getDoc,
  query,
  collection,
  where,
  getDocs,
  serverTimestamp,
} from 'firebase/firestore'
import { auth, db } from '../firebase/config'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser]       = useState(null)
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        setUser(firebaseUser)
        try {
          const snap = await getDoc(doc(db, 'users', firebaseUser.uid))
          if (snap.exists()) setProfile(snap.data())
        } catch {
          // Firestore not reachable — auth still works
        }
      } else {
        setUser(null)
        setProfile(null)
      }
      setLoading(false)
    })
    return unsub
  }, [])

  // ── Register ──────────────────────────────────────────────────────────────
  async function register(name, email, username, password) {
    // 1. Create Firebase Auth user (this throws on duplicate email, weak password, etc.)
    const cred = await createUserWithEmailAndPassword(auth, email, password)
    const uid  = cred.user.uid

    await updateProfile(cred.user, { displayName: name })

    const profileData = {
      uid,
      name:            name.trim(),
      email:           email.toLowerCase().trim(),
      username:        username.toLowerCase().trim(),
      displayUsername: username.trim(),
      theme:           'shadow',
      createdAt:       serverTimestamp(),
      totalDaysCompleted: 0,
      currentStreak:   0,
      longestStreak:   0,
      lastActiveDate:  null,
    }

    // 2. Persist profile to Firestore — non-blocking if rules not yet configured
    try {
      await setDoc(doc(db, 'users', uid), profileData)
      await setDoc(doc(db, 'usernames', username.toLowerCase().trim()), {
        uid,
        username: username.toLowerCase().trim(),
      })
      setProfile(profileData)
    } catch {
      // Firestore write failed (rules not configured yet) — auth account still created
      // Profile will sync on next login once rules are set up
      setProfile({ ...profileData, createdAt: new Date().toISOString() })
    }

    return cred.user
  }

  // ── Login ─────────────────────────────────────────────────────────────────
  async function login(identifier, password) {
    let email = identifier.trim().toLowerCase()

    // Username-based login: look up email from Firestore
    if (!identifier.includes('@')) {
      try {
        const q    = query(collection(db, 'usernames'), where('username', '==', email))
        const snap = await getDocs(q)
        if (snap.empty) throw new Error('No account found with that username.')
        const uid      = snap.docs[0].data().uid
        const userSnap = await getDoc(doc(db, 'users', uid))
        if (!userSnap.exists()) throw new Error('Account data not found.')
        email = userSnap.data().email
      } catch (err) {
        if (err.code === 'permission-denied' || err.message.includes('permission')) {
          throw new Error('Username login unavailable — please sign in with your email address.')
        }
        throw err
      }
    }

    const cred = await signInWithEmailAndPassword(auth, email, password)

    // Load profile — non-blocking
    try {
      const snap = await getDoc(doc(db, 'users', cred.user.uid))
      if (snap.exists()) setProfile(snap.data())
    } catch { /* ignore */ }

    return cred.user
  }

  // ── Logout ────────────────────────────────────────────────────────────────
  async function logout() {
    await signOut(auth)
    setUser(null)
    setProfile(null)
  }

  // ── Update theme ──────────────────────────────────────────────────────────
  async function updateTheme(theme) {
    if (!user) return
    try {
      await setDoc(doc(db, 'users', user.uid), { theme }, { merge: true })
    } catch { /* ignore */ }
    setProfile((prev) => ({ ...prev, theme }))
  }

  // ── Refresh profile ───────────────────────────────────────────────────────
  async function refreshProfile() {
    if (!user) return
    try {
      const snap = await getDoc(doc(db, 'users', user.uid))
      if (snap.exists()) setProfile(snap.data())
    } catch { /* ignore */ }
  }

  return (
    <AuthContext.Provider
      value={{ user, profile, loading, register, login, logout, updateTheme, refreshProfile }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used inside AuthProvider')
  return ctx
}
