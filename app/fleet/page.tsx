'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import VehicleCard from '@/components/VehicleCard'
import CTAStrip from '@/components/home/CTAStrip'
import { fleetData } from '@/lib/fleet-data'

type Category = 'all' | 'luxury' | 'sedan-suv' | 'bus'

const tabs: { key: Category; label: string; count: number }[] = [
  { key: 'all', label: 'All Vehicles', count: fleetData.length },
  { key: 'luxury', label: 'Luxury Cars', count: fleetData.filter((v) => v.category === 'luxury').length },
  { key: 'sedan-suv', label: 'Sedans & SUVs', count: fleetData.filter((v) => v.category === 'sedan-suv').length },
  { key: 'bus', label: 'Buses & Coaches', count: fleetData.filter((v) => v.category === 'bus').length },
]

export default function FleetPage() {
  const [active, setActive] = useState<Category>('all')

  const filtered = active === 'all' ? fleetData : fleetData.filter((v) => v.category === active)

  return (
    <>
      <Navbar />
      <main>
        {/* Hero banner */}
        <section className="pt-28 pb-14 bg-[#080603] border-b border-[rgba(201,168,76,0.15)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase mb-3 font-body">Premium Fleet</p>
            <h1 className="text-[#F5F0E8] font-serif text-4xl sm:text-5xl font-bold mb-4 text-balance">
              Our Vehicle Fleet
            </h1>
            <div className="gold-divider w-24 mx-auto mt-4 mb-6" />
            <p className="text-[#9C9080] max-w-xl mx-auto text-sm leading-relaxed font-body">
              200+ well-maintained vehicles across every category. All our chauffeurs are trained, verified, and deeply familiar with Gujarat&apos;s roads.
            </p>
          </div>
        </section>

        {/* Filter + Grid */}
        <section className="py-16 bg-[#0A0805]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Tabs */}
            <div className="flex flex-wrap gap-3 mb-10 justify-center">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActive(tab.key)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-body transition-all duration-300 ${
                    active === tab.key
                      ? 'bg-[#C9A84C] text-[#0A0805] font-semibold'
                      : 'border border-[rgba(201,168,76,0.3)] text-[#9C9080] hover:border-[#C9A84C]/60 hover:text-[#C9A84C]'
                  }`}
                >
                  {tab.label}
                  <span
                    className={`text-xs px-1.5 py-0.5 rounded-full ${
                      active === tab.key
                        ? 'bg-[#0A0805]/20 text-[#0A0805]'
                        : 'bg-[#252118] text-[#9C9080]'
                    }`}
                  >
                    {tab.count}
                  </span>
                </button>
              ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((vehicle) => (
                <VehicleCard key={vehicle.id} vehicle={vehicle} />
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
