"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Home, User, Briefcase, Mail, FileText, Menu, X, ArrowRight } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const GithubIcon = ({ size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
  </svg>
);

const LinkedinIcon = ({ size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const FacebookIcon = ({ size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const InstagramIcon = ({ size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const TiktokIcon = ({ size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
  </svg>
);

const MediumIcon = ({ size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
  </svg>
);

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);
  const toggleBtnRef = useRef(null);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

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
        <button 
          ref={toggleBtnRef}
          className="mobile-nav-toggle-btn"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="main-sidebar"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>

      <div 
        className={`sidebar-overlay ${isOpen ? 'active' : ''}`} 
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      <aside 
        ref={sidebarRef}
        id="main-sidebar"
        className={`sidebar ${isOpen ? 'mobile-open' : ''}`}
        aria-hidden={!isOpen && typeof window !== 'undefined' && window.innerWidth <= 991}
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
          <div className="sidebar-socials">
            <a href="https://www.linkedin.com/in/sandeepa-wimalasiri/" target="_blank" rel="noreferrer" className="sidebar-social-link" aria-label="LinkedIn">
              <LinkedinIcon size={16} />
            </a>
            <a href="https://github.com/Sandeepa-git" target="_blank" rel="noreferrer" className="sidebar-social-link" aria-label="GitHub">
              <GithubIcon size={16} />
            </a>
            <a href="https://www.facebook.com/sandeepa.vimukthi.12" target="_blank" rel="noreferrer" className="sidebar-social-link" aria-label="Facebook">
              <FacebookIcon size={16} />
            </a>
            <a href="https://www.instagram.com/_p_a_t_h_f_i_n_d_e_r_/" target="_blank" rel="noreferrer" className="sidebar-social-link" aria-label="Instagram">
              <InstagramIcon size={16} />
            </a>
            <a href="https://www.tiktok.com/@sandeepv999" target="_blank" rel="noreferrer" className="sidebar-social-link" aria-label="TikTok">
              <TiktokIcon size={16} />
            </a>
            <a href="https://medium.com/@agsvwimalasiri" target="_blank" rel="noreferrer" className="sidebar-social-link" aria-label="Medium">
              <MediumIcon size={16} />
            </a>
          </div>
          <Link href="/contact" className="sidebar-talk-btn">
            <span>Let&apos;s Talk</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </aside>
    </>
  );
}

