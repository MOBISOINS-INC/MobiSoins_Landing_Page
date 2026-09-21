'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useReveal } from '../../hooks/useReveal';
import { DISPLAY, Eyebrow } from '../ui/editorial';

// Each step shows a fragment of the actual app surface rather than a stock icon
// in a rounded square. Laid out as ruled rows beside a sticky title — not three
// equal cards.
const PANEL = 'rounded-md border border-rule bg-white';

const Step = ({
  num,
  title,
  meta,
  children,
  last = false,
}: {
  num: string;
  title: string;
  meta: string;
  children: ReactNode;
  last?: boolean;
}) => (
  <div
    className={`grid grid-cols-1 gap-y-5 py-9 first:pt-0 lg:grid-cols-[96px_minmax(0,1fr)_320px] lg:items-start lg:gap-x-8 lg:py-12 ${
      last ? 'pb-0 lg:pb-0' : 'border-b border-rule'
    }`}
  >
    <div className="flex items-baseline gap-4 lg:contents">
      <div className="font-display text-[44px] font-light leading-none text-ink-faint lg:text-[64px]">
        {num}
      </div>
      <div className="lg:pt-2">
        <h3 className="font-sans text-[20px] font-semibold tracking-normal text-ink lg:text-[24px]">
          {title}
        </h3>
        <div className="mt-1 text-[13px] font-medium text-leaf-text lg:mt-2.5 lg:text-[14px]">{meta}</div>
      </div>
    </div>
    {children}
  </div>
);

const Row = ({ label, value, last = false }: { label: string; value: ReactNode; last?: boolean }) => (
  <div
    className={`flex items-center justify-between gap-3 px-4 py-3 text-[14px] text-ink-soft ${
      last ? '' : 'border-b border-rule'
    }`}
  >
    <span>{label}</span>
    <span className="whitespace-nowrap font-semibold text-ink">{value}</span>
  </div>
);

const Radio = ({ on = false }: { on?: boolean }) => (
  <span
    aria-hidden="true"
    className={`h-[18px] w-[18px] shrink-0 rounded-full border ${
      on ? 'border-ink bg-ink shadow-[inset_0_0_0_4px_#fff]' : 'border-ink-faint'
    }`}
  />
);

type StepData = { num: string; title: string; meta: string; panel: ReactNode };

const LOOP_MS = 4000;

