module.exports = {
  content: ['./pages/**/*.tsx', './components/**/*.tsx', './pages/*.tsx'],
  theme: {
    extend: {
      colors: {
        offWhite: '#F5F5F5',
        burgundy: '#800000',
        blue_grotto: '#0476D0',
        blurred_white: 'hsl(0 0% 100% / 0.1)',
      },
      fontFamily: {
        sans: ['Poppins'],
        serif: ['Playfair\\ Display'],
        mono: ['Inconsolata'],
      },
    },
  },
  plugins: [],
};
