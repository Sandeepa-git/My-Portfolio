export default function About() {
  return (
    <div>
      <h1 className="section-title">About Me</h1>
      
      <div className="about-grid">
        <div>
          <p className="about-text">
            I am an undergraduate student pursuing Cloud Computing at SLTC Research University. I have a solid foundation in programming, web development, and problem solving, strengthened through practical projects and continuous learning. As an adaptable and creative team player, I am motivated to contribute to innovative solutions and develop my professional skills.
          </p>

          <h2 className="skills-category-title" style={{ marginTop: '3rem' }}>Education</h2>
          <div className="info-list">
            <div className="resume-card">
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>BSc. Honours in Cloud Computing (reading)</h3>
              <p className="info-value">SLTC Research University, SriLanka</p>
            </div>
            <div className="resume-card">
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>GCE. Advanced Level Examination (2017-2019)</h3>
              <p className="info-value">Mt. St Thomas' College Matale</p>
            </div>
          </div>
          
          <h2 className="skills-category-title" style={{ marginTop: '3rem' }}>Experience</h2>
          <div className="info-list">
            <div className="resume-card">
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>Microsoft Learn Student Ambassadors</h3>
              
              <div style={{ marginTop: '0.75rem', paddingLeft: '1rem', borderLeft: '2px solid var(--border-color)', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <p className="info-value" style={{ fontWeight: '600', color: 'var(--text-color)' }}>Associate Microsoft Student Ambassador (Sri Lanka)</p>
                  <p className="info-value" style={{ fontSize: '0.85rem' }}>Aug 2026 - Present · Hybrid</p>
                </div>
                <div>
                  <p className="info-value" style={{ fontWeight: '600', color: 'var(--text-color)' }}>Microsoft Student Ambassador</p>
                  <p className="info-value" style={{ fontSize: '0.85rem' }}>Jul 2026 - Aug 2026</p>
                </div>
              </div>
            </div>

            <div className="resume-card">
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>Co-Director</h3>
              <p className="info-value" style={{ fontWeight: '600', color: 'var(--text-color)' }}>6GC Production</p>
              <p className="info-value" style={{ fontSize: '0.85rem', marginBottom: '0.5rem' }}>Jul 2026 - Present · Full-time</p>
            </div>

            <div className="resume-card">
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>IEEE Computer Society of SLTC</h3>
              <p className="info-value" style={{ fontWeight: '600', color: 'var(--text-color)' }}>Member</p>
              <p className="info-value" style={{ fontSize: '0.85rem', marginBottom: '0.5rem' }}>Jun 2024 - Present</p>
              
              <div style={{ marginTop: '0.75rem', paddingLeft: '1rem', borderLeft: '2px solid var(--border-color)', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div>
                  <p className="info-value" style={{ fontWeight: '600', color: 'var(--text-color)' }}>Co-Chairperson - CodemaniaV6.0</p>
                  <p className="info-value" style={{ fontSize: '0.85rem' }}>Dec 2025 - Mar 2026</p>
                </div>
                <div>
                  <p className="info-value" style={{ fontWeight: '600', color: 'var(--text-color)' }}>Technical Team Head - Lumora V1.0</p>
                  <p className="info-value" style={{ fontSize: '0.85rem' }}>Oct 2025 - Jan 2026</p>
                </div>
                <div>
                  <p className="info-value" style={{ fontWeight: '600', color: 'var(--text-color)' }}>Technical Team Head - Cloudspace V1.0</p>
                  <p className="info-value" style={{ fontSize: '0.85rem' }}>Apr 2025 - Jul 2025</p>
                </div>
                <div>
                  <p className="info-value" style={{ fontWeight: '600', color: 'var(--text-color)' }}>Sub Committee Head - Logistics</p>
                  <p className="info-value" style={{ fontSize: '0.85rem' }}>Jul 2025 - Jun 2026</p>
                </div>
                <div>
                  <p className="info-value" style={{ fontWeight: '600', color: 'var(--text-color)' }}>Program Team Member - Codemania V5.0</p>
                  <p className="info-value" style={{ fontSize: '0.85rem' }}>Dec 2024 - Feb 2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="skills-category-title">Technical Skills</h2>
          

          <div className="skills-category">
            <h3 style={{ fontSize: '1rem', color: 'var(--text-color-muted)' }}>Cloud Computing</h3>
            <div className="skills-list">
              <span className="skill-badge">AWS</span>
              <span className="skill-badge">Azure</span>
              <span className="skill-badge">Docker</span>
              <span className="skill-badge">Kubernetes</span>
              <span className="skill-badge">Jenkins</span>
            </div>
          </div>
          
          <div className="skills-category">
            <h3 style={{ fontSize: '1rem', color: 'var(--text-color-muted)' }}>Programming Languages</h3>
            <div className="skills-list">
              <span className="skill-badge">Javascript</span>
              <span className="skill-badge">Java</span>
              <span className="skill-badge">Python</span>
              <span className="skill-badge">C/C++</span>
              <span className="skill-badge">Dart</span>
              <span className="skill-badge">Go</span>
            </div>
          </div>
          
          <div className="skills-category">
            <h3 style={{ fontSize: '1rem', color: 'var(--text-color-muted)' }}>Framework and Libraries</h3>
            <div className="skills-list">
              <span className="skill-badge">ReactJs</span>
              <span className="skill-badge">NodeJs</span>
              <span className="skill-badge">Next.js</span>
              <span className="skill-badge">Flutter</span>
            </div>
          </div>
          
          <div className="skills-category">
            <h3 style={{ fontSize: '1rem', color: 'var(--text-color-muted)' }}>Web & App Development</h3>
            <div className="skills-list">
              <span className="skill-badge">Frontend Development</span>
            </div>
          </div>
          
          <div className="skills-category">
            <h3 style={{ fontSize: '1rem', color: 'var(--text-color-muted)' }}>Tools & Platforms</h3>
            <div className="skills-list">
              <span className="skill-badge">Vercel</span>
              <span className="skill-badge">Antigravity</span>
              <span className="skill-badge">Hugging Face API</span>
              <span className="skill-badge">Google APIs</span>
            </div>
          </div>


          
        </div>
      </div>
    </div>
  );
}
