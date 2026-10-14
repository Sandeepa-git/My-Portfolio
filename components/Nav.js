"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Briefcase, User, FileText, Mail } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

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
          Sandeepa<span>.</span>
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
