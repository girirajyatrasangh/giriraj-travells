import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Travel Blog | Gujarat Cab & Road Trip Guides',
  description:
    'Travel guides, cab fare tips, pilgrimage routes, and road trip itineraries for Gujarat. Written by Giriraj Yatra Sangh — trusted travel experts in Jamnagar since 1974.',
  alternates: {
    canonical: 'https://giriraj-travells.vercel.app/blog',
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
