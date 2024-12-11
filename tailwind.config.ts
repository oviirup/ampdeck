import { TwConfig } from 'twrnc';

const config: TwConfig = {
  theme: {
    extend: {
      zIndex: Array.from('123456789').reduce((acc, e) => Object.assign(acc, { [e]: e }), {}),
      colors: {
        background: '#09090b',
        foreground: '#fafafa',
        card: { DEFAULT: '#1a1b2b', fg: '#fafafa' },
        popover: { DEFAULT: '#1a1b2b', fg: '#fafafa' },
        primary: { DEFAULT: '#fafafa', fg: '#1c1b1d' },
        secondary: { DEFAULT: '#2e2e3e', fg: '#fafafa' },
        muted: { DEFAULT: '#2e2e3e', fg: '#9292a0' },
        accent: { DEFAULT: '#2e2e3e', fg: '#fafafa' },
        border: '#2e2e3e',
        input: '#2e2e3e',
      },
      fontFamily: {
        inter: 'inter',
        roboto: 'roboto',
      },
    },
  },
  plugins: [],
};

export default config;
