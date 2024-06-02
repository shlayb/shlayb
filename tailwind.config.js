/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#1F2937",
        scndary: "#9ca3af",
        dark: "#0f172a",
        semidark: "#1e293b",
        light: "#f3f4f6",
      },
      aspectRatio: {
        "3/4": "3 / 4",
      },
    },
    fontFamily: { Poppins: ["Poppins", "sans-serif"] },
  },
  plugins: [],
};
