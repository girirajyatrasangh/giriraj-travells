import Link from 'next/link'
import { Phone, MessageCircle, MapPin, Mail, Clock } from 'lucide-react'

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'Cabs & Buses', href: '/fleet' },
  { label: 'Travel Blog', href: '/blog' },
  { label: 'Contact Us', href: '/contact' },
]

const services = [
  'Airport Transfers',
  'Wedding Car Hire',
  'Corporate Travel',
  'Pilgrimage Tours',
  'Outstation Trips',
  'City Sightseeing',
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#080603] border-t border-[rgba(201,168,76,0.15)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <h3 className="text-[#C9A84C] font-serif text-xl font-bold">Giriraj Yatra Sangh</h3>
              <p className="text-[#9C9080] text-xs tracking-widest uppercase mt-1">Est. 1974 · Jamnagar, Gujarat</p>
            </div>
            <div className="gold-divider mb-4" />
            <p className="text-[#9C9080] text-sm leading-relaxed">
              Five decades of trusted, premium cab services across Gujarat and beyond. Your journey, our honour.
            </p>
            <div className="flex gap-3 mt-5">
              <a
                href="https://wa.me/919033999877?text=🙏%20*Namaste%20Giriraj%20Yatra%20Sangh!*%0A%0AI%20am%20looking%20for%20a%20reliable%20cab%20service%20and%20would%20like%20to%20make%20an%20enquiry.%20Could%20you%20please%20assist%20me%20with%20your%20fleet%20availability%20and%20rates%3F"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 bg-green-700 hover:bg-green-600 text-white text-xs px-3 py-2 rounded transition-colors"
              >
                <MessageCircle size={13} /> WhatsApp
              </a>
              <a
                href="tel:+919033999877"
                className="flex items-center gap-2 bg-[#252118] hover:bg-[#C9A84C]/20 text-[#C9A84C] border border-[#C9A84C]/30 text-xs px-3 py-2 rounded transition-colors"
              >
                <Phone size={13} /> Call Us
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#F5F0E8] font-serif text-base font-semibold mb-4">Quick Links</h4>
            <div className="gold-divider mb-4" />
            <ul className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#9C9080] hover:text-[#C9A84C] text-sm transition-colors duration-200 flex items-center gap-2"
                  >
                    <span className="text-[#C9A84C]/50">›</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[#F5F0E8] font-serif text-base font-semibold mb-4">Our Services</h4>
            <div className="gold-divider mb-4" />
            <ul className="flex flex-col gap-2">
              {services.map((s) => (
                <li key={s} className="text-[#9C9080] text-sm flex items-center gap-2">
                  <span className="text-[#C9A84C]/50">›</span>
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[#F5F0E8] font-serif text-base font-semibold mb-4">Contact</h4>
            <div className="gold-divider mb-4" />
            <ul className="flex flex-col gap-3">
              <li className="flex gap-3 text-sm text-[#9C9080]">
                <MapPin size={15} className="text-[#C9A84C] mt-0.5 shrink-0" />
                <a href="https://maps.app.goo.gl/aJ7Hjcm6ZtTFn1EC9" target="_blank" rel="noreferrer" className="hover:text-[#C9A84C] transition-colors leading-relaxed">
                  Shop No. 01, Simandhar Wings, Lal Wadi, Opp. ICICI Bank, Near Jain Temple, Jamnagar - 361001
                </a>
              </li>
              <li className="flex gap-3 text-sm text-[#9C9080]">
                <Phone size={15} className="text-[#C9A84C] mt-0.5 shrink-0" />
                <a href="tel:+919033999877" className="hover:text-[#C9A84C] transition-colors">
                  +91 90339 99877
                </a>
              </li>
              <li className="flex gap-3 text-sm text-[#9C9080]">
                <Mail size={15} className="text-[#C9A84C] mt-0.5 shrink-0" />
                <a href="mailto:girirajyatrasangh@gmail.com" className="hover:text-[#C9A84C] transition-colors">
                  girirajyatrasangh@gmail.com
                </a>
              </li>
              <li className="flex gap-3 text-sm text-[#9C9080]">
                <Clock size={15} className="text-[#C9A84C] mt-0.5 shrink-0" />
                <span>24 × 7 — Always Available</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[rgba(201,168,76,0.1)] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#9C9080]">
          <p>© {year} Giriraj Yatra Sangh. All rights reserved.</p>
          <p>Trusted cab services since <span className="text-[#C9A84C]">1974</span></p>
        </div>
      </div>
    </footer>
  )
}
