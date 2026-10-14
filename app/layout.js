import { Outfit, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Sidebar from '@/components/Sidebar';

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-primary-next',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-mono-next',
  display: 'swap',
});

export const metadata = {
  title: {
    default: 'Sandeepa Wimalasiri | Cloud & Full-Stack Engineer',
    template: '%s | Sandeepa Wimalasiri',
  },
  description: 'Portfolio of Sandeepa Wimalasiri, Cloud Computing undergraduate and Associate Microsoft Student Ambassador building cloud infrastructure, APIs and web applications.',
  keywords: ['Sandeepa Wimalasiri', 'Cloud Engineer', 'Azure', 'DevOps', 'Full-Stack Developer', 'Sri Lanka', 'Portfolio'],
  authors: [{ name: 'Sandeepa Wimalasiri' }],
  openGraph: {
    type: 'website',
    title: 'Sandeepa Wimalasiri | Cloud & Full-Stack Engineer',
    description: 'Cloud infrastructure and full-stack developer building reliable digital products.',
    images: ['/DSC00078.jpg'],
  },
  twitter: { card: 'summary' },
};

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0b0d12' },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${outfit.variable} ${jetbrainsMono.variable}`}>
      <body>
        <a href="#main-content" className="skip-link">Skip to content</a>
        <div className="layout">
          <Sidebar />
          <main id="main-content" className="main-content" tabIndex={-1}>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}

