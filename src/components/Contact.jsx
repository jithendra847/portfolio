import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { personalInfo, socialLinks } from '../data/portfolioData';

export const Contact = () => {
  const [ref] = useInView({ threshold: 0.15, triggerOnce: true });

  const links = [
    { name: 'LINKEDIN', url: socialLinks.linkedin },
    { name: 'GITHUB', url: socialLinks.github },
    { name: 'GEEKSFORGEEKS', url: socialLinks.geeksforgeeks },
  ].filter(soc => soc.url);

  return (
    <section id="contact" className="section" ref={ref}>
      <div className="container">
        <header className="section-header">
          <span className="section-number">07</span>
          <h2 className="section-title">CONTACT</h2>
        </header>

        <div className="section-content">
          <div className="contact-12col-grid">
            {/* Left Column */}
            <div className="contact-left-12col">
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3rem, 8vw, 6rem)', fontWeight: 900, lineHeight: 0.9, textTransform: 'uppercase', marginBottom: '2rem', color: 'var(--text)' }}>
                GET<br />
                IN<br />
                TOUCH
              </h3>

              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1.25rem', color: 'var(--muted)', maxWidth: '400px', lineHeight: 1.6 }}>
                If you want to talk about a project, an opportunity, or technology, feel free to reach out.
              </p>

              <div className="contact-link-list">
                {links.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link-row"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight size={24} />
                  </a>
                ))}
              </div>
            </div>

            {/* Right Column: Contact Panel */}
            <div className="contact-right-12col">
              <div className="contact-info-block neu-raised">
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', fontWeight: 800, color: 'var(--accent)', marginBottom: '1rem' }}>
                  CONTACT DETAILS
                </div>

                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--muted)', marginBottom: '0.25rem' }}>EMAIL</div>
                  <div style={{ fontFamily: 'var(--font-sans)', fontSize: '1.1rem', color: 'var(--text)' }}>{personalInfo.email}</div>
                </div>

                <div style={{ width: '100%', height: '1px', backgroundColor: 'var(--border)' }} />

                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--muted)', marginBottom: '0.25rem' }}>PHONE</div>
                  <div style={{ fontFamily: 'var(--font-sans)', fontSize: '1.1rem', color: 'var(--text)' }}>{personalInfo.phone}</div>
                </div>

                <div style={{ width: '100%', height: '1px', backgroundColor: 'var(--border)' }} />

                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--muted)', marginBottom: '0.25rem' }}>LOCATION</div>
                  <div style={{ fontFamily: 'var(--font-sans)', fontSize: '1.1rem', color: 'var(--text)' }}>{personalInfo.location}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

