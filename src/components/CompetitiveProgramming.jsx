import React from 'react';
import { ArrowUpRight, Terminal, Award, Code2 } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { useCounter } from '../hooks/useCounter';
import { competitiveProgramming } from '../data/portfolioData';

export const CompetitiveProgramming = () => {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });
  const { codeforces, geeksforgeeks } = competitiveProgramming;

  const animatedCodeforcesRating = useCounter(codeforces.rating, 0, 1000, inView);
  const animatedGFGProblems = useCounter(geeksforgeeks.problemsSolved, 0, 1000, inView);
  const animatedGFGRank = useCounter(geeksforgeeks.institutionRank, 0, 1000, inView);

  return (
    <section id="cp" className="section" ref={ref}>
      <div className="container">
        <header className="section-header">
          <span className="section-number">05</span>
          <h2 className="section-title">PROBLEM SOLVING</h2>
        </header>

        <div className={`section-content cp-section-content ${inView ? 'is-visible' : ''}`}>
          <div className="cp-intro-statement">
            <p className="cp-subtitle">
              PRACTICING DATA STRUCTURES &amp; ALGORITHMS IN C++ ACROSS COMPETITIVE PROGRAMMING PLATFORMS.
            </p>
          </div>

          <div className="cp-stats-grid">
            
            {/* Card 1: Codeforces */}
            <div className="cp-stat-card neu-raised">
              <div className="cp-card-top">
                <div className="cp-platform-tag">
                  <Terminal size={14} aria-hidden="true" />
                  <span>CODEFORCES</span>
                </div>
                <div className="cp-stat-large">
                  {animatedCodeforcesRating}
                  <span className="accent">.</span>
                </div>
                <div className="cp-metric-label">CURRENT CONTEST RATING</div>
              </div>

              <div className="cp-card-bottom">
                <p className="cp-card-desc">
                  Active participation in Div. 2 / Div. 3 rounds focusing on time complexity, greedy heuristics, and number theory.
                </p>
                <a
                  href={codeforces.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cp-profile-link"
                  aria-label="View Yatam Jithendra Codeforces profile (opens in new tab)"
                >
                  <span>VIEW CODEFORCES PROFILE</span>
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* Card 2: GeeksforGeeks Problems */}
            <div className="cp-stat-card neu-raised">
              <div className="cp-card-top">
                <div className="cp-platform-tag">
                  <Code2 size={14} aria-hidden="true" />
                  <span>GEEKSFORGEEKS</span>
                </div>
                <div className="cp-stat-large accent-num">
                  {animatedGFGProblems}
                  <span>+</span>
                </div>
                <div className="cp-metric-label">PROBLEMS SOLVED</div>
              </div>

              <div className="cp-card-bottom">
                <p className="cp-card-desc">
                  Consistent practice covering arrays, linked lists, trees, graphs, and dynamic programming paradigms.
                </p>
                <a
                  href={geeksforgeeks.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cp-profile-link"
                  aria-label="View Yatam Jithendra GeeksforGeeks profile (opens in new tab)"
                >
                  <span>VIEW GFG PROFILE</span>
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* Card 3: GeeksforGeeks Institution Rank */}
            <div className="cp-stat-card neu-raised">
              <div className="cp-card-top">
                <div className="cp-platform-tag">
                  <Award size={14} aria-hidden="true" />
                  <span>NIT SRINAGAR</span>
                </div>
                <div className="cp-stat-large">
                  <span className="accent">#</span>
                  {animatedGFGRank}
                </div>
                <div className="cp-metric-label">INSTITUTION RANK</div>
              </div>

              <div className="cp-card-bottom">
                <p className="cp-card-desc">
                  Ranked within NIT Srinagar's student community on GeeksforGeeks problem solving scoreboard.
                </p>
                <a
                  href={geeksforgeeks.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cp-profile-link"
                  aria-label="View Yatam Jithendra GeeksforGeeks profile ranking (opens in new tab)"
                >
                  <span>VIEW RANKING</span>
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CompetitiveProgramming;
