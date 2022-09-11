module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: theme => ({
        "screen/2": "50vh"
      }),
      colors: {
        'berry-deep': '#2E0249',
        'berry-mid': '#570A57',
        'berry-light': '#A91079',
        'berry-pink': '#F806CC'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
