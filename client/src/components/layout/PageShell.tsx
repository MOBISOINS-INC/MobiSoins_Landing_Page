'use client';

import type { ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

/**
 * Shared shell for every inner page. Same white ground as the home page; the
 * top padding clears the fixed header (h-16 on mobile, h-24 on desktop).
 */
export const PageShell = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen flex flex-col bg-white">
    <Header />
    <main className="flex-grow pt-16 md:pt-24">{children}</main>
    <Footer />
  </div>
);

/** Design tokens shared by inner pages — mirrors the home page sections. */
export const EYEBROW = 'text-[12px] font-medium uppercase tracking-[0.14em] text-slate-500';
export const H1 =
  'text-[34px] sm:text-[44px] lg:text-[56px] font-semibold leading-[1.05] tracking-[-0.035em] text-[#0a1f38]';
export const H2 =
  'text-[26px] sm:text-[30px] lg:text-[36px] font-semibold leading-[1.08] tracking-[-0.035em] text-[#0a1f38]';
export const LEAD = 'text-[16px] sm:text-[17px] lg:text-[19px] font-light leading-relaxed text-[#5a5a6a]';
export const BODY = 'text-[15px] sm:text-[16px] font-light leading-relaxed text-[#5a5a6a]';
export const CARD =
  'rounded-2xl border border-slate-200/70 bg-white shadow-[0_24px_50px_-24px_rgba(10,31,56,0.28)]';
export const FRAME = 'relative overflow-hidden rounded-2xl border border-slate-200/70 bg-slate-50';
