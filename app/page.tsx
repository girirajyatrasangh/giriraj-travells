import { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import HeroSection from '@/components/home/HeroSection'
import ServicesSection from '@/components/home/ServicesSection'
import FleetPreview from '@/components/home/FleetPreview'

import TestimonialsSection from '@/components/home/TestimonialsSection'
import BlogPreview from '@/components/home/BlogPreview'
import CTAStrip from '@/components/home/CTAStrip'

export const metadata: Metadata = {
  title: 'Giriraj Yatra Sangh | Best Cab Service in Jamnagar, Gujarat',
  description:
    'Book cabs & buses in Jamnagar. 51 years of trust. Swift Dzire, Innova, Ertiga, Force Urbania, 56-seater buses. Airport transfers, weddings, Dwarka pilgrimages. Call +91 90339 99877.',
  alternates: {
    canonical: 'https://giriraj-travells.vercel.app',
  },
}

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <FleetPreview />

        <TestimonialsSection />
        <BlogPreview />
        
        <section className="faq-section" aria-label="Frequently Asked Questions">
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="faq-list max-w-3xl mx-auto space-y-4">
            <details className="border border-gray-300 rounded p-4">
              <summary className="cursor-pointer font-semibold"><strong>What is the cab fare from Jamnagar to Dwarka?</strong></summary>
              <p className="mt-3 text-gray-700">Our Swift Dzire starts at ₹12/km. Jamnagar to Dwarka is approximately 140 km one way. Contact us on +91 90339 99877 for exact quotes based on your trip details.</p>
            </details>
            <details className="border border-gray-300 rounded p-4">
              <summary className="cursor-pointer font-semibold"><strong>Do you provide airport pickup in Jamnagar?</strong></summary>
              <p className="mt-3 text-gray-700">Yes, we offer 24/7 airport transfers to and from Jamnagar Airport with flight tracking and meet & greet service.</p>
            </details>
            <details className="border border-gray-300 rounded p-4">
              <summary className="cursor-pointer font-semibold"><strong>Can I book an Innova Crysta in Jamnagar?</strong></summary>
              <p className="mt-3 text-gray-700">Yes, our Innova Crysta is available with a minimum of 300 km/day for outstation trips. Call +91 90339 99877 for current rates.</p>
            </details>
            <details className="border border-gray-300 rounded p-4">
              <summary className="cursor-pointer font-semibold"><strong>Do you provide buses for group pilgrimages?</strong></summary>
              <p className="mt-3 text-gray-700">Yes, we have 17, 20, 24, and 56-seater buses for Dwarka, Somnath, Nageshwar, Bet Dwarka, and Ambaji yatras from Jamnagar.</p>
            </details>
            <details className="border border-gray-300 rounded p-4">
              <summary className="cursor-pointer font-semibold"><strong>What areas do you serve from Jamnagar?</strong></summary>
              <p className="mt-3 text-gray-700">We serve all of Gujarat including Dwarka, Somnath, Rajkot, Ahmedabad, Rann of Kutch, Porbandar, and all major pilgrimage routes.</p>
            </details>
            <details className="border border-gray-300 rounded p-4">
              <summary className="cursor-pointer font-semibold"><strong>Is Giriraj Yatra Sangh available 24 hours?</strong></summary>
              <p className="mt-3 text-gray-700">Yes, we are available 24 hours a day, 7 days a week. WhatsApp or call +91 90339 99877 anytime.</p>
            </details>
          </div>
        </section>

        <CTAStrip />
      </main>
      <Footer />
    </>
  )
}
