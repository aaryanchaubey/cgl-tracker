/**
 * SSC CGL 2026 — Study Phases Definition
 * Phase structure covering Pre-Exam (Tier 1) through Mains (Tier 2)
 */

export const EXAM_DATES = {
  TIER1_EXPECTED: '2026-06-25',
  TIER1_RESULT_EXPECTED: '2026-07-05',
  TIER2_EXPECTED: '2026-09-20',
  PLAN_START: '2026-04-25',
}

export const STUDY_PHASES = [
  {
    id: 1,
    name: 'Pre-Exam Sprint: Foundation',
    shortName: 'Pre — Foundation',
    tier: 1,
    startDate: '2026-04-25',
    endDate: '2026-05-22',
    days: [1, 28],
    hasQuiz: true,
    color: '#7c6aff',
    colorDim: 'rgba(124,106,255,0.15)',
    icon: '⚡',
    description:
      'Syllabus consolidation + speed building. Heavy PYQ practice with ratio-based shortcuts. No new complex topics — only grepping and acceleration.',
    weekdayFocus: ['English Vocabulary & Grammar', 'GA Current Affairs', 'Quant PYQs + Reasoning Drills'],
    weekendFocus: ['Geometry & Algebra Deep Dives', 'Full Tier 1 Mocks', 'Post-Mortem Analysis'],
  },
  {
    id: 2,
    name: 'Pre-Exam Sprint: Acceleration',
    shortName: 'Pre — Acceleration',
    tier: 1,
    startDate: '2026-05-23',
    endDate: '2026-06-08',
    days: [29, 45],
    hasQuiz: true,
    color: '#f59e0b',
    colorDim: 'rgba(245,158,11,0.15)',
    icon: '🔥',
    description:
      'Advanced topic mastery + mock frequency increases. Trigonometry, Mensuration, Advanced Algebra finalized. Vocabulary repository locked.',
    weekdayFocus: ['Comprehensive Vocab Sprints', 'Advanced Quant PYQs', 'Full Reasoning Sectionals'],
    weekendFocus: ['Advanced Topic Dives', 'Double Mock + Analysis', 'Percentile Tracking'],
  },
  {
    id: 3,
    name: 'Final Pre-Exam Push',
    shortName: 'Pre — Final Push',
    tier: 1,
    startDate: '2026-06-09',
    endDate: '2026-06-25',
    days: [46, 61],
    hasQuiz: false,
    color: '#ef4444',
    colorDim: 'rgba(239,68,68,0.15)',
    icon: '🎯',
    description:
      'REVISE MORE, LEARN LESS. Zero new chapters. Daily mocks replace everything. Percentile above 99.5 is the only target. Exam psychology hardening.',
    weekdayFocus: ['PYQ Sprints (last 3 years)', 'Micro-time drills', 'Vocabulary flashcards'],
    weekendFocus: ['2-3 Full Mocks/day', 'Shift-difficulty targeting', 'Calm & speed optimization'],
  },
  {
    id: 4,
    name: 'Tier 2: Foundation & Depth',
    shortName: 'Mains — Foundation',
    tier: 2,
    startDate: '2026-07-06',
    endDate: '2026-07-25',
    days: [62, 82],
    hasQuiz: false,
    color: '#06b6d4',
    colorDim: 'rgba(6,182,212,0.15)',
    icon: '🏛️',
    description:
      'Vertical depth into Tier 2 concepts. Complex DI, advanced geometric proofs, long-form RC stamina building. -1 mark penalty mindset adopted.',
    weekdayFocus: ['Complex DI Tables & Charts', 'Grammar: Advanced error detection', 'Number Theory depth'],
    weekendFocus: ['Full Paper 1 Mock (2hr 15min)', 'DEST Typing Practice', 'CKT Module start'],
  },
  {
    id: 5,
    name: 'Tier 2: Acceleration',
    shortName: 'Mains — Acceleration',
    tier: 2,
    startDate: '2026-07-26',
    endDate: '2026-08-22',
    days: [83, 110],
    hasQuiz: false,
    color: '#8b5cf6',
    colorDim: 'rgba(139,92,246,0.15)',
    icon: '⚔️',
    description:
      'Mock-heavy phase. Full Paper 1 simulations every weekend. 90%+ accuracy maintained. CKT + DEST daily practice mandatory.',
    weekdayFocus: ['Advanced Algebra + Geometry combos', '1500-word RC Passages', 'GA Static GK depth'],
    weekendFocus: ['2 Full Paper 1 Mocks', 'DEST 15-min daily drill', 'Percentile tracking (>99th)'],
  },
  {
    id: 6,
    name: 'Tier 2: Final Sprint',
    shortName: 'Mains — Final Sprint',
    tier: 2,
    startDate: '2026-08-23',
    endDate: '2026-09-20',
    days: [111, 138],
    hasQuiz: false,
    color: '#10b981',
    colorDim: 'rgba(16,185,129,0.15)',
    icon: '👑',
    description:
      'Elite execution phase. Near-daily full mocks. CKT treated with same rigor as core subjects. Marks target: 340+/390. Zero careless errors tolerated.',
    weekdayFocus: ['Full mock review sprints', 'CKT 60-mark scoring drills', 'Error-zero vocabulary revision'],
    weekendFocus: ['2-3 Full Paper 1 Mocks', 'DEST precision (sub-5% error)', 'Post Preference research'],
  },
]

/** Quickly get a phase by its ID */
export const getPhase = (phaseId) => STUDY_PHASES.find((p) => p.id === phaseId) || null

/** Get which phase a day belongs to based on dayNumber */
export const getPhaseForDay = (dayNumber) =>
  STUDY_PHASES.find((p) => dayNumber >= p.days[0] && dayNumber <= p.days[1]) || null
