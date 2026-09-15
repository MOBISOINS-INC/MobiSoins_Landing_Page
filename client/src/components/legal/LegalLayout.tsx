'use client';

import React from 'react';
import { PageShell, EYEBROW, H1 } from '../layout/PageShell';
import { useReveal } from '../../hooks/useReveal';

interface LegalLayoutProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export const LegalLayout: React.FC<LegalLayoutProps> = ({ title, lastUpdated, children }) => {
  const { ref, style } = useReveal();
  return (
    <PageShell>
      <div className="bg-white pt-12 pb-20 sm:pt-16 lg:pt-24 lg:pb-28">
        <div ref={ref} style={style} className="container-custom">
          <div className="mx-auto max-w-[760px]">
            <span className={EYEBROW}>Dernière mise à jour : {lastUpdated}</span>
            <h1 className={`${H1} mt-5`}>{title}</h1>
            <div className="mt-12 border-t border-[#0a1f38] pt-10 text-[15.5px] font-light leading-relaxed text-[#5a5a6a] [&_h2]:mb-3 [&_h2]:text-[20px] [&_h2]:font-medium [&_h2]:tracking-[-0.02em] [&_h2]:text-[#0a1f38] [&_section]:mb-10 [&_p]:mb-4 [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_li]:mb-1.5 [&_a]:text-[#0a1f38] [&_a]:underline [&_a]:underline-offset-4 [&_strong]:font-medium [&_strong]:text-[#0a1f38]">
              {children}
            </div>
          </div>
        </div>
      </div>
    </PageShell>
  );
};
