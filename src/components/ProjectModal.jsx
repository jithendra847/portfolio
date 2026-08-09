import React, { useEffect } from 'react';
import { X, ExternalLink, Github, ArrowLeft, ArrowRight } from 'lucide-react';
import { projects } from '../data/portfolioData';

export const ProjectModal = ({ selectedSlug, onClose, onSelectProject }) => {
  const currentProjectIndex = projects.findIndex(p => p.slug === selectedSlug || p.id === selectedSlug);
  const project = projects[currentProjectIndex];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const prevProject = projects[(currentProjectIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(currentProjectIndex + 1) % projects.length];

  return (
    <div className="project-overlay-backdrop" onClick={onClose}>
      <div className="case-study-modal" onClick={(e) => e.stopPropagation()} style={{ background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: 'var(--radius-medium)' }}>
        <button
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close Project Overlay"
          style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
        >
          <X size={18} />
          <span>CLOSE</span>
        </button>

        <div className="case-study-big-num" style={{ color: 'var(--accent)' }}>{project.num}</div>
        <h2 className="case-study-title">{project.title}</h2>
        <div className="case-study-tagline">{project.tagline}</div>

        {/* Overview */}
        <div className="case-study-block-title">WHAT IT IS</div>
        <p className="case-study-text">{project.overview}</p>

        {/* Why I Built It */}
        <div className="case-study-block-title">WHY I BUILT IT</div>
        <p className="case-study-text">{project.whyIBuiltIt}</p>

        {/* Key Features */}
        <div className="case-study-block-title">WHAT I BUILT</div>
        <ul className="case-study-list">
          {project.whatIBuilt.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>

        {/* Technology Stack */}
        <div className="case-study-block-title">TECHNOLOGIES</div>
        <div className="project-tech-tags-heavy" style={{ marginBottom: '2rem' }}>
          {project.technologies.map((tech, idx) => (
            <span className="tech-tag-heavy" key={idx} style={{ background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--text)' }}>
              {tech}
            </span>
          ))}
        </div>

        {/* Architecture & Flow */}
        {project.architecture && (
          <>
            <div className="case-study-block-title">HOW IT WORKS</div>
            <p className="case-study-text">{project.architecture}</p>
          </>
        )}

        {/* What I Learned */}
        <div className="case-study-block-title">WHAT I LEARNED</div>
        <p className="case-study-text">{project.whatILearned}</p>

        {/* Action Links */}
        <div className="case-study-block-title">PROJECT LINKS</div>
        <div className="project-action-btns" style={{ marginBottom: '2.5rem' }}>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-heavy btn-heavy-primary"
            style={{ background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--text)' }}
            aria-label={`View ${project.title} GitHub Repository (opens in new tab)`}
          >
            <Github size={16} />
            <span>GITHUB REPOSITORY</span>
          </a>

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-heavy btn-heavy-secondary"
              style={{ background: 'var(--accent)', border: '1px solid var(--accent)', color: '#000' }}
              aria-label={`View ${project.title} Live Demo (opens in new tab)`}
            >
              <ExternalLink size={16} />
              <span>LIVE DEMO</span>
            </a>
          )}
        </div>

        {/* Modal Case Study Navigation */}
        <div className="case-study-nav-bar">
          <button
            className="btn-heavy btn-heavy-secondary"
            style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
            onClick={onClose}
          >
            <ArrowLeft size={16} />
            <span>CLOSE OVERLAY</span>
          </button>

          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <button
              className="btn-heavy btn-heavy-secondary"
              style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
              onClick={() => onSelectProject(prevProject.slug)}
            >
              <ArrowLeft size={14} />
              <span>PREVIOUS</span>
            </button>

            <button
              className="btn-heavy btn-heavy-secondary"
              style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
              onClick={() => onSelectProject(nextProject.slug)}
            >
              <span>NEXT</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
