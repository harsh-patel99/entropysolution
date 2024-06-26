/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{js,jsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
