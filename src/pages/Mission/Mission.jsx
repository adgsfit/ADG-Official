import React from 'react';
import { Link } from 'react-router-dom';
import { vision, missions, objectives } from '../../data/mission';
import { useADGEffects } from '../../utils/useEffects';

export default function Mission() {
  useADGEffects([]);

  return (
    <main style={{ paddingTop: 'clamp(110px,12vw,144px)' }}>
      <section
        id="mission"
        data-screen-label="Mission"
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
              02 / VISION, MISSION &amp; OBJECTIVES
            </span>
            <span style={{ font: "400 11px/1 'IBM Plex Mono',monospace", color: '#5d6b88', letterSpacing: '.1em' }}>
              // the serious page, kept short
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

          <blockquote
            data-reveal="1"
            style={{
              opacity: 0,
              transform: 'translateY(22px)',
              transition: 'opacity .7s cubic-bezier(.16,.84,.44,1),transform .7s cubic-bezier(.16,.84,.44,1)',
              margin: 0,
              paddingLeft: 'clamp(18px,3vw,34px)',
              borderLeft: '2px solid var(--adg-accent,#4fd0dc)',
              maxWidth: '38ch',
              font: "500 clamp(22px,2.8vw,34px)/1.34 'Space Grotesk',sans-serif",
              letterSpacing: '-.02em',
              color: '#f1ede3'
            }}
          >
            {vision.quote}
            <footer
              style={{
                marginTop: '18px',
                font: "400 11px/1 'IBM Plex Mono',monospace",
                color: '#9aa7c0',
                letterSpacing: '.14em'
              }}
            >
              {vision.attribution}
            </footer>
          </blockquote>

          <div
            style={{
              marginTop: 'clamp(46px,6vw,78px)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))',
              gap: 'clamp(28px,4vw,54px)'
            }}
          >
            {/* Missions List */}
            <div>
              <h2
                style={{
                  margin: '0 0 20px',
                  font: "400 11px/1 'IBM Plex Mono',monospace",
                  color: '#9aa7c0',
                  letterSpacing: '.16em'
                }}
              >
                MISSION
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {missions.map((m) => (
                  <div
                    key={m.id}
                    data-reveal="1"
                    style={{
                      opacity: 0,
                      transform: 'translateY(22px)',
                      transition:
                        'opacity .7s cubic-bezier(.16,.84,.44,1),transform .7s cubic-bezier(.16,.84,.44,1),background .3s ease,padding-left .3s ease',
                      display: 'flex',
                      gap: '16px',
                      padding: '17px 14px',
                      borderBottom: '1px solid rgba(241,237,227,.08)',
                      borderRadius: '10px'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(241,237,227,.04)';
                      e.currentTarget.style.paddingLeft = '20px';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.paddingLeft = '14px';
                    }}
                  >
                    <span
                      style={{
                        flex: 'none',
                        width: '30px',
                        font: "500 12px/1.5 'IBM Plex Mono',monospace",
                        color: 'var(--adg-accent,#4fd0dc)'
                      }}
                    >
                      {m.id}
                    </span>
                    <span style={{ font: "400 15.5px/1.62 'IBM Plex Sans',sans-serif", color: '#c3cbdd' }}>
                      {m.body}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Objectives Grid */}
            <div>
              <h2
                style={{
                  margin: '0 0 20px',
                  font: "400 11px/1 'IBM Plex Mono',monospace",
                  color: '#9aa7c0',
                  letterSpacing: '.16em'
                }}
              >
                OBJECTIVES · FOUR, DISTINCT
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(230px,1fr))', gap: '11px' }}>
                {objectives.map((o) => (
                  <div
                    key={o.id}
                    data-reveal="1"
                    style={{
                      opacity: 0,
                      transform: 'translateY(22px)',
                      transition:
                        'opacity .7s cubic-bezier(.16,.84,.44,1),transform .7s cubic-bezier(.16,.84,.44,1),border-color .3s ease,background .3s ease',
                      background: '#111c33',
                      border: '1px solid rgba(241,237,227,.09)',
                      borderRadius: '14px',
                      padding: '18px 17px'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'var(--adg-accent,#4fd0dc)';
                      e.currentTarget.style.background = '#131f3a';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(241,237,227,.09)';
                      e.currentTarget.style.background = '#111c33';
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '9px' }}>
                      <span
                        style={{
                          font: "500 11px/1 'IBM Plex Mono',monospace",
                          color: 'var(--adg-accent,#4fd0dc)'
                        }}
                      >
                        {o.id}
                      </span>
                      <span
                        style={{
                          font: "600 15px/1.3 'Space Grotesk',sans-serif",
                          color: '#f1ede3',
                          letterSpacing: '-.01em'
                        }}
                      >
                        {o.title}
                      </span>
                    </div>
                    <p
                      style={{
                        margin: '10px 0 0',
                        font: "400 13.5px/1.6 'IBM Plex Sans',sans-serif",
                        color: '#8e9ab4'
                      }}
                    >
                      {o.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
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
              Meet the team driving our mission
            </h3>
            <p style={{ margin: '6px 0 0', font: "400 14.5px/1.6 'IBM Plex Sans',sans-serif", color: '#9aa7c0' }}>
              From faculty advisors to core officers and domain executive leads.
            </p>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            <Link
              to="/team"
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
              SEE THE TEAM →
            </Link>
            <Link
              to="/join"
              style={{
                padding: '13px 24px',
                borderRadius: '999px',
                background: 'var(--adg-accent,#4fd0dc)',
                color: '#0c1426',
                font: "500 12.5px/1 'IBM Plex Mono',monospace",
                letterSpacing: '.05em'
              }}
            >
              JOIN ADG →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
