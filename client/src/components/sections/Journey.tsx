'use client';

import { motion, useTransform } from 'framer-motion';
import type { MotionValue } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import { panelPose, usePinnedSteps } from '../../hooks/usePinnedSteps';
import { ArrowRight, Eyebrow } from '../ui/editorial';
import { JourneyFigure } from './JourneyFigure';

const WAITLIST_URL =
  'https://docs.google.com/forms/d/1TaBNJ9M7Ks6LW5_Vfyqx5DodEPQZbo06bxX8PvJFLiw/viewform';

// The journey, as a navy band of four milestones. On desktop the band pins to
// the viewport and vertical scroll pans the track right, one milestone per
// screen. The RESTING layout is the plain stacked list: phones,
// `prefers-reduced-motion`, and a page where JS never runs all get that, so the
// content can never be stranded off-screen.

const STEPS = [1, 2, 3, 4] as const;
const LAST = STEPS.length - 1;
// Each milestone: a display lead (P1) over three short ruled paragraphs.
const POINTS = [2, 3, 4] as const;

const StepBody = ({ n, pinned }: { n: number; pinned: boolean }) => {
  const { t } = useLanguage();
  return (
    <>
      <div className="flex flex-col gap-4 lg:gap-6">
        <div className="flex items-center gap-2.5 text-[12px] font-semibold uppercase tracking-[0.14em] text-leaf-on-dark lg:text-[13px]">
          {n === 3 && <span className="h-2 w-2 rounded-full bg-leaf-on-dark" />}
          {String(n).padStart(2, '0')} — {t(`about.journey${n}Date`)}
        </div>
        <h3
          className={`font-display font-light tracking-[-0.02em] text-white ${
            pinned ? 'text-[72px] leading-none xl:text-[88px] xl:leading-[0.98]' : 'text-[30px] leading-[1.1] lg:text-[40px]'
          }`}
        >
          {t(`about.journey${n}Title`)}
        </h3>
        {/* Figure for the milestone, captioned with what it answers */}
        <figure className={`m-0 flex flex-col gap-4 text-leaf-on-dark ${pinned ? 'mt-6 xl:mt-10' : 'mt-2'}`}>
          <JourneyFigure n={n} className={pinned ? 'w-[300px] xl:w-[380px]' : 'w-[220px] lg:w-[300px]'} />
          <figcaption className="text-[13px] font-semibold uppercase tracking-[0.14em] lg:text-[14px]">
            {t(`about.journey${n}Legend`)}
          </figcaption>
        </figure>
      </div>
      <div className="flex flex-col">
        <p
          className={`pb-5 font-display font-light tracking-[-0.01em] text-white lg:pb-6 ${
            pinned ? 'text-[24px] leading-[1.3] xl:text-[28px]' : 'text-[19px] leading-[1.45]'
          }`}
        >
          {t(`about.journey${n}P1`)}
        </p>
        {POINTS.map((i) => (
          <p
            key={i}
            className="border-t border-white/20 py-4 text-[15px] leading-[1.65] text-white/80 lg:text-[16px]"
          >
            {t(`about.journey${n}P${i}`)}
          </p>
        ))}
        {n === 3 && (
          <a
            href={WAITLIST_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex h-12 items-center gap-3 self-start rounded bg-white px-6 text-[15px] font-semibold text-ink transition-colors hover:bg-leaf-on-dark hover:text-ink-deep"
          >
            {t('about.journeyCta')}
            <ArrowRight />
          </a>
        )}
      </div>
    </>
  );
};

const Panel = ({ n, current, position }: { n: number; current: boolean; position: MotionValue<number> }) => {
  const opacity = useTransform(position, (p) => panelPose(p, n - 1, LAST).opacity);
  const y = useTransform(position, (p) => panelPose(p, n - 1, LAST).y);

  return (
    // Off-screen milestones are inert: tabbing into one would make the browser
    // scroll the clipped track sideways and break the layout.
    <div className="w-screen shrink-0" inert={!current}>
      <motion.div
        style={{ opacity, y }}
        className="container-custom grid grid-cols-[minmax(0,1fr)_minmax(0,520px)] items-start gap-x-20"
      >
        <StepBody n={n} pinned />
      </motion.div>
    </div>
  );
};

export const Journey = () => {
  const { t } = useLanguage();
  const { ref, pinned, active, goTo, progress, position, x } = usePinnedSteps(STEPS.length);

  const header = (
    <div className="flex flex-col gap-4 lg:gap-6">
      <Eyebrow onDark>{t('about.journeyBadge')}</Eyebrow>
      <h2 className="font-display text-[36px] font-light leading-[1.06] tracking-[-0.02em] text-white lg:text-[60px] lg:leading-[1.03]">
        {t('about.journeyTitle')}
      </h2>
    </div>
  );

  if (!pinned) {
    return (
      <section ref={ref} className="bg-ink py-[72px] text-white lg:py-32">
        <div className="container-custom flex flex-col gap-10 lg:gap-16">
          {header}
          <div className="flex flex-col">
            {STEPS.map((n) => (
              <div
                key={n}
                className="grid grid-cols-1 gap-y-5 border-t border-white/20 py-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,520px)] lg:gap-x-20 lg:py-12"
              >
                <StepBody n={n} pinned={false} />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={ref} className="relative bg-ink text-white" style={{ height: `${STEPS.length * 100}vh` }}>
      <div className="sticky top-0 flex h-screen flex-col overflow-hidden pb-10 pt-28">
        {/* Slim top bar: label, title and step count over the progress rule */}
        <div className="container-custom flex w-full flex-col gap-5">
          <div className="flex items-baseline justify-between gap-8">
            <div className="flex items-baseline gap-6">
              <Eyebrow onDark>{t('about.journeyBadge')}</Eyebrow>
              <h2 className="font-display text-[20px] font-light tracking-[-0.01em] text-white/80">
                {t('about.journeyTitle')}
              </h2>
            </div>
            <div className="text-[13px] font-semibold tracking-[0.14em] text-white/80">
              {String(active + 1).padStart(2, '0')} / {String(STEPS.length).padStart(2, '0')}
            </div>
          </div>
          <div className="relative h-px bg-white/20">
            <motion.div style={{ scaleX: progress }} className="absolute inset-0 origin-left bg-leaf-on-dark" />
          </div>
        </div>
        <motion.div style={{ x }} className="flex min-h-0 flex-1 items-start pt-14 will-change-transform xl:pt-20">
          {STEPS.map((n) => (
            <Panel key={n} n={n} current={active === n - 1} position={position} />
          ))}
        </motion.div>
        {/* Step strip: jump to a milestone. Dropped on short screens, where the
            milestone text needs the room. */}
        <nav
          aria-label={t('about.journeyLegendLabel')}
          className="container-custom hidden w-full grid-cols-4 gap-x-8 [@media(min-height:740px)]:grid"
        >
          {STEPS.map((n) => {
            const on = active === n - 1;
            return (
              <button
                key={n}
                type="button"
                onClick={() => goTo(n - 1)}
                aria-current={on ? 'step' : undefined}
                className={`flex min-h-11 items-baseline gap-3 border-t pt-3 text-left transition-colors duration-300 ${
                  on ? 'border-leaf-on-dark text-white' : 'border-white/20 text-white/60 hover:text-white'
                }`}
              >
                <span className={`text-[12px] font-semibold tracking-[0.14em] ${on ? 'text-leaf-on-dark' : ''}`}>
                  {String(n).padStart(2, '0')}
                </span>
                <span className="text-[14px] leading-normal">{t(`about.journey${n}Title`)}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </section>
  );
};
