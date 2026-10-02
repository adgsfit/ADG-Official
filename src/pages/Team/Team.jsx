import React, { useState, useEffect, useRef } from 'react';
import {
  treeLevels,
  faculty,
  core,
  domainLevels,
  getMemberData
} from '../../data/team';
import MemberModal from '../../components/Modal/MemberModal';
import { useADGEffects } from '../../utils/useEffects';

export default function Team() {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [selectedMember, setSelectedMember] = useState(null);
  const chipContainerRef = useRef(null);

  useADGEffects([currentLevel]);

  // Keyboard navigation for levels
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedMember) return;
      if (e.key === 'ArrowLeft') {
        setCurrentLevel((prev) => Math.max(0, prev - 1));
      } else if (e.key === 'ArrowRight') {
        setCurrentLevel((prev) => Math.min(treeLevels.length - 1, prev + 1));
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [selectedMember]);

  // Scroll active chip into view
  useEffect(() => {
    if (chipContainerRef.current) {
      const activeChip = chipContainerRef.current.children[currentLevel];
      if (activeChip) {
        activeChip.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  }, [currentLevel]);

  const handleOpenMember = (name, role, domain) => {
    const memberData = getMemberData(name, role, domain);
    setSelectedMember(memberData);
  };

  return (
    <main style={{ paddingTop: 'clamp(110px,12vw,144px)' }}>
      <section
        id="team"
        data-screen-label="Team"
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
              04 / ORGANISATIONAL STRUCTURE
            </span>
            <span style={{ font: "400 11px/1 'IBM Plex Mono',monospace", color: '#5d6b88', letterSpacing: '.1em' }}>
              // AY 2026–27 · 10 levels
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
            Every face in the group.
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
            A department committee needs two things: faculty who clear the path and students who run the work.
            Explore through the ten levels below — click any member card to view their profile.
          </p>

          {/* Level Switcher Container */}
          <div
            style={{
              marginTop: 'clamp(40px,6vw,60px)',
              background: '#0d162a',
              border: '1px solid rgba(241,237,227,.12)',
              borderRadius: '24px',
              padding: 'clamp(20px,4vw,36px)'
            }}
          >
            {/* Top Bar with Navigation Arrows & Indicator */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '16px',
                paddingBottom: '20px',
                borderBottom: '1px solid rgba(241,237,227,.08)'
              }}
            >
              <div>
                <span
                  style={{
                    font: "500 12.5px/1 'IBM Plex Mono',monospace",
                    color: 'var(--adg-accent,#4fd0dc)',
                    letterSpacing: '.1em'
                  }}
                >
                  LEVEL {currentLevel + 1} OF {treeLevels.length} · {treeLevels[currentLevel].label}
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <button
                  onClick={() => setCurrentLevel((prev) => Math.max(0, prev - 1))}
                  disabled={currentLevel === 0}
                  aria-label="Previous level"
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '10px',
                    border: '1px solid rgba(241,237,227,.16)',
                    background: 'rgba(241,237,227,.05)',
                    color: currentLevel === 0 ? '#44516d' : '#f1ede3',
                    cursor: currentLevel === 0 ? 'not-allowed' : 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '15px'
                  }}
                >
                  ←
                </button>
                <button
                  onClick={() => setCurrentLevel((prev) => Math.min(treeLevels.length - 1, prev + 1))}
                  disabled={currentLevel === treeLevels.length - 1}
                  aria-label="Next level"
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '10px',
                    border: '1px solid rgba(241,237,227,.16)',
                    background: 'rgba(241,237,227,.05)',
                    color: currentLevel === treeLevels.length - 1 ? '#44516d' : '#f1ede3',
                    cursor: currentLevel === treeLevels.length - 1 ? 'not-allowed' : 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '15px'
                  }}
                >
                  →
                </button>
              </div>
            </div>

            {/* Chip Scroll Container */}
            <div
              ref={chipContainerRef}
              className="no-scrollbar"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                overflowX: 'auto',
                padding: '16px 0',
                borderBottom: '1px solid rgba(241,237,227,.08)'
              }}
            >
              {treeLevels.map((lvl, idx) => {
                const active = currentLevel === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setCurrentLevel(idx)}
                    style={{
                      flex: 'none',
                      padding: '8px 14px',
                      borderRadius: '999px',
                      border: `1px solid ${active ? 'var(--adg-accent,#4fd0dc)' : 'rgba(241,237,227,.12)'}`,
                      background: active ? 'rgba(79,208,220,.12)' : 'transparent',
                      color: active ? 'var(--adg-accent,#4fd0dc)' : '#8e9ab4',
                      font: "500 11px/1 'IBM Plex Mono',monospace",
                      letterSpacing: '.06em',
                      cursor: 'pointer',
                      whiteSpace: 'nowrap',
                      transition: 'all .25s ease'
                    }}
                  >
                    {idx + 1 < 10 ? '0' : ''}
                    {idx + 1} · {lvl.label}
                  </button>
                );
              })}
            </div>

            {/* Tree View Display */}
            <div style={{ minHeight: '380px', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '36px' }}>
              {/* LEVEL 1: Faculty */}
              {currentLevel === 0 && (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                  {/* Top Node */}
                  <div
                    className="member-card"
                    onClick={() => handleOpenMember(faculty.top.name, faculty.top.role, 'Faculty Advisory')}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '14px',
                      width: 'min(320px, 94vw)',
                      background: '#111c33',
                      border: '1px solid rgba(79,208,220,.35)',
                      borderRadius: '16px',
                      padding: '14px 16px'
                    }}
                  >
                    <div
                      style={{
                        flex: 'none',
                        width: '56px',
                        height: '56px',
                        borderRadius: '14px',
                        background: 'repeating-linear-gradient(135deg,#1b2947 0 8px,#22314f 8px 16px)',
                        border: '1px solid var(--adg-accent,#4fd0dc)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        font: "700 18px/1 'Space Grotesk',sans-serif",
                        color: 'var(--adg-accent,#4fd0dc)'
                      }}
                    >
                      HOD
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', minWidth: 0, flex: 1 }}>
                      <span
                        style={{
                          font: "500 9px/1.3 'IBM Plex Mono',monospace",
                          color: 'var(--adg-accent,#4fd0dc)',
                          letterSpacing: '.08em'
                        }}
                      >
                        {faculty.top.role}
                      </span>
                      <span
                        style={{
                          font: "600 15px/1.2 'Space Grotesk',sans-serif",
                          color: '#f1ede3',
                          letterSpacing: '-.01em'
                        }}
                      >
                        {faculty.top.name}
                      </span>
                      <span style={{ font: "400 10.5px/1 'IBM Plex Sans',sans-serif", color: '#8e9ab4' }}>
                        Click for profile ↗
                      </span>
                    </div>
                  </div>

                  {/* Connector Line */}
                  <div style={{ width: '2px', height: '24px', background: 'rgba(79,208,220,.4)' }} />

                  {/* Children Row */}
                  <div
                    style={{
                      position: 'relative',
                      display: 'flex',
                      flexWrap: 'wrap',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '16px',
                      paddingTop: '16px',
                      maxWidth: 'min(680px, 100%)'
                    }}
                  >
                    <div
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 'max(20px, calc(50% - 150px))',
                        right: 'max(20px, calc(50% - 150px))',
                        height: '2px',
                        background: 'rgba(79,208,220,.4)'
                      }}
                    />
                    {faculty.children.map((c, i) => (
                      <div
                        key={i}
                        className="member-card"
                        onClick={() => handleOpenMember(c.name, c.role, 'Faculty Advisory')}
                        style={{
                          position: 'relative',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '12px',
                          width: 'min(290px, 94vw)',
                          background: '#111c33',
                          border: '1px solid rgba(241,237,227,.14)',
                          borderRadius: '16px',
                          padding: '14px 16px'
                        }}
                      >
                        <div
                          style={{
                            position: 'absolute',
                            top: '-17px',
                            left: '50%',
                            width: '2px',
                            height: '16px',
                            background: 'rgba(79,208,220,.4)'
                          }}
                        />
                        <div
                          style={{
                            flex: 'none',
                            width: '50px',
                            height: '50px',
                            borderRadius: '12px',
                            background: 'repeating-linear-gradient(135deg,#1b2947 0 8px,#22314f 8px 16px)',
                            border: '1px solid rgba(79,208,220,.3)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            font: "700 16px/1 'Space Grotesk',sans-serif",
                            color: '#8e9ab4'
                          }}
                        >
                          FC
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', minWidth: 0, flex: 1 }}>
                          <span
                            style={{
                              font: "500 8.5px/1.3 'IBM Plex Mono',monospace",
                              color: 'var(--adg-accent,#4fd0dc)',
                              letterSpacing: '.08em'
                            }}
                          >
                            {c.role}
                          </span>
                          <span
                            style={{
                              font: "600 14px/1.2 'Space Grotesk',sans-serif",
                              color: '#f1ede3',
                              letterSpacing: '-.01em'
                            }}
                          >
                            {c.name}
                          </span>
                          <span style={{ font: "400 10.5px/1 'IBM Plex Sans',sans-serif", color: '#8e9ab4' }}>
                            Click for profile ↗
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* LEVEL 2: Core Officers */}
              {currentLevel === 1 && (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                  {/* President */}
                  <div
                    className="member-card"
                    onClick={() => handleOpenMember(core.top.name, core.top.role, 'Core Leadership')}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '14px',
                      width: 'min(320px, 94vw)',
                      background: '#111c33',
                      border: '1px solid rgba(79,208,220,.35)',
                      borderRadius: '16px',
                      padding: '14px 16px'
                    }}
                  >
                    <div
                      style={{
                        flex: 'none',
                        width: '56px',
                        height: '56px',
                        borderRadius: '14px',
                        background: 'repeating-linear-gradient(135deg,#1b2947 0 8px,#22314f 8px 16px)',
                        border: '1px solid var(--adg-accent,#4fd0dc)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        font: "700 18px/1 'Space Grotesk',sans-serif",
                        color: 'var(--adg-accent,#4fd0dc)'
                      }}
                    >
                      PR
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', minWidth: 0, flex: 1 }}>
                      <span
                        style={{
                          font: "500 9px/1.3 'IBM Plex Mono',monospace",
                          color: 'var(--adg-accent,#4fd0dc)',
                          letterSpacing: '.08em'
                        }}
                      >
                        {core.top.role}
                      </span>
                      <span
                        style={{
                          font: "600 15px/1.2 'Space Grotesk',sans-serif",
                          color: '#f1ede3',
                          letterSpacing: '-.01em'
                        }}
                      >
                        {core.top.name}
                      </span>
                      <span style={{ font: "400 10.5px/1 'IBM Plex Sans',sans-serif", color: '#8e9ab4' }}>
                        Click for profile ↗
                      </span>
                    </div>
                  </div>

                  {/* Connector Line */}
                  <div style={{ width: '2px', height: '24px', background: 'rgba(79,208,220,.4)' }} />

                  {/* VP, Sec, Treas */}
                  <div
                    style={{
                      position: 'relative',
                      display: 'flex',
                      flexWrap: 'wrap',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '14px',
                      paddingTop: '16px',
                      maxWidth: 'min(890px, 100%)'
                    }}
                  >
                    <div
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 'max(20px, calc(50% - 240px))',
                        right: 'max(20px, calc(50% - 240px))',
                        height: '2px',
                        background: 'rgba(79,208,220,.4)'
                      }}
                    />
                    {core.children.map((c, i) => (
                      <div
                        key={i}
                        className="member-card"
                        onClick={() => handleOpenMember(c.name, c.role, 'Core Leadership')}
                        style={{
                          position: 'relative',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '12px',
                          width: 'min(270px, 94vw)',
                          background: '#111c33',
                          border: '1px solid rgba(241,237,227,.14)',
                          borderRadius: '16px',
                          padding: '14px 16px'
                        }}
                      >
                        <div
                          style={{
                            position: 'absolute',
                            top: '-17px',
                            left: '50%',
                            width: '2px',
                            height: '16px',
                            background: 'rgba(79,208,220,.4)'
                          }}
                        />
                        <div
                          style={{
                            flex: 'none',
                            width: '50px',
                            height: '50px',
                            borderRadius: '12px',
                            background: 'repeating-linear-gradient(135deg,#1b2947 0 8px,#22314f 8px 16px)',
                            border: '1px solid rgba(79,208,220,.3)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            font: "700 16px/1 'Space Grotesk',sans-serif",
                            color: '#8e9ab4'
                          }}
                        >
                          CR
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', minWidth: 0, flex: 1 }}>
                          <span
                            style={{
                              font: "500 8.5px/1.3 'IBM Plex Mono',monospace",
                              color: 'var(--adg-accent,#4fd0dc)',
                              letterSpacing: '.08em'
                            }}
                          >
                            {c.role}
                          </span>
                          <span
                            style={{
                              font: "600 14px/1.2 'Space Grotesk',sans-serif",
                              color: '#f1ede3',
                              letterSpacing: '-.01em'
                            }}
                          >
                            {c.name}
                          </span>
                          <span style={{ font: "400 10.5px/1 'IBM Plex Sans',sans-serif", color: '#8e9ab4' }}>
                            Click for profile ↗
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* LEVELS 3-10: Domain Teams */}
              {currentLevel >= 2 && (
                (() => {
                  const d = domainLevels[currentLevel - 2];
                  if (!d) return null;
                  return (
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                      {/* Domain Head */}
                      <div
                        className="member-card"
                        onClick={() => handleOpenMember(d.head, 'HEAD', d.name)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '14px',
                          width: 'min(310px, 94vw)',
                          background: '#111c33',
                          border: '1px solid rgba(79,208,220,.35)',
                          borderRadius: '16px',
                          padding: '14px 16px'
                        }}
                      >
                        <div
                          style={{
                            flex: 'none',
                            width: '56px',
                            height: '56px',
                            borderRadius: '14px',
                            background: 'repeating-linear-gradient(135deg,#1b2947 0 8px,#22314f 8px 16px)',
                            border: '1px solid var(--adg-accent,#4fd0dc)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            font: "700 18px/1 'Space Grotesk',sans-serif",
                            color: 'var(--adg-accent,#4fd0dc)'
                          }}
                        >
                          HD
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', minWidth: 0, flex: 1 }}>
                          <span
                            style={{
                              font: "500 9px/1.3 'IBM Plex Mono',monospace",
                              color: 'var(--adg-accent,#4fd0dc)',
                              letterSpacing: '.08em'
                            }}
                          >
                            {d.name.toUpperCase()} HEAD
                          </span>
                          <span
                            style={{
                              font: "600 15px/1.2 'Space Grotesk',sans-serif",
                              color: '#f1ede3',
                              letterSpacing: '-.01em'
                            }}
                          >
                            {d.head}
                          </span>
                          <span style={{ font: "400 10.5px/1 'IBM Plex Sans',sans-serif", color: '#8e9ab4' }}>
                            Click for profile ↗
                          </span>
                        </div>
                      </div>

                      {/* Joint Heads Tier if exists */}
                      {d.hasJoint && (
                        <>
                          <div style={{ width: '2px', height: '20px', background: 'rgba(79,208,220,.4)' }} />
                          <div
                            style={{
                              position: 'relative',
                              display: 'flex',
                              flexWrap: 'wrap',
                              alignItems: 'center',
                              justifyContent: 'center',
                              gap: '14px',
                              paddingTop: '14px',
                              maxWidth: 'min(640px, 100%)'
                            }}
                          >
                            <div
                              style={{
                                position: 'absolute',
                                top: 0,
                                left: 'max(20px, calc(50% - 140px))',
                                right: 'max(20px, calc(50% - 140px))',
                                height: '2px',
                                background: 'rgba(79,208,220,.4)'
                              }}
                            />
                            {d.joint.map((p, i) => (
                              <div
                                key={i}
                                className="member-card"
                                onClick={() => handleOpenMember(p.name, 'JOINT HEAD', d.name)}
                                style={{
                                  position: 'relative',
                                  display: 'flex',
                                  alignItems: 'center',
                                  gap: '12px',
                                  width: 'min(260px, 94vw)',
                                  background: '#111c33',
                                  border: '1px solid rgba(241,237,227,.14)',
                                  borderRadius: '15px',
                                  padding: '12px 14px'
                                }}
                              >
                                <div
                                  style={{
                                    position: 'absolute',
                                    top: '-15px',
                                    left: '50%',
                                    width: '2px',
                                    height: '14px',
                                    background: 'rgba(79,208,220,.4)'
                                  }}
                                />
                                <div
                                  style={{
                                    flex: 'none',
                                    width: '50px',
                                    height: '50px',
                                    borderRadius: '12px',
                                    border: '1px solid rgba(79,208,220,.3)',
                                    background: 'repeating-linear-gradient(135deg,#1b2947 0 8px,#22314f 8px 16px)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    font: "700 16px/1 'Space Grotesk',sans-serif",
                                    color: '#8e9ab4'
                                  }}
                                >
                                  JH
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', minWidth: 0, flex: 1 }}>
                                  <span
                                    style={{
                                      font: "500 8.5px/1.3 'IBM Plex Mono',monospace",
                                      color: 'var(--adg-accent,#4fd0dc)',
                                      letterSpacing: '.08em'
                                    }}
                                  >
                                    JOINT HEAD
                                  </span>
                                  <span
                                    style={{
                                      font: "600 14px/1.2 'Space Grotesk',sans-serif",
                                      color: '#f1ede3',
                                      letterSpacing: '-.01em'
                                    }}
                                  >
                                    {p.name}
                                  </span>
                                  <span style={{ font: "400 10px/1 'IBM Plex Sans',sans-serif", color: '#8e9ab4' }}>
                                    Click for profile ↗
                                  </span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </>
                      )}

                      {/* Execs Tier */}
                      <div style={{ width: '2px', height: '18px', background: 'rgba(79,208,220,.4)' }} />
                      <div
                        style={{
                          position: 'relative',
                          display: 'flex',
                          flexWrap: 'wrap',
                          alignItems: 'flex-start',
                          justifyContent: 'center',
                          gap: '12px',
                          paddingTop: '12px',
                          maxWidth: 'min(860px, 100%)'
                        }}
                      >
                        <div
                          style={{
                            position: 'absolute',
                            top: 0,
                            left: 'max(15px, calc(50% - 200px))',
                            right: 'max(15px, calc(50% - 200px))',
                            height: '2px',
                            background: 'rgba(79,208,220,.4)'
                          }}
                        />
                        {d.execs.map((p, i) => (
                          <div
                            key={i}
                            className="member-card"
                            onClick={() => handleOpenMember(p.name, 'EXECUTIVE', d.name)}
                            style={{
                              position: 'relative',
                              display: 'flex',
                              flexDirection: 'column',
                              alignItems: 'center',
                              gap: '8px',
                              width: 'min(115px, 28vw)',
                              background: '#111c33',
                              border: '1px solid rgba(241,237,227,.12)',
                              borderRadius: '14px',
                              padding: '10px 8px 12px'
                            }}
                          >
                            <div
                              style={{
                                position: 'absolute',
                                top: '-13px',
                                left: '50%',
                                width: '2px',
                                height: '12px',
                                background: 'rgba(79,208,220,.4)'
                              }}
                            />
                            <div
                              style={{
                                width: '100%',
                                aspectRatio: '1',
                                borderRadius: '10px',
                                background: 'repeating-linear-gradient(135deg,#16223c 0 7px,#1b2947 7px 14px)',
                                display: 'flex',
                                alignItems: 'center',
                                justifySelf: 'center',
                                justifyContent: 'center',
                                font: "700 13px/1 'Space Grotesk',sans-serif",
                                color: '#6d7b98'
                              }}
                            >
                              EX
                            </div>
                            <div
                              style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: '3px',
                                textAlign: 'center',
                                width: '100%'
                              }}
                            >
                              <span
                                style={{
                                  font: "500 8px/1.3 'IBM Plex Mono',monospace",
                                  color: '#8e9ab4',
                                  letterSpacing: '.1em'
                                }}
                              >
                                EXEC
                              </span>
                              <span
                                style={{
                                  font: "600 11px/1.2 'Space Grotesk',sans-serif",
                                  color: '#f1ede3',
                                  wordBreak: 'break-word'
                                }}
                              >
                                {p.name}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>

                      {d.note && (
                        <span
                          style={{
                            marginTop: '16px',
                            font: "400 10.5px/1.5 'IBM Plex Mono',monospace",
                            color: '#5d6b88',
                            letterSpacing: '.08em'
                          }}
                        >
                          {d.note}
                        </span>
                      )}
                    </div>
                  );
                })()
              )}
            </div>

            {/* Bottom Dot Indicators */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', paddingTop: '24px' }}>
              {treeLevels.map((lv, idx) => {
                const active = currentLevel === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setCurrentLevel(idx)}
                    title={lv.label}
                    style={{
                      width: active ? '34px' : '24px',
                      height: '6px',
                      borderRadius: '99px',
                      border: 0,
                      padding: 0,
                      background: active ? 'var(--adg-accent,#4fd0dc)' : 'rgba(241,237,227,.15)',
                      cursor: 'pointer',
                      transition: 'background .3s ease, width .3s ease'
                    }}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Member Profile Modal */}
      <MemberModal member={selectedMember} onClose={() => setSelectedMember(null)} />
    </main>
  );
}
