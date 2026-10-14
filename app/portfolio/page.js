import { Projects, Contact } from '@/components/Sections';

export default function PortfolioPage() {
  return (
    <div className="page">
      <Projects as="h1" />
      <Contact />
    </div>
  );
}
