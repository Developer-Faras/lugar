/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html'],
  theme: {
    extend: {
      colors: {
        black: "#1E3240",
        blue: "#AFD4E2",
        white: "#FFFFFF",
        gray: "#BDBDBD"
      },
      fontFamily: {
        "roboto": "'Roboto Slab', serif"
      }
    },
  },
  plugins: [],
}

