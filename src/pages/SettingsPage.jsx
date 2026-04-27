import { motion } from 'framer-motion'
import { useAuth } from '../contexts/AuthContext'
import { useTheme } from '../contexts/ThemeContext'

const THEMES = [
  { id: 'shadow',  label: 'Shadow',  color: '#7c6aff', desc: 'Purple-indigo dark'  },
  { id: 'arise',   label: 'Arise',   color: '#f59e0b', desc: 'Golden amber dark'   },
  { id: 'hunter',  label: 'Hunter',  color: '#10b981', desc: 'Teal emerald dark'   },
  { id: 'crimson', label: 'Crimson', color: '#ef4444', desc: 'Red crimson dark'    },
]

export default function SettingsPage() {
  const { profile, user, logout, updateTheme } = useAuth()
  const { theme, changeTheme } = useTheme()

  async function handleTheme(id) {
    changeTheme(id)
    await updateTheme(id)
  }

  return (
    <div className="max-w-xl mx-auto px-4 py-8">
      <motion.h1
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl font-bold mb-6"
        style={{ color: 'var(--color-text)' }}
      >
        Settings
      </motion.h1>

      {/* Profile */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.05 }}
        className="rounded-xl p-5 mb-5"
        style={{ backgroundColor: 'var(--color-bg-card)', border: '1px solid var(--color-border)' }}
      >
        <h2 className="text-sm font-semibold mb-3" style={{ color: 'var(--color-text-muted)' }}>
          ACCOUNT
        </h2>
        <p className="font-medium mb-1" style={{ color: 'var(--color-text)' }}>
          {profile?.name || user?.displayName || 'User'}
        </p>
        <p className="text-sm mb-1" style={{ color: 'var(--color-text-muted)' }}>
          {profile?.username ? `@${profile.username}` : ''}
        </p>
        <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
          {user?.email}
        </p>
      </motion.div>

      {/* Theme */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="rounded-xl p-5 mb-5"
        style={{ backgroundColor: 'var(--color-bg-card)', border: '1px solid var(--color-border)' }}
      >
        <h2 className="text-sm font-semibold mb-3" style={{ color: 'var(--color-text-muted)' }}>
          THEME
        </h2>
        <div className="grid grid-cols-2 gap-3">
          {THEMES.map((t) => (
            <button
              key={t.id}
              onClick={() => handleTheme(t.id)}
              className="flex items-center gap-3 p-3 rounded-xl text-left transition-all"
              style={{
                border: theme === t.id
                  ? `2px solid ${t.color}`
                  : '2px solid var(--color-border)',
                backgroundColor: theme === t.id ? t.color + '11' : 'transparent',
              }}
            >
              <div
                className="w-6 h-6 rounded-full flex-shrink-0"
                style={{ backgroundColor: t.color }}
              />
              <div>
                <p className="text-sm font-medium" style={{ color: 'var(--color-text)' }}>
                  {t.label}
                </p>
                <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
                  {t.desc}
                </p>
              </div>
            </button>
          ))}
        </div>
      </motion.div>

      {/* Logout */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.15 }}
      >
        <button
          onClick={logout}
          className="w-full py-3 rounded-xl text-sm font-medium"
          style={{ backgroundColor: '#ef444422', color: '#ef4444', border: '1px solid #ef444444' }}
        >
          Sign Out
        </button>
      </motion.div>
    </div>
  )
}
