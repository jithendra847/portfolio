import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { useCounter } from '../hooks/useCounter';
import { competitiveProgramming } from '../data/portfolioData';

export const CompetitiveProgramming = () => {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });
  const { codeforces, geeksforgeeks } = competitiveProgramming;

  const animatedCodeforcesRating = useCounter(codeforces.rating, 0, 1500, inView);
  const animatedGFGProblems = useCounter(geeksforgeeks.problemsSolved, 0, 1500, inView);
  const animatedGFGRank = useCounter(geeksforgeeks.institutionRank, 0, 1500, inView);

  return (
    <section id="cp" className="section" ref={ref}>
      <div className="container">
        <header className="section-header">
          <span className="section-number">05</span>
          <h2 className="section-title">PROBLEM SOLVING</h2>
        </header>

        <div className="section-content">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem', marginTop: '2rem' }}>
            
            {/* Codeforces Stat */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(4rem, 8vw, 6rem)', fontWeight: 900, lineHeight: 1, marginBottom: '0.5rem', color: 'var(--text)' }}>
                  {animatedCodeforcesRating}<span style={{ color: 'var(--accent)' }}>.</span>
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', fontWeight: 800, color: 'var(--muted)', textTransform: 'uppercase', marginBottom: '0.25rem', letterSpacing: '0.05em' }}>
                  {codeforces.platform}
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.2rem', fontWeight: 700, color: 'var(--text)', textTransform: 'uppercase' }}>
                  {codeforces.label}
                </div>
              </div>
              {codeforces.profileUrl && (
                <a
                  href={codeforces.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent)', marginTop: '2.5rem', textDecoration: 'none', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', fontWeight: 800, transition: 'color var(--transition-fast)' }}
                  aria-label="Codeforces Profile (opens in new tab)"
                  onMouseOver={(e) => e.currentTarget.style.color = 'var(--text)'}
                  onMouseOut={(e) => e.currentTarget.style.color = 'var(--accent)'}
                >
                  <span>VIEW PROFILE</span>
                  <ArrowUpRight size={16} />
                </a>
              )}
            </div>

            {/* GFG Problems Solved */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(4rem, 8vw, 6rem)', fontWeight: 900, lineHeight: 1, marginBottom: '0.5rem', color: 'var(--accent)' }}>
                  {animatedGFGProblems}
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', fontWeight: 800, color: 'var(--muted)', textTransform: 'uppercase', marginBottom: '0.25rem', letterSpacing: '0.05em' }}>
                  {geeksforgeeks.platform}
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.2rem', fontWeight: 700, color: 'var(--text)', textTransform: 'uppercase' }}>
                  PROBLEMS SOLVED
                </div>
              </div>
              <a
                href={geeksforgeeks.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent)', marginTop: '2.5rem', textDecoration: 'none', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', fontWeight: 800, transition: 'color var(--transition-fast)' }}
                aria-label="GeeksforGeeks Profile (opens in new tab)"
                onMouseOver={(e) => e.currentTarget.style.color = 'var(--text)'}
                onMouseOut={(e) => e.currentTarget.style.color = 'var(--accent)'}
              >
                <span>VIEW PROFILE</span>
                <ArrowUpRight size={16} />
              </a>
            </div>

            {/* GFG Institution Rank */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(4rem, 8vw, 6rem)', fontWeight: 900, lineHeight: 1, marginBottom: '0.5rem', color: 'var(--text)' }}>
                  <span style={{ color: 'var(--accent)' }}>#</span>{animatedGFGRank}
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', fontWeight: 800, color: 'var(--muted)', textTransform: 'uppercase', marginBottom: '0.25rem', letterSpacing: '0.05em' }}>
                  INSTITUTION RANK
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.2rem', fontWeight: 700, color: 'var(--text)', textTransform: 'uppercase' }}>
                  NIT SRINAGAR
                </div>
              </div>
              <a
                href={geeksforgeeks.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent)', marginTop: '2.5rem', textDecoration: 'none', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', fontWeight: 800, transition: 'color var(--transition-fast)' }}
                aria-label="GeeksforGeeks Profile (opens in new tab)"
                onMouseOver={(e) => e.currentTarget.style.color = 'var(--text)'}
                onMouseOut={(e) => e.currentTarget.style.color = 'var(--accent)'}
              >
                <span>VIEW PROFILE</span>
                <ArrowUpRight size={16} />
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
