import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CTAStrip from '@/components/home/CTAStrip'
import { Shield, Clock, Heart, Users } from 'lucide-react'

const timeline = [
  {
    year: '1974',
    title: 'A Single Vehicle, A Big Promise',
    desc: 'Shri Ramjibhai Patel purchased his first vehicle in Jamnagar with a dream of giving travellers a safe, dignified, and reliable journey. The business was born on trust — word of mouth and honest service.',
  },
  {
    year: '1980',
    title: 'The First Fleet Expansion',
    desc: 'Within six years, the reputation of fair pricing and reliable chauffeurs had earned enough loyal customers to fund three more vehicles. Pilgrimage routes to Dwarka and Somnath became a speciality.',
  },
  {
    year: '1990',
    title: '25 Vehicles & Statewide Recognition',
    desc: 'By 1990, Giriraj Yatra Sangh had grown to 25 vehicles and was the preferred choice for pilgrimage groups, wedding convoys, and corporate transport across Saurashtra.',
  },
  {
    year: '2000',
    title: 'Second Generation Takes the Wheel',
    desc: "Shri Ramjibhai's son, Mahendra Patel, joined the business — bringing with it modern fleet management, GST billing systems, and a focus on corporate travel solutions.",
  },
  {
    year: '2005',
    title: 'Corporate Division Launched',
    desc: "Jamnagar's growing industrial base brought demand for executive travel. A dedicated corporate division was established, catering to refinery executives, port staff, and visiting dignitaries.",
  },
  {
    year: '2015',
    title: 'Digital Booking & Fleet of 100+',
    desc: 'WhatsApp-based bookings, digital invoicing, and driver tracking were introduced. The fleet crossed 100 vehicles, now covering luxury sedans, SUVs, Tempo Travellers, and full-size coaches.',
  },
  {
    year: '2025',
    title: '51 Years — 200+ Fleet & Counting',
    desc: "Three generations, 51 years, and 200+ vehicles later — Giriraj Yatra Sangh remains Jamnagar's most trusted name in chauffeur services. The same values. A much larger family.",
  },
]

const values = [
  { icon: Shield, title: 'Trust', desc: 'Every booking is a promise kept. We have never let a customer down.' },
  { icon: Clock, title: 'Punctuality', desc: 'Your time is sacred. Our drivers arrive early, always.' },
  { icon: Heart, title: 'Family', desc: 'We treat every passenger as a family member — with care, respect, and dignity.' },
  { icon: Users, title: 'Dignity', desc: 'Whether you travel first class or economy, you deserve the best service.' },
]

export default function LegacyPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-28 pb-14 bg-[#080603] border-b border-[rgba(201,168,76,0.15)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase mb-3 font-body">Est. 1974</p>
            <h1 className="text-[#F5F0E8] font-serif text-4xl sm:text-5xl font-bold mb-4 text-balance">
              Our Legacy
            </h1>
            <div className="gold-divider w-24 mx-auto mt-4 mb-6" />
            <p className="text-[#9C9080] max-w-xl mx-auto text-sm leading-relaxed font-body">
              Five decades of trusted journeys across Gujarat — built on honesty, punctuality, and a deep love for the people we serve.
            </p>
          </div>
        </section>

        {/* Founder Story */}
        <section className="py-20 bg-[#0A0805]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-14 items-center">
              <div className="relative">
                <div className="glass-card rounded-2xl overflow-hidden aspect-[4/5] relative gold-glow">
                  <Image
                    src="/images/founder.jpg"
                    alt="Founder of Giriraj Yatra Sangh"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0A0805] to-transparent p-6">
                    <p className="text-[#C9A84C] font-serif text-lg font-bold">Shri Ramjibhai Patel</p>
                    <p className="text-[#9C9080] text-sm font-body">Founder — Giriraj Yatra Sangh, 1974</p>
                  </div>
                </div>
                {/* Decorative badge */}
                <div className="absolute -top-4 -right-4 bg-[#C9A84C] text-[#0A0805] rounded-full w-20 h-20 flex flex-col items-center justify-center">
                  <span className="font-serif text-2xl font-bold leading-none">51</span>
                  <span className="text-[10px] font-body leading-none mt-0.5">YEARS</span>
                </div>
              </div>

              <div>
                <p className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase mb-3 font-body">The Founder</p>
                <h2 className="text-[#F5F0E8] font-serif text-3xl font-bold mb-4 text-balance">
                  A Dream Driven by Dignity
                </h2>
                <div className="gold-divider mb-6" />
                <p className="text-[#9C9080] text-sm leading-relaxed mb-4 font-body">
                  In 1974, Shri Ramjibhai Patel started Giriraj Yatra Sangh with a single vehicle and a profound belief — that every traveller, regardless of their station in life, deserves safety, comfort, and respect on the road.
                </p>
                <p className="text-[#9C9080] text-sm leading-relaxed mb-4 font-body">
                  Born in Jamnagar, he had seen families struggle with unreliable transport for weddings, pilgrimages, and medical trips. He decided to change that. Not just with a vehicle, but with a character.
                </p>
                <p className="text-[#9C9080] text-sm leading-relaxed font-body">
                  Today, three generations later, his grandchildren carry forward the same ethos — that a business built on trust never needs advertising. It earns it.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Full Timeline */}
        <section className="py-20 bg-[#080603]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <p className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase mb-3 font-body">1974 — 2025</p>
              <h2 className="text-[#F5F0E8] font-serif text-3xl font-bold text-balance">Our Journey Through Time</h2>
              <div className="gold-divider w-24 mx-auto mt-4" />
            </div>

            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-5 top-0 bottom-0 w-px bg-[rgba(201,168,76,0.2)] hidden sm:block" />

              <div className="flex flex-col gap-10">
                {timeline.map((item) => (
                  <div key={item.year} className="sm:flex gap-8">
                    {/* Year bubble */}
                    <div className="shrink-0 flex sm:flex-col items-center gap-3 sm:gap-2 mb-3 sm:mb-0">
                      <div className="w-10 h-10 rounded-full bg-[#C9A84C]/10 border border-[#C9A84C]/50 flex items-center justify-center shrink-0 z-10 relative">
                        <span className="text-[#C9A84C] text-xs font-bold font-body">{item.year.slice(2)}</span>
                      </div>
                      <span className="text-[#C9A84C] font-bold text-sm font-body sm:hidden">{item.year}</span>
                    </div>

                    {/* Content */}
                    <div className="glass-card rounded-xl p-5 flex-1 hover:border-[#C9A84C]/40 transition-all duration-300">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-[#C9A84C] font-bold text-sm font-body hidden sm:block">{item.year}</span>
                        <h3 className="text-[#F5F0E8] font-serif font-semibold">{item.title}</h3>
                      </div>
                      <p className="text-[#9C9080] text-sm leading-relaxed font-body">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-[#0A0805]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <p className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase mb-3 font-body">What Guides Us</p>
              <h2 className="text-[#F5F0E8] font-serif text-3xl font-bold text-balance">Our Core Values</h2>
              <div className="gold-divider w-24 mx-auto mt-4" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="glass-card rounded-2xl p-7 text-center hover:border-[#C9A84C]/60 transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="w-12 h-12 rounded-full bg-[#C9A84C]/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#C9A84C]/20 transition-colors">
                    <Icon size={22} className="text-[#C9A84C]" />
                  </div>
                  <h3 className="text-[#F5F0E8] font-serif text-lg font-bold mb-2">{title}</h3>
                  <p className="text-[#9C9080] text-sm leading-relaxed font-body">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTAStrip />
      </main>
      <Footer />
    </>
  )
}
