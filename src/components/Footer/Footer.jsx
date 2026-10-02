import React from 'react';
import { Link } from 'react-router-dom';
import { navLinks, socials, programmeLinks } from '../../data/navigation';

export default function Footer() {
  return (
    <footer
      id="contact"
      data-screen-label="Footer"
      style={{
        borderTop: '1px solid rgba(241,237,227,.1)',
        background: '#0a1226',
        padding: 'clamp(58px,7vw,88px) clamp(18px,4vw,40px) 26px',
        marginTop: '40px'
      }}
    >
      <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(208px,1fr))',
            gap: 'clamp(28px,4vw,54px)'
          }}
        >
          {/* Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <img
                src="/assets/adg-badge.png"
                alt="ADG"
                style={{ width: '44px', height: '44px', borderRadius: '12px', display: 'block' }}
              />
              <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
                <span style={{ font: "700 18px/1 'Space Grotesk',sans-serif", color: '#f1ede3' }}>ADG</span>
                <span
                  style={{
                    font: "400 9.5px/1.4 'IBM Plex Mono',monospace",
                    color: '#9aa7c0',
                    letterSpacing: '.13em',
                    marginTop: '3px'
                  }}
                >
                  AI DEVELOPERS GROUP
                </span>
              </span>
            </div>
            <p
              style={{
                margin: '19px 0 0',
                maxWidth: '30ch',
                font: "400 14px/1.66 'IBM Plex Sans',sans-serif",
                color: '#8e9ab4'
              }}
            >
              Student-run AI &amp; Machine Learning committee, Department of AIML, St. Francis Institute of Technology.
            </p>
            <div style={{ display: 'flex', gap: '8px', marginTop: '20px' }}>
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="adg-social-btn"
                  style={{
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid rgba(241,237,227,.16)',
                    borderRadius: '11px',
                    color: '#c3cbdd',
                    font: "500 10px/1 'IBM Plex Mono',monospace",
                    letterSpacing: '.04em'
                  }}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4
              style={{
                margin: '0 0 17px',
                font: "400 10.5px/1 'IBM Plex Mono',monospace",
                color: '#71809d',
                letterSpacing: '.14em'
              }}
            >
              EXPLORE
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {navLinks.map((l) => (
                <Link
                  key={l.id}
                  to={l.href}
                  style={{
                    font: "400 14px/1.4 'IBM Plex Sans',sans-serif",
                    color: '#c3cbdd',
                    transition: 'color .26s ease, padding-left .26s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--adg-accent,#4fd0dc)';
                    e.currentTarget.style.paddingLeft = '5px';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#c3cbdd';
                    e.currentTarget.style.paddingLeft = '0px';
                  }}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Programme */}
          <div>
            <h4
              style={{
                margin: '0 0 17px',
                font: "400 10.5px/1 'IBM Plex Mono',monospace",
                color: '#71809d',
                letterSpacing: '.14em'
              }}
            >
              PROGRAMME
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {programmeLinks.map((l, i) => (
                <Link
                  key={i}
                  to={l.href}
                  style={{
                    font: "400 14px/1.4 'IBM Plex Sans',sans-serif",
                    color: '#c3cbdd',
                    transition: 'color .26s ease, padding-left .26s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--adg-accent,#4fd0dc)';
                    e.currentTarget.style.paddingLeft = '5px';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#c3cbdd';
                    e.currentTarget.style.paddingLeft = '0px';
                  }}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Find Us */}
          <div>
            <h4
              style={{
                margin: '0 0 17px',
                font: "400 10.5px/1 'IBM Plex Mono',monospace",
                color: '#71809d',
                letterSpacing: '.14em'
              }}
            >
              FIND US
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '13px' }}>
              <span style={{ font: "400 14px/1.6 'IBM Plex Sans',sans-serif", color: '#c3cbdd' }}>
                Department of AIML
                <br />
                St. Francis Institute of Technology
                <br />
                Mt. Poinsur, S.V.P. Road, Borivli (W)
                <br />
                Mumbai 400103
              </span>
              <a
                href="mailto:adg@sfit.ac.in"
                style={{
                  font: "400 13.5px/1.4 'IBM Plex Mono',monospace",
                  color: 'var(--adg-accent,#4fd0dc)'
                }}
              >
                adg@sfit.ac.in
              </a>
              <span
                style={{
                  font: "400 11.5px/1.5 'IBM Plex Mono',monospace",
                  color: '#71809d',
                  letterSpacing: '.05em'
                }}
              >
                FACULTY COORDINATOR · MS. PRIYANKA PATIL
              </span>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div
          style={{
            marginTop: 'clamp(40px,5vw,60px)',
            paddingTop: '21px',
            borderTop: '1px solid rgba(241,237,227,.09)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px'
          }}
        >
          <span
            style={{
              font: "400 11px/1.5 'IBM Plex Mono',monospace",
              color: '#71809d',
              letterSpacing: '.05em'
            }}
          >
            © 2026 AI DEVELOPERS GROUP · SFIT · EVERY NAME AND NUMBER HERE IS A PLACEHOLDER
          </span>
          <span
            style={{
              font: "400 11px/1.5 'IBM Plex Mono',monospace",
              color: '#71809d',
              letterSpacing: '.05em'
            }}
          >
            BUILT BY THE ADG WEB TEAM · DEPLOYED AT 2:04 AM
          </span>
        </div>
      </div>
    </footer>
  );
}
