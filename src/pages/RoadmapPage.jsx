import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { STUDY_PHASES, STUDY_DAYS } from '../data/studyPlan/index'

export default function RoadmapPage() {
  const navigate = useNavigate()
  const today = new Date().toISOString().split('T')[0]

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
          const pct = phaseDays.length > 0 ? Math.round((completed / phaseDays.length) * 100) : 0

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

              {/* Days grid — show first 14 */}
              <div className="flex flex-wrap gap-1.5">
                {phaseDays.slice(0, 21).map((day) => (
                  <button
                    key={day.id}
                    onClick={() => navigate(`/day/${day.id}`)}
                    title={`Day ${day.dayNumber}: ${day.title}`}
                    className="w-7 h-7 rounded text-xs font-medium transition-transform hover:scale-110"
                    style={{
                      backgroundColor:
                        day.date === today ? phase.color :
                        day.date < today  ? phase.color + '55' :
                                            'var(--color-border)',
                      color: day.date <= today ? '#fff' : 'var(--color-text-muted)',
                    }}
                  >
                    {day.dayNumber}
                  </button>
                ))}
                {phaseDays.length > 21 && (
                  <span className="text-xs self-center" style={{ color: 'var(--color-text-muted)' }}>
                    +{phaseDays.length - 21} more
                  </span>
                )}
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
