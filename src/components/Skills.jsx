import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { arsenalData } from '../data/portfolioData';

export const Skills = () => {
  const [ref] = useInView({ threshold: 0.1, triggerOnce: true });
  const [hoveredTech, setHoveredTech] = useState(null);

  // Group data by category
  const groupedSkills = arsenalData.reduce((acc, tech) => {
    if (!acc[tech.category]) acc[tech.category] = [];
    acc[tech.category].push(tech);
    return acc;
  }, {});

  // The specific order we want to display
  const categoryOrder = ['LANGUAGES', 'DATABASES', 'FAMILIAR', 'TOOLS'];

  return (
    <section id="skills" className="section" ref={ref}>
      <div className="container">
        <header className="section-header">
          <span className="section-number">03</span>
          <h2 className="section-title">TECHNICAL ARSENAL</h2>
        </header>

        <div className="section-content" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem', '@media (minWidth: 768px)': { gridTemplateColumns: 'repeat(2, 1fr)' } }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '4rem' }}>
            {categoryOrder.map(category => (
              groupedSkills[category] && (
                <div key={category}>
                  <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', fontWeight: 800, color: 'var(--muted)', letterSpacing: '0.08em', marginBottom: '1.5rem' }}>
                    {category}
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {groupedSkills[category].map(tech => (
                      <div
                        key={tech.id}
                        onMouseEnter={() => setHoveredTech(tech.id)}
                        onMouseLeave={() => setHoveredTech(null)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '1rem',
                          fontFamily: 'var(--font-display)',
                          fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
                          fontWeight: 900,
                          textTransform: 'uppercase',
                          color: hoveredTech === tech.id ? 'var(--text)' : 'var(--muted)',
                          transform: hoveredTech === tech.id ? 'translateX(10px)' : 'translateX(0)',
                          transition: 'all var(--transition-fast)',
                          cursor: 'default'
                        }}
                      >
                        <span style={{ opacity: hoveredTech === tech.id ? 1 : 0, color: 'var(--accent)', transition: 'opacity var(--transition-fast)' }}>
                          ●
                        </span>
                        <span>{tech.name}</span>
                        {hoveredTech === tech.id && (
                          <ArrowRight size={24} style={{ color: 'var(--accent)', marginLeft: 'auto' }} />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
