import { createContext, useContext, useEffect, useState } from 'react'
import { useAuth } from './AuthContext'

export const THEMES = {
  shadow: {
    id: 'shadow',
    name: 'Shadow Monarch',
    description: 'Deep purple dominance',
    accent: '#7c6aff',
    accentHover: '#9a8bff',
    accentGlow: 'rgba(124, 106, 255, 0.4)',
    bg: '#070712',
    bgCard: '#0f0f23',
    bgCardHover: '#141430',
    bgSurface: '#1a1a3e',
    border: 'rgba(124, 106, 255, 0.2)',
    borderHover: 'rgba(124, 106, 255, 0.5)',
    text: '#e8e8ff',
    textMuted: '#7878aa',
    textSecondary: '#a0a0cc',
    gradient: 'linear-gradient(135deg, #7c6aff 0%, #4a3fff 100%)',
    gradientBg: 'linear-gradient(135deg, #07071200 0%, #0f0f2380 100%)',
    preview: ['#7c6aff', '#4a3fff', '#070712'],
  },
  arise: {
    id: 'arise',
    name: 'Arise',
    description: 'Monarch\'s gold dominion',
    accent: '#f59e0b',
    accentHover: '#fbbf24',
    accentGlow: 'rgba(245, 158, 11, 0.4)',
    bg: '#080604',
    bgCard: '#18140a',
    bgCardHover: '#221c0e',
    bgSurface: '#2a2010',
    border: 'rgba(245, 158, 11, 0.2)',
    borderHover: 'rgba(245, 158, 11, 0.5)',
    text: '#fff8e8',
    textMuted: '#a08040',
    textSecondary: '#c0a060',
    gradient: 'linear-gradient(135deg, #f59e0b 0%, #b45309 100%)',
    gradientBg: 'linear-gradient(135deg, #08060400 0%, #18140a80 100%)',
    preview: ['#f59e0b', '#b45309', '#080604'],
  },
  hunter: {
    id: 'hunter',
    name: "Hunter's Path",
    description: 'Teal dungeon conquest',
    accent: '#06b6d4',
    accentHover: '#22d3ee',
    accentGlow: 'rgba(6, 182, 212, 0.4)',
    bg: '#030f12',
    bgCard: '#071820',
    bgCardHover: '#0c2030',
    bgSurface: '#0f2a3a',
    border: 'rgba(6, 182, 212, 0.2)',
    borderHover: 'rgba(6, 182, 212, 0.5)',
    text: '#e0f8ff',
    textMuted: '#407080',
    textSecondary: '#60a0b0',
    gradient: 'linear-gradient(135deg, #06b6d4 0%, #0369a1 100%)',
    gradientBg: 'linear-gradient(135deg, #030f1200 0%, #07182080 100%)',
    preview: ['#06b6d4', '#0369a1', '#030f12'],
  },
  crimson: {
    id: 'crimson',
    name: 'Crimson Dungeon',
    description: 'Blood-red warrior spirit',
    accent: '#ef4444',
    accentHover: '#f87171',
    accentGlow: 'rgba(239, 68, 68, 0.4)',
    bg: '#0d0404',
    bgCard: '#1a0808',
    bgCardHover: '#240c0c',
    bgSurface: '#2e1010',
    border: 'rgba(239, 68, 68, 0.2)',
    borderHover: 'rgba(239, 68, 68, 0.5)',
    text: '#ffe8e8',
    textMuted: '#804040',
    textSecondary: '#c06060',
    gradient: 'linear-gradient(135deg, #ef4444 0%, #991b1b 100%)',
    gradientBg: 'linear-gradient(135deg, #0d040400 0%, #1a080880 100%)',
    preview: ['#ef4444', '#991b1b', '#0d0404'],
  },
}

const ThemeContext = createContext(null)

export function ThemeProvider({ children }) {
  const { profile, updateTheme } = useAuth()
  const [themeId, setThemeId] = useState('shadow')

  // Sync theme with user profile
  useEffect(() => {
    if (profile?.theme && THEMES[profile.theme]) {
      setThemeId(profile.theme)
    }
  }, [profile?.theme])

  // Apply CSS variables to :root
  useEffect(() => {
    const t = THEMES[themeId] || THEMES.shadow
    const root = document.documentElement
    root.style.setProperty('--color-accent', t.accent)
    root.style.setProperty('--color-accent-hover', t.accentHover)
    root.style.setProperty('--color-accent-glow', t.accentGlow)
    root.style.setProperty('--color-bg', t.bg)
    root.style.setProperty('--color-card', t.bgCard)
    root.style.setProperty('--color-card-hover', t.bgCardHover)
    root.style.setProperty('--color-surface', t.bgSurface)
    root.style.setProperty('--color-border', t.border)
    root.style.setProperty('--color-border-hover', t.borderHover)
    root.style.setProperty('--color-text', t.text)
    root.style.setProperty('--color-text-muted', t.textMuted)
    root.style.setProperty('--color-text-secondary', t.textSecondary)
    root.style.setProperty('--gradient-accent', t.gradient)
    document.body.style.background = t.bg
    document.body.style.color = t.text
  }, [themeId])

  async function changeTheme(id) {
    if (!THEMES[id]) return
    setThemeId(id)
    try {
      await updateTheme(id)
    } catch {
      // non-critical
    }
  }

  return (
    <ThemeContext.Provider value={{ themeId, theme: THEMES[themeId], changeTheme, themes: THEMES }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used inside ThemeProvider')
  return ctx
}
