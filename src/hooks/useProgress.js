import { useState, useEffect, useCallback } from 'react'
import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  arrayUnion,
  serverTimestamp,
  collection,
  getDocs,
  query,
  orderBy,
} from 'firebase/firestore'
import { db } from '../firebase/config'
import { useAuth } from '../contexts/AuthContext'
import { getTodayStr } from '../utils/dateUtils'

/**
 * Hook for reading/writing user progress in Firestore.
 * Caches aggressively in local state to minimize reads.
 */
export function useProgress() {
  const { user } = useAuth()
  const [progressCache, setProgressCache] = useState({}) // dayId -> progress doc
  const [loading, setLoading] = useState(false)

  /** Get progress doc for a single day (cached) */
  const getDayProgress = useCallback(
    async (dayId) => {
      if (!user) return null
      if (progressCache[dayId]) return progressCache[dayId]
      setLoading(true)
      try {
        const ref = doc(db, 'users', user.uid, 'progress', dayId)
        const snap = await getDoc(ref)
        const data = snap.exists()
          ? snap.data()
          : {
              dayId,
              completedSubtasks: [],
              dayCompleted: false,
              quizAttempts: [],
              lastQuizAttempt: null,
            }
        setProgressCache((prev) => ({ ...prev, [dayId]: data }))
        return data
      } finally {
        setLoading(false)
      }
    },
    [user, progressCache]
  )

  /** Mark a subtask as complete */
  const completeSubtask = useCallback(
    async (dayId, subtaskId) => {
      if (!user) return
      const ref = doc(db, 'users', user.uid, 'progress', dayId)
      const current = progressCache[dayId] || {
        dayId,
        completedSubtasks: [],
        dayCompleted: false,
        quizAttempts: [],
        lastQuizAttempt: null,
      }

      if (current.completedSubtasks.includes(subtaskId)) return // already done

      const updated = {
        ...current,
        completedSubtasks: [...current.completedSubtasks, subtaskId],
      }

      await setDoc(ref, { completedSubtasks: arrayUnion(subtaskId) }, { merge: true })
      setProgressCache((prev) => ({ ...prev, [dayId]: updated }))
      return updated
    },
    [user, progressCache]
  )

  /** Unmark a subtask */
  const uncompleteSubtask = useCallback(
    async (dayId, subtaskId) => {
      if (!user) return
      const ref = doc(db, 'users', user.uid, 'progress', dayId)
      const current = progressCache[dayId] || { completedSubtasks: [] }
      const updated = {
        ...current,
        completedSubtasks: current.completedSubtasks.filter((id) => id !== subtaskId),
      }
      await setDoc(ref, { completedSubtasks: updated.completedSubtasks }, { merge: true })
      setProgressCache((prev) => ({ ...prev, [dayId]: updated }))
      return updated
    },
    [user, progressCache]
  )

  /** Mark a day as fully complete */
  const completeDay = useCallback(
    async (dayId) => {
      if (!user) return
      const ref = doc(db, 'users', user.uid, 'progress', dayId)
      const userRef = doc(db, 'users', user.uid)
      await setDoc(ref, { dayCompleted: true, completedAt: serverTimestamp() }, { merge: true })
      await setDoc(userRef, { lastActiveDate: getTodayStr() }, { merge: true })
      setProgressCache((prev) => ({
        ...prev,
        [dayId]: { ...(prev[dayId] || {}), dayCompleted: true },
      }))
    },
    [user]
  )

  /** Save a quiz attempt */
  const saveQuizAttempt = useCallback(
    async (dayId, { score, total, answers, passed, weakAreas }) => {
      if (!user) return
      const ref = doc(db, 'users', user.uid, 'progress', dayId)
      const attempt = {
        attemptedAt: Date.now(),
        score,
        total,
        percentage: Math.round((score / total) * 100),
        answers,
        passed,
        weakAreas: weakAreas || [],
      }
      const current = progressCache[dayId] || { quizAttempts: [] }
      const updated = {
        ...current,
        quizAttempts: [...(current.quizAttempts || []), attempt],
        lastQuizAttempt: attempt.attemptedAt,
        bestQuizScore: Math.max(
          current.bestQuizScore || 0,
          attempt.percentage
        ),
      }
      await setDoc(
        ref,
        {
          quizAttempts: updated.quizAttempts,
          lastQuizAttempt: attempt.attemptedAt,
          bestQuizScore: updated.bestQuizScore,
        },
        { merge: true }
      )
      setProgressCache((prev) => ({ ...prev, [dayId]: updated }))

      // If passed, mark day complete
      if (passed) await completeDay(dayId)
      return attempt
    },
    [user, progressCache, completeDay]
  )

  /** Load all progress (for dashboard/analytics) */
  const loadAllProgress = useCallback(async () => {
    if (!user) return {}
    try {
      const colRef = collection(db, 'users', user.uid, 'progress')
      const snap = await getDocs(colRef)
      const all = {}
      snap.forEach((d) => {
        all[d.id] = d.data()
      })
      setProgressCache(all)
      return all
    } catch {
      return {}
    }
  }, [user])

  /** Preload progress for a range of dayIds */
  const preloadDays = useCallback(
    async (dayIds) => {
      if (!user) return
      const missing = dayIds.filter((id) => !progressCache[id])
      if (!missing.length) return
      const results = await Promise.all(
        missing.map(async (id) => {
          const snap = await getDoc(doc(db, 'users', user.uid, 'progress', id))
          return [
            id,
            snap.exists()
              ? snap.data()
              : { dayId: id, completedSubtasks: [], dayCompleted: false, quizAttempts: [], lastQuizAttempt: null },
          ]
        })
      )
      const entries = Object.fromEntries(results)
      setProgressCache((prev) => ({ ...prev, ...entries }))
    },
    [user, progressCache]
  )

  return {
    progressCache,
    loading,
    getDayProgress,
    completeSubtask,
    uncompleteSubtask,
    completeDay,
    saveQuizAttempt,
    loadAllProgress,
    preloadDays,
  }
}
