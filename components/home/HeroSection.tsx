'use client'

import Image from 'next/image'
import Link from 'next/link'

/* ─── Floating glass diamond decoration ─────────────────────────────────── */
function GlassDiamond({
  size = 60,
  style,
  className,
}: {
  size?: number
  style?: React.CSSProperties
  className?: string
}) {
  return (
    <div
      className={`absolute pointer-events-none select-none ${className ?? ''}`}
      style={style}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon
          points="30,2 58,20 48,56 12,56 2,20"
          fill="rgba(180,155,80,0.07)"
          stroke="rgba(201,168,76,0.38)"
          strokeWidth="1"
        />
        <polygon
          points="30,10 50,24 42,50 18,50 10,24"
          fill="rgba(255,240,180,0.04)"
          stroke="rgba(255,235,160,0.16)"
          strokeWidth="0.6"
        />
        <line x1="30" y1="2"  x2="30" y2="20" stroke="rgba(255,240,190,0.5)" strokeWidth="0.8" />
        <line x1="30" y1="2"  x2="42" y2="13" stroke="rgba(255,240,190,0.2)" strokeWidth="0.5" />
        <line x1="30" y1="2"  x2="18" y2="13" stroke="rgba(255,240,190,0.2)" strokeWidth="0.5" />
      </svg>
    </div>
  )
}

/* ─── Reference-accurate golden ribbon wave SVG ──────────────────────────── */
function GoldenWaves() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 1440 820"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Primary bright ribbon — gold peaks in centre */}
        <linearGradient id="rg1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stopColor="#C9A84C" stopOpacity="0"   />
          <stop offset="22%"  stopColor="#C9A84C" stopOpacity="0.5" />
          <stop offset="52%"  stopColor="#EAD580" stopOpacity="1"   />
          <stop offset="78%"  stopColor="#C9A84C" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#C9A84C" stopOpacity="0"   />
        </linearGradient>
        <linearGradient id="rg2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stopColor="#A07830" stopOpacity="0"   />
          <stop offset="30%"  stopColor="#C9A84C" stopOpacity="0.38"/>
          <stop offset="58%"  stopColor="#D4B45E" stopOpacity="0.68"/>
          <stop offset="100%" stopColor="#C9A84C" stopOpacity="0"   />
        </linearGradient>
        <linearGradient id="rg3" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stopColor="#C9A84C" stopOpacity="0"   />
          <stop offset="40%"  stopColor="#C9A84C" stopOpacity="0.28"/>
          <stop offset="72%"  stopColor="#C9A84C" stopOpacity="0.48"/>
          <stop offset="100%" stopColor="#C9A84C" stopOpacity="0"   />
        </linearGradient>

        {/* Glow blur filter */}
        <filter id="wg" x="-8%" y="-80%" width="116%" height="260%">
          <feGaussianBlur stdDeviation="3.5" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <filter id="wgsoft" x="-5%" y="-60%" width="110%" height="220%">
          <feGaussianBlur stdDeviation="10" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>

        {/* Radial vehicle glow */}
        <radialGradient id="vehGlow" cx="65%" cy="58%" r="40%">
          <stop offset="0%"   stopColor="#C9A84C" stopOpacity="0.2"/>
          <stop offset="55%"  stopColor="#C9A84C" stopOpacity="0.07"/>
          <stop offset="100%" stopColor="#C9A84C" stopOpacity="0"   />
        </radialGradient>
      </defs>

      {/* Vehicle area warm glow */}
      <ellipse cx="960" cy="460" rx="440" ry="250" fill="url(#vehGlow)" />

      {/* Wave 1 — primary bright ribbon sweeping from bottom-left to upper-right */}
      <path
        d="M -80,710 C 100,600 280,360 500,410 C 680,450 820,295 1040,258 C 1210,228 1350,278 1520,262"
        fill="none" stroke="url(#rg1)" strokeWidth="2.2" filter="url(#wg)"
      >
        <animateTransform attributeName="transform" type="translate"
          values="0,0; -16,10; 0,0" dur="9s" repeatCount="indefinite"/>
      </path>

      {/* Wave 2 — secondary ribbon above */}
      <path
        d="M -80,668 C 140,555 330,325 545,382 C 738,432 858,272 1068,235 C 1235,206 1362,258 1530,240"
        fill="none" stroke="url(#rg2)" strokeWidth="1.6" filter="url(#wg)"
      >
        <animateTransform attributeName="transform" type="translate"
          values="0,0; 13,-8; 0,0" dur="11s" repeatCount="indefinite"/>
      </path>

      {/* Wave 3 — thin lower accent */}
      <path
        d="M -80,742 C 80,638 298,402 510,448 C 705,488 840,338 1055,305 C 1228,278 1368,328 1530,312"
        fill="none" stroke="url(#rg3)" strokeWidth="1.1" opacity="0.72"
      >
        <animateTransform attributeName="transform" type="translate"
          values="0,0; -9,14; 0,0" dur="13s" repeatCount="indefinite"/>
      </path>

      {/* Wave 4 — broad soft ambient glow ribbon */}
      <path
        d="M -80,695 C 140,578 320,342 535,395 C 720,442 852,282 1058,248 C 1225,220 1358,272 1530,255"
        fill="none" stroke="#C9A84C" strokeWidth="22" opacity="0.045" filter="url(#wgsoft)"
      />
      <path
        d="M -80,705 C 160,588 338,352 548,402 C 738,450 862,288 1065,252 C 1232,224 1360,276 1530,260"
        fill="none" stroke="#D4B45E" strokeWidth="9" opacity="0.075" filter="url(#wgsoft)"
      />
    </svg>
  )
}

