/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#060D26',
          900: '#0B1437',
          800: '#111F4D',
          700: '#162660',
          600: '#1C2E75',
        },
        gold: {
          300: '#E8D5A3',
          400: '#D4B96A',
          500: '#C9A84C',
          600: '#A8832B',
          700: '#7A5F1E',
        },
        slate: {
          850: '#1A2547',
        },
        success: '#22C55E',
        danger: '#EF4444',
        warning: '#F59E0B',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui'],
        display: ['Syne', 'Inter'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};
