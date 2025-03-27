/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./common/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./app.vue",
    "./widgets/**/*.vue",
    "./entities/**/*.vue",
  ],
  theme: {
    extend: {
      colors: {
        primaryBlack: "#101010",
        secondaryBlack: "#232323",
        primaryGray: "#868686",
        secondaryGray: "#F3F3F3",
        primaryWhite: "#FFFFFF",
        primaryGreen: "#9EFFBF",
        primaryPurple: "#7941A7",
        secondaryPurple: "#E2BEFF",
        primaryBlue: "#1059C8",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".regular-text": {
          "@apply text-base text-primaryBlack": {},
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
