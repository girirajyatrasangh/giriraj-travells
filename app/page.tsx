import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import HeroSection from '@/components/home/HeroSection'
import ServicesSection from '@/components/home/ServicesSection'
import FleetPreview from '@/components/home/FleetPreview'
import LegacyPreview from '@/components/home/LegacyPreview'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import BlogPreview from '@/components/home/BlogPreview'
import CTAStrip from '@/components/home/CTAStrip'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <FleetPreview />
        <LegacyPreview />
        <TestimonialsSection />
        <BlogPreview />
        <CTAStrip />
      </main>
      <Footer />
    </>
  )
}
