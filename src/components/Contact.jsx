import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { personalInfo, socialLinks } from '../data/portfolioData';

export const Contact = () => {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });

  const existingSocials = [
    { name: 'EMAIL', url: socialLinks.email },
    { name: 'LINKEDIN', url: socialLinks.linkedin },
    { name: 'GITHUB', url: socialLinks.github },
    { name: 'GEEKSFORGEEKS', url: socialLinks.geeksforgeeks },
  ].filter(soc => soc.url);

  return (
    <section id="contact" className="section" ref={ref}>
      <div className="section-container">
        <div className="animated-divider">
          <div className={`animated-divider-line ${inView ? 'visible' : ''}`} />
        </div>

        {/* Stage 1: Section Number & Header */}
        <header className={`section-header stage-reveal ${inView ? 'is-visible' : ''}`}>
          <span className="section-number">07</span>
          <h2 className="section-title">CONTACT</h2>
        </header>

        <div className="section-content">
          {/* Asymmetric Desktop 2-Column Grid (60% / 40%) */}
          <div className="contact-layout-grid">
            {/* Stage 2: Left Column (60% Width): Stacked Title & Human Copy */}
            <div className={`contact-left-col stage-reveal stage-delay-1 ${inView ? 'is-visible' : ''}`}>
              <h3 className="contact-title-stacked">
                GET<br />
                IN<br />
                TOUCH
              </h3>

              <p className="contact-desc-text">
                If you want to talk about a project, an opportunity, or just technology, feel free to reach out.
              </p>

              <div>
                <a
                  id="contact-email-btn"
                  href={socialLinks.email}
                  className="contact-email-btn"
                  aria-label="Send Email to Yatam Jithendra"
                >
                  <span>SEND EMAIL</span>
                  <ArrowUpRight size={20} className="contact-email-arrow" />
                </a>
              </div>
            </div>

            {/* Stage 3: Right Column (40% Width): Single Unified Neumorphic Contact Panel */}
            <div className={`contact-right-col stage-reveal stage-delay-2 ${inView ? 'is-visible' : ''}`}>
              <div className="contact-info-panel neu-raised">
                <div className="contact-info-panel-title">
                  CONTACT DETAILS
                </div>

                <div className="contact-info-field">
                  <span className="contact-info-label">EMAIL</span>
                  <span className="contact-info-val">{personalInfo.email}</span>
                </div>

                <div className="contact-info-divider" />

                <div className="contact-info-field">
                  <span className="contact-info-label">PHONE</span>
                  <span className="contact-info-val">{personalInfo.phone}</span>
                </div>

                <div className="contact-info-divider" />

                <div className="contact-info-field">
                  <span className="contact-info-label">LOCATION</span>
                  <span className="contact-info-val">{personalInfo.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stage 4: Interactive Editorial Link Rows */}
          <div className={`social-links-heavy-list stage-reveal stage-delay-3 ${inView ? 'is-visible' : ''}`}>
            {existingSocials.map((soc, idx) => (
              <a
                key={soc.name}
                id={`contact-social-link-${soc.name.toLowerCase()}`}
                href={soc.url}
                target={soc.name === 'EMAIL' ? '_self' : '_blank'}
                rel={soc.name === 'EMAIL' ? '' : 'noopener noreferrer'}
                className="social-link-row"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                aria-label={`${soc.name} Contact link`}
              >
                <span className="social-link-row-text">{soc.name}</span>
                <ArrowUpRight size={30} className="social-link-row-arrow" />
              </a>
            ))}
          </div>

          {/* Stage 5: Technical Status Indicator */}
          <div className={`stage-reveal stage-delay-4 ${inView ? 'is-visible' : ''}`}>
            <div className="contact-status-bar">
              <span className="dot">●</span>
              <span>OPEN TO PROJECTS & OPPORTUNITIES</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

