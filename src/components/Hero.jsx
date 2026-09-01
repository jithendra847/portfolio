import React, { useEffect, useRef } from 'react';
import { ArrowDown, FolderGit2, FileText, Github, Linkedin } from 'lucide-react';
import { personalInfo, socialLinks } from '../data/portfolioData';

export const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (prefersReducedMotion.matches) return;

    let rafId = null;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e) => {
      // Avoid running heavy calculations on narrow viewports
      if (window.innerWidth < 768) return;

      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      // Normalized coordinates (-1 to 1)
      const normX = (clientX / innerWidth) * 2 - 1;
      const normY = (clientY / innerHeight) * 2 - 1;

      targetX = normX * 22;
      targetY = normY * 22;

      if (!rafId) {
        rafId = window.requestAnimationFrame(() => {
          if (heroRef.current) {
            heroRef.current.style.setProperty('--mouse-x', `${targetX}px`);
            heroRef.current.style.setProperty('--mouse-y', `${targetY}px`);
          }
          rafId = null;
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section id="home" className="section hero-heavy" ref={heroRef}>
      <div className="container hero-container">
        
        {/* Step 1: Status & Step Index */}
        <div className="hero-top-meta hero-reveal" style={{ animationDelay: '100ms' }}>
          <div className="hero-step-label">01 / OVERVIEW</div>
          <div className="status-indicator-container">
            <span className="status-dot" aria-hidden="true" />
            <span className="status-text">AVAILABLE FOR INTERNSHIPS</span>
            <div className="status-tooltip" role="tooltip">
              Open to Software Engineering, Backend, &amp; Full-Stack roles (2025/2026).
            </div>
          </div>
        </div>

        {/* Step 2: Main Name Title */}
        <div className="hero-title-block hero-reveal" style={{ animationDelay: '200ms' }}>
          <h1 className="hero-main-title">
            <span className="hero-title-name">YATAM JITHENDRA</span>
          </h1>
          <div className="hero-role-title">
            IT STUDENT &amp; SOFTWARE DEVELOPER
          </div>
        </div>

        {/* Step 3: Supporting Statement */}
        <div className="hero-statement-block hero-reveal" style={{ animationDelay: '300ms' }}>
          <p className="hero-summary-text">
            {personalInfo.tagline}
          </p>
          <div className="hero-focus-tags">
            <span className="focus-pill">Backend Engineering</span>
            <span className="focus-pill">Full-Stack Platforms</span>
            <span className="focus-pill">Algorithms &amp; DSA</span>
            <span className="focus-pill">Applied AI / ML</span>
          </div>
        </div>

        {/* Step 4: Primary Recruiter Action CTAs */}
        <div className="hero-actions-group hero-reveal" style={{ animationDelay: '400ms' }}>
          <a href="#projects" className="btn-heavy btn-heavy-primary">
            <FolderGit2 size={16} aria-hidden="true" />
            <span>VIEW PROJECTS</span>
          </a>

          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-heavy btn-heavy-secondary"
            aria-label="View Official Resume in PDF format (opens in new tab)"
          >
            <FileText size={16} aria-hidden="true" />
            <span>RESUME</span>
          </a>

          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-heavy btn-heavy-icon"
            aria-label="Visit Yatam Jithendra GitHub Profile (opens in new tab)"
            title="GitHub Profile"
          >
            <Github size={18} aria-hidden="true" />
          </a>

          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-heavy btn-heavy-icon"
            aria-label="Visit Yatam Jithendra LinkedIn Profile (opens in new tab)"
            title="LinkedIn Profile"
          >
            <Linkedin size={18} aria-hidden="true" />
          </a>
        </div>

        {/* Step 5: Academic & Institutional Metadata */}
        <div className="hero-meta-grid hero-reveal" style={{ animationDelay: '500ms' }}>
          <div className="hero-meta-card neu-inset">
            <span className="hero-meta-key">INSTITUTION</span>
            <span className="hero-meta-val">NIT SRINAGAR</span>
          </div>
          <div className="hero-meta-card neu-inset">
            <span className="hero-meta-key">DEGREE</span>
            <span className="hero-meta-val">B.TECH — IT</span>
          </div>
          <div className="hero-meta-card neu-inset">
            <span className="hero-meta-key">TIMELINE</span>
            <span className="hero-meta-val">2024 — 2028</span>
          </div>
          <div className="hero-meta-card neu-inset">
            <span className="hero-meta-key">CGPA</span>
            <span className="hero-meta-val">{personalInfo.cgpa} / 10.0</span>
          </div>
        </div>

        {/* Step 6: Scroll Prompt */}
        <div className="hero-scroll-indicator hero-reveal" style={{ animationDelay: '600ms' }}>
          <a href="#about" className="scroll-prompt-link" aria-label="Scroll down to About section">
            <span>SCROLL TO EXPLORE</span>
            <ArrowDown size={16} className="scroll-arrow-icon" aria-hidden="true" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Hero;
