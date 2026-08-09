import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-heavy">
      <div className="container footer-content-heavy">
        <div className="footer-brand-block">
          <div className="footer-top-row">
            <span className="footer-logo">YJ</span>
            <span className="footer-year">2026</span>
          </div>

          <div className="footer-name">YATAM JITHENDRA</div>
          <div className="footer-degree">B.TECH — INFORMATION TECHNOLOGY</div>
          <div className="footer-inst">NIT SRINAGAR</div>
        </div>

        <button
          id="back-to-top-btn"
          onClick={scrollToTop}
          className="footer-top-btn"
          aria-label="Scroll back to top of page"
        >
          <span>BACK TO TOP</span>
          <ArrowUp size={16} className="back-to-top-arrow" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;

