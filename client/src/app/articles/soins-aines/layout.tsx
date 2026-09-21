import { articleMetadata } from '../../../lib/articleSeo';

export const metadata = articleMetadata('soins-aines', 'FR');

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
