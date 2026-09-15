'use client';

import Link from 'next/link';
import {
  Stethoscope, Syringe, HeartPulse, ClipboardCheck,
  ShieldCheck, Baby, HeartHandshake, FlaskConical, Building2, ArrowRight,
} from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useReveal } from '../../hooks/useReveal';
import { SERVICE_CATEGORIES, type ServiceCategory } from '../../data/services';
import { EYEBROW, H2, LEAD, FRAME } from '../layout/PageShell';

const WAITLIST_URL =
  'https://docs.google.com/forms/d/1TaBNJ9M7Ks6LW5_Vfyqx5DodEPQZbo06bxX8PvJFLiw/viewform';

const ICONS: Record<ServiceCategory['icon'], React.ComponentType<{ className?: string }>> = {
  nursing: Stethoscope, vaccination: Syringe, chronic: HeartPulse, checkup: ClipboardCheck,
  sexual: ShieldCheck, pediatrics: Baby, seniors: HeartHandshake, analysis: FlaskConical, enterprises: Building2,
};

const COPY = {
  FR: {
    badge: 'Le catalogue',
    title: 'Des soins complets, directement à domicile',
    subtitle:
      '9 spécialités et plus de 25 soins offerts par des infirmières certifiées OIIQ — des tout-petits aux aînés. Touchez un soin pour découvrir en quoi il consiste.',
    featureCaption: 'Soins professionnels à domicile',
    seniorCaption: 'Accompagnement des aînés',
    hint: 'Touchez un soin pour en savoir plus',
    ctaTitle: 'Prêt à recevoir des soins à la maison ?',
    ctaButton: 'Rejoindre la liste d’attente',
  },
  EN: {
    badge: 'The catalogue',
    title: 'Complete care, right at home',
    subtitle:
      '9 specialties and 25+ treatments delivered by OIIQ-certified nurses — from toddlers to seniors. Tap any service to see what it involves.',
    featureCaption: 'Professional home care',
    seniorCaption: 'Dedicated senior care',
    hint: 'Tap a service to learn more',
    ctaTitle: 'Ready to get care at home?',
    ctaButton: 'Join the waiting list',
  },
} as const;

export function ServicesCatalog() {
  const { language } = useLanguage();
  const c = COPY[language];
  const lang = language === 'FR' ? 'fr' : 'en';
  const intro = useReveal();
  const grid = useReveal();

  return (
    <section className="border-t border-white/12 bg-white/5 py-16 lg:py-24">
      <div className="container-custom">
        {/* Intro */}
        <div ref={intro.ref} style={intro.style}>
          <div className="max-w-[720px]">
            <span className={EYEBROW}>{c.badge}</span>
            <h2 className={`${H2} mt-4`}>{c.title}</h2>
            <p className={`${LEAD} mt-5`}>{c.subtitle}</p>
          </div>

          {/* Feature image band */}
          <div className="mt-10 grid gap-4 md:grid-cols-3 md:gap-[30px]">
            <figure className={`${FRAME} aspect-[16/9] md:col-span-2 md:aspect-auto md:h-[400px]`}>
              <img
                src="/nurses/hero-nurse.png"
                alt={c.featureCaption}
                className="absolute inset-0 h-full w-full object-cover"
                style={{ objectPosition: '50% 20%' }}
              />
              <figcaption className="absolute bottom-4 left-4 rounded-xl bg-white/5 px-3 py-1.5 text-[12.5px] font-medium text-white">
                {c.featureCaption}
              </figcaption>
            </figure>
            <figure className={`${FRAME} hidden md:block md:h-[400px]`}>
              <img
                src="/nurses/elder-06.jpeg"
                alt={c.seniorCaption}
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
              <figcaption className="absolute bottom-4 left-4 rounded-xl bg-white/5 px-3 py-1.5 text-[12.5px] font-medium text-white">
                {c.seniorCaption}
              </figcaption>
            </figure>
          </div>
        </div>

        {/* Catalog — one column per expertise; each service links to its page */}
        <div ref={grid.ref} style={grid.style} className="mt-16">
          <p className={EYEBROW}>{c.hint}</p>
          <div className="mt-6 grid grid-cols-1 gap-x-[30px] gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICE_CATEGORIES.map((cat) => {
              const Icon = ICONS[cat.icon];
              return (
                <div key={cat.id} className="border-t border-white/30 pt-5">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-sage/40 bg-sage/15 text-sage">
                      <Icon className="h-4 w-4" />
                    </span>
                    <h3 className="text-[17px] font-medium tracking-[-0.02em] text-white">
                      {lang === 'fr' ? cat.nameFr : cat.nameEn}
                    </h3>
                  </div>
                  <ul className="mt-3 flex flex-col divide-y divide-white/10">
                    {cat.services.map((s) => (
                      <li key={s.slug}>
                        <Link
                          href={`/services/${s.slug}`}
                          className="group flex items-center justify-between gap-3 py-2.5"
                        >
                          <span className="text-[14.5px] leading-snug text-white/78 transition-colors group-hover:text-white">
                            {lang === 'fr' ? s.nameFr : s.nameEn}
                          </span>
                          <ArrowRight className="h-4 w-4 shrink-0 text-white/35 transition-all group-hover:translate-x-0.5 group-hover:text-sage" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="mt-16 flex flex-col items-start justify-between gap-6 rounded-3xl bg-ink-panel/85 p-8 sm:flex-row sm:items-center lg:p-10">
            <p className="max-w-[520px] text-[21px] font-normal leading-[1.35] tracking-[-0.03em] text-white lg:text-[24px]">
              {c.ctaTitle}
            </p>
            <a
              href={WAITLIST_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex shrink-0 items-center gap-2 rounded-xl bg-white/5 px-6 py-3 text-[14px] font-medium text-white transition-colors hover:bg-white/10"
            >
              {c.ctaButton}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
