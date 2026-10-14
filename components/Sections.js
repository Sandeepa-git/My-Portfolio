import Image from 'next/image';
import { ArrowUpRight, ArrowRight, Plus, MapPin, Clock } from 'lucide-react';
import { SocialLinks } from './SocialIcons';
import CopyEmail from './CopyEmail';
import {
  EMAIL, WHATSAPP, MSA_PROFILE, credentials, projects, services, stack,
  focusTags, journey, process, articles, faqs,
} from '@/lib/content';

function SectionHead({ eyebrow, title, text, as: Tag = 'h2' }) {
  return (
    <div className="sec-head" data-reveal>
      <span className="eyebrow">{eyebrow}</span>
      <Tag className="sec-title">{title}</Tag>
      {text && <p className="sec-text">{text}</p>}
    </div>
  );
}

export function Hero() {
  return (
    <section className="hero" aria-label="Introduction">
      <div className="hero-sky" aria-hidden="true" />
      <div className="hero-inner">
        <div className="hero-avatar">
          <Image src="/DSC00078.jpg" alt="Sandeepa Wimalasiri" width={112} height={112} priority />
        </div>
        <p className="hero-hey">Hey, I am Sandeepa</p>
        <h1 className="hero-title">
          Cloud Engineer Building <em>Reliable</em>, Scalable Digital Products
        </h1>
        <p className="hero-sub">
          Cloud Computing undergraduate and Associate Microsoft Student Ambassador shipping
          web apps, APIs and automated deployment pipelines.
        </p>
        <div className="hero-actions">
          <a href="/#contact" className="btn btn-orange">Hire Me</a>
          <a href="/#projects" className="btn btn-dark">See Works</a>
        </div>
        <span className="hero-status"><span className="dot" aria-hidden="true" /> Open to internships &amp; junior roles</span>
        <a href={MSA_PROFILE} target="_blank" rel="noopener noreferrer" className="msa-badge" aria-label="Microsoft Learn Student Ambassador profile (opens in a new tab)">
          <span className="ms-logo" aria-hidden="true"><i /><i /><i /><i /></span>
          <span className="msa-text">
            <span className="msa-org">Microsoft Learn Student Ambassadors</span>
            <span className="msa-role">Associate Student Ambassador</span>
          </span>
          <ArrowUpRight size={16} className="msa-arrow" aria-hidden="true" />
        </a>
      </div>

      <div className="marquee" aria-label="Credentials">
        <p className="marquee-label">Credentials &amp; Community</p>
        <div className="marquee-track">
          {[...credentials, ...credentials].map((c, i) => (
            <span key={i} className="marquee-item" aria-hidden={i >= credentials.length ? true : undefined}>{c}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Projects({ as }) {
  return (
    <section id="projects" className="section">
      <SectionHead as={as} eyebrow="Selected Work" title="Projects" text="Cloud infrastructure, APIs, mobile apps and websites I have designed, built and shipped." />
      <div className="project-grid">
        {projects.map((p) => (
          <a key={p.title} href={p.link} target="_blank" rel="noopener noreferrer" className="project" data-reveal>
            <div className="project-media">
              <Image src={p.image} alt="" fill sizes="(max-width: 760px) 100vw, 50vw" />
            </div>
            <div className="project-body">
              <div className="project-row">
                <h3>{p.title}</h3>
                <span className="project-arrow" aria-hidden="true"><ArrowUpRight size={18} /></span>
              </div>
              <p>{p.summary}</p>
              <div className="chips">
                <span className="chip chip-accent">{p.category}</span>
                {p.tags.map((t) => <span key={t} className="chip">{t}</span>)}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section id="services" className="section">
      <SectionHead eyebrow="What I Do" title="Services" />
      <div className="service-list">
        {services.map((s, i) => (
          <div key={s.title} className="service" data-reveal>
            <span className="service-num">0{i + 1}</span>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Stack() {
  return (
    <section id="stack" className="section">
      <SectionHead eyebrow="Toolbox" title="My Stack" />
      <div className="stack-grid">
        {stack.map((s) => (
          <div key={s.name} className="stack-item" data-reveal>
            <span className="stack-mark" aria-hidden="true">{s.mark}</span>
            <div>
              <h3>{s.name}</h3>
              <p>{s.note}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function About({ as }) {
  return (
    <section id="about" className="section">
      <SectionHead as={as} eyebrow="Who I Am" title="About Me" />
      <div className="about-grid">
        <div className="card about-card" data-reveal>
          <div className="about-top">
            <Image src="/DSC00078.jpg" alt="" width={64} height={64} className="about-avatar" />
            <div>
              <h3>Sandeepa Wimalasiri</h3>
              <p className="muted">Cloud &amp; Full-Stack Engineer · Sri Lanka</p>
            </div>
          </div>
          <p>
            I am a Cloud Computing undergraduate at SLTC Research University. I combine backend
            engineering with DevOps practice to build containerized apps, Infrastructure as Code and
            highly available deployment flows.
          </p>
          <p>
            Outside the code, I lead in the tech community as an Associate Microsoft Student Ambassador
            and IEEE Computer Society member, co-chairing hackathons like Codemania.
          </p>
          <div className="chips">
            {focusTags.map((t) => <span key={t} className="chip">{t}</span>)}
          </div>
          <a href={MSA_PROFILE} target="_blank" rel="noopener noreferrer" className="link-arrow">
            Microsoft Student Ambassador profile <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="card journey" data-reveal>
          <h3 className="journey-title">My journey</h3>
          <ol>
            {journey.map((j) => (
              <li key={j.role}>
                <div>
                  <p className="journey-role">{j.role}</p>
                  <p className="muted">{j.org}</p>
                </div>
                <span className="journey-date">{j.date}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section id="process" className="section">
      <SectionHead eyebrow="How I Work" title="My Process" />
      <div className="process-grid">
        {process.map((p, i) => (
          <div key={p.title} className="card process-step" data-reveal>
            <span className="process-num">{i + 1}</span>
            <h3>{p.title}</h3>
            <p>{p.text}</p>
          </div>
        ))}
      </div>
      <div className="stats" data-reveal>
        <div><strong>{projects.length}+</strong><span>Projects shipped</span></div>
        <div><strong>{articles.length}</strong><span>Technical articles</span></div>
        <div><strong>4</strong><span>Tech events organized</span></div>
      </div>
    </section>
  );
}

export function Articles({ as }) {
  return (
    <section id="articles" className="section">
      <SectionHead as={as} eyebrow="Writing" title="Articles" text="Notes and guides on cloud, DevOps and system design, published on Medium." />
      <div className="article-list">
        {articles.map((a) => (
          <a key={a.title} href={a.link} target="_blank" rel="noopener noreferrer" className="article" data-reveal>
            <span className="chip chip-accent">{a.category}</span>
            <h3>{a.title}</h3>
            <span className="article-meta">{a.date} · {a.readTime}</span>
            <ArrowRight size={18} className="article-arrow" aria-hidden="true" />
          </a>
        ))}
      </div>
    </section>
  );
}

export function Faq() {
  return (
    <section id="faq" className="section">
      <SectionHead eyebrow="Questions" title="Frequently Asked Questions" />
      <div className="faq">
        {faqs.map((f) => (
          <details key={f.q} data-reveal>
            <summary>{f.q}<Plus size={18} aria-hidden="true" /></summary>
            <p>{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function Contact({ as: Tag = 'h2' }) {
  return (
    <section id="contact" className="section">
      <div className="cta" data-reveal>
        <span className="eyebrow eyebrow-light">Contact</span>
        <Tag className="cta-title">Let&apos;s Build Something <em>Reliable</em> Together</Tag>
        <p>Have a project, an opportunity or a technical question? I usually reply within 24 hours.</p>
        <div className="hero-actions">
          <a href={`mailto:${EMAIL}`} className="btn btn-orange">Email Me</a>
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn btn-glass">WhatsApp</a>
        </div>
        <CopyEmail email={EMAIL} />
        <div className="cta-meta">
          <span><MapPin size={14} /> Meepe, Sri Lanka</span>
          <span><Clock size={14} /> GMT+5:30</span>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Sandeepa Wimalasiri</p>
      <SocialLinks className="footer-socials" linkClassName="footer-social" size={18} />
    </footer>
  );
}
