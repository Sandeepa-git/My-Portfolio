"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const Typewriter = ({ texts, typingSpeed = 100, deletingSpeed = 50, pauseTime = 2000 }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;
    
    if (isDeleting) {
      if (currentText === '') {
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        timeout = setTimeout(() => {}, 500); // small pause before typing next
      } else {
        timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, deletingSpeed);
      }
    } else {
      if (currentText === texts[currentTextIndex]) {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, pauseTime);
      } else {
        timeout = setTimeout(() => {
          setCurrentText(texts[currentTextIndex].slice(0, currentText.length + 1));
        }, typingSpeed);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentTextIndex, texts, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <span className="typewriter">
      {currentText}
      <span className="cursor">|</span>
    </span>
  );
};

const GithubIcon = ({ size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
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

const LinkedinIcon = ({ size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const MediumIcon = ({ size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
  </svg>
);

export default function Home() {
  return (
    <div className="home-container">
      <div className="home-image-container">
        <div className="home-blob">
          <Image 
            src="/DSC00078.jpg" 
            alt="Sandeepa Wimalasiri" 
            width={320}
            height={320}
            priority
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </div>
      
      <div className="home-content">
        <h1 className="hero-title">Sandeepa<br/>Wimalasiri</h1>
        
        <div className="hero-title-badge-container">
          <span className="hero-subtitle">
            <Typewriter texts={[
              "Associate Microsoft Student Ambassador",
              "Cloud Computing Undergraduate",
              "AI & DevOps Enthusiast"
            ]} />
          </span>
          <a href="https://mvp.microsoft.com/en-US/studentambassadors/profile/b3b04af9-2237-4437-834d-ba28cef3ea1c" target="_blank" rel="noreferrer" style={{ display: 'inline-block' }}>
            <Image src="/image.png_2K_202608082345.jpeg" alt="Microsoft Student Ambassador Associate" className="ms-badge" width={80} height={80} />
          </a>
        </div>

        <div className="availability-badge">
          <span className="availability-indicator"></span>
          Open to new opportunities in Cloud Infrastructure and Full-Stack Development.
        </div>
        
        <div className="home-socials">
          <a href="https://www.linkedin.com/in/sandeepa-wimalasiri/" target="_blank" rel="noreferrer" className="home-social-link" aria-label="LinkedIn">
            <LinkedinIcon size={24} />
          </a>
          <a href="https://github.com/Sandeepa-git" target="_blank" rel="noreferrer" className="home-social-link" aria-label="GitHub">
            <GithubIcon size={24} />
          </a>
          <a href="https://www.facebook.com/sandeepa.vimukthi.12" target="_blank" rel="noreferrer" className="home-social-link" aria-label="Facebook">
            <FacebookIcon size={24} />
          </a>
          <a href="https://www.instagram.com/_p_a_t_h_f_i_n_d_e_r_/" target="_blank" rel="noreferrer" className="home-social-link" aria-label="Instagram">
            <InstagramIcon size={24} />
          </a>
          <a href="https://www.tiktok.com/@sandeepv999" target="_blank" rel="noreferrer" className="home-social-link" aria-label="TikTok">
            <TiktokIcon size={24} />
          </a>
          <a href="https://medium.com/@agsvwimalasiri" target="_blank" rel="noreferrer" className="home-social-link" aria-label="Medium">
            <MediumIcon size={24} />
          </a>
        </div>
      </div>
    </div>
  );
}
