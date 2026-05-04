'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

/* ─── Floating glass shard ───────────────────────────────────────────────── */
function GlassShard({ size = 55, style, className }: { size?: number; style?: React.CSSProperties; className?: string }) {
  return (
    <div className={`absolute pointer-events-none select-none ${className ?? ''}`} style={style}>
      <svg width={size} height={size} viewBox="0 0 60 60" fill="none">
        <polygon points="30,2 58,20 48,56 12,56 2,20"
          fill="rgba(201,168,76,0.06)" stroke="rgba(201,168,76,0.3)" strokeWidth="1" />
        <polygon points="30,10 50,24 42,50 18,50 10,24"
          fill="rgba(255,240,180,0.03)" stroke="rgba(255,235,160,0.12)" strokeWidth="0.6" />
        <line x1="30" y1="2" x2="30" y2="18" stroke="rgba(255,240,190,0.45)" strokeWidth="0.8" />
        <line x1="30" y1="2" x2="42" y2="13" stroke="rgba(255,240,190,0.18)" strokeWidth="0.5" />
        <line x1="30" y1="2" x2="18" y2="13" stroke="rgba(255,240,190,0.18)" strokeWidth="0.5" />
      </svg>
    </div>
  )
}

/* ─── Diagonal stripe ribbons + animated waves ───────────────────────────── */
function BackgroundPattern() {
  return (
    <>
      {/* ── Diagonal stripe ribbons (CSS) ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              -55deg,
              transparent,
              transparent 60px,
              rgba(201,168,76,0.028) 60px,
              rgba(201,168,76,0.028) 62px
            )
          `,
          backgroundSize: '200px 200px',
        }}
      />
      {/* Second offset stripe layer for depth */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              -55deg,
              transparent,
              transparent 100px,
              rgba(201,168,76,0.015) 100px,
              rgba(201,168,76,0.015) 103px
            )
          `,
          backgroundSize: '300px 300px',
        }}
      />

      {/* ── Animated golden ribbon waves SVG ── */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1440 820"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="rg1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="#C9A84C" stopOpacity="0"   />
            <stop offset="25%"  stopColor="#C9A84C" stopOpacity="0.5" />
            <stop offset="52%"  stopColor="#EAD580" stopOpacity="0.9" />
            <stop offset="78%"  stopColor="#C9A84C" stopOpacity="0.55"/>
            <stop offset="100%" stopColor="#C9A84C" stopOpacity="0"   />
          </linearGradient>
          <linearGradient id="rg2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="#A07830" stopOpacity="0"   />
            <stop offset="38%"  stopColor="#C9A84C" stopOpacity="0.38"/>
            <stop offset="65%"  stopColor="#D4B45E" stopOpacity="0.65"/>
            <stop offset="100%" stopColor="#C9A84C" stopOpacity="0"   />
          </linearGradient>
          <linearGradient id="rg3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="#C9A84C" stopOpacity="0"   />
            <stop offset="48%"  stopColor="#C9A84C" stopOpacity="0.28"/>
            <stop offset="100%" stopColor="#C9A84C" stopOpacity="0"   />
          </linearGradient>
          <filter id="wg">
            <feGaussianBlur stdDeviation="3.5" result="b"/>
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <filter id="wgs">
            <feGaussianBlur stdDeviation="14" result="b"/>
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>

        {/* Centre radial glow */}
        <radialGradient id="cg" cx="50%" cy="48%" r="42%">
          <stop offset="0%" stopColor="#C9A84C" stopOpacity="0.08"/>
          <stop offset="100%" stopColor="#C9A84C" stopOpacity="0"/>
        </radialGradient>
        <ellipse cx="720" cy="400" rx="600" ry="320" fill="url(#cg)"/>

        {/* Primary bright ribbon */}
        <path d="M-80,700 C 200,590 440,370 720,400 C 1000,430 1240,280 1530,268"
          fill="none" stroke="url(#rg1)" strokeWidth="2.2" filter="url(#wg)">
          <animateTransform attributeName="transform" type="translate" values="0,0;-20,12;0,0" dur="10s" repeatCount="indefinite"/>
        </path>
        {/* Secondary ribbon above */}
        <path d="M-80,658 C 220,548 460,338 740,368 C 1020,398 1260,248 1535,235"
          fill="none" stroke="url(#rg2)" strokeWidth="1.7" filter="url(#wg)">
          <animateTransform attributeName="transform" type="translate" values="0,0;16,-10;0,0" dur="12s" repeatCount="indefinite"/>
        </path>
        {/* Lower accent ribbon */}
        <path d="M-80,738 C 180,638 420,418 700,445 C 980,472 1220,325 1530,310"
          fill="none" stroke="url(#rg3)" strokeWidth="1.2" opacity="0.75">
          <animateTransform attributeName="transform" type="translate" values="0,0;-12,15;0,0" dur="14s" repeatCount="indefinite"/>
        </path>
        {/* Broad soft ambient glow ribbon */}
        <path d="M-80,700 C 200,590 440,370 720,400 C 1000,430 1240,280 1530,268"
          fill="none" stroke="#C9A84C" strokeWidth="32" opacity="0.04" filter="url(#wgs)"/>
        <path d="M-80,700 C 200,590 440,370 720,400 C 1000,430 1240,280 1530,268"
          fill="none" stroke="#D4B45E" strokeWidth="12" opacity="0.06" filter="url(#wgs)"/>
      </svg>
    </>
  )
}

/* ─── Fleet card ─────────────────────────────────────────────────────────── */
function FleetCard({ image, title, description }: { image: string; title: string; description: string }) {
  return (
    <div className="flex items-center gap-4 bg-[rgba(10,8,5,0.72)] backdrop-blur-xl border border-[rgba(201,168,76,0.2)] rounded-2xl p-4 hover:border-[rgba(201,168,76,0.5)] transition-all duration-300 group">
      <div className="relative w-24 h-16 shrink-0 rounded-xl overflow-hidden bg-[#0d0b08]">
        <Image src={image} alt={title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="96px" />
      </div>
      <div>
        <h3 className="text-[#F5F0E8] font-serif text-sm font-bold mb-1">{title}</h3>
        <p className="text-[#9C9080] text-xs leading-relaxed font-body line-clamp-2">{description}</p>
      </div>
    </div>
  )
}

/* ─── Hero Section ───────────────────────────────────────────────────────── */
export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ backgroundColor: '#09080500' }}
    >
      {/* ── Solid dark base ── */}
      <div className="absolute inset-0 z-0" style={{ backgroundColor: '#0A0805' }} />

      {/* ── Subtle radial depth gradient (dark centre warmth) ── */}
      <div className="absolute inset-0 z-[1] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 100% 80% at 50% 40%, rgba(28,20,8,0.7) 0%, rgba(0,0,0,0) 70%)' }}
      />

      {/* ── Stripe ribbons + animated waves ── */}
      <div className="absolute inset-0 z-[2]">
        <BackgroundPattern />
      </div>

      {/* ── Glass shard decorations ── */}
      <GlassShard size={50} className="z-[3]" style={{ top:'10%',    left:'2%',    opacity:0.7,  transform:'rotate(-18deg)' }} />
      <GlassShard size={28} className="z-[3]" style={{ top:'6%',     left:'8.5%',  opacity:0.45, transform:'rotate(10deg)'  }} />
      <GlassShard size={62} className="z-[3]" style={{ top:'36%',    left:'0.5%',  opacity:0.55, transform:'rotate(5deg)'   }} />
      <GlassShard size={24} className="z-[3]" style={{ top:'62%',    left:'3.5%',  opacity:0.38, transform:'rotate(-8deg)'  }} />
      <GlassShard size={44} className="z-[3]" style={{ top:'8%',     right:'3.5%', opacity:0.62, transform:'rotate(22deg)'  }} />
      <GlassShard size={68} className="z-[3]" style={{ top:'28%',    right:'1%',   opacity:0.45, transform:'rotate(-14deg)' }} />
      <GlassShard size={32} className="z-[3]" style={{ bottom:'28%', right:'5%',   opacity:0.5,  transform:'rotate(8deg)'   }} />
      <GlassShard size={20} className="z-[3]" style={{ top:'18%',    right:'10%',  opacity:0.35, transform:'rotate(-5deg)'  }} />

      {/* ══════════════════════════════════════════
          MAIN CONTENT — centred
      ══════════════════════════════════════════ */}
      <div className="relative z-[5] flex-1 flex flex-col items-center justify-center text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-4">

        {/* Eyebrow */}
        <p className="text-[#C9A84C] text-[11px] tracking-[0.42em] uppercase mb-5 font-body animate-fade-in-up"
          style={{ animationDelay:'0.1s', animationFillMode:'forwards' }}>
          Est. 1974 &nbsp;·&nbsp; Jamnagar, Gujarat
        </p>

        {/* Gold divider line above headline */}
        <div className="gold-divider w-20 mb-6 animate-fade-in-up" style={{ animationDelay:'0.15s', animationFillMode:'forwards' }} />

        {/* Headline */}
        <h1
          className="font-serif font-black uppercase leading-[0.92] mb-6 animate-fade-in-up"
          style={{
            fontSize: 'clamp(3rem, 7vw, 6.5rem)',
            letterSpacing: '-0.01em',
            animationDelay: '0.2s',
            animationFillMode: 'forwards',
          }}
        >
          <span className="block gold-shimmer">Over Half A</span>
          <span className="block gold-shimmer">Century Of</span>
          <span className="block text-[#F5F0E8]">Excellence</span>
        </h1>

        {/* Gold divider line below headline */}
        <div className="gold-divider w-32 mb-6 animate-fade-in-up" style={{ animationDelay:'0.28s', animationFillMode:'forwards' }} />

        {/* Sub-headline */}
        <p className="text-[#B8A880] text-lg lg:text-xl font-body mb-10 max-w-2xl leading-relaxed animate-fade-in-up"
          style={{ animationDelay:'0.35s', animationFillMode:'forwards' }}>
          51 Years of Legacy.{' '}
          <strong className="text-[#EAD580] font-semibold">
            Premier Cab &amp; Bus Service, Jamnagar.
          </strong>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-in-up"
          style={{ animationDelay:'0.45s', animationFillMode:'forwards' }}>

          {/* Primary */}
          <a
            href="https://wa.me/919033999877?text=🙏%20*Namaste%20Giriraj%20Yatra%20Sangh!*%0A%0AI%20would%20like%20to%20request%20a%20quote%20for%20cab%20service."
            target="_blank" rel="noreferrer" id="hero-request-quote"
            className="btn-primary-wave group relative inline-flex items-center gap-2 px-8 py-3.5 text-sm font-bold tracking-[0.15em] uppercase text-[#C9A84C] rounded-[3px]"
          >
            <span className="relative z-10 flex items-center gap-2">
              Request a Quote
              <ChevronRight size={15} className="group-hover:translate-x-1 transition-transform duration-300" />
            </span>
            <span className="absolute inset-0 bg-white/15 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 rounded-[3px]" aria-hidden />
          </a>

          {/* Secondary — outlined */}
          <Link href="/fleet" id="hero-explore-fleet"
            className="btn-secondary-wave group relative inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold tracking-[0.13em] uppercase rounded-[3px] text-[#C9A84C]"
          >
            <span className="relative z-10 flex items-center gap-2 transition-colors duration-300 group-hover:text-[#0A0805]">
              Explore Fleet
              <ChevronRight size={15} className="group-hover:translate-x-1 transition-transform duration-300" />
            </span>
            <span className="absolute inset-0 bg-[#C9A84C] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 rounded-[3px]" aria-hidden />
          </Link>
        </div>
      </div>

      {/* ── Bottom fleet preview cards ── */}
      <div className="relative z-[5] w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-fade-in-up"
          style={{ animationDelay:'0.6s', animationFillMode:'forwards' }}>
          <FleetCard
            image="/images/innova.png"
            title="Luxury Cars & SUVs"
            description="Swift Dzire, Innova Crysta, Ertiga & Tavera — comfortable rides for any journey."
          />
          <FleetCard
            image="/images/bus-56.png"
            title="Premium Buses"
            description="Force Urbania, 20-seater & 56-seater coaches for group travel & pilgrimages."
          />
        </div>
      </div>

      {/* ── Bottom gradient fade into next section ── */}
      <div className="absolute bottom-0 left-0 right-0 h-36 z-[6] pointer-events-none"
        style={{ background:'linear-gradient(to bottom, transparent, #080603)' }}
      />
    </section>
  )
}
