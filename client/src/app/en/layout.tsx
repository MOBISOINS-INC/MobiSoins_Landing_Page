import { staticPageMetadata } from '../../lib/pageSeo';

export const metadata = staticPageMetadata('home', 'EN');

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
