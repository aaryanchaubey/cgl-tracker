import { motion } from 'framer-motion'
import { STUDY_DAYS, PLAN_STATS, STUDY_PHASES } from '../data/studyPlan/index'

const today = new Date().toISOString().split('T')[0]

export default function AnalyticsPage() {
  const doneDays  = STUDY_DAYS.filter(d => d.date < today)
  const futureDays = STUDY_DAYS.filter(d => d.date >= today)
  const totalHours = STUDY_DAYS.reduce((n, d) => n + (d.totalHours || 0), 0)
  const doneHours  = doneDays.reduce((n, d) => n + (d.totalHours || 0), 0)

  const phaseStats = STUDY_PHASES.map(p => ({
    ...p,
    total: STUDY_DAYS.filter(d => d.phase === p.id).length,
    done:  STUDY_DAYS.filter(d => d.phase === p.id && d.date < today).length,
  }))

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <motion.h1
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl font-bold mb-2"
        style={{ color: 'var(--color-text)' }}
      >
        Analytics
      </motion.h1>
      <p className="text-sm mb-8" style={{ color: 'var(--color-text-muted)' }}>
        Progress overview across all phases
      </p>

      {/* Big numbers */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
        {[
          { label: 'Days Elapsed',     value: doneDays.length,                color: 'var(--color-accent)' },
          { label: 'Days Remaining',   value: futureDays.length,              color: '#06b6d4' },
          { label: 'Hours Done',       value: `${doneHours.toFixed(0)}h`,     color: '#10b981' },
          { label: 'Hours Remaining',  value: `${(totalHours - doneHours).toFixed(0)}h`, color: '#f59e0b' },
        ].map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06 }}
            className="rounded-xl p-4"
            style={{ backgroundColor: 'var(--color-bg-card)', border: '1px solid var(--color-border)' }}
          >
            <p className="text-2xl font-bold" style={{ color: s.color }}>{s.value}</p>
            <p className="text-xs mt-1" style={{ color: 'var(--color-text-muted)' }}>{s.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Overall progress bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="rounded-xl p-5 mb-6"
        style={{ backgroundColor: 'var(--color-bg-card)', border: '1px solid var(--color-border)' }}
      >
        <div className="flex justify-between text-sm mb-2">
          <span style={{ color: 'var(--color-text)' }}>Overall Progress</span>
          <span style={{ color: 'var(--color-accent)' }}>
            {Math.round((doneDays.length / PLAN_STATS.totalDays) * 100)}%
          </span>
        </div>
        <div className="h-3 rounded-full" style={{ backgroundColor: 'var(--color-border)' }}>
          <div
            className="h-full rounded-full"
            style={{
              width: `${(doneDays.length / PLAN_STATS.totalDays) * 100}%`,
              backgroundColor: 'var(--color-accent)',
            }}
          />
        </div>
        <p className="text-xs mt-2" style={{ color: 'var(--color-text-muted)' }}>
          {doneDays.length} of {PLAN_STATS.totalDays} days elapsed
        </p>
      </motion.div>

      {/* Phase breakdown */}
      <div className="flex flex-col gap-3">
        {phaseStats.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25 + i * 0.06 }}
            className="rounded-xl p-4"
            style={{ backgroundColor: 'var(--color-bg-card)', border: '1px solid var(--color-border)' }}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span>{p.icon}</span>
                <span className="text-sm font-medium" style={{ color: 'var(--color-text)' }}>
                  {p.shortName}
                </span>
              </div>
              <span className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
                {p.done}/{p.total} days
              </span>
            </div>
            <div className="h-1.5 rounded-full" style={{ backgroundColor: 'var(--color-border)' }}>
              <div
                className="h-full rounded-full"
                style={{
                  width: p.total > 0 ? `${(p.done / p.total) * 100}%` : '0%',
                  backgroundColor: p.color,
                }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
