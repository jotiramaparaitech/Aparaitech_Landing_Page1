/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0B1220',
          dark: '#020617',
          teal: '#0D9488',
          cyan: '#22D3EE',
          light: '#F8FAFC',
          textDark: '#0F172A',
          textMuted: '#64748B',
        },
        primary: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
        accent: {
          cyan: '#22D3EE',
          teal: '#0D9488',
          navy: '#0B1220',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Menlo', 'monospace'],
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #0B1220 0%, #0D9488 50%, #22D3EE 100%)',
        'gradient-text': 'linear-gradient(135deg, #ffffff 0%, #22D3EE 100%)',
        'gradient-dark': 'linear-gradient(180deg, #020617 0%, #0B1220 100%)',
      },
    },
  },
  plugins: [],
}
