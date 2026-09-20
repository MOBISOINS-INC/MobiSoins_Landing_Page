/**
 * Index of the published articles — the one place the article pages read each
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
}

export const ARTICLE_INDEX: ArticleCard[] = [
  {
    slug: 'telesante',
    image: '/images/articles/telesante.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80',
    tagFr: 'Innovation santé', tagEn: 'Health Innovation',
    titleFr: 'Comment la télésanté transforme le suivi médical',
    titleEn: 'How Telehealth Is Transforming Medical Monitoring',
    readTime: '9 min',
  },
  {
    slug: 'premiere-visite',
    image: '/images/articles/premiere-visite.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    tagFr: 'Guide pratique', tagEn: 'Practical Guide',
    titleFr: 'Comment préparer votre première visite avec MobiSoins',
    titleEn: 'How to Prepare for Your First Visit with MobiSoins',
    readTime: '8 min',
  },
  {
    slug: 'soins-aines',
    image: '/images/articles/soins-aines.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?auto=format&fit=crop&w=1200&q=80',
    tagFr: 'Aînés', tagEn: 'Seniors',
    titleFr: 'Les avantages des soins à domicile pour les aînés',
    titleEn: 'The Benefits of Home Care for Seniors',
    readTime: '10 min',
  },
];

export const relatedArticles = (slug: string): ArticleCard[] =>
  ARTICLE_INDEX.filter((a) => a.slug !== slug);
