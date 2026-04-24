import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { GoogleAnalytics } from '@next/third-parties/google'
import './globals.css'


const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Giriraj Yatra Sangh | Best Cab Service in Jamnagar, Gujarat',
    template: '%s | Giriraj Yatra Sangh',
  },
  description:
    'Trusted cab service in Jamnagar since 1974. Book Swift Dzire, Innova, Ertiga, Buses for airport transfers, weddings, pilgrimages & outstation trips across Gujarat. Call +91 90339 99877.',
  keywords: [
    'cab service Jamnagar',
    'taxi Jamnagar',
    'Jamnagar cab booking',
    'Gujarat cab service',
    'Innova on rent Jamnagar',
    'airport cab Jamnagar',
    'wedding car Jamnagar',
    'Dwarka cab service',
    'outstation cab Gujarat',
    'bus hire Jamnagar',
    'Giriraj Yatra Sangh',
    'pilgrimage cab Gujarat',
  ],
  authors: [{ name: 'Giriraj Yatra Sangh' }],
  creator: 'Giriraj Yatra Sangh',
  publisher: 'Giriraj Yatra Sangh',
  metadataBase: new URL('https://giriraj-travells.vercel.app'),
  openGraph: {
    title: 'Giriraj Yatra Sangh | Best Cab Service in Jamnagar, Gujarat',
    description:
      'Book cabs & buses in Jamnagar. 51+ years of trusted travel. Swift Dzire, Innova, Ertiga, Force Urbania, Buses. 24/7 available.',
    url: 'https://giriraj-travells.vercel.app',
    siteName: 'Giriraj Yatra Sangh',
    images: [
      {
        url: '/images/hero-car.jpg',
        width: 1200,
        height: 630,
        alt: 'Giriraj Yatra Sangh Premium Cab Service Jamnagar Gujarat',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Giriraj Yatra Sangh | Cab Service Jamnagar',
    description:
      'Trusted cab service in Jamnagar since 1974. Airport, weddings, pilgrimages. Call +91 90339 99877.',
    images: ['/images/hero-car.jpg'],
  },
  alternates: {
    canonical: 'https://giriraj-travells.vercel.app',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'Y06cyjFq4OS6FYQ4GRugHCnO76Bl1EIOOc088N7nCjs',
  },
}

export const viewport = {
  themeColor: '#0A0805',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Giriraj Yatra Sangh',
    image: 'https://giriraj-travells.vercel.app/images/hero-car.jpg',
    '@id': 'https://giriraj-travells.vercel.app',
    url: 'https://giriraj-travells.vercel.app',
    telephone: '+919033999877',
    email: 'girirajyatrasangh@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Shop No. 01, Simandhar Wings, Lal Wadi, Opp. ICICI Bank, Near Jain Temple',
      addressLocality: 'Jamnagar',
      addressRegion: 'Gujarat',
      postalCode: '361001',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 22.4707,
      longitude: 70.0577,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
    sameAs: ['https://wa.me/919033999877'],
    description:
      "Giriraj Yatra Sangh is Jamnagar's most trusted cab and bus service since 1974. We offer Swift Dzire, Ertiga, Innova Crysta, Force Urbania, and buses for airport transfers, weddings, Dwarka pilgrimage tours, and outstation trips across Gujarat.",
    priceRange: '₹₹',
    foundingDate: '1974',
    areaServed: [
      { '@type': 'City', name: 'Jamnagar' },
      { '@type': 'State', name: 'Gujarat' },
    ],
    serviceType: [
      'Airport Transfer',
      'Wedding Car Hire',
      'Corporate Travel',
      'Pilgrimage Tours',
      'Outstation Cab',
      'Bus Hire',
    ],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is the cab fare from Jamnagar to Dwarka?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our Swift Dzire starts at ₹12/km. Jamnagar to Dwarka is approximately 140 km one way. Contact us on +91 90339 99877 for exact quotes.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you provide airport pickup in Jamnagar?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we offer 24/7 airport transfers to and from Jamnagar Airport with flight tracking and meet & greet service.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I book an Innova Crysta in Jamnagar?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, our Innova Crysta is available with a minimum of 300 km/day for outstation trips. Call +91 90339 99877 for current rates.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you provide buses for group pilgrimages?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we have 17-seater, 24-seater, 20-seater, and 56-seater buses available for Dwarka, Somnath, Nageshwar, Bet Dwarka, and Ambaji yatras from Jamnagar.',
        },
      },
      {
        '@type': 'Question',
        name: 'What vehicles are available for outstation trips from Jamnagar?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We offer Swift Dzire (4 passengers), Ertiga (7 passengers), Tavera (7 passengers), Innova (7 passengers), Innova Crysta (7 passengers), Force Urbania 17/24 seater, and buses up to 56 seats. All AC vehicles.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is Giriraj Yatra Sangh available 24 hours?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we are available 24 hours a day, 7 days a week. WhatsApp or call +91 90339 99877 anytime.',
        },
      },
    ],
  }

  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} bg-background`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className="antialiased">
        {children}
        <Analytics />
        <GoogleAnalytics gaId="G-L5W8TFQJ1F" />
      </body>
    </html>
  )
}
