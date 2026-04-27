/**
 * SSC CGL 2026 — Quiz Data Index
 * Combines all quiz splits. Keyed by date string (YYYY-MM-DD).
 * Quiz questions are SSC CGL Tier 2 / Mains difficulty level.
 * Passing threshold: 70% (≥11/15 correct)
 * Cooldown between retakes: 30 minutes
 */

import { QUIZ_D01_D09 } from './d01_d09'
import { QUIZ_D10_D18 } from './d10_d18'
import { QUIZ_D19_D27 } from './d19_d27'
import { QUIZ_D28_D36 } from './d28_d36'
import { QUIZ_D37_D45 } from './d37_d45'

/** Combined quiz data: Record<dateString, QuizSet> */
export const QUIZ_DATA = {
  ...QUIZ_D01_D09,
  ...QUIZ_D10_D18,
  ...QUIZ_D19_D27,
  ...QUIZ_D28_D36,
  ...QUIZ_D37_D45,
}

/**
 * Get quiz for a specific day (by date string).
 * Returns null if no quiz exists for that day.
 */
export const getQuizForDay = (dateStr) => QUIZ_DATA[dateStr] || null

/**
 * Compute weak areas from a set of quiz attempts.
 * Returns array of subject/topic strings sorted by worst performance first.
 */
export function computeWeakAreas(attempts) {
  if (!attempts || !attempts.length) return []

  // Aggregate per subject
  const subjectStats = {}
  for (const attempt of attempts) {
    if (!attempt.answers) continue
    // answers: { questionId: selectedOption }
    // We need the quiz data to evaluate this
    // This is called from QuizPage which passes enriched attempt data
    if (attempt.weakAreas) {
      for (const area of attempt.weakAreas) {
        if (!subjectStats[area]) subjectStats[area] = { wrong: 0, total: 0 }
        subjectStats[area].wrong++
        subjectStats[area].total++
      }
    }
  }

  return Object.entries(subjectStats)
    .sort((a, b) => b[1].wrong / b[1].total - a[1].wrong / a[1].total)
    .map(([subject]) => subject)
}

/**
 * Given a quiz set and submitted answers, compute the result.
 * answers: Record<questionId, selectedOption>
 * Returns { score, total, percentage, passed, weakAreas, breakdown }
 */
export function evaluateQuiz(quizSet, answers) {
  let score = 0
  const weakAreaSet = new Set()
  const breakdown = []

  for (const q of quizSet.questions) {
    const selected = answers[q.id]
    const correct = selected === q.correct
    if (correct) score++
    else {
      weakAreaSet.add(q.subject)
      if (q.topic) weakAreaSet.add(q.topic)
    }
    breakdown.push({
      id: q.id,
      question: q.question,
      selected,
      correct: q.correct,
      explanation: q.explanation,
      isCorrect: correct,
      subject: q.subject,
      topic: q.topic,
    })
  }

  const total = quizSet.questions.length
  const percentage = Math.round((score / total) * 100)
  const passed = percentage >= (quizSet.passingScore || 70)

  return {
    score,
    total,
    percentage,
    passed,
    weakAreas: Array.from(weakAreaSet),
    breakdown,
  }
}

export const QUIZ_CONFIG = {
  passingScore: 70, // percent
  cooldownMins: 30,
  questionsPerDay: 15,
}
