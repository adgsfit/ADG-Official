import React from 'react';
import { pipeline, formAsks, googleFormUrl } from '../../data/join';
import { useADGEffects } from '../../utils/useEffects';

export default function Join() {
  useADGEffects([]);

  return (
    <main style={{ paddingTop: 'clamp(110px,12vw,144px)' }}>
      <section
        id="join"
        data-screen-label="Join"
        style={{ padding: 'clamp(20px,4vw,40px) clamp(18px,4vw,40px) clamp(60px,8vw,100px)' }}
      >
        <div
          style={{
            maxWidth: '1240px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(308px,1fr))',
            gap: 'clamp(30px,5vw,64px)',
            alignItems: 'start'
          }}
        >
          {/* Left Column: Pipeline */}
          <div>
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
                06 / JOIN ADG
              </span>
              <span style={{ font: "400 11px/1 'IBM Plex Mono',monospace", color: '#5d6b88', letterSpacing: '.1em' }}>
                // yes, first-years too
              </span>
            </div>

            <h1
              data-reveal="1"
              style={{
                opacity: 0,
                transform: 'translateY(22px)',
                transition: 'opacity .7s cubic-bezier(.16,.84,.44,1),transform .7s cubic-bezier(.16,.84,.44,1)',
                margin: 0,
                font: "600 clamp(32px,4vw,52px)/1.08 'Space Grotesk',sans-serif",
                letterSpacing: '-.03em'
              }}
            >
              member → contributor → core team
            </h1>

            <p
              data-reveal="1"
              style={{
                opacity: 0,
                transform: 'translateY(22px)',
                transition: 'opacity .7s cubic-bezier(.16,.84,.44,1),transform .7s cubic-bezier(.16,.84,.44,1)',
                margin: '20px 0 0',
                maxWidth: '48ch',
                font: "400 16px/1.7 'IBM Plex Sans',sans-serif",
                color: '#9aa7c0'
              }}
            >
              Any year, any starting point. Sessions need no membership — registering puts you on the list, and the
              people who show up and help run things become core members.
            </p>

            <div style={{ marginTop: '30px', display: 'flex', flexDirection: 'column' }}>
              {pipeline.map((s) => (
                <div
                  key={s.n}
                  data-reveal="1"
                  style={{
                    opacity: 0,
                    transform: 'translateY(22px)',
                    transition: 'opacity .7s cubic-bezier(.16,.84,.44,1),transform .7s cubic-bezier(.16,.84,.44,1)',
                    display: 'flex',
                    gap: '15px',
                    padding: '16px 0',
                    borderBottom: '1px solid rgba(241,237,227,.08)'
                  }}
                >
                  <span
                    style={{
                      flex: 'none',
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      border: '1px solid var(--adg-accent,#4fd0dc)',
                      color: 'var(--adg-accent,#4fd0dc)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      font: "500 12px/1 'IBM Plex Mono',monospace"
                    }}
                  >
                    {s.n}
                  </span>
                  <div>
                    <h4 style={{ margin: 0, font: "600 16px/1.3 'Space Grotesk',sans-serif", color: '#f1ede3' }}>
                      {s.title}
                    </h4>
                    <p style={{ margin: '6px 0 0', font: "400 13.5px/1.6 'IBM Plex Sans',sans-serif", color: '#8e9ab4' }}>
                      {s.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Google Form Box */}
          <div
            data-reveal="1"
            style={{
              opacity: 0,
              transform: 'translateY(22px)',
              transition: 'opacity .7s cubic-bezier(.16,.84,.44,1),transform .7s cubic-bezier(.16,.84,.44,1)',
              background: '#121d35',
              border: '1px solid rgba(241,237,227,.1)',
              borderRadius: '22px',
              padding: 'clamp(24px,3vw,36px)'
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '17px' }}>
              <span
                style={{
                  font: "400 10px/1 'IBM Plex Mono',monospace",
                  color: '#9aa7c0',
                  letterSpacing: '.14em'
                }}
              >
                REGISTRATION · TERM 1
              </span>

              <h3
                style={{
                  margin: 0,
                  font: "600 22px/1.22 'Space Grotesk',sans-serif",
                  color: '#f1ede3',
                  letterSpacing: '-.02em'
                }}
              >
                One Google Form. Two minutes. No fee.
              </h3>

              <p style={{ margin: 0, font: "400 15px/1.68 'IBM Plex Sans',sans-serif", color: '#9aa7c0' }}>
                Registration is handled through a single Google Form so the member database stays in one place. Sessions
                themselves stay open to every student — registering just means we can tell you when they are.
              </p>

              <a
                href={googleFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  alignSelf: 'flex-start',
                  padding: '16px 27px',
                  borderRadius: '999px',
                  background: 'var(--adg-accent,#4fd0dc)',
                  color: '#0c1426',
                  font: "500 13px/1 'IBM Plex Mono',monospace",
                  letterSpacing: '.07em',
                  transition: 'transform .3s cubic-bezier(.16,.84,.44,1), box-shadow .3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 16px 36px -20px var(--adg-accent,#4fd0dc)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'none';
                }}
              >
                OPEN THE REGISTRATION FORM →
              </a>

              <div
                style={{
                  padding: '18px',
                  background: '#0e1830',
                  border: '1px solid rgba(241,237,227,.1)',
                  borderRadius: '14px'
                }}
              >
                <span
                  style={{
                    font: "400 10px/1 'IBM Plex Mono',monospace",
                    color: '#71809d',
                    letterSpacing: '.13em'
                  }}
                >
                  WHAT THE FORM ASKS
                </span>
                <div style={{ marginTop: '13px', display: 'flex', flexDirection: 'column', gap: '9px' }}>
                  {formAsks.map((ask, i) => (
                    <div key={i} style={{ display: 'flex', gap: '11px', alignItems: 'baseline' }}>
                      <span
                        style={{
                          flex: 'none',
                          width: '5px',
                          height: '5px',
                          borderRadius: '50%',
                          background: 'var(--adg-accent,#4fd0dc)'
                        }}
                      />
                      <span style={{ font: "400 14px/1.6 'IBM Plex Sans',sans-serif", color: '#c3cbdd' }}>
                        {ask}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <p
                style={{
                  margin: 0,
                  font: "400 11px/1.55 'IBM Plex Mono',monospace",
                  color: '#71809d',
                  letterSpacing: '.04em'
                }}
              >
                OPENS IN A NEW TAB · TAKES ABOUT TWO MINUTES
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
