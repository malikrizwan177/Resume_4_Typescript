/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#2B1D38',
        'secondary': '#695D8C',
        'primary-dark': '#120918'
      },
      fontFamily: {
        'sans' : ["inter", ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}

