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
    default: 'Sandeepa Wimalasiri | Freelance Web Developer & Cloud Enthusiast, Sri Lanka',
    template: '%s | Sandeepa Wimalasiri',
  },
  description: 'Sandeepa Wimalasiri is a freelance web developer and cloud enthusiast in Sri Lanka. Hire me for websites, online stores, AI chatbots, Telegram bots, Azure and AWS cloud setup, DevOps, APIs and Flutter apps.',
  keywords: [
    // Name
    'Sandeepa Wimalasiri', 'Sandeepa', 'Sandeepa Vimukthi', 'Sandeepa Wimalasiri portfolio',
    // Hiring intent
    'hire web developer', 'freelance web developer', 'freelance cloud engineer', 'hire DevOps engineer',
    'website developer for small business', 'affordable website design', 'business website development',
    'school website development', 'landing page developer', 'Next.js developer', 'React developer',
    'Node.js API developer', 'Flutter app developer', 'mobile app developer',
    // Cloud & DevOps services
    'Azure cloud engineer', 'AWS cloud setup', 'cloud migration', 'DevOps consultant', 'CI/CD pipeline setup',
    'Docker and Kubernetes', 'Infrastructure as Code', 'Azure Bicep', 'Jenkins pipeline',
    // AI, bots & e-commerce
    'AI chatbot development', 'Telegram bot developer', 'WhatsApp ordering website', 'custom chatbot for business',
    'Microsoft Foundry developer', 'AI assistant for website', 'e-commerce website developer', 'online store development',
    'Next.js website development', 'website redesign', 'website maintenance', 'SEO friendly website',
    // Location
    'web developer Sri Lanka', 'freelance web developer Sri Lanka', 'cloud engineer Sri Lanka',
    'DevOps engineer Sri Lanka', 'web design Colombo', 'remote developer Sri Lanka', 'website design Sri Lanka', 'web developer Kandy', 'web developer Galle',
    'hire developer from Sri Lanka', 'freelance developer Europe',
    // Profile
    'Microsoft Student Ambassador', 'Full-Stack Developer', 'Cloud Engineer portfolio',
  ],
  authors: [{ name: 'Sandeepa Wimalasiri', url: SITE_URL }],
  creator: 'Sandeepa Wimalasiri',
  openGraph: {
    type: 'profile',
    url: '/',
    siteName: 'Sandeepa Wimalasiri',
    locale: 'en_US',
    title: 'Sandeepa Wimalasiri | Cloud & Full-Stack Enthusiast',
    description: 'Freelance web developer and cloud enthusiast in Sri Lanka: websites, cloud setup, DevOps, APIs and mobile apps.',
    images: [{ url: '/DSC00078.jpg', alt: 'Sandeepa Wimalasiri' }],
  },
  twitter: { card: 'summary_large_image', title: 'Sandeepa Wimalasiri | Cloud & Full-Stack Enthusiast', images: ['/DSC00078.jpg'] },
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
  jobTitle: 'Cloud & Full-Stack Enthusiast',
  nationality: 'Sri Lanka',
  email: 'mailto:agsvwimalasiri@gmail.com',
  address: { '@type': 'PostalAddress', addressLocality: 'Meepe', addressRegion: 'Western Province', addressCountry: 'LK' },
  alumniOf: { '@type': 'CollegeOrUniversity', name: 'SLTC Research University' },
  knowsAbout: ['Cloud Computing', 'Microsoft Azure', 'AWS', 'DevOps', 'CI/CD', 'Kubernetes', 'Docker', 'Infrastructure as Code', 'Web Development', 'Next.js', 'React', 'Node.js', 'Flutter', 'Full-Stack Development'],
  makesOffer: [
    'Website design and development',
    'Cloud infrastructure setup on Azure and AWS',
    'DevOps and CI/CD pipelines',
    'Backend and API development',
    'Flutter mobile app development',
    'AI chatbots and Telegram bots',
    'E-commerce and online store websites',
  ].map((name) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name } })),
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
        {process.env.NEXT_PUBLIC_ADSENSE_CLIENT && (
          <script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_CLIENT}`}
            crossOrigin="anonymous"
          />
        )}
      </body>
    </html>
  );
}

