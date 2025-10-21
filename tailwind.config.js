/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.html",
    "./src/**/*.js",
    "./src/styles/**/*.css"
  ],
  theme: { extend: {
    colors: {
        'green-haze': '#009c46',
        'japanese-laurel': '#037c17',
        'green-vogue': '#012056',
        'black-squeeze': '#f2f9fa',
        'ocean-green': '#43a680',
        'ship-cove': '#8098bb',
        'black-pearl': '#030519',
      },


  } },
  plugins: [],
}

