'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import BookingForm from '@/components/BookingForm'
import { MapPin, Phone, Mail, Clock, ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'How do I confirm my booking?',
    a: 'Once you submit the form, your request opens WhatsApp with a pre-filled message. We review it and confirm your booking within minutes via WhatsApp itself.',
  },
  {
    q: 'Do you provide chauffeur service outside Gujarat?',
    a: 'Yes. We operate across Gujarat and provide outstation services to Rajasthan, Maharashtra, and Madhya Pradesh. Contact us for long-distance quotes.',
  },
  {
    q: 'What is your cancellation policy?',
    a: 'Cancellations made 48+ hours before travel date are fully refunded. Within 24 hours, a 50% charge applies. No-shows are charged in full.',
  },
  {
    q: 'Are all your drivers verified?',
    a: 'Absolutely. All our chauffeurs are background-checked, have valid commercial driving licences, and undergo training in hospitality and safe driving.',
  },
  {
    q: 'Do you provide vehicles for weddings?',
    a: 'Yes — decorated luxury cars, SUVs, and convoy packages for weddings are our most requested service. Call us early to secure specific vehicles.',
  },
  {
    q: 'Can I get a GST invoice?',
    a: 'Yes. We provide proper GST-compliant invoices for all corporate and business bookings. Mention GST requirement while booking.',
  },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="glass-card rounded-xl overflow-hidden">
      <button
        className="w-full flex items-center justify-between p-5 text-left"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="text-[#F5F0E8] text-sm font-semibold font-body pr-4">{q}</span>
        <ChevronDown
          size={18}
          className={`text-[#C9A84C] shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-48' : 'max-h-0'}`}
      >
        <div className="px-5 pb-5">
          <div className="gold-divider mb-4" />
          <p className="text-[#9C9080] text-sm leading-relaxed font-body">{a}</p>
        </div>
      </div>
    </div>
  )
}

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-28 pb-14 bg-[#080603] border-b border-[rgba(201,168,76,0.15)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase mb-3 font-body">Get in Touch</p>
            <h1 className="text-[#F5F0E8] font-serif text-4xl sm:text-5xl font-bold mb-4 text-balance">
              Book Your Journey
            </h1>
            <div className="gold-divider w-24 mx-auto mt-4 mb-6" />
            <p className="text-[#9C9080] max-w-xl mx-auto text-sm leading-relaxed font-body">
              Fill in the form below to send your enquiry directly via WhatsApp. We respond within minutes.
            </p>
          </div>
        </section>

        {/* Form + Info */}
        <section className="py-16 bg-[#0A0805]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-10">
              {/* Booking form */}
              <div className="lg:col-span-2 glass-card rounded-2xl p-6 lg:p-8 gold-glow">
                <h2 className="text-[#F5F0E8] font-serif text-2xl font-bold mb-1">Booking Enquiry</h2>
                <p className="text-[#9C9080] text-sm mb-6 font-body">
                  All fields marked * are required. Tap the button to open WhatsApp.
                </p>
                <BookingForm />
              </div>

              {/* Contact Info */}
              <div className="flex flex-col gap-5">
                {/* Quick contact card */}
                <div className="glass-card rounded-2xl p-6">
                  <h3 className="text-[#F5F0E8] font-serif text-lg font-semibold mb-4">Quick Contact</h3>
                  <div className="gold-divider mb-5" />
                  <ul className="flex flex-col gap-4">
                    <li className="flex gap-3 text-sm text-[#9C9080] font-body">
                      <MapPin size={16} className="text-[#C9A84C] shrink-0 mt-0.5" />
                      <span>Jamnagar, Gujarat — 361001, India</span>
                    </li>
                    <li className="flex gap-3 text-sm text-[#9C9080] font-body">
                      <Phone size={16} className="text-[#C9A84C] shrink-0 mt-0.5" />
                      <a href="tel:+919033999877" className="hover:text-[#C9A84C] transition-colors">
                        +91 90339 99877
                      </a>
                    </li>
                    <li className="flex gap-3 text-sm text-[#9C9080] font-body">
                      <Mail size={16} className="text-[#C9A84C] shrink-0 mt-0.5" />
                      <a href="mailto:girirajyatrasangh@gmail.com" className="hover:text-[#C9A84C] transition-colors">
                        girirajyatrasangh@gmail.com
                      </a>
                    </li>
                    <li className="flex gap-3 text-sm text-[#9C9080] font-body">
                      <Clock size={16} className="text-[#C9A84C] shrink-0 mt-0.5" />
                      <span>24 × 7 · Available Anytime</span>
                    </li>
                  </ul>
                </div>

                {/* Map placeholder */}
                <div className="glass-card rounded-2xl overflow-hidden">
                  <div className="bg-[#252118] h-48 flex flex-col items-center justify-center gap-2">
                    <MapPin size={28} className="text-[#C9A84C]" />
                    <p className="text-[#9C9080] text-sm font-body">Jamnagar, Gujarat</p>
                    <a
                      href="https://maps.google.com/?q=Jamnagar,Gujarat"
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#C9A84C] text-xs underline underline-offset-2 hover:text-[#E2C97E] transition-colors font-body"
                    >
                      Open in Google Maps
                    </a>
                  </div>
                </div>

                {/* Availability notice */}
                <div className="glass-card rounded-2xl p-5 border-[#C9A84C]/30">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-green-300 text-sm font-semibold font-body">Currently Available</span>
                  </div>
                  <p className="text-[#9C9080] text-xs leading-relaxed font-body">
                    We are online and typically respond to WhatsApp enquiries within 5–10 minutes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-[#080603]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase mb-3 font-body">Common Questions</p>
              <h2 className="text-[#F5F0E8] font-serif text-3xl font-bold text-balance">
                Frequently Asked Questions
              </h2>
              <div className="gold-divider w-24 mx-auto mt-4" />
            </div>
            <div className="flex flex-col gap-3">
              {faqs.map((faq) => (
                <FAQItem key={faq.q} q={faq.q} a={faq.a} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
