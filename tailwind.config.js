/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {
      aspectRatio: {
        '3/4': '3 / 4',
      },
    },
    fontFamily: { Poppins: ['Poppins', 'sans-serif'] },
  },
  plugins: [],
};
