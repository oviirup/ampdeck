import { TwConfig } from 'twrnc';

const config: TwConfig = {
  theme: {
    extend: {
      zIndex: Array.from('123456789').reduce((acc, e) => Object.assign(acc, { [e]: e }), {}),
      colors: {
        background: '#09090b',
        foreground: '#fafafa',
        card: { DEFAULT: '#18181b', fg: '#fafafa' },
        popover: { DEFAULT: '#18181b', fg: '#fafafa' },
        primary: { DEFAULT: '#fafafa', fg: '#1c1b1d' },
        secondary: { DEFAULT: '#333338', fg: '#fafafa' },
        muted: { DEFAULT: '#323239', fg: '#9292a0' },
        accent: { DEFAULT: '#323239', fg: '#fafafa' },
        border: '#2c2c30',
        input: '#2f2f33',
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
