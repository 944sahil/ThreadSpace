/** @type {import('tailwindcss').Config} */

const theme = require("daisyui/src/theming/themes");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui'),],
  daisyui:{
    themes: ["light", "dark", {black: {
        ...theme["black"],
        primary: "rgb(29, 155, 240)",
        secondary: "rgb(24, 24, 24)",
      },
    },
  ],
  },
}