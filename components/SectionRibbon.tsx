/**
 * SectionRibbon
 *
 * A reusable golden wave ribbon SVG placed at section boundaries.
 * Sits at the top or bottom of a section, overlapping into it slightly,
 * to create a seamless, professional transition between sections.
 *
 * Usage:
 *   <SectionRibbon />               → top, flowing right
 *   <SectionRibbon flip />          → bottom, flowing left (mirrored)
 *   <SectionRibbon variant="soft"/> → dimmer variant
 */

type Props = {
  /** Mirror vertically — use for bottom-of-section placement */
  flip?: boolean
  /** 'default' = standard brightness, 'soft' = dimmer */
  variant?: 'default' | 'soft'
  className?: string
}

export default function SectionRibbon({ flip = false, variant = 'default', className = '' }: Props) {
  const opacity = variant === 'soft' ? 0.55 : 1

  return (
    <div
      className={`relative w-full pointer-events-none overflow-hidden ${className}`}
      style={{
        height: '72px',
        transform: flip ? 'scaleY(-1)' : undefined,
        opacity,
      }}
    >
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 72"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Ribbon gradient: transparent → gold → bright gold → gold → transparent */}
          <linearGradient id={`ribGrad-${flip ? 'b' : 't'}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="#C9A84C" stopOpacity="0"   />
            <stop offset="15%"  stopColor="#C9A84C" stopOpacity="0.4" />
            <stop offset="38%"  stopColor="#EAD580" stopOpacity="0.9" />
            <stop offset="58%"  stopColor="#C9A84C" stopOpacity="0.75"/>
            <stop offset="82%"  stopColor="#C9A84C" stopOpacity="0.35"/>
            <stop offset="100%" stopColor="#C9A84C" stopOpacity="0"   />
          </linearGradient>
          <linearGradient id={`ribGrad2-${flip ? 'b' : 't'}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="#C9A84C" stopOpacity="0"   />
            <stop offset="20%"  stopColor="#C9A84C" stopOpacity="0.22"/>
            <stop offset="50%"  stopColor="#D4B45E" stopOpacity="0.45"/>
            <stop offset="80%"  stopColor="#C9A84C" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#C9A84C" stopOpacity="0"   />
          </linearGradient>
          {/* Glow blur */}
          <filter id={`ribGlow-${flip ? 'b' : 't'}`} x="-2%" y="-100%" width="104%" height="300%">
            <feGaussianBlur stdDeviation="2.5" result="blur"/>
            <feMerge>
              <feMergeNode in="blur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          <filter id={`ribSoftGlow-${flip ? 'b' : 't'}`} x="-2%" y="-200%" width="104%" height="500%">
            <feGaussianBlur stdDeviation="6" result="blur"/>
            <feMerge>
              <feMergeNode in="blur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Broad ambient glow beneath both lines */}
        <path
          d="M0,52 C240,12 480,60 720,36 C960,12 1200,52 1440,28"
          fill="none"
          stroke="#C9A84C"
          strokeWidth="20"
          opacity="0.06"
          filter={`url(#ribSoftGlow-${flip ? 'b' : 't'})`}
        />

        {/* Secondary ribbon — softer, slightly offset */}
        <path
          d="M0,58 C260,22 500,62 740,40 C980,18 1220,55 1440,34"
          fill="none"
          stroke={`url(#ribGrad2-${flip ? 'b' : 't'})`}
          strokeWidth="1.4"
          filter={`url(#ribGlow-${flip ? 'b' : 't'})`}
        />

        {/* Primary ribbon — bright, sharp */}
        <path
          d="M0,48 C220,8 460,56 720,32 C980,8 1220,48 1440,24"
          fill="none"
          stroke={`url(#ribGrad-${flip ? 'b' : 't'})`}
          strokeWidth="1.8"
          filter={`url(#ribGlow-${flip ? 'b' : 't'})`}
        />
      </svg>
    </div>
  )
}
