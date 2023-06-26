/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bright-gray': {
          DEFAULT: '#414656',
          50: '#9BA1B3',
          100: '#8F96AB',
          200: '#788099',
          300: '#646C84',
          400: '#53596D',
          500: '#414656',
          600: '#292C36',
          700: '#111216',
          800: '#000000',
          900: '#000000',
          950: '#000000'
        },
        'zircon': {
          DEFAULT: '#F6F8FF',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#FFFFFF',
          300: '#FFFFFF',
          400: '#FFFFFF',
          500: '#F6F8FF',
          600: '#BECCFF',
          700: '#86A1FF',
          800: '#4E75FF',
          900: '#1649FF',
          950: '#0037F9'
        },
      },
      fontFamily: {
        "Lato": "'Lato', sans-serif"
      }
    },
  },
  plugins: [],
}

