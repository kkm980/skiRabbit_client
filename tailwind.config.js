/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    './pages/*.{ts,tsx,js,jsx}', 
    './components/**/*.{ts,tsx,js,jsx}',
  ],
  extend: {
    screens: {
      'smallLaptop':{'max':'1100px'},
      'smallTab':{'max':'700px'},
      // 'justSmall':{'max':'1600px'},
      // 'smallLaptops': {'max': '1360px'},
      // 'tabs': {'max': '1164px'},
      // => @media (max-width: 1279px) { ... }
    }
  },
  plugins: [],
}
