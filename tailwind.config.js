/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'nsx': "url('/src/img/carros/honda_nsx.jpg')",
        'r32': "url('/src/img/carros/r32.jpg')",
        'supra': "url('/src/img/carros/suprasmokey.jpg')"
      }),
      backgroundSize: {
        '250px':'250px',
        '200px': '200px',
        '120px' : '120px',
        '60px': '60px'
      },
      fontFamily: {
        'eb': 'EB Garamond, serif;',
        'fira': 'Fira Sans, Arial, Times New Roman'
      }
    },
  },
  plugins: [],
}

