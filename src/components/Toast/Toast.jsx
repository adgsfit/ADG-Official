import React from 'react';

export default function Toast({ message }) {
  if (!message) return null;

  return (
    <div
      style={{
        position: 'fixed',
        left: '50%',
        bottom: '26px',
        transform: 'translateX(-50%)',
        zIndex: 110,
        display: 'flex',
        alignItems: 'center',
        gap: '11px',
        padding: '13px 19px',
        background: '#121d35',
        border: '1px solid var(--adg-accent,#4fd0dc)',
        borderRadius: '999px',
        boxShadow: '0 24px 50px -26px rgba(0,0,0,.9)',
        animation: 'adgPop .45s cubic-bezier(.16,.84,.44,1)'
      }}
    >
      <span
        style={{
          width: '7px',
          height: '7px',
          borderRadius: '50%',
          background: 'var(--adg-accent,#4fd0dc)',
          flex: 'none'
        }}
      />
      <span
        style={{
          font: "500 12.5px/1.3 'IBM Plex Mono',monospace",
          color: '#f1ede3',
          letterSpacing: '.04em'
        }}
      >
        {message}
      </span>
    </div>
  );
}
