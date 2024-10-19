/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './themes/**/*.html',
    'static/js/**/*.js',
    './templates/**/*.html',
    './post/**/*.html'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require('daisyui'),
  ],
  daisyui: {
    themes: ["light", "dark", "synthwave"],
    darkTheme: "synthwave"
  },
}

