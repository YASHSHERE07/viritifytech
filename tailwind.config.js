/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],

        "permanent-marker": ['"Permanent Marker"', "cursive"],
        "protest-riot": [' "Protest Riot"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
