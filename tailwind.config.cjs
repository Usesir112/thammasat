/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx,html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#21A1E2",
          100: "#BEDFF0",
        },
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin", "flowbite/plugin")],
};
