'use client';

import type { ReactNode } from 'react';
import { useConsent } from '../../hooks/useConsent';
import type { ConsentCategory } from '../../lib/consent';

/**
 * Renders its children only once the visitor has opted into `category`.
 * Wrap any future analytics / marketing tag in it, e.g.
 *
 *   <ConsentGate category="analytics"><Script src="…gtag/js?id=G-…" /></ConsentGate>
 *
 * Nothing inside is mounted on the server, on first paint, or after a refusal.
 */
export function ConsentGate({ category, children }: { category: ConsentCategory; children: ReactNode }) {
  const { hasConsent } = useConsent();
  return hasConsent(category) ? <>{children}</> : null;
}
