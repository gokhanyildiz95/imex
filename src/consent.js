// Cookie / storage consent. Strictly necessary storage (language, this choice) needs no
// consent; anything for analytics or marketing must be gated on hasConsent().
const KEY = 'imex-consent';
const VERSION = 1;
const MAX_AGE_MS = 365 * 24 * 60 * 60 * 1000;

export function readConsent() {
  try {
    const raw = JSON.parse(localStorage.getItem(KEY));
    if (!raw || raw.v !== VERSION || Date.now() - raw.ts > MAX_AGE_MS) return null;
    return { analytics: raw.analytics === true, ts: raw.ts };
  } catch {
    return null;
  }
}

export function writeConsent({ analytics }) {
  const value = { v: VERSION, ts: Date.now(), analytics: analytics === true };
  try {
    localStorage.setItem(KEY, JSON.stringify(value));
  } catch {
    /* storage unavailable: the banner will simply ask again next visit */
  }
  return { analytics: value.analytics, ts: value.ts };
}

// Use before loading any analytics or marketing script, e.g. if (hasConsent('analytics')) loadGA().
export const hasConsent = (category) => readConsent()?.[category] === true;
