/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        gradientShift: {
          "0%, 100%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
        },
        flip: {
          "0%": { transform: "rotateX(0deg)" },
          "50%": { transform: "rotateX(90deg)" },
          "100%": { transform: "rotateX(0deg)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 2s forwards",
        pulse: "pulse 1s infinite",
        gradientShift: "gradientShift 5s ease infinite",
        flip: "flip 0.5s ease",
      },
      backgroundImage: {
        "gradient-blue-purple": "linear-gradient(270deg, #1e3a8a, #4c1d95)", // Gradiente azul e roxo
      },
      boxShadow: {
        neon: "0 0 15px rgba(255, 0, 90, 0.8), 0 0 30px rgba(255, 0, 90, 0.6)",
      },
      backgroundColor: {
        "rose-950": "#1c0c1d",
        "rose-900": "#2a041b",
      },
      transitionProperty: {
        height: "height",
      },
    },
  },
  plugins: [],
};
