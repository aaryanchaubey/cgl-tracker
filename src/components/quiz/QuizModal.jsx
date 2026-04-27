import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { getQuizForDay, evaluateQuiz } from '../../data/quiz/index'
import { useProgress } from '../../hooks/useProgress'

/**
 * QuizModal — full quiz experience in an overlay modal.
 * Props:
 *   dateId  — the day's date string (e.g. '2026-04-25')
 *   onClose — callback to dismiss the modal
 */
export default function QuizModal({ dateId, onClose }) {
  const quiz                      = getQuizForDay(dateId)
  const { saveQuizAttempt }       = useProgress()
  const [current, setCurrent]     = useState(0)
  const [answers, setAnswers]     = useState({})
  const [result, setResult]       = useState(null)
  const [submitting, setSubmitting] = useState(false)

  if (!quiz) {
    return (
      <Overlay onClose={onClose}>
        <div className="text-center p-8">
          <p className="text-4xl mb-4">🔒</p>
          <h2 className="text-lg font-bold mb-2" style={{ color: 'var(--color-text)' }}>No Quiz Available</h2>
          <p className="text-sm mb-6" style={{ color: 'var(--color-text-muted)' }}>
            Quiz data for this day hasn't been added yet.
          </p>
          <CloseBtn onClose={onClose} />
        </div>
      </Overlay>
    )
  }

  const questions = quiz.questions || []
  const q         = questions[current]
  const total     = questions.length

  function select(optionIdx) {
    if (result) return
    setAnswers(a => ({ ...a, [q.id]: optionIdx }))
  }

  async function submit() {
    setSubmitting(true)
    const res = evaluateQuiz(quiz, answers)
    setResult(res)
    try { await saveQuizAttempt(dateId, res) } catch { /* ignore */ }
    setSubmitting(false)
  }

  // ── Result screen ────────────────────────────────────────────────────────────
  if (result) {
    return (
      <Overlay onClose={onClose}>
        <div className="p-6 max-h-[80vh] overflow-y-auto">
          {/* Score */}
          <div className="text-center mb-6">
            <p className="text-5xl mb-2">{result.passed ? '🎯' : '📊'}</p>
            <h2 className="text-xl font-bold mb-1" style={{ color: 'var(--color-text)' }}>
              {result.passed ? 'Passed!' : 'Not quite'}
            </h2>
            <p
              className="text-3xl font-bold mb-1"
              style={{ color: result.passed ? '#10b981' : '#ef4444' }}
            >
              {result.score}/{result.total}
            </p>
            <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
              {result.percentage}% · passing is 70%
            </p>
          </div>

          {/* Breakdown */}
          <div className="flex flex-col gap-3 mb-6">
            {result.breakdown.map((item, i) => (
              <div
                key={item.id}
                className="rounded-xl p-3 text-sm"
                style={{
                  backgroundColor: item.isCorrect ? 'rgba(16,185,129,0.08)' : 'rgba(239,68,68,0.08)',
                  border: `1px solid ${item.isCorrect ? 'rgba(16,185,129,0.3)' : 'rgba(239,68,68,0.3)'}`,
                }}
              >
                <p className="font-medium mb-1" style={{ color: 'var(--color-text)' }}>
                  Q{i + 1}. {item.question}
                </p>
                {!item.isCorrect && (
                  <p className="text-xs mb-1" style={{ color: '#ef4444' }}>
                    Your answer: {questions[i]?.options?.[item.selected] ?? '—'}
                  </p>
                )}
                <p className="text-xs" style={{ color: '#10b981' }}>
                  ✓ {questions[i]?.options?.[item.correct]}
                </p>
                {item.explanation && (
                  <p className="text-xs mt-1" style={{ color: 'var(--color-text-muted)' }}>
                    {item.explanation}
                  </p>
                )}
              </div>
            ))}
          </div>

          <CloseBtn onClose={onClose} label="Done" />
        </div>
      </Overlay>
    )
  }

  // ── Question screen ──────────────────────────────────────────────────────────
  return (
    <Overlay onClose={onClose}>
      <div className="p-6">
        {/* Progress */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
            Question {current + 1} / {total}
          </span>
          <span
            className="text-xs px-2 py-0.5 rounded-full"
            style={{ backgroundColor: 'var(--color-border)', color: 'var(--color-text-muted)' }}
          >
            {q?.subject}
          </span>
        </div>
        <div className="h-1 rounded-full mb-6" style={{ backgroundColor: 'var(--color-border)' }}>
          <div
            className="h-full rounded-full"
            style={{ width: `${((current + 1) / total) * 100}%`, backgroundColor: 'var(--color-accent)' }}
          />
        </div>

        {/* Question */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <p className="text-sm font-medium mb-4 leading-relaxed" style={{ color: 'var(--color-text)' }}>
              {q?.question}
            </p>

            {/* Options */}
            <div className="flex flex-col gap-2 mb-6">
              {(q?.options || []).map((opt, idx) => {
                const selected = answers[q.id] === idx
                return (
                  <button
                    key={idx}
                    onClick={() => select(idx)}
                    className="text-left text-sm px-4 py-3 rounded-xl transition-all"
                    style={{
                      backgroundColor: selected ? 'var(--color-accent)' : 'var(--color-bg)',
                      color: selected ? '#fff' : 'var(--color-text)',
                      border: selected ? '1px solid var(--color-accent)' : '1px solid var(--color-border)',
                    }}
                  >
                    <span className="font-semibold mr-2">{String.fromCharCode(65 + idx)}.</span>
                    {opt}
                  </button>
                )
              })}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Nav buttons */}
        <div className="flex justify-between gap-3">
          <button
            onClick={() => setCurrent(c => Math.max(0, c - 1))}
            disabled={current === 0}
            className="flex-1 py-2 rounded-xl text-sm disabled:opacity-30"
            style={{ backgroundColor: 'var(--color-border)', color: 'var(--color-text-muted)' }}
          >
            ← Back
          </button>

          {current < total - 1 ? (
            <button
              onClick={() => setCurrent(c => c + 1)}
              className="flex-1 py-2 rounded-xl text-sm font-medium"
              style={{ backgroundColor: 'var(--color-accent)', color: '#fff' }}
            >
              Next →
            </button>
          ) : (
            <button
              onClick={submit}
              disabled={submitting || Object.keys(answers).length < total}
              className="flex-1 py-2 rounded-xl text-sm font-medium disabled:opacity-50"
              style={{ backgroundColor: '#10b981', color: '#fff' }}
            >
              {submitting ? 'Submitting…' : `Submit (${Object.keys(answers).length}/${total})`}
            </button>
          )}
        </div>
      </div>
    </Overlay>
  )
}

// ── Shared sub-components ─────────────────────────────────────────────────────

function Overlay({ children, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)' }}
      onClick={(e) => e.target === e.currentTarget && onClose?.()}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="w-full max-w-lg rounded-2xl overflow-hidden"
        style={{ backgroundColor: 'var(--color-bg-card)', border: '1px solid var(--color-border)' }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}

function CloseBtn({ onClose, label = 'Close' }) {
  return (
    <button
      onClick={onClose}
      className="w-full py-3 rounded-xl text-sm font-medium"
      style={{ backgroundColor: 'var(--color-accent)', color: '#fff' }}
    >
      {label}
    </button>
  )
}
