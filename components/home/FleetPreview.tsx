'use client'

import { useState } from 'react'
import Link from 'next/link'
import VehicleCard from '@/components/VehicleCard'
import { fleetData } from '@/lib/fleet-data'
import { ArrowRight } from 'lucide-react'

type Category = 'all' | 'luxury' | 'sedan-suv' | 'bus'

const tabs: { key: Category; label: string }[] = [
  { key: 'all', label: 'All Vehicles' },
  { key: 'luxury', label: 'Luxury Cars' },
  { key: 'sedan-suv', label: 'Sedans & SUVs' },
  { key: 'bus', label: 'Buses' },
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
          <p className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase mb-3 font-body">Our Fleet</p>
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
            View Full Fleet <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
