'use client';

import Link from 'next/link';
import { useLanguage } from '../../../contexts/LanguageContext';
import { useReveal } from '../../../hooks/useReveal';
import { MICRO } from '../../sections/v3/Chapter';
import { BrandLogo } from '../../ui/BrandLogo';
import { BackToTop } from './FloatingBar';
import { FOOTER_SECTIONS } from './navData';

/* --- Inline SVG social icons (verbatim from Footer.tsx; lucide has no brand icons) --- */

const SvgFacebook = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);
const SvgInstagram = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
);
const SvgTiktok = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M16.5 3c.3 1.6 1.2 2.9 2.6 3.7.7.4 1.5.7 2.4.8v3.1a8.6 8.6 0 0 1-4.5-1.4v6.1a6.1 6.1 0 1 1-6.1-6.1c.3 0 .7 0 1 .1v3.2a2.9 2.9 0 1 0 2 2.8V3h2.6z"/></svg>
);

const ICONS = { instagram: SvgInstagram, facebook: SvgFacebook, tiktok: SvgTiktok } as const;

const LINK_CLASS =
  'inline-flex items-center gap-1.5 text-[13px] font-light text-white/65 transition-colors duration-200 hover:text-white';

/* --- In-flow footer panel. On desktop the bottom margin reserves the fixed
   FloatingBar (3rem) + its inset (3vh) + 1.5rem so the bar never covers a link
   and reads as the panel's bottom edge at page end; below md the bar is absent
   and the panel carries its own bottom row. --- */
export function Colophon() {
  const { t } = useLanguage();
  const reveal = useReveal<HTMLElement>(0, 'fsRise');
  const year = new Date().getFullYear();

  return (
    <footer
      id="colophon"
      ref={reveal.ref}
      style={reveal.style}
      className="relative z-10 mx-[clamp(1rem,4.17vw,3.75rem)] mt-[2vh] mb-6 rounded-3xl fs-panel p-6 md:mb-[calc(3rem_+_3vh_+_1.5rem)] md:p-10"
    >
      <div className="grid grid-cols-2 gap-8 md:grid-cols-[1.4fr_repeat(4,1fr)]">
        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <Link href="/" className="inline-flex">
            <BrandLogo className="h-8" />
          </Link>
          <p className="mt-4 max-w-xs text-[13px] font-light leading-relaxed text-white/55">{t('footer.description')}</p>
          {/* Legal footing: not an emergency service; nothing promised before launch. */}
          <p className="mt-3 max-w-xs text-[11.5px] leading-relaxed text-white/60">{t('v3.notEmergency')}</p>
          <p className="mt-1.5 max-w-xs text-[11.5px] leading-relaxed text-white/60">{t('v3.prelaunch')}</p>
        </div>

        {/* Link columns */}
        {FOOTER_SECTIONS.map((section) => (
          <div key={section.labelKey}>
            <h3 className={`${MICRO} mb-4 font-normal`}>{t(section.labelKey)}</h3>
            <ul className="flex flex-col gap-2">
              {section.links.map((link) => {
                const Icon = link.icon ? ICONS[link.icon] : null;
                const label = link.titleKey ? t(link.titleKey) : link.title;
                return (
                  <li key={link.href}>
                    {link.href.startsWith('http') ? (
                      <a href={link.href} target="_blank" rel="noopener noreferrer" className={LINK_CLASS}>
                        {Icon && <Icon className="h-3.5 w-3.5 shrink-0" />}
                        {label}
                      </a>
                    ) : (
                      <Link href={link.href} className={LINK_CLASS}>
                        {label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom row — on desktop the FloatingBar carries it */}
      <div className="mt-8 flex flex-col items-center gap-3 border-t border-white/10 pt-5 md:hidden">
        <p className={MICRO}>
          © {year} MobiSoins Inc. · {t('footer.allRightsReserved')}
        </p>
        <p className={MICRO}>{t('footer.madeIn')} 🍁</p>
        <BackToTop />
      </div>
    </footer>
  );
}
