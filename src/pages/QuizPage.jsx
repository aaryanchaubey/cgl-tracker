import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getDayById } from '../data/studyPlan/index'
import { getQuizForDay } from '../data/quiz/index'

export default function QuizPage() {
  const { dateId } = useParams()
  const navigate   = useNavigate()
  const day        = getDayById(dateId)
  const quiz       = getQuizForDay(dateId)

  return (
    <div className="max-w-2xl mx-auto px-4 py-16 text-center">
      <button
        onClick={() => navigate(-1)}
        className="text-sm mb-8 block text-left"
        style={{ color: 'var(--color-text-muted)' }}
      >
        ← Back
      </button>

      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
        {quiz ? (
          <div>
            <p className="text-5xl mb-4">📝</p>
            <h1 className="text-xl font-bold mb-2" style={{ color: 'var(--color-text)' }}>
              Quiz — Day {day?.dayNumber}
            </h1>
            <p className="text-sm mb-6" style={{ color: 'var(--color-text-muted)' }}>
              {quiz.questions?.length || 0} questions · 70% to pass
            </p>
            <p style={{ color: 'var(--color-text-muted)' }}>Quiz UI coming soon.</p>
          </div>
        ) : (
          <div>
            <p className="text-5xl mb-4">🔒</p>
            <h1 className="text-xl font-bold mb-2" style={{ color: 'var(--color-text)' }}>
              No Quiz Available
            </h1>
            <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
              {day
                ? `Day ${day.dayNumber} (${dateId}) does not have quiz data yet.`
                : `No study day found for ${dateId}.`}
            </p>
            <button
              onClick={() => navigate('/dashboard')}
              className="mt-6 px-5 py-2 rounded-lg text-sm"
              style={{ backgroundColor: 'var(--color-accent)', color: '#fff' }}
            >
              Back to Dashboard
            </button>
          </div>
        )}
      </motion.div>
    </div>
  )
}
