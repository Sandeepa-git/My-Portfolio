"use client";

import Link from 'next/link';
import Image from 'next/image';
import ProjectCard from '@/components/ProjectCard';
import { Briefcase, ArrowRight, ShieldCheck, Award, GraduationCap } from 'lucide-react';

const GithubIcon = ({ size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
  </svg>
);

const LinkedinIcon = ({ size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const FacebookIcon = ({ size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const InstagramIcon = ({ size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const TiktokIcon = ({ size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
  </svg>
);

const MediumIcon = ({ size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
  </svg>
);

export default function Home() {
  const featuredProjects = [
    {
      title: 'Infrastructure as Code (IaC) with Bicep on Azure - eShopOnWeb',
      tech: 'Azure, Bicep, IaC, GitHub Actions',
      link: 'https://github.com/Sandeepa-git/eShopOnWeb',
      github: 'https://github.com/Sandeepa-git/eShopOnWeb',
      image: '/azure-thumb.png',
      summary: 'A complete infrastructure deployment pipeline using Azure Bicep and GitHub Actions for the eShopOnWeb reference application.',
      role: 'Cloud Engineer',
      outcome: 'Provisioned Azure App Services, SQL Databases, and Networking with zero manual intervention.',
      isLogo: true,
      bg: 'white'
    },
    {
      title: 'Production-Ready Subscription Management API',
      tech: 'Node.js, Express.js, MongoDB, JWT, Arcjet, Upstash',
      link: 'https://github.com/Sandeepa-git/production-ready-api',
      github: 'https://github.com/Sandeepa-git/production-ready-api',
      image: '/rest-api-user.png',
      summary: 'A robust REST API featuring JWT authentication, rate limiting, and subscription cycle management integrated with email alerts.',
      role: 'Backend Developer',
      outcome: 'Secured endpoints with Arcjet and achieved resilient database operations with MongoDB.',
      isLogo: true,
      bg: 'white'
    },
    {
      title: 'Dockerized Notes Application using Flask, MongoDB, and Nginx',
      tech: 'Docker, Kubernetes, Flask, MongoDB, Nginx',
      link: 'https://github.com/Sandeepa-git/CIT-24-01-0110',
      github: 'https://github.com/Sandeepa-git/CIT-24-01-0110',
      image: '/docker-k8s-user.png',
      summary: 'Multi-container system utilizing Nginx reverse proxy, Flask backend, and MongoDB storage deployed on local Minikube cluster.',
      role: 'DevOps Engineer',
      outcome: 'Implemented persistent volume claims and container health checks for self-healing capability.'
    }
  ];

  return (
    <div className="content-frame">
      {/* Hero Section */}
      <section className="home-container" aria-label="Introduction Hero">
        <div className="home-content">
          <div className="home-avail-badge">
            <span className="avail-dot" aria-hidden="true"></span>
            <span>Open to internships, junior engineering roles, and collaborative projects.</span>
          </div>

          <span className="hero-pre-headline">Sandeepa Wimalasiri</span>

          <h1 className="home-headline">
            Cloud infrastructure and full-stack developer building reliable digital products.
          </h1>

          <p className="home-desc">
            I design and ship web applications, APIs, and deployment workflows with a focus on maintainability, automation, and practical user experience.
          </p>

          <div className="home-actions">
            <Link href="/portfolio" className="btn-primary">
              <Briefcase size={18} />
              <span>View Selected Work</span>
            </Link>
            <Link href="/articles" className="link-quiet" style={{ marginLeft: '0.5rem' }}>
              <span>Read my articles</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="home-socials">
            <a href="https://www.linkedin.com/in/sandeepa-wimalasiri/" target="_blank" rel="noreferrer" className="home-social-link" aria-label="LinkedIn">
              <LinkedinIcon size={20} />
            </a>
            <a href="https://github.com/Sandeepa-git" target="_blank" rel="noreferrer" className="home-social-link" aria-label="GitHub">
              <GithubIcon size={20} />
            </a>
            <a href="https://www.facebook.com/sandeepa.vimukthi.12" target="_blank" rel="noreferrer" className="home-social-link" aria-label="Facebook">
              <FacebookIcon size={20} />
            </a>
            <a href="https://www.instagram.com/_p_a_t_h_f_i_n_d_e_r_/" target="_blank" rel="noreferrer" className="home-social-link" aria-label="Instagram">
              <InstagramIcon size={20} />
            </a>
            <a href="https://www.tiktok.com/@sandeepv999" target="_blank" rel="noreferrer" className="home-social-link" aria-label="TikTok">
              <TiktokIcon size={20} />
            </a>
            <a href="https://medium.com/@agsvwimalasiri" target="_blank" rel="noreferrer" className="home-social-link" aria-label="Medium">
              <MediumIcon size={20} />
            </a>
          </div>

          <a 
            href="https://mvp.microsoft.com/en-US/studentambassadors/profile/b3b04af9-2237-4437-834d-ba28cef3ea1c" 
            target="_blank" 
            rel="noreferrer" 
            className="msa-badge-container"
            title="View Microsoft Student Ambassador Profile"
            aria-label="Microsoft Student Ambassador credentials profile"
          >
            <div className="ms-logo" aria-hidden="true">
              <div className="ms-block red"></div>
              <div className="ms-block green"></div>
              <div className="ms-block blue"></div>
              <div className="ms-block yellow"></div>
            </div>
            <div className="msa-text">
              <span className="msa-title">Microsoft Learn Student Ambassadors</span>
              <span className="msa-role">Associate Student Ambassador</span>
            </div>
          </a>
        </div>

        <div className="home-portrait-container">
          <div className="portrait-wrapper">
            <div className="portrait-frame">
              <Image 
                src="/DSC00078.jpg" 
                alt="Portrait of Sandeepa Wimalasiri" 
                width={280}
                height={280}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Credibility Strip */}
      <section className="credibility-strip" aria-label="Credentials list">
        <div className="credibility-item">
          <GraduationCap className="credibility-icon" size={20} />
          <span className="credibility-text">BSc (Hons) in Cloud Computing Undergraduate @ SLTC</span>
        </div>
        <div className="credibility-item">
          <Award className="credibility-icon" size={20} />
          <span className="credibility-text">Associate Microsoft Student Ambassador</span>
        </div>
        <div className="credibility-item">
          <ShieldCheck className="credibility-icon" size={20} />
          <span className="credibility-text">IEEE Computer Society Active Member</span>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="home-section" aria-labelledby="featured-work-heading">
        <div className="home-section-header">
          <h2 id="featured-work-heading" className="section-title">Featured Work</h2>
          <Link href="/portfolio" className="link-quiet">
            <span>Explore all projects</span>
            <ArrowRight size={14} />
          </Link>
        </div>
        
        <div className="project-grid">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="footer-cta" aria-labelledby="footer-cta-heading">
        <h3 id="footer-cta-heading">Interested in collaborating?</h3>
        <Link href="/contact" className="btn-primary">
          <span>Get in touch</span>
          <ArrowRight size={16} />
        </Link>
      </section>
    </div>
  );
}
