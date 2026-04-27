import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import { useTheme } from '../../contexts/ThemeContext'

const NAV_LINKS = [
  { path: '/dashboard', label: 'Dashboard' },
  { path: '/roadmap',   label: 'Roadmap'   },
  { path: '/analytics', label: 'Analytics' },
  { path: '/settings',  label: 'Settings'  },
]

const THEME_COLORS = {
  shadow:  '#7c6aff',
  arise:   '#f59e0b',
  hunter:  '#10b981',
  crimson: '#ef4444',
}

const THEMES = ['shadow', 'arise', 'hunter', 'crimson']

export default function Navbar() {
  const { user, logout } = useAuth()
  const { theme, changeTheme } = useTheme()
  const navigate  = useNavigate()
  const location  = useLocation()
  const [open, setOpen] = useState(false)

  const handleNav = (path) => {
    navigate(path)
    setOpen(false)
  }

  return (
    <nav
      style={{
        backgroundColor: 'var(--color-bg-card)',
        borderBottom: '1px solid var(--color-border)',
        color: 'var(--color-text)',
        position: 'sticky',
        top: 0,
        zIndex: 50,
      }}
    >
      {/* ── Main bar ── */}
      <div className="px-4 py-3 flex items-center justify-between">

        {/* Logo */}
        <div
          className="font-bold text-base cursor-pointer tracking-tight"
          style={{ color: 'var(--color-accent)' }}
          onClick={() => handleNav('/dashboard')}
        >
          ⚡ SSC CGL 2026
        </div>

        {/* Desktop nav links */}
        <div className="hidden md:flex gap-5">
          {NAV_LINKS.map(({ path, label }) => (
            <button
              key={path}
              onClick={() => handleNav(path)}
              className="text-sm hover:opacity-80 transition-opacity"
              style={{
                color: location.pathname === path ? 'var(--color-accent)' : 'var(--color-text-muted)',
                fontWeight: location.pathname === path ? '600' : '400',
                borderBottom: location.pathname === path ? '2px solid var(--color-accent)' : '2px solid transparent',
                paddingBottom: '2px',
              }}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Right: theme dots + logout (desktop) + hamburger (mobile) */}
        <div className="flex items-center gap-3">

          {/* Theme dots — desktop only */}
          <div className="hidden md:flex gap-1.5">
            {THEMES.map((t) => (
              <button
                key={t}
                onClick={() => changeTheme(t)}
                title={t}
                className="w-5 h-5 rounded-full border-2 transition-transform hover:scale-125"
                style={{
                  backgroundColor: THEME_COLORS[t],
                  borderColor: theme === t ? 'var(--color-text)' : 'transparent',
                }}
              />
            ))}
          </div>

          {/* Desktop logout */}
          {user && (
            <button
              onClick={logout}
              className="hidden md:block text-xs px-3 py-1.5 rounded-lg transition-opacity hover:opacity-70"
              style={{
                backgroundColor: 'var(--color-border)',
                color: 'var(--color-text-muted)',
              }}
            >
              Logout
            </button>
          )}

          {/* Hamburger — mobile only */}
          <button
            className="md:hidden p-2 rounded-lg"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            style={{ backgroundColor: open ? 'var(--color-border)' : 'transparent' }}
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <span
                className="block h-0.5 rounded-full transition-all duration-200 origin-left"
                style={{
                  backgroundColor: 'var(--color-text)',
                  transform: open ? 'rotate(40deg)' : 'none',
                  width: open ? '22px' : '20px',
                }}
              />
              <span
                className="block w-5 h-0.5 rounded-full transition-all duration-200"
                style={{
                  backgroundColor: 'var(--color-text)',
                  opacity: open ? 0 : 1,
                  transform: open ? 'scaleX(0)' : 'scaleX(1)',
                }}
              />
              <span
                className="block h-0.5 rounded-full transition-all duration-200 origin-left"
                style={{
                  backgroundColor: 'var(--color-text)',
                  transform: open ? 'rotate(-40deg)' : 'none',
                  width: open ? '22px' : '14px',
                }}
              />
            </div>
          </button>
        </div>
      </div>

      {/* ── Mobile drawer ── */}
      {open && (
        <div
          className="md:hidden flex flex-col border-t"
          style={{
            borderColor: 'var(--color-border)',
            backgroundColor: 'var(--color-bg-card)',
          }}
        >
          {/* Nav links */}
          <div className="px-4 pt-2 pb-1 flex flex-col">
            {NAV_LINKS.map(({ path, label }) => (
              <button
                key={path}
                onClick={() => handleNav(path)}
                className="flex items-center gap-3 text-sm py-3 border-b text-left transition-opacity hover:opacity-70"
                style={{
                  color: location.pathname === path ? 'var(--color-accent)' : 'var(--color-text)',
                  fontWeight: location.pathname === path ? '600' : '400',
                  borderColor: 'var(--color-border)',
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{
                    backgroundColor: location.pathname === path ? 'var(--color-accent)' : 'transparent',
                    border: location.pathname === path ? 'none' : '1px solid var(--color-border)',
                  }}
                />
                {label}
              </button>
            ))}
          </div>

          {/* Theme switcher */}
          <div
            className="px-4 py-3 flex items-center gap-3 border-t"
            style={{ borderColor: 'var(--color-border)' }}
          >
            <span className="text-xs flex-shrink-0" style={{ color: 'var(--color-text-muted)' }}>
              Theme
            </span>
            <div className="flex gap-2 flex-1">
              {THEMES.map((t) => (
                <button
                  key={t}
                  onClick={() => { changeTheme(t); setOpen(false) }}
                  title={t}
                  className="flex-1 h-8 rounded-lg border-2 transition-all hover:scale-105 capitalize text-xs font-medium"
                  style={{
                    backgroundColor: THEME_COLORS[t] + '22',
                    borderColor: theme === t ? THEME_COLORS[t] : 'transparent',
                    color: THEME_COLORS[t],
                  }}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Logout */}
          {user && (
            <div
              className="px-4 py-3 border-t"
              style={{ borderColor: 'var(--color-border)' }}
            >
              <button
                onClick={() => { logout(); setOpen(false) }}
                className="w-full text-sm px-4 py-2.5 rounded-xl text-center transition-opacity hover:opacity-70"
                style={{
                  backgroundColor: 'rgba(239,68,68,0.1)',
                  color: '#ef4444',
                  border: '1px solid rgba(239,68,68,0.2)',
                }}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      )}
    </nav>
  )
}
