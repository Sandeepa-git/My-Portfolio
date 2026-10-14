import { notFound, permanentRedirect } from 'next/navigation';
import { getPosts, POSTS_PER_PAGE } from '@/lib/posts';
import BlogList from '@/components/BlogList';

export const revalidate = 60;

export async function generateMetadata({ params }) {
  const { n } = await params;
  return {
    title: `Blog – Page ${n}`,
    description: `Web development, AI and small-business tutorials by Sandeepa Wimalasiri, page ${n}.`,
    alternates: { canonical: `/blog/page/${n}` },
  };
}

export default async function BlogPageN({ params }) {
  const { n } = await params;
  const page = Number(n);
  if (!Number.isInteger(page) || page < 1) notFound();
  if (page === 1) permanentRedirect('/blog');

  const posts = await getPosts();
  const totalPages = Math.max(1, Math.ceil(posts.length / POSTS_PER_PAGE));
  if (page > totalPages) notFound();

  const start = (page - 1) * POSTS_PER_PAGE;
  return <BlogList posts={posts.slice(start, start + POSTS_PER_PAGE)} page={page} totalPages={totalPages} />;
}
