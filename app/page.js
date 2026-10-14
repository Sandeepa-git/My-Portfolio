"use client";

import Link from 'next/link';
import Image from 'next/image';
import { SocialLinks } from '@/components/SocialIcons';
import { Briefcase, ArrowRight, ShieldCheck, Award, GraduationCap } from 'lucide-react';

export default function Home() {
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

          <SocialLinks className="home-socials" linkClassName="home-social-link" size={20} />

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
