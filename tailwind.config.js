/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html, js}"],
  theme: {
    extend: {
      colors: {
        'violet': '#0064FF',
        'indigo': '#004CFF',
        'blue': '#0000FF',
        'purple': '#A700CC',
        'pink': '#D9008F',
        'red': '#EC0051'
      }
    },
  },
  plugins: [],
}
