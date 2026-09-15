'use client';

import { PageShell } from '../../components/layout/PageShell';
import { Blog } from '../../components/sections/Blog';

export default function BlogPage() {
  return (
    <PageShell labelKey="footer.articles">
      <Blog />
    </PageShell>
  );
}
