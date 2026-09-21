/**
 * Index of the published articles: the one place the article pages read each
 * other's card data from (related articles at the foot of every article).
 * The article bodies themselves live in src/app/articles/<slug>/page.tsx.
 */

export interface ArticleCard {
  slug: string;
  image: string;
  fallbackImage: string;
  tagFr: string; tagEn: string;
  titleFr: string; titleEn: string;
  readTime: string;
  /** Meta description (FR, the language search engines see), about 150 characters. */
  descriptionFr: string;
  descriptionEn: string;
  /** ISO dates for structured data and the sitemap. */
  datePublished: string;
  dateModified: string;
}

export const ARTICLE_INDEX: ArticleCard[] = [
  {
    slug: 'telesante',
    image: '/images/articles/telesante.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80',
    tagFr: 'Innovation santé', tagEn: 'Health Innovation',
    titleFr: 'Comment la télésanté transforme le suivi médical',
    titleEn: 'How Telehealth Is Transforming Medical Monitoring',
    readTime: '35 min',
    descriptionFr: 'La télésanté a changé l’accès aux soins au Québec, mais aucun écran ne peut faire une prise de sang ou un pansement. Guide complet du modèle hybride.',
    descriptionEn: 'Telehealth changed access to care in Quebec, but no screen can draw blood or change a dressing. A complete guide to the hybrid model of care.',
    datePublished: '2026-05-01',
    dateModified: '2026-09-21',
  },
  {
    slug: 'premiere-visite',
    image: '/images/articles/premiere-visite.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    tagFr: 'Guide pratique', tagEn: 'Practical Guide',
    titleFr: 'Comment préparer votre première visite avec MobiSoins',
    titleEn: 'How to Prepare for Your First Visit with MobiSoins',
    readTime: '35 min',
    descriptionFr: 'Documents, espace, déroulement, confidentialité et suivi : tout pour préparer votre première visite d’une infirmière MobiSoins à domicile.',
    descriptionEn: 'Documents, space, what happens, privacy and follow-up: everything you need to prepare for your first MobiSoins home nursing visit in Quebec.',
    datePublished: '2026-05-01',
    dateModified: '2026-09-21',
  },
  {
    slug: 'soins-aines',
    image: '/images/articles/soins-aines.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?auto=format&fit=crop&w=1200&q=80',
    tagFr: 'Aînés', tagEn: 'Seniors',
    titleFr: 'Les avantages des soins à domicile pour les aînés',
    titleEn: 'The Benefits of Home Care for Seniors',
    readTime: '35 min',
    descriptionFr: 'Chutes, médication, maladies chroniques, proches aidants : pourquoi les soins infirmiers à domicile aident les aînés québécois à rester chez eux.',
    descriptionEn: 'Falls, medication, chronic illness, family caregivers: why home nursing care helps Quebec seniors stay safely and independently at home.',
    datePublished: '2026-05-01',
    dateModified: '2026-09-21',
  },
];

export const relatedArticles = (slug: string): ArticleCard[] =>
  ARTICLE_INDEX.filter((a) => a.slug !== slug);
