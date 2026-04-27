// Blocked temp/disposable email domains
const BLOCKED_DOMAINS = new Set([
  'mailinator.com', 'guerrillamail.com', 'guerrillamail.net', 'guerrillamail.org',
  'guerrillamail.biz', 'guerrillamail.de', 'guerrillamail.info', 'sharklasers.com',
  'guerrillamailblock.com', 'grr.la', 'guerrillamail.biz', 'spam4.me', 'trashmail.com',
  'trashmail.me', 'trashmail.net', 'trashmail.at', 'trashmail.io', 'trashmail.org',
  'yopmail.com', 'yopmail.fr', 'cool.fr.nf', 'jetable.fr.nf', 'nospam.ze.tc',
  'nomail.xl.cx', 'mega.zik.dj', 'speed.1s.fr', 'courriel.fr.nf', 'moncourrier.fr.nf',
  'monemail.fr.nf', 'monmail.fr.nf', 'dispostable.com', 'maildrop.cc', 'throwam.com',
  'throwam.com', 'mailnull.com', 'spamgourmet.com', 'spamgourmet.net', 'spamgourmet.org',
  'spamspot.com', 'spamspot.com', 'mailnesia.com', 'mailnesia.com', 'mailnull.com',
  'pookmail.com', 'discard.email', 'fakeinbox.com', 'fakeinbox.net', 'tempr.email',
  'disposableemailaddresses.com', 'getairmail.com', 'filzmail.com', 'throwam.com',
  'throwam.com', 'sofimail.com', 'sharedmailbox.org', 'sharedmailbox.org', 'mytrashmail.com',
  'maileater.com', 'put2.net', 'spamgob.com', 'mailmetrash.com', 'tempemail.net',
  'discard.email', 'throwaway.email', 'throwaway.email', 'spamgob.com', 'mailnull.com',
  'spamfree24.org', 'nowmymail.com', 'mailforspam.com', 'maildrop.cc', 'inoutmail.net',
  'inoutmail.de', 'inoutmail.info', 'inoutmail.eu', 'fakemailgenerator.com', 'mailboxy.fun',
  '10minutemail.com', '10minutemail.net', '10minutemail.org', '10minutemail.de',
  '20minutemail.com', 'minutemail.com', 'tempmail.com', 'tempmail.net', 'tempmail.org',
  'temp-mail.org', 'temp-mail.io', 'temmail.com', 'emailtemporario.com.br',
  'mailtemp.info', 'mailtemporary.com', 'emailtemporanea.com', 'harakirimail.com',
  'yandex.ru', 'spam.la', 'spam-me.de', 'spam-geld.de', 'spamhereplease.com',
  'throwam.com', 'deadaddress.com', 'deadletter.ga', 'discardmail.com',
  'spamevader.com', 'inboxclean.com', 'mohmal.com', 'mailsiphon.com',
  'owlpic.com', 'spamgrab.com', 'meltmail.com', 'einrot.com', 'spamfree.eu',
  'notmailinator.com', 'mailseal.de', 'spamtrap.ro', 'trashmail.at', 'mailboxy.fun',
  'bugmenot.com', 'mail.tm', 'disposable.com', 'filzmail.de', 'filzmail.com',
  'jetable.org', 'jetable.net', 'jetable.fr', 'jetable.pp.ua', 'notsharingmy.info',
  'nwytg.net', 'spamex.com', 'spaml.de', 'spammotel.com', 'spamspot.com',
  'tempinbox.com', 'tempinbox.co.uk', 'trashdevil.com', 'uggsrock.com',
  'vomoto.com', 'xagloo.com', 'yopmail.pp.ua', 'zoemail.net', 'spamfree24.de',
  'mailbolt.com', 'emlhub.com', 'mailhazard.com', 'nfmailbox.com',
]);

/**
 * Validates email format and blocks temp mail domains.
 * Returns { valid: boolean, error: string|null }
 */
export function validateEmail(email) {
  if (!email || typeof email !== 'string') {
    return { valid: false, error: 'Email is required.' }
  }

  const trimmed = email.trim().toLowerCase()

  // RFC 5322 compliant regex (practical subset)
  const emailRegex = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/

  if (!emailRegex.test(trimmed)) {
    return { valid: false, error: 'Please enter a valid email address.' }
  }

  // Extract domain
  const domain = trimmed.split('@')[1]
  if (!domain) {
    return { valid: false, error: 'Invalid email format.' }
  }

  // Check blocked domains
  if (BLOCKED_DOMAINS.has(domain)) {
    return { valid: false, error: 'Temporary or disposable email addresses are not allowed.' }
  }

  // Must have at least one dot in domain with proper TLD
  if (!domain.includes('.') || domain.split('.').pop().length < 2) {
    return { valid: false, error: 'Email domain appears invalid.' }
  }

  return { valid: true, error: null }
}

/**
 * Validates username format.
 * 3-20 chars, alphanumeric + underscore only, starts with letter.
 */
export function validateUsername(username) {
  if (!username) return { valid: false, error: 'Username is required.' }
  const trimmed = username.trim()
  if (trimmed.length < 3) return { valid: false, error: 'Username must be at least 3 characters.' }
  if (trimmed.length > 20) return { valid: false, error: 'Username cannot exceed 20 characters.' }
  if (!/^[a-zA-Z][a-zA-Z0-9_]*$/.test(trimmed)) {
    return { valid: false, error: 'Username must start with a letter and contain only letters, numbers, and underscores.' }
  }
  return { valid: true, error: null }
}

/**
 * Validates password strength.
 */
export function validatePassword(password) {
  if (!password) return { valid: false, error: 'Password is required.' }
  if (password.length < 8) return { valid: false, error: 'Password must be at least 8 characters.' }
  if (!/[A-Z]/.test(password)) return { valid: false, error: 'Password must contain at least one uppercase letter.' }
  if (!/[0-9]/.test(password)) return { valid: false, error: 'Password must contain at least one number.' }
  return { valid: true, error: null }
}

/**
 * Validates display name.
 */
export function validateName(name) {
  if (!name) return { valid: false, error: 'Name is required.' }
  const trimmed = name.trim()
  if (trimmed.length < 2) return { valid: false, error: 'Name must be at least 2 characters.' }
  if (trimmed.length > 50) return { valid: false, error: 'Name cannot exceed 50 characters.' }
  if (!/^[a-zA-Z\s'-]+$/.test(trimmed)) return { valid: false, error: 'Name can only contain letters, spaces, hyphens and apostrophes.' }
  return { valid: true, error: null }
}