/* ─── Bottom fleet preview card ──────────────────────────────────────────── */
function FleetCard({
  image,
  title,
  description,
}: {
  image: string
  title: string
  description: string
}) {
  return (
    <div className="flex-1 min-w-0 flex items-center gap-4 bg-[rgba(18,16,12,0.82)] backdrop-blur-md border border-[rgba(201,168,76,0.2)] rounded-2xl p-4 hover:border-[rgba(201,168,76,0.5)] transition-all duration-300 group">
      <div className="relative w-28 h-20 shrink-0 rounded-xl overflow-hidden bg-[#0d0b08]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
          sizes="112px"
        />
      </div>
      <div className="min-w-0">
        <h3 className="text-[#F5F0E8] font-serif text-base font-bold mb-1">{title}</h3>
        <p className="text-[#9C9080] text-xs leading-relaxed font-body line-clamp-3">
          {description}
        </p>
      </div>
    </div>
  )
}

/* ─── Main Hero Section ───────────────────────────────────────────────────── */
export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ backgroundColor: '#09080500' }}
    >
      {/* ── Solid dark base ── */}
      <div className="absolute inset-0 z-0" style={{ backgroundColor: '#0A0805' }} />

      {/* ── Left-side dark vignette (keeps text readable) ── */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 90% 100% at 0% 50%, rgba(0,0,0,0.55) 0%, transparent 60%)',
        }}
      />

      {/* ── Golden ribbon waves ── */}
      <div className="absolute inset-0 z-[2]">
        <GoldenWaves />
      </div>

      {/* ── Floating glass diamonds — left edge ── */}
      <GlassDiamond size={50} className="z-[3]" style={{ top: '11%', left: '2.5%',  opacity: 0.75, transform: 'rotate(-18deg)' }} />
      <GlassDiamond size={30} className="z-[3]" style={{ top: '7%',  left: '8.5%',  opacity: 0.5,  transform: 'rotate(10deg)'  }} />
      <GlassDiamond size={62} className="z-[3]" style={{ top: '36%', left: '1%',    opacity: 0.58, transform: 'rotate(6deg)'   }} />
      <GlassDiamond size={26} className="z-[3]" style={{ top: '62%', left: '4%',    opacity: 0.4,  transform: 'rotate(-8deg)'  }} />
      {/* ── Floating glass diamonds — right edge ── */}
      <GlassDiamond size={44} className="z-[3]" style={{ top: '9%',  right: '4%',   opacity: 0.65, transform: 'rotate(22deg)'  }} />
      <GlassDiamond size={68} className="z-[3]" style={{ top: '27%', right: '1.5%', opacity: 0.48, transform: 'rotate(-14deg)' }} />
      <GlassDiamond size={34} className="z-[3]" style={{ bottom:'28%',right: '5.5%',opacity: 0.55, transform: 'rotate(8deg)'   }} />
      <GlassDiamond size={22} className="z-[3]" style={{ top: '19%', right: '11%',  opacity: 0.38, transform: 'rotate(-5deg)'  }} />

      {/* ══════════════════════════════════════════════════════
          MAIN CONTENT
      ══════════════════════════════════════════════════════ */}
      <div className="relative z-10 flex-1 flex flex-col max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 w-full">

        {/* ── Two-column hero grid ── */}
        <div className="flex-1 grid lg:grid-cols-2 gap-0 items-center min-h-[72vh]">

          {/* LEFT — headline + CTA */}
          <div className="flex flex-col justify-center pr-0 lg:pr-8">

            {/* Eyebrow */}
            <p
              className="text-[#C9A84C] text-[11px] tracking-[0.36em] uppercase mb-5 font-body animate-fade-in-up"
              style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}
            >
              Est. 1974 &nbsp;·&nbsp; Jamnagar, Gujarat
            </p>

            {/* Headline */}
            <h1
              className="font-serif font-black leading-[0.92] mb-5 animate-fade-in-up"
              style={{
                fontSize: 'clamp(3rem, 6.2vw, 5.6rem)',
                letterSpacing: '-0.01em',
                textTransform: 'uppercase',
                animationDelay: '0.2s',
                animationFillMode: 'forwards',
              }}
            >
              <span className="block gold-shimmer">Over Half A Century</span>
              <span className="block gold-shimmer">Of</span>
              <span className="block text-[#F5F0E8]">Excellence</span>
            </h1>

            {/* Sub-headline */}
            <p
              className="text-[#B8A880] text-base lg:text-lg font-body mb-8 max-w-md leading-relaxed animate-fade-in-up"
              style={{ animationDelay: '0.35s', animationFillMode: 'forwards' }}
            >
              51 Years of Legacy.{' '}
              <strong className="text-[#F5F0E8] font-semibold">
                Giriraj Yatra Sangh, Jamnagar.
              </strong>
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-wrap items-center gap-4 animate-fade-in-up"
              style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}
            >
              <a
                href="https://wa.me/919033999877?text=🙏%20*Namaste%20Giriraj%20Yatra%20Sangh!*%0A%0AI%20would%20like%20to%20request%20a%20quote%20for%20cab%20service."
                target="_blank"
                rel="noreferrer"
                id="hero-request-quote"
                className="group relative inline-flex items-center overflow-hidden px-7 py-3 text-sm font-semibold tracking-[0.13em] uppercase"
                style={{
                  border: '1.5px solid #C9A84C',
                  color: '#C9A84C',
                  background: 'rgba(201,168,76,0.07)',
                  borderRadius: '3px',
                }}
              >
                <span className="relative z-10 transition-colors duration-300 group-hover:text-[#0A0805]">
                  Request a Quote
                </span>
                <span
                  className="absolute inset-0 bg-[#C9A84C] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"
                  aria-hidden
                />
              </a>

              <Link
                href="/fleet"
                id="hero-explore-fleet"
                className="group relative inline-flex items-center overflow-hidden px-7 py-3 text-sm font-semibold tracking-[0.13em] uppercase"
                style={{
                  border: '1.5px solid rgba(201,168,76,0.45)',
                  color: '#F5F0E8',
                  background: 'rgba(255,255,255,0.03)',
                  borderRadius: '3px',
                }}
              >
                <span className="relative z-10 transition-colors duration-300 group-hover:text-[#0A0805]">
                  Explore Fleet
                </span>
                <span
                  className="absolute inset-0 bg-[#C9A84C] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"
                  aria-hidden
                />
              </Link>
            </div>
          </div>

          {/* RIGHT — AI-generated combined vehicle image */}
          <div
            className="relative flex items-end justify-center lg:justify-end mt-6 lg:mt-0"
            style={{ alignSelf: 'stretch' }}
          >
            {/* Warm glow orb behind vehicles */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse 75% 60% at 52% 58%, rgba(201,168,76,0.15) 0%, transparent 70%)',
              }}
            />

            {/*
              Single combined PNG (pure black bg).
              mix-blend-mode: screen makes the black background fully transparent,
              so the vehicles appear to float naturally in the hero.
            */}
            <div
              className="relative w-full h-full"
              style={{ minHeight: 'clamp(280px, 48vh, 520px)' }}
            >
              <Image
                src="/images/hero-custom.png"
                alt="Giriraj Yatra Sangh — Innova Crysta and luxury tour bus"
                fill
                className="object-contain object-right-bottom drop-shadow-2xl"
                priority
                sizes="(max-width: 1024px) 100vw, 720px"
              />
            </div>

            {/* Subtle ground glow under wheels */}
            <div
              className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none z-10"
              style={{
                background: 'radial-gradient(ellipse 85% 100% at 55% 100%, rgba(201,168,76,0.14) 0%, transparent 65%)',
              }}
            />
          </div>
        </div>

        {/* ── Bottom fleet preview cards ── */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-8 pt-6 animate-fade-in-up"
          style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}
        >
          <FleetCard
            image="/images/innova.png"
            title="Luxury Cars & SUVs"
            description="Swift Dzire, Innova Crysta, Ertiga & Tavera for comfortable city rides, airport transfers, and outstation journeys."
          />
          <FleetCard
            image="/images/bus-56.png"
            title="Premium Buses"
            description="Force Urbania, 20-seater mini buses & 56-seater coaches for group travel, pilgrimages, and corporate tours."
          />
        </div>
      </div>

      {/* Bottom fade into next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-28 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #080603)' }}
      />
    </section>
  )
}
