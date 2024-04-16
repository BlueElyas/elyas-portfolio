/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkGray: "#2F2F2F",
        softGray: "#F4F4F4",
        accent: "#005A34",
        primaryText: "#333333",
      },
      fontFamily: {
        sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
        merriweatherBold: [
          "Merriweather bold",
          ...defaultTheme.fontFamily.sans,
        ],
        merriweatherReg: [
          "Merriweather regular",
          ...defaultTheme.fontFamily.sans,
        ],
      },
    },
  },
  plugins: [],
};
