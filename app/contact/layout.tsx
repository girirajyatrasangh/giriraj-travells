import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | Cab Booking Jamnagar | +91 90339 99877 | Giriraj Yatra Sangh',
  description:
    'Contact Giriraj Yatra Sangh for cab booking in Jamnagar. Address: Shop No. 01, Simandhar Wings, Lal Wadi, Jamnagar - 361001, Gujarat. Available on WhatsApp & phone 24/7.',
  alternates: {
    canonical: 'https://girirajyatra.in/contact',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
