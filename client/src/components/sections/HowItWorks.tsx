'use client';

import { useLanguage } from '../../contexts/LanguageContext';
import { useReveal } from '../../hooks/useReveal';

// Product-led rebuild: each step shows the actual app surface rather than a
// stock icon in a rounded square. The section is lifted into the hero's
// dissolve on desktop (negative margin) so there is no seam between them.

const CARD =
  'rounded-2xl border border-slate-200/70 bg-white p-3 sm:p-[30px] shadow-[0_24px_50px_-24px_rgba(10,31,56,0.28)]';

const RouteMap = ({ chip }: { chip: string }) => (
  <div className="relative mt-4 h-32 overflow-hidden rounded-xl bg-[#edf2ee]">
    <svg
      viewBox="0 0 380 128"
      preserveAspectRatio="xMidYMid slice"
      className="h-full w-full"
      aria-hidden="true"
    >
      <rect width="380" height="128" fill="#edf2ee" />
      <g stroke="#dde5df" strokeWidth="13" fill="none">
        <path d="M-10 38 L150 48 L200 96 L400 90" />
        <path d="M70 -10 L84 60 L74 138" />
        <path d="M290 -10 L300 68 L292 138" />
      </g>
      <path
        d="M84 60 L150 48 L200 96 L285 88 L300 68"
        stroke="#98B690"
        strokeWidth="3"
        strokeDasharray="6 5"
        fill="none"
      />
      <circle cx="84" cy="60" r="6" fill="#4e6645" />
      <circle cx="300" cy="68" r="8" fill="#fff" stroke="#4e6645" strokeWidth="3" />
    </svg>
    <div className="absolute bottom-3 left-3 rounded-lg bg-white px-2.5 py-1.5 text-[11.5px] font-medium text-[#0a1f38]">
      {chip}
    </div>
  </div>
);

const Row = ({ label, value, muted }: { label: string; value: string; muted?: boolean }) => (
  <div className="flex justify-between gap-1 text-[10px] sm:text-[13.5px] text-[#5a5a6a]">
    <span>{label}</span>
    <span className={`whitespace-nowrap ${muted ? 'text-[#4e6645]' : 'text-[#0a1f38]'}`}>{value}</span>
  </div>
);

export const HowItWorks = () => {
  const { t } = useLanguage();
  const { ref, style } = useReveal();

  return (
    <section id="how-it-works" className="bg-white px-0 pb-28 lg:pb-32">
      <div className="container-custom">
        {/* Negative margin pulls the cards up into the hero's white dissolve */}
        <div ref={ref} style={style} className="relative pt-16 sm:pt-12 lg:pt-16">
          <div className="mb-12 flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-baseline">
            <h2 className="text-[26px] font-semibold leading-tight tracking-[-0.035em] text-[#0a1f38] lg:text-[30px]">
              {t('v2.stepsTitle')}
            </h2>
            <span className="text-[12px] font-medium uppercase tracking-[0.14em] text-slate-500">
              {t('v2.stepsEyebrow')}
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2.5 sm:gap-[30px]">
            {/* 01 — the request */}
            <div
              className={CARD}
            >
              <div className="flex items-baseline justify-between">
                <span className="text-[13px] font-semibold text-[#0a1f38]">{t('v2.step1Num')}</span>
                <span className="hidden sm:inline text-[12px] font-medium uppercase tracking-[0.14em] text-slate-500">
                  {t('v2.step1Meta')}
                </span>
              </div>
              <h3 className="mt-2 sm:mt-3 text-[12px] leading-tight sm:text-[19px] font-medium tracking-[-0.02em] text-[#0a1f38]">
                {t('v2.step1Title')}
              </h3>
              <div className="mt-4 flex flex-col gap-2">
                <div className="flex justify-between rounded-[9px] border border-[#4e6645] bg-[#f4f7f2] px-2 py-1.5 text-[10px] sm:px-3 sm:py-2.5 sm:text-[13.5px] text-[#0a1f38]">
                  <span>{t('v2.step1Opt1')}</span>
                  <span className="text-[#4e6645]">✓</span>
                </div>
                <div className="rounded-[9px] border border-slate-100 px-2 py-1.5 text-[10px] sm:px-3 sm:py-2.5 sm:text-[13.5px] text-[#5a5a6a]">
                  {t('v2.step1Opt2')}
                </div>
                <div className="rounded-[9px] border border-slate-100 px-2 py-1.5 text-[10px] sm:px-3 sm:py-2.5 sm:text-[13.5px] text-[#5a5a6a]">
                  {t('v2.step1Opt3')}
                </div>
              </div>
              <div className="mt-4 border-t border-slate-100 pt-3">
                <Row label={t('v2.step1FootLabel')} value={t('v2.step1FootValue')} />
              </div>
            </div>

            {/* 02 — the match */}
            <div
              className={CARD}
            >
              <div className="flex items-baseline justify-between">
                <span className="text-[13px] font-semibold text-[#0a1f38]">{t('v2.step2Num')}</span>
                <span className="hidden sm:inline text-[12px] font-medium uppercase tracking-[0.14em] text-slate-500">
                  {t('v2.step2Meta')}
                </span>
              </div>
              <h3 className="mt-2 sm:mt-3 text-[12px] leading-tight sm:text-[19px] font-medium tracking-[-0.02em] text-[#0a1f38]">
                {t('v2.step2Title')}
              </h3>
              <RouteMap chip={t('v2.step2Chip')} />
              <div className="mt-4 flex items-center gap-2 sm:gap-3 border-t border-slate-100 pt-3">
                <div className="h-6 w-6 shrink-0 sm:h-8 sm:w-8 rounded-full bg-[#dde5df]" />
                <div className="text-[9.5px] sm:text-[11.5px] text-slate-500">{t('v2.step2Licence')}</div>
              </div>
            </div>

            {/* 03 — the report */}
            <div
              className={CARD}
            >
              <div className="flex items-baseline justify-between">
                <span className="text-[13px] font-semibold text-[#0a1f38]">{t('v2.step3Num')}</span>
                <span className="hidden sm:inline text-[12px] font-medium uppercase tracking-[0.14em] text-slate-500">
                  {t('v2.step3Meta')}
                </span>
              </div>
              <h3 className="mt-2 sm:mt-3 text-[12px] leading-tight sm:text-[19px] font-medium tracking-[-0.02em] text-[#0a1f38]">
                {t('v2.step3Title')}
              </h3>
              <div className="mt-4 flex flex-col gap-2 sm:gap-[11px]">
                <Row label={t('v2.step3Row1')} value="—" />
                <div className="h-px bg-slate-100" />
                <Row label={t('v2.step3Row2')} value="—" />
                <div className="h-px bg-slate-100" />
                <Row label={t('v2.step3Row3')} value={t('v2.step3Row3Value')} muted />
                <div className="h-px bg-slate-100" />
                <Row label={t('v2.step3Row4')} value={t('v2.step3Row4Value')} />
              </div>
              <div className="mt-4 rounded-[9px] border border-slate-200 py-1.5 sm:py-2.5 text-center text-[11px] sm:text-[14px] font-medium text-[#0a1f38]">
                {t('v2.step3Cta')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
