import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, FileText } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('HOME');
  const drawerRef = useRef(null);
  const menuToggleRef = useRef(null);

  const links = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT', href: '#about' },
    { name: 'SKILLS', href: '#skills' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'PROBLEM SOLVING', href: '#cp' },
    { name: 'CONTACT', href: '#contact' },
  ];

  // Scroll listener for progress bar, navbar shadow, and active section
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollTop = window.scrollY || document.documentElement.scrollTop;
          const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
          const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
          setScrollProgress(progress);
          setScrolled(scrollTop > 30);

          const sectionElements = links
            .map(l => ({ name: l.name, el: document.querySelector(l.href) }))
            .filter(item => item.el !== null);

          const scrollPos = scrollTop + 250;
          for (let i = sectionElements.length - 1; i >= 0; i--) {
            if (sectionElements[i].el.offsetTop <= scrollPos) {
              setActiveSection(sectionElements[i].name);
              break;
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard accessibility for mobile menu (Escape to close)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileOpen) {
        setMobileOpen(false);
        if (menuToggleRef.current) {
          menuToggleRef.current.focus();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileOpen]);

  // Click outside to close mobile drawer
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        mobileOpen &&
        drawerRef.current &&
        !drawerRef.current.contains(e.target) &&
        menuToggleRef.current &&
        !menuToggleRef.current.contains(e.target)
      ) {
        setMobileOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [mobileOpen]);

  return (
    <>
      <div 
        className="scroll-progress-bar" 
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true" 
      />
      <header className={`header-nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="container header-container">
          <a href="#home" className="nav-logo" aria-label="Yatam Jithendra Portfolio Home">
            YJ<span className="accent">.</span>
          </a>

          <nav className="desktop-nav" aria-label="Primary Navigation">
            <ul className="header-links">
              {links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`header-link ${activeSection === link.name ? 'active' : ''}`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="header-actions">
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-resume-btn"
              aria-label="View Resume (opens in new tab)"
            >
              <FileText size={14} aria-hidden="true" />
              <span>RESUME</span>
            </a>

            <button
              ref={menuToggleRef}
              className="mobile-toggle-btn"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label={mobileOpen ? "Close Navigation Menu" : "Open Navigation Menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation-drawer"
              type="button"
            >
              {mobileOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <div 
          id="mobile-navigation-drawer"
          ref={drawerRef}
          className={`mobile-menu-drawer ${mobileOpen ? 'open' : ''}`}
          aria-hidden={!mobileOpen}
        >
          <nav aria-label="Mobile Navigation">
            <ul className="mobile-menu-list">
              {links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`mobile-menu-link ${activeSection === link.name ? 'active' : ''}`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li className="mobile-menu-divider" />
              <li>
                <a
                  href={personalInfo.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mobile-resume-link"
                  onClick={() => setMobileOpen(false)}
                >
                  <FileText size={16} aria-hidden="true" />
                  <span>VIEW RESUME</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
