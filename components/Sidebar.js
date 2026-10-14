"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Home, User, Briefcase, Mail, FileText, Menu, X, ArrowRight } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { SocialLinks } from './SocialIcons';

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Track the mobile breakpoint after mount so server and client markup match
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 991px)');
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);
  const sidebarRef = useRef(null);
  const toggleBtnRef = useRef(null);

  // Close mobile drawer on route change
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setIsOpen(false);
  }

  // Trap focus & Escape key listener when mobile drawer is open
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
        toggleBtnRef.current?.focus();
      }

      if (e.key === 'Tab') {
        if (!sidebarRef.current) return;
        const focusableElements = sidebarRef.current.querySelectorAll(
          'a[href], button:not([disabled]), input, textarea, select'
        );
        if (focusableElements.length === 0) return;

        const first = focusableElements[0];
        const last = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === first) {
            last.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === last) {
            first.focus();
            e.preventDefault();
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    // Save previous active element to restore focus when closed
    const prevActive = document.activeElement;

    // Focus the close button or first navigation link inside the sidebar when opened
    const firstFocusable = sidebarRef.current?.querySelector('button, a');
    firstFocusable?.focus();

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      if (prevActive && typeof prevActive.focus === 'function') {
        prevActive.focus();
      }
    };
  }, [isOpen]);

  const navItems = [
    { name: 'Home', path: '/', icon: <Home size={18} /> },
    { name: 'About', path: '/about', icon: <User size={18} /> },
    { name: 'Portfolio', path: '/portfolio', icon: <Briefcase size={18} /> },
    { name: 'Articles', path: '/articles', icon: <FileText size={18} /> },
    { name: 'Contact', path: '/contact', icon: <Mail size={18} /> },
  ];

  return (
    <>
      {/* Mobile Top Header Bar */}
      <header className="mobile-header-bar">
        <Link href="/" className="mobile-header-title" aria-label="Sandeepa Wimalasiri Home">
          Sandeepa Wimalasiri
        </Link>
        <ThemeToggle />
      </header>

      {/* Mobile bottom app navigation */}
      <nav className="mobile-section-nav" aria-label="Sections">
        {navItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link
              key={item.name}
              href={item.path}
              className={`mobile-section-link ${isActive ? 'active' : ''}`}
              aria-current={isActive ? 'page' : undefined}
              aria-label={item.name}
              title={item.name}
            >
              {item.icon}
            </Link>
          );
        })}
      </nav>

      <div 
        className={`sidebar-overlay ${isOpen ? 'active' : ''}`} 
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      <aside 
        ref={sidebarRef}
        id="main-sidebar"
        className={`sidebar ${isOpen ? 'mobile-open' : ''}`}
        aria-hidden={isMobile && !isOpen ? true : undefined}
        inert={isMobile && !isOpen ? true : undefined}
      >
        <div className="sidebar-header">
          <div className="sidebar-header-actions">
            <ThemeToggle />
            <button 
              className="mobile-close-btn"
              onClick={() => setIsOpen(false)}
              aria-label="Close navigation menu"
            >
              <X size={20} />
            </button>
          </div>
          
          <div className="sidebar-avatar-container">
            <Image 
              src="/DSC00078.jpg" 
              alt="Portrait of Sandeepa Wimalasiri" 
              width={72} 
              height={72} 
              priority
            />
          </div>
          <h2 className="sidebar-name">Sandeepa Wimalasiri</h2>
          <p className="sidebar-title">Cloud &amp; Full-Stack Engineer</p>
        </div>

        <nav className="nav-links" aria-label="Main Navigation">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <div key={item.name} className="nav-item">
                <Link 
                  href={item.path} 
                  className={`nav-link ${isActive ? 'active' : ''}`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              </div>
            );
          })}
        </nav>

        <div className="sidebar-footer">
          <SocialLinks className="sidebar-socials" linkClassName="sidebar-social-link" size={16} />
          <Link href="/contact" className="sidebar-talk-btn">
            <span>Let&apos;s Talk</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </aside>
    </>
  );
}

