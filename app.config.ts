import { ExpoConfig } from 'expo/config';
import { version } from './package.json';

const APP = {
  name: 'Melancholy',
  id: 'melancholy',
  package: 'com.oviirup.melancholy',
  version: version,
};

const expoPluginsObject = {
  'expo-router': true,
  'expo-font': {
    fonts: ['./assets/fonts/inter.ttf', './assets/fonts/roboto.ttf'],
  },
  'expo-splash-screen': {
    image: './assets/app/splash.png',
    imageWidth: 1200,
    resizeMode: 'contain',
    backgroundColor: '#09090b',
  },
};

const config: ExpoConfig = {
  name: APP.name,
  scheme: APP.id,
  slug: APP.id,
  version: APP.version,
  orientation: 'portrait',
  newArchEnabled: true,
  splash: {
    image: './assets/app/splash.png',
    imageWidth: 1200,
    resizeMode: 'contain',
    backgroundColor: '#09090b',
  },
  // only build for ios & android
  platforms: ['android', 'ios'],
  // ios config
  ios: {
    icon: './assets/app/icon.ios.png',
    supportsTablet: true,
  },
  // android config
  android: {
    icon: './assets/app/icon.ios.png',
    adaptiveIcon: {
      foregroundImage: './assets/app/icon.and.png',
      backgroundColor: '#09090b',
    },
  },

  plugins: Object.entries(expoPluginsObject).map(([pkg, options]) => {
    return typeof options === 'boolean' && options ? pkg : [pkg, options];
  }),

  experiments: {
    typedRoutes: true,
    reactCanary: true,
  },
};

export default config;
