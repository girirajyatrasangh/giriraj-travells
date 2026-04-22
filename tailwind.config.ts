import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-playfair)', 'serif'],
        body: ['var(--font-inter)', 'sans-serif'],
        serif: ['var(--font-playfair)', 'serif'],
        mono: ['Geist Mono', 'monospace'],
      },
      colors: {
        gold: '#C9A84C',
        'gold-light': '#E2C97E',
        'gold-dark': '#A07830',
        'deep-black': '#0A0805',
        surface: '#12100C',
        'surface-2': '#1C1914',
        'surface-3': '#252118',
      },
    },
  },
  plugins: [],
}

export default config
