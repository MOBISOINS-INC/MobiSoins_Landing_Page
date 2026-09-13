'use client';

import type { ElementType, ReactNode } from 'react';
import { useLanguage } from '../../../contexts/LanguageContext';
import { useReveal } from '../../../hooks/useReveal';

/* --- Type scale (spec section 3). Geist everywhere except the mono captions. --- */
// Weight 200 only at display sizes (>= 2.5rem); it goes threadbare below that.
export const DISPLAY =
  'font-sans font-extralight text-[clamp(2.5rem,5.8vw,5.25rem)] leading-[0.98] tracking-[0.04em] text-white/94 [text-wrap:balance] [text-shadow:0_2px_24px_rgba(3,18,38,.45)]';
export const CAPTION = 'font-mono text-[0.6875rem] uppercase tracking-[0.28em] text-white/55';
export const MICRO = 'font-mono text-[0.625rem] uppercase tracking-[0.22em] text-white/45';
export const MICRO_CORE = 'font-mono text-[0.625rem] uppercase tracking-[0.3em] text-white';
export const BODY = 'font-sans font-light text-[0.9375rem] tracking-[0.02em] leading-[1.6] text-white/72';
export const LIT = 'font-sans font-semibold text-[clamp(1.35rem,2.4vw,2.15rem)] leading-[1.25] tracking-[-0.01em]';
export const PLANET = 'font-sans font-light text-[0.75rem] leading-[1.2] text-white/80';
export const CARD_TITLE =
  'font-sans font-light text-[1.5rem] md:text-[1.625rem] leading-[1.15] tracking-[-0.01em] text-white/94';
export const CARD_TEXT = 'font-sans font-light text-[0.8125rem] leading-[1.5] text-white/60';
export const MENU_ROW = 'font-sans font-light text-[1.0625rem] md:text-[1.25rem] text-white/90';
export const ROUTE_WORD = 'font-mono text-[0.75rem] lowercase tracking-[0.08em] text-white/70';
export const PILL_WHITE =
  'inline-flex items-center gap-2.5 rounded-full bg-white text-ink-panel px-7 py-3.5 text-[0.9375rem] font-medium transition-transform duration-[180ms] md:hover:-translate-y-0.5';
export const PILL_OUTLINE =
  'inline-flex items-center gap-2 rounded-full border border-white/25 text-white/85 px-5 py-2.5 text-[0.8125rem] font-medium hover:border-white/50 transition-colors duration-200';

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
          <div ref={hintReveal.ref} style={hintReveal.style} className="mb-[4vh] flex flex-col items-center">
            <Caption>{t('v3.scrollHint')}</Caption>
            <span aria-hidden="true" className="mt-3 h-8 w-px bg-white/25" />
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
        <div ref={caption.ref} style={caption.style} className="mt-6">
          <Caption>{t(captionKey)}</Caption>
        </div>
        {children}
      </div>
    </section>
  );
}
