'use client';

import type { ElementType, ReactNode } from 'react';
import { useLanguage } from '../../../contexts/LanguageContext';
import { useReveal } from '../../../hooks/useReveal';

/* --- Type scale (spec section 3). Geist everywhere except the mono captions.
   Contrast floor on the dimmed video ground: body text sits at 85% white or
   above, micro labels at 60%; nothing readable lives below /60. --- */
// Weight 200 only at display sizes (>= 2.5rem); it goes threadbare below that.
export const DISPLAY =
  'font-sans font-extralight text-[clamp(2.5rem,5.8vw,5.25rem)] leading-[0.98] tracking-[0.04em] text-white [text-wrap:balance] [text-shadow:0_2px_24px_rgba(3,18,38,.55)]';
export const CAPTION = 'font-mono text-[0.6875rem] uppercase tracking-[0.28em] text-white/70';
export const MICRO = 'font-mono text-[0.625rem] uppercase tracking-[0.22em] text-white/60';
export const MICRO_CORE = 'font-mono text-[0.625rem] uppercase tracking-[0.3em] text-white';
export const BODY = 'font-sans font-normal text-[0.9375rem] tracking-[0.01em] leading-[1.6] text-white/85';
export const LIT = 'font-sans font-semibold text-[clamp(1.35rem,2.4vw,2.15rem)] leading-[1.25] tracking-[-0.01em]';
export const PLANET = 'font-sans font-normal text-[0.8125rem] leading-[1.2] text-white';
export const CARD_TITLE =
  'font-sans font-light text-[1.5rem] md:text-[1.625rem] leading-[1.15] tracking-[-0.01em] text-white';
export const CARD_TEXT = 'font-sans font-normal text-[0.8125rem] leading-[1.5] text-white/78';
export const MENU_ROW = 'font-sans font-light text-[1.0625rem] md:text-[1.25rem] text-white';
export const ROUTE_WORD = 'font-mono text-[0.75rem] lowercase tracking-[0.08em] text-white/80';
export const PILL_WHITE =
  'inline-flex items-center gap-2.5 rounded-full bg-white text-ink-panel px-7 py-3.5 text-[0.9375rem] font-medium shadow-[0_10px_30px_-10px_rgba(0,0,0,.7)] transition-transform duration-[180ms] md:hover:-translate-y-0.5';
export const PILL_OUTLINE =
  'inline-flex items-center gap-2 rounded-full border border-white/40 text-white px-5 py-2.5 text-[0.8125rem] font-medium hover:border-white/75 hover:bg-white/5 transition-colors duration-200';

/* --- The CTA arrow (same path as the hero's), one size smaller --- */
export function Arrow({ size = 16 }: { size?: number }) {
  return (
    <svg
      aria-hidden="true"
      width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
    >
      <path d="M5 12h14" /><path d="M13 6l6 6-6 6" />
    </svg>
  );
}

/* --- Caption: "( LABEL )". The parentheses are rendered here, never typed into
   the i18n strings. --- */
export function Caption({
  children,
  className = '',
  as: Tag = 'p',
}: {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}) {
  return <Tag className={`${CAPTION} ${className}`}>( {children} )</Tag>;
}

/* --- Two calm body columns, centred as a block --- */
export function Columns({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`mx-auto max-w-[40rem] grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5 text-left ${className}`}>
      {children}
    </div>
  );
}

/* --- Chapter shell: optional scroll hint -> two-line display title (each line
   clip-revealed inside its own overflow-hidden span) -> ( caption ) -> body.
   `data-chapter` feeds the header's route word. --- */
export type ChapterProps = {
  id: string;
  titleKeys: [string, string];
  captionKey: string;
  hint?: boolean;
  className?: string;
  children?: ReactNode;
};

export function Chapter({ id, titleKeys, captionKey, hint = false, className = '', children }: ChapterProps) {
  const { t } = useLanguage();
  const line1 = useReveal<HTMLSpanElement>(0, 'fsClipRise');
  const line2 = useReveal<HTMLSpanElement>(0.08, 'fsClipRise');
  const hintReveal = useReveal<HTMLDivElement>(0.2, 'fsRise');
  const caption = useReveal<HTMLDivElement>(0.2, 'fsRise');

  return (
    <section id={id} data-chapter={id} className={`relative ${className}`}>
      <div className="container-custom text-center">
        {hint && (
          <div ref={hintReveal.ref} style={hintReveal.style} className="mb-[3vh] flex flex-col items-center">
            <Caption>{t('v3.scrollHint')}</Caption>
            <span aria-hidden="true" className="mt-3 h-8 w-px bg-white/35" />
          </div>
        )}
        <h2 className={`${DISPLAY} mx-auto max-w-[56rem]`}>
          <span className="block overflow-hidden">
            <span ref={line1.ref} style={line1.style} className="block">
              {t(titleKeys[0])}
            </span>
          </span>
          <span className="block overflow-hidden">
            <span ref={line2.ref} style={line2.style} className="block">
              {t(titleKeys[1])}
            </span>
          </span>
        </h2>
        <div ref={caption.ref} style={caption.style} className="mt-5">
          <Caption>{t(captionKey)}</Caption>
        </div>
        {children}
      </div>
    </section>
  );
}
