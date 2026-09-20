'use client';

import { PageShell } from '../../components/layout/PageShell';
import { ServicesCatalog } from '../../components/sections/ServicesCatalog';

// The catalogue is the whole page: it opens with its own title and a jump index
// of the nine specialties, so the older seven-card overview above it is gone.
export default function ServicesPage() {
  return (
    <PageShell>
      <ServicesCatalog />
    </PageShell>
  );
}
