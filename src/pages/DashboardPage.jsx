import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useAuth } from '../contexts/AuthContext'
import { useProgress } from '../hooks/useProgress'
import { getActiveDay, STUDY_DAYS, PLAN_STATS } from '../data/studyPlan/index'

/* ─── Stat card ─────────────────────────────────────────────── */
function StatCard({ label, value, color, icon }) {
  return (
    <div
      className="rounded-2xl p-4 flex flex-col gap-1.5"
      style={{
        backgroundColor: 'var(--color-bg-card)',
        border: '1px solid var(--color-border)',
      }}
    >
      <div className="flex items-center justify-between">
        <span className="text-2xl font-bold" style={{ color: color || 'var(--color-accent)' }}>
          {value}
        </span>
        {icon && <span className="text-xl opacity-60">{icon}</span>}
      </div>
      <span className="text-xs leading-tight" style={{ color: 'var(--color-text-muted)' }}>
        {label}
      </span>
    </div>
  )
}

/* ─── Subtask checkbox row ───────────────────────────────────── */
function SubtaskRow({ subtask, done, onToggle }) {
  const [saving, setSaving] = useState(false)
  const [flash, setFlash]   = useState(false)   // brief "Saved" flash

  const handleClick = async () => {
    setSaving(true)
    try {
      await onToggle()
      setFlash(true)
      setTimeout(() => setFlash(false), 1200)
    } finally {
      setSaving(false)
    }
  }

  return (
    <button
      onClick={handleClick}
      disabled={saving}
      className="w-full flex items-start gap-3 px-3 py-2.5 rounded-xl text-left transition-all"
      style={{
        backgroundColor: done ? 'rgba(16,185,129,0.07)' : 'rgba(255,255,255,0.02)',
        border: '1px solid',
        borderColor: done ? 'rgba(16,185,129,0.2)' : 'var(--color-border)',
        opacity: saving ? 0.7 : 1,
      }}
    >
      {/* Checkbox */}
      <div
        className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all duration-200"
        style={{
          backgroundColor: done ? '#10b981' : 'transparent',
          borderColor: saving ? 'var(--color-accent)' : done ? '#10b981' : 'var(--color-border)',
        }}
      >
        {saving ? (
          <svg className="animate-spin" width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M5 1v2M5 7v2M1 5h2M7 5h2" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        ) : done ? (
          <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
            <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ) : null}
      </div>

      {/* Text */}
      <div className="flex-1 min-w-0">
        <p
          className="text-xs font-medium leading-snug"
          style={{
            color: done ? 'var(--color-text-muted)' : 'var(--color-text)',
            textDecoration: done ? 'line-through' : 'none',
          }}
        >
          {subtask.title}
        </p>
        <p className="text-xs mt-0.5" style={{ color: 'var(--color-text-muted)' }}>
          {subtask.estimatedMins} min
          {subtask.mandatory === false && ' · optional'}
        </p>
      </div>

      {/* Status badge */}
      {flash && (
        <span className="flex-shrink-0 text-xs px-1.5 py-0.5 rounded-full animate-pulse"
          style={{ backgroundColor: 'rgba(16,185,129,0.2)', color: '#10b981' }}>
          Saved
        </span>
      )}
      {!flash && done && (
        <span className="flex-shrink-0 text-xs px-1.5 py-0.5 rounded-full"
          style={{ backgroundColor: 'rgba(16,185,129,0.15)', color: '#10b981' }}>
          ✓
        </span>
      )}
    </button>
  )
}

