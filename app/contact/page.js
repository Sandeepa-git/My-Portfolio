"use client";

import { Mail, MapPin, Clock, Lock } from 'lucide-react';

const WhatsAppIcon = ({ size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
  </svg>
);

export default function Contact() {
  const emailAddress = "agsvwimalasiri@gmail.com";

  return (
    <div className="content-frame" style={{ maxWidth: '640px', margin: '0 auto' }}>
      <header style={{ marginBottom: '3rem', textAlign: 'center' }}>
        <h1 className="section-title">Get in Touch</h1>
        <p className="section-subtitle" style={{ margin: '0 auto 1.5rem auto' }}>
          Have a project, opportunity, or technical question? Feel free to reach out directly through my contact channels.
        </p>
      </header>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {/* Email card */}
        <div className="contact-card-item">
          <div className="contact-card-icon" aria-hidden="true">
            <Mail size={20} />
          </div>
          <div className="contact-card-details" style={{ flex: 1 }}>
            <h4>Email Address</h4>
            <a href={`mailto:${emailAddress}`}>{emailAddress}</a>
          </div>
        </div>

        {/* WhatsApp direct card */}
        <div className="contact-card-item">
          <div className="contact-card-icon whatsapp" aria-hidden="true">
            <WhatsAppIcon size={20} />
          </div>
          <div className="contact-card-details">
            <h4>WhatsApp Direct</h4>
            <a href="https://wa.me/94750997715" target="_blank" rel="noreferrer" style={{ fontWeight: '600', color: '#25D366' }}>
              Chat with me directly
            </a>
          </div>
        </div>

        {/* Location & Time Zone Card */}
        <div className="contact-card-item">
          <div className="contact-card-icon" aria-hidden="true">
            <MapPin size={20} />
          </div>
          <div className="contact-card-details">
            <h4>Location &amp; Time Zone</h4>
            <p>Meepe, Western Province, Sri Lanka</p>
            <p style={{ fontSize: '0.75rem', marginTop: '0.25rem' }}>GMT+5:30 (India Standard Time)</p>
          </div>
        </div>
      </div>

      <div style={{ marginTop: '3rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.825rem', color: 'var(--text-color-muted)' }}>
          <Clock size={14} style={{ color: 'var(--accent-color)' }} />
          <span>Response expectation: I typically respond within 24 hours.</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.825rem', color: 'var(--text-color-muted)' }}>
          <Lock size={14} style={{ color: 'var(--accent-color)' }} />
          <span>Privacy notice: Your coordinates are strictly confidential.</span>
        </div>
      </div>
    </div>
  );
}
