import { SITE_URL } from '@/lib/site';

const routes = [
  { path: '', priority: 1 },
  { path: '/about', priority: 0.9 },
  { path: '/portfolio', priority: 0.9 },
  { path: '/articles', priority: 0.7 },
  { path: '/contact', priority: 0.6 },
];

export default function sitemap() {
  return routes.map(({ path, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority,
  }));
}
