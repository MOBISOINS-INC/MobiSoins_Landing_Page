'use client';

import { ShieldCheck, Users, MapPin, HeartHandshake, Sparkles, Stethoscope, Cpu, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useReveal } from '../../hooks/useReveal';
import { FOUNDERS } from '../../data/founders';
import { EYEBROW, H2, LEAD, BODY, CARD, FRAME } from '../layout/PageShell';

const WAITLIST_URL =
  'https://docs.google.com/forms/d/1TaBNJ9M7Ks6LW5_Vfyqx5DodEPQZbo06bxX8PvJFLiw/viewform';

// Editorial About page on the home page's white system: one oversized
// statement, a facts strip, an inset navy card, the founding story, and a
// founders section with room for a portrait, origin, background and bio each.

const Photo = ({ src, alt, className = '' }: { src: string; alt: string; className?: string }) => (
  <div className={`${FRAME} ${className}`}>
    <img src={src} alt={alt} className="absolute inset-0 h-full w-full object-cover" />
  </div>
);

const IconTile = ({ Icon }: { Icon: React.ComponentType<{ className?: string }> }) => (
  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-sage/40 bg-sage/15 text-sage">
    <Icon className="h-5 w-5" />
  </span>
);

export const About = () => {
  const { t, language } = useLanguage();
  const lang = language === 'FR' ? 'fr' : 'en';
  const hero = useReveal();
  const facts = useReveal();
  const statement = useReveal();
  const problem = useReveal();
  const story = useReveal();
  const founders = useReveal();
  const team = useReveal();
  const values = useReveal();
  const cta = useReveal();

  const teamItems = [
    { icon: Stethoscope, titleKey: 'about.team1Title', descKey: 'about.team1Desc' },
    { icon: Cpu, titleKey: 'about.team2Title', descKey: 'about.team2Desc' },
    { icon: Users, titleKey: 'about.team3Title', descKey: 'about.team3Desc' },
  ];

  const valueItems = [
    { icon: MapPin, titleKey: 'about.value1Title', descKey: 'about.value1Desc' },
    { icon: HeartHandshake, titleKey: 'about.value2Title', descKey: 'about.value2Desc' },
    { icon: ShieldCheck, titleKey: 'about.value3Title', descKey: 'about.value3Desc' },
    { icon: Sparkles, titleKey: 'about.value4Title', descKey: 'about.value4Desc' },
  ];

  return (
    <div className="bg-white/5">
      {/* ========== Statement hero ========== */}
      <section className="pt-14 sm:pt-20 lg:pt-28">
        <div className="container-custom">
          <div ref={hero.ref} style={hero.style} className="max-w-[1040px]">
            <span className={EYEBROW}>{t('about.missionBadge')}</span>
            <h1 className="mt-6 font-sans font-extralight text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.02] tracking-[0.02em] text-white [text-wrap:balance]">
              {t('about.missionTitle')}
            </h1>
            <p className={`${LEAD} mt-8 max-w-[640px]`}>{t('about.missionLead')}</p>
          </div>

          <div ref={facts.ref} style={facts.style} className="mt-14 lg:mt-20">
            <Photo
              src="/nurses/elder-03.jpeg"
              alt="Aînée souriante accompagnée par MobiSoins"
              className="aspect-[16/9] sm:aspect-[21/9]"
            />
            <dl className="mt-10 grid grid-cols-1 gap-x-[30px] gap-y-6 sm:grid-cols-3 lg:mt-12">
              {[1, 2, 3].map((n) => (
                <div key={n} className="border-t border-white/30 pt-5">
                  <dt className="text-[32px] font-semibold leading-none tracking-[-0.035em] text-white lg:text-[40px]">
                    {t(`about.fact${n}Value`)}
                  </dt>
                  <dd className="mt-3 text-[14px] leading-relaxed text-white/78">{t(`about.fact${n}Label`)}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ========== Commitment ========== */}
      <section className="py-20 lg:py-28">
        <div className="container-custom">
          <div ref={statement.ref} style={statement.style} className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
            <div className="flex flex-col justify-center rounded-3xl bg-ink-panel/85 p-8 text-white sm:p-10 lg:p-14">
              <span className="text-[12px] font-medium uppercase tracking-[0.14em] text-sage">
                {t('about.statementBadge')}
              </span>
              <p className="mt-6 text-[22px] font-normal leading-[1.3] tracking-[-0.025em] sm:text-[26px] lg:text-[32px]">
                {t('about.statement1')}
              </p>
              <p className="mt-8 text-[15px] font-light leading-relaxed text-mist">{t('about.statement2')}</p>
              <p className="mt-3 text-[15px] font-light leading-relaxed text-mist">{t('about.statement3')}</p>
            </div>
            <Photo
              src="/nurses/commitment.png"
              alt="Des patients de tous âges accompagnés par MobiSoins"
              className="aspect-[4/3] min-h-[260px] lg:aspect-auto lg:min-h-full"
            />
          </div>
        </div>
      </section>

      {/* ========== The problem ========== */}
      <section className="border-y border-white/12 bg-ink-panel/40 py-20 lg:py-28">
        <div className="container-custom">
          <div ref={problem.ref} style={problem.style} className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div>
              <span className={EYEBROW}>{t('about.problemBadge')}</span>
              <h2 className={`${H2} mt-4`}>{t('about.problemTitle')}</h2>
            </div>
            <div className="flex flex-col gap-5 lg:pt-2">
              <p className={`${BODY} text-white`}>{t('about.problemText1')}</p>
              <p className={BODY}>{t('about.problemText2')}</p>
              <p className={BODY}>{t('about.problemText3')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== Story ========== */}
      <section className="py-20 lg:py-28">
        <div className="container-custom">
          <div ref={story.ref} style={story.style}>
            <div className="max-w-[760px]">
              <span className={EYEBROW}>{t('about.storyBadge')}</span>
              <h2 className={`${H2} mt-4`}>{t('about.storyTitle')}</h2>
            </div>
            <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-20">
              <div className="flex flex-col gap-5">
                <p className={`${BODY} text-white`}>{t('about.storyText1')}</p>
                <blockquote className="my-4 border-l-2 border-sage pl-6 text-[22px] font-medium leading-snug tracking-[-0.025em] text-white sm:text-[26px]">
                  {t('about.storyQuote')}
                </blockquote>
                <p className={BODY}>{t('about.storyText2')}</p>
                <p className={BODY}>{t('about.storyText3')}</p>
                <p className={BODY}>{t('about.storyText4')}</p>
              </div>
              <Photo
                src="/nurses/care-3.png"
                alt="L'équipe MobiSoins"
                className="aspect-[4/3] lg:sticky lg:top-32 lg:aspect-auto lg:h-[32rem]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========== Founders ========== */}
      <section className="border-t border-white/12 py-20 lg:py-28">
        <div className="container-custom">
          <div ref={founders.ref} style={founders.style}>
            <div className="max-w-[720px]">
              <span className={EYEBROW}>{t('about.foundersLabel')}</span>
              <h2 className={`${H2} mt-4`}>{t('about.foundersTitle')}</h2>
              <p className={`${LEAD} mt-5`}>{t('about.foundersLead')}</p>
            </div>

            <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:mt-16 lg:gap-x-[30px] lg:gap-y-16">
              {FOUNDERS.map((f) => {
                const initials = f.name.split(' ').map((n) => n[0]).join('');
                return (
                  <article key={f.slug} className="grid gap-6 sm:grid-cols-[minmax(0,200px)_1fr] sm:gap-7 lg:grid-cols-[240px_1fr]">
                    {/* Portrait — 4:5, initials tile until a photo is provided */}
                    <div className={`${FRAME} aspect-[4/5] w-full max-w-[280px] sm:max-w-none`}>
                      {f.photo ? (
                        <img src={f.photo} alt={f.name} className="absolute inset-0 h-full w-full object-cover" />
                      ) : (
                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-white/10">
                          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-ink-panel/85 text-[18px] font-semibold text-white">
                            {initials}
                          </span>
                          <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-white/45">
                            {t('about.founderPhotoPending')}
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="flex flex-col">
                      <h3 className="text-[22px] font-semibold leading-tight tracking-[-0.025em] text-white sm:text-[24px]">
                        {f.name}
                      </h3>
                      <p className="mt-1 text-[14px] font-medium text-sage">{f.role[lang]}</p>

                      <dl className="mt-5 grid grid-cols-[auto_1fr] gap-x-5 gap-y-2 border-t border-white/12 pt-5 text-[14px]">
                        <dt className="text-[12px] font-medium uppercase tracking-[0.14em] text-white/60 leading-[1.7]">{t('about.founderFrom')}</dt>
                        <dd className="text-white">{f.origin[lang]}</dd>
                        <dt className="text-[12px] font-medium uppercase tracking-[0.14em] text-white/60 leading-[1.7]">{t('about.founderPrev')}</dt>
                        <dd className="text-white">{f.previously[lang]}</dd>
                      </dl>

                      <p className="mt-5 text-[15px] font-light leading-relaxed text-white/78">{f.bio[lang]}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ========== Team ========== */}
      <section className="border-t border-white/12 bg-ink-panel/40 py-20 lg:py-28">
        <div className="container-custom">
          <div ref={team.ref} style={team.style}>
            <div className="max-w-[640px]">
              <span className={EYEBROW}>{t('about.teamBadge')}</span>
              <h2 className={`${H2} mt-4`}>{t('about.teamTitle')}</h2>
              <p className={`${LEAD} mt-5`}>{t('about.teamLead')}</p>
            </div>
            <div className="mt-12 grid gap-4 sm:grid-cols-3 sm:gap-[30px]">
              {teamItems.map(({ icon, titleKey, descKey }) => (
                <div key={titleKey} className={`${CARD} p-6 sm:p-7`}>
                  <IconTile Icon={icon} />
                  <h3 className="mt-5 text-[18px] font-medium tracking-[-0.02em] text-white">{t(titleKey)}</h3>
                  <p className="mt-2 text-[14.5px] font-light leading-relaxed text-white/78">{t(descKey)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== Values ========== */}
      <section className="border-t border-white/12 py-20 lg:py-28">
        <div className="container-custom">
          <div ref={values.ref} style={values.style}>
            <div className="max-w-[640px]">
              <span className={EYEBROW}>{t('about.valuesBadge')}</span>
              <h2 className={`${H2} mt-4`}>{t('about.valuesTitle')}</h2>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-4 lg:gap-x-[30px]">
              {valueItems.map(({ icon: Icon, titleKey, descKey }) => (
                <div key={titleKey} className="border-t border-white/30 pt-5">
                  <Icon className="h-5 w-5 text-sage" />
                  <h3 className="mt-4 text-[16px] font-medium tracking-[-0.02em] text-white sm:text-[18px]">{t(titleKey)}</h3>
                  <p className="mt-2 text-[13.5px] font-light leading-relaxed text-white/78 sm:text-[14.5px]">{t(descKey)}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Closing CTA */}
          <div
            ref={cta.ref}
            style={cta.style}
            className="mt-20 flex flex-col items-start justify-between gap-6 rounded-3xl bg-ink-panel/85 p-8 sm:flex-row sm:items-center lg:mt-28 lg:p-12"
          >
            <div>
              <p className="max-w-[560px] text-[24px] font-normal leading-[1.3] tracking-[-0.03em] text-white lg:text-[30px]">
                {t('about.ctaTitle')}
              </p>
              <p className="mt-3 text-[15px] font-light text-mist">{t('about.ctaBody')}</p>
            </div>
            <a
              href={WAITLIST_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex shrink-0 items-center gap-2 rounded-xl bg-white/5 px-6 py-3 text-[14px] font-medium text-white transition-colors hover:bg-white/10"
            >
              {t('about.ctaButton')}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
