import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        snow: '#FAFAFA',
        pine: '#2D5E4A',
        'pine-light': '#E8F0EC',
        'pine-dark': '#1F4434',
      },
      fontFamily: {
        heading: ['var(--font-instrument-serif)', 'Georgia', 'serif'],
        body: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      borderRadius: {
        btn: '2px',
        card: '4px',
      },
      maxWidth: {
        site: '1200px',
      },
    },
  },
  plugins: [],
}

export default config
