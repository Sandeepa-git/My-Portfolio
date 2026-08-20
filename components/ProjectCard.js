import { useState } from 'react';
import { ExternalLink, Folder } from 'lucide-react';

const GithubIcon = ({ size = 16 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
  </svg>
);

export default function ProjectCard({ 
  title, 
  image, 
  tech, 
  link, 
  github, 
  summary, 
  role, 
  outcome, 
  isLogo = false, 
  bg = 'transparent' 
}) {
  const [imgSrc, setImgSrc] = useState(image);
  const [hasError, setHasError] = useState(false);

  // Fallback to simple SVG illustration if thumbnail fails to load
  const handleImageError = () => {
    if (!hasError) {
      setHasError(true);
      // Fallback path
      setImgSrc('/schoolua.svg'); 
    }
  };

  const techArray = typeof tech === 'string' ? tech.split(',').map(t => t.trim()) : tech;

  return (
    <article className="project-card" style={{ contentVisibility: 'auto', containIntrinsicSize: '0 400px' }}>
      <div className="project-card-image" style={{ backgroundColor: bg }}>
        <img 
          src={imgSrc} 
          alt={`Visual mockup of the ${title} project`}
          onError={handleImageError}
          loading="lazy"
          style={isLogo ? { objectFit: 'contain', padding: '1.5rem' } : {}}
        />
      </div>

      <div className="project-card-content">
        <div className="project-tag-container">
          {techArray && techArray.slice(0, 3).map((tag, idx) => (
            <span key={idx} className={`project-tag ${idx === 0 ? 'indigo' : ''}`}>
              {tag}
            </span>
          ))}
          {techArray && techArray.length > 3 && (
            <span className="project-tag">+{techArray.length - 3}</span>
          )}
        </div>

        <h3 className="project-card-title">{title}</h3>
        
        {summary && <p className="project-card-desc">{summary}</p>}

        {(role || outcome) && (
          <div style={{ marginTop: 'auto', marginBottom: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.375rem', fontSize: '0.775rem', color: 'var(--text-color-muted)' }}>
            {role && (
              <div>
                <strong>Role:</strong> {role}
              </div>
            )}
            {outcome && (
              <div>
                <strong>Outcome:</strong> {outcome}
              </div>
            )}
          </div>
        )}

        <div className="project-card-footer">
          {github ? (
            <a 
              href={github} 
              target="_blank" 
              rel="noreferrer" 
              className="project-card-link"
              aria-label={`View GitHub repository for ${title}`}
            >
              <GithubIcon size={16} />
              <span>Repository</span>
            </a>
          ) : (
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', fontSize: '0.825rem', color: 'var(--text-color-muted)' }}>
              <Folder size={14} />
              <span>Private Code</span>
            </span>
          )}

          {link && (
            <a 
              href={link} 
              target="_blank" 
              rel="noreferrer" 
              className="project-card-link"
              style={{ color: 'var(--accent-color)' }}
              aria-label={`Visit live website for ${title}`}
            >
              <span>Live Site</span>
              <ExternalLink size={14} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
