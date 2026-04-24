'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Users, Snowflake, IndianRupee, ArrowRight } from 'lucide-react'

export interface Vehicle {
  id: string
  name: string
  category: 'car' | 'van' | 'bus'
  capacity: number
  perKmRateAc: string
  perKmRateNonAc?: string
  image: string
  tag?: string
}

interface Props {
  vehicle: Vehicle
}

// SEO-optimized alt text generation based on vehicle type
function getVehicleAltText(vehicle: Vehicle): string {
  const name = vehicle.name.toLowerCase()
  
  if (name.includes('swift')) return 'Swift Dzire cab for hire in Jamnagar — 4 seater AC taxi available 24/7'
  if (name.includes('ertiga')) return 'Ertiga cab rental Jamnagar — 7 seater family cab for outstation trips in Gujarat'
  if (name.includes('tavera')) return 'Tavera on rent Jamnagar — 7 seater rugged cab for Gujarat road trips'
  if (name.includes('innova crysta')) return 'Innova Crysta rental Jamnagar — 7 seater luxury cab for weddings and pilgrimages'
  if (name.includes('innova')) return 'Innova cab hire Jamnagar — 7 seater comfortable family cab across Gujarat'
  if (name.includes('urbania')) return 'Force Urbania van hire Jamnagar — 17 and 24 seater group travel Gujarat'
  if (name.includes('bus') || name.includes('coach')) return 'Bus hire Jamnagar — 56 seater bus for pilgrimages and group tours Gujarat'
  if (name.includes('minibus') || name.includes('mini bus')) return 'Mini bus hire Jamnagar — 20 seater bus for group tours and pilgrimages Gujarat'
  
  return `${vehicle.name} for hire in Jamnagar — ${vehicle.capacity} seater vehicle available for tours across Gujarat`
}

export default function VehicleCard({ vehicle }: Props) {
  const hasNonAc = !!vehicle.perKmRateNonAc
  const [isAc, setIsAc] = useState(true)

  const currentRate = isAc ? vehicle.perKmRateAc : (vehicle.perKmRateNonAc || vehicle.perKmRateAc)
  
  const message = encodeURIComponent(
    `🚗 *VEHICLE ENQUIRY*
━━━━━━━━━━━━━━━━━━━━
Greetings Giriraj Yatra Sangh!
I am interested in booking the following vehicle:

• *Vehicle:* ${vehicle.name}
• *AC Preference:* ${isAc ? 'AC Required ❄️' : 'Non-AC 🪟'}
• *Capacity:* ${vehicle.capacity} Passengers

Please let me know the availability and total cost for my trip. Thank you!
━━━━━━━━━━━━━━━━━━━━
_Generated via girirajyatrasangh.com_`
  )

  return (
    <div className="glass-card rounded-xl overflow-hidden group hover:border-[#C9A84C]/60 transition-all duration-300 hover:-translate-y-1 flex flex-col">
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-[#252118] shrink-0">
        <Image
          src={vehicle.image}
          alt={getVehicleAltText(vehicle)}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {vehicle.tag && (
          <span className="absolute top-3 left-3 bg-[#C9A84C] text-[#0A0805] text-xs font-bold px-2.5 py-1 rounded shadow-md">
            {vehicle.tag}
          </span>
        )}
      </div>

      {/* Info */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-[#F5F0E8] font-serif text-lg font-semibold mb-3">{vehicle.name}</h3>

        <div className="flex flex-wrap items-center gap-4 mb-5">
          <span className="flex items-center gap-1.5 text-[#9C9080] text-sm">
            <Users size={14} className="text-[#C9A84C]" />
            {vehicle.capacity} Passengers
          </span>
          
          {/* Static AC Badge if no Non-AC option */}
          {!hasNonAc && (
            <span className="flex items-center gap-1.5 text-sm text-blue-300">
              <Snowflake size={14} />
              AC Standard
            </span>
          )}
        </div>

        {/* Dynamic AC Toggle if Non-AC option exists */}
        {hasNonAc && (
          <div className="mb-5 bg-[#080603] p-1 rounded-lg border border-[rgba(201,168,76,0.15)] flex">
            <button
              onClick={() => setIsAc(true)}
              className={`flex-1 flex items-center justify-center gap-2 py-1.5 text-xs font-medium rounded-md transition-colors ${
                isAc ? 'bg-blue-900/40 text-blue-200 border border-blue-500/30' : 'text-[#9C9080] hover:text-blue-300 border border-transparent'
              }`}
            >
              <Snowflake size={12} /> AC
            </button>
            <button
              onClick={() => setIsAc(false)}
              className={`flex-1 flex items-center justify-center gap-2 py-1.5 text-xs font-medium rounded-md transition-colors ${
                !isAc ? 'bg-[#252118] border border-[#C9A84C]/40 text-[#C9A84C]' : 'text-[#9C9080] hover:text-[#C9A84C]'
              }`}
            >
              Non-AC
            </button>
          </div>
        )}

        <div className="mt-auto">
          <div className="gold-divider mb-4" />

          {/* Price Display */}
          <div className="flex items-end justify-between mb-5">
            <div>
              <span className="text-[#9C9080] text-sm block">Rate Per KM</span>
              <span className="text-[#9C9080]/50 text-[10px] uppercase tracking-wider block mt-0.5 font-medium">Min. 300 km / day</span>
            </div>
            <div className="text-right">
              <span className="text-[#C9A84C] font-semibold text-xl flex items-center gap-0.5">
                <IndianRupee size={18} className="mt-0.5" />
                {currentRate}
              </span>
            </div>
          </div>

          <a
            href={`https://wa.me/919033999877?text=${message}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 w-full border border-[#C9A84C]/50 text-[#C9A84C] py-2.5 rounded-md text-sm font-medium hover:bg-[#C9A84C] hover:text-[#0A0805] transition-all duration-300 shadow-[0_0_15px_rgba(201,168,76,0.1)] hover:shadow-[0_0_20px_rgba(201,168,76,0.3)]"
          >
            Request This Vehicle <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </div>
  )
}
