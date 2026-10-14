import { Articles, Contact } from '@/components/Sections';

export default function ArticlesPage() {
  return (
    <div className="page">
      <Articles as="h1" />
      <Contact />
    </div>
  );
}
