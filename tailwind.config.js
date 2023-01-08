/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        koulen: ["Koulen", "cursive"],
        Osward: ["Oswald", "sans-serif"],
      },
      color: {
        gray: "#e2e8f0",
      },
      padding: {
        big: "50px",
        medium: "25px",
        small: "5px",
      },
      height: {
        normal: "80vh",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
