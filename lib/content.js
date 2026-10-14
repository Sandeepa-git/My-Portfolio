// Single source for the portfolio's content, shared by the home page and the section routes.

export const EMAIL = 'agsvwimalasiri@gmail.com';
export const WHATSAPP = 'https://wa.me/94750997715';
export const MSA_PROFILE = 'https://mvp.microsoft.com/en-US/studentambassadors/profile/b3b04af9-2237-4437-834d-ba28cef3ea1c';

export const credentials = [
  'BSc (Hons) Cloud Computing · SLTC',
  'Associate Microsoft Student Ambassador',
  'IEEE Computer Society Member',
  'Co-Chair · Codemania V6.0',
  'Co-Director · 6GC Production',
];

export const projects = [
  {
    title: 'Azure IaC with Bicep: eShopOnWeb',
    tags: ['Azure', 'Bicep', 'GitHub Actions'],
    category: 'Cloud & DevOps',
    link: 'https://github.com/Sandeepa-git/eShopOnWeb',
    image: '/azure-thumb.png',
    summary: 'Provisioned App Services, SQL databases and networking for eShopOnWeb with zero manual steps.',
  },
  {
    title: 'Subscription Management API',
    tags: ['Node.js', 'Express', 'MongoDB', 'JWT'],
    category: 'Backend',
    link: 'https://github.com/Sandeepa-git/production-ready-api',
    image: '/rest-api-user.png',
    summary: 'Production-ready REST API with JWT auth, Arcjet rate limiting and subscription email alerts.',
  },
  {
    title: 'Dockerized Notes on Kubernetes',
    tags: ['Docker', 'Kubernetes', 'Flask', 'Nginx'],
    category: 'Cloud & DevOps',
    link: 'https://github.com/Sandeepa-git/CIT-24-01-0110',
    image: '/docker-k8s-user.png',
    summary: 'Multi-container app behind an Nginx proxy on Minikube, with persistent volumes and health checks.',
  },
  {
    title: 'TailorSync',
    tags: ['Flutter', 'Dart'],
    category: 'Mobile',
    link: 'https://github.com/Sandeepa-git/TailorSync',
    image: '/flutter-thumb.png',
    summary: 'Mobile app for tailors to manage client measurements, orders and schedules, offline first.',
  },
  { title: 'SchoolUA', tags: ['HTML', 'CSS', 'JavaScript'], category: 'Website', link: 'https://www.schoolua.eu/en', image: '/schoolua.svg', summary: 'Multilingual school community site with responsive layouts.' },
  { title: 'ArtSchool', tags: ['HTML', 'CSS', 'JS Modules'], category: 'Website', link: 'https://www.artschool.website/', image: '/artschool.svg', summary: 'Art portfolio site with scroll interactions and gallery sliders.' },
  { title: 'KapInternational', tags: ['HTML', 'CSS', 'SVG'], category: 'Website', link: 'https://kapinternational.space/', image: '/kapinternational.svg', summary: 'Corporate platform with space-themed visuals and vector animation.' },
  { title: 'European Education Academy', tags: ['HTML', 'CSS', 'JS'], category: 'Website', link: 'https://europeaneducationacademy.online/', image: '/eea.svg', summary: 'Certificate course portal with validated registration forms.' },
  { title: 'Ukrainian School of Paris', tags: ['HTML', 'CSS', 'JS'], category: 'Website', link: 'https://ukrainianschoolofparis.website/', image: '/usp.svg', summary: 'Cultural academy landing page with accessible, cross-device layouts.' },
  { title: 'PlumberRem', tags: ['Tailwind', 'JavaScript'], category: 'Website', link: 'https://plumberrem.online/', image: '/plumberrem.svg', summary: 'Plumbing service site built around emergency booking and calls.' },
  { title: 'Lupmkc', tags: ['HTML5', 'CSS Grid'], category: 'Website', link: 'https://lupmkc.eu/', image: '/lupmkc.svg', summary: 'Business landing page; CSS refactor cut load latency by 20%.' },
  { title: 'UASchool', tags: ['HTML', 'CSS'], category: 'Website', link: 'https://www.uaschool.com.ua/', image: '/uaschool.svg', summary: 'Education landing page with courses, schedules and registration.' },
];

export const services = [
  { title: 'Cloud Infrastructure', text: 'Designing and provisioning Azure and AWS environments with Infrastructure as Code, so every resource is versioned and repeatable.' },
  { title: 'DevOps & CI/CD', text: 'Pipelines with Jenkins and GitHub Actions that build, scan, test and ship containers to Kubernetes automatically.' },
  { title: 'Backend & APIs', text: 'Secure REST and gRPC services in Node.js, Python and Go, with authentication, rate limiting and solid data models.' },
  { title: 'Web Development', text: 'Fast, responsive websites and web apps in React and Next.js, built to be easy to maintain and quick to load.' },
  { title: 'Mobile Apps', text: 'Cross-platform Flutter apps with clean interfaces and offline-ready storage.' },
];

// Official logos from the Devicon set (pinned version on jsDelivr)
const DEVICON = 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons';

