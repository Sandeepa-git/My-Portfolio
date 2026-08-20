"use client";

import { useState, useEffect } from 'react';
import ProjectCard from '@/components/ProjectCard';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [isLoading, setIsLoading] = useState(false);

  const projects = [
    {
      title: 'Infrastructure as Code (IaC) with Bicep on Azure - eShopOnWeb',
      tech: 'Azure, Bicep, IaC, GitHub Actions',
      category: 'devops',
      link: 'https://github.com/Sandeepa-git/eShopOnWeb',
      github: 'https://github.com/Sandeepa-git/eShopOnWeb',
      image: '/azure-thumb.png',
      summary: 'A complete infrastructure deployment pipeline using Azure Bicep and GitHub Actions for the eShopOnWeb reference application.',
      role: 'Cloud Engineer',
      outcome: 'Provisioned Azure App Services, SQL Databases, and Networking with zero manual intervention.',
      isLogo: true,
      bg: 'white',
      featured: true
    },
    {
      title: 'Production-Ready Subscription Management API',
      tech: 'Node.js, Express.js, MongoDB, JWT, Arcjet, Upstash',
      category: 'backend',
      link: 'https://github.com/Sandeepa-git/production-ready-api',
      github: 'https://github.com/Sandeepa-git/production-ready-api',
      image: '/rest-api-user.png',
      summary: 'A robust REST API featuring JWT authentication, rate limiting, and subscription cycle management integrated with email alerts.',
      role: 'Backend Developer',
      outcome: 'Secured endpoints with Arcjet and achieved resilient database operations with MongoDB.',
      isLogo: true,
      bg: 'white',
      featured: true
    },
    {
      title: 'Dockerized Notes Application using Flask, MongoDB, and Nginx',
      tech: 'Docker, Kubernetes, Flask, MongoDB, Nginx',
      category: 'devops',
      link: 'https://github.com/Sandeepa-git/CIT-24-01-0110',
      github: 'https://github.com/Sandeepa-git/CIT-24-01-0110',
      image: '/docker-k8s-user.png',
      summary: 'Multi-container system utilizing Nginx reverse proxy, Flask backend, and MongoDB storage deployed on local Minikube cluster.',
      role: 'DevOps Engineer',
      outcome: 'Implemented persistent volume claims and container health checks for self-healing capability.',
      featured: true
    },
    {
      title: 'TailorSync - Customized App for Tailor Management System',
      tech: 'Flutter, Mobile App Development, Dart',
      category: 'mobile',
      link: 'https://github.com/Sandeepa-git/TailorSync',
      github: 'https://github.com/Sandeepa-git/TailorSync',
      image: '/flutter-thumb.png',
      summary: 'Mobile database solution for tailors to catalog client measurements, order states, schedules, and styling configurations.',
      role: 'Mobile Developer',
      outcome: 'Created offline storage capabilities and intuitive customer onboarding interfaces.',
      isLogo: true,
      bg: 'white',
      featured: false
    },
    {
      title: 'SchoolUA',
      tech: 'HTML, CSS, JavaScript, Responsive Design',
      category: 'frontend',
      link: 'https://www.schoolua.eu/en',
      image: '/schoolua.svg',
      summary: 'E-learning management and school community site designed with responsive layouts and multilingual support.',
      role: 'Frontend Developer',
      outcome: 'Optimized assets for fast load times and achieved full mobile readability.',
      featured: false
    },
    {
      title: 'ArtSchool',
      tech: 'HTML, Vanilla CSS, JS Modules',
      category: 'frontend',
      link: 'https://www.artschool.website/',
      image: '/artschool.svg',
      summary: 'Stunning artistic portfolio site featuring scroll interactions, image optimization, and dynamic gallery sliders.',
      role: 'Frontend Developer',
      outcome: 'Implemented complex CSS animations and modular rendering logic.',
      featured: false
    },
    {
      title: 'Lupmkc',
      tech: 'HTML5, CSS3, Modern layout grids',
      category: 'frontend',
      link: 'https://lupmkc.eu/',
      image: '/lupmkc.svg',
      summary: 'Professional landing page built for business representation, contact forms, and client lead generation.',
      role: 'Frontend Developer',
      outcome: 'Refactored CSS layouts, reducing loading latency by 20%.',
      featured: false
    },
    {
      title: 'UASchool',
      tech: 'HTML, CSS, Responsive UI',
      category: 'frontend',
      link: 'https://www.uaschool.com.ua/',
      image: '/uaschool.svg',
      summary: 'Education information landing page showcasing courses, school values, schedules, and registration details.',
      role: 'Frontend Developer',
      outcome: 'Designed responsive navigation systems and custom school assets.',
      featured: false
    },
    {
      title: 'PlumberRem',
      tech: 'HTML, Tailwind CSS, JavaScript',
      category: 'frontend',
      link: 'https://plumberrem.online/',
      image: '/plumberrem.svg',
      summary: 'Local plumbing service website highlighting emergency booking workflows, reviews, pricing tiers, and contact routes.',
      role: 'Frontend Developer',
      outcome: 'Boosted conversion actions by adding direct calling tags and responsive contact cards.',
      featured: false
    },
    {
      title: 'KapInternational',
      tech: 'HTML, CSS, SVG Graphics',
      category: 'frontend',
      link: 'https://kapinternational.space/',
      image: '/kapinternational.svg',
      summary: 'Global corporate platform highlighting space-themed aesthetics, business branches, team coordinates, and inquiries.',
      role: 'Frontend Developer',
      outcome: 'Crafted premium vector animations and interactive grid structures.',
      featured: false
    },
    {
      title: 'European Education Academy',
      tech: 'HTML, CSS, Vanilla JS',
      category: 'frontend',
      link: 'https://europeaneducationacademy.online/',
      image: '/eea.svg',
      summary: 'Accredited certificate portal detailing course models, syllabus structures, registration forms, and training programs.',
      role: 'Frontend Developer',
      outcome: 'Designed clean form elements with robust native HTML validator feedback.',
      featured: false
    },
    {
      title: 'Ukrainian School of Paris',
      tech: 'HTML, CSS, JavaScript, Layouts',
      category: 'frontend',
      link: 'https://ukrainianschoolofparis.website/',
      image: '/usp.svg',
      summary: 'Cultural academy landing page highlighting classrooms, language curriculums, event timelines, and student registration.',
      role: 'Frontend Developer',
      outcome: 'Implemented accessible structural tags and cross-device display optimizations.',
      featured: false
    }
  ];

  // Micro interaction loading state simulation on filter click
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

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  const featuredList = projects.filter(p => p.featured);

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend/API' },
    { id: 'devops', label: 'Cloud & DevOps' },
    { id: 'mobile', label: 'Mobile' }
  ];

  return (
    <div className="content-frame">
      <header style={{ marginBottom: '3rem' }}>
        <h1 className="section-title">Portfolio</h1>
        <p className="section-subtitle">
          Explore my collection of frontend sites, REST APIs, Infrastructure as Code scripts, and multi-container DevOps workflows.
        </p>
      </header>

      {/* Featured Case Studies at Top */}
      <section style={{ marginBottom: '5rem' }} aria-labelledby="case-studies-heading">
        <h2 id="case-studies-heading" className="skills-category-title">
          Featured Case Studies
        </h2>
        <div className="project-grid">
          {featuredList.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>

      {/* Projects Grid Section with Filters */}
      <section aria-labelledby="all-projects-heading">
        <h2 id="all-projects-heading" className="skills-category-title">
          All Works &amp; Archive
        </h2>

        {/* Filter chips with ARIA keyboard support */}
        <div className="filter-chips" role="tablist" aria-label="Filter projects by category">
          {filters.map((filter) => {
            const isActive = activeFilter === filter.id;
            return (
              <button
                key={filter.id}
                role="tab"
                aria-selected={isActive}
                aria-controls="portfolio-grid"
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

        {/* Dynamic project card grid */}
        <div 
          id="portfolio-grid" 
          className="project-grid" 
          role="tabpanel" 
          aria-labelledby={`tab-${activeFilter}`}
        >
          {isLoading ? (
            // Skeletons during transitions
            Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="project-skeleton-card" aria-hidden="true">
                <div className="skeleton project-skeleton-img"></div>
                <div className="skeleton" style={{ height: '16px', width: '40%' }}></div>
                <div className="skeleton project-skeleton-title"></div>
                <div className="skeleton project-skeleton-text"></div>
                <div className="skeleton project-skeleton-text" style={{ width: '80%' }}></div>
              </div>
            ))
          ) : filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))
          ) : (
            // Empty State
            <div className="empty-state" role="status">
              <h3>No projects found</h3>
              <p>Try switching to another category filter.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
