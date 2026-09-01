import React, { useEffect, useRef } from 'react';
import { X, ExternalLink, Github, ArrowLeft, ArrowRight, Layers, Cpu, CheckCircle2, Lightbulb, AlertTriangle } from 'lucide-react';
import { projects } from '../data/portfolioData';
import { useScrollLock } from '../hooks/useScrollLock';

export const ProjectModal = ({ selectedSlug, onClose, onSelectProject, triggerId }) => {
  const modalRef = useRef(null);
  const closeBtnRef = useRef(null);

  // Safe body scroll locking with unmount cleanup
  useScrollLock(Boolean(selectedSlug));

  const currentProjectIndex = projects.findIndex(
    (p) => p.slug === selectedSlug || p.id === selectedSlug
  );
  const project = projects[currentProjectIndex];

  // Focus management & keyboard trap
  useEffect(() => {
    // Focus the close button or modal when opened
    if (closeBtnRef.current) {
      closeBtnRef.current.focus();
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        return;
      }

      // Focus trap
      if (e.key === 'Tab' && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      // Restore focus to original trigger element if present
      if (triggerId) {
        const triggerEl = document.getElementById(triggerId);
        if (triggerEl) {
          triggerEl.focus();
        }
      }
    };
  }, [onClose, triggerId]);

  if (!project) return null;

  const prevProject = projects[(currentProjectIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(currentProjectIndex + 1) % projects.length];

  return (
    <div
      className="project-overlay-backdrop"
      onClick={onClose}
      role="presentation"
    >
      <div
        ref={modalRef}
        className="case-study-modal neu-raised"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="case-study-title"
        aria-describedby="case-study-tagline"
        tabIndex="-1"
      >
        {/* Top Floating Close Button */}
        <button
          ref={closeBtnRef}
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close Project Case Study dialog"
          type="button"
        >
          <X size={18} aria-hidden="true" />
          <span>CLOSE</span>
        </button>

        {/* Header Header */}
        <div className="case-study-header">
          <div className="case-study-num">{project.num} / 03</div>
          <h2 id="case-study-title" className="case-study-title">
            {project.title}
          </h2>
          <div id="case-study-tagline" className="case-study-tagline">
            {project.tagline}
          </div>
        </div>

        {/* Overview */}
        <div className="case-study-section">
          <div className="case-study-block-title">
            <span className="bullet">■</span>
            <span>OVERVIEW &amp; PURPOSE</span>
          </div>
          <p className="case-study-text">{project.overview}</p>
        </div>

        {/* Problem & Motivation */}
        {project.problemMotivation && (
          <div className="case-study-section">
            <div className="case-study-block-title">
              <span className="bullet">■</span>
              <span>PROBLEM &amp; MOTIVATION</span>
            </div>
            <p className="case-study-text">{project.problemMotivation}</p>
          </div>
        )}

        {/* Architecture & Flow */}
        {project.architecture && (
          <div className="case-study-section">
            <div className="case-study-block-title">
              <Layers size={18} className="section-icon" aria-hidden="true" />
              <span>SYSTEM ARCHITECTURE</span>
            </div>
            <p className="case-study-text">{project.architecture}</p>
          </div>
        )}

        {/* What I Built (Key Features) */}
        {project.whatIBuilt && project.whatIBuilt.length > 0 && (
          <div className="case-study-section">
            <div className="case-study-block-title">
              <CheckCircle2 size={18} className="section-icon" aria-hidden="true" />
              <span>KEY IMPLEMENTATION HIGHLIGHTS</span>
            </div>
            <ul className="case-study-list">
              {project.whatIBuilt.map((item, idx) => (
                <li key={idx}>
                  <span className="list-marker">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Technology Stack */}
        <div className="case-study-section">
          <div className="case-study-block-title">
            <Cpu size={18} className="section-icon" aria-hidden="true" />
            <span>TECHNOLOGIES USED</span>
          </div>
          <div className="project-tech-tags-grid">
            {project.technologies.map((tech) => (
              <span className="tech-tag-badge" key={tech}>
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Technical Decisions */}
        {project.technicalDecisions && project.technicalDecisions.length > 0 && (
          <div className="case-study-section">
            <div className="case-study-block-title">
              <Lightbulb size={18} className="section-icon" aria-hidden="true" />
              <span>ENGINEERING DECISIONS</span>
            </div>
            <ul className="case-study-list">
              {project.technicalDecisions.map((decision, idx) => (
                <li key={idx}>
                  <span className="list-marker">◆</span>
                  <span>{decision}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Challenges Overcome */}
        {project.challenges && project.challenges.length > 0 && (
          <div className="case-study-section">
            <div className="case-study-block-title">
              <AlertTriangle size={18} className="section-icon" aria-hidden="true" />
              <span>CHALLENGES &amp; TRADE-OFFS</span>
            </div>
            <ul className="case-study-list">
              {project.challenges.map((challenge, idx) => (
                <li key={idx}>
                  <span className="list-marker">!</span>
                  <span>{challenge}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* What I Learned */}
        {project.whatILearned && (
          <div className="case-study-section">
            <div className="case-study-block-title">
              <span className="bullet">■</span>
              <span>KEY LEARNINGS</span>
            </div>
            <p className="case-study-text">{project.whatILearned}</p>
          </div>
        )}

        {/* Project External Links */}
        <div className="case-study-section links-section">
          <div className="case-study-block-title">
            <span className="bullet">■</span>
            <span>VERIFIED PROJECT LINKS</span>
          </div>
          <div className="modal-actions-bar">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-heavy btn-heavy-primary"
              aria-label={`View ${project.title} source code on GitHub (opens in new tab)`}
            >
              <Github size={16} aria-hidden="true" />
              <span>VIEW GITHUB REPOSITORY</span>
            </a>

            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-heavy btn-heavy-accent"
                aria-label={`Open live demonstration for ${project.title} (opens in new tab)`}
              >
                <ExternalLink size={16} aria-hidden="true" />
                <span>OPEN LIVE DEMO</span>
              </a>
            )}
          </div>
        </div>

        {/* Modal Navigation Footer */}
        <div className="case-study-nav-bar">
          <button
            className="btn-heavy btn-heavy-secondary"
            onClick={onClose}
            type="button"
          >
            <ArrowLeft size={16} aria-hidden="true" />
            <span>CLOSE CASE STUDY</span>
          </button>

          <div className="modal-pagination-controls">
            <button
              className="btn-heavy btn-heavy-secondary"
              onClick={() => onSelectProject(prevProject.slug)}
              type="button"
              aria-label={`Go to previous project: ${prevProject.title}`}
            >
              <ArrowLeft size={14} aria-hidden="true" />
              <span>PREV: {prevProject.title}</span>
            </button>

            <button
              className="btn-heavy btn-heavy-secondary"
              onClick={() => onSelectProject(nextProject.slug)}
              type="button"
              aria-label={`Go to next project: ${nextProject.title}`}
            >
              <span>NEXT: {nextProject.title}</span>
              <ArrowRight size={14} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
