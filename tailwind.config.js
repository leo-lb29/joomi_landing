/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}", "node_modules/preline/dist/*.js"],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ['Quicksand', 'sans-serif'], // Ajout de la police Quicksand
      },
    },
  },
  plugins: [
    // require('@tailwindcss/forms'),
    require("preline/plugin"),
  ],
};
