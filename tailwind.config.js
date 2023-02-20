/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,vue,ts}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#BEDFF0",
          100: "#21A1E2",
        },
      },
    },
  },
  plugins: [],
};
