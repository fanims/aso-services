/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'as-',
  content: [
    "*"
  ],
  theme: {
    extend: {
      colors: {
        'white': '#ffffff',
        'black': '#000000',
        'text-color': '#8492A7',
        'text-light': '#D2EBFF',
        'theme-color': '#008AFF',
        'header-color': '#222D39',
        'border-color': '#DEE7EE',
        'background-color': '#F7F9FC',
      },
      fontFamily: {
        'body-font': ["Hanken Grotesk", "sans-serif"],
        'heading-font': ["Hanken Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
}

