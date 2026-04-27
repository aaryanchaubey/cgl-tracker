/**
 * Get today's date as YYYY-MM-DD string
 */
export function getTodayStr() {
  return new Date().toISOString().split('T')[0]
}

/**
 * Format date string to readable format
 */
export function formatDate(dateStr) {
  const d = new Date(dateStr + 'T00:00:00')
  return d.toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
}

/**
 * Get day of week from date string
 */
export function getDayOfWeek(dateStr) {
  const d = new Date(dateStr + 'T00:00:00')
  return d.toLocaleDateString('en-IN', { weekday: 'long' })
}

/**
 * Determine if a date is a weekend (Saturday or Sunday)
 */
export function isWeekend(dateStr) {
  const d = new Date(dateStr + 'T00:00:00')
  const day = d.getDay()
  return day === 0 || day === 6
}

/**
 * Get days remaining until a target date
 */
export function daysUntil(targetDateStr) {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const target = new Date(targetDateStr + 'T00:00:00')
  return Math.ceil((target - today) / (1000 * 60 * 60 * 24))
}

/**
 * Check if cooldown period (30 minutes) has passed since last quiz attempt
 */
export function canRetakeQuiz(lastAttemptTimestamp) {
  if (!lastAttemptTimestamp) return true
  const now = Date.now()
  const last = typeof lastAttemptTimestamp === 'object' && lastAttemptTimestamp.seconds
    ? lastAttemptTimestamp.seconds * 1000
    : lastAttemptTimestamp
  const diffMinutes = (now - last) / (1000 * 60)
  return diffMinutes >= 30
}

/**
 * Get minutes until cooldown ends
 */
export function minutesUntilRetake(lastAttemptTimestamp) {
  if (!lastAttemptTimestamp) return 0
  const now = Date.now()
  const last = typeof lastAttemptTimestamp === 'object' && lastAttemptTimestamp.seconds
    ? lastAttemptTimestamp.seconds * 1000
    : lastAttemptTimestamp
  const diffMinutes = (now - last) / (1000 * 60)
  return Math.max(0, Math.ceil(30 - diffMinutes))
}

/**
 * Compare two date strings
 */
export function compareDates(a, b) {
  return a < b ? -1 : a > b ? 1 : 0
}

/**
 * Get short date label (e.g. "Apr 25")
 */
export function shortDate(dateStr) {
  const d = new Date(dateStr + 'T00:00:00')
  return d.toLocaleDateString('en-IN', { month: 'short', day: 'numeric' })
}

/**
 * Add days to a date string, return new date string
 */
export function addDays(dateStr, days) {
  const d = new Date(dateStr + 'T00:00:00')
  d.setDate(d.getDate() + days)
  return d.toISOString().split('T')[0]
}
