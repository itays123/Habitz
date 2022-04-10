const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: colors.purple,
      secondary: colors.fuchsia,
      accent: colors.teal,
      base: colors.slate,
    },
    fontFamily: {
      sans: ['"Lato"', ...defaultTheme.fontFamily.sans],
      title: ['"Fredoka One"', ...defaultTheme.fontFamily.sans],
    },
    extend: {},
  },
  plugins: [],
};
