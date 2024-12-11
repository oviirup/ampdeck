import { TwConfig } from 'twrnc';

const config: TwConfig = {
  theme: {
    extend: {
      zIndex: Array.from('123456789').reduce((acc, e) => Object.assign(acc, { [e]: e }), {}),
      fontFamily: { inter: 'inter', roboto: 'roboto' },
    },
  },
  plugins: [],
};

export default config;
