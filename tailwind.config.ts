/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          900: '#0f0f0f',
          800: '#1a1a1a',
          700: '#2a2a2a',
          400: '#a3a3a3',
          300: '#d1d1d1',
          100: '#f5f5f5',
        },
        purple: {
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
        },
      },
    },
  },
  plugins: [],
}

