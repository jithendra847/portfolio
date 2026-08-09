import React from 'react';
import { useInView } from '../hooks/useInView';
import { education, currentLearning } from '../data/portfolioData';

export const EducationLearning = () => {
  const [ref] = useInView({ threshold: 0.1, triggerOnce: true });
  const mainEdu = education[0];

  return (
    <section id="education" className="section" ref={ref}>
      <div className="container">
        <header className="section-header">
          <span className="section-number">06</span>
          <h2 className="section-title">EDUCATION & LEARNING</h2>
        </header>

        <div className="section-content">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem', '@media (minWidth: 768px)': { gridTemplateColumns: '1fr 1fr' } }}>
            {/* Raised Neumorphic Education Card */}
            <div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 900, textTransform: 'uppercase', marginBottom: '1.5rem', color: 'var(--text)' }}>
                FORMAL EDUCATION
              </h3>
              <div className="neu-raised" style={{ padding: '2rem', borderRadius: 'var(--radius-medium)' }}>
                <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 900, textTransform: 'uppercase', marginBottom: '0.25rem', color: 'var(--text)' }}>{mainEdu.institution}</h4>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', fontWeight: 800, color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '2rem' }}>{mainEdu.degree}</div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', fontWeight: 700 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border)', paddingBottom: '0.5rem' }}>
                    <span style={{ color: 'var(--muted)' }}>TIMELINE</span>
                    <span style={{ color: 'var(--text)' }}>{mainEdu.years}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border)', paddingBottom: '0.5rem' }}>
                    <span style={{ color: 'var(--muted)' }}>CGPA</span>
                    <span style={{ color: 'var(--text)' }}>{mainEdu.cgpa}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: 'var(--muted)' }}>STATUS</span>
                    <span style={{ color: 'var(--text)' }}>{mainEdu.status}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Currently Exploring Section */}
            <div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 900, textTransform: 'uppercase', marginBottom: '1.5rem', color: 'var(--text)' }}>
                WHAT I'M PRACTICING NOW
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {currentLearning.map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontFamily: 'var(--font-mono)', fontSize: '1.1rem', fontWeight: 800, color: 'var(--text)', textTransform: 'uppercase', padding: '1rem', borderBottom: '1px solid var(--border)' }}>
                    <span style={{ color: 'var(--accent)' }}>●</span>
                    <span>{item.topic}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
