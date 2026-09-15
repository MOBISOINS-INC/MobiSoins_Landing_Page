'use client';

import type { ReactNode } from 'react';
import { SmoothScroll } from '../providers/SmoothScroll';
import { FloatingHeader } from './v3/FloatingHeader';
import { FloatingBar } from './v3/FloatingBar';
import { Colophon } from './v3/Colophon';

/**
 * Shared shell for every inner page: the landing's ink ground and floating
 * pills, minus the video. `labelKey` is the word shown in the header pill.
 * Top padding clears the pills (top inset + 3.5rem).
 */
export const PageShell = ({ children, labelKey }: { children: ReactNode; labelKey?: string }) => (
  <SmoothScroll>
    <div className="min-h-screen flex flex-col bg-ink text-white">
      <FloatingHeader pageLabelKey={labelKey ?? 'header.home'} />
      <main className="flex-grow pt-24 md:pt-40">{children}</main>
      <Colophon />
      <FloatingBar always />
    </div>
  </SmoothScroll>
);

/** Design tokens shared by inner pages — the landing's dark scale, one notch smaller. */
export const EYEBROW =
  "font-mono text-[0.6875rem] uppercase tracking-[0.28em] text-white/70 before:content-['(_'] after:content-['_)']";
export const H1 =
  'font-sans font-extralight text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.02] tracking-[0.02em] text-white [text-wrap:balance]';
export const H2 = 'font-sans font-light text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.1] tracking-[0.01em] text-white';
export const LEAD = 'text-[16px] sm:text-[17px] lg:text-[19px] font-normal leading-relaxed text-white/85';
export const BODY = 'text-[15px] sm:text-[16px] font-normal leading-relaxed text-white/80';
export const CARD = 'rounded-3xl border border-white/15 bg-ink-panel/70';
export const FRAME = 'relative overflow-hidden rounded-3xl border border-white/15 bg-ink-panel/60';
