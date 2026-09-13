'use client';

import { useEffect, useId, useRef, useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '../../contexts/LanguageContext';
import { useMounted } from '../../hooks/useMounted';
import { CONSENT_OPEN, globalPrivacySignal, readConsent, writeConsent } from '../../lib/consent';

const PILL_WHITE =
  'inline-flex items-center justify-center rounded-full bg-white text-ink-panel px-4 py-2 text-[13px] font-medium transition-transform duration-[180ms] hover:-translate-y-0.5';
const PILL_OUTLINE =
  'inline-flex items-center justify-center rounded-full border border-white/40 text-white px-4 py-2 text-[13px] font-medium hover:border-white/75 hover:bg-white/5 transition-colors duration-200';
const CAPTION = 'font-mono text-[0.6875rem] uppercase tracking-[0.28em] text-white/70';

/* --- One category row: label, one-line description, switch (essential is locked on) --- */
function Row({
  label,
  description,
  checked,
  locked,
  lockedLabel,
  onChange,
}: {
  label: string;
  description: string;
  checked: boolean;
  locked?: boolean;
  lockedLabel?: string;
  onChange?: (v: boolean) => void;
}) {
  const id = useId();
  return (
    <div className="flex items-start justify-between gap-4 border-t border-white/10 py-3">
      <div className="min-w-0">
        <label htmlFor={id} className="block text-[14px] font-medium text-white">
          {label}
        </label>
        <p className="mt-0.5 text-[12.5px] leading-relaxed text-white/65">{description}</p>
      </div>
      {locked ? (
        <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.18em] text-sage">{lockedLabel}</span>
      ) : (
        <button
          id={id}
          type="button"
          role="switch"
          aria-checked={checked}
          onClick={() => onChange?.(!checked)}
          className={`relative mt-0.5 h-6 w-11 shrink-0 rounded-full transition-colors duration-200 ${checked ? 'bg-sage' : 'bg-white/20'}`}
        >
          <span
            aria-hidden="true"
            className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform duration-200 ${checked ? 'translate-x-[1.375rem]' : 'translate-x-0.5'}`}
          />
        </button>
      )}
    </div>
  );
}

/**
 * Consent panel (Quebec Law 25 / GDPR shape): shown on the first visit until a
 * choice is made, re-openable from the footer. Non-modal so the page stays
 * usable; non-essential categories default to off, and to off-with-a-note
 * when the browser sends a Global Privacy Control / Do Not Track signal.
 */
export function CookieConsent() {
  const { t } = useLanguage();
  const mounted = useMounted();
  const [open, setOpen] = useState(false);
  const [customize, setCustomize] = useState(false);
  const [hasChoice, setHasChoice] = useState(false);
  const [gpc, setGpc] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);
  const panel = useRef<HTMLDivElement>(null);
  const titleId = useId();

  // First visit (or expired choice): show. Footer link: reopen in customize mode.
  useEffect(() => {
    const current = readConsent();
    setGpc(globalPrivacySignal());
    if (current) {
      setHasChoice(true);
      setAnalytics(current.analytics);
      setMarketing(current.marketing);
    } else {
      setOpen(true);
    }
    const onOpen = () => {
      const c = readConsent();
      setAnalytics(!!c?.analytics);
      setMarketing(!!c?.marketing);
      setCustomize(true);
      setOpen(true);
    };
    window.addEventListener(CONSENT_OPEN, onOpen);
    return () => window.removeEventListener(CONSENT_OPEN, onOpen);
  }, []);

  // Escape closes only when a choice already exists (a first visit must choose).
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && hasChoice) setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, hasChoice]);

  const commit = (a: boolean, m: boolean) => {
    writeConsent({ analytics: a, marketing: m });
    setAnalytics(a);
    setMarketing(m);
    setHasChoice(true);
    setCustomize(false);
    setOpen(false);
  };

  if (!mounted || !open) return null;

  return (
    <div
      ref={panel}
      role="dialog"
      aria-labelledby={titleId}
      aria-live="polite"
      // Bottom-right on desktop: the hero's copy and CTAs live bottom-left, and
      // the fixed bottom bar sits below (3vh + its 3rem height).
      className="fs-panel fixed z-[55] inset-x-4 bottom-4 max-h-[calc(100svh-5.5rem)] overflow-y-auto rounded-3xl p-5 md:inset-x-auto md:right-[clamp(1rem,4.17vw,3.75rem)] md:bottom-[calc(3vh+4rem)] md:max-h-[calc(100svh-3vh-9rem)] md:w-[26rem]"
    >
      <p className={CAPTION}>( {t('consent.caption')} )</p>
      <h2 id={titleId} className="mt-2 font-sans text-[1.25rem] font-light leading-tight text-white">
        {t('consent.title')}
      </h2>
      <p className="mt-2 text-[13px] leading-relaxed text-white/75">
        {t('consent.body')}{' '}
        <Link href="/cookies" className="text-white underline decoration-white/40 underline-offset-4 hover:decoration-white">
          {t('consent.policyLink')}
        </Link>
      </p>
      {gpc && <p className="mt-2 text-[12px] leading-relaxed text-sage">{t('consent.gpcNote')}</p>}

      {customize && (
        <div className="mt-4">
          <Row label={t('consent.essential')} description={t('consent.essentialDesc')} checked locked lockedLabel={t('consent.alwaysOn')} />
          <Row label={t('consent.analytics')} description={t('consent.analyticsDesc')} checked={analytics} onChange={setAnalytics} />
          <Row label={t('consent.marketing')} description={t('consent.marketingDesc')} checked={marketing} onChange={setMarketing} />
        </div>
      )}

      <div className="mt-4 flex flex-wrap items-center gap-2">
        {customize ? (
          <button type="button" onClick={() => commit(analytics, marketing)} className={PILL_WHITE}>
            {t('consent.save')}
          </button>
        ) : (
          <button type="button" onClick={() => commit(true, true)} className={PILL_WHITE}>
            {t('consent.acceptAll')}
          </button>
        )}
        <button type="button" onClick={() => commit(false, false)} className={PILL_OUTLINE}>
          {t('consent.rejectAll')}
        </button>
        {!customize && (
          <button
            type="button"
            onClick={() => setCustomize(true)}
            className="ml-auto text-[13px] text-white/75 underline decoration-white/30 underline-offset-4 hover:text-white"
          >
            {t('consent.customize')}
          </button>
        )}
        {customize && hasChoice && (
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="ml-auto text-[13px] text-white/75 underline decoration-white/30 underline-offset-4 hover:text-white"
          >
            {t('consent.close')}
          </button>
        )}
      </div>
    </div>
  );
}
