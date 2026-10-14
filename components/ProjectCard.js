"use client";

import { useState } from 'react';
import { ExternalLink, Folder } from 'lucide-react';

import { GithubIcon } from './SocialIcons';

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
              rel="noopener noreferrer" 
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

          {link && link !== github && (
            <a 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer" 
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
