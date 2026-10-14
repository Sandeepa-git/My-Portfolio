import { Outfit, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Sidebar from '@/components/Sidebar';
import { SITE_URL } from '@/lib/site';

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
  metadataBase: new URL(SITE_URL),
  applicationName: 'Sandeepa Wimalasiri',
  alternates: { canonical: '/' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  title: {
    default: 'Sandeepa Wimalasiri | Cloud & Full-Stack Engineer',
    template: '%s | Sandeepa Wimalasiri',
  },
  description: 'Portfolio of Sandeepa Wimalasiri, Cloud Computing undergraduate and Associate Microsoft Student Ambassador building cloud infrastructure, APIs and web applications.',
  keywords: ['Sandeepa Wimalasiri', 'Sandeepa', 'Sandeepa Vimukthi', 'Sandeepa Wimalasiri portfolio', 'Microsoft Student Ambassador', 'Kubernetes', 'Cloud Engineer', 'Azure', 'DevOps', 'Full-Stack Developer', 'Sri Lanka', 'Portfolio'],
  authors: [{ name: 'Sandeepa Wimalasiri', url: SITE_URL }],
  creator: 'Sandeepa Wimalasiri',
  openGraph: {
    type: 'profile',
    url: '/',
    siteName: 'Sandeepa Wimalasiri',
    locale: 'en_US',
    title: 'Sandeepa Wimalasiri | Cloud & Full-Stack Engineer',
    description: 'Cloud infrastructure and full-stack developer building reliable digital products.',
    images: [{ url: '/DSC00078.jpg', alt: 'Sandeepa Wimalasiri' }],
  },
  twitter: { card: 'summary_large_image', title: 'Sandeepa Wimalasiri | Cloud & Full-Stack Engineer', images: ['/DSC00078.jpg'] },
};

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0b0d12' },
  ],
};

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Sandeepa Wimalasiri',
  url: SITE_URL,
  image: `${SITE_URL}/DSC00078.jpg`,
  jobTitle: 'Cloud & Full-Stack Engineer',
  nationality: 'Sri Lanka',
  knowsAbout: ['Cloud Computing', 'Microsoft Azure', 'DevOps', 'Kubernetes', 'Docker', 'Full-Stack Development'],
  sameAs: [
    'https://github.com/Sandeepa-git',
    'https://www.linkedin.com/in/sandeepa-wimalasiri/',
    'https://medium.com/@agsvwimalasiri',
    'https://mvp.microsoft.com/en-US/studentambassadors/profile/b3b04af9-2237-4437-834d-ba28cef3ea1c',
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${outfit.variable} ${jetbrainsMono.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
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

