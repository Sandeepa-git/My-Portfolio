"use client";

import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

const WhatsAppIcon = ({ size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
  </svg>
);


export default function Contact() {
  return (
    <div>
      <h1 className="section-title">Get in Touch</h1>
      
      <div className="contact-container">
        <div className="contact-item">
          <div className="contact-icon">
            <Phone size={24} />
          </div>
          <div className="contact-details">
            <h3>Phone</h3>
            <p>+94 750997715</p>
          </div>
        </div>

        <div className="contact-item">
          <div className="contact-icon">
            <Mail size={24} />
          </div>
          <div className="contact-details">
            <h3>Email</h3>
            <a href="mailto:agsvwimalasiri@gmail.com">agsvwimalasiri@gmail.com</a>
          </div>
        </div>

        <div className="contact-item">
          <div className="contact-icon">
            <MapPin size={24} />
          </div>
          <div className="contact-details">
            <h3>Location</h3>
            <p>Meepe, Western Province, Sri Lanka</p>
          </div>
        </div>

        <div className="contact-item">
          <div className="contact-icon" style={{ backgroundColor: '#25D366', borderColor: '#25D366', color: 'white' }}>
            <WhatsAppIcon size={24} />
          </div>
          <div className="contact-details">
            <h3>WhatsApp</h3>
            <a href="https://wa.me/94750997715" target="_blank" rel="noreferrer" style={{ fontWeight: 'bold', color: '#25D366' }}>
              Chat with me directly
            </a>
          </div>
        </div>


      </div>
    </div>
  );
}
