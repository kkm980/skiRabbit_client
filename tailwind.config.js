/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    './pages/*.{ts,tsx,js,jsx}',
    './components/**/*.{ts,tsx,js,jsx}',
  ],
  extend: {
  },
  theme: {
    screens: {
      'sm': { 'max': '480px' },
      'md': { 'max': '800px' },
      'lg': { 'max': '1130px' },
      'xl': { 'max': '1550px' }
    },
    extend: {},
  },
  plugins: [],
}
