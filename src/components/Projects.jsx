import React from 'react';
import { ExternalLink, Github, ArrowRight, Star } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { projects } from '../data/portfolioData';

export const Projects = ({ onOpenCaseStudy }) => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="projects" className="section" ref={ref}>
      <div className="container">
        <header className="section-header">
          <span className="section-number">04</span>
          <h2 className="section-title">FEATURED PROJECTS</h2>
        </header>

        <div className={`section-content projects-section-content ${inView ? 'is-visible' : ''}`}>
          <div className="projects-grid">
            {projects.map((project) => (
              <article
                id={`project-${project.id}`}
                className={`project-card neu-raised ${project.isFlagship ? 'flagship-card' : ''}`}
                key={project.id}
              >
                <div className="project-card-header">
                  <div className="project-card-meta">
                    <span className="project-num">{project.num}</span>
                    {project.isFlagship && (
                      <span className="flagship-badge">
                        <Star size={12} aria-hidden="true" />
                        <span>{project.flagshipLabel || "FLAGSHIP"}</span>
                      </span>
                    )}
                  </div>

                  <h3 className="project-title">{project.title}</h3>
                  <div className="project-tagline">{project.tagline}</div>
                </div>

                <div className="project-card-body">
                  <p className="project-desc">{project.description}</p>

                  <div className="project-tech-chips" aria-label={`Technologies used in ${project.title}`}>
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-chip">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="project-card-actions">
                  <button
                    id={`open-case-study-${project.slug}`}
                    className="btn-heavy btn-heavy-primary project-explore-btn"
                    onClick={() => onOpenCaseStudy(project.slug, `open-case-study-${project.slug}`)}
                    type="button"
                    aria-label={`Explore detailed technical case study for ${project.title}`}
                  >
                    <span>CASE STUDY</span>
                    <ArrowRight size={16} aria-hidden="true" />
                  </button>

                  <div className="project-external-links">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-heavy btn-heavy-icon project-link-btn"
                      aria-label={`View ${project.title} source code on GitHub (opens in new tab)`}
                      title="GitHub Source Code"
                    >
                      <Github size={16} aria-hidden="true" />
                    </a>

                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-heavy btn-heavy-icon project-link-btn"
                        aria-label={`Visit live demo for ${project.title} (opens in new tab)`}
                        title="Live Demonstration"
                      >
                        <ExternalLink size={16} aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
