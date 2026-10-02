import React from 'react';
import Modal from './Modal';

export default function EventModal({ event, onClose }) {
  if (!event) return null;

  return (
    <Modal isOpen={!!event} onClose={onClose}>
      <div
        style={{
          position: 'relative',
          background: '#0f1a30',
          border: '1px solid rgba(79,208,220,.35)',
          borderRadius: '24px',
          padding: 'clamp(22px,5vw,36px)',
          boxShadow: '0 30px 70px -20px rgba(0,0,0,.95), 0 0 35px -10px rgba(79,208,220,.25)',
          animation: 'adgIn .36s cubic-bezier(.16,.84,.44,1)'
        }}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            width: '38px',
            height: '38px',
            borderRadius: '12px',
            border: '1px solid rgba(241,237,227,.16)',
            background: 'rgba(241,237,227,.05)',
            color: '#f1ede3',
            fontSize: '16px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'background .25s ease'
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(241,237,227,.15)')}
          onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(241,237,227,.05)')}
        >
          ✕
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
          <span
            style={{
              font: "500 10.5px/1 'IBM Plex Mono',monospace",
              color: 'var(--adg-accent,#4fd0dc)',
              letterSpacing: '.12em'
            }}
          >
            {event.tag}
          </span>
          <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'rgba(241,237,227,.3)' }} />
          <span
            style={{
              font: "400 10.5px/1 'IBM Plex Mono',monospace",
              color: '#71809d',
              letterSpacing: '.08em'
            }}
          >
            {event.status}
          </span>
        </div>

        <h3
          style={{
            margin: 0,
            font: "600 clamp(22px,3.5vw,30px)/1.2 'Space Grotesk',sans-serif",
            color: '#f1ede3',
            letterSpacing: '-.02em'
          }}
        >
          {event.title}
        </h3>

        <p
          style={{
            margin: '14px 0 0',
            font: "400 15px/1.7 'IBM Plex Sans',sans-serif",
            color: '#c3cbdd'
          }}
        >
          {event.detail}
        </p>

        {event.meta && event.meta.length > 0 && (
          <div
            style={{
              marginTop: '22px',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(130px,1fr))',
              gap: '12px',
              padding: '16px',
              background: 'rgba(8,13,25,.6)',
              border: '1px solid rgba(241,237,227,.08)',
              borderRadius: '14px'
            }}
          >
            {event.meta.map((m, i) => (
              <div key={i}>
                <span
                  style={{
                    font: "400 9.5px/1 'IBM Plex Mono',monospace",
                    color: '#71809d',
                    letterSpacing: '.1em'
                  }}
                >
                  {m.k}
                </span>
                <span
                  style={{
                    display: 'block',
                    marginTop: '4px',
                    font: "500 12.5px/1.3 'IBM Plex Mono',monospace",
                    color: '#f1ede3'
                  }}
                >
                  {m.v}
                </span>
              </div>
            ))}
          </div>
        )}

        {event.takeaways && event.takeaways.length > 0 && (
          <div style={{ marginTop: '20px' }}>
            <span
              style={{
                font: "400 10px/1 'IBM Plex Mono',monospace",
                color: '#9aa7c0',
                letterSpacing: '.12em'
              }}
            >
              WHAT YOU WALK AWAY WITH
            </span>
            <div style={{ marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {event.takeaways.map((t, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span
                    style={{
                      width: '5px',
                      height: '5px',
                      borderRadius: '50%',
                      background: 'var(--adg-accent,#4fd0dc)',
                      flex: 'none'
                    }}
                  />
                  <span style={{ font: "400 13.5px/1.5 'IBM Plex Sans',sans-serif", color: '#c3cbdd' }}>
                    {t}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
}
