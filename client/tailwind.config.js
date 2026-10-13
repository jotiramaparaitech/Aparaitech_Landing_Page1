/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        theme: {
          // Dark palette
          dark: {
            bg: '#0B1220',
            surface: '#131F32',
            elevated: '#1A2840',
            border: '#29384D',
            heading: '#F1F5F9',
            text: '#CBD5E1',
            muted: '#94A3B8',
            primary: '#3B82F6',
            hover: '#2563EB',
            accent: '#2DD4BF',
          },
          // Light palette
          light: {
            bg: '#F3F6FA',
            surface: '#FFFFFF',
            elevated: '#EBF0F7',
            border: '#E2E8F0',
            heading: '#142B4A',
            text: '#475569',
            muted: '#64748B',
            primary: '#2563EB',
            hover: '#1D4ED8',
            accent: '#0F9F8F',
          },
        },
        brand: {
          bgLight: '#F3F6FA',
          cardLight: '#FFFFFF',
          headingLight: '#142B4A',
          primaryLight: '#2563EB',
          tealLight: '#0F9F8F',
          textLight: '#475569',
          mutedLight: '#64748B',
          borderLight: '#E2E8F0',

          bgDark: '#0B1220',
          cardDark: '#131F32',
          headingDark: '#F1F5F9',
          textDark: '#CBD5E1',
          mutedDark: '#94A3B8',
          borderDark: '#29384D',
          primaryDark: '#3B82F6',
          tealDark: '#2DD4BF',
        },
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563EB',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#142B4A',
        },
        teal: {
          light: '#0F9F8F',
          dark: '#2DD4BF',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        serif: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        times: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'Menlo', 'monospace'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #2563EB, #1D4ED8)',
        'gradient-text': 'linear-gradient(135deg, #FFFFFF 0%, #93C5FD 100%)',
        'gradient-brand': 'linear-gradient(135deg, #0B1220 0%, #0D9488 50%, #22D3EE 100%)',
        'gradient-dark': 'linear-gradient(180deg, #020617 0%, #0B1220 100%)',
      },
    },
  },
  plugins: [],
}
