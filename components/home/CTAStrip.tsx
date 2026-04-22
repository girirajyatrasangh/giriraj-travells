import { MessageCircle, Phone } from 'lucide-react'

export default function CTAStrip() {
  return (
    <section className="py-16 bg-[#080603] border-y border-[rgba(201,168,76,0.15)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-[#F5F0E8] font-serif text-2xl sm:text-3xl font-bold mb-3 text-balance">
          Ready to Travel in Comfort?
        </h2>
        <p className="text-[#9C9080] text-sm mb-8 font-body max-w-md mx-auto">
          Book now on WhatsApp for instant confirmation, or call us anytime — 24 hours, 7 days a week.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://wa.me/919033999877?text=Hi%2C%20I%20want%20to%20book%20a%20vehicle%20with%20Giriraj%20Yatra%20Sangh"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2.5 bg-green-600 hover:bg-green-500 text-white px-8 py-4 rounded-md font-semibold text-sm transition-all duration-300 shadow-lg hover:shadow-green-900/40 hover:shadow-xl w-full sm:w-auto justify-center"
          >
            <MessageCircle size={18} />
            Book on WhatsApp
          </a>
          <a
            href="tel:+919033999877"
            className="flex items-center gap-2.5 border border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#0A0805] px-8 py-4 rounded-md font-semibold text-sm transition-all duration-300 w-full sm:w-auto justify-center"
          >
            <Phone size={18} />
            +91 90339 99877
          </a>
        </div>
      </div>
    </section>
  )
}
