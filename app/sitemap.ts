import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://giriraj-travells.vercel.app',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://giriraj-travells.vercel.app/fleet',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://giriraj-travells.vercel.app/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://giriraj-travells.vercel.app/contact',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: 'https://giriraj-travells.vercel.app/blog/pilgrimage-destinations-jamnagar-2025',
      lastModified: new Date('2025-04-10'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://giriraj-travells.vercel.app/blog/innova-crysta-best-family-car',
      lastModified: new Date('2025-03-22'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://giriraj-travells.vercel.app/blog/jamnagar-to-rann-of-kutch-guide',
      lastModified: new Date('2025-03-05'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]
}
