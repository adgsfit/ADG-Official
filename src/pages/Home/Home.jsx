import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { marqueeDomains, terminalLines, badgeQuips } from '../../data/navigation';
import { useADGEffects } from '../../utils/useEffects';

export default function Home({ onShowToast }) {
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(terminalLines[0].length);
  const [pokes, setPokes] = useState(0);
  const badgeRef = useRef(null);
  const heroArtRef = useRef(null);

  useADGEffects([]);

  // Terminal typing effect
  useEffect(() => {
    const isReduced = !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    if (isReduced) return;

    let timer;
    let currentLine = lineIdx;
    let currentChar = 0;

    const tick = () => {
      const full = terminalLines[currentLine];
      if (currentChar < full.length) {
        currentChar += 1;
        setCharIdx(currentChar);
        timer = setTimeout(tick, 70);
      } else {
        timer = setTimeout(() => {
          currentLine = (currentLine + 1) % terminalLines.length;
          setLineIdx(currentLine);
          currentChar = 0;
          setCharIdx(0);
          timer = setTimeout(tick, 240);
        }, 2100);
      }
    };

    timer = setTimeout(tick, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Parallax on hero art
  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY || window.pageYOffset || 0;
      if (heroArtRef.current && y < window.innerHeight * 1.3) {
        heroArtRef.current.style.transform = `translateY(${(y * 0.05).toFixed(1)}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBadgeClick = () => {
    const nextPokes = pokes + 1;
    setPokes(nextPokes);
    if (badgeRef.current) {
      badgeRef.current.style.transform = `rotate(${nextPokes * 360}deg) scale(1.04)`;
    }
    const quip = badgeQuips[(nextPokes - 1) % badgeQuips.length];
    if (onShowToast) {
      onShowToast(quip);
    }
  };

  const marqueeList = marqueeDomains.concat(marqueeDomains);
  const currentConsoleLine = terminalLines[lineIdx].slice(0, charIdx);

  return (
    <main>
      <section
        id="home"
        data-screen-label="Hero"
        style={{
          position: 'relative',
          minHeight: '100svh',
          display: 'flex',
          alignItems: 'center',
          padding: '150px clamp(18px,4vw,40px) 80px',
          overflow: 'hidden'
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(241,237,227,.045) 1px,transparent 1px),linear-gradient(90deg,rgba(241,237,227,.045) 1px,transparent 1px)',
            backgroundSize: '80px 80px',
            maskImage: 'radial-gradient(ellipse 90% 70% at 50% 40%,#000 18%,transparent 78%)',
            WebkitMaskImage: 'radial-gradient(ellipse 90% 70% at 50% 40%,#000 18%,transparent 78%)'
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '-14%',
            right: '-8%',
            width: 'min(720px,90vw)',
            height: 'min(720px,90vw)',
            borderRadius: '50%',
            background: 'radial-gradient(circle,rgba(79,208,220,.17) 0%,rgba(79,208,220,.06) 38%,transparent 66%)',
            pointerEvents: 'none'
          }}
        />

        <div
          style={{
            position: 'relative',
            maxWidth: '1240px',
            margin: '0 auto',
            width: '100%',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))',
            gap: 'clamp(34px,6vw,74px)',
            alignItems: 'center'
          }}
        >
          <div>
            <div
              data-reveal="1"
              style={{
                opacity: 0,
                transform: 'translateY(22px)',
                transition: 'opacity .7s cubic-bezier(.16,.84,.44,1),transform .7s cubic-bezier(.16,.84,.44,1)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '8px 15px 8px 11px',
                border: '1px solid rgba(241,237,227,.16)',
                borderRadius: '999px',
                font: "400 10.5px/1.4 'IBM Plex Mono',monospace",
                color: '#9aa7c0',
                letterSpacing: '.11em'
              }}
            >
              <span style={{ position: 'relative', width: '7px', height: '7px', flex: 'none' }}>
                <span
                  data-anim="1"
                  style={{
                    position: 'absolute',
                    inset: '-3px',
                    borderRadius: '50%',
                    background: 'var(--adg-accent,#4fd0dc)',
                    animation: 'adgPulse 2.4s ease-out infinite'
                  }}
                />
                <span
                  style={{
                    position: 'absolute',
                    inset: 0,
                    borderRadius: '50%',
                    background: 'var(--adg-accent,#4fd0dc)'
                  }}
                />
              </span>
              STUDENT-RUN · DEPT. OF AIML, SFIT · AY 2026–27
            </div>

            <h1
              data-reveal="1"
              style={{
                opacity: 0,
                transform: 'translateY(22px)',
                transition: 'opacity .7s cubic-bezier(.16,.84,.44,1),transform .7s cubic-bezier(.16,.84,.44,1)',
                margin: '26px 0 0',
                font: "600 clamp(40px,6.2vw,80px)/0.98 'Space Grotesk',sans-serif",
                letterSpacing: '-.035em',
                color: '#f1ede3'
              }}
            >
              We ship <span style={{ color: 'var(--adg-accent,#4fd0dc)' }}>beyond</span> what the syllabus teaches.
            </h1>

            <div
              data-reveal="1"
              style={{
                opacity: 0,
                transform: 'translateY(22px)',
                transition: 'opacity .7s cubic-bezier(.16,.84,.44,1),transform .7s cubic-bezier(.16,.84,.44,1)',
                marginTop: '24px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '11px 15px',
                background: 'rgba(9,15,29,.7)',
                border: '1px solid rgba(241,237,227,.1)',
                borderRadius: '12px',
                font: "400 12.5px/1.4 'IBM Plex Mono',monospace",
                color: '#8e9ab4',
                maxWidth: '100%'
              }}
            >
              <span style={{ color: 'var(--adg-accent,#4fd0dc)', flex: 'none' }}>$</span>
              <span>{currentConsoleLine}</span>
              <span
                data-anim="1"
                style={{
                  display: 'inline-block',
                  width: '7px',
                  height: '14px',
                  background: '#8e9ab4',
                  animation: 'adgBlink 1s steps(1) infinite',
                  flex: 'none'
                }}
              />
            </div>

            <p
              data-reveal="1"
              style={{
                opacity: 0,
                transform: 'translateY(22px)',
                transition: 'opacity .7s cubic-bezier(.16,.84,.44,1),transform .7s cubic-bezier(.16,.84,.44,1)',
                margin: '22px 0 0',
                maxWidth: '52ch',
                font: "400 clamp(15.5px,1.5vw,17.5px)/1.7 'IBM Plex Sans',sans-serif",
                color: '#9aa7c0'
              }}
            >
              ADG is the student-run AI &amp; ML committee at SFIT. Lectures hand you the concept and the marks. We
              hand you the shipped version — a model trained, an app deployed, a project demoed to an actual room of
              actual people.
            </p>

            <div
              data-reveal="1"
              style={{
                opacity: 0,
                transform: 'translateY(22px)',
                transition: 'opacity .7s cubic-bezier(.16,.84,.44,1),transform .7s cubic-bezier(.16,.84,.44,1)',
                marginTop: '34px',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '13px'
              }}
            >
              <Link
                to="/join"
                style={{
                  position: 'relative',
                  padding: '16px 30px',
                  borderRadius: '999px',
                  background: 'var(--adg-accent,#4fd0dc)',
                  color: '#0c1426',
                  font: "500 13.5px/1 'IBM Plex Mono',monospace",
                  letterSpacing: '.06em',
                  transition: 'transform .3s cubic-bezier(.16,.84,.44,1), box-shadow .3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 20px 44px -22px var(--adg-accent,#4fd0dc)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'none';
                }}
              >
                JOIN THE COMMITTEE
              </Link>
              <Link
                to="/events"
                className="adg-magnet-btn"
                style={{
                  position: 'relative',
                  padding: '16px 30px',
                  border: '1px solid rgba(241,237,227,.2)',
                  borderRadius: '999px',
                  color: '#f1ede3',
                  font: "500 13.5px/1 'IBM Plex Mono',monospace",
                  letterSpacing: '.06em',
                  transition: 'border-color .3s ease'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#f1ede3')}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(241,237,227,.2)')}
              >
                <span
                  data-fill="1"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(241,237,227,.08)',
                    transform: 'translateY(101%)',
                    transition: 'transform .4s cubic-bezier(.16,.84,.44,1)'
                  }}
                />
                <span style={{ position: 'relative' }}>SEE THE EVENTS</span>
              </Link>
            </div>

            <div
              data-reveal="1"
              style={{
                opacity: 0,
                transform: 'translateY(22px)',
                transition: 'opacity .7s cubic-bezier(.16,.84,.44,1),transform .7s cubic-bezier(.16,.84,.44,1)',
                marginTop: '42px',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0 32px',
                paddingTop: '24px',
                borderTop: '1px solid rgba(241,237,227,.1)'
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', padding: '8px 0' }}>
                <span style={{ font: "600 23px/1 'Space Grotesk',sans-serif", color: '#f1ede3' }}>19</span>
                <span style={{ font: "400 10px/1 'IBM Plex Mono',monospace", color: '#9aa7c0', letterSpacing: '.1em' }}>
                  TEACHING WEEKS
                </span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', padding: '8px 0' }}>
                <span style={{ font: "600 23px/1 'Space Grotesk',sans-serif", color: '#f1ede3' }}>6</span>
                <span style={{ font: "400 10px/1 'IBM Plex Mono',monospace", color: '#9aa7c0', letterSpacing: '.1em' }}>
                  EVENTS THIS TERM
                </span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', padding: '8px 0' }}>
                <span style={{ font: "600 23px/1 'Space Grotesk',sans-serif", color: '#f1ede3' }}>0</span>
                <span style={{ font: "400 10px/1 'IBM Plex Mono',monospace", color: '#9aa7c0', letterSpacing: '.1em' }}>
                  PREREQUISITES
                </span>
              </div>
            </div>
          </div>

          <div
            ref={heroArtRef}
            style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '330px'
            }}
          >
            <div
              data-anim="1"
              style={{
                position: 'absolute',
                width: 'min(430px,82vw)',
                height: 'min(430px,82vw)',
                border: '1px dashed rgba(241,237,227,.14)',
                borderRadius: '50%',
                animation: 'adgSpin 46s linear infinite'
              }}
            />
            <div
              data-anim="1"
              style={{
                position: 'absolute',
                width: 'min(320px,64vw)',
                height: 'min(320px,64vw)',
                border: '1px solid rgba(241,237,227,.09)',
                borderRadius: '50%',
                animation: 'adgSpin 32s linear infinite reverse'
              }}
            />
            <div data-anim="1" style={{ position: 'relative', animation: 'adgFloat 7s ease-in-out infinite' }}>
              <img
                ref={badgeRef}
                onClick={handleBadgeClick}
                src="/assets/adg-badge.png"
                alt="AI Developers Group badge"
                title="go on, click it"
                style={{
                  width: 'min(285px,58vw)',
                  height: 'auto',
                  display: 'block',
                  borderRadius: '26px',
                  boxShadow: '0 50px 90px -50px rgba(0,0,0,.95)',
                  cursor: 'pointer',
                  transition: 'transform .7s cubic-bezier(.16,.84,.44,1)'
                }}
              />
            </div>
            <span
              style={{
                position: 'absolute',
                bottom: '-4px',
                font: "400 9.5px/1 'IBM Plex Mono',monospace",
                color: '#5d6b88',
                letterSpacing: '.14em'
              }}
            >
              CLICK THE BADGE. WE DARE YOU.
            </span>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <section
        aria-label="What we work with"
        style={{
          borderTop: '1px solid rgba(241,237,227,.09)',
          borderBottom: '1px solid rgba(241,237,227,.09)',
          background: '#0e1830',
          padding: '19px 0',
          overflow: 'hidden'
        }}
      >
        <div data-marquee="1" style={{ display: 'flex', width: 'max-content', animation: 'adgMarquee 36s linear infinite' }}>
          {marqueeList.map((d, i) => (
            <span
              key={i}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '24px',
                padding: '0 24px',
                font: "500 12.5px/1 'IBM Plex Mono',monospace",
                color: '#9aa7c0',
                letterSpacing: '.13em',
                whiteSpace: 'nowrap'
              }}
            >
              {d}
              <span
                style={{
                  width: '4px',
                  height: '4px',
                  borderRadius: '50%',
                  background: 'var(--adg-accent,#4fd0dc)',
                  opacity: 0.55
                }}
              />
            </span>
          ))}
        </div>
      </section>

      {/* Hub Directory Section: Explore Pages */}
      <section style={{ padding: 'clamp(70px,9vw,110px) clamp(18px,4vw,40px)' }}>
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
              EXPLORE / THE COMMITTEE
            </span>
            <span style={{ font: "400 11px/1 'IBM Plex Mono',monospace", color: '#5d6b88', letterSpacing: '.1em' }}>
              // navigate by section
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

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'baseline',
              justifyContent: 'space-between',
              gap: '20px',
              marginBottom: 'clamp(34px,5vw,50px)'
            }}
          >
            <h2
              data-reveal="1"
              style={{
                opacity: 0,
                transform: 'translateY(22px)',
                transition: 'opacity .7s cubic-bezier(.16,.84,.44,1),transform .7s cubic-bezier(.16,.84,.44,1)',
                margin: 0,
                font: "600 clamp(30px,3.8vw,48px)/1.08 'Space Grotesk',sans-serif",
                letterSpacing: '-.03em',
                color: '#f1ede3'
              }}
            >
              Everything ADG, organized.
            </h2>
            <span
              data-reveal="1"
              style={{
                opacity: 0,
                transform: 'translateY(22px)',
                transition: 'opacity .7s cubic-bezier(.16,.84,.44,1),transform .7s cubic-bezier(.16,.84,.44,1)',
                font: "400 13px/1.5 'IBM Plex Mono',monospace",
                color: '#9aa7c0'
              }}
            >
              SELECT A SECTION TO DIVE DEEPER
            </span>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))',
              gap: '20px'
            }}
          >
            {/* Card 01 - About */}
            <Link
              to="/about"
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
                justifyContent: 'space-between',
                gap: '18px'
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
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <span
                    style={{
                      font: "400 11px/1 'IBM Plex Mono',monospace",
                      color: 'var(--adg-accent,#4fd0dc)',
                      letterSpacing: '.14em'
                    }}
                  >
                    01 / ABOUT
                  </span>
                  <span style={{ font: "600 24px/1 'Space Grotesk',sans-serif", color: 'rgba(241,237,227,.12)' }}>01</span>
                </div>
                <h3 style={{ margin: 0, font: "600 22px/1.2 'Space Grotesk',sans-serif", color: '#f1ede3' }}>
                  A committee is a habit, not a calendar.
                </h3>
                <p style={{ margin: '10px 0 0', font: "400 14.5px/1.65 'IBM Plex Sans',sans-serif", color: '#9aa7c0' }}>
                  Our core USPs, hands-on philosophy, and Year 1 targets measured at close.
                </p>
              </div>
              <span
                style={{
                  font: "500 12px/1 'IBM Plex Mono',monospace",
                  color: 'var(--adg-accent,#4fd0dc)',
                  letterSpacing: '.08em'
                }}
              >
                VIEW ABOUT PAGE →
              </span>
            </Link>

            {/* Card 02 - Mission */}
            <Link
              to="/mission"
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
                justifyContent: 'space-between',
                gap: '18px'
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
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <span
                    style={{
                      font: "400 11px/1 'IBM Plex Mono',monospace",
                      color: 'var(--adg-accent,#4fd0dc)',
                      letterSpacing: '.14em'
                    }}
                  >
                    02 / MISSION
                  </span>
                  <span style={{ font: "600 24px/1 'Space Grotesk',sans-serif", color: 'rgba(241,237,227,.12)' }}>02</span>
                </div>
                <h3 style={{ margin: 0, font: "600 22px/1.2 'Space Grotesk',sans-serif", color: '#f1ede3' }}>
                  Vision, Mission &amp; Objectives
                </h3>
                <p style={{ margin: '10px 0 0', font: "400 14.5px/1.65 'IBM Plex Sans',sans-serif", color: '#9aa7c0' }}>
                  Nurturing transformative intelligence in AI/ML through project competency and ethics.
                </p>
              </div>
              <span
                style={{
                  font: "500 12px/1 'IBM Plex Mono',monospace",
                  color: 'var(--adg-accent,#4fd0dc)',
                  letterSpacing: '.08em'
                }}
              >
                VIEW MISSION &amp; VISION →
              </span>
            </Link>

            {/* Card 03 - Events */}
            <Link
              to="/events"
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
                justifyContent: 'space-between',
                gap: '18px'
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
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <span
                    style={{
                      font: "400 11px/1 'IBM Plex Mono',monospace",
                      color: 'var(--adg-accent,#4fd0dc)',
                      letterSpacing: '.14em'
                    }}
                  >
                    03 / EVENTS
                  </span>
                  <span style={{ font: "600 24px/1 'Space Grotesk',sans-serif", color: 'rgba(241,237,227,.12)' }}>03</span>
                </div>
                <h3 style={{ margin: 0, font: "600 22px/1.2 'Space Grotesk',sans-serif", color: '#f1ede3' }}>
                  Term 1 — Workshops &amp; Hackathons
                </h3>
                <p style={{ margin: '10px 0 0', font: "400 14.5px/1.65 'IBM Plex Sans',sans-serif", color: '#9aa7c0' }}>
                  Specialist-led sessions, the flagship hackathon, and published seminar notes.
                </p>
              </div>
              <span
                style={{
                  font: "500 12px/1 'IBM Plex Mono',monospace",
                  color: 'var(--adg-accent,#4fd0dc)',
                  letterSpacing: '.08em'
                }}
              >
                VIEW ALL EVENTS →
              </span>
            </Link>

            {/* Card 04 - Team */}
            <Link
              to="/team"
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
                justifyContent: 'space-between',
                gap: '18px'
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
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <span
                    style={{
                      font: "400 11px/1 'IBM Plex Mono',monospace",
                      color: 'var(--adg-accent,#4fd0dc)',
                      letterSpacing: '.14em'
                    }}
                  >
                    04 / THE TEAM
                  </span>
                  <span style={{ font: "600 24px/1 'Space Grotesk',sans-serif", color: 'rgba(241,237,227,.12)' }}>04</span>
                </div>
                <h3 style={{ margin: 0, font: "600 22px/1.2 'Space Grotesk',sans-serif", color: '#f1ede3' }}>
                  10 Levels: Faculty, Core &amp; Domains
                </h3>
                <p style={{ margin: '10px 0 0', font: "400 14.5px/1.65 'IBM Plex Sans',sans-serif", color: '#9aa7c0' }}>
                  Meet HOD &amp; coordinators, core officers and the 8 dedicated domain teams.
                </p>
              </div>
              <span
                style={{
                  font: "500 12px/1 'IBM Plex Mono',monospace",
                  color: 'var(--adg-accent,#4fd0dc)',
                  letterSpacing: '.08em'
                }}
              >
                VIEW THE TEAM TREE →
              </span>
            </Link>

            {/* Card 05 - Gallery */}
            <Link
              to="/gallery"
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
                justifyContent: 'space-between',
                gap: '18px'
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
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <span
                    style={{
                      font: "400 11px/1 'IBM Plex Mono',monospace",
                      color: 'var(--adg-accent,#4fd0dc)',
                      letterSpacing: '.14em'
                    }}
                  >
                    05 / GALLERY
                  </span>
                  <span style={{ font: "600 24px/1 'Space Grotesk',sans-serif", color: 'rgba(241,237,227,.12)' }}>05</span>
                </div>
                <h3 style={{ margin: 0, font: "600 22px/1.2 'Space Grotesk',sans-serif", color: '#f1ede3' }}>
                  Proof of work, not posters
                </h3>
                <p style={{ margin: '10px 0 0', font: "400 14.5px/1.65 'IBM Plex Sans',sans-serif", color: '#9aa7c0' }}>
                  Explore the committee kickoffs, lab shots, hands-on key moments, and demos.
                </p>
              </div>
              <span
                style={{
                  font: "500 12px/1 'IBM Plex Mono',monospace",
                  color: 'var(--adg-accent,#4fd0dc)',
                  letterSpacing: '.08em'
                }}
              >
                OPEN PHOTO GALLERY →
              </span>
            </Link>

            {/* Card 06 - Join */}
            <Link
              to="/join"
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
                justifyContent: 'space-between',
                gap: '18px'
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
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <span
                    style={{
                      font: "400 11px/1 'IBM Plex Mono',monospace",
                      color: 'var(--adg-accent,#4fd0dc)',
                      letterSpacing: '.14em'
                    }}
                  >
                    06 / JOIN ADG
                  </span>
                  <span style={{ font: "600 24px/1 'Space Grotesk',sans-serif", color: 'rgba(241,237,227,.12)' }}>06</span>
                </div>
                <h3 style={{ margin: 0, font: "600 22px/1.2 'Space Grotesk',sans-serif", color: '#f1ede3' }}>
                  Member → Contributor → Core
                </h3>
                <p style={{ margin: '10px 0 0', font: "400 14.5px/1.65 'IBM Plex Sans',sans-serif", color: '#9aa7c0' }}>
                  One 2-minute form. Open to any branch and year. Zero prerequisites or fee.
                </p>
              </div>
              <span
                style={{
                  font: "500 12px/1 'IBM Plex Mono',monospace",
                  color: 'var(--adg-accent,#4fd0dc)',
                  letterSpacing: '.08em'
                }}
              >
                REGISTER NOW →
              </span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
