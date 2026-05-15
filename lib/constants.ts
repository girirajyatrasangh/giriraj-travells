/**
 * lib/constants.ts
 * ─────────────────────────────────────────────────────────────────
 * Single source of truth for all contact info, brand values, and
 * repeated WhatsApp URLs. Change phone/email here — updates everywhere.
 * ─────────────────────────────────────────────────────────────────
 */

// ── Contact ──────────────────────────────────────────────────────
export const PHONE            = '+919033999877'
export const PHONE_DISPLAY    = '+91 90339 99877'
export const PHONE_TEL        = 'tel:+919033999877'
export const EMAIL            = 'girirajyatrasangh@gmail.com'
export const WHATSAPP_NUMBER  = '919033999877'

// ── WhatsApp deep-link URLs ───────────────────────────────────────
/** Generic enquiry — used in Navbar, CTAStrip */
export const WA_GENERIC =
  `https://wa.me/919033999877?text=${encodeURIComponent(
    '🙏 *Namaste Giriraj Yatra Sangh!*\n\nI am looking for a reliable cab service and would like to make an enquiry. Could you please assist me with your fleet availability and rates?'
  )}`

/** Hero CTA — quote request */
export const WA_HERO =
  `https://wa.me/919033999877?text=${encodeURIComponent(
    '🙏 *Namaste Giriraj Yatra Sangh!*\n\nI would like to request a quote for cab service.'
  )}`

// ── Brand ─────────────────────────────────────────────────────────
export const BRAND = {
  name:        'Giriraj Yatra Sangh',
  tagline:     'Premium Cab Services',
  foundedYear: 1974,
  website:     'https://girirajyatra.in',
  gold:        '#C9A84C',
  goldLight:   '#E2C97E',
  dark:        '#0A0805',
  text:        '#F5F0E8',
  muted:       '#9C9080',
} as const
