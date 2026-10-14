import { About, Services, Stack, Contact } from '@/components/Sections';

export default function AboutPage() {
  return (
    <div className="page">
      <About as="h1" />
      <Services />
      <Stack />
      <Contact />
    </div>
  );
}
