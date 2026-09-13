'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import {
  Stethoscope, Syringe, HeartPulse, ClipboardCheck, ShieldCheck, Baby,
  HeartHandshake, FlaskConical, Building2, Check, ArrowRight, ArrowLeft,
  Home, Clock,
} from 'lucide-react';
import { PageShell, EYEBROW, H1, LEAD, BODY, CARD } from '../../../components/layout/PageShell';
import { getServiceBySlug, type ServiceCategory } from '../../../data/services';
import { useLanguage } from '../../../contexts/LanguageContext';
import { useReveal } from '../../../hooks/useReveal';

const WAITLIST_URL =
  'https://docs.google.com/forms/d/1TaBNJ9M7Ks6LW5_Vfyqx5DodEPQZbo06bxX8PvJFLiw/viewform';

const ICONS: Record<ServiceCategory['icon'], React.ComponentType<{ className?: string }>> = {
  nursing: Stethoscope, vaccination: Syringe, chronic: HeartPulse, checkup: ClipboardCheck,
  sexual: ShieldCheck, pediatrics: Baby, seniors: HeartHandshake, analysis: FlaskConical, enterprises: Building2,
};

const COPY = {
  FR: {
    back: 'Tous les services',
    whatTitle: 'En quoi ça consiste',
    goodTitle: 'Ce qui est inclus',
    howTitle: 'Comment ça se passe',
    steps: [
      { t: 'Réservez en ligne', d: 'Choisissez le soin, la date et l’heure qui vous conviennent.' },
      { t: 'Une infirmière se déplace', d: 'Certifiée OIIQ, elle vient directement chez vous.' },
      { t: 'Le soin est prodigué', d: 'En toute sécurité, dans le confort de votre domicile.' },
      { t: 'Rapport dans l’application', d: 'Un compte rendu clinique est disponible après la visite.' },
    ],
    reassure: ['Infirmières certifiées OIIQ', 'À domicile', 'Environ 30 minutes'],
    ctaTitle: 'Besoin de ce soin à la maison ?',
    ctaButton: 'Rejoindre la liste d’attente',
    related: 'Autres soins dans cette catégorie',
    notFound: 'Ce service est introuvable.',
    notFoundCta: 'Voir tous les services',
  },
  EN: {
    back: 'All services',
    whatTitle: 'What it involves',
    goodTitle: 'What’s included',
    howTitle: 'How it works',
    steps: [
      { t: 'Book online', d: 'Pick the service, date and time that work for you.' },
      { t: 'A nurse comes to you', d: 'OIIQ-certified, she comes straight to your home.' },
      { t: 'Care is delivered', d: 'Safely, in the comfort of your own home.' },
      { t: 'Report in the app', d: 'A clinical summary is available after the visit.' },
    ],
    reassure: ['OIIQ-certified nurses', 'At home', 'About 30 minutes'],
    ctaTitle: 'Need this care at home?',
    ctaButton: 'Join the waiting list',
    related: 'Other services in this category',
    notFound: 'This service could not be found.',
    notFoundCta: 'View all services',
  },
} as const;

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = Array.isArray(params?.slug) ? params.slug[0] : (params?.slug as string);
  const { language } = useLanguage();
  const c = COPY[language];
  const lang = language === 'FR' ? 'fr' : 'en';

  const found = slug ? getServiceBySlug(slug) : undefined;

  return (
    <PageShell labelKey="header.services">
      {!found ? (
        <div className="container-custom py-24 text-center">
          <p className={BODY}>{c.notFound}</p>
          <Link
            href="/services"
            className="mt-6 inline-block text-[15px] font-medium text-white underline underline-offset-4"
          >
            {c.notFoundCta}
          </Link>
        </div>
      ) : (
        <ServiceBody found={found} c={c} lang={lang} />
      )}
    </PageShell>
  );
}