/* ─── Expanded task block ────────────────────────────────────── */
function ExpandedDay({ day, progressCache, completeSubtask, uncompleteSubtask, onOpenFull }) {
  const dayProgress = progressCache[day.id] || { completedSubtasks: [] }
  const completedIds = dayProgress.completedSubtasks || []

  const totalSubs = day.tasks?.reduce((n, t) => n + (t.subtasks?.length || 0), 0) || 0
  const doneSubs  = completedIds.length
  const pct       = totalSubs > 0 ? Math.round((doneSubs / totalSubs) * 100) : 0

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.22, ease: 'easeInOut' }}
      style={{ overflow: 'hidden' }}
    >
      <div className="pt-2 pb-3 px-3 flex flex-col gap-2">

        {/* Progress bar */}
        <div className="flex items-center gap-2 mb-1">
          <div
            className="flex-1 h-1.5 rounded-full overflow-hidden"
            style={{ backgroundColor: 'var(--color-border)' }}
          >
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{ width: `${pct}%`, backgroundColor: pct === 100 ? '#10b981' : 'var(--color-accent)' }}
            />
          </div>
          <span className="text-xs font-semibold flex-shrink-0" style={{ color: 'var(--color-accent)' }}>
            {doneSubs}/{totalSubs}
          </span>
        </div>

        {/* Task blocks */}
        {day.tasks?.map((block) => (
          <div key={block.id}>
            {/* Block header */}
            <div className="flex items-center gap-2 px-1 mb-1.5">
              <span className="text-base">{block.icon}</span>
              <div>
                <p className="text-xs font-semibold" style={{ color: 'var(--color-text)' }}>
                  {block.subject}
                </p>
                <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
                  {block.duration} min
                </p>
              </div>
            </div>

            {/* Subtasks */}
            <div className="flex flex-col gap-1.5">
              {block.subtasks?.map((sub) => {
                const done = completedIds.includes(sub.id)
                return (
                  <SubtaskRow
                    key={sub.id}
                    subtask={sub}
                    done={done}
                    onToggle={() =>
                      done
                        ? uncompleteSubtask(day.id, sub.id)
                        : completeSubtask(day.id, sub.id)
                    }
                  />
                )
              })}
            </div>
          </div>
        ))}

        {/* Full day link */}
        <button
          onClick={(e) => { e.stopPropagation(); onOpenFull() }}
          className="mt-1 text-xs py-2 w-full rounded-xl transition-opacity hover:opacity-70"
          style={{
            backgroundColor: 'var(--color-border)',
            color: 'var(--color-accent)',
          }}
        >
          Open full day view →
        </button>
      </div>
    </motion.div>
  )
}

/* ─── Day row ────────────────────────────────────────────────── */
function DayRow({ day, isActive, isExpanded, onToggle, progressCache, completeSubtask, uncompleteSubtask, navigate }) {
  const totalSubs = day.tasks?.reduce((n, t) => n + (t.subtasks?.length || 0), 0) || 0
  const doneSubs  = (progressCache[day.id]?.completedSubtasks || []).length
  const pct       = totalSubs > 0 ? Math.round((doneSubs / totalSubs) * 100) : 0

  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{
        backgroundColor: 'var(--color-bg-card)',
        border: `1px solid ${isExpanded ? 'var(--color-accent)' : 'var(--color-border)'}`,
        transition: 'border-color 0.2s',
      }}
    >
      {/* Clickable header */}
      <div
        onClick={onToggle}
        className="flex items-center gap-3 px-4 py-3 cursor-pointer"
      >
        {/* Day number badge */}
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold flex-shrink-0"
          style={{
            backgroundColor: isActive ? 'var(--color-accent)' : 'var(--color-border)',
            color: isActive ? '#fff' : 'var(--color-text-muted)',
          }}
        >
          {day.dayNumber}
        </div>

        {/* Title + meta */}
        <div className="flex-1 min-w-0">
          <p
            className="text-sm font-semibold leading-snug truncate"
            style={{ color: 'var(--color-text)' }}
          >
            {day.title}
          </p>
          <div className="flex items-center gap-2 mt-0.5 flex-wrap">
            <span className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
              {day.date} · {day.totalHours}h
            </span>
            {doneSubs > 0 && (
              <span
                className="text-xs px-1.5 py-0.5 rounded-full"
                style={{
                  backgroundColor: pct === 100 ? 'rgba(16,185,129,0.15)' : 'rgba(124,106,255,0.1)',
                  color: pct === 100 ? '#10b981' : 'var(--color-accent)',
                }}
              >
                {pct}%
              </span>
            )}
          </div>
        </div>

        {/* Tier badge + chevron */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <span
            className="text-xs px-2 py-0.5 rounded-full"
            style={{
              backgroundColor: day.tier === 1 ? 'rgba(124,106,255,0.12)' : 'rgba(6,182,212,0.12)',
              color: day.tier === 1 ? '#7c6aff' : '#06b6d4',
            }}
          >
            T{day.tier}
          </span>
          <svg
            width="16" height="16" viewBox="0 0 16 16" fill="none"
            style={{
              transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.2s',
              color: 'var(--color-text-muted)',
            }}
          >
            <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      {/* Expanded content */}
      <AnimatePresence>
        {isExpanded && (
          <ExpandedDay
            day={day}
            progressCache={progressCache}
            completeSubtask={completeSubtask}
            uncompleteSubtask={uncompleteSubtask}
            onOpenFull={() => navigate(`/day/${day.id}`)}
          />
        )}
      </AnimatePresence>
    </div>
  )
}

