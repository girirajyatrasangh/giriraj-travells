import { Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Rajeshbhai Mehta',
    location: 'Jamnagar',
    text: 'We have used Giriraj Yatra Sangh for three generations of family weddings. Their service, punctuality, and the way they treat guests is simply unmatched in Gujarat.',
    rating: 5,
  },
  {
    name: 'Priya Sharma',
    location: 'Ahmedabad',
    text: 'Booked an Innova for our Dwarka yatra. The driver was knowledgeable, respectful, and the vehicle was spotless. We felt safe throughout the entire journey.',
    rating: 5,
  },
  {
    name: 'Suresh Patel — HR Manager, Reliance',
    location: 'Jamnagar',
    text: 'Our company relies exclusively on Giriraj Yatra for executive airport transfers. Zero delays in 3 years. They understand what corporate travel means.',
    rating: 5,
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-[#080603]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase mb-3 font-body">Testimonials</p>
          <h2 className="text-[#F5F0E8] font-serif text-3xl sm:text-4xl font-bold text-balance">
            Trusted by Thousands
          </h2>
          <div className="gold-divider w-24 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="glass-card rounded-2xl p-7 hover:border-[#C9A84C]/60 transition-all duration-300"
            >
              <Quote size={28} className="text-[#C9A84C]/40 mb-4" />
              <p className="text-[#F5F0E8]/80 text-sm leading-relaxed mb-6 font-body italic">{'"'}{t.text}{'"'}</p>
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} className="text-[#C9A84C] text-sm">★</span>
                ))}
              </div>
              <div className="gold-divider mb-3" />
              <p className="text-[#F5F0E8] font-semibold text-sm font-body">{t.name}</p>
              <p className="text-[#9C9080] text-xs font-body">{t.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
