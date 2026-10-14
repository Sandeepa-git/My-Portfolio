import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getPosts, getPost, relatedPosts, formatDate } from '@/lib/posts';
import { SITE_URL } from '@/lib/site';
import AdSlot from '@/components/AdSlot';
import ViewCounter from '@/components/ViewCounter';

// New posts from Supabase appear without a redeploy
export const revalidate = 60;

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    keywords: post.tags,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.description,
      url: `/blog/${slug}`,
      publishedTime: post.date,
      ...(post.updatedAt && { modifiedTime: post.updatedAt }),
    },
    // Share image comes from ./opengraph-image.js; Twitter falls back to it
    twitter: { card: 'summary_large_image', title: post.title, description: post.description },
  };
}

export default async function PostPage({ params }) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();
  const related = relatedPosts(post, await getPosts());

  const url = `${SITE_URL}/blog/${slug}`;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.updatedAt || post.date,
    image: post.coverImage || `${url}/opengraph-image`,
    keywords: post.tags.join(', '),
    publisher: { '@type': 'Person', name: 'Sandeepa Wimalasiri', url: SITE_URL },
    author: { '@type': 'Person', name: 'Sandeepa Wimalasiri', url: SITE_URL },
    mainEntityOfPage: url,
  };
  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` },
      { '@type': 'ListItem', position: 3, name: post.title, item: url },
    ],
  };

  return (
    <div className="page">
      <article className="section post">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <ol>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li aria-current="page">{post.title}</li>
          </ol>
        </nav>
        <div className="chips">
          {post.tags.map((t) => <span key={t} className="chip chip-accent">{t}</span>)}
        </div>
        <h1 className="blog-title">{post.title}</h1>
        <p className="post-meta">
          By Sandeepa Wimalasiri · <time dateTime={post.date}>{formatDate(post.date)}</time>
          {post.updatedAt && post.updatedAt.slice(0, 10) > post.date && (
            <> · Updated <time dateTime={post.updatedAt}>{formatDate(post.updatedAt)}</time></>
          )}
          {' '}· {post.readingTime} min read · <ViewCounter slug={post.slug} initial={post.views ?? 0} track />
        </p>
        {post.coverImage && (
          <Image src={post.coverImage} alt={post.title} width={1600} height={900} priority className="post-cover" />
        )}
        <div className="prose" dangerouslySetInnerHTML={{ __html: post.body }} />
        <AdSlot slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_ARTICLE} />

        {related.length > 0 && (
          <aside className="related">
            <h2>You may also like</h2>
            <div className="post-grid">
              {related.map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`} className="card post-card">
                  {p.coverImage && <Image src={p.coverImage} alt="" width={640} height={360} className="post-card-img" />}
                  <h3>{p.title}</h3>
                  <span className="post-meta">{p.readingTime} min read</span>
                </Link>
              ))}
            </div>
          </aside>
        )}
      </article>
    </div>
  );
}
