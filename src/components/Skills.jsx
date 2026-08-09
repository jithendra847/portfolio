import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { arsenalData } from '../data/portfolioData';

export const Skills = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [activeTechId, setActiveTechId] = useState('cpp');
  const [isPaused, setIsPaused] = useState(false);

  const categories = ['ALL', 'LANGUAGES', 'DATABASES', 'LIBRARIES', 'TOOLS'];

  const filteredArsenal = activeCategory === 'ALL'
    ? arsenalData
    : arsenalData.filter(item => item.category === activeCategory);

  const activeTech = arsenalData.find(item => item.id === activeTechId) || arsenalData[0];

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveTechId(currentId => {
        const currentIndex = filteredArsenal.findIndex(item => item.id === currentId);
        const nextIndex = (currentIndex + 1) % filteredArsenal.length;
        return filteredArsenal[nextIndex]?.id || filteredArsenal[0].id;
      });
    }, 4500);

    return () => clearInterval(interval);
  }, [isPaused, filteredArsenal]);

  useEffect(() => {
    if (!filteredArsenal.some(item => item.id === activeTechId)) {
      if (filteredArsenal.length > 0) {
        setActiveTechId(filteredArsenal[0].id);
      }
    }
  }, [activeCategory, filteredArsenal, activeTechId]);

  return (
    <section id="skills" className="section" ref={ref}>
      <div className="container">
        <header className="section-header">
          <span className="section-number">03</span>
          <h2 className="section-title">TECHNICAL ARSENAL</h2>
        </header>

        <div className="section-content">
          {/* Header Status & Category Filter */}
          <div className="arsenal-header-status">
            <div className="status-indicator-dot">
              <span className="dot">●</span> CURRENT TOOLKIT
            </div>

            <div className="arsenal-filter-bar">
              {categories.map(cat => (
                <button
                  key={cat}
                  className={`filter-btn neu-raised ${activeCategory === cat ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Two-Panel Layout */}
          <div className="arsenal-layout-grid">
            {/* Left Column: Connected Technology Rows */}
            <div
              className="arsenal-left-list"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {filteredArsenal.map((tech) => (
                <div
                  key={tech.id}
                  className={`arsenal-row ${activeTechId === tech.id ? 'neu-inset active' : 'neu-raised'}`}
                  onMouseEnter={() => setActiveTechId(tech.id)}
                  onClick={() => setActiveTechId(tech.id)}
                >
                  <div className="arsenal-row-left">
                    <span className="arsenal-num">{tech.num}</span>
                    <span className="arsenal-name">{tech.name}</span>
                  </div>

                  <div className="arsenal-row-right">
                    <span className="arsenal-dot-active">●</span>
                    <ArrowRight size={18} style={{ color: activeTechId === tech.id ? 'var(--accent)' : 'var(--muted)' }} />
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column: Dynamic Active Information Panel */}
            <div className="arsenal-right-panel neu-raised">
              <div className="tech-active-header">
                {activeTech.num} / {activeTech.category}
              </div>

              <h3 className="tech-active-name">
                {activeTech.name}
              </h3>

              <div className="tech-active-type">
                {activeTech.type}
              </div>

              <p className="tech-active-desc">
                {activeTech.description}
              </p>

              <div className="applied-tags-section">
                <div className="applied-label">APPLIED IN / USE CASES</div>
                <div className="applied-tags-list">
                  {activeTech.appliedIn.map((tag, idx) => (
                    <span key={idx} className="applied-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="tech-status-footer">
                <span style={{ color: 'var(--muted)' }}>EXPERIENCE LEVEL</span>
                <span className="tech-status-val">{activeTech.statusLabel}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
