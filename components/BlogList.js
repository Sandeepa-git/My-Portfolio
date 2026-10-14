import Link from 'next/link';
import Image from 'next/image';
import { formatDate } from '@/lib/posts';
import ViewCounter from './ViewCounter';

const pageHref = (n) => (n === 1 ? '/blog' : `/blog/page/${n}`);

export default function BlogList({ posts, page, totalPages }) {
  return (
    <div className="page">
      <section className="section">
        <span className="eyebrow">Blog</span>
        <h1 className="blog-title">
          Web, AI &amp; small-business guides{page > 1 && <span className="post-meta"> · Page {page}</span>}
        </h1>
        <p className="blog-lede">Hands-on tutorials from real projects: Next.js, AI chatbots, online stores and more.</p>
        {posts.length === 0 && <p className="post-meta" style={{ marginTop: '2rem' }}>No posts yet. Check back soon.</p>}
        <div className="post-grid">
          {posts.map((p, i) => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="card post-card">
              {p.coverImage && (
                <Image src={p.coverImage} alt="" width={640} height={360} priority={i < 3} className="post-card-img" />
              )}
              <div className="chips">
                {p.tags.map((t) => <span key={t} className="chip">{t}</span>)}
              </div>
              <h2>{p.title}</h2>
              <p>{p.description}</p>
              <span className="post-meta">{formatDate(p.date)} · {p.readingTime} min read · <ViewCounter slug={p.slug} initial={p.views ?? 0} /></span>
            </Link>
          ))}
        </div>

        {totalPages > 1 && (
          <nav className="pagination" aria-label="Blog pages">
            {page > 1 ? <Link className="btn btn-sm" href={pageHref(page - 1)} rel="prev">← Newer</Link> : <span />}
            <span className="post-meta">Page {page} of {totalPages}</span>
            {page < totalPages ? <Link className="btn btn-sm" href={pageHref(page + 1)} rel="next">Older →</Link> : <span />}
          </nav>
        )}
      </section>
    </div>
  );
}
