'use client';

import { PageShell } from '../../components/layout/PageShell';
import { Services } from '../../components/sections/Services';
import { ServicesCatalog } from '../../components/sections/ServicesCatalog';

export default function ServicesPage() {
  return (
    <PageShell labelKey="header.services">
      <Services showViewAll={false} />
      <ServicesCatalog />
    </PageShell>
  );
}
