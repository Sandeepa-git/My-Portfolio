import { ImageResponse } from 'next/og';
import { getPost } from '@/lib/posts';

export const alt = 'Sandeepa Wimalasiri blog post';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const revalidate = 3600;

// Share image: the post's cover (if any) with the title over it, or a branded title card.
export default async function Image({ params }) {
  const { slug } = await params;
  const post = await getPost(slug);
  const title = post?.title ?? 'Sandeepa Wimalasiri Blog';

  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', position: 'relative', background: '#0c0d10' }}>
        {post?.coverImage && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={post.coverImage} alt="" width={1200} height={630} style={{ position: 'absolute', inset: 0, objectFit: 'cover' }} />
        )}
        <div
          style={{
            position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
            padding: '64px 72px',
            background: post?.coverImage
              ? 'linear-gradient(180deg, rgba(12,13,16,0.1) 20%, rgba(12,13,16,0.92) 100%)'
              : 'radial-gradient(circle at 85% 15%, rgba(22, 163, 74,0.35), transparent 55%)',
          }}
        >
          <div style={{ display: 'flex', gap: 12, marginBottom: 24 }}>
            {(post?.tags ?? []).slice(0, 3).map((t) => (
              <div key={t} style={{ color: '#16a34a', fontSize: 24, padding: '6px 18px', borderRadius: 999, border: '2px solid rgba(22, 163, 74,0.5)' }}>{t}</div>
            ))}
          </div>
          <div style={{ color: '#f2f2ee', fontSize: title.length > 60 ? 56 : 68, fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.02em' }}>
            {title}
          </div>
          <div style={{ color: '#9a9da4', fontSize: 28, marginTop: 28 }}>Sandeepa Wimalasiri · Blog</div>
        </div>
      </div>
    ),
    size,
  );
}
