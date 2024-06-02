/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {
      colors : {
        primary: '#1F2937',
        scndary: '#9ca3af'
      },
      aspectRatio: {
        '3/4': '3 / 4',
      },
    },
    fontFamily: { Poppins: ['Poppins', 'sans-serif'] },
  },
  plugins: [],
};
