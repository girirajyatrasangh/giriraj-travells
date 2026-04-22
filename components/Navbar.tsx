'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone, MessageCircle } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Cabs & Buses', href: '/fleet' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || menuOpen
          ? 'bg-[#0A0805]/95 backdrop-blur-lg border-b border-[rgba(201,168,76,0.2)] shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-tight group">
            <span className="text-[#C9A84C] font-serif text-lg lg:text-xl font-bold tracking-wide">
              Giriraj Yatra Sangh
            </span>
            <span className="text-[#9C9080] text-[10px] tracking-[0.2em] uppercase">
              Premium Cab Services
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm tracking-wide transition-colors duration-200 relative group ${
                  pathname === link.href
                    ? 'text-[#C9A84C]'
                    : 'text-[#F5F0E8]/80 hover:text-[#C9A84C]'
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-[#C9A84C] transition-all duration-300 ${
                    pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/919033999877?text=🙏%20*Namaste%20Giriraj%20Yatra%20Sangh!*%0A%0AI%20am%20looking%20for%20a%20reliable%20cab%20service%20and%20would%20like%20to%20make%20an%20enquiry.%20Could%20you%20please%20assist%20me%20with%20your%20fleet%20availability%20and%20rates%3F"
              target="_blank"
              rel="noreferrer"
              className="hidden md:flex items-center gap-2 bg-green-700 hover:bg-green-600 text-white text-sm px-4 py-2 rounded transition-all duration-300 shadow-lg shadow-green-900/20"
            >
              <MessageCircle size={14} />
              <span>WhatsApp</span>
            </a>
            <a
              href="tel:+919033999877"
              className="hidden md:flex items-center gap-2 text-[#C9A84C] text-sm border border-[#C9A84C]/40 px-4 py-2 rounded hover:bg-[#C9A84C] hover:text-[#0A0805] transition-all duration-300"
            >
              <Phone size={14} />
              <span>Call Now</span>
            </a>
            <button
              className="lg:hidden text-[#F5F0E8] p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-[#0A0805]/98 px-4 pb-6 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`py-3 border-b border-[rgba(201,168,76,0.1)] text-sm tracking-wide transition-colors ${
                pathname === link.href ? 'text-[#C9A84C]' : 'text-[#F5F0E8]/80'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:+919033999877"
            className="mt-4 flex items-center justify-center gap-2 text-[#C9A84C] border border-[#C9A84C]/40 py-3 rounded text-sm"
          >
            <Phone size={14} />
            +91 90339 99877
          </a>
        </div>
      </div>
    </nav>
  )
}