// Mobile-only carousel. Every slide sits in the same grid cell so the box
// always takes the height of the tallest step — no layout jump between slides.
const StepLoop = ({ steps }: { steps: StepData[] }) => {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = window.setInterval(() => {
      if (!document.hidden) setActive((a) => (a + 1) % steps.length);
    }, LOOP_MS);
    return () => window.clearInterval(id);
  }, [paused, steps.length]);

  return (
    <div className="lg:hidden">
      <div
        className="grid"
        onTouchStart={() => setPaused(true)}
        onTouchEnd={() => setPaused(false)}
      >
        {steps.map((st, i) => (
          <div
            key={st.num}
            aria-hidden={i !== active}
            className={`col-start-1 row-start-1 flex flex-col gap-2.5 transition-[opacity,transform] duration-500 ease-out ${
              i === active ? 'translate-x-0 opacity-100' : 'pointer-events-none translate-x-3 opacity-0'
            }`}
          >
            <div className="flex items-baseline gap-3">
              <div className="font-display text-[26px] font-light leading-none text-ink-faint">{st.num}</div>
              <div>
                <h3 className="font-sans text-[15px] font-semibold tracking-normal text-ink">{st.title}</h3>
                <div className="mt-0.5 text-[11px] font-medium text-leaf-text">{st.meta}</div>
              </div>
            </div>
            <div className="text-[12px] [&_*]:!text-[12px] [&_.px-4]:!px-3 [&_[class*=py-3]]:!py-2 [&_.p-4]:!p-3 [&_img]:!h-11 [&_img]:!w-11">{st.panel}</div>
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center gap-2" role="tablist">
        {steps.map((st, i) => (
          <button
            key={st.num}
            type="button"
            role="tab"
            aria-selected={i === active}
            aria-label={st.title}
            onClick={() => setActive(i)}
            className="flex h-6 items-center"
          >
            <span
              className={`block h-[3px] rounded-full transition-all duration-300 ${
                i === active ? 'w-8 bg-ink' : 'w-4 bg-rule'
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export const HowItWorks = () => {
  const { t } = useLanguage();
  const { ref, style } = useReveal();

  const steps = [
    { num: t('v2.step1Num'), title: t('v2.step1Title'), meta: t('v2.step1Meta'), panel: (
              <div className={`${PANEL} flex flex-col text-[15px]`}>
                <div className="flex items-center justify-between border-b border-rule px-4 py-3.5 font-medium text-ink">
                  {t('v2.step1Opt1')}
                  <Radio on />
                </div>
                <div className="flex items-center justify-between border-b border-rule px-4 py-3.5 text-ink-soft">
                  {t('v2.step1Opt2')}
                  <Radio />
                </div>
                <div className="flex items-center justify-between border-b border-rule px-4 py-3.5 text-ink-soft">
                  {t('v2.step1Opt3')}
                  <Radio />
                </div>
                <div className="flex justify-between rounded-b-md bg-panel px-4 py-3 text-[13px] text-ink-soft">
                  {t('v2.step1FootLabel')}
                  <span className="font-semibold tabular-nums text-ink">{t('v2.step1FootValue')}</span>
                </div>
              </div>
    ) },
    { num: t('v2.step2Num'), title: t('v2.step2Title'), meta: t('v2.step2Meta'), panel: (
              <div className={`${PANEL} flex items-center gap-3.5 p-4`}>
                <Image
                  src="/nurses/step-nurse-avatar.jpg"
                  alt=""
                  width={128}
                  height={128}
                  className="h-16 w-16 shrink-0 rounded object-cover"
                />
                <div className="flex flex-col gap-1">
                  <div className="text-[13px] text-ink-soft">{t('v2.step2Licence')}</div>
                  <div className="flex items-center gap-2 text-[13px] font-semibold text-leaf-text">
                    <span className="h-[7px] w-[7px] rounded-full bg-leaf" aria-hidden="true" />
                    {t('v2.step2Chip')}
                  </div>
                </div>
              </div>
    ) },
    { num: t('v2.step3Num'), title: t('v2.step3Title'), meta: t('v2.step3Meta'), panel: (
              <div className={`${PANEL} flex flex-col`}>
                <Row label={t('v2.step3Row1')} value="·" />
                <Row label={t('v2.step3Row2')} value="·" />
                <Row label={t('v2.step3Row3')} value={t('v2.step3Row3Value')} />
                <Row
                  last
                  label={t('v2.step3Row4')}
                  value={
                    <span className="border-b border-leaf pb-px">
                      {t('v2.step3Cta')} {t('v2.step3Row4Value')}
                    </span>
                  }
                />
              </div>
    ) },
  ];

  return (
    <section id="how-it-works" className="bg-paper py-10 lg:pb-[136px] lg:pt-32">
      <div className="container-custom">
        <div
          ref={ref}
          style={style}
          className="grid grid-cols-1 gap-y-5 lg:gap-y-10 lg:grid-cols-[minmax(0,400px)_minmax(0,1fr)] lg:gap-x-[120px]"
        >
          <div className="flex flex-col gap-2 lg:sticky lg:top-28 lg:gap-6 lg:self-start">
            <Eyebrow>{t('v2.stepsEyebrow')}</Eyebrow>
            <h2 className={`${DISPLAY} text-[26px] leading-[1.08] lg:text-[60px] lg:leading-[1.02]`}>
              {t('v2.stepsTitle')}
            </h2>
          </div>

          {/* Phone: one compact step at a time, looping. */}
          <StepLoop steps={steps} />

          {/* Desktop: ruled rows. */}
          <div className="hidden flex-col lg:flex">
            {steps.map((st, i) => (
              <Step key={st.num} num={st.num} title={st.title} meta={st.meta} last={i === steps.length - 1}>
                {st.panel}
              </Step>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
