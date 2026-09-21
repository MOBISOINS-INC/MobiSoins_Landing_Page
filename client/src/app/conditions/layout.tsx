import { staticPageMetadata } from '../../lib/pageSeo';

export const metadata = staticPageMetadata('conditions', 'FR');

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
