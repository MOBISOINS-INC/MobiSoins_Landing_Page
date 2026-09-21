'use client';

import Image from 'next/image';
import { useState } from 'react';
import Link from '../ui/LocaleLink';
import { useLanguage } from '../../contexts/LanguageContext';
import { useScrollMotion } from '../../hooks/useScrollMotion';
import { SERVICE_CATEGORIES, type ServiceCategory } from '../../data/services';
import { SERVICE_PHOTOS } from '../../data/servicePhotos';
import { ArrowRight, DISPLAY, Eyebrow } from '../ui/editorial';
import { ServicesTrack } from './ServicesTrack';

const WAITLIST_URL =
  'https://docs.google.com/forms/d/1TaBNJ9M7Ks6LW5_Vfyqx5DodEPQZbo06bxX8PvJFLiw/viewform';

const COPY = {
  FR: {
    badge: 'Le catalogue',
    title: 'Des soins complets, directement à domicile.',
    subtitle:
      '9 spécialités et plus de 25 soins offerts par des infirmières certifiées OIIQ, des tout-petits aux aînés. Choisissez un soin pour découvrir en quoi il consiste.',
    indexLabel: 'Spécialités',
    featureCaption: 'Soins professionnels à domicile',
    featureAlt: 'Une infirmière refait le pansement d’un homme assis dans son salon',
    service: 'soin',
    services: 'soins',
    insuranceBadge: 'Assurances',
    insurance:
      'Certains soins sont admissibles au remboursement par assurances privées. Reçu officiel fourni après chaque visite.',
    ctaTitle: 'Prêt à recevoir des soins à la maison ?',
    ctaButton: 'Rejoindre la liste d’attente',
  },
  EN: {
    badge: 'The catalogue',
    title: 'Complete care, right at home.',
    subtitle:
      '9 specialties and 25+ treatments delivered by OIIQ-certified nurses, from toddlers to seniors. Choose any service to see what it involves.',
    indexLabel: 'Specialties',
    featureCaption: 'Professional home care',
    featureAlt: 'A nurse changes a dressing on a man’s forearm in his living room',
    service: 'service',
    services: 'services',
    insuranceBadge: 'Insurance',
    insurance:
      'Some services are eligible for private insurance reimbursement. An official receipt is provided after every visit.',
    ctaTitle: 'Ready to get care at home?',
    ctaButton: 'Join the waiting list',
  },
} as const;

// Specialties that carry a photograph beside their title (by service slug).
const SPECIALTY_PHOTO: Partial<Record<ServiceCategory['id'], string>> = {
  vaccination: 'grippe',
  pediatrics: 'vaccins-enfant',
  seniors: 'soins-domicile-aines',
  analysis: 'prise-sang-labo',
  enterprises: 'bilan-sante-entreprise',
};

type Lang = 'fr' | 'en';

