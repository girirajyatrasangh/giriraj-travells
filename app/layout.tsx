import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
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
  title: 'Giriraj Yatra Sangh | Premium Cab Services — Jamnagar',
  description:
    'Giriraj Yatra Sangh — 51 years of trusted, premium cab and vehicle rentals in Jamnagar, Gujarat. Luxury cars, SUVs & buses for all occasions.',
  keywords: 'cab, vehicle rental, Jamnagar, Gujarat, luxury car, tour, travel, Giriraj Yatra Sangh',
  openGraph: {
    title: 'Giriraj Yatra Sangh | Premium Cab Services',
    description: '51 years of trusted travel in Gujarat. Book luxury cars, SUVs & buses.',
    type: 'website',
    locale: 'en_IN',
  },
  themeColor: '#0A0805',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} bg-background`}>
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
