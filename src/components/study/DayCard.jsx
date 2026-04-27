import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const PHASE_COLORS = {
  1: '#7c6aff',
  2: '#f59e0b',
  3: '#ef4444',
  4: '#06b6d4',
  5: '#8b5cf6',
  6: '#10b981',
}

const TIER_ICONS = { 1: '⚡', 2: '🏛️' }

/**
 * DayCard — clickable card summarising a study day.
 * Props:
 *   day          — study day object
 *   completedPct — 0-100 (optional, for progress ring)
 *   compact      — boolean (smaller variant)
 *   isToday      — boolean (highlights border)
 */
export default function DayCard({ day, completedPct = 0, compact = false, isToday = false }) {
  const navigate    = useNavigate()
  const phaseColor  = PHASE_COLORS[day.phase] || 'var(--color-accent)'
  const totalTasks  = day.tasks?.reduce((n, t) => n + (t.subtasks?.length || 0), 0) || 0

  return (
    <motion.div
      whileHover={{ y: -2, boxShadow: `0 8px 24px ${phaseColor}33` }}
      whileTap={{ scale: 0.98 }}
      onClick={() => navigate(`/day/${day.id}`)}
      className="cursor-pointer rounded-xl overflow-hidden"
      style={{
        backgroundColor: 'var(--color-bg-card)',
        border: isToday ? `2px solid ${phaseColor}` : '1px solid var(--color-border)',
      }}
    >
      {/* Top colour strip */}
      <div className="h-1" style={{ backgroundColor: phaseColor }} />

      <div className={compact ? 'p-3' : 'p-4'}>
        {/* Day number + tier icon */}
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <span
              className="text-xs font-bold px-2 py-0.5 rounded-full"
              style={{ backgroundColor: phaseColor + '22', color: phaseColor }}
            >
              Day {day.dayNumber}
            </span>
            {isToday && (
              <span
                className="text-xs px-2 py-0.5 rounded-full font-medium"
                style={{ backgroundColor: phaseColor, color: '#fff' }}
              >
                TODAY
              </span>
            )}
          </div>
          <span className="text-base">{TIER_ICONS[day.tier] || '📚'}</span>
        </div>

        {/* Title */}
        <p
          className={`font-semibold leading-snug mb-1 ${compact ? 'text-xs' : 'text-sm'}`}
          style={{ color: 'var(--color-text)' }}
        >
          {compact ? day.title.replace(/^Day \d+ — /, '') : day.title}
        </p>

        {/* Meta */}
        <p className="text-xs mb-3" style={{ color: 'var(--color-text-muted)' }}>
          {day.date} · {day.totalHours}h · {totalTasks} tasks
          {day.hasQuiz && ' · 📝 quiz'}
        </p>

        {/* Progress bar */}
        {completedPct > 0 && (
          <div>
            <div
              className="h-1 rounded-full mb-1"
              style={{ backgroundColor: 'var(--color-border)' }}
            >
              <div
                className="h-full rounded-full transition-all"
                style={{ width: `${completedPct}%`, backgroundColor: phaseColor }}
              />
            </div>
            <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
              {completedPct}% complete
            </p>
          </div>
        )}
      </div>
    </motion.div>
  )
}
