const { join } = require('path');

const tailwindJS = join(__dirname, 'tailwind.js');

/* eslint-disable */
module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss')(tailwindJS),
    require('autoprefixer'),
  ],
};
