'use client'

import { useEffect, useState, useRef } from 'react'

export default function IntroLoader() {
  const [phase, setPhase] = useState(0)
  const [exiting, setExiting] = useState(false)
  const [removed, setRemoved] = useState(false)
  const timers = useRef([])

  useEffect(() => {
    // Disable scrolling while loader is active to prevent lag/Lenis conflict
    document.body.style.overflow = 'hidden'

    const t = (fn, ms) => {
      const id = setTimeout(fn, ms)
      timers.current.push(id)
    }

    const MIN_DURATION = 2600

    // Animation sequence — staggered reveals
    t(() => setPhase(1), 80)    // frame lines + corners appear
    t(() => setPhase(2), 280)   // tag "Est. 1974" fades in
    t(() => setPhase(3), 550)   // chakra wheel scales in
    t(() => setPhase(4), 900)   // "Giriraj" slides up
    t(() => setPhase(5), 1260)  // "Yatra Sangh" slides up (italic gold)
    t(() => setPhase(6), 1600)  // divider line expands
    t(() => setPhase(7), 1820)  // subtitle line slides up
    t(() => setPhase(8), 2020)  // bottom progress bar appears
    t(() => setPhase(9), 2070)  // progress bar fills

    // Exit after minimum duration
    t(() => setExiting(true), MIN_DURATION + 400)
    t(() => {
      setRemoved(true)
      document.body.style.overflow = '' // Restore scrolling
    }, MIN_DURATION + 1700)

    return () => {
      timers.current.forEach(clearTimeout)
      document.body.style.overflow = '' // Ensure scrolling is restored on unmount
    }
  }, [])

  if (removed) return null

  const ease = 'cubic-bezier(0.77, 0, 0.175, 1)'
  const fadeEase = 'cubic-bezier(0.4, 0, 0.2, 1)'

  return (
    <>
      {/* ── LOADER OVERLAY ───────────────────────────────── */}
      <div
        aria-hidden="true"
        style={{
          position: 'fixed',
          inset: 0,
          background: '#0A0805',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999,
          opacity: exiting ? 0 : 1,
          visibility: exiting ? 'hidden' : 'visible',
          transition: exiting
            ? `opacity 1.1s ${fadeEase}, visibility 1.1s ${fadeEase}`
            : 'none',
          overflow: 'hidden',
        }}
      >

        {/* Ambient radial glow behind everything */}
        <div style={{
          position: 'absolute',
          width: 640,
          height: 640,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(201,168,76,0.045) 0%, transparent 70%)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          animation: 'gys-pulse 4s ease-in-out infinite',
        }} />

        {/* ── Frame: horizontal rules ── */}
        {[{ top: 44 }, { bottom: 44 }].map((pos, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              left: '8%',
              right: '8%',
              height: 1,
              background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.18), transparent)',
              transform: phase >= 1 ? 'scaleX(1)' : 'scaleX(0)',
              transition: `transform 1.1s ${fadeEase} ${i * 0.05}s`,
              ...pos,
            }}
          />
        ))}

        {/* ── Frame: corner accents ── */}
        {[
          { top: 40, left: '8%',  borderWidth: '1px 0 0 1px' },
          { top: 40, right: '8%', borderWidth: '1px 1px 0 0' },
          { bottom: 40, left: '8%',  borderWidth: '0 0 1px 1px' },
          { bottom: 40, right: '8%', borderWidth: '0 1px 1px 0' },
        ].map((style, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              width: 18,
              height: 18,
              borderStyle: 'solid',
              borderColor: 'rgba(201,168,76,0.28)',
              opacity: phase >= 1 ? 1 : 0,
              transition: `opacity 0.7s ease ${0.2 + i * 0.04}s`,
              ...style,
            }}
          />
        ))}



        {/* ── Chakra Wheel ── */}
        <div style={{
          marginBottom: 44,
          opacity: phase >= 3 ? 1 : 0,
          transform: phase >= 3 ? 'scale(1)' : 'scale(0.82)',
          transition: `opacity 0.9s ease, transform 0.9s ease`,
        }}>
          <svg
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="none"
            style={{ animation: 'gys-spin 10s linear infinite', display: 'block' }}
          >
            <circle cx="32" cy="32" r="30" stroke="#C9A84C" strokeWidth="1"   opacity="0.22"/>
            <circle cx="32" cy="32" r="20" stroke="#C9A84C" strokeWidth="0.8" opacity="0.45"/>
            <circle cx="32" cy="32" r="5.5" fill="#C9A84C"/>
            {/* 4 main spokes */}
            <line x1="32" y1="2"    x2="32" y2="26.5" stroke="#C9A84C" strokeWidth="1.5"/>
            <line x1="32" y1="37.5" x2="32" y2="62"   stroke="#C9A84C" strokeWidth="1.5"/>
            <line x1="2"  y1="32"   x2="26.5" y2="32" stroke="#C9A84C" strokeWidth="1.5"/>
            <line x1="37.5" y1="32" x2="62" y2="32"   stroke="#C9A84C" strokeWidth="1.5"/>
            {/* 4 diagonal spokes */}
            <line x1="5.4"  y1="5.4"  x2="22.9" y2="22.9" stroke="#C9A84C" strokeWidth="1.2"/>
            <line x1="41.1" y1="41.1" x2="58.6" y2="58.6" stroke="#C9A84C" strokeWidth="1.2"/>
            <line x1="58.6" y1="5.4"  x2="41.1" y2="22.9" stroke="#C9A84C" strokeWidth="1.2"/>
            <line x1="22.9" y1="41.1" x2="5.4"  y2="58.6" stroke="#C9A84C" strokeWidth="1.2"/>
            {/* Spoke tip dots — cardinal */}
            <circle cx="32" cy="2"  r="2.5" fill="#C9A84C"/>
            <circle cx="32" cy="62" r="2.5" fill="#C9A84C"/>
            <circle cx="2"  cy="32" r="2.5" fill="#C9A84C"/>
            <circle cx="62" cy="32" r="2.5" fill="#C9A84C"/>
            {/* Spoke tip dots — diagonal */}
            <circle cx="5.4"  cy="5.4"  r="2" fill="#C9A84C" opacity="0.6"/>
            <circle cx="58.6" cy="58.6" r="2" fill="#C9A84C" opacity="0.6"/>
            <circle cx="58.6" cy="5.4"  r="2" fill="#C9A84C" opacity="0.6"/>
            <circle cx="5.4"  cy="58.6" r="2" fill="#C9A84C" opacity="0.6"/>
          </svg>
        </div>

        {/* ── Text Block ── */}
        <div style={{ textAlign: 'center', marginBottom: 0 }}>

          {/* Line 1: "Giriraj" — white serif, slides up */}
          <div style={{
            overflow: 'hidden',
            height: phase >= 4 ? 'clamp(44px, 8vw, 66px)' : 0,
            transition: `height 0.65s ${ease}`,
          }}>
            <div style={{
              fontFamily: 'var(--font-playfair), Georgia, serif',
              fontSize: 'clamp(36px, 7vw, 56px)',
              fontWeight: 400,
              fontStyle: 'normal',
              color: '#FFFFFF',
              letterSpacing: '4px',
              lineHeight: 1.15,
              whiteSpace: 'nowrap',
            }}>
              Giriraj
            </div>
          </div>

          {/* Line 2: "Yatra Sangh" — italic gold, slides up */}
          <div style={{
            overflow: 'hidden',
            height: phase >= 5 ? 'clamp(44px, 8vw, 66px)' : 0,
            transition: `height 0.65s ${ease}`,
          }}>
            <div style={{
              fontFamily: 'var(--font-playfair), Georgia, serif',
              fontSize: 'clamp(36px, 7vw, 56px)',
              fontWeight: 400,
              fontStyle: 'italic',
              color: '#C9A84C',
              letterSpacing: '4px',
              lineHeight: 1.15,
              whiteSpace: 'nowrap',
            }}>
              Yatra Sangh
            </div>
          </div>

          {/* Divider: dot + expanding lines */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 14,
            margin: '18px 0',
            opacity: phase >= 6 ? 1 : 0,
            transition: 'opacity 0.5s ease',
          }}>
            <div style={{
              height: 1,
              width: phase >= 6 ? 88 : 0,
              background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.45))',
              transition: `width 0.9s ${fadeEase} 0.05s`,
            }} />
            <div style={{
              width: 4, height: 4, borderRadius: '50%',
              background: '#C9A84C', opacity: 0.55,
            }} />
            <div style={{
              height: 1,
              width: phase >= 6 ? 88 : 0,
              background: 'linear-gradient(90deg, rgba(201,168,76,0.45), transparent)',
              transition: `width 0.9s ${fadeEase} 0.05s`,
            }} />
          </div>

          {/* Line 3: subtitle — slides up */}
          <div style={{
            overflow: 'hidden',
            height: phase >= 7 ? 22 : 0,
            transition: `height 0.55s ${ease}`,
          }}>
            <div style={{
              fontFamily: 'var(--font-montserrat), Helvetica Neue, sans-serif',
              fontSize: 'clamp(9px, 2vw, 11px)',
              fontWeight: 300,
              letterSpacing: '6px',
              color: 'rgba(201,168,76,0.65)',
              textTransform: 'uppercase',
              whiteSpace: 'nowrap',
            }}>
              Premier Cab &amp; Bus Service
            </div>
          </div>
        </div>



      </div>
      {/* ── END LOADER OVERLAY ── */}
    </>
  )
}
