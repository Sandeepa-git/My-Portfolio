import { Plus_Jakarta_Sans, Bricolage_Grotesque } from 'next/font/google';
import './globals.css';
import Nav from '@/components/Nav';
import { Footer } from '@/components/Sections';
import { SITE_URL } from '@/lib/site';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-display',
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
    { media: '(prefers-color-scheme: light)', color: '#fafaf7' },
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
    <html lang="en" suppressHydrationWarning className={`${jakarta.variable} ${bricolage.variable}`}>
      <body>
        <script
          dangerouslySetInnerHTML={{ __html: "try{var t=localStorage.getItem('theme');if(t)document.documentElement.setAttribute('data-theme',t)}catch(e){}" }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <a href="#main-content" className="skip-link">Skip to content</a>
        <Nav />
        <main id="main-content" tabIndex={-1}>
          <span id="top" />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

