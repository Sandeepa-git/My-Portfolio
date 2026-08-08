import { ExternalLink } from 'lucide-react';

export default function ProjectCard({ title, image, tech, link }) {
  return (
    <div className="project-card">
      <div className="project-image-container">
        <img src={image} alt={title} className="project-image" loading="lazy" />
      </div>
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-tech">{tech}</p>
        <a href={link} target="_blank" rel="noreferrer" className="project-link">
          View Project <ExternalLink size={16} />
        </a>
      </div>
    </div>
  );
}
