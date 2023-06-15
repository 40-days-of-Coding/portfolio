/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      container: {
        screens: {
          xs: "475px",
          ...defaultTheme.screens,
        },
      },
      gridTemplateColumns: {
        md: "auto auto",
        lg: "minmax(15rem, 1fr) minmax(15rem, 1fr) minmax(15rem,1fr)",
      },
    },
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
    container: {
      center: true,
      padding: "0.5rem",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#000",
      darkVariant: "#404040",
      bgColor: "#222438",
      bgcolorVariant: "#44476f",
      primary: "#cecece",
      primaryVariant: "#737373",
      secondary: "#f54854",
      secondaryVariant: "#da0b19",
    },
  },
  plugins: [],
};
