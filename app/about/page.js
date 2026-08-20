import Link from 'next/link';
import { Calendar, Award, BookOpen, Layers } from 'lucide-react';

export default function About() {
  const cloudSkills = [
    { name: 'Azure', ref: 'Used in Azure Bicep IaC' },
    { name: 'AWS', ref: 'Project experience' },
    { name: 'Docker', ref: 'Used in Dockerized Notes app' },
    { name: 'Kubernetes', ref: 'Used in Minikube deployment' },
    { name: 'Jenkins', ref: 'Used in CI/CD pipeline' }
  ];

  const backendSkills = [
    { name: 'Node.js', ref: 'Used in Subscription API' },
    { name: 'Express.js', ref: 'Used in Subscription API' },
    { name: 'MongoDB', ref: 'Used in Flask & Express' },
    { name: 'Go', ref: 'Language fundamentals' },
    { name: 'Python', ref: 'Used in Flask Notes app' },
    { name: 'Java', ref: 'OOP fundamentals' }
  ];

  const frontendSkills = [
    { name: 'JavaScript', ref: 'Core web experience' },
    { name: 'React', ref: 'Portfolio & web apps' },
    { name: 'Next.js', ref: 'Used in current website' },
    { name: 'Flutter', ref: 'Used in TailorSync mobile app' },
    { name: 'Dart', ref: 'Used in TailorSync' }
  ];

  const toolsSkills = [
    { name: 'Postman', ref: 'Used in gRPC testing' },
    { name: 'Vercel', ref: 'Web deployment' },
    { name: 'Antigravity', ref: 'Agent development tool' }
  ];

  return (
    <div className="content-frame">
      <header style={{ marginBottom: '3rem' }}>
        <h1 className="section-title">About Me</h1>
        <p className="section-subtitle">
          Undergraduate engineer specializing in cloud architectures, container orchestration, and full-stack development.
        </p>
      </header>

      {/* Intro Editorial Layout */}
      <section className="about-section" aria-label="Professional Profile">
        <div className="about-intro-grid">
          <div className="about-editorial-text">
            <p>
              I am a Cloud Computing undergraduate student at SLTC Research University with a passion for designing reliable, scalable, and automated digital products. I combine backend engineering skills with DevOps practices to build containerized apps, automated Infrastructure as Code (IaC) scripts, and highly available deployment flows.
            </p>
            <p>
              In addition to coding, I actively contribute to the technical community. As an Associate Microsoft Student Ambassador and a member of the IEEE Computer Society, I have led technical teams, headed logistics, and co-chaired regional hackathons like Codemania. These roles have strengthened my leadership, communication, and agile project management skills.
            </p>
            <p>
              I focus on engineering values: writing clean code, implementing robust security rules, maintaining consistent documentation, and delivering practical user experiences. I am actively seeking internships and junior software engineering roles to contribute to forward-thinking development teams.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', justifyContent: 'flex-start' }}>
            <div className="resume-card" style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Award size={20} className="credibility-icon" />
                <span>Specialization Profile</span>
              </h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem', color: 'var(--text-color-muted)' }}>
                <li>&bull; <strong>Primary Focus:</strong> Cloud DevOps &amp; Backend Systems</li>
                <li>&bull; <strong>Platforms:</strong> Azure, AWS, Vercel, Docker, K8s</li>
                <li>&bull; <strong>Methodology:</strong> Infrastructure as Code, CI/CD, OOP</li>
                <li>&bull; <strong>Availability:</strong> Internships &amp; Junior Roles</li>
              </ul>

            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', marginBottom: '4rem' }}>
        {/* Left column: Education & Experience */}
        <section aria-label="Education & Professional Experience">
          <h2 className="skills-category-title" style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>
            Education &amp; Experience
          </h2>
          
          <div className="timeline">
            {/* Education item */}
            <div className="timeline-item">
              <span className="timeline-dot" aria-hidden="true"></span>
              <div className="timeline-header">
                <h3 className="timeline-title">BSc (Hons) in Cloud Computing</h3>
                <span className="timeline-date">2023 - Present</span>
              </div>
              <p className="timeline-org">SLTC Research University, Sri Lanka</p>
              <p className="timeline-desc">Specializing in cloud architecture, networking, storage virtualization, and security models. Currently in progress.</p>
            </div>

            {/* A levels */}
            <div className="timeline-item">
              <span className="timeline-dot" aria-hidden="true"></span>
              <div className="timeline-header">
                <h3 className="timeline-title">GCE Advanced Level Examination</h3>
                <span className="timeline-date">2017 - 2019</span>
              </div>
              <p className="timeline-org">Mt. St. Thomas&apos; College, Matale, Sri Lanka</p>
              <p className="timeline-desc">Mathematics stream containing Combined Mathematics, Physics, and Chemistry.</p>
            </div>

            {/* Professional Experience */}
            <div className="timeline-item">
              <span className="timeline-dot" aria-hidden="true"></span>
              <div className="timeline-header">
                <h3 className="timeline-title">Co-Director</h3>
                <span className="timeline-date">Jul 2026 - Present</span>
              </div>
              <p className="timeline-org">6GC Production</p>
              <p className="timeline-desc">Co-leading operations, deployment orchestration, and digital media production infrastructure projects.</p>
            </div>
          </div>
        </section>

        {/* Right column: Leadership & Community */}
        <section aria-label="Community Leadership & Involvement">
          <h2 className="skills-category-title" style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>
            Leadership &amp; Community
          </h2>

          <div className="timeline">
            {/* Ambassador role */}
            <div className="timeline-item">
              <span className="timeline-dot" aria-hidden="true"></span>
              <div className="timeline-header">
                <h3 className="timeline-title">Associate Microsoft Student Ambassador</h3>
                <span className="timeline-date">Aug 2026 - Present</span>
              </div>
              <p className="timeline-org">Microsoft Learn Student Ambassadors Program</p>
              <p className="timeline-desc">Representing Sri Lanka. Leading local study groups, sharing Microsoft Learn resources, and mentoring student developers.</p>
              
              <div className="timeline-sub-experience">
                <div>
                  <p style={{ fontSize: '0.85rem', fontWeight: 'bold' }}>Microsoft Student Ambassador</p>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-color-muted)' }}>Jul 2026 - Aug 2026</p>
                </div>
              </div>
            </div>

            {/* IEEE Role */}
            <div className="timeline-item">
              <span className="timeline-dot" aria-hidden="true"></span>
              <div className="timeline-header">
                <h3 className="timeline-title">IEEE Computer Society Student Branch</h3>
                <span className="timeline-date">Jun 2024 - Present</span>
              </div>
              <p className="timeline-org">SLTC Research University, Sri Lanka</p>
              
              <div className="timeline-sub-experience">
                <div>
                  <p style={{ fontSize: '0.85rem', fontWeight: 'bold' }}>Co-Chairperson &mdash; Codemania V6.0</p>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-color-muted)' }}>Dec 2025 - Mar 2026</p>
                  <p className="timeline-desc" style={{ fontSize: '0.825rem', marginTop: '0.15rem' }}>Co-led the organization of the university-wide competitive programming hackathon.</p>
                </div>
                <div>
                  <p style={{ fontSize: '0.85rem', fontWeight: 'bold' }}>Technical Team Head &mdash; Lumora V1.0</p>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-color-muted)' }}>Oct 2025 - Jan 2026</p>
                </div>
                <div>
                  <p style={{ fontSize: '0.85rem', fontWeight: 'bold' }}>Technical Team Head &mdash; Cloudspace V1.0</p>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-color-muted)' }}>Apr 2025 - Jul 2025</p>
                </div>
                <div>
                  <p style={{ fontSize: '0.85rem', fontWeight: 'bold' }}>Sub-Committee Head &mdash; Logistics</p>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-color-muted)' }}>Jul 2025 - Jun 2026</p>
                </div>
                <div>
                  <p style={{ fontSize: '0.85rem', fontWeight: 'bold' }}>Program Team Member &mdash; Codemania V5.0</p>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-color-muted)' }}>Dec 2024 - Feb 2025</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Technical Skills Capability Groups */}
      <section className="about-section" aria-labelledby="skills-heading">
        <h2 id="skills-heading" className="skills-category-title" style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>
          Technical Skills &amp; Capabilities
        </h2>
        
        <div className="capability-grid">
          {/* Cloud & DevOps */}
          <div className="capability-card">
            <h3 className="capability-title">Cloud &amp; DevOps</h3>
            <div className="capability-badge-container">
              {cloudSkills.map((skill, index) => (
                <div key={index} className="capability-badge" title={skill.ref}>
                  <span>{skill.name}</span>
                  <span className="capability-ref">{skill.ref}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div className="capability-card">
            <h3 className="capability-title">Backend Engineering</h3>
            <div className="capability-badge-container">
              {backendSkills.map((skill, index) => (
                <div key={index} className="capability-badge" title={skill.ref}>
                  <span>{skill.name}</span>
                  <span className="capability-ref">{skill.ref}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Frontend */}
          <div className="capability-card">
            <h3 className="capability-title">Frontend &amp; Mobile</h3>
            <div className="capability-badge-container">
              {frontendSkills.map((skill, index) => (
                <div key={index} className="capability-badge" title={skill.ref}>
                  <span>{skill.name}</span>
                  <span className="capability-ref">{skill.ref}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="capability-card">
            <h3 className="capability-title">Tools &amp; Platforms</h3>
            <div className="capability-badge-container">
              {toolsSkills.map((skill, index) => (
                <div key={index} className="capability-badge" title={skill.ref}>
                  <span>{skill.name}</span>
                  <span className="capability-ref">{skill.ref}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
