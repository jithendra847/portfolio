import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown } from 'lucide-react';

export const Hero = () => {
  const sectionRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Media query to check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    const handleMouseMove = (e) => {
      if (prefersReducedMotion.matches || window.innerWidth < 768) return;
      if (!sectionRef.current) return;

      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      // Calculate relative position (-1 to 1)
      const xPos = (clientX / innerWidth) * 2 - 1;
      const yPos = (clientY / innerHeight) * 2 - 1;

      // Max offset 25px
      const offsetX = xPos * 25;
      const offsetY = yPos * 25;

      sectionRef.current.style.setProperty('--mouse-x', `${offsetX}px`);
      sectionRef.current.style.setProperty('--mouse-y', `${offsetY}px`);
    };

    const handleScroll = () => {
      if (prefersReducedMotion.matches) return;
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section 
      id="home" 
      className="section hero-heavy" 
      ref={sectionRef}
      style={{ paddingBlock: 'clamp(6rem, 12vw, 10rem)', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
    >
      <div className="container">
        
        {/* Step 1: Intro & Status */}
        <div className="hero-reveal" style={{ animationDelay: '100ms', display: 'flex', alignItems: 'center', gap: '2rem', marginBottom: '3rem' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', fontWeight: 800, color: 'var(--accent)', letterSpacing: '0.08em' }}>
            01 / INTRO
          </div>
          
          <div className="status-indicator-container">
            <div className="status-dot"></div>
            <span>CURRENTLY BUILDING</span>
            <div className="status-tooltip">
              Currently building projects and learning new technologies.
            </div>
          </div>
        </div>

        {/* Step 2 & 3: Name Heading */}
        <div className="hero-title-wrapper" style={{ marginBottom: '3rem' }}>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(4.5rem, 12vw, 10rem)', fontWeight: 900, lineHeight: 0.85, letterSpacing: '-0.06em', margin: 0, color: 'var(--text)', textTransform: 'uppercase' }}>
            <div className="hero-reveal hero-highlight" style={{ animationDelay: '200ms' }}>YATAM</div>
            <div className="hero-reveal hero-highlight" style={{ animationDelay: '300ms' }}>JITHENDRA</div>
          </h1>
        </div>

        {/* Step 4: Role */}
        <div className="hero-reveal" style={{ animationDelay: '400ms', marginBottom: '2.5rem' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.1rem', fontWeight: 800, color: 'var(--muted)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
            INFORMATION TECHNOLOGY<br />
            NIT SRINAGAR
          </div>
        </div>

        {/* Step 5: Description with Interactive Word */}
        <div className="hero-reveal" style={{ animationDelay: '500ms', marginBottom: '4rem' }}>
          <p style={{ fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', color: 'var(--text)', maxWidth: '500px', lineHeight: 1.6, margin: 0 }}>
            I build projects to learn,<br/>
            <span className="hero-interactive-word">experiment</span> and get better<br/>
            at software development.
          </p>
        </div>

        {/* Parallax Metadata & Scroll Arrow Container */}
        <div style={{ transform: `translateY(${scrollY * 0.15}px)`, transition: 'transform 0.1s linear' }}>
          
          {/* Metadata Block */}
          <div className="hero-reveal" style={{ animationDelay: '600ms', display: 'flex', gap: '2rem', flexWrap: 'wrap', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', fontWeight: 700, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4rem' }}>
            <div>NARSAPUR · INDIA</div>
            <div>2024 — 2028</div>
            <div>B.TECH — IT</div>
            <div>CGPA 7.53</div>
          </div>

          {/* Step 8: Scroll Indicator */}
          <div className="hero-reveal scroll-arrow-container" style={{ animationDelay: '700ms' }}>
            <div>SCROLL TO EXPLORE</div>
            <ArrowDown size={20} className="scroll-arrow" />
          </div>
          
        </div>

      </div>
    </section>
  );
};

export default Hero;
