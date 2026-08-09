import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{ borderTop: '1px solid var(--border)', padding: '6rem 0' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '4rem', '@media (minWidth: 768px)': { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' } }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 900, color: 'var(--text)' }}>
            YJ
          </div>

          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1rem', fontWeight: 800, color: 'var(--text)', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
              YATAM JITHENDRA
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--muted)', textTransform: 'uppercase' }}>
              B.TECH — INFORMATION TECHNOLOGY
            </div>
          </div>

          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--muted)', textTransform: 'uppercase' }}>
            NIT SRINAGAR
          </div>

          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--accent)' }}>
            2026
          </div>
        </div>

        <button
          onClick={scrollToTop}
          style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', fontWeight: 700, color: 'var(--text)', background: 'transparent', border: 'none', cursor: 'pointer', padding: 0, textTransform: 'uppercase' }}
          aria-label="Scroll back to top of page"
        >
          <span>BACK TO TOP</span>
          <ArrowUp size={16} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;

