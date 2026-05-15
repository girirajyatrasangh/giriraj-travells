/** @type {import('next').NextConfig} */
const nextConfig = {
  // TypeScript errors block the build — catches bugs before they reach users
  images: {
    // Serve modern formats: AVIF first (smaller), WebP fallback
    formats: ['image/avif', 'image/webp'],
    // Device breakpoints for srcset generation
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    // Image sizes for components that use 'sizes' prop
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    // Cache optimised images for at least 60 seconds
    minimumCacheTTL: 60,
  },
}

export default nextConfig
