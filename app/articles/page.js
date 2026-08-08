export default function Articles() {
  const articles = [
    {
      title: 'How we built and deployed a Full-Stack React Node.js app',
      category: 'Full-Stack Development',
      link: 'https://medium.com/@agsvwimalasiri/how-we-built-and-deployed-a-full-stack-react-node-js-c1aa7db621ac',
      image: 'https://api.microlink.io/?url=https://medium.com/@agsvwimalasiri/how-we-built-and-deployed-a-full-stack-react-node-js-c1aa7db621ac&screenshot=true&meta=false&embed=screenshot.url'
    },
    {
      title: 'Building a complete DevSecOps CI/CD pipeline',
      category: 'DevOps & CI/CD',
      link: 'https://medium.com/@agsvwimalasiri/building-a-complete-devsecops-ci-cd-pipeline-with-jenkins-sonarqube-trivy-docker-and-kubernetes-8f63ba9af1fc',
      image: 'https://api.microlink.io/?url=https://medium.com/@agsvwimalasiri/building-a-complete-devsecops-ci-cd-pipeline-with-jenkins-sonarqube-trivy-docker-and-kubernetes-8f63ba9af1fc&screenshot=true&meta=false&embed=screenshot.url'
    },
    {
      title: 'Front-End System Design: Scalable User Interfaces',
      category: 'System Design',
      link: 'https://medium.com/@agsvwimalasiri/front-end-system-design-building-scalable-high-performance-user-interfaces-70bca200cfe5',
      image: 'https://api.microlink.io/?url=https://medium.com/@agsvwimalasiri/front-end-system-design-building-scalable-high-performance-user-interfaces-70bca200cfe5&screenshot=true&meta=false&embed=screenshot.url'
    },
    {
      title: 'Backend Architecture Design',
      category: 'System Design',
      link: 'https://medium.com/@agsvwimalasiri/backend-architecture-design-5ad22567830c',
      image: 'https://api.microlink.io/?url=https://medium.com/@agsvwimalasiri/backend-architecture-design-5ad22567830c&screenshot=true&meta=false&embed=screenshot.url'
    },
    {
      title: 'How to test a gRPC API using Postman',
      category: 'Testing & APIs',
      link: 'https://medium.com/@agsvwimalasiri/how-to-test-a-grpc-api-using-postman-step-by-step-guide-129776a02096',
      image: 'https://api.microlink.io/?url=https://medium.com/@agsvwimalasiri/how-to-test-a-grpc-api-using-postman-step-by-step-guide-129776a02096&screenshot=true&meta=false&embed=screenshot.url'
    },
    {
      title: 'Basics of Go',
      category: 'Programming Languages',
      link: 'https://medium.com/@agsvwimalasiri/basics-of-go-a8540852050c',
      image: 'https://api.microlink.io/?url=https://medium.com/@agsvwimalasiri/basics-of-go-a8540852050c&screenshot=true&meta=false&embed=screenshot.url'
    }
  ];

  return (
    <div>
      <h1 className="section-title">Articles & Publications</h1>
      <p className="hero-description" style={{ marginBottom: '3rem', maxWidth: '800px' }}>
        I frequently write about web development, cloud computing, DevOps, and system design on Medium. Here are some of my latest articles!
      </p>
      
      <div className="project-grid">
        {articles.map((article, index) => (
          <a href={article.link} target="_blank" rel="noreferrer" className="project-card" key={index}>
            <div className="project-image">
              <img src={article.image} alt={article.title} />
            </div>
            <div className="project-content">
              <h3>{article.title}</h3>
              <p>{article.category}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
