/** @type {import('tailwindcss').Config} */

import tailwindcssAnimate from "tailwindcss-animate";

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
    },
  },
  plugins: [tailwindcssAnimate],
};