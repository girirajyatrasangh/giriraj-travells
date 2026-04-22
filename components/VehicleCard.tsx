import Image from 'next/image'
import { Users, Snowflake, IndianRupee, ArrowRight } from 'lucide-react'

export interface Vehicle {
  id: string
  name: string
  category: 'luxury' | 'sedan-suv' | 'bus'
  capacity: number
  ac: boolean
  dailyRate: string
  perKmRate: string
  image: string
  tag?: string
}

interface Props {
  vehicle: Vehicle
}

export default function VehicleCard({ vehicle }: Props) {
  const message = encodeURIComponent(
    `Hi, I'd like to enquire about *${vehicle.name}* — Capacity: ${vehicle.capacity}, AC: ${vehicle.ac ? 'Yes' : 'No'}. Please share availability and rates.`
  )

  return (
    <div className="glass-card rounded-xl overflow-hidden group hover:border-[#C9A84C]/60 transition-all duration-300 hover:-translate-y-1">
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-[#252118]">
        <Image
          src={vehicle.image}
          alt={vehicle.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {vehicle.tag && (
          <span className="absolute top-3 left-3 bg-[#C9A84C] text-[#0A0805] text-xs font-bold px-2.5 py-1 rounded">
            {vehicle.tag}
          </span>
        )}
      </div>

      {/* Info */}
      <div className="p-5">
        <h3 className="text-[#F5F0E8] font-serif text-lg font-semibold mb-3">{vehicle.name}</h3>

        <div className="flex flex-wrap gap-3 mb-4">
          <span className="flex items-center gap-1.5 text-[#9C9080] text-sm">
            <Users size={14} className="text-[#C9A84C]" />
            {vehicle.capacity} Passengers
          </span>
          <span className={`flex items-center gap-1.5 text-sm ${vehicle.ac ? 'text-blue-300' : 'text-[#9C9080]'}`}>
            <Snowflake size={14} className={vehicle.ac ? 'text-blue-300' : 'text-[#9C9080]'} />
            {vehicle.ac ? 'AC' : 'Non-AC'}
          </span>
        </div>

        <div className="gold-divider mb-4" />

        <div className="flex justify-between text-sm mb-5">
          <div>
            <p className="text-[#9C9080] text-xs mb-0.5">Daily Rate</p>
            <p className="text-[#C9A84C] font-semibold flex items-center gap-0.5">
              <IndianRupee size={13} />
              {vehicle.dailyRate}
            </p>
          </div>
          <div className="text-right">
            <p className="text-[#9C9080] text-xs mb-0.5">Per KM</p>
            <p className="text-[#C9A84C] font-semibold flex items-center gap-0.5 justify-end">
              <IndianRupee size={13} />
              {vehicle.perKmRate}
            </p>
          </div>
        </div>

        <a
          href={`https://wa.me/919033999877?text=${message}`}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-2 w-full border border-[#C9A84C]/50 text-[#C9A84C] py-2.5 rounded-md text-sm font-medium hover:bg-[#C9A84C] hover:text-[#0A0805] transition-all duration-300"
        >
          Request This Vehicle <ArrowRight size={14} />
        </a>
      </div>
    </div>
  )
}
