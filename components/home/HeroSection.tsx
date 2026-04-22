import Image from 'next/image'
import BookingForm from '@/components/BookingForm'
import { Shield, Clock, Car, Star } from 'lucide-react'

const stats = [
  { icon: Star, value: '51+', label: 'Years of Excellence' },
  { icon: Car, value: '200+', label: 'Fleet Strength' },
  { icon: Shield, value: '100%', label: 'Safe & Trusted' },
  { icon: Clock, value: '24/7', label: 'Always Available' },
]

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-car.jpg"
          alt="Premium luxury chauffeur vehicle"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0805]/95 via-[#0A0805]/80 to-[#0A0805]/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0805] via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Headline + Stats */}
          <div>
            <p className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase mb-4 font-body">
              Est. 1974 · Jamnagar, Gujarat
            </p>
            <h1 className="text-[#F5F0E8] font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4 text-balance">
              51 Years of{' '}
              <span className="gold-shimmer">Excellence</span>
            </h1>
            <p className="text-[#9C9080] text-base lg:text-lg leading-relaxed mb-8 font-body max-w-lg">
              Gujarat&apos;s most trusted chauffeur service. Luxury vehicles, professional drivers, and a legacy built on dignity and punctuality.
            </p>

            {/* Stat badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
              {stats.map(({ icon: Icon, value, label }) => (
                <div
                  key={label}
                  className="glass-card rounded-xl p-4 text-center hover:border-[#C9A84C]/50 transition-all duration-300"
                >
                  <Icon size={20} className="text-[#C9A84C] mx-auto mb-2" />
                  <p className="text-[#C9A84C] font-serif text-xl font-bold">{value}</p>
                  <p className="text-[#9C9080] text-xs mt-0.5 leading-tight font-body">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Booking Form */}
          <div className="glass-card rounded-2xl p-6 lg:p-8 gold-glow">
            <div className="mb-5">
              <h2 className="text-[#F5F0E8] font-serif text-xl font-bold">Book Your Ride</h2>
              <p className="text-[#9C9080] text-sm mt-1 font-body">
                Fill in the details and connect instantly on WhatsApp
              </p>
            </div>
            <BookingForm compact />
          </div>
        </div>
      </div>
    </section>
  )
}
