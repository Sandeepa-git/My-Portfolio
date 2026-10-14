import LegalPage from '@/components/LegalPage';
import { EMAIL } from '@/lib/content';

export const metadata = { title: 'Terms of Use', alternates: { canonical: '/terms' } };

export default function Page() {
  return (
    <LegalPage title="Terms of Use" updated="October 15, 2026">
      <p>By using this website you agree to these terms. If you do not agree, please do not use the site.</p>
      <h2>Content</h2>
      <p>All articles, code samples and designs on this site are created by Sandeepa Wimalasiri unless stated otherwise. You may use code snippets from tutorials in your own projects. You may not republish full articles without permission.</p>
      <h2>No warranty</h2>
      <p>Content is provided &quot;as is&quot; for educational purposes. We try to keep it accurate but make no guarantees, and we are not liable for any loss arising from its use.</p>
      <h2>External links</h2>
      <p>This site links to third-party websites. We are not responsible for their content or practices.</p>
      <h2>Contact</h2>
      <p>Questions about these terms: <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.</p>
    </LegalPage>
  );
}
