import React from 'react';
import { Mail, ArrowUpRight, Github, Linkedin, Terminal, Code2, MapPin } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { personalInfo, socialLinks } from '../data/portfolioData';

export const Contact = () => {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });

  const contactLinks = [
    {
      name: 'EMAIL',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      icon: Mail,
      isExternal: false
    },
    {
      name: 'LINKEDIN',
      value: 'linkedin.com/in/jithendra-yatam',
      href: socialLinks.linkedin,
      icon: Linkedin,
      isExternal: true
    },
    {
      name: 'GITHUB',
      value: 'github.com/jithendra847',
      href: socialLinks.github,
      icon: Github,
      isExternal: true
    },
    {
      name: 'CODEFORCES',
      value: 'profile/yatamjithendra847',
      href: socialLinks.codeforces,
      icon: Terminal,
      isExternal: true
    },
    {
      name: 'GEEKSFORGEEKS',
      value: 'profile/yatamjithm778',
      href: socialLinks.geeksforgeeks,
      icon: Code2,
      isExternal: true
    }
  ];

  return (
    <section id="contact" className="section" ref={ref}>
      <div className="container">
        <header className="section-header">
          <span className="section-number">07</span>
          <h2 className="section-title">GET IN TOUCH</h2>
        </header>

        <div className={`section-content contact-section-content ${inView ? 'is-visible' : ''}`}>
          <div className="contact-grid">
            
            {/* Left Column: Heading & Availability Statement */}
            <div className="contact-left-col">
              <h3 className="contact-headline">
                LET'S CONNECT &amp; BUILD.
              </h3>
              
              <div className="contact-availability-card neu-inset">
                <div className="availability-indicator">
                  <span className="availability-dot" aria-hidden="true" />
                  <span className="availability-title">OPPORTUNITY STATUS</span>
                </div>
                <p className="availability-text">
                  {personalInfo.availabilityStatement}
                </p>
              </div>

              <div className="contact-location-info">
                <MapPin size={16} aria-hidden="true" className="location-icon" />
                <span>{personalInfo.location}</span>
              </div>
            </div>

            {/* Right Column: Direct Channels & Links */}
            <div className="contact-right-col">
              <div className="contact-channels-card neu-raised">
                <h4 className="channels-title">VERIFIED CONTACT CHANNELS</h4>

                <div className="contact-channels-list">
                  {contactLinks.map((channel) => {
                    const IconComponent = channel.icon;

                    return (
                      <a
                        key={channel.name}
                        href={channel.href}
                        target={channel.isExternal ? '_blank' : undefined}
                        rel={channel.isExternal ? 'noopener noreferrer' : undefined}
                        className="contact-channel-row"
                        aria-label={`${channel.name}: ${channel.value} ${channel.isExternal ? '(opens in new tab)' : ''}`}
                      >
                        <div className="channel-info-left">
                          <IconComponent size={18} className="channel-icon" aria-hidden="true" />
                          <div className="channel-texts">
                            <span className="channel-name">{channel.name}</span>
                            <span className="channel-val">{channel.value}</span>
                          </div>
                        </div>

                        <ArrowUpRight size={18} className="channel-arrow" aria-hidden="true" />
                      </a>
                    );
                  })}
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
