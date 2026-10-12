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
            bg: '#0B0F19',
            surface: '#111827',
            elevated: '#161F32',
            border: '#263247',
            text: '#F8FAFC',
            secondary: '#CBD5E1',
            muted: '#94A3B8',
            primary: '#3B82F6',
            hover: '#2563EB',
            status: '#34D399',
          },
          // Light palette
          light: {
            bg: '#F8FAFC',
            surface: '#FFFFFF',
            elevated: '#F1F5F9',
            border: '#E2E8F0',
            text: '#0F172A',
            secondary: '#475569',
            muted: '#64748B',
            primary: '#2563EB',
            hover: '#1D4ED8',
            status: '#10B981',
          },
        },
        brand: {
          navy: '#0B1220',
          dark: '#0B0F19',
          surface: '#111827',
          surfaceElevated: '#161F32',
          light: '#F8FAFC',
          lightSurface: '#FFFFFF',
          primary: '#2563EB',
          primaryHover: '#1D4ED8',
          secondary: '#10B981',
          secondaryHover: '#059669',
          teal: '#0D9488',
          cyan: '#22D3EE',
          textDark: '#0F172A',
          textMuted: '#64748B',
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
          900: '#1e3a8a',
        },
        accent: {
          cyan: '#22D3EE',
          teal: '#0D9488',
          navy: '#0B1220',
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
