import React, { useState } from 'react';
import { events, eventFilters, operatingPrinciples } from '../../data/events';
import EventModal from '../../components/Modal/EventModal';
import { useADGEffects } from '../../utils/useEffects';

export default function Events() {
  const [filter, setFilter] = useState('All');
  const [openEvent, setOpenEvent] = useState(null);

  useADGEffects([filter]);

  const visibleEvents =
    filter === 'All' ? events : events.filter((e) => e.kind === filter || e.tag === filter);

  return (
    <main style={{ paddingTop: 'clamp(110px,12vw,144px)' }}>
      <section
        id="events"
        data-screen-label="Events"
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
              03 / TERM 1 EVENTS
            </span>
            <span style={{ font: "400 11px/1 'IBM Plex Mono',monospace", color: '#5d6b88', letterSpacing: '.1em' }}>
              // syllabus-aligned, specialist-led
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
            Six events. Zero filler.
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
            We run three kinds of events: hands-on workshops with industry specialists, one flagship hackathon where
            the demo is the judging, and sit-down seminars with people who build AI for a living.
          </p>

          {/* Filter Buttons */}
          <div
            data-reveal="1"
            style={{
              opacity: 0,
              transform: 'translateY(22px)',
              transition: 'opacity .7s cubic-bezier(.16,.84,.44,1),transform .7s cubic-bezier(.16,.84,.44,1)',
              marginTop: 'clamp(36px,5vw,52px)',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '10px'
            }}
          >
            {eventFilters.map((f) => {
              const active = filter === f.key;
              return (
                <button
                  key={f.key}
                  onClick={() => setFilter(f.key)}
                  style={{
                    padding: '10px 18px',
                    borderRadius: '999px',
                    border: `1px solid ${active ? 'var(--adg-accent,#4fd0dc)' : 'rgba(241,237,227,.16)'}`,
                    background: active ? 'var(--adg-accent,#4fd0dc)' : 'transparent',
                    color: active ? '#0c1426' : '#9aa7c0',
                    font: "500 12px/1 'IBM Plex Mono',monospace",
                    letterSpacing: '.06em',
                    cursor: 'pointer',
                    transition: 'all .25s ease'
                  }}
                  onMouseEnter={(e) => {
                    if (!active) {
                      e.currentTarget.style.color = '#f1ede3';
                      e.currentTarget.style.borderColor = 'rgba(241,237,227,.35)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!active) {
                      e.currentTarget.style.color = '#9aa7c0';
                      e.currentTarget.style.borderColor = 'rgba(241,237,227,.16)';
                    }
                  }}
                >
                  {f.label}
                </button>
              );
            })}
          </div>

          {/* Events Grid */}
          <div
            style={{
              marginTop: '32px',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))',
              gap: '20px'
            }}
          >
            {visibleEvents.map((ev) => (
              <div
                key={ev.id}
                data-reveal="1"
                data-tilt="1"
                onClick={() => setOpenEvent(ev)}
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
                  justifyContent: 'space-between',
                  gap: '20px',
                  cursor: 'pointer'
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
                      gap: '10px',
                      marginBottom: '14px'
                    }}
                  >
                    <span
                      style={{
                        font: "500 10.5px/1 'IBM Plex Mono',monospace",
                        color: 'var(--adg-accent,#4fd0dc)',
                        letterSpacing: '.12em'
                      }}
                    >
                      {ev.tag}
                    </span>
                    <span
                      style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'rgba(241,237,227,.3)' }}
                    />
                    <span
                      style={{
                        font: "400 10.5px/1 'IBM Plex Mono',monospace",
                        color: '#71809d',
                        letterSpacing: '.08em'
                      }}
                    >
                      {ev.status}
                    </span>
                  </div>

                  <h3
                    style={{
                      margin: 0,
                      font: "600 22px/1.2 'Space Grotesk',sans-serif",
                      letterSpacing: '-.02em',
                      color: '#f1ede3'
                    }}
                  >
                    {ev.title}
                  </h3>

                  <span
                    style={{
                      display: 'block',
                      marginTop: '8px',
                      font: "400 11.5px/1.4 'IBM Plex Mono',monospace",
                      color: '#71809d'
                    }}
                  >
                    {ev.date}
                  </span>

                  <p
                    style={{
                      margin: '14px 0 0',
                      font: "400 14.5px/1.65 'IBM Plex Sans',sans-serif",
                      color: '#9aa7c0'
                    }}
                  >
                    {ev.blurb}
                  </p>
                </div>

                <span
                  style={{
                    font: "500 12px/1 'IBM Plex Mono',monospace",
                    color: 'var(--adg-accent,#4fd0dc)',
                    letterSpacing: '.08em'
                  }}
                >
                  VIEW DETAILS →
                </span>
              </div>
            ))}
          </div>

          {/* Operating Principles */}
          <div
            data-reveal="1"
            style={{
              opacity: 0,
              transform: 'translateY(22px)',
              transition: 'opacity .7s cubic-bezier(.16,.84,.44,1),transform .7s cubic-bezier(.16,.84,.44,1)',
              marginTop: 'clamp(60px,8vw,100px)',
              background: '#0e1830',
              border: '1px solid rgba(241,237,227,.1)',
              borderRadius: '24px',
              padding: 'clamp(28px,4vw,44px)'
            }}
          >
            <span
              style={{
                font: "400 10.5px/1 'IBM Plex Mono',monospace",
                color: 'var(--adg-accent,#4fd0dc)',
                letterSpacing: '.14em'
              }}
            >
              OPERATING PRINCIPLES
            </span>
            <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {operatingPrinciples.map((op, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'baseline', gap: '12px' }}>
                  <span
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: 'var(--adg-accent,#4fd0dc)',
                      flex: 'none'
                    }}
                  />
                  <span style={{ font: "400 15px/1.65 'IBM Plex Sans',sans-serif", color: '#c3cbdd' }}>{op}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Event Details Modal */}
      <EventModal event={openEvent} onClose={() => setOpenEvent(null)} />
    </main>
  );
}
