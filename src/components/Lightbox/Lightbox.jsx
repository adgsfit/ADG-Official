import React, { useEffect } from 'react';

export default function Lightbox({ isOpen, photos, currentIndex, onClose, onPrev, onNext }) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowLeft') onPrev();
      else if (e.key === 'ArrowRight') onNext();
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || !photos || photos.length === 0) return null;

  const currentPhoto = photos[currentIndex] || photos[0];
  const counterText = `${currentIndex + 1} / ${photos.length}`;

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        background: 'rgba(6,10,20,.92)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(16px,4vw,36px)',
        animation: 'adgFade .22s ease'
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: 'relative',
          width: 'min(900px,100%)',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span
            style={{
              font: "400 11px/1 'IBM Plex Mono',monospace",
              color: '#9aa7c0',
              letterSpacing: '.12em'
            }}
          >
            {counterText}
          </span>
          <button
            onClick={onClose}
            aria-label="Close"
            style={{
              width: '40px',
              height: '40px',
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
        </div>

        <div
          style={{
            position: 'relative',
            width: '100%',
            aspectRatio: '16/10',
            background: 'repeating-linear-gradient(135deg,#131f38 0 14px,#192744 14px 28px)',
            border: '1px solid rgba(79,208,220,.35)',
            borderRadius: '20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
            textAlign: 'center',
            boxShadow: '0 30px 80px -20px rgba(0,0,0,.95), 0 0 40px -10px rgba(79,208,220,.2)'
          }}
        >
          <span
            style={{
              font: "500 12px/1 'IBM Plex Mono',monospace",
              color: 'var(--adg-accent,#4fd0dc)',
              letterSpacing: '.14em'
            }}
          >
            {currentPhoto.label}
          </span>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            aria-label="Previous"
            style={{
              position: 'absolute',
              left: '14px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              border: '1px solid rgba(241,237,227,.18)',
              background: 'rgba(12,20,38,.85)',
              color: '#f1ede3',
              fontSize: '18px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background .25s ease'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--adg-accent,#4fd0dc)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(12,20,38,.85)')}
          >
            ←
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            aria-label="Next"
            style={{
              position: 'absolute',
              right: '14px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              border: '1px solid rgba(241,237,227,.18)',
              background: 'rgba(12,20,38,.85)',
              color: '#f1ede3',
              fontSize: '18px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background .25s ease'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--adg-accent,#4fd0dc)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(12,20,38,.85)')}
          >
            →
          </button>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ font: "600 16px/1.2 'Space Grotesk',sans-serif", color: '#f1ede3' }}>
            {currentPhoto.title}
          </span>
          <span style={{ font: "400 12px/1 'IBM Plex Mono',monospace", color: '#9aa7c0' }}>
            {currentPhoto.caption}
          </span>
        </div>
      </div>
    </div>
  );
}
