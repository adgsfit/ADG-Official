import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function ScrollToTopOnNavigate() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    const isReduced = !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    window.scrollTo({ top: 0, behavior: isReduced ? 'auto' : 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      style={{
        position: 'fixed',
        right: 'clamp(16px,3vw,28px)',
        bottom: 'clamp(16px,3vw,28px)',
        zIndex: 70,
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        border: '1px solid rgba(241,237,227,.18)',
        background: 'rgba(18,29,53,.96)',
        color: '#f1ede3',
        fontSize: '16px',
        cursor: 'pointer',
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? 'auto' : 'none',
        transform: visible ? 'translateY(0)' : 'translateY(12px)',
        transition:
          'opacity .35s ease, transform .35s ease, background .3s ease, border-color .3s ease, color .3s ease',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = 'var(--adg-accent,#4fd0dc)';
        e.currentTarget.style.borderColor = 'var(--adg-accent,#4fd0dc)';
        e.currentTarget.style.color = '#0c1426';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'rgba(18,29,53,.96)';
        e.currentTarget.style.borderColor = 'rgba(241,237,227,.18)';
        e.currentTarget.style.color = '#f1ede3';
      }}
    >
      ↑
    </button>
  );
}
