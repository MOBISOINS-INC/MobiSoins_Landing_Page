/**
 * Cookie / tracking consent, Quebec Law 25 style: nothing non-essential runs
 * until the visitor opts in, the choice is stored (localStorage + a cookie so
 * a server or edge can read it), expires after six months, and can be
 * withdrawn at any time. Global Privacy Control / Do Not Track are honoured as
 * "refuse non-essential" defaults.
 */
import { readStorage, removeStorage, writeStorage } from './storage';

export type ConsentCategory = 'analytics' | 'marketing';

export interface Consent {
  v: 1;
  /** Epoch ms when the choice was made. */
  ts: number;
  analytics: boolean;
  marketing: boolean;
}

const STORAGE_KEY = 'ms-consent';
const COOKIE_NAME = 'ms_consent';
const MAX_AGE_DAYS = 180;

/** Fired on `window` whenever the stored consent changes (detail: Consent | null). */
export const CONSENT_CHANGED = 'ms-consent:change';
/** Fired on `window` to (re)open the preferences panel (footer link). */
export const CONSENT_OPEN = 'ms-consent:open';

const isBrowser = () => typeof window !== 'undefined';

export function readConsent(): Consent | null {
  if (!isBrowser()) return null;
  try {
    const raw = readStorage(STORAGE_KEY);
    if (!raw) return null;
    const c = JSON.parse(raw) as Partial<Consent>;
    if (c.v !== 1 || typeof c.ts !== 'number') return null;
    if (Date.now() - c.ts > MAX_AGE_DAYS * 86400_000) return null; // expired: ask again
    return { v: 1, ts: c.ts, analytics: !!c.analytics, marketing: !!c.marketing };
  } catch {
    return null;
  }
}

export function writeConsent(choice: { analytics: boolean; marketing: boolean }): Consent {
  const c: Consent = { v: 1, ts: Date.now(), analytics: choice.analytics, marketing: choice.marketing };
  // Private mode / blocked storage: the cookie below still carries the choice.
  writeStorage(STORAGE_KEY, JSON.stringify(c));
  const secure = isBrowser() && location.protocol === 'https:' ? '; Secure' : '';
  document.cookie = `${COOKIE_NAME}=${encodeURIComponent(`${c.analytics ? 1 : 0}${c.marketing ? 1 : 0}`)}; Max-Age=${MAX_AGE_DAYS * 86400}; Path=/; SameSite=Lax${secure}`;
  window.dispatchEvent(new CustomEvent(CONSENT_CHANGED, { detail: c }));
  return c;
}

export function clearConsent(): void {
  removeStorage(STORAGE_KEY);
  document.cookie = `${COOKIE_NAME}=; Max-Age=0; Path=/; SameSite=Lax`;
  window.dispatchEvent(new CustomEvent(CONSENT_CHANGED, { detail: null }));
}

export function hasConsent(category: ConsentCategory): boolean {
  const c = readConsent();
  return !!c && c[category];
}

/** True when the browser asks not to be tracked (GPC or legacy DNT). */
export function globalPrivacySignal(): boolean {
  if (!isBrowser()) return false;
  const nav = navigator as Navigator & { globalPrivacyControl?: boolean };
  return nav.globalPrivacyControl === true || nav.doNotTrack === '1';
}

export function openConsentPreferences(): void {
  if (isBrowser()) window.dispatchEvent(new Event(CONSENT_OPEN));
}
