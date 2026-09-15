'use client';

import { PageShell } from '../../components/layout/PageShell';
import { Contact } from '../../components/sections/Contact';

export default function ContactPage() {
  return (
    <PageShell labelKey="header.contact">
      <Contact />
    </PageShell>
  );
}
