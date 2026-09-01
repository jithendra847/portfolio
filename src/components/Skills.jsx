import React, { useState } from 'react';
import { useInView } from '../hooks/useInView';
import { skillsCategories } from '../data/portfolioData';

export const Skills = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <section id="skills" className="section" ref={ref}>
      <div className="container">
        <header className="section-header">
          <span className="section-number">03</span>
          <h2 className="section-title">TECHNICAL SKILLS</h2>
        </header>

        <div className={`section-content skills-section-content ${inView ? 'is-visible' : ''}`}>
          <div className="skills-categories-grid">
            {skillsCategories.map((group) => {
              const isExpanded = activeCategory === group.category;

              return (
                <div 
                  key={group.category} 
                  className={`skills-category-card neu-raised ${isExpanded ? 'active' : ''}`}
                >
                  <div className="skills-category-header">
                    <span className="skills-category-tag">CATEGORY</span>
                    <h3 className="skills-category-title">{group.category}</h3>
                  </div>

                  <div className="skills-pill-container">
                    {group.skills.map((skill) => (
                      <div key={skill.name} className="skill-pill-item">
                        <div className="skill-pill-header">
                          <span className="skill-bullet" aria-hidden="true">■</span>
                          <span className="skill-pill-name">{skill.name}</span>
                        </div>
                        {skill.description && (
                          <p className="skill-pill-desc">{skill.description}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
