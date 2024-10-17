/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  	'./themes/**/*.html',
  	'./templates/**/*.html',
  	'./post/**/*.html'
  ],
  theme: {
    extend: {},
  },
  plugins: [
  	require('daisyui')
  ],
  daisyui: {
    themes: ["light", "dark", "synthwave"],
  },
}

