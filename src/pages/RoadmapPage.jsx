import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { STUDY_PHASES, STUDY_DAYS } from '../data/studyPlan/index'
import { useProgress } from '../hooks/useProgress'

const PHASE_COLORS = {
  1: '#7c6aff', 2: '#f59e0b', 3: '#ef4444',
  4: '#06b6d4', 5: '#8b5cf6', 6: '#10b981',
}

/* ─── SubtaskRow ─── same pattern as Dashboard */
function SubtaskRow({ subtask, done, onToggle }) {
  const [saving, setSaving] = useState(false)
  const [flash, setFlash]   = useState(false)

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
          {subtask.mandatory === false && (
            <span className="ml-1.5 text-xs opacity-60">(optional)</span>
          )}
        </p>
        {subtask.estimatedMins > 0 && (
          <p className="text-xs mt-0.5" style={{ color: 'var(--color-text-muted)' }}>
            {subtask.estimatedMins} min
          </p>
        )}
      </div>

      {/* Status badge */}
      {flash && (
        <span
          className="flex-shrink-0 text-xs px-1.5 py-0.5 rounded-full animate-pulse"
          style={{ backgroundColor: 'rgba(16,185,129,0.2)', color: '#10b981' }}
        >
          Saved
        </span>
      )}
      {!flash && done && (
        <span
          className="flex-shrink-0 text-xs px-1.5 py-0.5 rounded-full"
          style={{ backgroundColor: 'rgba(16,185,129,0.15)', color: '#10b981' }}
        >
          ✓
        </span>
      )}
    </button>
  )
}

