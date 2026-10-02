import React from 'react';
import { Link } from 'react-router-dom';
import { usps, targets } from '../../data/about';
import { useADGEffects } from '../../utils/useEffects';

export default function About() {
  useADGEffects([]);

  return (
    <main style={{ paddingTop: 'clamp(110px,12vw,144px)' }}>
      <section
        id="about"
        data-screen-label="About"
        style={{ padding: 'clamp(20px,4vw,40px) clamp(18px,4vw,40px) clamp(60px,8vw,100px)' }}
      >
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div
            data-reveal="1"
            style={{
              opacity: 0,
              transform: 'translateY(22px)',
              transition: 'opacity .7s cubic-bezier(.16,.84,.44,1),transform .7s cubic-bezier(.16,.84,.44,1)',
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
              marginBottom: '22px',
              flexWrap: 'wrap'
            }}
          >
            <span
              style={{
                font: "400 11px/1 'IBM Plex Mono',monospace",
                color: 'var(--adg-accent,#4fd0dc)',
                letterSpacing: '.16em'
              }}
            >
              01 / ABOUT ADG
            </span>
            <span style={{ font: "400 11px/1 'IBM Plex Mono',monospace", color: '#5d6b88', letterSpacing: '.1em' }}>
              // why another committee exists
            </span>
            <span
              style={{
                flex: 1,
                minWidth: '40px',
                height: '1px',
                background: 'linear-gradient(90deg,rgba(241,237,227,.18),transparent)'
              }}
            />
          </div>

          <h1
            data-reveal="1"
            style={{
              opacity: 0,
              transform: 'translateY(22px)',
              transition: 'opacity .7s cubic-bezier(.16,.84,.44,1),transform .7s cubic-bezier(.16,.84,.44,1)',
              margin: 0,
              font: "600 clamp(34px,5vw,64px)/1.04 'Space Grotesk',sans-serif",
              letterSpacing: '-.03em',
              maxWidth: '22ch',
              color: '#f1ede3'
            }}
          >
            A committee is a habit, not a calendar.
          </h1>

          <p
            data-reveal="1"
            style={{
              opacity: 0,
              transform: 'translateY(22px)',
              transition: 'opacity .7s cubic-bezier(.16,.84,.44,1),transform .7s cubic-bezier(.16,.84,.44,1)',
              margin: '24px 0 0',
              maxWidth: '54ch',
              font: "400 clamp(16px,1.6vw,18px)/1.7 'IBM Plex Sans',sans-serif",
              color: '#9aa7c0'
            }}
          >
            Most college clubs are an annual festival wrapped in eleven months of hibernation. ADG is designed as a
            weekly drumbeat: small, frequent, project-led sessions where showing up with a laptop is the only
            requirement that matters.
          </p>

          <div
            style={{
              marginTop: 'clamp(46px,6vw,76px)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))',
              gap: '20px'
            }}
          >
            {usps.map((u, i) => (
              <article
                key={i}
                data-reveal="1"
                data-tilt="1"
                style={{
                  opacity: 0,
                  transform: 'translateY(22px)',
                  transition:
                    'opacity .7s cubic-bezier(.16,.84,.44,1),transform .7s cubic-bezier(.16,.84,.44,1),border-color .35s ease,box-shadow .35s ease,background .35s ease',
                  background: '#111c33',
                  border: '1px solid rgba(241,237,227,.1)',
                  borderRadius: '20px',
                  padding: '28px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--adg-accent,#4fd0dc)';
                  e.currentTarget.style.boxShadow = '0 26px 50px -34px rgba(0,0,0,.95)';
                  e.currentTarget.style.background = '#131f39';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(241,237,227,.1)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.background = '#111c33';
                }}
              >
                <div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '16px'
                    }}
                  >
                    <span
                      style={{
                        font: "400 11px/1 'IBM Plex Mono',monospace",
                        color: 'var(--adg-accent,#4fd0dc)',
                        letterSpacing: '.14em'
                      }}
                    >
                      {u.tag}
                    </span>
                    <span
                      style={{
                        font: "600 34px/1 'Space Grotesk',sans-serif",
                        color: 'rgba(241,237,227,.1)'
                      }}
                    >
                      {u.num}
                    </span>
                  </div>
                  <h3
                    style={{
                      margin: 0,
                      font: "600 21px/1.24 'Space Grotesk',sans-serif",
                      letterSpacing: '-.02em',
                      color: '#f1ede3'
                    }}
                  >
                    {u.title}
                  </h3>
                  <p style={{ margin: '13px 0 0', font: "400 15px/1.66 'IBM Plex Sans',sans-serif", color: '#9aa7c0' }}>
                    {u.body}
                  </p>
                </div>
                <span
                  style={{
                    display: 'inline-block',
                    marginTop: '18px',
                    padding: '6px 11px',
                    borderRadius: '8px',
                    background: 'rgba(241,237,227,.05)',
                    font: "400 11px/1.4 'IBM Plex Mono',monospace",
                    color: '#71809d'
                  }}
                >
                  {u.aside}
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section data-screen-label="Stats" style={{ padding: '0 clamp(18px,4vw,40px) clamp(70px,8vw,112px)' }}>
        <div
          data-reveal="1"
          data-counters="1"
          style={{
            opacity: 0,
            transform: 'translateY(22px)',
            transition: 'opacity .7s cubic-bezier(.16,.84,.44,1),transform .7s cubic-bezier(.16,.84,.44,1)',
            maxWidth: '1240px',
            margin: '0 auto',
            background: 'linear-gradient(135deg,#16223c,#111a30)',
            border: '1px solid rgba(241,237,227,.1)',
            borderRadius: '24px',
            padding: 'clamp(30px,4vw,50px)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))',
            gap: '32px'
          }}
        >
          <span
            style={{
              gridColumn: '1/-1',
              font: "400 10px/1 'IBM Plex Mono',monospace",
              color: '#71809d',
              letterSpacing: '.14em'
            }}
          >
            YEAR 1 TARGETS — MEASURED AT CLOSE, NOT CLAIMED UP FRONT
          </span>

          {targets.map((t, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '9px' }}>
              <span
                style={{
                  font: "600 clamp(36px,4.4vw,56px)/1 'Space Grotesk',sans-serif",
                  color: t.highlight ? 'var(--adg-accent,#4fd0dc)' : '#f1ede3',
                  letterSpacing: '-.03em'
                }}
              >
                <span data-count={t.count} data-suffix={t.suffix}>
                  0
                </span>
              </span>
              <span
                style={{
                  font: "400 10.5px/1.5 'IBM Plex Mono',monospace",
                  color: '#9aa7c0',
                  letterSpacing: '.12em',
                  whiteSpace: 'pre-line'
                }}
              >
                {t.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Box */}
      <section style={{ padding: '0 clamp(18px,4vw,40px) clamp(60px,8vw,90px)' }}>
        <div
          data-reveal="1"
          style={{
            opacity: 0,
            transform: 'translateY(22px)',
            transition: 'opacity .7s cubic-bezier(.16,.84,.44,1),transform .7s cubic-bezier(.16,.84,.44,1)',
            maxWidth: '1240px',
            margin: '0 auto',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '20px',
            padding: '32px clamp(24px,4vw,40px)',
            background: '#121d35',
            border: '1px solid rgba(241,237,227,.1)',
            borderRadius: '20px'
          }}
        >
          <div>
            <h3 style={{ margin: 0, font: "600 22px/1.2 'Space Grotesk',sans-serif", color: '#f1ede3' }}>
              Check our mission or get involved
            </h3>
            <p style={{ margin: '6px 0 0', font: "400 14.5px/1.6 'IBM Plex Sans',sans-serif", color: '#9aa7c0' }}>
              See our vision statement or explore the upcoming workshop calendar.
            </p>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            <Link
              to="/mission"
              style={{
                padding: '13px 24px',
                border: '1px solid rgba(241,237,227,.2)',
                borderRadius: '999px',
                color: '#f1ede3',
                font: "500 12.5px/1 'IBM Plex Mono',monospace",
                letterSpacing: '.05em',
                transition: 'border-color .3s ease'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#f1ede3')}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(241,237,227,.2)')}
            >
              READ MISSION →
            </Link>
            <Link
              to="/events"
              style={{
                padding: '13px 24px',
                borderRadius: '999px',
                background: 'var(--adg-accent,#4fd0dc)',
                color: '#0c1426',
                font: "500 12.5px/1 'IBM Plex Mono',monospace",
                letterSpacing: '.05em'
              }}
            >
              SEE EVENTS →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
