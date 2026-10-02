import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navLinks } from '../../data/navigation';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 900;
      setIsMobile(mobile);
      if (!mobile) setNavOpen(false);
    };

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setNavOpen(false);
    };

    handleResize();
    handleScroll();

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Close nav on route change
  useEffect(() => {
    setNavOpen(false);
  }, [location.pathname]);

  const toggleNav = () => setNavOpen((prev) => !prev);
  const closeNav = () => setNavOpen(false);

  return (
    <>
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 90 }}>
        <header
          style={{
            borderBottom: scrolled ? '1px solid rgba(241,237,227,.1)' : '1px solid transparent',
            background: scrolled ? 'rgba(10,17,33,.95)' : 'transparent',
            paddingTop: scrolled ? '10px' : '18px',
            paddingBottom: scrolled ? '10px' : '18px',
            boxShadow: scrolled ? '0 14px 34px -26px rgba(0,0,0,.95)' : 'none',
            transition: 'background .35s ease, padding .35s ease, box-shadow .35s ease, border-color .35s ease'
          }}
        >
          <div
            style={{
              maxWidth: '1240px',
              margin: '0 auto',
              padding: '0 clamp(18px,4vw,40px)',
              display: 'flex',
              alignItems: 'center',
              gap: '22px'
            }}
          >
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: 'none' }}>
              <img
                src="/assets/adg-badge.png"
                alt="ADG"
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '11px',
                  display: 'block',
                  transition: 'transform .5s cubic-bezier(.16,.84,.44,1)'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'rotate(-8deg) scale(1.06)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'none')}
              />
              <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.05 }}>
                <span
                  style={{
                    font: "700 19px/1 'Space Grotesk',sans-serif",
                    color: '#f1ede3',
                    letterSpacing: '-.01em'
                  }}
                >
                  ADG
                </span>
                <span
                  style={{
                    font: "400 9.5px/1.4 'IBM Plex Mono',monospace",
                    color: '#9aa7c0',
                    letterSpacing: '.14em',
                    marginTop: '3px'
                  }}
                >
                  AI DEVELOPERS GROUP
                </span>
              </span>
            </Link>

            <div style={{ flex: 1 }}></div>

            {!isMobile ? (
              <>
                <nav style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
                  {navLinks.map((l) => {
                    const isActive = location.pathname === l.href;
                    return (
                      <Link
                        key={l.id}
                        to={l.href}
                        className={`adg-nav-link ${isActive ? 'active' : ''}`}
                        style={{
                          position: 'relative',
                          padding: '9px 12px',
                          font: "500 13.5px/1 'IBM Plex Sans',sans-serif",
                          color: isActive ? 'var(--adg-accent, #4fd0dc)' : '#9aa7c0'
                        }}
                      >
                        {l.label}
                        <span
                          data-underline="1"
                          style={{
                            transform: isActive ? 'scaleX(1)' : 'scaleX(0)'
                          }}
                        />
                      </Link>
                    );
                  })}
                </nav>

                <Link
                  to="/join"
                  className="adg-magnet-btn"
                  style={{
                    flex: 'none',
                    padding: '11px 20px',
                    border: '1px solid var(--adg-accent,#4fd0dc)',
                    borderRadius: '999px',
                    color: 'var(--adg-accent,#4fd0dc)',
                    font: "500 12.5px/1 'IBM Plex Mono',monospace",
                    letterSpacing: '.06em'
                  }}
                >
                  <span data-fill="1" />
                  <span style={{ position: 'relative' }}>JOIN ADG</span>
                </Link>
              </>
            ) : (
              <button
                onClick={toggleNav}
                aria-label="Menu"
                style={{
                  width: '46px',
                  height: '46px',
                  flex: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '5px',
                  background: 'rgba(241,237,227,.05)',
                  border: '1px solid rgba(241,237,227,.14)',
                  borderRadius: '12px',
                  cursor: 'pointer'
                }}
              >
                <span style={{ width: '18px', height: '1.6px', background: '#f1ede3', display: 'block' }}></span>
                <span style={{ width: '18px', height: '1.6px', background: '#f1ede3', display: 'block' }}></span>
                <span
                  style={{ width: '11px', height: '1.6px', background: 'var(--adg-accent,#4fd0dc)', display: 'block' }}
                ></span>
              </button>
            )}
          </div>
        </header>
      </div>

      {/* Mobile Drawer */}
      {navOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 95,
            background: 'rgba(8,13,25,.97)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            animation: 'adgFade .22s ease',
            display: 'flex',
            flexDirection: 'column',
            padding: '22px clamp(18px,6vw,40px)',
            overflow: 'auto'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span
              style={{
                font: "400 10px/1 'IBM Plex Mono',monospace",
                color: '#9aa7c0',
                letterSpacing: '.18em'
              }}
            >
              MENU — PICK A PAGE
            </span>
            <button
              onClick={closeNav}
              aria-label="Close"
              style={{
                width: '44px',
                height: '44px',
                background: 'none',
                border: '1px solid rgba(241,237,227,.16)',
                borderRadius: '12px',
                color: '#f1ede3',
                fontSize: '18px',
                cursor: 'pointer'
              }}
            >
              ✕
            </button>
          </div>
          <nav style={{ marginTop: '30px', display: 'flex', flexDirection: 'column' }}>
            {navLinks.map((l) => (
              <Link
                key={l.id}
                to={l.href}
                onClick={closeNav}
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: '14px',
                  padding: '15px 4px',
                  borderBottom: '1px solid rgba(241,237,227,.08)',
                  color: '#f1ede3',
                  font: "600 25px/1.1 'Space Grotesk',sans-serif",
                  letterSpacing: '-.02em',
                  transition: 'color .2s ease'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--adg-accent,#4fd0dc)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#f1ede3')}
              >
                <span
                  style={{
                    font: "400 11px/1 'IBM Plex Mono',monospace",
                    color: 'var(--adg-accent,#4fd0dc)',
                    letterSpacing: '.1em'
                  }}
                >
                  {l.num}
                </span>
                {l.label}
              </Link>
            ))}
          </nav>
          <Link
            to="/join"
            onClick={closeNav}
            style={{
              marginTop: '26px',
              textAlign: 'center',
              padding: '17px',
              borderRadius: '999px',
              background: 'var(--adg-accent,#4fd0dc)',
              color: '#0c1426',
              font: "500 13px/1 'IBM Plex Mono',monospace",
              letterSpacing: '.08em'
            }}
          >
            JOIN ADG →
          </Link>
        </div>
      )}
    </>
  );
}