export const stack = [
  { name: 'Azure', note: 'Cloud platform & Bicep IaC', icon: `${DEVICON}/azure/azure-original.svg` },
  { name: 'Docker', note: 'Containerizing every service', icon: `${DEVICON}/docker/docker-original.svg` },
  { name: 'Kubernetes', note: 'Orchestration & self-healing', icon: `${DEVICON}/kubernetes/kubernetes-original.svg` },
  { name: 'Jenkins', note: 'CI/CD automation', icon: `${DEVICON}/jenkins/jenkins-original.svg` },
  { name: 'Node.js', note: 'APIs with Express', icon: `${DEVICON}/nodejs/nodejs-original.svg` },
  { name: 'React', note: 'Interactive web interfaces', icon: `${DEVICON}/react/react-original.svg` },
  { name: 'Next.js', note: 'This website', icon: `${DEVICON}/nextjs/nextjs-original.svg` },
  { name: 'Python', note: 'Flask services & scripting', icon: `${DEVICON}/python/python-original.svg` },
  { name: 'Go', note: 'Fast, concurrent backends', icon: `${DEVICON}/go/go-original-wordmark.svg` },
  { name: 'MongoDB', note: 'Document databases', icon: `${DEVICON}/mongodb/mongodb-original.svg` },
  { name: 'Flutter', note: 'Cross-platform mobile', icon: `${DEVICON}/flutter/flutter-original.svg` },
  { name: 'AWS', note: 'Cloud project experience', icon: `${DEVICON}/amazonwebservices/amazonwebservices-original-wordmark.svg` },
  { name: 'Postman', note: 'API & gRPC testing', icon: `${DEVICON}/postman/postman-original.svg` },
  { name: 'GitHub', note: 'Version control & Actions CI', icon: `${DEVICON}/github/github-original.svg` },
];

export const focusTags = ['Cloud DevOps', 'Infrastructure as Code', 'CI/CD', 'Backend Systems', 'Full-Stack Web'];

export const journey = [
  { role: 'Associate Microsoft Student Ambassador', org: 'Microsoft Learn Student Ambassadors', date: 'Aug 2026 – Present' },
  { role: 'Co-Director', org: '6GC Production', date: 'Jul 2026 – Present' },
  { role: 'Co-Chairperson, Codemania V6.0', org: 'IEEE Computer Society, SLTC', date: 'Dec 2025 – Mar 2026' },
  { role: 'Technical Team Head, Lumora & Cloudspace', org: 'IEEE Computer Society, SLTC', date: 'Apr 2025 – Jan 2026' },
  { role: 'BSc (Hons) in Cloud Computing', org: 'SLTC Research University', date: '2023 – Present' },
];

export const process = [
  { title: 'Plan', text: 'Understand the goal, the users and the constraints before writing any code.' },
  { title: 'Build', text: 'Ship clean, tested code in small steps, with documentation as I go.' },
  { title: 'Automate', text: 'Containerize, codify the infrastructure and wire up CI/CD pipelines.' },
  { title: 'Deliver', text: 'Deploy, monitor and keep improving based on real feedback.' },
];

export const articles = [
  { title: 'How we built and deployed a Full-Stack React Node.js app', category: 'Full-Stack', date: 'Aug 14, 2026', readTime: '5 min', link: 'https://medium.com/@agsvwimalasiri/how-we-built-and-deployed-a-full-stack-react-node-js-c1aa7db621ac' },
  { title: 'Building a complete DevSecOps CI/CD pipeline with Jenkins, SonarQube, Trivy, Docker and Kubernetes', category: 'DevOps', date: 'Jul 29, 2026', readTime: '8 min', link: 'https://medium.com/@agsvwimalasiri/building-a-complete-devsecops-ci-cd-pipeline-with-jenkins-sonarqube-trivy-docker-and-kubernetes-8f63ba9af1fc' },
  { title: 'Front-End System Design: Building Scalable High-Performance User Interfaces', category: 'System Design', date: 'Jul 04, 2026', readTime: '6 min', link: 'https://medium.com/@agsvwimalasiri/front-end-system-design-building-scalable-high-performance-user-interfaces-70bca200cfe5' },
  { title: 'Backend Architecture Design', category: 'System Design', date: 'Jun 18, 2026', readTime: '7 min', link: 'https://medium.com/@agsvwimalasiri/backend-architecture-design-5ad22567830c' },
  { title: 'How to test a gRPC API using Postman: a step-by-step guide', category: 'APIs', date: 'May 30, 2026', readTime: '4 min', link: 'https://medium.com/@agsvwimalasiri/how-to-test-a-grpc-api-using-postman-step-by-step-guide-129776a02096' },
  { title: 'Basics of Go', category: 'Languages', date: 'May 12, 2026', readTime: '5 min', link: 'https://medium.com/@agsvwimalasiri/basics-of-go-a8540852050c' },
];

export const faqs = [
  { q: 'What kind of roles are you looking for?', a: 'Internships and junior roles in cloud, DevOps or backend engineering, plus collaborative open-source and freelance web projects.' },
  { q: 'Which cloud platforms do you work with?', a: 'Mainly Microsoft Azure (including Bicep for Infrastructure as Code), with project experience on AWS and Vercel.' },
  { q: 'Can you build a website for my business?', a: 'Yes. I have shipped responsive sites for schools, academies and local businesses, and can handle design, build and deployment.' },
  { q: 'Do you work remotely?', a: 'Yes. I am based in Sri Lanka (GMT+5:30) and comfortable working with remote teams across time zones.' },
  { q: 'How quickly do you reply?', a: 'I usually reply within 24 hours by email or WhatsApp.' },
];
