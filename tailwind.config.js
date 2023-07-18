/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#262626",
        blue: "#0095F6",
        white: "#FFFFFF",
        darkWhite: "#FAFAFA",
        borderColor: "#DBDBDB",
        gradient: "",
      },
      fontFamily: {
        instaSans: ["Instagram Sans", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
