/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          100: '#ececec',
          200: '#2f2f2f',
          300: '#212121',
          400: '#171717',
          500: '#0d0d0d',
        },
        primary: {
          DEFAULT: '#22c55e'
        },
        secondary: {
          DEFAULT: '#19734e'
        },
      },
      fontSize: {
        md: '15px'
      }
    },
  },
  plugins: [],
}

