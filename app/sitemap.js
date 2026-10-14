import { SITE_URL } from '@/lib/site';
import { getPosts } from '@/lib/posts';

const routes = [
  { path: '', priority: 1 },
  { path: '/about', priority: 0.9 },
  { path: '/portfolio', priority: 0.9 },
  { path: '/articles', priority: 0.7 },
  { path: '/blog', priority: 0.8 },
  { path: '/contact', priority: 0.6 },
  { path: '/privacy-policy', priority: 0.3 },
  { path: '/terms', priority: 0.3 },
  { path: '/disclaimer', priority: 0.3 },
];

export const revalidate = 3600;

export default async function sitemap() {
  const posts = await getPosts();
  return [
    ...routes.map(({ path, priority }) => ({
      url: `${SITE_URL}${path}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority,
    })),
    ...posts.map((p) => ({
      url: `${SITE_URL}/blog/${p.slug}`,
      lastModified: new Date(p.updatedAt || p.date),
      changeFrequency: 'monthly',
      priority: 0.7,
    })),
  ];
}
