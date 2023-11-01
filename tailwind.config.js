/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      blue: "#1fb6ff",
      purple: "#741CA6",
      "purple-bg": "rgba(116, 28, 166, 0.20)",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      yellow: "#ffc82c",
      "gray-dark": "#273444",
      gray: "#8492a6",
      // gray-card: "#F6F8FA"
      "gray-light": "#d3dce6",
      white: "#fff",
      black: "#000",
      pinker: "#DDA8FC",
    },
    fontFamily: {
      "Space-Grotesk": ["Space Grotesk", "sans-serif"],
    },
    extend: {
      dropShadow: {
        "3xl": "0 35px 35px rgba(0, 0, 0, 0.25)",
        "4xl": [
          "0 35px 35px rgba(0, 0, 0, 0.25)",
          "0 45px 65px rgba(0, 0, 0, 0.15)",
        ],
        "5xl": ["0 105px 105px rgba(0, 0, 0, 0.25)"],
      },
    },
  },
  plugins: [],
};
