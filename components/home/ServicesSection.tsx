import { Plane, Heart, Building2 } from 'lucide-react'

const services = [
  {
    icon: Plane,
    title: 'Airport & Station Transfers',
    description:
      'Punctual pickups and drops for all major airports, railway stations, and bus terminals across Gujarat. Never miss a flight.',
    features: ['Flight-tracking', 'Meet & greet', 'Luggage assist'],
  },
  {
    icon: Heart,
    title: 'Weddings & Special Events',
    description:
      'Make every occasion unforgettable with our fleet of luxury decorated vehicles. We handle the logistics so you enjoy the moments.',
    features: ['Decorated vehicles', 'Convoy arrangements', 'On-call chauffeurs'],
  },
  {
    icon: Building2,
    title: 'Corporate & Pilgrimage Tours',
    description:
      'From boardroom shuttles to Dwarka and Somnath yatras — reliable, comfortable travel for groups of all sizes.',
    features: ['Group bookings', 'Regular schedules', 'Invoice & GST billing'],
  },
]

export default function ServicesSection() {
  return (
    <section className="py-20 bg-[#0A0805]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase mb-3 font-body">What We Offer</p>
          <h2 className="text-[#F5F0E8] font-serif text-3xl sm:text-4xl font-bold text-balance">
            Services Built on Trust
          </h2>
          <div className="gold-divider w-24 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, description, features }) => (
            <div
              key={title}
              className="glass-card rounded-2xl p-7 hover:border-[#C9A84C]/60 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#C9A84C]/10 flex items-center justify-center mb-5 group-hover:bg-[#C9A84C]/20 transition-colors">
                <Icon size={22} className="text-[#C9A84C]" />
              </div>
              <h3 className="text-[#F5F0E8] font-serif text-xl font-semibold mb-3">{title}</h3>
              <p className="text-[#9C9080] text-sm leading-relaxed mb-5 font-body">{description}</p>
              <ul className="flex flex-col gap-2">
                {features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-[#F5F0E8]/70 font-body">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
