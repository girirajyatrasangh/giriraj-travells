'use client'

import { useState } from 'react'
import { Send } from 'lucide-react'

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

const VEHICLE_TYPES = [
  'Luxury Car (Mercedes / BMW)',
  'Sedan (Honda City / Dzire)',
  'SUV (Innova Crysta)',
  'Tempo Traveller (12-17 Seater)',
  'Mini Bus (20-27 Seater)',
  'Full Bus (40-50 Seater)',
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
  const msg = `*New Booking Enquiry — Giriraj Yatra Sangh*

👤 *Name:* ${data.name}
📞 *Phone:* ${data.phone}
📍 *From:* ${data.origin}
📍 *To:* ${data.destination}
📅 *Date:* ${data.date}
👥 *Passengers:* ${data.passengers}
🚗 *Vehicle:* ${data.vehicleType}
📝 *Notes:* ${data.notes || 'None'}

_Sent from website booking form_`
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
    setFormData((prev) => ({ ...prev, [name]: value }))
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
            placeholder="Drop / Destination City *"
            value={formData.destination}
            onChange={handleChange}
            className={`${fieldClass} ${getFieldBorder('destination')}`}
          />
          {errors.destination && <p className="text-red-400 text-xs px-1">{errors.destination}</p>}
        </div>

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
          <select
            name="passengers"
            value={formData.passengers}
            onChange={handleChange}
            className={`${fieldClass} ${getFieldBorder('passengers')}`}
          >
            <option value="">Passengers *</option>
            {[1,2,3,4,5,6,'7-10','11-17','18-27','28-50'].map((n) => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>
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
            <option value="">Select Vehicle Type *</option>
            {VEHICLE_TYPES.map((v) => (
              <option key={v} value={v}>{v}</option>
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
