'use client';

import { useEffect, useRef, useState } from 'react';
import type { CSSProperties } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import type { MotionValue } from 'framer-motion';
import { useLanguage } from '../../../contexts/LanguageContext';
import { useMounted } from '../../../hooks/useMounted';
import { useReveal } from '../../../hooks/useReveal';
import { cn } from '../../../lib/utils';
import { parseLit } from '../../../lib/litText';
import { WAITLIST_URL } from '../../layout/v3/navData';
import { Arrow, Caption, LIT, MICRO_CORE, PILL_WHITE, PLANET } from './Chapter';

// Orbit angle (deg) -> label key. 90deg is the bottom of the ring and the
// sequence runs clockwise, so the six beats of a visit read around the outline.
const PLANETS: { angle: number; key: string }[] = [
  { angle: 90, key: 'v2.step1Title' },
  { angle: 150, key: 'v2.step2Meta' },
  { angle: 210, key: 'v2.step2Licence' },
  { angle: 270, key: 'v2.dispatchTitle1' },
  { angle: 330, key: 'v2.step3Row3' },
  { angle: 30, key: 'v2.step3Row4' },
];

// The keyword sweep runs over p = .55 -> .95, one equal slot per lit word.
const LIT_START = 0.55;
const LIT_SPAN = 0.4;
// mist / white as literals: framer interpolates colour strings, not tokens.
const UNLIT_COLOR = '#B4C3DB';
const LIT_COLOR = '#ffffff';

const MD_QUERY = '(min-width: 768px)';

type PlanetStyle = CSSProperties & { '--a': string };

/* --- One label on the ring. The orbit position is a static class transform
   (.fs-planet reads --a / --r), so the scrubbed counter-rotation that keeps the
   label upright lives on the circle inside it: two transforms, two elements. --- */
function Planet({
  angle,
  label,
  counter,
  active,
}: {
  angle: number;
  label: string;
  counter: MotionValue<number>;
  active: boolean;
}) {
  const style: PlanetStyle = { '--a': `${angle}deg` };
  return (
    <div className="fs-planet col-start-1 row-start-1" style={style}>
      <motion.div
        className="relative grid place-items-center w-20 h-20 md:w-28 md:h-28 px-3 rounded-full border border-white/25 bg-ink-panel/80 text-center shadow-[0_10px_30px_-12px_rgba(0,0,0,.7)]"
        style={active ? { rotate: counter } : undefined}
      >
        <span className={`${PLANET} max-md:text-[11px]`}>{label}</span>
        <span aria-hidden="true" className="absolute -right-0.5 top-1/2 -mt-0.5 w-1.5 h-1.5 rounded-full bg-sage" />
      </motion.div>
    </div>
  );
}

/* --- Keyword k of n: lights up over its own slice of the sweep. Rendered per
   segment so each one owns its hooks; the list is keyed on the language. --- */
function LitWord({
  text,
  k,
  n,
  p,
  active,
}: {
  text: string;
  k: number;
  n: number;
  p: MotionValue<number>;
  active: boolean;
}) {
  const from = LIT_START + (LIT_SPAN * k) / n;
  const to = LIT_START + (LIT_SPAN * (k + 1)) / n;
  const opacity = useTransform(p, [from, to], [0.6, 1]);
  const color = useTransform(p, [from, to], [UNLIT_COLOR, LIT_COLOR]);
  const dot = useTransform(p, [from, to], [0, 1]);
  return (
    <motion.span className="text-white" style={active ? { opacity, color } : undefined}>
      {text}
      <motion.span
        aria-hidden="true"
        className="inline-block w-1.5 h-1.5 rounded-full bg-sage align-baseline ml-0.5"
        style={active ? { scale: dot } : undefined}
      />
    </motion.span>
  );
}

/**
 * Chapter 2 -- one MobiSoins visit as a pinned scene: six planets orbit the
 * "La visite" outline, then the paragraph lights up keyword by keyword and the
 * waitlist pill follows.
 *
 * Desktop (md+): a 100svh frame whose scene is scrubbed off its own travel
 * through the viewport (no extra pin track — the page must stay short). Below md nothing is pinned or scrubbed
 * -- the same markup stacks and reveals on scroll. Resting/SSR/no-JS: ring at
 * 0deg, every keyword lit, so the scene is readable before any script runs.
 */
