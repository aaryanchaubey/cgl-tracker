export { STUDY_PHASES, EXAM_DATES, getPhase, getPhaseForDay } from './phases'
import { DAYS as W01 } from './week01'
import { DAYS as W02 } from './week02'
import { DAYS as W03 } from './week03'
import { DAYS as W04 } from './week04'
import { DAYS as W05 } from './week05'
import { DAYS as W06 } from './week06'
import { DAYS as W07 } from './week07'
import { DAYS as W08 } from './week08'
import { DAYS as W09 } from './week09'
import { DAYS as W10 } from './week10'
import { DAYS as W11 } from './week11'
import { DAYS as W12 } from './week12'
import { DAYS as W13 } from './week13'
import { DAYS as W14 } from './week14'
import { DAYS as W15 } from './week15'
import { DAYS as W16 } from './week16'
import { DAYS as W17 } from './week17'
import { DAYS as W18 } from './week18'
import { DAYS as W19 } from './week19'
import { DAYS as W20 } from './week20'

export const STUDY_DAYS = [
  ...W01,...W02,...W03,...W04,...W05,...W06,...W07,...W08,...W09,...W10,
  ...W11,...W12,...W13,...W14,...W15,...W16,...W17,...W18,...W19,...W20,
].sort((a, b) => (a.date < b.date ? -1 : 1))

export const STUDY_DAYS_MAP = Object.fromEntries(STUDY_DAYS.map((d) => [d.id, d]))
export const getDayById = (dateStr) => STUDY_DAYS_MAP[dateStr] || null
export const getActiveDay = () => {
  const today = new Date().toISOString().split('T')[0]
  if (STUDY_DAYS_MAP[today]) return STUDY_DAYS_MAP[today]
  const past = STUDY_DAYS.filter((d) => d.date <= today)
  return past[past.length - 1] || STUDY_DAYS[0]
}
export const getDaysForPhase = (phaseId) => STUDY_DAYS.filter((d) => d.phase === phaseId)
export const getAdjacentDays = (dateStr) => {
  const idx = STUDY_DAYS.findIndex((d) => d.id === dateStr)
  return { prev: idx > 0 ? STUDY_DAYS[idx - 1] : null, next: idx < STUDY_DAYS.length - 1 ? STUDY_DAYS[idx + 1] : null }
}
export const PLAN_STATS = {
  totalDays: STUDY_DAYS.length,
  quizDays: STUDY_DAYS.filter((d) => d.hasQuiz).length,
  tier1Days: STUDY_DAYS.filter((d) => d.tier === 1).length,
  tier2Days: STUDY_DAYS.filter((d) => d.tier === 2).length,
}
