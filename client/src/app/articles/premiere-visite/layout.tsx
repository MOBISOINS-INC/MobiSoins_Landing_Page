import { articleMetadata } from '../../../lib/articleSeo';

export const metadata = articleMetadata('premiere-visite', 'FR');

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
