import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useAuth } from '../contexts/AuthContext'

// Maps Firebase Auth error codes to friendly messages
function friendlyError(err) {
  const code = err?.code || ''
  if (code === 'auth/email-already-in-use')   return 'This email is already registered. Sign in instead.'
  if (code === 'auth/invalid-email')           return 'Invalid email address.'
  if (code === 'auth/weak-password')           return 'Password must be at least 6 characters.'
  if (code === 'auth/user-not-found')          return 'No account found with this email.'
  if (code === 'auth/wrong-password')          return 'Incorrect password.'
  if (code === 'auth/invalid-credential')      return 'Incorrect email or password.'
  if (code === 'auth/too-many-requests')       return 'Too many attempts. Try again later.'
  if (code === 'auth/configuration-not-found') return 'Firebase Auth not configured — see setup instructions below.'
  if (code === 'auth/network-request-failed')  return 'Network error. Check your connection.'
  return err?.message || 'Something went wrong.'
}

const INPUT_STYLE = {
  backgroundColor: 'var(--color-bg)',
  border: '1px solid var(--color-border)',
  color: 'var(--color-text)',
}

export default function AuthPage() {
  const { login, register }   = useAuth()
  const [mode, setMode]       = useState('login')
  const [form, setForm]       = useState({ name: '', email: '', username: '', password: '' })
  const [error, setError]     = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState('')

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  function switchMode(m) {
    setMode(m)
    setError('')
    setSuccess('')
    setForm({ name: '', email: '', username: '', password: '' })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    setSuccess('')

    // Basic client-side validation
    if (mode === 'register') {
      if (!form.name.trim())             return setError('Full name is required.')
      if (!form.email.includes('@'))     return setError('Enter a valid email.')
      if (form.username.trim().length < 3) return setError('Username must be at least 3 characters.')
      if (/\s/.test(form.username))      return setError('Username cannot contain spaces.')
      if (form.password.length < 6)      return setError('Password must be at least 6 characters.')
    } else {
      if (!form.email.trim())            return setError('Email or username is required.')
      if (!form.password)                return setError('Password is required.')
    }

    setLoading(true)
    try {
      if (mode === 'login') {
        await login(form.email.trim(), form.password)
      } else {
        await register(form.name.trim(), form.email.trim(), form.username.trim(), form.password)
        setSuccess('Account created! Redirecting…')
      }
    } catch (err) {
      setError(friendlyError(err))
    } finally {
      setLoading(false)
    }
  }

  const showSetupHint = error.includes('Auth not configured')

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4"
      style={{ backgroundColor: 'var(--color-bg)' }}
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        {/* Card */}
        <div
          className="rounded-2xl p-8"
          style={{ backgroundColor: 'var(--color-bg-card)', border: '1px solid var(--color-border)' }}
        >
          {/* Header */}
          <div className="text-center mb-8">
            <div className="text-4xl mb-2">🎯</div>
            <h1 className="text-2xl font-bold" style={{ color: 'var(--color-accent)' }}>
              SSC CGL 2026
            </h1>
            <p className="text-sm mt-1" style={{ color: 'var(--color-text-muted)' }}>
              Your 138-day study tracker
            </p>
          </div>

          {/* Mode toggle */}
          <div className="flex rounded-lg p-1 mb-6" style={{ backgroundColor: 'var(--color-bg)' }}>
            {[['login', 'Sign In'], ['register', 'Sign Up']].map(([m, label]) => (
              <button
                key={m}
                onClick={() => switchMode(m)}
                className="flex-1 py-2 rounded-md text-sm font-medium transition-all"
                style={{
                  backgroundColor: mode === m ? 'var(--color-accent)' : 'transparent',
                  color: mode === m ? '#fff' : 'var(--color-text-muted)',
                }}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <AnimatePresence>
              {mode === 'register' && (
                <motion.input
                  key="name"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  type="text"
                  placeholder="Full Name"
                  value={form.name}
                  onChange={set('name')}
                  className="rounded-lg px-4 py-3 text-sm outline-none w-full"
                  style={INPUT_STYLE}
                />
              )}
            </AnimatePresence>

            <input
              type="text"
              placeholder={mode === 'register' ? 'Email address' : 'Email address'}
              value={form.email}
              onChange={set('email')}
              autoComplete="email"
              className="rounded-lg px-4 py-3 text-sm outline-none"
              style={INPUT_STYLE}
            />

            <AnimatePresence>
              {mode === 'register' && (
                <motion.input
                  key="username"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  type="text"
                  placeholder="Username (e.g. aaryan)"
                  value={form.username}
                  onChange={set('username')}
                  className="rounded-lg px-4 py-3 text-sm outline-none w-full"
                  style={INPUT_STYLE}
                />
              )}
            </AnimatePresence>

            <input
              type="password"
              placeholder="Password"
              value={form.password}
              onChange={set('password')}
              autoComplete={mode === 'login' ? 'current-password' : 'new-password'}
              className="rounded-lg px-4 py-3 text-sm outline-none"
              style={INPUT_STYLE}
            />

            {/* Error */}
            <AnimatePresence>
              {error && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-sm text-center px-2"
                  style={{ color: '#ef4444' }}
                >
                  {error}
                </motion.p>
              )}
            </AnimatePresence>

            {/* Success */}
            <AnimatePresence>
              {success && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-sm text-center"
                  style={{ color: '#10b981' }}
                >
                  {success}
                </motion.p>
              )}
            </AnimatePresence>

            <button
              type="submit"
              disabled={loading}
              className="py-3 rounded-lg font-semibold text-sm mt-1 transition-opacity"
              style={{
                backgroundColor: 'var(--color-accent)',
                color: '#fff',
                opacity: loading ? 0.7 : 1,
              }}
            >
              {loading
                ? (mode === 'login' ? 'Signing in…' : 'Creating account…')
                : (mode === 'login' ? 'Sign In' : 'Create Account')}
            </button>
          </form>
        </div>

        {/* Firebase setup hint — shown only when auth/configuration-not-found */}
        <AnimatePresence>
          {showSetupHint && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 rounded-xl p-4 text-xs leading-relaxed"
              style={{ backgroundColor: '#ef444422', border: '1px solid #ef444455', color: 'var(--color-text-muted)' }}
            >
              <p className="font-semibold mb-2" style={{ color: '#ef4444' }}>Firebase Setup Required</p>
              <ol className="flex flex-col gap-1 list-decimal list-inside">
                <li>Go to <strong>console.firebase.google.com</strong></li>
                <li>Select your project → <strong>Authentication → Sign-in method</strong></li>
                <li>Enable <strong>Email/Password</strong> provider</li>
                <li>Go to <strong>Firestore Database → Rules</strong></li>
                <li>Paste rules from <code>firestore.rules</code> in the project root</li>
              </ol>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}
