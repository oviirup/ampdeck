const createPlugin = require('tailwindcss/plugin');

const utilities = createPlugin(({ addUtilities }) => {
  addUtilities({
    '.flex-center': {
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
});

/** @type {import('twrnc').TwConfig} */
module.exports = {
  theme: {
    extend: {
      zIndex: Array.from('123456789').reduce((acc, e) => Object.assign(acc, { [e]: e }), {}),
      fontFamily: { inter: 'Inter' },
    },
  },
  plugins: [utilities],
};
