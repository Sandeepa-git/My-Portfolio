import LegalPage from '@/components/LegalPage';
import { EMAIL } from '@/lib/content';

export const metadata = { title: 'Privacy Policy', alternates: { canonical: '/privacy-policy' } };

export default function Page() {
  return (
    <LegalPage title="Privacy Policy" updated="October 15, 2026">
      <p>This Privacy Policy explains how this website (operated by Sandeepa Wimalasiri) collects and uses information when you visit it.</p>
      <h2>Information we collect</h2>
      <p>We do not require you to create an account. If you contact us by email or WhatsApp, we receive the information you choose to share, such as your name, contact details and message, and use it only to reply to you.</p>
      <h2>Cookies and advertising</h2>
      <p>This site may use Google AdSense to show ads. Third-party vendors, including Google, use cookies to serve ads based on your previous visits to this and other websites. Google&apos;s use of advertising cookies enables it and its partners to serve ads based on your visits to this site and/or other sites on the Internet.</p>
      <p>You can opt out of personalised advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">Google Ads Settings</a>, or opt out of some third-party vendors&apos; use of cookies at <a href="https://www.aboutads.info" target="_blank" rel="noopener noreferrer">www.aboutads.info</a>. Learn more in <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer">how Google uses data from partner sites</a>.</p>
      <h2>Analytics and logs</h2>
      <p>Our hosting provider may collect standard server logs (such as IP address, browser type and pages visited) to keep the site secure and working.</p>
      <h2>Your rights</h2>
      <p>You can ask us to access or delete any personal information you have sent us by emailing <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.</p>
      <h2>Changes</h2>
      <p>We may update this policy from time to time. Changes are posted on this page with a new &quot;last updated&quot; date.</p>
    </LegalPage>
  );
}
