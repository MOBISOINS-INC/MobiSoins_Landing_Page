'use client';

import { useCallback, useEffect, useState } from 'react';
import {
  CONSENT_CHANGED,
  openConsentPreferences,
  readConsent,
  writeConsent,
  type Consent,
  type ConsentCategory,
} from '../lib/consent';

/**
 * The visitor's stored consent, live. `consent` is null on the server, on the
 * first client render and until a choice is made — so anything gated on it
 * stays off by default.
 */
export function useConsent() {
  const [consent, setConsent] = useState<Consent | null>(null);

  useEffect(() => {
    setConsent(readConsent());
    const onChange = (e: Event) => setConsent((e as CustomEvent<Consent | null>).detail ?? readConsent());
    window.addEventListener(CONSENT_CHANGED, onChange);
    return () => window.removeEventListener(CONSENT_CHANGED, onChange);
  }, []);

  const has = useCallback((category: ConsentCategory) => !!consent && consent[category], [consent]);
  const set = useCallback((choice: { analytics: boolean; marketing: boolean }) => setConsent(writeConsent(choice)), []);

  return { consent, hasConsent: has, setConsent: set, openPreferences: openConsentPreferences };
}
