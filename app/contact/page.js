import { Contact, Faq } from '@/components/Sections';

export default function ContactPage() {
  return (
    <div className="page">
      <Contact as="h1" />
      <Faq />
    </div>
  );
}
