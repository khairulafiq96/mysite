/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        mysite : '#646766',
        mysite_light : '#D9D9D9',
        deepblue : '#2400FF'
      },
      fontFamily : {
        inter : "'Inter', sans-serif"
      },
    },
    container : {
      padding : {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '6rem',
        xl: '7rem',
        '2xl': '8rem',
      }
    }
  },
  plugins: [],
}
