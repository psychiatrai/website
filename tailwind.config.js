/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    colors: {
      current: "currentColor",
      transparent: "transparent",
      white: "#FFFFFF",
      black: "#090E34",
      dark: "#1D2144",
      // Primary brand colors
      primary: "#5D63AA",
      "primary-light": "#9999FF",
      "primary-lighter": "#D1D1F8",
      // Secondary brand colors
      secondary: "#B2CAAC",
      "secondary-light": "#D8F0D4",
      "secondary-lighter": "#EDF5EB",
      // Dark mode green variants
      "green-dark": "#2D4A3A",
      "green-dark-light": "#3A5A47",
      "green-dark-lighter": "#4A6B55",
      // Accent colors
      accent: "#FBB040",
      "body-color": "#6B7280",
      "body-color-light": "#9CA3AF",
    },
    screens: {
      xs: "450px",
      // => @media (min-width: 450px) { ... }

      sm: "575px",
      // => @media (min-width: 576px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "992px",
      // => @media (min-width: 992px) { ... }

      xl: "1200px",
      // => @media (min-width: 1200px) { ... }

      "2xl": "1400px",
      // => @media (min-width: 1400px) { ... }
    },
    extend: {
      boxShadow: {
        signUp: "0px 5px 10px rgba(4, 10, 34, 0.2)",
        one: "0px 2px 3px rgba(7, 7, 77, 0.05)",
        sticky: "inset 0 -1px 0 0 rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
