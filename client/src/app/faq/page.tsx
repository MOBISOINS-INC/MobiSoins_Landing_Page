'use client';

import { PageShell } from '../../components/layout/PageShell';
import { FAQ } from '../../components/sections/FAQ';

export default function FAQPage() {
  return (
    <PageShell labelKey="header.faq">
      <FAQ />
    </PageShell>
  );
}
