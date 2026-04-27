import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/**
 * SubTaskItem — renders a single subtask with toggle, description, tip, and time.
 * Props:
 *   subtask   — the subtask object { id, title, description, tip, estimatedMins, mandatory }
 *   completed — boolean
 *   onToggle  — () => void
 *   disabled  — boolean (optional, prevents toggling)
 */
export default function SubTaskItem({ subtask, completed, onToggle, disabled = false }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <motion.div
      layout
      className="rounded-xl overflow-hidden"
      style={{
        border: `1px solid ${completed ? 'var(--color-accent)' : 'var(--color-border)'}`,
        backgroundColor: completed ? 'rgba(124,106,255,0.05)' : 'var(--color-bg-card)',
        opacity: disabled ? 0.6 : 1,
      }}
    >
      {/* Header row */}
      <div className="flex items-start gap-3 p-4">
        {/* Checkbox */}
        <button
          onClick={() => !disabled && onToggle?.()}
          disabled={disabled}
          className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all"
          style={{
            borderColor: completed ? 'var(--color-accent)' : 'var(--color-border)',
            backgroundColor: completed ? 'var(--color-accent)' : 'transparent',
          }}
        >
          {completed && (
            <motion.svg
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              width="10" height="8" viewBox="0 0 10 8" fill="none"
            >
              <path d="M1 4l3 3 5-6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </motion.svg>
          )}
        </button>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <p
              className="text-sm font-medium leading-snug"
              style={{
                color: completed ? 'var(--color-text-muted)' : 'var(--color-text)',
                textDecoration: completed ? 'line-through' : 'none',
              }}
            >
              {subtask.title}
              {subtask.mandatory === false && (
                <span
                  className="ml-2 text-xs px-1.5 py-0.5 rounded-full"
                  style={{ backgroundColor: 'var(--color-border)', color: 'var(--color-text-muted)' }}
                >
                  optional
                </span>
              )}
            </p>
            <div className="flex items-center gap-2 flex-shrink-0">
              {subtask.estimatedMins > 0 && (
                <span className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
                  {subtask.estimatedMins}m
                </span>
              )}
              {(subtask.description || subtask.tip) && (
                <button
                  onClick={() => setExpanded(e => !e)}
                  className="text-xs px-2 py-0.5 rounded-full transition-colors"
                  style={{
                    backgroundColor: expanded ? 'var(--color-accent)' : 'var(--color-border)',
                    color: expanded ? '#fff' : 'var(--color-text-muted)',
                  }}
                >
                  {expanded ? '▲' : '▼'}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Expandable detail */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div
              className="px-4 pb-4 flex flex-col gap-2 border-t"
              style={{ borderColor: 'var(--color-border)' }}
            >
              {subtask.description && (
                <p className="text-xs leading-relaxed pt-3" style={{ color: 'var(--color-text-muted)' }}>
                  {subtask.description}
                </p>
              )}
              {subtask.tip && (
                <div
                  className="text-xs px-3 py-2 rounded-lg leading-relaxed"
                  style={{ backgroundColor: 'rgba(124,106,255,0.08)', color: 'var(--color-text-muted)' }}
                >
                  💡 {subtask.tip}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
