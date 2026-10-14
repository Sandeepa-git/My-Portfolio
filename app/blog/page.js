import { getPosts, POSTS_PER_PAGE } from '@/lib/posts';
import BlogList from '@/components/BlogList';

export const revalidate = 60;

export const metadata = {
  title: 'Blog',
  description: 'Practical web development, AI and small-business website tutorials by Sandeepa Wimalasiri.',
  alternates: {
    canonical: '/blog',
    types: { 'application/rss+xml': [{ url: '/blog/rss.xml', title: 'Sandeepa Wimalasiri Blog' }] },
  },
  openGraph: { title: 'Blog | Sandeepa Wimalasiri', url: '/blog' },
};

export default async function BlogPage() {
  const posts = await getPosts();
  return (
    <BlogList
      posts={posts.slice(0, POSTS_PER_PAGE)}
      page={1}
      totalPages={Math.max(1, Math.ceil(posts.length / POSTS_PER_PAGE))}
    />
  );
}
