import React from 'react';
import { GraduationCap, BookOpen, Clock } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { education, currentLearning, timelineData } from '../data/portfolioData';

export const EducationLearning = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const mainEdu = education[0];

  return (
    <section id="education" className="section" ref={ref}>
      <div className="container">
        <header className="section-header">
          <span className="section-number">06</span>
          <h2 className="section-title">EDUCATION &amp; LEARNING</h2>
        </header>

        <div className={`section-content education-section-content ${inView ? 'is-visible' : ''}`}>
          <div className="education-grid">
            
            {/* Formal Academic Degree Card */}
            <div className="education-degree-card neu-raised">
              <div className="degree-header-block">
                <div className="section-sub-tag">
                  <GraduationCap size={14} aria-hidden="true" />
                  <span>FORMAL EDUCATION</span>
                </div>
                <h3 className="degree-inst-name">{mainEdu.institution}</h3>
                <div className="degree-name">{mainEdu.degree}</div>
              </div>

              <div className="degree-meta-list">
                <div className="degree-meta-row">
                  <span className="meta-label">TIMELINE</span>
                  <span className="meta-value">{mainEdu.years}</span>
                </div>
                <div className="degree-meta-row">
                  <span className="meta-label">CURRENT CGPA</span>
                  <span className="meta-value accent-highlight">{mainEdu.cgpa} / 10.0</span>
                </div>
                <div className="degree-meta-row">
                  <span className="meta-label">LOCATION</span>
                  <span className="meta-value">{mainEdu.location}</span>
                </div>
                <div className="degree-meta-row">
                  <span className="meta-label">ENROLLMENT STATUS</span>
                  <span className="meta-value status-badge">{mainEdu.status}</span>
                </div>
              </div>
            </div>

            {/* Current Active Exploration Card */}
            <div className="learning-topics-card neu-raised">
              <div className="section-sub-tag">
                <BookOpen size={14} aria-hidden="true" />
                <span>CURRENT TECHNICAL FOCUS</span>
              </div>
              <h3 className="learning-card-title">ACTIVE LEARNING ROADMAP</h3>

              <ul className="learning-topics-list">
                {currentLearning.map((item, idx) => (
                  <li key={idx} className="learning-topic-item">
                    <span className="topic-bullet" aria-hidden="true">■</span>
                    <span className="topic-text">{item.topic}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Academic & Engineering Timeline */}
          <div className="timeline-block neu-inset">
            <div className="timeline-header">
              <Clock size={16} aria-hidden="true" />
              <h4 className="timeline-block-title">DEVELOPMENT MILESTONES</h4>
            </div>

            <div className="timeline-grid">
              {timelineData.map((event) => (
                <div key={event.year} className="timeline-milestone-card">
                  <div className="milestone-year">{event.year}</div>
                  <h5 className="milestone-title">{event.title}</h5>
                  <p className="milestone-desc">{event.description}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EducationLearning;
