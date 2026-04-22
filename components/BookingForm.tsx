'use client'

import { useState } from 'react'
import { Send } from 'lucide-react'
import { fleetData } from '@/lib/fleet-data'

interface FormData {
  name: string
  phone: string
  origin: string
  destination: string
  date: string
  passengers: string
  vehicleType: string
  notes: string
}

interface FormErrors {
  [key: string]: string
}



const POPULAR_CITIES = [
  'Ahmedabad', 'Surat', 'Vadodara', 'Rajkot', 'Bhavnagar', 'Jamnagar', 
  'Gandhinagar', 'Junagadh', 'Bhuj', 'Dwarka', 'Somnath', 'Porbandar', 
  'Morbi', 'Diu', 'Daman', 'Mumbai', 'Pune', 'Udaipur', 'Mount Abu', 
  'Jaipur', 'Nathdwara', 'Nashik', 'Ujjain', 'Indore'
]

const initialFormData: FormData = {
  name: '',
  phone: '',
  origin: '',
  destination: '',
  date: '',
  passengers: '',
  vehicleType: '',
  notes: '',
}

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {}
  if (!data.name.trim()) errors.name = 'Full name is required'
  if (!data.phone.trim()) {
    errors.phone = 'Phone number is required'
  } else if (!/^[6-9]\d{9}$/.test(data.phone.trim())) {
    errors.phone = 'Enter a valid 10-digit Indian mobile number'
  }
  if (!data.origin.trim()) errors.origin = 'Origin is required'
  if (!data.destination.trim()) errors.destination = 'Destination is required'
  if (!data.date) errors.date = 'Travel date is required'
  if (!data.passengers) errors.passengers = 'Number of passengers is required'
  if (!data.vehicleType) errors.vehicleType = 'Please select a vehicle type'
  return errors
}

function buildWhatsAppMessage(data: FormData): string {
  const msg = `🔔 *NEW BOOKING ENQUIRY*
━━━━━━━━━━━━━━━━━━━━
Greetings Giriraj Yatra Sangh! 
I would like to book a trip with the following details:

👤 *Customer Details*
• Name: ${data.name}
• Phone: ${data.phone}

🛣️ *Trip Details*
• Origin: ${data.origin}
• Destination: ${data.destination}
• Date: ${data.date}

🚗 *Vehicle Requirements*
• Vehicle: ${data.vehicleType}
• Passengers: ${data.passengers} pax

📝 *Additional Notes:* 
${data.notes || 'None'}
━━━━━━━━━━━━━━━━━━━━
_Generated via girirajyatrasangh.com_`
  return encodeURIComponent(msg)
}

async function saveToBackend(data: FormData): Promise<void> {
  // Fire-and-forget: send to backend without blocking WhatsApp redirect
  try {
    await fetch('/api/booking', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...data, submittedAt: new Date().toISOString() }),
    })
  } catch {
    // Silently fail — WhatsApp is the primary channel
  }
}

interface Props {
  compact?: boolean
}

