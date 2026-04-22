'use client'

import { useState } from 'react'
import Link from 'next/link'
import VehicleCard from '@/components/VehicleCard'
import { fleetData } from '@/lib/fleet-data'
import { ArrowRight } from 'lucide-react'

type Category = 'all' | 'car' | 'van' | 'bus'

const tabs: { key: Category; label: string }[] = [
  { key: 'all', label: 'All Vehicles' },
  { key: 'car', label: 'Cars & SUVs' },
  { key: 'van', label: 'Vans & Travellers' },
  { key: 'bus', label: 'Buses & Coaches' },
]

export default function FleetPreview() {
  const [active, setActive] = useState<Category>('all')

  const preview = fleetData
    .filter((v) => active === 'all' || v.category === active)
    .slice(0, 3)

  return (
    <section className="py-20 bg-[#080603]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-10">
          <p className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase mb-3 font-body">Our Vehicles</p>
          <h2 className="text-[#F5F0E8] font-serif text-3xl sm:text-4xl font-bold text-balance">
            200+ Premium Vehicles
          </h2>
          <div className="gold-divider w-24 mx-auto mt-4" />
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActive(tab.key)}
              className={`px-5 py-2 rounded-full text-sm font-body transition-all duration-300 ${
                active === tab.key
                  ? 'bg-[#C9A84C] text-[#0A0805] font-semibold'
                  : 'border border-[rgba(201,168,76,0.3)] text-[#9C9080] hover:border-[#C9A84C]/60 hover:text-[#C9A84C]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Important Notes */}
        <div className="max-w-3xl mx-auto mb-10 p-4 rounded-xl border border-[#C9A84C]/20 bg-[#C9A84C]/5 flex items-start gap-4 shadow-sm">
          <div className="text-[#C9A84C] mt-0.5 shrink-0">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
          </div>
          <div>
            <p className="text-[#E2C97E] text-sm font-semibold mb-1 tracking-wide">Important Pricing Notes</p>
            <p className="text-[#9C9080] text-xs leading-relaxed font-body">
              All rates shown are strictly <strong>per kilometer</strong>. There is an average minimum limit of <strong>300 km per day</strong> for all outstation bookings. Tolls, parking taxes, and standard driver allowances are extra as applicable.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {preview.map((vehicle) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/fleet"
            className="inline-flex items-center gap-2 border border-[#C9A84C] text-[#C9A84C] px-8 py-3 rounded-md hover:bg-[#C9A84C] hover:text-[#0A0805] transition-all duration-300 text-sm font-semibold"
          >
            View All Cabs & Buses <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
