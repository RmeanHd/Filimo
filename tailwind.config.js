/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.{html,js}", "./*.json"],
  theme: {
    screens: {
      mobile: "340px",
      // => @media (min-width: 640px) { ... }
      mobileM: "375px",
      mobileL: "680px",
      tablet: "770px",
      laptop: "1110px",
      desktop: "1440px",
      // => @media (min-width: 1024px) { ... }
    },
    extend: {
      transitionProperty: {
        'height': 'height',
        'display': 'block',
      },
      backgroundImage: {
        header:
          "url('https://www.golestan.com/wp-content/uploads/2023/01/header-back-1.png')",
          recipe:
          "url('./public/images/recipe-baner-1.png')",
      },
    },
  },
  plugins: [require('daisyui'),],
  daisyui:{
    darktheme:"light",
  },
}

