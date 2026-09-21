'use client';

import Image from 'next/image';
import Link from '../../../components/ui/LocaleLink';
import { useParams } from 'next/navigation';
import { PageShell } from '../../../components/layout/PageShell';
import { SERVICE_CATEGORIES, getServiceBySlug } from '../../../data/services';
import { SERVICE_PHOTOS } from '../../../data/servicePhotos';
import { SERVICE_DETAILS } from '../../../data/serviceDetails';
import { useLanguage } from '../../../contexts/LanguageContext';
import { useScrollMotion } from '../../../hooks/useScrollMotion';
import { ArrowRight, DISPLAY, Eyebrow } from '../../../components/ui/editorial';

const WAITLIST_URL =
  'https://docs.google.com/forms/d/1TaBNJ9M7Ks6LW5_Vfyqx5DodEPQZbo06bxX8PvJFLiw/viewform';

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
    insurance: 'Certains soins sont admissibles au remboursement par assurances privées. Reçu officiel fourni après chaque visite.',
    crumb: 'Fil d’Ariane',
    atWork: 'Dans vos locaux',
    workSteps: [
      { t: 'Planifiez avec nous', d: 'Nous convenons des dates, du local et du nombre de participants.' },
      { t: 'Une infirmière se rend sur place', d: 'Certifiée OIIQ, elle s’installe dans vos locaux le jour prévu.' },
      { t: 'Les employés sont rencontrés', d: 'Individuellement et en toute confidentialité.' },
      { t: 'Chacun repart informé', d: 'Les résultats individuels ne sont jamais transmis à l’employeur.' },
    ],
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
    insurance: 'Some services are eligible for private insurance reimbursement. An official receipt is provided after every visit.',
    crumb: 'Breadcrumb',
    atWork: 'At your workplace',
    workSteps: [
      { t: 'Plan it with us', d: 'We agree on dates, the room and the number of participants.' },
      { t: 'A nurse comes on site', d: 'OIIQ-certified, she sets up in your premises on the day.' },
      { t: 'Employees are seen', d: 'One at a time, in complete confidence.' },
      { t: 'Everyone leaves informed', d: 'Individual results are never passed on to the employer.' },
    ],
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
    <PageShell>
      {!found ? (
        <div className="bg-paper">
          <div className="container-custom py-24 text-center">
            <p className="text-[16px] leading-[1.7] text-ink-soft">{c.notFound}</p>
            <Link
              href="/services"
              className="mt-6 inline-flex min-h-11 items-center border-b border-leaf pb-1 text-[16px] font-semibold text-ink"
            >
              {c.notFoundCta}
            </Link>
          </div>
        </div>
      ) : (
        // Keyed so the entrance replays when moving between sibling services.
        <ServiceBody key={found.service.slug} found={found} c={c} lang={lang} />
      )}
    </PageShell>
  );
}

const ArrowLeft = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="h-4 w-4"
  >
    <path d="M19 12H5M11 6l-6 6 6 6" />
  </svg>
);

const Check = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="h-[18px] w-[18px] text-leaf"
  >
    <path d="M5 12.5l4.5 4.5L19 7.5" />
  </svg>
);

