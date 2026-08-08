
export default function Portfolio() {
  const projects = [
    {
      title: 'SchoolUA',
      tech: 'Frontend Web Development',
      link: 'https://www.schoolua.eu/en',
      image: 'https://api.microlink.io/?url=https://www.schoolua.eu/en&screenshot=true&meta=false&embed=screenshot.url'
    },
    {
      title: 'ArtSchool',
      tech: 'Frontend Web Development',
      link: 'https://www.artschool.website/',
      image: 'https://api.microlink.io/?url=https://www.artschool.website/&screenshot=true&meta=false&embed=screenshot.url'
    },
    {
      title: 'Lupmkc',
      tech: 'Frontend Web Development',
      link: 'https://lupmkc.eu/',
      image: 'https://api.microlink.io/?url=https://lupmkc.eu/&screenshot=true&meta=false&embed=screenshot.url'
    },
    {
      title: 'UASchool',
      tech: 'Frontend Web Development',
      link: 'https://www.uaschool.com.ua/',
      image: 'https://api.microlink.io/?url=https://www.uaschool.com.ua/&screenshot=true&meta=false&embed=screenshot.url'
    },
    {
      title: 'PlumberRem',
      tech: 'Frontend Web Development',
      link: 'https://plumberrem.online/',
      image: 'https://api.microlink.io/?url=https://plumberrem.online/&screenshot=true&meta=false&embed=screenshot.url'
    },
    {
      title: 'KapInternational',
      tech: 'Frontend Web Development',
      link: 'https://kapinternational.space/',
      image: 'https://api.microlink.io/?url=https://kapinternational.space/&screenshot=true&meta=false&embed=screenshot.url'
    },
    {
      title: 'European Education Academy',
      tech: 'Frontend Web Development',
      link: 'https://europeaneducationacademy.online/',
      image: 'https://api.microlink.io/?url=https://europeaneducationacademy.online/&screenshot=true&meta=false&embed=screenshot.url'
    },
    {
      title: 'Ukrainian School of Paris',
      tech: 'Frontend Web Development',
      link: 'https://ukrainianschoolofparis.website/',
      image: 'https://api.microlink.io/?url=https://ukrainianschoolofparis.website/&screenshot=true&meta=false&embed=screenshot.url'
    },
    {
      title: 'Dockerized Notes Application using Flask, MongoDB, and Nginx with container networking, persistent storage, and automated deployment scripts and Kubernetes Fundamentals with Minikube',
      tech: 'Kubernetes, Docker',
      link: 'https://github.com/Sandeepa-git/CIT-24-01-0110',
      image: '/docker-k8s-user.png'
    },
    {
      title: 'Production-Ready Subscription Management API',
      tech: 'Node.js, Express.js, MongoDB, JWT, Bcrypt.js, Arcjet',
      link: 'https://github.com/Sandeepa-git/production-ready-api',
      image: '/rest-api-user.png',
      isLogo: true,
      bg: 'white'
    },
    {
      title: 'Infrastructure as Code (IaC) with Bicep on Azure - eShopOnWeb',
      tech: 'Azure, Bicep, IaC',
      link: 'https://github.com/Sandeepa-git/eShopOnWeb',
      image: '/azure-thumb.png',
      isLogo: true,
      bg: 'white'
    },
    {
      title: 'TailorSync - Customized App for Tailor Management System',
      tech: 'Flutter, Mobile App Development',
      link: 'https://github.com/Sandeepa-git/TailorSync',
      image: '/flutter-thumb.png',
      isLogo: true,
      bg: 'white'
    }
  ];

  return (
    <div>
      <h1 className="section-title">Portfolio</h1>
      <div className="project-grid">
        {projects.map((project, index) => (
          <a href={project.link} target="_blank" rel="noreferrer" className="project-card" key={index}>
            <div className="project-image" style={{ backgroundColor: project.bg || 'transparent' }}>
              <img 
                src={project.image} 
                alt={project.title} 
                style={project.isLogo ? { objectFit: 'contain', padding: '1rem' } : {}}
              />
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.tech}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
