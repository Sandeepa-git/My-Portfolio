export default function LegalPage({ title, updated, children }) {
  return (
    <div className="page">
      <article className="section post">
        <h1 className="blog-title">{title}</h1>
        <p className="post-meta">Last updated: {updated}</p>
        <div className="prose">{children}</div>
      </article>
    </div>
  );
}
