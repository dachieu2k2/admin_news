/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      ...colors,
      primary: "#4E46B4",
      success: "#58D05E",
      error: "#F65050",
      secondary: "#EB5757",
      darkgray: "#DEE1E6",
    },
    extend: {},
  },
  plugins: [],
};
