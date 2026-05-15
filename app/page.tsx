import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

// ── Above-fold: static imports (must load immediately) ──
import HeroSection from '@/components/home/HeroSection'
import ServicesSection from '@/components/home/ServicesSection'

// ── Below-fold: dynamic imports (reduces initial JS bundle ~119 KiB) ──
const FleetPreview = dynamic(() => import('@/components/home/FleetPreview'))
const TestimonialsSection = dynamic(() => import('@/components/home/TestimonialsSection'))
const BlogPreview = dynamic(() => import('@/components/home/BlogPreview'))
const CTAStrip = dynamic(() => import('@/components/home/CTAStrip'))

export const metadata: Metadata = {
  title: 'Giriraj Yatra Sangh | Best Cab Service in Jamnagar Since 1974',
  description:
    'Book cabs & buses in Jamnagar. 51 years of trust. Swift Dzire, Innova, Ertiga, Force Urbania, 56-seater buses. Airport transfers, weddings, Dwarka pilgrimages. Call +91 90339 99877.',
  alternates: {
    canonical: 'https://girirajyatra.in',
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