export function VisitPinned() {
  const { t, language } = useLanguage();
  const mounted = useMounted();
  const track = useRef<HTMLElement>(null);
  const [isMd, setIsMd] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(MD_QUERY);
    const update = () => setIsMd(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  // Progress starts while the section is still entering (free travel, no height
  // cost) and ends when the track unpins.
  const { scrollYProgress: p } = useScroll({ target: track, offset: ['start 60%', 'end end'] });
  const rotate = useTransform(p, [0, 0.4], [-28, 0]);
  const scale = useTransform(p, [0, 0.4], [0.86, 1]);
  // The ring only steps back a little once the paragraph takes over: it has to
  // stay legible, not vanish.
  const ringOpacity = useTransform(p, [0.45, 0.6], [1, 0.55]);
  // One shared counter-rotation for all six labels (not six hooks).
  const counter = useTransform(rotate, (r) => -r);
  const coreScale = useTransform(p, [0.1, 0.45], [0.92, 1]);
  const y = useTransform(p, [0.42, 0.58], [36, 0]);
  const ctaOpacity = useTransform(p, [0.85, 0.97], [0, 1]);

  const caption = useReveal<HTMLDivElement>(0, 'fsRise');
  const stage = useReveal<HTMLDivElement>(0.1, 'fsRise');
  const para = useReveal<HTMLDivElement>(0.2, 'fsRise');
  const cta = useReveal<HTMLDivElement>(0.3, 'fsRise');

  // Hooks above always run; their outputs are only applied on md+ after mount.
  const active = mounted && isMd;

  const segments = parseLit(t('v3.visitPara'));
  const litCount = segments.filter((s) => s.lit).length;
  let litIndex = 0;

  return (
    <section id="visit" data-chapter="visit" ref={track} className="relative md:h-[100vh]">
      <div className="relative flex flex-col items-center gap-8 px-6 py-[7vh] md:sticky md:top-0 md:h-[100svh] md:justify-center md:gap-0 md:py-0 md:overflow-hidden">
        <div
          ref={caption.ref}
          style={caption.style}
          className="text-center md:absolute md:inset-x-0 md:top-[7vh]"
        >
          <Caption>{t('v2.stepsEyebrow')}</Caption>
        </div>

        {/* Stage: the ring and the core share one grid cell so they stay centred.
            Planets overflow the box by design (transforms take no layout space);
            the mobile height reserves room for them. `md:mb-[10vh]` lifts the
            centre so the ring, the paragraph and the pill never meet at 900px. */}
        <div
          ref={stage.ref}
          style={stage.style}
          className="relative grid place-items-center w-full h-[22rem] md:w-[13rem] md:h-[13rem] md:mb-[10vh]"
        >
          <motion.div
            className="col-start-1 row-start-1 grid place-items-center [--r:7.25rem] md:[--r:clamp(8rem,14vw,11.5rem)]"
            style={active ? { rotate, scale, opacity: ringOpacity } : undefined}
          >
            {PLANETS.map((planet) => (
              <Planet key={planet.key} angle={planet.angle} label={t(planet.key)} counter={counter} active={active} />
            ))}
          </motion.div>

          {/* Core: two outline squares, never rotated, painted above the ring. */}
          <div className="col-start-1 row-start-1 pointer-events-none grid place-items-center w-[13rem] h-[13rem] rounded-[3.25rem] border border-white/20">
            <motion.div
              className="grid place-items-center w-[9.5rem] h-[9.5rem] md:w-[11rem] md:h-[11rem] rounded-[2.5rem] border border-sage bg-ink-panel/40"
              style={active ? { scale: coreScale } : undefined}
            >
              <span className={MICRO_CORE}>{t('v3.visitCore')}</span>
            </motion.div>
          </div>
        </div>

        <div ref={para.ref} style={para.style} className="w-full md:absolute md:inset-x-0 md:bottom-[13vh]">
          <motion.p
            key={language}
            className={`${LIT} max-w-[62rem] mx-auto px-6 text-center text-white [text-shadow:0_2px_18px_rgba(3,18,38,.6)]`}
            style={active ? { y } : undefined}
          >
            {segments.map((seg, i) =>
              seg.lit ? (
                <LitWord key={i} text={seg.text} k={litIndex++} n={litCount} p={p} active={active} />
              ) : (
                <span key={i} className="text-mist/70">
                  {seg.text}
                </span>
              )
            )}
          </motion.p>
        </div>

        {/* The ask, right where the story lands. Fades in with the last keyword
            on desktop; always visible on phones. */}
        <div ref={cta.ref} style={cta.style} className="md:absolute md:inset-x-0 md:bottom-[4vh] flex justify-center">
          <motion.a
            href={WAITLIST_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(PILL_WHITE, 'px-5 py-2.5 text-[13px]')}
            style={active ? { opacity: ctaOpacity } : undefined}
          >
            {t('hero.bookNow')}
            <Arrow size={14} />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
