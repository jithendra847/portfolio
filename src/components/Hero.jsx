import React from 'react';
import { ArrowRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Hero = () => {
  return (
    <section id="home" className="section hero-heavy" style={{ paddingBlock: 'clamp(6rem, 12vw, 10rem)' }}>
      <div className="container">
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', fontWeight: 800, color: 'var(--accent)', letterSpacing: '0.08em', marginBottom: '2.5rem' }}>
          01 / INTRO
        </div>

        <div className="hero-title-wrapper" style={{ marginBottom: '3rem' }}>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(4.5rem, 12vw, 10rem)', fontWeight: 900, lineHeight: 0.85, letterSpacing: '-0.06em', margin: 0, color: 'var(--text)', textTransform: 'uppercase' }}>
            <div className="stage-reveal is-visible" style={{ transitionDelay: '100ms' }}>YATAM</div>
            <div className="stage-reveal is-visible" style={{ transitionDelay: '200ms' }}>JITHENDRA<span style={{ color: 'var(--accent)' }}>.</span></div>
          </h1>
        </div>

        <div className="stage-reveal is-visible" style={{ transitionDelay: '300ms', marginBottom: '4rem' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.1rem', fontWeight: 800, color: 'var(--muted)', letterSpacing: '0.05em', marginBottom: '1.5rem', textTransform: 'uppercase' }}>
            INFORMATION TECHNOLOGY<br />
            NIT SRINAGAR
          </div>
          <p style={{ fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', color: 'var(--text)', maxWidth: '500px', lineHeight: 1.6, marginBottom: '2.5rem' }}>
            {personalInfo.introStatement}
          </p>

          <a
            href="#projects"
            className="contact-email-btn"
            style={{ textDecoration: 'none' }}
          >
            <span>VIEW WORK</span>
            <ArrowRight size={20} className="contact-email-arrow" />
          </a>
        </div>

        <div className="hero-metadata-block stage-reveal is-visible" style={{ transitionDelay: '400ms', display: 'flex', gap: '3rem', flexWrap: 'wrap', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', fontWeight: 700, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          <div>{personalInfo.locationShort}</div>
          <div>{personalInfo.educationShort}</div>
          <div>2024 → 2028</div>
        </div>
      </div>
    </section>
  );
};

