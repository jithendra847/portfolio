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
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem', '@media (minWidth: 900px)': { gridTemplateColumns: '1fr 1fr' } }}>
            {/* Left Column */}
            <div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(4rem, 10vw, 8rem)', fontWeight: 900, lineHeight: 0.9, textTransform: 'uppercase', marginBottom: '2rem', color: 'var(--text)' }}>
                GET<br />
                IN<br />
                TOUCH
              </h3>
            </div>

            {/* Right Column: Contact Details */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', justifyContent: 'center' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <a href={`mailto:${personalInfo.email}`} style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.2rem, 3vw, 2rem)', fontWeight: 800, color: 'var(--text)', textDecoration: 'none', transition: 'color var(--transition-fast)' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text)'}>
                  {personalInfo.email}
                </a>
                <a href={`tel:${personalInfo.phone}`} style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.2rem, 3vw, 2rem)', fontWeight: 800, color: 'var(--text)', textDecoration: 'none', transition: 'color var(--transition-fast)' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text)'}>
                  {personalInfo.phone}
                </a>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.2rem, 3vw, 2rem)', fontWeight: 800, color: 'var(--muted)' }}>
                  {personalInfo.location}
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
                {links.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-mono)', fontSize: '1.1rem', fontWeight: 800, color: 'var(--text)', textDecoration: 'none', transition: 'color var(--transition-fast)' }}
                    onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent)'}
                    onMouseOut={(e) => e.currentTarget.style.color = 'var(--text)'}
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

