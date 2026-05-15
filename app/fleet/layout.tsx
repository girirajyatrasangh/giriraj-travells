import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cab & Bus Fleet | Swift Dzire, Innova Crysta, Force Urbania | Jamnagar | Giriraj Yatra Sangh',
  description:
    'Hire Swift Dzire, Ertiga, Tavera, Innova, Innova Crysta, Force Urbania 17 & 24 seater, and 56-seater buses in Jamnagar. Best per-km cab rates in Gujarat. Call +91 90339 99877.',
  alternates: {
    canonical: 'https://girirajyatra.in/fleet',
  },
  openGraph: {
    title: 'Our Vehicle Fleet | Giriraj Yatra Sangh Jamnagar',
    description: 'Cars, SUVs, Vans & Buses available for hire in Jamnagar, Gujarat.',
    url: 'https://girirajyatra.in/fleet',
  },
}

export default function FleetLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
