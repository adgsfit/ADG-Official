import React from 'react';
import Modal from './Modal';

export default function MemberModal({ member, onClose }) {
  if (!member) return null;

  return (
    <Modal isOpen={!!member} onClose={onClose}>
      <div
        style={{
          position: 'relative',
          width: 'min(440px,100%)',
          margin: '0 auto',
          background: 'linear-gradient(145deg,#131f38,#0e1628)',
          border: '1px solid rgba(79,208,220,.35)',
          borderRadius: '24px',
          padding: 'clamp(22px,5vw,32px)',
          boxShadow: '0 30px 70px -20px rgba(0,0,0,.95), 0 0 35px -10px rgba(79,208,220,.2)',
          animation: 'adgIn .36s cubic-bezier(.16,.84,.44,1)'
        }}
      >
        {/* Close button */}
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

        {/* Domain Tag Badge */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '6px 13px',
            borderRadius: '999px',
            background: 'rgba(79,208,220,.12)',
            border: '1px solid rgba(79,208,220,.28)',
            marginBottom: '18px'
          }}
        >
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--adg-accent,#4fd0dc)' }} />
          <span
            style={{
              font: "500 10.5px/1 'IBM Plex Mono',monospace",
              color: 'var(--adg-accent,#4fd0dc)',
              letterSpacing: '.08em',
              textTransform: 'uppercase'
            }}
          >
            {member.domain}
          </span>
        </div>

        {/* Big Avatar / Image Frame */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '18px', marginBottom: '20px' }}>
          <div
            style={{
              position: 'relative',
              flex: 'none',
              width: '82px',
              height: '82px',
              borderRadius: '20px',
              border: '2px solid var(--adg-accent,#4fd0dc)',
              background: 'repeating-linear-gradient(135deg,#1b2947 0 10px,#22314f 10px 20px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 12px 24px -10px rgba(79,208,220,.35)'
            }}
          >
            <span
              style={{
                font: "700 24px/1 'Space Grotesk',sans-serif",
                color: '#f1ede3',
                letterSpacing: '-.02em'
              }}
            >
              {member.initials}
            </span>
            <span
              style={{
                position: 'absolute',
                bottom: '-3px',
                right: '-3px',
                width: '16px',
                height: '16px',
                borderRadius: '50%',
                background: '#0c1426',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <span
                style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  background: 'var(--adg-accent,#4fd0dc)'
                }}
              />
            </span>
          </div>
          <div style={{ minWidth: 0, flex: 1 }}>
            <h3
              style={{
                margin: 0,
                font: "700 clamp(20px,3.4vw,25px)/1.2 'Space Grotesk',sans-serif",
                color: '#f1ede3',
                letterSpacing: '-.02em',
                wordBreak: 'break-word'
              }}
            >
              {member.name}
            </h3>
            <span
              style={{
                display: 'inline-block',
                marginTop: '4px',
                font: "500 11.5px/1.3 'IBM Plex Mono',monospace",
                color: 'var(--adg-accent,#4fd0dc)',
                letterSpacing: '.06em'
              }}
            >
              {member.role}
            </span>
            <span
              style={{
                display: 'block',
                marginTop: '4px',
                font: "400 11.5px/1.4 'IBM Plex Sans',sans-serif",
                color: '#8e9ab4'
              }}
            >
              Dept. of AIML · SFIT AY 2026–27
            </span>
          </div>
        </div>

        {/* Bio / Role details */}
        <div
          style={{
            padding: '14px 16px',
            background: 'rgba(9,15,29,.6)',
            border: '1px solid rgba(241,237,227,.08)',
            borderRadius: '14px',
            marginBottom: '20px'
          }}
        >
          <span
            style={{
              display: 'block',
              font: "500 9.5px/1 'IBM Plex Mono',monospace",
              color: '#71809d',
              letterSpacing: '.12em',
              marginBottom: '6px'
            }}
          >
            ROLE &amp; RESPONSIBILITIES
          </span>
          <p style={{ margin: 0, font: "400 13.5px/1.6 'IBM Plex Sans',sans-serif", color: '#c3cbdd' }}>
            {member.bio}
          </p>
        </div>

        {/* Social Profiles & Contact Links */}
        <span
          style={{
            display: 'block',
            font: "500 10px/1 'IBM Plex Mono',monospace",
            color: '#9aa7c0',
            letterSpacing: '.12em',
            marginBottom: '10px'
          }}
        >
          CONNECT &amp; SOCIALS
        </span>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '10px' }}>
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '6px',
              padding: '12px 8px',
              borderRadius: '12px',
              background: '#101a2f',
              border: '1px solid rgba(241,237,227,.12)',
              color: '#f1ede3',
              transition: 'all .25s ease',
              textAlign: 'center'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--adg-accent,#4fd0dc)';
              e.currentTarget.style.color = '#0c1426';
              e.currentTarget.style.borderColor = 'var(--adg-accent,#4fd0dc)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#101a2f';
              e.currentTarget.style.color = '#f1ede3';
              e.currentTarget.style.borderColor = 'rgba(241,237,227,.12)';
              e.currentTarget.style.transform = 'none';
            }}
          >
            <span style={{ font: "700 15px/1 'IBM Plex Mono',monospace" }}>in</span>
            <span style={{ font: "500 10.5px/1 'IBM Plex Sans',sans-serif" }}>LinkedIn</span>
          </a>
          <a
            href={member.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '6px',
              padding: '12px 8px',
              borderRadius: '12px',
              background: '#101a2f',
              border: '1px solid rgba(241,237,227,.12)',
              color: '#f1ede3',
              transition: 'all .25s ease',
              textAlign: 'center'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--adg-accent,#4fd0dc)';
              e.currentTarget.style.color = '#0c1426';
              e.currentTarget.style.borderColor = 'var(--adg-accent,#4fd0dc)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#101a2f';
              e.currentTarget.style.color = '#f1ede3';
              e.currentTarget.style.borderColor = 'rgba(241,237,227,.12)';
              e.currentTarget.style.transform = 'none';
            }}
          >
            <span style={{ font: "700 15px/1 'IBM Plex Mono',monospace" }}>git</span>
            <span style={{ font: "500 10.5px/1 'IBM Plex Sans',sans-serif" }}>GitHub</span>
          </a>
          <a
            href={member.instagram}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '6px',
              padding: '12px 8px',
              borderRadius: '12px',
              background: '#101a2f',
              border: '1px solid rgba(241,237,227,.12)',
              color: '#f1ede3',
              transition: 'all .25s ease',
              textAlign: 'center'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--adg-accent,#4fd0dc)';
              e.currentTarget.style.color = '#0c1426';
              e.currentTarget.style.borderColor = 'var(--adg-accent,#4fd0dc)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#101a2f';
              e.currentTarget.style.color = '#f1ede3';
              e.currentTarget.style.borderColor = 'rgba(241,237,227,.12)';
              e.currentTarget.style.transform = 'none';
            }}
          >
            <span style={{ font: "700 15px/1 'IBM Plex Mono',monospace" }}>ig</span>
            <span style={{ font: "500 10.5px/1 'IBM Plex Sans',sans-serif" }}>Instagram</span>
          </a>
        </div>

        {/* Contact Email CTA */}
        <a
          href={member.email}
          style={{
            marginTop: '14px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            padding: '13px 20px',
            borderRadius: '999px',
            background: 'var(--adg-accent,#4fd0dc)',
            color: '#0c1426',
            font: "500 12px/1 'IBM Plex Mono',monospace",
            letterSpacing: '.06em',
            transition: 'transform .25s ease'
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'none')}
        >
          <span>CONNECT VIA ADG EMAIL →</span>
        </a>
      </div>
    </Modal>
  );
}
