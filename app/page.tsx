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
        <CTAStrip />
      </main>
      <Footer />
    </>
  )
}
