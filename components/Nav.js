"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Briefcase, User, FileText, Mail } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { WHATSAPP } from '@/lib/content';

const links = [
  { name: 'Home', href: '/#top', id: 'top', icon: Home },
  { name: 'Work', href: '/#projects', id: 'projects', icon: Briefcase },
  { name: 'About', href: '/#about', id: 'about', icon: User },
  { name: 'Articles', href: '/#articles', id: 'articles', icon: FileText },
  { name: 'Contact', href: '/#contact', id: 'contact', icon: Mail },
];

export default function Nav() {
  const pathname = usePathname();
  const [active, setActive] = useState('top');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      let current = 'top';
      for (const { id } of links) {
        const el = id === 'top' ? null : document.getElementById(id);
        if (el && el.getBoundingClientRect().top < window.innerHeight * 0.4) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Reveal sections as they scroll into view (re-run on each route)
  useEffect(() => {
    const els = document.querySelectorAll('[data-reveal]');
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('in'));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px' });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  return (
    <>
      <header className={`topnav ${scrolled ? 'scrolled' : ''}`}>
        <Link href="/" className="brand" aria-label="Sandeepa Wimalasiri, home">
          Sandeepa
        </Link>
        <nav className="topnav-links" aria-label="Main">
          {links.slice(1).map((l) => (
            <a key={l.id} href={l.href} className={active === l.id ? 'active' : ''}>{l.name}</a>
          ))}
        </nav>
        <div className="topnav-end">
          <ThemeToggle />
          <a href="/#contact" className="btn btn-dark btn-sm">Hire Me</a>
        </div>
      </header>

      <a
        href={`${WHATSAPP}?text=${encodeURIComponent('Hi Sandeepa, I would like to discuss a project.')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="wa-float"
        aria-label="Chat on WhatsApp (opens in a new tab)"
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.06 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.48.71.31 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35zM12.05 21.5h-.01a9.4 9.4 0 0 1-4.79-1.31l-.34-.2-3.56.93.95-3.47-.22-.36a9.38 9.38 0 0 1-1.44-5.01c0-5.19 4.23-9.41 9.42-9.41 2.51 0 4.88.98 6.65 2.76a9.35 9.35 0 0 1 2.75 6.66c0 5.19-4.22 9.41-9.41 9.41zm8.02-17.43A11.3 11.3 0 0 0 12.05.75C5.8.75.72 5.83.72 12.08c0 2 .52 3.95 1.52 5.66L.62 23.25l5.64-1.48a11.3 11.3 0 0 0 5.79 1.48h.01c6.24 0 11.33-5.08 11.33-11.33 0-3.03-1.18-5.87-3.32-8.01z" />
        </svg>
      </a>

      <nav className="bottomnav" aria-label="Sections">
        {links.map(({ name, href, id, icon: Icon }) => (
          <a key={id} href={href} className={active === id ? 'active' : ''} aria-label={name} title={name}>
            <Icon size={20} />
          </a>
        ))}
      </nav>
    </>
  );
}
