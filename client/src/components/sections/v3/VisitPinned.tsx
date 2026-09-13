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
import { Arrow, Caption, MICRO_CORE, PILL_WHITE } from './Chapter';

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

/* --- Everything in the scene is sized from two CSS variables that follow the
   SMALLER of the viewport's width and height, so a 1366x768 laptop, a 1024x1366
   tablet and a 360px phone each get a ring that fits with the paragraph below
   it. Planets clear the core square as long as --planet < 0.85 * --r, which
   the clamps guarantee. --- */
const STAGE_VARS =
  '[--r:clamp(6.25rem,min(13vw,16vh),10.5rem)] [--planet:clamp(4.25rem,min(8vw,10vh),7rem)]';
// Paragraph and planet labels scale with the same idea (never taller than the
// frame can afford, never below a readable floor).
const LIT_FLUID =
  'font-sans font-semibold text-[clamp(1.05rem,min(2.3vw,3vh),2.15rem)] leading-[1.25] tracking-[-0.01em]';
const PLANET_FLUID = 'font-sans font-normal text-[clamp(0.65rem,min(1vw,1.4vh),0.8125rem)] leading-[1.2] text-white';

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
        className="relative grid h-[var(--planet)] w-[var(--planet)] place-items-center rounded-full border border-white/25 bg-ink-panel/80 px-2 text-center shadow-[0_10px_30px_-12px_rgba(0,0,0,.7)]"
        style={active ? { rotate: counter } : undefined}
      >
        <span className={PLANET_FLUID}>{label}</span>
        <span aria-hidden="true" className="absolute -right-0.5 top-1/2 -mt-0.5 h-1.5 w-1.5 rounded-full bg-sage" />
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
        className="ml-0.5 inline-block h-1.5 w-1.5 rounded-full bg-sage align-baseline"
        style={active ? { scale: dot } : undefined}
      />
    </motion.span>
  );
}

/**
 * Chapter 2 -- one MobiSoins visit as a scene: six planets orbit the
 * "La visite" outline, then the paragraph lights up keyword by keyword and the
 * waitlist pill follows.
 *
 * Plain flow on every size (caption, ring, paragraph, pill stacked and
 * centred) so nothing can collide; the scrub reads the section's own travel
 * through the viewport on md+. Resting/SSR/no-JS: ring at 0deg, every keyword
 * lit, so the scene is readable before any script runs.
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

  // Progress starts while the section is still entering and ends once it is
  // fully in view, so the story is told on the way in.
  const { scrollYProgress: p } = useScroll({ target: track, offset: ['start 60%', 'end end'] });
  const rotate = useTransform(p, [0, 0.4], [-28, 0]);
  const scale = useTransform(p, [0, 0.4], [0.86, 1]);
  // The ring only steps back a little once the paragraph takes over: it has to
  // stay legible, not vanish.
  const ringOpacity = useTransform(p, [0.45, 0.6], [1, 0.55]);
  // One shared counter-rotation for all six labels (not six hooks).
  const counter = useTransform(rotate, (r) => -r);
  const coreScale = useTransform(p, [0.1, 0.45], [0.92, 1]);
  const y = useTransform(p, [0.42, 0.58], [24, 0]);
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
    <section
      id="visit"
      data-chapter="visit"
      ref={track}
      className="relative flex flex-col items-center justify-center gap-[clamp(1.25rem,3vh,2.5rem)] px-6 py-[clamp(2.5rem,7vh,5rem)] md:min-h-[100svh]"
    >
      {/* Ink band so the paragraph reads on any video frame */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-[58%] bg-gradient-to-t from-ink/85 via-ink/45 to-transparent" />

      <div ref={caption.ref} style={caption.style} className="relative text-center">
        <Caption>{t('v2.stepsEyebrow')}</Caption>
      </div>

      {/* Stage: takes exactly the ring's footprint (2r + one planet) in layout,
          so neighbours can never overlap it; ring and core share one cell. */}
      <div
        ref={stage.ref}
        style={stage.style}
        className={cn('relative grid h-[calc(var(--r)*2+var(--planet))] w-[calc(var(--r)*2+var(--planet))] place-items-center', STAGE_VARS)}
      >
        <motion.div
          className="col-start-1 row-start-1 grid place-items-center"
          style={active ? { rotate, scale, opacity: ringOpacity } : undefined}
        >
          {PLANETS.map((planet) => (
            <Planet key={planet.key} angle={planet.angle} label={t(planet.key)} counter={counter} active={active} />
          ))}
        </motion.div>

        {/* Core: two outline squares, never rotated, painted above the ring;
            sized off --r so the orbit always clears it. */}
        <div className="pointer-events-none col-start-1 row-start-1 grid h-[calc(var(--r)*1.05)] w-[calc(var(--r)*1.05)] place-items-center rounded-[22%] border border-white/20">
          <motion.div
            className="grid h-[85%] w-[85%] place-items-center rounded-[22%] border border-sage bg-ink-panel/40"
            style={active ? { scale: coreScale } : undefined}
          >
            <span className={MICRO_CORE}>{t('v3.visitCore')}</span>
          </motion.div>
        </div>
      </div>

      <div ref={para.ref} style={para.style} className="relative w-full">
        <motion.p
          key={language}
          className={`${LIT_FLUID} mx-auto max-w-[62rem] text-center text-white [text-shadow:0_2px_18px_rgba(3,18,38,.6)]`}
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

      {/* The ask, right where the story lands. Fades in with the last keyword on desktop. */}
      <div ref={cta.ref} style={cta.style} className="relative flex justify-center">
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
    </section>
  );
}
