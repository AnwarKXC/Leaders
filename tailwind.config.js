/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "src/*.html" ],
  theme: {
    extend: {
      colors: {
        primary: "#9F1916",
        secondary:"#09483F"
      },
      screens: {
        // => @media (max-width: 1535px) { ... }
        "max-3xl": { max: "1535px" },
        "max-2xl": { max: "1279px" },
        "max-xl": { max: "1150px" },
        "max-lg": { max: "1023px" },
        "max-md": { max: "767px" },
        "max-sm": { max: "639px" },
        "max-xs": {max : "450px"},
        "max-xxs": {max : "340px"},
      },
    },
    container: {
      center: true,
      padding:'1rem'
    },
  },
  plugins: [ 'prettier-plugin-tailwindcss' ],
}

