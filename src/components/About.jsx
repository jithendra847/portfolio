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

        <div className={`section-content about-section-content ${inView ? 'is-visible' : ''}`}>
          <div className="about-grid">
            
            {/* Main Editorial Narrative */}
            <div className="about-narrative">
              <h3 className="about-headline">
                B.TECH INFORMATION TECHNOLOGY STUDENT AT NIT SRINAGAR, BUILDING SOFTWARE SYSTEMS WITH PURPOSE.
              </h3>
              
              <div className="about-paragraphs">
                {personalInfo.aboutParagraphs.map((paragraph, idx) => (
                  <p key={idx} className="about-paragraph">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Quick Principles / Highlights Card */}
            <div className="about-sidebar neu-raised">
              <h4 className="about-sidebar-title">CORE FOCUS AREAS</h4>
              
              <ul className="about-focus-list">
                <li className="about-focus-item">
                  <span className="focus-number">01</span>
                  <div>
                    <strong>Data Structures &amp; Algorithms</strong>
                    <p>Continuous problem-solving in C++ across arrays, graphs, trees, and dynamic programming.</p>
                  </div>
                </li>
                <li className="about-focus-item">
                  <span className="focus-number">02</span>
                  <div>
                    <strong>Backend Architecture</strong>
                    <p>Designing performant REST APIs with Python FastAPI, relational models in PostgreSQL, and SQLAlchemy ORM.</p>
                  </div>
                </li>
                <li className="about-focus-item">
                  <span className="focus-number">03</span>
                  <div>
                    <strong>Full-Stack Web Development</strong>
                    <p>Building clean, responsive client-side applications with React, Vite, and modular CSS architecture.</p>
                  </div>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
