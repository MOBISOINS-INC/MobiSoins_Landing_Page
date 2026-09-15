// Single source of truth for the v3 landing chrome (FloatingHeader, FloatingBar,
// Colophon). Mirrors Header.tsx / Footer.tsx so every existing link survives;
// those files stay untouched for the inner pages.

export const WAITLIST_URL =
  'https://docs.google.com/forms/d/1TaBNJ9M7Ks6LW5_Vfyqx5DodEPQZbo06bxX8PvJFLiw/viewform';
export const RECRUIT_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSfFqlaoCKqzrrPMvfQ8E50Jims2JdRN3fpEuq-5q35Ngd-Qsw/viewform';

export type NavLink = { key: string; href: string; external?: boolean };
export const NAV_LINKS: NavLink[] = [
  { key: 'header.home', href: '/' },
  { key: 'header.about', href: '/apropos' },
  { key: 'header.services', href: '/services' },
  { key: 'header.faq', href: '/faq' },
  { key: 'header.contact', href: '/contact' },
  { key: 'header.recruitment', href: RECRUIT_URL, external: true },
];

export type Article = { img: string; fallback: string; href: string; tagKey: string; titleKey: string };
export const ARTICLES: Article[] = [
  {
    img: '/images/articles/telesante.jpg',
    fallback: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=200&q=70',
    href: '/articles/telesante',
    tagKey: 'blog.article1Tag1',
    titleKey: 'blog.article1Title',
  },
  {
    img: '/images/articles/premiere-visite.jpg',
    fallback: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=200&q=70',
    href: '/articles/premiere-visite',
    tagKey: 'blog.article2Tag1',
    titleKey: 'blog.article2Title',
  },
  {
    img: '/images/articles/soins-aines.jpg',
    fallback: 'https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?auto=format&fit=crop&w=200&q=70',
    href: '/articles/soins-aines',
    tagKey: 'blog.article3Tag1',
    titleKey: 'blog.article3Title',
  },
];

export type FooterLink = {
  titleKey?: string;
  title?: string;
  href: string;
  icon?: 'instagram' | 'facebook' | 'tiktok';
};
export const FOOTER_SECTIONS: { labelKey: string; links: FooterLink[] }[] = [
  {
    labelKey: 'footer.product',
    links: [
      { titleKey: 'footer.services', href: '/services' },
      // Absolute so the anchor also works from the inner pages.
      { titleKey: 'footer.howItWorks', href: '/#visit' },
    ],
  },
  {
    labelKey: 'footer.company',
    links: [
      { titleKey: 'footer.aboutUs', href: '/apropos' },
      { titleKey: 'footer.articles', href: '/articles' },
      { titleKey: 'footer.faq', href: '/faq' },
    ],
  },
  {
    labelKey: 'footer.legal',
    links: [
      { titleKey: 'footer.privacy', href: '/confidentialite' },
      { titleKey: 'footer.terms', href: '/conditions' },
      { titleKey: 'footer.cookies', href: '/cookies' },
    ],
  },
  {
    labelKey: 'footer.social',
    links: [
      { title: 'Instagram', href: 'https://www.instagram.com/mobisoins/', icon: 'instagram' },
      { title: 'Facebook', href: 'https://www.facebook.com/p/MobiSoins-Inc-61562813077289/', icon: 'facebook' },
      { title: 'TikTok', href: 'https://www.tiktok.com/@mobisoins', icon: 'tiktok' },
    ],
  },
];

// Chapter ids (data-chapter) -> the word shown in the header pill.
export const CHAPTERS: { id: string; labelKey: string }[] = [
  { id: 'hero', labelKey: 'header.home' },
  { id: 'approach', labelKey: 'v3.approachLabel' },
  { id: 'visit', labelKey: 'v2.stepsEyebrow' },
  { id: 'care', labelKey: 'v2.servicesEyebrow' },
  { id: 'launch', labelKey: 'hero.waitlistTitle' },
];