// One specialty: a rule draws in, the number and title rise, the photo wipes
// open, then the service rows follow in a short stagger.
function Specialty({
  cat,
  index,
  lang,
  c,
  open,
  onToggle,
}: {
  cat: ServiceCategory;
  index: number;
  lang: Lang;
  c: (typeof COPY)[keyof typeof COPY];
  open: boolean;
  onToggle: () => void;
}) {
  const m = useScrollMotion<HTMLElement>();
  const photoSlug = SPECIALTY_PHOTO[cat.id];
  const photo = photoSlug ? SERVICE_PHOTOS[photoSlug] : undefined;
  const n = cat.services.length;

  return (
    <section ref={m.ref} id={cat.id} className="relative scroll-mt-24 lg:scroll-mt-28 lg:py-16">
      <div className="absolute inset-x-0 top-0 h-px bg-ink/30 lg:bg-ink" style={m.rule()} aria-hidden="true" />
      {/* Phones: each specialty is a collapsed row; tap to open its services. */}
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={`${cat.id}-panel`}
        className="grid w-full grid-cols-[32px_minmax(0,1fr)_auto_20px] items-center gap-x-3 py-4 text-left lg:hidden"
      >
        <span className="text-[12px] font-semibold tracking-[0.1em] text-leaf-text">
          {String(index + 1).padStart(2, '0')}
        </span>
        <span className="font-sans text-[17px] font-semibold leading-tight text-ink">
          {lang === 'fr' ? cat.nameFr : cat.nameEn}
        </span>
        <span className="text-[12px] tabular-nums text-ink-soft">{n}</span>
        <svg
          width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
          strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
          className={`text-ink transition-transform duration-300 ${open ? 'rotate-45' : ''}`}
        >
          <path d="M12 5v14M5 12h14" />
        </svg>
      </button>
      <div
        id={`${cat.id}-panel`}
        className={`${open ? 'grid' : 'hidden'} grid-cols-1 gap-y-5 pb-6 lg:grid lg:grid-cols-[320px_minmax(0,1fr)] lg:items-start lg:gap-x-24 lg:pb-0`}
      >
        <div className="flex flex-col gap-3.5 lg:sticky lg:top-28">
          <div className="hidden items-baseline gap-4 lg:flex" style={m.rise(0, 0.1)}>
            <span className="font-display text-[44px] font-light leading-none text-ink-faint lg:text-[56px]">
              {String(index + 1).padStart(2, '0')}
            </span>
            <span className="text-[13px] text-ink-soft">
              {n} {n > 1 ? c.services : c.service}
            </span>
          </div>
          <h2
            className={`${DISPLAY} hidden text-[32px] leading-[1.05] lg:block lg:text-[40px]`}
            style={m.rise(1, 0.1)}
          >
            {lang === 'fr' ? cat.nameFr : cat.nameEn}
          </h2>
          {photo && (
            <div className="overflow-hidden rounded lg:mt-3" style={m.photo(0.25)}>
              <Image
                src={photo.src}
                alt={photo[lang]}
                width={photo.w}
                height={photo.h}
                unoptimized
                className="block h-auto w-full"
              />
            </div>
          )}
        </div>

        <ul className="m-0 flex list-none flex-col border-t border-rule p-0">
          {cat.services.map((s, i) => (
            <li key={s.slug} style={m.rise(i, 0.2)}>
              <Link
                href={`/services/${s.slug}`}
                className="group grid grid-cols-[minmax(0,1fr)_32px] items-center gap-x-4 gap-y-1.5 border-b border-rule py-5 transition-colors active:bg-leaf-tint lg:items-start lg:grid-cols-[250px_minmax(0,1fr)_24px] lg:gap-x-8 lg:py-6"
              >
                <h3 className="font-sans text-[17px] font-semibold leading-[1.3] tracking-normal text-ink lg:text-[18px]">
                  {lang === 'fr' ? s.nameFr : s.nameEn}
                </h3>
                <p className="col-start-1 text-[14px] leading-[1.6] text-ink-soft lg:col-start-2 lg:text-[15px]">
                  {lang === 'fr' ? s.shortFr : s.shortEn}
                </p>
                <span className="col-start-2 row-span-2 row-start-1 flex h-8 w-8 items-center justify-center rounded-full border border-ink/25 text-ink transition-transform duration-300 group-hover:translate-x-1 lg:col-start-3 lg:row-span-1 lg:h-auto lg:w-auto lg:border-0 lg:pt-[3px] lg:text-leaf">
                  <ArrowRight className="h-4 w-4 lg:h-[18px] lg:w-[18px]" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function ServicesCatalog() {
  const { language } = useLanguage();
  const c = COPY[language];
  const lang: Lang = language === 'FR' ? 'fr' : 'en';
  const hero = useScrollMotion();
  const figure = useScrollMotion<HTMLElement>();
  const note = useScrollMotion<HTMLElement>();
  const cta = useScrollMotion();
  // Mobile accordion: which specialty is open. A tile in the index opens its row.
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="bg-paper">
      {/* ========== Opening: title + jump index ========== */}
      <section className="pt-14 sm:pt-20 lg:pt-28">
        <div className="container-custom">
          <div
            ref={hero.ref}
            className="grid grid-cols-1 gap-y-10 lg:grid-cols-[minmax(0,1fr)_400px] lg:items-start lg:gap-x-24"
          >
            <div className="flex flex-col gap-5 lg:gap-7">
              <div style={hero.rise(0)}>
                <Eyebrow>{c.badge}</Eyebrow>
              </div>
              <h1
                className={`${DISPLAY} text-[46px] leading-none tracking-[-0.03em] sm:text-[64px] lg:text-[92px] lg:leading-[0.98]`}
                style={hero.rise(1)}
              >
                {c.title}
              </h1>
              <p className="max-w-[560px] text-[16px] leading-[1.7] text-ink-soft lg:text-[18px]" style={hero.rise(2)}>
                {c.subtitle}
              </p>
            </div>

            <nav aria-label={c.indexLabel} className="relative grid grid-cols-3 lg:mt-2 lg:flex lg:flex-col">
              <div className="absolute inset-x-0 top-0 h-px bg-ink" style={hero.rule(0.15)} aria-hidden="true" />
              {SERVICE_CATEGORIES.map((cat, i) => (
                <a
                  key={cat.id}
                  href={`#${cat.id}`}
                  onClick={(e) => {
                    // Open first, then scroll once the layout has settled, so a row
                    // collapsing above doesn't make the jump land in the wrong place.
                    // Desktop keeps the plain anchor jump.
                    if (window.matchMedia('(min-width: 1024px)').matches) return;
                    e.preventDefault();
                    setOpenId(cat.id);
                    requestAnimationFrame(() =>
                      document.getElementById(cat.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    );
                  }}
                  className="group relative flex min-h-[84px] flex-col justify-between gap-1.5 border-b border-rule px-2.5 py-3 pr-6 transition-colors active:bg-leaf-tint text-[13px] font-medium leading-tight text-ink [&:not(:nth-of-type(3n+1))]:border-l lg:grid lg:min-h-11 lg:grid-cols-[36px_minmax(0,1fr)_auto] lg:items-baseline lg:gap-x-3 lg:px-0 lg:py-[11px] lg:text-[15px] lg:leading-normal lg:[&:not(:nth-of-type(3n+1))]:border-l-0"
                  style={hero.rise(i, 0.2)}
                >
                  <span className="text-[12px] font-semibold tracking-[0.1em] text-leaf-text">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    {lang === 'fr' ? cat.nameFr : cat.nameEn}
                  </span>
                  {/* Phones: arrow so the tile reads as tappable */}
                  <span className="absolute bottom-3 right-2.5 text-leaf-text lg:hidden" aria-hidden="true">
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                  <span className="hidden text-[13px] font-normal tabular-nums text-ink-soft lg:inline">{cat.services.length}</span>
                </a>
              ))}
            </nav>
          </div>

          <figure ref={figure.ref} className="m-0 mt-12 flex flex-col gap-3.5 lg:mt-[72px]">
            <div className="overflow-hidden rounded" style={figure.photo()}>
              <Image
                src="/services/pansements.jpg"
                alt={c.featureAlt}
                width={1800}
                height={1146}
                priority
                unoptimized
                // This opening photo alone stays a cropped wide band (both faces
                // sit mid-frame, so nothing is cut); every other service photo is
                // shown whole.
                className="block h-[260px] w-full object-cover object-[50%_55%] sm:h-[400px] lg:h-[520px]"
              />
            </div>
            <figcaption className="flex items-center gap-2.5 text-[13px] text-leaf-text" style={figure.rise(0, 0.5)}>
              <span className="h-px w-6 bg-leaf" aria-hidden="true" />
              {c.featureCaption}
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ========== Catalogue — pinned one-per-screen on desktop, ruled blocks otherwise ========== */}
      <ServicesTrack
        lang={lang}
        labels={c}
        photoSlugs={SPECIALTY_PHOTO}
        stacked={
          <div className="container-custom pb-6 pt-10 lg:pb-10 lg:pt-24">
            {SERVICE_CATEGORIES.map((cat, i) => (
              <Specialty
                key={cat.id}
                cat={cat}
                index={i}
                lang={lang}
                c={c}
                open={openId === cat.id}
                onToggle={() => setOpenId((cur) => (cur === cat.id ? null : cat.id))}
              />
            ))}
          </div>
        }
      />

      {/* ========== Insurance note ========== */}
      <section ref={note.ref} className="bg-leaf-tint py-14 lg:py-[72px]">
        <div className="container-custom grid grid-cols-1 gap-y-4 lg:grid-cols-[320px_minmax(0,1fr)] lg:items-center lg:gap-x-24">
          <div style={note.rise(0)}>
            <Eyebrow>{c.insuranceBadge}</Eyebrow>
          </div>
          <p
            className="font-display text-[22px] font-light leading-[1.35] tracking-[-0.01em] text-ink lg:text-[30px]"
            style={note.rise(1)}
          >
            {c.insurance}
          </p>
        </div>
      </section>

      {/* ========== Closing CTA ========== */}
      <section className="bg-ink py-12 text-white lg:py-[120px]">
        <div className="container-custom">
          <div
            ref={cta.ref}
            className="grid grid-cols-1 justify-items-center gap-y-5 text-center lg:justify-items-stretch lg:text-left lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)] lg:items-end lg:gap-x-[120px]"
          >
            <div className="flex flex-col gap-6 lg:gap-7">
              <h2
                className="font-display text-[32px] font-light leading-[1.05] tracking-[-0.03em] text-white lg:text-[80px] lg:leading-none"
                style={cta.rise(0, 0.15)}
              >
                {c.ctaTitle}
              </h2>
            </div>
            <a
              href={WAITLIST_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center gap-2.5 rounded bg-white px-5 text-[14.5px] font-semibold text-ink transition-colors hover:bg-leaf-on-dark hover:text-ink-deep lg:h-14 lg:gap-3 lg:px-7 lg:text-[16px]"
              style={cta.rise(1, 0.15)}
            >
              {c.ctaButton}
              <ArrowRight />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
