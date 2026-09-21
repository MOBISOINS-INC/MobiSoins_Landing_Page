'use client';

import type { ComponentProps, ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Link from '../ui/LocaleLink';
import { BrandLogo } from '../ui/BrandLogo';
import { localizePath } from '../../lib/i18n';
import { useLanguage } from '../../contexts/LanguageContext';
/* ─── Inline SVG social icons ────────────────────────────────── */

const SvgFacebook = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);
const SvgInstagram = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
);
const SvgTiktok = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M16.5 3c.3 1.6 1.2 2.9 2.6 3.7.7.4 1.5.7 2.4.8v3.1a8.6 8.6 0 0 1-4.5-1.4v6.1a6.1 6.1 0 1 1-6.1-6.1c.3 0 .7 0 1 .1v3.2a2.9 2.9 0 1 0 2 2.8V3h2.6z"/></svg>
);

// Canadian flag, kept small and softened so it sits quietly beside the text.
const SvgCanada = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 36 18" aria-label="Canada" role="img">
    <rect width="36" height="18" fill="#fff" />
    <rect width="9" height="18" fill="#d52b1e" />
    <rect x="27" width="9" height="18" fill="#d52b1e" />
    <polygon points="12,2 10.4,5.2 8.6,4.4 9.4,9.2 7,6.8 6.4,8.4 3.6,7.8 4.4,10.6 3,11.4 7,14.8 6.4,16.6 11.4,16 11.4,21 12.6,21 12.6,16 17.6,16.6 17,14.8 21,11.4 19.6,10.6 20.4,7.8 17.6,8.4 17,6.8 14.6,9.2 15.4,4.4 13.6,5.2" fill="#d52b1e" transform="translate(10.5 1.5) scale(0.625)" />
  </svg>
);

/* ─── Types ───────────────────────────────────────────────────── */

type FooterLink = {
  title: string;
  href: string;
  icon?: (props: { className?: string }) => ReactNode;
};

/* ─── Animated container ─────────────────────────────────────── */

type AnimatedContainerProps = {
  delay?: number;
  className?: ComponentProps<typeof motion.div>['className'];
  children: ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: AnimatedContainerProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) return <>{children}</>;

  return (
    <div
      className={className}
    >
      {children}
    </div>
  );
}

/* ─── Footer ─────────────────────────────────────────────────── */

export const Footer = () => {
  const { t, language } = useLanguage();

  // Link columns. Absolute "/#visit" so the anchor also works from the other pages.
  const footerSections: { label: string; links: FooterLink[] }[] = [
    {
      label: t('footer.product'),
      links: [
        { title: t('footer.services'), href: '/services' },
        { title: t('footer.howItWorks'), href: '/#visit' },
      ],
    },
    {
      label: t('footer.company'),
      links: [
        { title: t('footer.aboutUs'), href: '/apropos' },
        { title: t('footer.articles'), href: '/articles' },
        { title: t('footer.faq'), href: '/faq' },
      ],
    },
    {
      label: t('footer.legal'),
      links: [
        { title: t('footer.privacy'), href: '/confidentialite' },
        { title: t('footer.terms'), href: '/conditions' },
        { title: t('footer.cookies'), href: '/cookies' },
      ],
    },
    {
      label: t('footer.social'),
      links: [
        { title: 'Instagram', href: 'https://www.instagram.com/mobisoins/', icon: SvgInstagram },
        { title: 'Facebook', href: 'https://www.facebook.com/p/MobiSoins-Inc-61562813077289/', icon: SvgFacebook },
        { title: 'TikTok', href: 'https://www.tiktok.com/@mobisoins', icon: SvgTiktok },
      ],
    },
  ];

  return (
    <footer
      className="relative w-full border-t border-white/10 bg-ink"
    >

      <div className="container-custom py-8 sm:py-16 lg:py-20">
        <div className="grid w-full gap-7 sm:gap-10 xl:grid-cols-3 xl:gap-12">

          {/* Brand column */}
          <AnimatedContainer className="flex items-center justify-between gap-3 sm:items-start sm:justify-start sm:gap-4">
            <Link href="/" className="shrink-0">
              <BrandLogo className="h-8 opacity-95 sm:h-10" />
            </Link>
            {/* Phones: social icons sit beside the logo instead of a fourth column */}
            <div className="flex items-center gap-4 sm:hidden">
              {footerSections[3].links.map((link) => link.icon && (
                <a
                  key={link.title}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.title}
                  className="text-white/70 transition-colors hover:text-white"
                >
                  <link.icon className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
            <div className="hidden flex-col gap-1.5 sm:flex sm:gap-2">
              <p className="text-[11px] sm:text-sm font-light leading-relaxed max-w-xs text-white/65">
                {t('footer.description')}
              </p>
              <p className="text-[11px] font-light text-white/55">
                © {new Date().getFullYear()} MobiSoins Inc. {t('footer.allRightsReserved')}
              </p>
            </div>
          </AnimatedContainer>

          {/* Link columns */}
          <div className="xl:col-span-2 grid grid-cols-3 gap-x-4 gap-y-6 sm:grid-cols-2 sm:gap-8 md:grid-cols-4">
            {footerSections.map((section, i) => (
              <AnimatedContainer key={section.label} delay={0.1 + i * 0.08}>
                <div className={i === 3 ? 'hidden sm:block' : undefined}>
                  <h3
                    className="text-xs font-semibold uppercase tracking-widest mb-2.5 text-white sm:mb-4"
                  >
                    {section.label}
                  </h3>
                  <ul className="space-y-1.5 sm:space-y-2.5">
                    {section.links.map((link) => (
                      <li key={link.title}>
                        <a
                          href={localizePath(link.href, language)}
                          target={link.href.startsWith('http') ? '_blank' : undefined}
                          rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="inline-flex items-center gap-1.5 text-[13px] font-light transition-colors sm:text-sm duration-200"
                          style={{ color: 'rgba(255,255,255,0.72)' }}
                          onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                          onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.72)')}
                        >
                          {link.icon && <link.icon className="w-3.5 h-3.5 shrink-0" />}
                          {link.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedContainer>
            ))}
          </div>

        </div>

        {/* Bottom bar */}
        <div
          className="mt-6 sm:mt-10 pt-4 sm:pt-5 flex flex-col items-center justify-center gap-1.5"
          style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}
        >
          <p className="text-xs font-light" style={{ color: 'rgba(255,255,255,0.6)' }}>
            <span className="inline-flex items-center gap-1.5">
              {t('footer.madeIn')}
              <SvgCanada className="h-2.5 w-5 rounded-[1.5px] opacity-70 saturate-[0.8]" />
            </span>
          </p>
          <p className="text-[11px] font-light text-white/55 sm:hidden">
            © {new Date().getFullYear()} MobiSoins Inc. {t('footer.allRightsReserved')}
          </p>
        </div>
      </div>
    </footer>
  );
};
