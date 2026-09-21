'use client';

import { useEffect } from 'react';
import type { ReactNode } from 'react';
import Image from 'next/image';
import Link from '../ui/LocaleLink';
import { motion, useTransform } from 'framer-motion';
import type { MotionValue } from 'framer-motion';
import { panelPose, usePinnedSteps } from '../../hooks/usePinnedSteps';
import { SERVICE_CATEGORIES, type ServiceCategory } from '../../data/services';
import { SERVICE_PHOTOS } from '../../data/servicePhotos';
import { ArrowRight, DISPLAY, Eyebrow } from '../ui/editorial';

// The catalogue as a pinned band: one specialty per screen, one scroll per
// specialty — the same motion as the About journey (usePinnedSteps). Phones,
// `prefers-reduced-motion` and a page without JS get `stacked`, the plain ruled
// list, so every service stays reachable.

type Lang = 'fr' | 'en';

interface Labels {
  badge: string;
  indexLabel: string;
  service: string;
  services: string;
}

const COUNT = SERVICE_CATEGORIES.length;
const LAST = COUNT - 1;
const pad = (n: number) => String(n).padStart(2, '0');

const Panel = ({
  cat,
  index,
  lang,
  labels,
  photoSlug,
  current,
  position,
}: {
  cat: ServiceCategory;
  index: number;
  lang: Lang;
  labels: Labels;
  photoSlug?: string;
  current: boolean;
  position: MotionValue<number>;
}) => {
  const opacity = useTransform(position, (p) => panelPose(p, index, LAST).opacity);
  const y = useTransform(position, (p) => panelPose(p, index, LAST).y);
  const photo = SERVICE_PHOTOS[photoSlug ?? cat.services[0]?.slug ?? ''];
  const n = cat.services.length;

  return (
    // Off-screen specialties are inert: tabbing into one would make the browser
    // scroll the clipped track sideways and break the layout.
    <div className="w-screen shrink-0" inert={!current}>
      <motion.div
        style={{ opacity, y }}
        className="container-custom grid grid-cols-[minmax(0,1fr)_minmax(0,600px)] items-start gap-x-20"
      >
        <div className="flex flex-col gap-4">
          <div className="flex items-baseline gap-4">
            <span className="font-display text-[56px] font-light leading-none text-ink-faint">{pad(index + 1)}</span>
            <span className="text-[13px] text-ink-soft">
              {n} {n > 1 ? labels.services : labels.service}
            </span>
          </div>
          <h2 className={`${DISPLAY} text-[52px] leading-[1.02] xl:text-[68px]`}>
            {lang === 'fr' ? cat.nameFr : cat.nameEn}
          </h2>
          {photo && (
            <Image
              src={photo.src}
              alt={photo[lang]}
              width={photo.w}
              height={photo.h}
              unoptimized
              className="mt-3 block h-auto max-h-[30vh] w-auto max-w-full self-start rounded"
            />
          )}
        </div>

        <ul className="m-0 flex list-none flex-col border-t border-ink p-0">
          {cat.services.map((s) => (
            <li key={s.slug}>
              <Link
                href={`/services/${s.slug}`}
                className="group grid grid-cols-[210px_minmax(0,1fr)_24px] gap-x-6 border-b border-rule py-4 xl:py-5"
              >
                <h3 className="font-sans text-[16px] font-semibold leading-[1.3] tracking-normal text-ink xl:text-[17px]">
                  {lang === 'fr' ? s.nameFr : s.nameEn}
                </h3>
                <p className="text-[14px] leading-[1.55] text-ink-soft">{lang === 'fr' ? s.shortFr : s.shortEn}</p>
                <span className="pt-[3px] text-leaf transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export function ServicesTrack({
  lang,
  labels,
  photoSlugs,
  stacked,
}: {
  lang: Lang;
  labels: Labels;
  photoSlugs: Partial<Record<ServiceCategory['id'], string>>;
  stacked: ReactNode;
}) {
  const { ref, pinned, active, goTo, progress, position, x } = usePinnedSteps<HTMLElement>(COUNT);

  // The page's jump index links to #<specialty>. Pinned, those sections are
  // panels on the track, so route the click to the matching stop instead.
  useEffect(() => {
    if (!pinned) return;
    const onClick = (e: MouseEvent) => {
      const link = (e.target as Element | null)?.closest?.('a[href^="#"]');
      const index = SERVICE_CATEGORIES.findIndex((c) => `#${c.id}` === link?.getAttribute('href'));
      if (index < 0) return;
      e.preventDefault();
      goTo(index);
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
    // eslint-disable-next-line react-hooks/exhaustive-deps -- goTo only reads refs
  }, [pinned]);

  // Same element type as the pinned root on purpose: React then keeps the one DOM
  // node across the switch, and the scroll tracking bound to it stays attached.
  if (!pinned) return <section ref={ref}>{stacked}</section>;

  return (
    <section ref={ref} className="relative mt-14 lg:mt-24" style={{ height: `${COUNT * 100}vh` }}>
      <div className="sticky top-0 flex h-screen flex-col overflow-hidden bg-paper pb-8 pt-28">
        <div className="container-custom flex w-full flex-col gap-5">
          <div className="flex items-baseline justify-between gap-8">
            <div className="flex items-baseline gap-6">
              <Eyebrow>{labels.badge}</Eyebrow>
              <span className="font-display text-[20px] font-light tracking-[-0.01em] text-ink-soft">
                {labels.indexLabel}
              </span>
            </div>
            <div className="text-[13px] font-semibold tracking-[0.14em] text-ink-soft">
              {pad(active + 1)} / {pad(COUNT)}
            </div>
          </div>
          <div className="relative h-px bg-rule">
            <motion.div style={{ scaleX: progress }} className="absolute inset-0 origin-left bg-leaf" />
          </div>
        </div>

        <motion.div style={{ x }} className="flex min-h-0 flex-1 items-start pt-10 will-change-transform xl:pt-14">
          {SERVICE_CATEGORIES.map((cat, i) => (
            <Panel
              key={cat.id}
              cat={cat}
              index={i}
              lang={lang}
              labels={labels}
              photoSlug={photoSlugs[cat.id]}
              current={active === i}
              position={position}
            />
          ))}
        </motion.div>

        {/* Step strip: jump to a specialty. Dropped on short screens. */}
        <nav
          aria-label={labels.indexLabel}
          className="container-custom hidden w-full gap-x-4 [@media(min-height:740px)]:grid"
          style={{ gridTemplateColumns: `repeat(${COUNT}, minmax(0, 1fr))` }}
        >
          {SERVICE_CATEGORIES.map((cat, i) => {
            const on = active === i;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => goTo(i)}
                aria-current={on ? 'step' : undefined}
                aria-label={lang === 'fr' ? cat.nameFr : cat.nameEn}
                className={`flex min-h-11 items-baseline gap-2 border-t pt-3 text-left transition-colors duration-300 ${
                  on ? 'border-leaf text-ink' : 'border-rule text-ink-soft hover:text-ink'
                }`}
              >
                <span className={`text-[12px] font-semibold tracking-[0.14em] ${on ? 'text-leaf-text' : ''}`}>
                  {pad(i + 1)}
                </span>
                <span className="hidden truncate text-[13px] xl:inline">{lang === 'fr' ? cat.nameFr : cat.nameEn}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </section>
  );
}
