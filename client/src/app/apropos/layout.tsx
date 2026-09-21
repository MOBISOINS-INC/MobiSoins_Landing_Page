import { staticPageMetadata } from '../../lib/pageSeo';

export const metadata = staticPageMetadata('apropos', 'FR');

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