function ServiceBody({
  found, c, lang,
}: {
  found: NonNullable<ReturnType<typeof getServiceBySlug>>;
  c: (typeof COPY)[keyof typeof COPY];
  lang: 'fr' | 'en';
}) {
  const { service, category } = found;
  const name = lang === 'fr' ? service.nameFr : service.nameEn;
  const short = lang === 'fr' ? service.shortFr : service.shortEn;
  const long = lang === 'fr' ? service.longFr : service.longEn;
  const points = lang === 'fr' ? service.pointsFr : service.pointsEn;
  const catName = lang === 'fr' ? category.nameFr : category.nameEn;
  const catIndex = SERVICE_CATEGORIES.findIndex((k) => k.id === category.id);
  const siblings = category.services.filter((s) => s.slug !== service.slug);
  const photo = SERVICE_PHOTOS[service.slug];
  const detail = SERVICE_DETAILS[service.slug]?.[lang] ?? [];
  // Corporate services happen at the workplace, not at home.
  const steps = category.id === 'enterprises' ? c.workSteps : c.steps;
  const reassure = c.reassure.map((r, i) => (i === 1 && category.id === 'enterprises' ? c.atWork : r));

  const hero = useScrollMotion();
  const figure = useScrollMotion<HTMLElement>();
  const what = useScrollMotion();
  const how = useScrollMotion();
  const aside = useScrollMotion<HTMLElement>();
  const related = useScrollMotion<HTMLElement>();
  const cta = useScrollMotion();

  return (
    <div className="bg-paper">
      {/* ========== Title ========== */}
      <section className="pt-8 sm:pt-10 lg:pt-14">
        <div ref={hero.ref} className="container-custom flex flex-col gap-8 lg:gap-14">
          <nav
            aria-label={c.crumb}
            className="flex items-center gap-3 text-[14px] font-medium text-ink-soft"
            style={hero.rise(0)}
          >
            <Link href="/services" className="group inline-flex min-h-11 items-center gap-2 text-ink">
              <span className="transition-transform duration-300 group-hover:-translate-x-1">
                <ArrowLeft />
              </span>
              {c.back}
            </Link>
            <span aria-hidden="true" className="text-ink-faint">/</span>
            <Link href={`/services#${category.id}`} className="inline-flex min-h-11 items-center hover:text-ink">
              {catName}
            </Link>
          </nav>

          <div className="grid grid-cols-1 gap-y-6 lg:grid-cols-[minmax(0,1fr)_400px] lg:items-end lg:gap-x-24">
            <div className="flex flex-col gap-4 lg:gap-6">
              <div className="flex items-baseline gap-4" style={hero.rise(1)}>
                <span className="font-display text-[32px] font-light leading-none text-ink-faint lg:text-[40px]">
                  {String(catIndex + 1).padStart(2, '0')}
                </span>
                <Eyebrow>{catName}</Eyebrow>
              </div>
              <h1
                className={`${DISPLAY} text-[44px] leading-none tracking-[-0.03em] sm:text-[60px] lg:text-[84px]`}
                style={hero.rise(2)}
              >
                {name}
              </h1>
            </div>
            <p className="text-[16px] leading-[1.7] text-ink-soft lg:pb-2 lg:text-[18px]" style={hero.rise(3)}>
              {short}
            </p>
          </div>
        </div>
      </section>

      {/* ========== What it involves + what's included ==========
          Directly under the title, above the photograph: the explanation is
          the reason someone opened this page, so it must not sit a full screen
          below a tall image. */}
      <section className="pt-10 lg:pt-16">
        <div className="container-custom grid grid-cols-1 gap-y-10 border-t border-rule pt-10 lg:grid-cols-[minmax(0,1fr)_400px] lg:items-start lg:gap-x-24 lg:pt-14">
            <div ref={what.ref} className="flex flex-col gap-5 lg:gap-6">
              <div style={what.rise(0)}>
                <Eyebrow>{c.whatTitle}</Eyebrow>
              </div>
              <p
                className="font-display text-[24px] font-light leading-[1.38] tracking-[-0.01em] text-ink lg:text-[32px]"
                style={what.rise(1)}
              >
                {long}
              </p>
              {detail.map((para, i) => (
                <p
                  key={i}
                  className="max-w-[680px] text-[16px] leading-[1.75] text-ink-soft lg:text-[17px]"
                  style={what.rise(i + 2)}
                >
                  {para}
                </p>
              ))}
            </div>

          <aside
            ref={aside.ref}
            className="flex flex-col gap-6 rounded-md border border-rule bg-white p-6 lg:sticky lg:top-28 lg:gap-7 lg:p-8"
            style={aside.rise(0)}
          >
            <Eyebrow>{c.goodTitle}</Eyebrow>
            <ul className="m-0 flex list-none flex-col border-t border-rule p-0">
              {points.map((p, i) => (
                <li
                  key={p}
                  className="grid grid-cols-[26px_minmax(0,1fr)] items-start border-b border-rule py-3.5 text-[15px] leading-normal text-ink"
                  style={aside.rise(i, 0.2)}
                >
                  <span className="pt-px">
                    <Check />
                  </span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <a
              href={WAITLIST_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex h-14 items-center justify-center gap-3 rounded bg-ink px-7 text-[16px] font-semibold text-white transition-colors hover:bg-ink-deep"
            >
              {c.ctaButton}
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRight />
              </span>
            </a>
            <p className="text-[13px] leading-[1.6] text-ink-soft">{c.insurance}</p>
          </aside>
        </div>
      </section>

      {/* ========== Photo + reassurance strip ========== */}
      <section className="pt-14 lg:pt-24">
        <div className="container-custom">
        <figure ref={figure.ref} className="m-0 flex flex-col">
          {photo && (
            // The whole photograph, at its own proportions: a fixed-height strip
            // cut people's heads off. Near-square frames are held narrower so
            // they are neither upscaled nor taller than the screen.
            <div
              className="overflow-hidden rounded"
              style={{ ...figure.photo(), maxWidth: photo.w / photo.h < 1.3 ? 720 : undefined }}
            >
              <Image
                src={photo.src}
                alt={lang === 'fr' ? photo.fr : photo.en}
                width={photo.w}
                height={photo.h}
                priority
                unoptimized
                className="block h-auto w-full"
              />
            </div>
          )}
          <div className="relative grid grid-cols-1 sm:grid-cols-3">
            {!photo && (
              <div className="absolute inset-x-0 top-0 h-px bg-ink" style={figure.rule()} aria-hidden="true" />
            )}
            {reassure.map((r, i) => (
              <div
                key={r}
                className="border-b border-rule py-4 text-[14px] font-medium text-ink sm:border-l sm:px-6 sm:py-[22px] sm:first:border-l-0 sm:first:pl-0"
                style={figure.rise(i, 0.45)}
              >
                {r}
              </div>
            ))}
          </div>
        </figure>
        </div>
      </section>

      {/* ========== How it works ========== */}
      <section className="py-[72px] lg:py-28">
        <div className="container-custom">
            <div ref={how.ref} className="grid grid-cols-1 gap-y-6 lg:grid-cols-[320px_minmax(0,1fr)] lg:items-start lg:gap-x-24">
              <h2 className={`${DISPLAY} text-[32px] leading-[1.06] lg:text-[44px] lg:leading-[1.05]`} style={how.rise(0)}>
                {c.howTitle}
              </h2>
              <div className="relative">
                <div className="absolute inset-x-0 top-0 h-px bg-ink" style={how.rule(0.1)} aria-hidden="true" />
                <ol className="m-0 flex list-none flex-col p-0">
                  {steps.map((s, i) => (
                    <li
                      key={s.t}
                      className="grid grid-cols-[52px_minmax(0,1fr)] items-baseline gap-x-4 border-b border-rule py-6 lg:grid-cols-[72px_minmax(0,1fr)] lg:gap-x-6 lg:py-[26px]"
                      style={how.rise(i, 0.2)}
                    >
                      <span className="font-display text-[32px] font-light leading-none text-ink-faint lg:text-[40px]">
                        0{i + 1}
                      </span>
                      <div className="flex flex-col gap-1.5">
                        <h3 className="font-sans text-[18px] font-semibold tracking-normal text-ink lg:text-[19px]">
                          {s.t}
                        </h3>
                        <p className="text-[15px] leading-[1.6] text-ink-soft">{s.d}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
        </div>
      </section>

      {/* ========== Related services ========== */}
      {siblings.length > 0 && (
        <section ref={related.ref} className="bg-leaf-tint py-[72px] lg:py-[104px]">
          <div className="container-custom grid grid-cols-1 gap-y-8 lg:grid-cols-[320px_minmax(0,1fr)] lg:items-start lg:gap-x-24">
            <div className="flex flex-col gap-4">
              <div style={related.rise(0)}>
                <Eyebrow>{catName}</Eyebrow>
              </div>
              <h2 className={`${DISPLAY} text-[32px] leading-[1.06] lg:text-[44px] lg:leading-[1.05]`} style={related.rise(1)}>
                {c.related}
              </h2>
            </div>
            <div className="relative">
              <div className="absolute inset-x-0 top-0 h-px bg-ink" style={related.rule(0.1)} aria-hidden="true" />
              <ul className="m-0 flex list-none flex-col p-0">
                {siblings.map((s, i) => (
                  <li key={s.slug} style={related.rise(i, 0.2)}>
                    <Link
                      href={`/services/${s.slug}`}
                      className="group grid grid-cols-[minmax(0,1fr)_24px] gap-x-5 gap-y-1.5 border-b border-rule py-5 lg:grid-cols-[250px_minmax(0,1fr)_24px] lg:gap-x-8 lg:py-6"
                    >
                      <h3 className="font-sans text-[17px] font-semibold leading-[1.3] tracking-normal text-ink lg:text-[18px]">
                        {lang === 'fr' ? s.nameFr : s.nameEn}
                      </h3>
                      <p className="col-start-1 text-[14px] leading-[1.6] text-ink-soft lg:col-start-2 lg:text-[15px]">
                        {lang === 'fr' ? s.shortFr : s.shortEn}
                      </p>
                      <span className="col-start-2 row-start-1 pt-[3px] text-leaf transition-transform duration-300 group-hover:translate-x-1 lg:col-start-3">
                        <ArrowRight />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* ========== Closing CTA ========== */}
      <section className="bg-ink py-[72px] text-white lg:py-28">
        <div className="container-custom">
          <div
            ref={cta.ref}
            className="grid grid-cols-1 gap-y-7 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)] lg:items-end lg:gap-x-[120px]"
          >
            <div className="flex flex-col gap-6 lg:gap-7">
              <h2
                className="font-display text-[44px] font-light leading-none tracking-[-0.03em] text-white lg:text-[76px]"
                style={cta.rise(0, 0.15)}
              >
                {c.ctaTitle}
              </h2>
            </div>
            <a
              href={WAITLIST_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-14 items-center justify-center gap-3 rounded bg-white px-7 text-[16px] font-semibold text-ink transition-colors hover:bg-leaf-on-dark hover:text-ink-deep"
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
