import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getDayById, getAdjacentDays } from '../data/studyPlan/index'

function TaskBlock({ task }) {
  return (
    <div
      className="rounded-xl overflow-hidden mb-4"
      style={{ border: '1px solid var(--color-border)' }}
    >
      {/* Block header */}
      <div
        className="flex items-center gap-3 px-4 py-3"
        style={{ backgroundColor: task.color + '22', borderBottom: '1px solid var(--color-border)' }}
      >
        <span className="text-lg">{task.icon}</span>
        <div>
          <p className="font-semibold text-sm" style={{ color: 'var(--color-text)' }}>
            {task.title}
          </p>
          <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
            {task.subject} · {task.duration} min
          </p>
        </div>
      </div>

      {/* Subtasks */}
      <div className="divide-y" style={{ borderColor: 'var(--color-border)' }}>
        {(task.subtasks || []).map((sub) => (
          <div key={sub.id} className="px-4 py-3">
            <p className="text-sm font-medium mb-1" style={{ color: 'var(--color-text)' }}>
              {sub.title}
              {sub.mandatory === false && (
                <span className="ml-2 text-xs px-2 py-0.5 rounded-full" style={{
                  backgroundColor: 'var(--color-border)',
                  color: 'var(--color-text-muted)',
                }}>optional</span>
              )}
            </p>
            <p className="text-xs mb-2" style={{ color: 'var(--color-text-muted)' }}>
              {sub.description}
            </p>
            {sub.tip && (
              <div
                className="text-xs px-3 py-2 rounded-lg"
                style={{ backgroundColor: 'rgba(124,106,255,0.08)', color: 'var(--color-text-muted)' }}
              >
                💡 {sub.tip}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function DayDetailPage() {
  const { dateId }  = useParams()
  const navigate    = useNavigate()
  const day         = getDayById(dateId)
  const { prev, next } = day ? getAdjacentDays(dateId) : { prev: null, next: null }

  if (!day) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 text-center">
        <p className="text-6xl mb-4">📅</p>
        <h2 className="text-xl font-bold mb-2" style={{ color: 'var(--color-text)' }}>
          Day not found
        </h2>
        <p className="text-sm mb-6" style={{ color: 'var(--color-text-muted)' }}>
          No study plan data for {dateId}
        </p>
        <button
          onClick={() => navigate('/dashboard')}
          className="px-4 py-2 rounded-lg text-sm"
          style={{ backgroundColor: 'var(--color-accent)', color: '#fff' }}
        >
          Back to Dashboard
        </button>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      {/* Back */}
      <button
        onClick={() => navigate(-1)}
        className="text-sm mb-6 flex items-center gap-1"
        style={{ color: 'var(--color-text-muted)' }}
      >
        ← Back
      </button>

      {/* Day header */}
      <motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <span
            className="text-xs font-semibold px-2 py-1 rounded-full"
            style={{ backgroundColor: 'var(--color-accent)', color: '#fff' }}
          >
            DAY {day.dayNumber}
          </span>
          <span className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
            {day.date} · Phase {day.phase} · Tier {day.tier}
          </span>
        </div>
        <h1 className="text-xl font-bold mb-1" style={{ color: 'var(--color-text)' }}>
          {day.title}
        </h1>
        <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
          {day.totalHours}h · {day.weekType}
          {day.hasQuiz && (
            <span
              className="ml-2 px-2 py-0.5 rounded-full text-xs"
              style={{ backgroundColor: '#f59e0b22', color: '#f59e0b' }}
            >
              Quiz available
            </span>
          )}
        </p>
      </motion.div>

      {/* Prompt block */}
      {day.promptBlock && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="rounded-xl p-4 mb-6 text-sm whitespace-pre-wrap leading-relaxed"
          style={{
            backgroundColor: 'var(--color-bg-card)',
            border: '1px solid var(--color-border)',
            color: 'var(--color-text-muted)',
          }}
        >
          {day.promptBlock}
        </motion.div>
      )}

      {/* Task blocks */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }}>
        {(day.tasks || []).map((task) => (
          <TaskBlock key={task.id} task={task} />
        ))}
      </motion.div>

      {/* Prev / Next navigation */}
      <div className="flex justify-between mt-8">
        <button
          onClick={() => prev && navigate(`/day/${prev.id}`)}
          disabled={!prev}
          className="text-sm px-4 py-2 rounded-lg disabled:opacity-30"
          style={{ backgroundColor: 'var(--color-bg-card)', color: 'var(--color-text-muted)', border: '1px solid var(--color-border)' }}
        >
          ← {prev ? `Day ${prev.dayNumber}` : 'Start'}
        </button>
        <button
          onClick={() => next && navigate(`/day/${next.id}`)}
          disabled={!next}
          className="text-sm px-4 py-2 rounded-lg disabled:opacity-30"
          style={{ backgroundColor: 'var(--color-bg-card)', color: 'var(--color-text-muted)', border: '1px solid var(--color-border)' }}
        >
          {next ? `Day ${next.dayNumber}` : 'End'} →
        </button>
      </div>
    </div>
  )
}