function ServiceBody({
  found, c, lang,
}: {
  found: NonNullable<ReturnType<typeof getServiceBySlug>>;
  c: (typeof COPY)[keyof typeof COPY];
  lang: 'fr' | 'en';
}) {
  const { service, category } = found;
  const Icon = ICONS[category.icon];
  const name = lang === 'fr' ? service.nameFr : service.nameEn;
  const short = lang === 'fr' ? service.shortFr : service.shortEn;
  const long = lang === 'fr' ? service.longFr : service.longEn;
  const points = lang === 'fr' ? service.pointsFr : service.pointsEn;
  const catName = lang === 'fr' ? category.nameFr : category.nameEn;
  const reassureIcons = [ShieldCheck, Home, Clock];
  const siblings = category.services.filter((s) => s.slug !== service.slug);
  const { ref, style } = useReveal();

  return (
    <div className="pt-10 pb-20 sm:pt-12 lg:pt-16 lg:pb-28">
      <div ref={ref} style={style} className="container-custom">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-[13.5px] font-medium text-white/60 transition-colors hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          {c.back}
        </Link>

        {/* Header */}
        <div className="mt-8 max-w-[760px]">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-sage/40 bg-sage/15 text-sage">
              <Icon className="h-5 w-5" />
            </span>
            <span className={EYEBROW}>{catName}</span>
          </div>
          <h1 className={`${H1} mt-5`}>{name}</h1>
          <p className={`${LEAD} mt-5`}>{short}</p>
        </div>

        <div className="mt-12 grid items-start gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          {/* Left: what it is + how it works */}
          <div className="flex flex-col gap-12">
            <section>
              <h2 className="text-[20px] font-medium tracking-[-0.02em] text-white">{c.whatTitle}</h2>
              <p className={`${BODY} mt-3`}>{long}</p>
            </section>

            <section>
              <h2 className="text-[20px] font-medium tracking-[-0.02em] text-white">{c.howTitle}</h2>
              <ol className="mt-5 grid gap-x-[30px] sm:grid-cols-2">
                {c.steps.map((s, i) => (
                  <li key={s.t} className="border-t border-white/12 py-5">
                    <span className="text-[13px] font-semibold text-white">0{i + 1}</span>
                    <p className="mt-2 text-[16px] font-medium leading-snug tracking-[-0.01em] text-white">{s.t}</p>
                    <p className="mt-1 text-[14px] font-light leading-relaxed text-white/78">{s.d}</p>
                  </li>
                ))}
              </ol>
            </section>
          </div>

          {/* Right: included + reassurance + CTA */}
          <aside className={`${CARD} p-6 sm:p-7 lg:sticky lg:top-32`}>
            <h2 className={EYEBROW}>{c.goodTitle}</h2>
            <ul className="mt-4 flex flex-col gap-3">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-2.5 text-[14.5px] leading-snug text-white">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-sage" strokeWidth={2.5} />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-col gap-2.5 border-t border-white/10 pt-5">
              {c.reassure.map((r, i) => {
                const RI = reassureIcons[i];
                return (
                  <div key={r} className="flex items-center gap-2.5 text-[13.5px] text-white/78">
                    <RI className="h-4 w-4 shrink-0 text-sage" />
                    {r}
                  </div>
                );
              })}
            </div>
            <a
              href={WAITLIST_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-ink-panel shadow-[0_10px_30px_-10px_rgba(0,0,0,.7)] transition-transform hover:-translate-y-0.5 group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[15px] font-medium"
            >
              {c.ctaButton}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
          </aside>
        </div>

        {/* Related services */}
        {siblings.length > 0 && (
          <section className="mt-16 border-t border-white/30 pt-8">
            <h2 className={EYEBROW}>{c.related}</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-[30px]">
              {siblings.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="group flex items-center justify-between gap-3 rounded-2xl border border-white/12 p-5 transition-colors hover:bg-white/5"
                >
                  <div>
                    <p className="text-[15.5px] font-medium leading-snug tracking-[-0.01em] text-white">
                      {lang === 'fr' ? s.nameFr : s.nameEn}
                    </p>
                    <p className="mt-1 line-clamp-2 text-[13px] font-light leading-relaxed text-white/78">
                      {lang === 'fr' ? s.shortFr : s.shortEn}
                    </p>
                  </div>
                  <ArrowRight className="h-4 w-4 shrink-0 text-white/35 transition-all group-hover:translate-x-0.5 group-hover:text-sage" />
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
