import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { projects } from '../data/portfolioData';

export const Projects = ({ onOpenCaseStudy }) => {
  const [ref] = useInView({ threshold: 0.1, triggerOnce: true });
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <section id="projects" className="section" ref={ref}>
      <div className="container">
        <header className="section-header">
          <span className="section-number">04</span>
          <h2 className="section-title">SELECTED WORK</h2>
        </header>

        <div className="section-content">
          <div className="projects-12col-grid">
            {projects.map((project, idx) => (
              <article
                id={`project-${project.id}`}
                className={`project-12col-item project-pos-${idx + 1} neu-raised`}
                key={project.id}
                onClick={() => onOpenCaseStudy(project.slug)}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                data-cursor="view"
                style={{ 
                  borderColor: hoveredProject === project.id ? 'var(--accent)' : 'transparent',
                  transform: hoveredProject === project.id && window.innerWidth >= 900 ? 'translateY(-8px)' : 'none',
                  transition: 'transform var(--transition-normal), border-color var(--transition-normal)'
                }}
              >
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '3rem', fontWeight: 900, color: hoveredProject === project.id ? 'var(--accent)' : 'var(--border)', lineHeight: 1, marginBottom: '1rem', transition: 'color var(--transition-normal)' }}>
                    {project.num}
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, textTransform: 'uppercase', lineHeight: 1, marginBottom: '0.5rem', color: hoveredProject === project.id ? 'var(--text-primary)' : 'var(--text)', transition: 'color var(--transition-normal)', filter: hoveredProject === project.id ? 'brightness(1.2)' : 'none' }}>
                    {project.title}
                  </h3>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', fontWeight: 800, color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '1.5rem', letterSpacing: '0.05em' }}>
                    {project.tagline}
                  </div>

                  <p style={{ color: 'var(--muted)', fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '2rem', maxWidth: '600px' }}>
                    {project.description}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2.5rem' }}>
                    {project.technologies.slice(0, 5).map((tech, tIdx) => (
                      <span key={tIdx} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', padding: '0.35rem 0.75rem', background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--text)' }}>
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', padding: '0.35rem 0.75rem', background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--muted)' }}>
                        +{project.technologies.length - 5}
                      </span>
                    )}
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <button
                    className="contact-email-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenCaseStudy(project.slug);
                    }}
                    style={{ background: 'var(--bg)', border: '1px solid var(--border)' }}
                  >
                    <span>EXPLORE</span>
                    <ArrowRight size={18} style={{ transform: hoveredProject === project.id ? 'translateX(5px)' : 'none', transition: 'transform var(--transition-fast)' }} />
                  </button>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-email-btn"
                    onClick={(e) => e.stopPropagation()}
                    aria-label={`View ${project.title} GitHub`}
                    style={{ background: 'transparent', border: '1px solid var(--border)', color: 'var(--text)' }}
                  >
                    <Github size={16} />
                  </a>

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-email-btn"
                      onClick={(e) => e.stopPropagation()}
                      aria-label={`View ${project.title} Demo`}
                      style={{ background: 'transparent', border: '1px solid var(--border)', color: 'var(--text)' }}
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
