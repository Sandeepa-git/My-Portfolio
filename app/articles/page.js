"use client";

import { useState, useEffect } from 'react';
import { ExternalLink, BookOpen } from 'lucide-react';

export default function Articles() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [isLoading, setIsLoading] = useState(false);

  const articles = [
    {
      title: 'How we built and deployed a Full-Stack React Node.js app',
      category: 'fullstack',
      categoryLabel: 'Full-Stack Development',
      link: 'https://medium.com/@agsvwimalasiri/how-we-built-and-deployed-a-full-stack-react-node-js-c1aa7db621ac',
      image: '/fullstack.svg',
      summary: 'A comprehensive step-by-step guide detailing modular structures, route configurations, API endpoints, and production deployment strategies.',
      date: 'Aug 14, 2026',
      readTime: '5 min read',
      featured: true
    },
    {
      title: 'Building a complete DevSecOps CI/CD pipeline with Jenkins, SonarQube, Trivy, Docker, and Kubernetes',
      category: 'devops',
      categoryLabel: 'DevOps & CI/CD',
      link: 'https://medium.com/@agsvwimalasiri/building-a-complete-devsecops-ci-cd-pipeline-with-jenkins-sonarqube-trivy-docker-and-kubernetes-8f63ba9af1fc',
      image: '/devops.svg',
      summary: 'An end-to-end tutorial showing how to secure your automation pipelines by integrating code vulnerability scanning, image scans, and automated deployments.',
      date: 'Jul 29, 2026',
      readTime: '8 min read',
      featured: false
    },
    {
      title: 'Front-End System Design: Building Scalable High-Performance User Interfaces',
      category: 'system-design',
      categoryLabel: 'System Design',
      link: 'https://medium.com/@agsvwimalasiri/front-end-system-design-building-scalable-high-performance-user-interfaces-70bca200cfe5',
      image: '/frontend-sys.svg',
      summary: 'Delving into UI state architecture, asset loading, lazy rendering optimization, caching policies, and bundle weight reduction strategies.',
      date: 'Jul 04, 2026',
      readTime: '6 min read',
      featured: false
    },
    {
      title: 'Backend Architecture Design',
      category: 'system-design',
      categoryLabel: 'System Design',
      link: 'https://medium.com/@agsvwimalasiri/backend-architecture-design-5ad22567830c',
      image: '/backend-sys.svg',
      summary: 'Exploring backend design methodologies including MVC, layered service patterns, caching optimization, database indexes, and concurrency safety.',
      date: 'Jun 18, 2026',
      readTime: '7 min read',
      featured: false
    },
    {
      title: 'How to test a gRPC API using Postman: A step-by-step guide',
      category: 'testing-api',
      categoryLabel: 'Testing & APIs',
      link: 'https://medium.com/@agsvwimalasiri/how-to-test-a-grpc-api-using-postman-step-by-step-guide-129776a02096',
      image: '/grpc.svg',
      summary: 'A practical, illustrated manual detailing how to import proto schemas, construct payloads, set headers, and analyze responses inside Postman.',
      date: 'May 30, 2026',
      readTime: '4 min read',
      featured: false
    },
    {
      title: 'Basics of Go',
      category: 'programming',
      categoryLabel: 'Programming Languages',
      link: 'https://medium.com/@agsvwimalasiri/basics-of-go-a8540852050c',
      image: '/go-basics.svg',
      summary: 'Syntax guidelines, data-type layouts, error handling patterns, channels, and concurrency models that make Go a powerhouse language.',
      date: 'May 12, 2026',
      readTime: '5 min read',
      featured: false
    }
  ];

  const handleFilterChange = (filter) => {
    if (filter === activeFilter) return;
    setIsLoading(true);
    setActiveFilter(filter);
  };

  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  const filteredArticles = activeFilter === 'all'
    ? articles
    : articles.filter(a => a.category === activeFilter);

  const featuredArticle = articles.find(a => a.featured);

  const filters = [
    { id: 'all', label: 'All Articles' },
    { id: 'fullstack', label: 'Full-Stack' },
    { id: 'devops', label: 'DevOps & CI/CD' },
    { id: 'system-design', label: 'System Design' },
    { id: 'testing-api', label: 'Testing & APIs' },
    { id: 'programming', label: 'Languages' }
  ];

  return (
    <div className="content-frame">
      <header style={{ marginBottom: '3rem' }}>
        <h1 className="section-title">Articles &amp; Publications</h1>
        <p className="section-subtitle">
          I write regularly about system design, CI/CD pipelines, APIs, and modern development workflows on Medium.
        </p>
      </header>

      {/* Featured Article Highlight Banner */}
      {featuredArticle && activeFilter === 'all' && (
        <section style={{ marginBottom: '5rem' }} aria-labelledby="featured-article-heading">
          <h2 id="featured-article-heading" className="skills-category-title">
            Featured Article
          </h2>
          <div className="featured-article-banner">
            <div className="featured-article-img">
              <img 
                src={featuredArticle.image} 
                alt={`Illustration for ${featuredArticle.title}`}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div className="featured-article-content">
              <span className="badge-medium">Medium Publication</span>
              <span style={{ fontSize: '0.825rem', color: 'var(--accent-color)', fontWeight: '700', marginBottom: '0.5rem', display: 'block' }}>
                {featuredArticle.categoryLabel} &middot; {featuredArticle.date}
              </span>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', lineHeight: '1.3' }}>
                {featuredArticle.title}
              </h3>
              <p style={{ color: 'var(--text-color-muted)', fontSize: '0.95rem', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                {featuredArticle.summary}
              </p>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--border-color)', paddingTop: '1.25rem' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-color-muted)', fontFamily: 'var(--font-mono)' }}>
                  {featuredArticle.readTime}
                </span>
                <a 
                  href={featuredArticle.link} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="btn-primary"
                  style={{ padding: '0.6rem 1.25rem', fontSize: '0.85rem' }}
                  aria-label={`Read full featured article on Medium: ${featuredArticle.title}`}
                >
                  <span>Read Article</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Articles Grid & Category Filters */}
      <section aria-labelledby="articles-archive-heading">
        <h2 id="articles-archive-heading" className="skills-category-title">
          Article Library
        </h2>

        {/* Filters */}
        <div className="filter-chips" role="tablist" aria-label="Filter articles by category">
          {filters.map((filter) => {
            const isActive = activeFilter === filter.id;
            return (
              <button
                key={filter.id}
                role="tab"
                aria-selected={isActive}
                aria-controls="articles-grid"
                id={`tab-${filter.id}`}
                tabIndex={0}
                className={`filter-chip ${isActive ? 'active' : ''}`}
                onClick={() => handleFilterChange(filter.id)}
                onKeyDown={(e) => {
                  if (e.key === ' ' || e.key === 'Enter') {
                    e.preventDefault();
                    handleFilterChange(filter.id);
                  }
                }}
              >
                {filter.label}
              </button>
            );
          })}
        </div>

        {/* Articles List */}
        <div 
          id="articles-grid" 
          className="project-grid" 
          role="tabpanel" 
          aria-labelledby={`tab-${activeFilter}`}
        >
          {isLoading ? (
            Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="project-skeleton-card" aria-hidden="true">
                <div className="skeleton project-skeleton-img"></div>
                <div className="skeleton" style={{ height: '16px', width: '30%' }}></div>
                <div className="skeleton project-skeleton-title"></div>
                <div className="skeleton project-skeleton-text"></div>
                <div className="skeleton project-skeleton-text" style={{ width: '80%' }}></div>
              </div>
            ))
          ) : filteredArticles.length > 0 ? (
            filteredArticles.map((article, index) => (
              <article key={index} className="project-card" style={{ contentVisibility: 'auto', containIntrinsicSize: '0 380px' }}>
                <div className="project-card-image">
                  <img 
                    src={article.image} 
                    alt={`Illustration graphic for article: ${article.title}`} 
                    loading="lazy"
                  />
                </div>
                <div className="project-card-content">
                  <div className="project-tag-container">
                    <span className="project-tag indigo">{article.categoryLabel}</span>
                  </div>
                  <h3 className="project-card-title">{article.title}</h3>
                  <p className="project-card-desc">{article.summary}</p>
                  
                  <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--border-color)', paddingTop: '0.875rem' }}>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-color-muted)', fontFamily: 'var(--font-mono)' }}>
                      {article.date} &bull; {article.readTime}
                    </span>
                    <a 
                      href={article.link} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="project-card-link"
                      style={{ color: 'var(--accent-color)' }}
                      aria-label={`Read article: ${article.title}`}
                    >
                      <span>Read Article</span>
                      <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
              </article>
            ))
          ) : (
            <div className="empty-state" role="status">
              <h3>No articles found</h3>
              <p>Try switching to another filter category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Medium Feed CTA Banner */}
      <section className="footer-cta" aria-labelledby="medium-cta-heading">
        <BookOpen className="credibility-icon" size={32} style={{ margin: '0 auto 1rem auto' }} />
        <h3 id="medium-cta-heading">Follow my publications on Medium</h3>
        <p>I publish details of engineering pipelines, API designs, and frontend systems regularly. Subscribe to get updates.</p>
        <a 
          href="https://medium.com/@agsvwimalasiri" 
          target="_blank" 
          rel="noreferrer" 
          className="btn-primary"
        >
          <span>View All on Medium</span>
          <ExternalLink size={16} />
        </a>
      </section>
    </div>
  );
}
