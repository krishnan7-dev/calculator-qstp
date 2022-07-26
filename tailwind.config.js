/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html, js}"],
  theme: {
    extend: {
      colors: {
        'violet': '#0064FF',
        'pink': '#D9008F',
        'darkBlue': '#050A30',
        'lightBlue': '#D4F1F4',
        'mistyBlue': '#C3CEDA'
      },
    },
  },
  plugins: [],
}
