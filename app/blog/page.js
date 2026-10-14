import Link from 'next/link';
import Image from 'next/image';
import { getPosts, formatDate } from '@/lib/posts';

export const revalidate = 60;

export const metadata = {
  title: 'Blog',
  description: 'Practical web development, AI and small-business website tutorials by Sandeepa Wimalasiri.',
  alternates: { canonical: '/blog' },
  openGraph: { title: 'Blog | Sandeepa Wimalasiri', url: '/blog' },
};

export default async function BlogPage() {
  const posts = await getPosts();
  return (
    <div className="page">
      <section className="section">
        <span className="eyebrow">Blog</span>
        <h1 className="blog-title">Web, AI &amp; small-business guides</h1>
        <p className="blog-lede">Hands-on tutorials from real projects: Next.js, AI chatbots, online stores and more.</p>
        {posts.length === 0 && <p className="post-meta" style={{ marginTop: '2rem' }}>No posts yet. Check back soon.</p>}
        <div className="post-grid">
          {posts.map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="card post-card">
              {p.coverImage && (
                <Image src={p.coverImage} alt="" width={640} height={360} className="post-card-img" />
              )}
              <div className="chips">
                {p.tags.map((t) => <span key={t} className="chip">{t}</span>)}
              </div>
              <h2>{p.title}</h2>
              <p>{p.description}</p>
              <span className="post-meta">{formatDate(p.date)} · {p.readingTime} min read</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
