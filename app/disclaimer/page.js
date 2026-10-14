import LegalPage from '@/components/LegalPage';

export const metadata = { title: 'Disclaimer', alternates: { canonical: '/disclaimer' } };

export default function Page() {
  return (
    <LegalPage title="Disclaimer" updated="October 15, 2026">
      <p>The information on this website is for general educational purposes only. Tutorials reflect the author&apos;s own experience and may not suit every situation; always test code before using it in production.</p>
      <h2>Advertising</h2>
      <p>This site may display ads served by Google AdSense. Ads do not represent endorsement of any product or service.</p>
      <h2>Opinions</h2>
      <p>Opinions expressed are the author&apos;s own and do not represent any employer or organisation.</p>
    </LegalPage>
  );
}
