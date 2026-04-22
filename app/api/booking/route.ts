import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase'

// ─────────────────────────────────────────────────────────────────────────────
//  POST /api/booking
//
//  Flow:
//    1. Validate required fields server-side (defence in depth)
//    2. Sanitize — strip whitespace, only known fields pass through
//    3. Insert row into Supabase `bookings` table via admin client
//       (service role key bypasses RLS, guarantees the write always succeeds)
//    4. Return JSON { success: true }
//
//  WhatsApp is the primary booking channel.
//  This API is the persistent backup record for every submission.
// ─────────────────────────────────────────────────────────────────────────────

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // ── 1. Server-side validation ──────────────────────────────────────────
    const required = ['name', 'phone', 'origin', 'destination', 'date', 'passengers', 'vehicleType']
    for (const field of required) {
      if (!body[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        )
      }
    }

    // ── 2. Sanitize — map form fields → database columns ──────────────────
    const booking = {
      name:         String(body.name).trim(),
      phone:        String(body.phone).trim(),
      origin:       String(body.origin).trim(),
      destination:  String(body.destination).trim(),
      travel_date:  String(body.date),          // ISO date e.g. "2025-05-15"
      passengers:   String(body.passengers),    // e.g. "4", "7-10", "18-27"
      vehicle_type: String(body.vehicleType),
      notes:        body.notes ? String(body.notes).trim() : null,
      status:       'new',
      submitted_at: new Date().toISOString(),
    }

    // ── 3. Persist to Supabase ─────────────────────────────────────────────
    const { error } = await supabaseAdmin
      .from('bookings')
      .insert([booking])

    if (error) {
      console.error('[Booking API] Supabase insert error:', error.message)
      return NextResponse.json(
        { error: 'Failed to save booking. Please try WhatsApp directly.' },
        { status: 500 }
      )
    }

    console.log(`[Booking API] Saved: ${booking.name} · ${booking.phone} · ${booking.travel_date}`)

    return NextResponse.json({ success: true, message: 'Booking received' }, { status: 200 })
  } catch (err) {
    console.error('[Booking API] Unexpected error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
