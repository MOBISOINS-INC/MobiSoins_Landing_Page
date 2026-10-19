import { staticPageMetadata } from '../../../lib/pageSeo';
import { ContactPageLd } from '../../../lib/contactSeo';

export const metadata = staticPageMetadata('contact', 'EN');

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ContactPageLd lang="EN" />
      {children}
    </>
  );
}