export default function BookingForm({ compact = false }: Props) {
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)

  const today = new Date().toISOString().split('T')[0]

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => {
      const updated = { ...prev, [name]: value }
      // If passengers change, reset the vehicle selection to force them to pick a valid one
      if (name === 'passengers') {
        updated.vehicleType = ''
      }
      return updated
    })
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const validationErrors = validate(formData)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    // Double-catch: fire backend save without awaiting
    saveToBackend(formData)

    // Immediately redirect to WhatsApp
    const message = buildWhatsAppMessage(formData)
    window.open(`https://wa.me/919033999877?text=${message}`, '_blank')

    setSubmitted(true)
    setFormData(initialFormData)
    setTimeout(() => setSubmitted(false), 5000)
  }

  const fieldClass = `w-full bg-[#252118] border text-[#F5F0E8] placeholder-[#9C9080] px-4 py-3 rounded-md text-sm transition-all duration-200 outline-none focus:border-[#C9A84C] focus:ring-1 focus:ring-[#C9A84C]/30`

  const getFieldBorder = (field: string) =>
    errors[field] ? 'border-red-500' : 'border-[rgba(201,168,76,0.2)]'

  const selectedPassengers = parseInt(formData.passengers) || 0
  const availableVehicles = fleetData.filter(
    (v) => selectedPassengers === 0 || v.capacity >= selectedPassengers
  )

  return (
    <form onSubmit={handleSubmit} noValidate className="w-full">
      {submitted && (
        <div className="mb-4 p-3 rounded-md bg-green-900/40 border border-green-500/40 text-green-300 text-sm text-center">
          Booking sent! WhatsApp should have opened. We&apos;ll confirm shortly.
        </div>
      )}

      <div className={`grid gap-3 ${compact ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1 sm:grid-cols-2'}`}>
        {/* Name */}
        <div className="flex flex-col gap-1">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name *"
            value={formData.name}
            onChange={handleChange}
            className={`${fieldClass} ${getFieldBorder('name')}`}
          />
          {errors.name && <p className="text-red-400 text-xs px-1">{errors.name}</p>}
        </div>

        {/* Phone */}
        <div className="flex flex-col gap-1">
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number *"
            maxLength={10}
            value={formData.phone}
            onChange={handleChange}
            className={`${fieldClass} ${getFieldBorder('phone')}`}
          />
          {errors.phone && <p className="text-red-400 text-xs px-1">{errors.phone}</p>}
        </div>

        {/* Origin */}
        <div className="flex flex-col gap-1">
          <input
            type="text"
            name="origin"
            list="cities-list"
            placeholder="Pickup / Origin City *"
            value={formData.origin}
            onChange={handleChange}
            className={`${fieldClass} ${getFieldBorder('origin')}`}
          />
          {errors.origin && <p className="text-red-400 text-xs px-1">{errors.origin}</p>}
        </div>

        {/* Destination */}
        <div className="flex flex-col gap-1">
          <input
            type="text"
            name="destination"
            list="cities-list"
            placeholder="Drop / Destination City *"
            value={formData.destination}
            onChange={handleChange}
            className={`${fieldClass} ${getFieldBorder('destination')}`}
          />
          {errors.destination && <p className="text-red-400 text-xs px-1">{errors.destination}</p>}
        </div>

        {/* Datalist for autocomplete suggestions */}
        <datalist id="cities-list">
          {POPULAR_CITIES.map(city => (
            <option key={city} value={city} />
          ))}
        </datalist>

        {/* Date */}
        <div className="flex flex-col gap-1">
          <input
            type="date"
            name="date"
            min={today}
            value={formData.date}
            onChange={handleChange}
            className={`${fieldClass} ${getFieldBorder('date')} [color-scheme:dark]`}
          />
          {errors.date && <p className="text-red-400 text-xs px-1">{errors.date}</p>}
        </div>

        {/* Passengers */}
        <div className="flex flex-col gap-1">
          <input
            type="number"
            name="passengers"
            min="1"
            max="60"
            placeholder="No. of Passengers *"
            value={formData.passengers}
            onChange={handleChange}
            className={`${fieldClass} ${getFieldBorder('passengers')}`}
          />
          {errors.passengers && <p className="text-red-400 text-xs px-1">{errors.passengers}</p>}
        </div>

        {/* Vehicle Type — full width */}
        <div className="sm:col-span-2 flex flex-col gap-1">
          <select
            name="vehicleType"
            value={formData.vehicleType}
            onChange={handleChange}
            className={`${fieldClass} ${getFieldBorder('vehicleType')}`}
          >
            <option value="">
              {selectedPassengers > 0 
                ? `Select Vehicle Type (Fit for ${selectedPassengers} pax) *` 
                : 'Select Vehicle Type *'}
            </option>
            {availableVehicles.map((v) => (
              <option key={v.id} value={v.name}>
                {v.name} (Max {v.capacity} Passengers)
              </option>
            ))}
          </select>
          {errors.vehicleType && <p className="text-red-400 text-xs px-1">{errors.vehicleType}</p>}
        </div>

        {/* Notes — full width */}
        <div className="sm:col-span-2">
          <textarea
            name="notes"
            placeholder="Special requests or notes (optional)"
            rows={3}
            value={formData.notes}
            onChange={handleChange}
            className={`${fieldClass} border-[rgba(201,168,76,0.2)] resize-none`}
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-4 w-full flex items-center justify-center gap-2 bg-[#C9A84C] text-[#0A0805] font-semibold py-3.5 px-6 rounded-md text-sm tracking-wide hover:bg-[#E2C97E] transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(201,168,76,0.4)]"
      >
        <Send size={16} />
        Send Booking on WhatsApp
      </button>

      <p className="mt-2 text-center text-[#9C9080] text-xs">
        Your request opens WhatsApp instantly. We respond within minutes.
      </p>
    </form>
  )
}
