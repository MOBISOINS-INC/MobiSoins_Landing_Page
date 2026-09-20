import type { ReactNode } from 'react';

// Shared type treatments for the landing sections below the hero.
export const Eyebrow = ({ children, onDark = false }: { children: ReactNode; onDark?: boolean }) => (
  <span
    className={`block text-[12px] font-semibold uppercase tracking-[0.14em] lg:text-[13px] ${
      onDark ? 'text-leaf-on-dark' : 'text-leaf-text'
    }`}
  >
    {children}
  </span>
);

export const DISPLAY = 'font-display font-light tracking-[-0.02em] text-ink';

export const ArrowRight = ({ className = 'h-[18px] w-[18px]' }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
  >
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);