/* ─── Dashboard page ─────────────────────────────────────────── */
export default function DashboardPage() {
  const { profile } = useAuth()
  const navigate    = useNavigate()
  const { progressCache, preloadDays, completeSubtask, uncompleteSubtask } = useProgress()

  const activeDay    = getActiveDay()
  const activeDayIdx = STUDY_DAYS.findIndex(d => d.id === activeDay?.id)
  const start        = Math.max(0, activeDayIdx - 2)
  const nearby       = STUDY_DAYS.slice(start, start + 7)

  const today = new Date().toISOString().split('T')[0]
  const [expandedId, setExpandedId] = useState(activeDay?.id || null)

  // Preload progress for all visible days
  useEffect(() => {
    if (nearby.length) preloadDays(nearby.map(d => d.id))
  }, [nearby.length]) // eslint-disable-line

  const toggle = (id) => setExpandedId(prev => prev === id ? null : id)

  // Count completed days for streak display
  const completedDaysCount = Object.values(progressCache).filter(p => p.dayCompleted).length

  return (
    <div className="max-w-2xl mx-auto px-4 py-6 pb-10">

      {/* ── Greeting ── */}
      <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-xl font-bold mb-0.5" style={{ color: 'var(--color-text)' }}>
          {profile?.name ? `Hey, ${profile.name.split(' ')[0]} 👋` : 'Welcome back 👋'}
        </h1>
        <p className="text-sm mb-5" style={{ color: 'var(--color-text-muted)' }}>
          {today} · SSC CGL 2026 Prep
        </p>
      </motion.div>

      {/* ── Stats ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.08 }}
        className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-6"
      >
        <StatCard label="Total Days"   value={PLAN_STATS.totalDays} icon="📅" />
        <StatCard label="Days Done"    value={completedDaysCount}   icon="✅" color="#10b981" />
        <StatCard label="Tier 1 Days"  value={PLAN_STATS.tier1Days} icon="⚡" color="#7c6aff" />
        <StatCard label="Tier 2 Days"  value={PLAN_STATS.tier2Days} icon="🏛️" color="#06b6d4" />
      </motion.div>

      {/* ── Active day hero ── */}
      {activeDay && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12 }}
          className="rounded-2xl mb-5 overflow-hidden"
          style={{
            backgroundColor: 'var(--color-bg-card)',
            border: '2px solid var(--color-accent)',
          }}
        >
          {/* Hero header */}
          <div
            className="flex items-start justify-between gap-4 px-5 py-4 cursor-pointer"
            onClick={() => toggle(activeDay.id)}
          >
            <div>
              <p className="text-xs font-bold mb-1 tracking-wide" style={{ color: 'var(--color-accent)' }}>
                ▶ TODAY — DAY {activeDay.dayNumber}
              </p>
              <h2 className="text-base font-bold leading-snug mb-1.5" style={{ color: 'var(--color-text)' }}>
                {activeDay.title}
              </h2>
              <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
                {activeDay.totalHours}h planned · {activeDay.tasks?.length || 0} blocks
              </p>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center text-xl"
                style={{ backgroundColor: 'rgba(124,106,255,0.12)' }}
              >
                {activeDay.tier === 1 ? '⚡' : '🏛️'}
              </div>
              <svg
                width="16" height="16" viewBox="0 0 16 16" fill="none"
                style={{
                  transform: expandedId === activeDay.id ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.2s',
                  color: 'var(--color-accent)',
                }}
              >
                <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          {/* Expanded tasks */}
          <AnimatePresence>
            {expandedId === activeDay.id && (
              <ExpandedDay
                day={activeDay}
                progressCache={progressCache}
                completeSubtask={completeSubtask}
                uncompleteSubtask={uncompleteSubtask}
                onOpenFull={() => navigate(`/day/${activeDay.id}`)}
              />
            )}
          </AnimatePresence>
        </motion.div>
      )}

      {/* ── Schedule ── */}
      <div>
        <h3
          className="text-xs font-bold mb-3 tracking-widest"
          style={{ color: 'var(--color-text-muted)' }}
        >
          STUDY SCHEDULE
        </h3>
        <div className="flex flex-col gap-2">
          {nearby.map((day, i) => {
            const isActive = day.id === activeDay?.id
            if (isActive) return null // already shown above
            return (
              <motion.div
                key={day.id}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.18 + i * 0.04 }}
              >
                <DayRow
                  day={day}
                  isActive={false}
                  isExpanded={expandedId === day.id}
                  onToggle={() => toggle(day.id)}
                  progressCache={progressCache}
                  completeSubtask={completeSubtask}
                  uncompleteSubtask={uncompleteSubtask}
                  navigate={navigate}
                />
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
