import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://girirajyatra.in',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://girirajyatra.in/fleet',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://girirajyatra.in/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://girirajyatra.in/contact',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: 'https://girirajyatra.in/blog/pilgrimage-destinations-jamnagar-2025',
      lastModified: new Date('2025-04-10'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://girirajyatra.in/blog/innova-crysta-best-family-car',
      lastModified: new Date('2025-03-22'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://girirajyatra.in/blog/jamnagar-to-rann-of-kutch-guide',
      lastModified: new Date('2025-03-05'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]
}

