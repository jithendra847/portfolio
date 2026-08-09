import React from 'react';
import { useInView } from '../hooks/useInView';
import { personalInfo } from '../data/portfolioData';

export const About = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="about" className="section" ref={ref}>
      <div className="container">
        <header className="section-header">
          <span className="section-number">02</span>
          <h2 className="section-title">ABOUT ME</h2>
        </header>

        <div className="section-content">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '2rem' }}>
            {/* The narrative takes up 8 columns */}
            <div style={{ gridColumn: '1 / -1', '@media (minWidth: 768px)': { gridColumn: '1 / 9' }, maxWidth: '800px' }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 900, textTransform: 'uppercase', lineHeight: 1.1, marginBottom: '2rem', color: 'var(--text)' }}>
                I'M YATAM JITHENDRA, AN INFORMATION TECHNOLOGY STUDENT AT NIT SRINAGAR.
              </h3>
              
              {personalInfo.aboutParagraphs.map((paragraph, idx) => (
                <p key={idx} style={{ color: 'var(--muted)', fontSize: 'clamp(1.05rem, 1.5vw, 1.25rem)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
