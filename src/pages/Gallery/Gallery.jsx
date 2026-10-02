import React, { useState } from 'react';
import { albums, galleryPhotos } from '../../data/gallery';
import Lightbox from '../../components/Lightbox/Lightbox';
import { useADGEffects } from '../../utils/useEffects';

export default function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [shotIndex, setShotIndex] = useState(0);

  useADGEffects([]);

  const handleOpenShot = (index) => {
    setShotIndex(index);
    setLightboxOpen(true);
  };

  const handlePrev = () => {
    setShotIndex((prev) => (prev - 1 + galleryPhotos.length) % galleryPhotos.length);
  };

  const handleNext = () => {
    setShotIndex((prev) => (prev + 1) % galleryPhotos.length);
  };

  return (
    <main style={{ paddingTop: 'clamp(110px,12vw,144px)' }}>
      <section
        id="gallery"
        data-screen-label="Gallery"
        style={{ padding: 'clamp(20px,4vw,40px) clamp(18px,4vw,40px) clamp(60px,8vw,100px)' }}
      >
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          {/* Header Label */}
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
              05 / PHOTO ARCHIVE
            </span>
            <span style={{ font: "400 11px/1 'IBM Plex Mono',monospace", color: '#5d6b88', letterSpacing: '.1em' }}>
              // proof of work, not posters
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
            The camera does not lie.
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
            Every workshop, hackathon demo, and committee kickoff gets documented. Click on an album below or browse
            individual shots with the lightbox viewer.
          </p>

          {/* Featured Album Box */}
          <div
            data-reveal="1"
            data-tilt="1"
            onClick={() => handleOpenShot(0)}
            style={{
              opacity: 0,
              transform: 'translateY(22px)',
              transition:
                'opacity .7s cubic-bezier(.16,.84,.44,1),transform .7s cubic-bezier(.16,.84,.44,1),border-color .35s ease,box-shadow .35s ease,background .35s ease',
              marginTop: 'clamp(40px,6vw,60px)',
              background: '#0d162a',
              border: '1px solid rgba(241,237,227,.12)',
              borderRadius: '24px',
              padding: 'clamp(24px,4vw,36px)',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--adg-accent,#4fd0dc)';
              e.currentTarget.style.boxShadow = '0 26px 50px -34px rgba(0,0,0,.95)';
              e.currentTarget.style.background = '#111d35';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(241,237,227,.12)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.background = '#0d162a';
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '12px',
                marginBottom: '16px'
              }}
            >
              <div>
                <span
                  style={{
                    font: "500 10.5px/1 'IBM Plex Mono',monospace",
                    color: 'var(--adg-accent,#4fd0dc)',
                    letterSpacing: '.12em'
                  }}
                >
                  {albums[0].meta}
                </span>
                <h3
                  style={{
                    margin: '6px 0 0',
                    font: "700 clamp(24px,3.8vw,34px)/1.1 'Space Grotesk',sans-serif",
                    color: '#f1ede3',
                    letterSpacing: '-.02em'
                  }}
                >
                  {albums[0].title}
                </h3>
              </div>
              <span
                style={{
                  padding: '8px 16px',
                  borderRadius: '999px',
                  background: 'rgba(241,237,227,.06)',
                  border: '1px solid rgba(241,237,227,.14)',
                  font: "500 11px/1 'IBM Plex Mono',monospace",
                  color: '#9aa7c0',
                  letterSpacing: '.08em'
                }}
              >
                {albums[0].count}
              </span>
            </div>

            <div
              style={{
                width: '100%',
                aspectRatio: '21/9',
                minHeight: '180px',
                background: 'repeating-linear-gradient(135deg,#131f38 0 16px,#192744 16px 32px)',
                border: '1px dashed rgba(79,208,220,.3)',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '20px',
                textAlign: 'center'
              }}
            >
              <span
                style={{
                  font: "500 12.5px/1.5 'IBM Plex Mono',monospace",
                  color: 'var(--adg-accent,#4fd0dc)',
                  letterSpacing: '.12em',
                  whiteSpace: 'pre-line'
                }}
              >
                {albums[0].cover}
              </span>
            </div>
          </div>

          {/* Photos Grid */}
          <div
            style={{
              marginTop: '40px',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))',
              gap: '20px'
            }}
          >
            {galleryPhotos.map((p, i) => (
              <div
                key={p.idx}
                data-reveal="1"
                data-tilt="1"
                onClick={() => handleOpenShot(i)}
                style={{
                  opacity: 0,
                  transform: 'translateY(22px)',
                  transition:
                    'opacity .7s cubic-bezier(.16,.84,.44,1),transform .7s cubic-bezier(.16,.84,.44,1),border-color .35s ease,box-shadow .35s ease,background .35s ease',
                  background: '#111c33',
                  border: '1px solid rgba(241,237,227,.1)',
                  borderRadius: '20px',
                  padding: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px',
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
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span
                    style={{
                      font: "500 10.5px/1 'IBM Plex Mono',monospace",
                      color: 'var(--adg-accent,#4fd0dc)',
                      letterSpacing: '.12em'
                    }}
                  >
                    SHOT {p.num}
                  </span>
                  <span style={{ font: "400 11px/1 'IBM Plex Mono',monospace", color: '#71809d' }}>
                    {p.caption}
                  </span>
                </div>

                <div
                  style={{
                    width: '100%',
                    aspectRatio: '4/3',
                    background: 'repeating-linear-gradient(135deg,#16223c 0 10px,#1b2947 10px 20px)',
                    border: '1px solid rgba(241,237,227,.08)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '16px',
                    textAlign: 'center'
                  }}
                >
                  <span
                    style={{
                      font: "500 11px/1.4 'IBM Plex Mono',monospace",
                      color: '#8e9ab4',
                      letterSpacing: '.08em'
                    }}
                  >
                    {p.label}
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '2px' }}>
                  <span style={{ font: "600 15px/1.2 'Space Grotesk',sans-serif", color: '#f1ede3' }}>
                    {p.title}
                  </span>
                  <span
                    style={{
                      font: "500 11px/1 'IBM Plex Mono',monospace",
                      color: 'var(--adg-accent,#4fd0dc)'
                    }}
                  >
                    VIEW ↗
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox
        isOpen={lightboxOpen}
        photos={galleryPhotos}
        currentIndex={shotIndex}
        onClose={() => setLightboxOpen(false)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </main>
  );
}
