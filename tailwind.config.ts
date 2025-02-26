// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'bat-black': '#0A0A0A',
        'bat-red': '#C80000',
        'bat-gray': '#202020',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        gothic: ['var(--font-gothic)'],
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
        fadeInUp: 'fadeInUp 1s ease-in-out',
        bounce: 'bounce 1s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};