/* ─── DayQuickView ─── shown when a day is selected from the grid */
function DayQuickView({ day, progressCache, completeSubtask, uncompleteSubtask, onBack, onOpenFull }) {
  const today        = new Date().toISOString().split('T')[0]
  const phaseColor   = PHASE_COLORS[day.phase] || 'var(--color-accent)'
  const dayProgress  = progressCache[day.id] || { completedSubtasks: [] }
  const completedIds = dayProgress.completedSubtasks || []
  const totalSubs    = day.tasks?.reduce((n, t) => n + (t.subtasks?.length || 0), 0) || 0
  const doneSubs     = completedIds.length
  const pct          = totalSubs > 0 ? Math.round((doneSubs / totalSubs) * 100) : 0
  const isPast       = day.date < today
  const isToday      = day.date === today

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.2 }}
      className="flex flex-col gap-4"
    >
      {/* Back */}
      <button
        onClick={onBack}
        className="flex items-center gap-1.5 text-sm self-start"
        style={{ color: 'var(--color-text-muted)' }}
      >
        ← Back to Roadmap
      </button>

      {/* Day header */}
      <div
        className="rounded-2xl p-5"
        style={{
          backgroundColor: 'var(--color-bg-card)',
          border: `2px solid ${isToday ? phaseColor : 'var(--color-border)'}`,
        }}
      >
        <div className="flex items-start justify-between gap-3 mb-4">
          <div>
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <span
                className="text-xs font-bold px-2 py-0.5 rounded-full"
                style={{ backgroundColor: phaseColor + '22', color: phaseColor }}
              >
                DAY {day.dayNumber}
              </span>
              {isToday && (
                <span
                  className="text-xs px-2 py-0.5 rounded-full font-semibold"
                  style={{ backgroundColor: phaseColor, color: '#fff' }}
                >
                  TODAY
                </span>
              )}
              {isPast && !isToday && (
                <span
                  className="text-xs px-2 py-0.5 rounded-full"
                  style={{ backgroundColor: 'rgba(16,185,129,0.15)', color: '#10b981' }}
                >
                  PAST
                </span>
              )}
              {!isPast && !isToday && (
                <span
                  className="text-xs px-2 py-0.5 rounded-full"
                  style={{ backgroundColor: 'var(--color-border)', color: 'var(--color-text-muted)' }}
                >
                  UPCOMING
                </span>
              )}
            </div>
            <h2 className="font-bold text-base leading-snug" style={{ color: 'var(--color-text)' }}>
              {day.title}
            </h2>
            <p className="text-xs mt-1" style={{ color: 'var(--color-text-muted)' }}>
              {day.date} · {day.totalHours}h · Phase {day.phase} · {day.weekType}
            </p>
          </div>
          <span className="text-xl flex-shrink-0">{day.tier === 1 ? '⚡' : '🏛️'}</span>
        </div>

        {/* Progress bar */}
        <div className="flex items-center gap-2 mb-5">
          <div
            className="flex-1 h-1.5 rounded-full overflow-hidden"
            style={{ backgroundColor: 'var(--color-border)' }}
          >
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{
                width: `${pct}%`,
                backgroundColor: pct === 100 ? '#10b981' : phaseColor,
              }}
            />
          </div>
          <span
            className="text-xs font-semibold flex-shrink-0"
            style={{ color: pct === 100 ? '#10b981' : phaseColor }}
          >
            {doneSubs}/{totalSubs}
          </span>
        </div>

        {/* Task blocks with subtask checkboxes */}
        <div className="flex flex-col gap-5">
          {day.tasks?.map((block) => (
            <div key={block.id}>
              {/* Block header */}
              <div
                className="flex items-center gap-2 px-3 py-2 rounded-xl mb-2"
                style={{ backgroundColor: (block.color || phaseColor) + '18' }}
              >
                <span className="text-base">{block.icon}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold" style={{ color: 'var(--color-text)' }}>
                    {block.subject}
                  </p>
                  <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
                    {block.duration} min
                  </p>
                </div>
                {/* Block completion count */}
                {block.subtasks?.length > 0 && (
                  <span className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
                    {block.subtasks.filter(s => completedIds.includes(s.id)).length}/{block.subtasks.length}
                  </span>
                )}
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
        </div>

        {/* Open full detail */}
        <button
          onClick={onOpenFull}
          className="mt-5 w-full py-2.5 rounded-xl text-sm font-medium transition-opacity hover:opacity-80"
          style={{ backgroundColor: phaseColor + '22', color: phaseColor }}
        >
          Open full day view →
        </button>
      </div>
    </motion.div>
  )
}

/* ─── RoadmapPage ─── */
export default function RoadmapPage() {
  const navigate     = useNavigate()
  const today        = new Date().toISOString().split('T')[0]
  const [selectedDay, setSelectedDay] = useState(null)
  const { progressCache, loadAllProgress, preloadDays, completeSubtask, uncompleteSubtask } = useProgress()

  // Load all progress once on mount so grid completion dots are accurate
  useEffect(() => {
    loadAllProgress()
  }, []) // eslint-disable-line

  // When a day is selected, ensure its progress is in cache
  useEffect(() => {
    if (selectedDay) preloadDays([selectedDay.id])
  }, [selectedDay?.id]) // eslint-disable-line

  /* ── Day Quick View ── */
  if (selectedDay) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-8">
        <AnimatePresence mode="wait">
          <DayQuickView
            key={selectedDay.id}
            day={selectedDay}
            progressCache={progressCache}
            completeSubtask={completeSubtask}
            uncompleteSubtask={uncompleteSubtask}
            onBack={() => setSelectedDay(null)}
            onOpenFull={() => navigate(`/day/${selectedDay.id}`)}
          />
        </AnimatePresence>
      </div>
    )
  }

  /* ── Phase overview ── */
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <motion.h1
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl font-bold mb-2"
        style={{ color: 'var(--color-text)' }}
      >
        Study Roadmap
      </motion.h1>
      <p className="text-sm mb-8" style={{ color: 'var(--color-text-muted)' }}>
        138 days · 6 phases · Tier 1 (Jun 25) → Tier 2 (Sep 20)
      </p>

      <div className="flex flex-col gap-6">
        {STUDY_PHASES.map((phase, pi) => {
          const phaseDays = STUDY_DAYS.filter(d => d.phase === phase.id)
          const completed = phaseDays.filter(d => d.date < today).length
          const pct       = phaseDays.length > 0 ? Math.round((completed / phaseDays.length) * 100) : 0

          return (
            <motion.div
              key={phase.id}
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: pi * 0.08 }}
              className="rounded-2xl p-5"
              style={{ backgroundColor: 'var(--color-bg-card)', border: '1px solid var(--color-border)' }}
            >
              {/* Phase header */}
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{phase.icon}</span>
                  <div>
                    <h2 className="font-bold" style={{ color: 'var(--color-text)' }}>
                      {phase.name}
                    </h2>
                    <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
                      {phase.startDate} → {phase.endDate} · Days {phase.days[0]}–{phase.days[1]}
                    </p>
                  </div>
                </div>
                <span
                  className="text-xs font-semibold px-3 py-1 rounded-full flex-shrink-0"
                  style={{ backgroundColor: phase.color + '22', color: phase.color }}
                >
                  Tier {phase.tier}
                </span>
              </div>

              {/* Progress bar */}
              <div
                className="h-1.5 rounded-full mb-3"
                style={{ backgroundColor: 'var(--color-border)' }}
              >
                <div
                  className="h-full rounded-full transition-all"
                  style={{ width: `${pct}%`, backgroundColor: phase.color }}
                />
              </div>
              <p className="text-xs mb-3" style={{ color: 'var(--color-text-muted)' }}>
                {completed}/{phaseDays.length} days done · {pct}%
              </p>

              {/* Description */}
              <p className="text-xs mb-3" style={{ color: 'var(--color-text-muted)' }}>
                {phase.description}
              </p>

              {/* Days grid — all days, click to open quick view */}
              <div className="flex flex-wrap gap-1.5">
                {phaseDays.map((day) => {
                  const prog      = progressCache[day.id]
                  const doneSubs  = prog?.completedSubtasks?.length || 0
                  const totalSubs = day.tasks?.reduce((n, t) => n + (t.subtasks?.length || 0), 0) || 0
                  const allDone   = totalSubs > 0 && doneSubs === totalSubs
                  const isToday   = day.date === today
                  const isPast    = day.date < today

                  return (
                    <button
                      key={day.id}
                      onClick={() => setSelectedDay(day)}
                      title={`Day ${day.dayNumber}: ${day.title}`}
                      className="w-7 h-7 rounded text-xs font-medium transition-transform hover:scale-110"
                      style={{
                        backgroundColor:
                          isToday ? phase.color :
                          isPast  ? phase.color + '55' :
                                    'var(--color-border)',
                        color: day.date <= today ? '#fff' : 'var(--color-text-muted)',
                        outline: allDone ? '2px solid #10b981' : 'none',
                        outlineOffset: '1px',
                      }}
                    >
                      {day.dayNumber}
                    </button>
                  )
                })}
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
