import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo, socialLinks } from '../data/portfolioData';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-heavy">
      <div className="container footer-container">
        
        {/* Brand & Academic Identity */}
        <div className="footer-identity-block">
          <div className="footer-logo">
            YJ<span className="accent">.</span>
          </div>

          <div className="footer-meta-texts">
            <div className="footer-author-name">{personalInfo.name.toUpperCase()}</div>
            <div className="footer-author-degree">B.TECH — INFORMATION TECHNOLOGY</div>
            <div className="footer-author-inst">{personalInfo.institution.toUpperCase()}</div>
          </div>

          <div className="footer-copyright">
            &copy; {currentYear} Yatam Jithendra. Crafted with React, Vite &amp; Vanilla CSS.
          </div>
        </div>

        {/* Quick Social Anchors */}
        <div className="footer-links-block">
          <div className="footer-links-title">CONNECT</div>
          
          <div className="footer-social-row">
            <a
              href={`mailto:${personalInfo.email}`}
              className="footer-social-btn neu-raised"
              aria-label="Send email to Yatam Jithendra"
              title="Email"
            >
              <Mail size={16} aria-hidden="true" />
            </a>

            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-btn neu-raised"
              aria-label="Visit Yatam Jithendra GitHub Profile (opens in new tab)"
              title="GitHub"
            >
              <Github size={16} aria-hidden="true" />
            </a>

            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-btn neu-raised"
              aria-label="Visit Yatam Jithendra LinkedIn Profile (opens in new tab)"
              title="LinkedIn"
            >
              <Linkedin size={16} aria-hidden="true" />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="footer-top-btn neu-raised"
            aria-label="Scroll back to top of page"
            type="button"
          >
            <span>BACK TO TOP</span>
            <ArrowUp size={16} aria-hidden="true" />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
