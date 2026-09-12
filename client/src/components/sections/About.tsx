'use client';

import {
  ShieldCheck,
  Users,
  MapPin,
  HeartHandshake,
  Sparkles,
  Stethoscope,
  Cpu,
} from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useReveal } from '../../hooks/useReveal';
import { EYEBROW, H1, H2, LEAD, BODY, CARD, FRAME } from '../layout/PageShell';

// White-theme rebuild of the About page, matching the home page: navy type on
// a white ground, hairline slate borders, sage accents, one inset navy card.

const Photo = ({
  src,
  alt,
  className = '',
  position,
}: {
  src: string;
  alt: string;
  className?: string;
  position?: string;
}) => (
  <div className={`${FRAME} ${className}`}>
    <img
      src={src}
      alt={alt}
      className="absolute inset-0 h-full w-full object-cover"
      style={position ? { objectPosition: position } : undefined}
    />
  </div>
);

const IconTile = ({ Icon }: { Icon: React.ComponentType<{ className?: string }> }) => (
  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#cddcc9] bg-[#f4f7f2] text-[#4e6645]">
    <Icon className="h-5 w-5" />
  </span>
);

export const About = () => {
  const { t } = useLanguage();
  const hero = useReveal();
  const statement = useReveal();
  const problem = useReveal();
  const story = useReveal();
  const founders = useReveal();
  const team = useReveal();
  const values = useReveal();

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

  const foundersList = ['Josue Kenge', 'Gercia Pierre', 'Astrid Kenge', 'Moise Kenge'];

  return (
    <div className="bg-white">
      {/* ========== Mission hero ========== */}
      <section className="pt-12 pb-16 sm:pt-16 lg:pt-24 lg:pb-24">
        <div className="container-custom">
          <div
            ref={hero.ref}
            style={hero.style}
            className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16"
          >
            <div>
              <span className={EYEBROW}>{t('about.missionBadge')}</span>
              <h1 className={`${H1} mt-5`}>{t('about.missionTitle')}</h1>
              <p className={`${LEAD} mt-6 max-w-[560px]`}>{t('about.missionLead')}</p>
            </div>
            <Photo
              src="/nurses/elder-03.jpeg"
              alt="Aînée souriante accompagnée par MobiSoins"
              className="aspect-[4/3] lg:aspect-auto lg:h-[30rem]"
            />
          </div>
        </div>
      </section>

      {/* ========== Mission statement ========== */}
      <section className="pb-16 lg:pb-24">
        <div className="container-custom">
          <div
            ref={statement.ref}
            style={statement.style}
            className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8"
          >
            <div className="flex flex-col justify-center rounded-[22px] bg-[#0a1f38] p-7 text-white sm:p-10 lg:p-12">
              <span className="text-[12px] font-medium uppercase tracking-[0.14em] text-[#98B690]">
                {t('about.statementBadge')}
              </span>
              <p className="mt-5 text-[20px] font-normal leading-[1.35] tracking-[-0.02em] sm:text-[24px] lg:text-[28px]">
                {t('about.statement1')}
              </p>
              <p className="mt-6 text-[15px] font-light leading-relaxed text-[#a8bacd]">
                {t('about.statement2')}
              </p>
              <p className="mt-3 text-[15px] font-light leading-relaxed text-[#a8bacd]">
                {t('about.statement3')}
              </p>
            </div>
            <Photo
              src="/nurses/commitment.png"
              alt="Des patients de tous âges accompagnés par MobiSoins"
              className="aspect-[4/3] min-h-[240px] lg:aspect-auto lg:min-h-full"
            />
          </div>
        </div>
      </section>

      {/* ========== The problem ========== */}
      <section className="border-y border-slate-200/70 bg-[#f7f9fa] py-16 lg:py-24">
        <div className="container-custom">
          <div
            ref={problem.ref}
            style={problem.style}
            className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16"
          >
            <div>
              <span className={EYEBROW}>{t('about.problemBadge')}</span>
              <h2 className={`${H2} mt-4`}>{t('about.problemTitle')}</h2>
            </div>
            <div className="flex flex-col gap-5 lg:pt-2">
              <p className={`${BODY} text-[#0a1f38]`}>{t('about.problemText1')}</p>
              <p className={BODY}>{t('about.problemText2')}</p>
              <p className={BODY}>{t('about.problemText3')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== Story: the founding ========== */}
      <section className="py-16 lg:py-24">
        <div className="container-custom">
          <div ref={story.ref} style={story.style}>
            <div className="max-w-[720px]">
              <span className={EYEBROW}>{t('about.storyBadge')}</span>
              <h2 className={`${H2} mt-4`}>{t('about.storyTitle')}</h2>
            </div>

            <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-20">
              <div className="flex flex-col gap-5">
                <p className={`${BODY} text-[#0a1f38]`}>{t('about.storyText1')}</p>
                <blockquote className="my-3 border-l-2 border-[#98B690] pl-5 text-[19px] font-medium leading-snug tracking-[-0.02em] text-[#0a1f38] sm:text-[22px]">
                  {t('about.storyQuote')}
                </blockquote>
                <p className={BODY}>{t('about.storyText2')}</p>
                <p className={BODY}>{t('about.storyText3')}</p>
                <p className={BODY}>{t('about.storyText4')}</p>
              </div>
              <Photo
                src="/nurses/care-3.png"
                alt="L'équipe MobiSoins"
                className="aspect-[4/3] lg:sticky lg:top-32 lg:aspect-auto lg:h-[30rem]"
              />
            </div>
          </div>

          {/* Founders */}
          <div ref={founders.ref} style={founders.style} className="mt-16">
            <span className={EYEBROW}>{t('about.foundersLabel')}</span>
            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-[30px]">
              {foundersList.map((name) => {
                const initials = name
                  .split(' ')
                  .map((n) => n[0])
                  .join('');
                return (
                  <div key={name} className="border-t border-[#0a1f38] pt-5">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0a1f38] text-[13px] font-semibold text-white">
                      {initials}
                    </div>
                    <p className="mt-4 text-[15px] font-medium tracking-[-0.01em] text-[#0a1f38]">{name}</p>
                    <p className="mt-0.5 text-[13px] text-[#4e6645]">{t('about.founderRole')}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ========== Team: nurses + engineers ========== */}
      <section className="pb-16 lg:pb-24">
        <div className="container-custom">
          <div ref={team.ref} style={team.style}>
            <div className="max-w-[640px]">
              <span className={EYEBROW}>{t('about.teamBadge')}</span>
              <h2 className={`${H2} mt-4`}>{t('about.teamTitle')}</h2>
              <p className={`${LEAD} mt-5`}>{t('about.teamLead')}</p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3 sm:gap-[30px]">
              {teamItems.map(({ icon, titleKey, descKey }) => (
                <div key={titleKey} className={`${CARD} p-6 sm:p-7`}>
                  <IconTile Icon={icon} />
                  <h3 className="mt-5 text-[18px] font-medium tracking-[-0.02em] text-[#0a1f38]">{t(titleKey)}</h3>
                  <p className="mt-2 text-[14.5px] font-light leading-relaxed text-[#5a5a6a]">{t(descKey)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== Values ========== */}
      <section className="border-t border-slate-200/70 py-16 lg:py-24">
        <div className="container-custom">
          <div ref={values.ref} style={values.style}>
            <div className="max-w-[640px]">
              <span className={EYEBROW}>{t('about.valuesBadge')}</span>
              <h2 className={`${H2} mt-4`}>{t('about.valuesTitle')}</h2>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-4 lg:gap-x-[30px]">
              {valueItems.map(({ icon: Icon, titleKey, descKey }) => (
                <div key={titleKey} className="border-t border-[#0a1f38] pt-5">
                  <Icon className="h-5 w-5 text-[#4e6645]" />
                  <h3 className="mt-4 text-[16px] font-medium tracking-[-0.02em] text-[#0a1f38] sm:text-[18px]">
                    {t(titleKey)}
                  </h3>
                  <p className="mt-2 text-[13.5px] font-light leading-relaxed text-[#5a5a6a] sm:text-[14.5px]">
                    {t(descKey)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
