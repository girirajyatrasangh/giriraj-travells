import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const milestones = [
  { year: '1974', title: 'Founded in Jamnagar', desc: 'Shri Ramjibhai Patel started with a single vehicle and a promise of trust.' },
  { year: '1990', title: 'Fleet Expansion', desc: 'Grew to 25 vehicles serving pilgrimage routes across Gujarat.' },
  { year: '2005', title: 'Corporate Division', desc: 'Launched dedicated corporate travel solutions for Jamnagar industries.' },
  { year: '2025', title: '51 Years Strong', desc: '200+ fleet vehicles, 3 generations, thousands of satisfied families.' },
]

export default function LegacyPreview() {
  return (
    <section className="py-20 bg-[#0A0805]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Text */}
          <div>
            <p className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase mb-3 font-body">Our Story</p>
            <h2 className="text-[#F5F0E8] font-serif text-3xl sm:text-4xl font-bold mb-4 text-balance">
              A Legacy Built on Dignity & Trust
            </h2>
            <div className="gold-divider mb-6" />
            <p className="text-[#9C9080] text-sm leading-relaxed mb-4 font-body">
              In 1974, Shri Ramjibhai Patel began a humble journey in Jamnagar with one vehicle and an unwavering belief: every traveller deserves safety, comfort, and respect.
            </p>
            <p className="text-[#9C9080] text-sm leading-relaxed mb-8 font-body">
              Over five decades, Giriraj Yatra Sangh has carried families on pilgrimages, executives to meetings, and brides to their new beginnings — always with pride.
            </p>
            <Link
              href="/legacy"
              className="inline-flex items-center gap-2 text-[#C9A84C] text-sm hover:gap-3 transition-all duration-200 font-semibold"
            >
              Read Our Full Story <ArrowRight size={16} />
            </Link>
          </div>

          {/* Timeline */}
          <div className="flex flex-col gap-6">
            {milestones.map((m, i) => (
              <div key={m.year} className="flex gap-5">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-[#C9A84C]/10 border border-[#C9A84C]/40 flex items-center justify-center shrink-0">
                    <span className="text-[#C9A84C] text-xs font-bold font-body">{m.year.slice(2)}</span>
                  </div>
                  {i < milestones.length - 1 && (
                    <div className="w-px flex-1 bg-[rgba(201,168,76,0.2)] mt-2" />
                  )}
                </div>
                <div className="pb-6">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-[#C9A84C] text-sm font-bold font-body">{m.year}</span>
                    <h4 className="text-[#F5F0E8] font-serif text-base font-semibold">{m.title}</h4>
                  </div>
                  <p className="text-[#9C9080] text-sm leading-relaxed font-body">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
