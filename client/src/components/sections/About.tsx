'use client';

import Image from 'next/image';
import { useLanguage } from '../../contexts/LanguageContext';
import { useReveal } from '../../hooks/useReveal';
import { FOUNDERS } from '../../data/founders';
import { ArrowRight, DISPLAY, Eyebrow } from '../ui/editorial';
import { PulseLine } from '../ui/PulseLine';

const WAITLIST_URL =
  'https://docs.google.com/forms/d/1TaBNJ9M7Ks6LW5_Vfyqx5DodEPQZbo06bxX8PvJFLiw/viewform';

// Editorial About page on the landing page's paper/ink system: one oversized
// statement, a ruled facts strip, the problem, a navy commitment band, the
// founding story around a full-width quote, and the founders as a four-up
// portrait row (two-up on phones) whose cards align at the base however long
// each bio runs.

const BODY = 'text-[15px] leading-[1.7] lg:text-[16px]';
const NUM = 'text-[12px] font-semibold tracking-[0.14em] text-leaf-text lg:text-[13px]';
const H2 = `${DISPLAY} text-[36px] leading-[1.06] lg:text-[60px] lg:leading-[1.03]`;

const TEAM = [1, 2, 3] as const;
const VALUES = [1, 2, 3, 4] as const;

export const About = () => {
  const { t, language } = useLanguage();
  const lang = language === 'FR' ? 'fr' : 'en';
  const hero = useReveal();
  const facts = useReveal();
  const problem = useReveal();
  const statement = useReveal();
  const story = useReveal();
  const founders = useReveal();
  const team = useReveal();
  const values = useReveal();
  const cta = useReveal();

  return (
    <div className="bg-paper">
      {/* ========== Statement hero ========== */}
      <section className="pt-14 sm:pt-20 lg:pt-28">
        <div className="container-custom">
          <div
            ref={hero.ref}
            style={hero.style}
            className="grid grid-cols-1 gap-y-6 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-end lg:gap-x-24"
          >
            <div className="flex flex-col gap-5 lg:gap-7">
              <Eyebrow>{t('about.missionBadge')}</Eyebrow>
              <h1 className={`${DISPLAY} text-[48px] leading-none tracking-[-0.03em] sm:text-[68px] lg:text-[96px] lg:leading-[0.98]`}>
                {t('about.missionTitle')}
              </h1>
            </div>
            <p className="text-[16px] leading-[1.7] text-ink-soft lg:pb-2.5 lg:text-[18px]">
              {t('about.missionLead')}
            </p>
          </div>

          <div ref={facts.ref} style={facts.style} className="mt-10 lg:mt-[72px]">
            <Image
              src="/about/hero-street.jpg"
              alt={t('about.heroPhotoAlt')}
              width={1983}
              height={793}
              priority
              // Served as-is: the source is only 1983px wide, so a second lossy
              // pass through the optimizer visibly softened it on retina.
              unoptimized
              className="h-[260px] w-full rounded object-cover object-[52%_50%] sm:h-[400px] lg:h-auto lg:aspect-[1983/793]"
            />
            <dl className="m-0 grid grid-cols-1 border-b border-rule sm:grid-cols-3">
              {[1, 2, 3].map((n) => (
                <div
                  key={n}
                  className="flex flex-col gap-2 border-t border-rule py-6 first:border-t-0 sm:border-l sm:border-t-0 sm:px-8 sm:py-9 sm:first:border-l-0 sm:first:pl-0 lg:px-10"
                >
                  <dt className="font-display text-[40px] font-light leading-none tracking-[-0.02em] text-ink lg:text-[56px]">
                    {t(`about.fact${n}Value`)}
                  </dt>
                  <dd className="m-0 text-[14px] leading-normal text-ink-soft lg:text-[15px]">
                    {t(`about.fact${n}Label`)}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ========== The problem ========== */}
      <section className="py-[72px] lg:py-32">
        <div className="container-custom">
          <div
            ref={problem.ref}
            style={problem.style}
            className="grid grid-cols-1 gap-y-8 lg:grid-cols-[minmax(0,400px)_minmax(0,1fr)] lg:gap-x-[120px]"
          >
            <div className="flex flex-col gap-4 lg:gap-6">
              <Eyebrow>{t('about.problemBadge')}</Eyebrow>
              <h2 className={`${DISPLAY} text-[36px] leading-[1.06] lg:text-[52px] lg:leading-[1.05]`}>
                {t('about.problemTitle')}
              </h2>
              <PulseLine className="h-9 w-60 text-leaf lg:h-11 lg:w-full" />
            </div>
            <div className="flex flex-col gap-7">
              <p className="font-display text-[22px] font-light leading-[1.4] tracking-[-0.01em] text-ink lg:text-[28px]">
                {t('about.problemText1')}
              </p>
              <div className="grid grid-cols-1 gap-x-12 gap-y-5 border-t border-rule pt-7 sm:grid-cols-2">
                <p className={`${BODY} text-ink-soft`}>{t('about.problemText2')}</p>
                <p className={`${BODY} text-ink-soft`}>{t('about.problemText3')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== Commitment ========== */}
      <section className="bg-ink py-[72px] text-white lg:py-32">
        <div className="container-custom">
          <div
            ref={statement.ref}
            style={statement.style}
            className="grid grid-cols-1 gap-y-10 lg:grid-cols-[minmax(0,1fr)_440px] lg:items-start lg:gap-x-24"
          >
            <div className="flex flex-col gap-7 lg:gap-9">
              <Eyebrow onDark>{t('about.statementBadge')}</Eyebrow>
              <p className="font-display text-[26px] font-light leading-[1.25] tracking-[-0.015em] text-white lg:text-[40px] lg:leading-[1.22]">
                {t('about.statement1')}
              </p>
              <div className="grid grid-cols-1 gap-x-12 gap-y-5 border-t border-white/20 pt-7 sm:grid-cols-2 lg:pt-9">
                <p className="text-[15px] leading-[1.7] text-white/80">{t('about.statement2')}</p>
                <p className="text-[15px] leading-[1.7] text-white/80">{t('about.statement3')}</p>
              </div>
            </div>
            <Image
              src="/about/commitment.jpg"
              alt={lang === 'fr' ? 'Des patients de tous âges accompagnés par MobiSoins' : 'Patients of every age cared for by MobiSoins'}
              width={1493}
              height={2000}
              sizes="(min-width: 1024px) 440px, 100vw"
              className="h-[360px] w-full rounded object-cover lg:h-[620px]"
            />
          </div>
        </div>
      </section>

      {/* ========== Story ========== */}
      <section className="bg-leaf-tint py-[72px] lg:py-32">
        <div className="container-custom">
          <div ref={story.ref} style={story.style} className="flex flex-col gap-10 lg:gap-[72px]">
            <div className="grid grid-cols-1 items-center gap-y-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,560px)] lg:gap-x-24">
              <div className="flex flex-col gap-5 lg:gap-7">
                <Eyebrow>{t('about.storyBadge')}</Eyebrow>
                <h2 className={H2}>{t('about.storyTitle')}</h2>
                <p className="text-[16px] leading-[1.7] text-leaf-text lg:text-[18px]">{t('about.storyText1')}</p>
              </div>
              <Image
                src="/about/story-home.jpg"
                alt={t('about.storyPhotoAlt')}
                width={1884}
                height={1413}
                unoptimized
                sizes="(min-width: 1024px) 560px, 100vw"
                className="h-[260px] w-full rounded object-cover object-[50%_30%] lg:h-[420px]"
              />
            </div>

            <blockquote className="m-0 border-y border-leaf py-9 font-display text-[36px] font-light italic leading-[1.08] tracking-[-0.025em] text-ink lg:py-14 lg:text-[72px] lg:leading-[1.05]">
              {lang === 'fr' ? '«\u00a0' : '“'}
              {t('about.storyQuote')}
              {lang === 'fr' ? '\u00a0»' : '”'}
            </blockquote>

            <div className="grid grid-cols-1 gap-x-14 gap-y-5 lg:grid-cols-3">
              <p className={`${BODY} text-leaf-text`}>{t('about.storyText2')}</p>
              <p className={`${BODY} text-leaf-text`}>{t('about.storyText3')}</p>
              <p className={`${BODY} text-leaf-text`}>{t('about.storyText4')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== Founders ========== */}
      <section className="pb-12 pt-[72px] lg:pb-[84px] lg:pt-32">
        <div className="container-custom">
          <div ref={founders.ref} style={founders.style}>
            <div className="grid grid-cols-1 gap-y-5 border-b border-ink pb-8 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-end lg:gap-x-24 lg:pb-10">
              <div className="flex flex-col gap-4 lg:gap-6">
                <Eyebrow>{t('about.foundersLabel')}</Eyebrow>
                <h2 className={H2}>{t('about.foundersTitle')}</h2>
              </div>
              <p className="text-[16px] leading-[1.65] text-ink-soft lg:text-[17px]">{t('about.foundersLead')}</p>
            </div>

            <div className="grid grid-cols-2 gap-x-5 gap-y-12 pt-8 lg:grid-cols-4 lg:gap-x-8 lg:pt-10">
              {FOUNDERS.map((f) => {
                const initials = f.name.split(' ').map((n) => n[0]).join('');
                return (
                  <article key={f.slug} className="flex flex-col gap-4 lg:gap-5">
                    {/* Portrait — 4:5; a serif monogram holds the slot until a photo is provided */}
                    <div className="relative aspect-[4/5] w-full overflow-hidden rounded border border-rule bg-leaf-tint">
                      {f.photo ? (
                        <Image
                          src={f.photo}
                          alt={f.name}
                          fill
                          sizes="(min-width: 1024px) 320px, 50vw"
                          className="object-cover"
                        />
                      ) : (
                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                          <span className="font-display text-[44px] font-light tracking-[0.02em] text-leaf lg:text-[64px]">
                            {initials}
                          </span>
                          <span className="px-2 text-center text-[11px] text-ink-soft lg:text-[12px]">
                            {t('about.founderPhotoPending')}
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <h3 className="font-display text-[24px] font-light leading-[1.05] tracking-[-0.02em] text-ink lg:text-[32px]">
                        {f.name}
                      </h3>
                      <p className="text-[13px] font-semibold text-leaf-text lg:text-[14px]">{f.role[lang]}</p>
                    </div>

                    <p className="text-[14px] leading-[1.65] text-ink-soft lg:text-[15px]">{f.bio[lang]}</p>

                    <dl className="m-0 mt-auto flex flex-col gap-1.5 border-t border-rule pt-4 text-[13px] leading-[1.6]">
                      <div className="flex flex-col lg:flex-row lg:gap-2">
                        <dt className="shrink-0 font-semibold text-ink">{t('about.founderFrom')}</dt>
                        <dd className="m-0 text-ink-soft">{f.origin[lang]}</dd>
                      </div>
                      <div className="flex flex-col lg:flex-row lg:gap-2">
                        <dt className="shrink-0 font-semibold text-ink">{t('about.founderPrev')}</dt>
                        <dd className="m-0 text-ink-soft">{f.previously[lang]}</dd>
                      </div>
                    </dl>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ========== Team ========== */}
      <section className="pb-[72px] pt-12 lg:pb-32 lg:pt-[84px]">
        <div className="container-custom">
          <div ref={team.ref} style={team.style} className="flex flex-col gap-8 lg:gap-14">
            <div className="grid grid-cols-1 gap-y-5 lg:grid-cols-[minmax(0,1fr)_480px] lg:items-end lg:gap-x-24">
              <div className="flex flex-col gap-4 lg:gap-6">
                <Eyebrow>{t('about.teamBadge')}</Eyebrow>
                <h2 className={H2}>{t('about.teamTitle')}</h2>
              </div>
              <p className="text-[16px] leading-[1.65] text-ink-soft lg:text-[17px]">{t('about.teamLead')}</p>
            </div>
            <div className="grid grid-cols-1 border-t border-ink sm:grid-cols-3">
              {TEAM.map((n) => (
                <div
                  key={n}
                  className="flex flex-col gap-2.5 border-b border-rule py-6 sm:border-b-0 sm:border-l sm:border-rule sm:px-8 sm:pb-2 sm:pt-9 sm:first:border-l-0 sm:first:pl-0 lg:gap-3 lg:px-10"
                >
                  <div className={NUM}>{String(n).padStart(2, '0')}</div>
                  <h3 className="font-sans text-[19px] font-semibold tracking-normal text-ink lg:text-[22px]">
                    {t(`about.team${n}Title`)}
                  </h3>
                  <p className="text-[15px] leading-[1.65] text-ink-soft lg:text-[16px]">{t(`about.team${n}Desc`)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== Values ========== */}
      <section className="bg-leaf-tint py-[72px] lg:py-[120px]">
        <div className="container-custom">
          <div
            ref={values.ref}
            style={values.style}
            className="grid grid-cols-1 gap-y-8 lg:grid-cols-[minmax(0,320px)_minmax(0,1fr)] lg:gap-x-[120px]"
          >
            <div className="flex flex-col gap-4 lg:gap-6">
              <Eyebrow>{t('about.valuesBadge')}</Eyebrow>
              <h2 className={`${DISPLAY} text-[36px] leading-[1.06] lg:text-[52px] lg:leading-[1.05]`}>
                {t('about.valuesTitle')}
              </h2>
            </div>
            <div className="grid grid-cols-1 border-t border-ink sm:grid-cols-2 sm:gap-x-20">
              {VALUES.map((n) => (
                <div
                  key={n}
                  className="grid grid-cols-[36px_minmax(0,1fr)] gap-x-3 border-b border-rule py-6 lg:grid-cols-[48px_minmax(0,1fr)] lg:gap-x-4 lg:py-[30px]"
                >
                  <div className={`${NUM} pt-1 lg:pt-[5px]`}>{String(n).padStart(2, '0')}</div>
                  <div>
                    <h3 className="font-sans text-[18px] font-semibold tracking-normal text-ink lg:text-[21px]">
                      {t(`about.value${n}Title`)}
                    </h3>
                    <p className="mt-2 text-[14px] leading-[1.6] text-ink-soft lg:text-[15px]">
                      {t(`about.value${n}Desc`)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== Closing CTA ========== */}
      <section className="bg-ink py-[72px] text-white lg:py-[120px]">
        <div className="container-custom">
          <div
            ref={cta.ref}
            style={cta.style}
            className="grid grid-cols-1 gap-y-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)] lg:items-end lg:gap-x-[120px]"
          >
            <div className="flex flex-col gap-6 lg:gap-7">
              <PulseLine className="h-9 w-[200px] text-leaf-on-dark lg:h-11 lg:w-80" />
              <h2 className="font-display text-[48px] font-light leading-none tracking-[-0.03em] text-white lg:text-[80px]">
                {t('about.ctaTitle')}
              </h2>
            </div>
            <div className="flex flex-col gap-5">
              <p className="text-[16px] leading-[1.55] text-white/85 lg:text-[18px]">{t('about.ctaBody')}</p>
              <a
                href={WAITLIST_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-14 items-center justify-center gap-3 rounded bg-white px-7 text-[16px] font-semibold text-ink transition-colors hover:bg-leaf-on-dark hover:text-ink-deep"
              >
                {t('about.ctaButton')}
                <ArrowRight />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
