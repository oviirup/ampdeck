import { tw } from '@/components/utils';
import { useFonts } from 'expo-font';
import * as NavigationBar from 'expo-navigation-bar';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();
SplashScreen.setOptions({ duration: 500, fade: true });

export default function RootLayout() {
  const [loaded] = useFonts({
    inter: require('@/assets/fonts/inter.ttf'),
    roboto: require('@/assets/fonts/roboto.ttf'),
  });

  React.useEffect(() => {
    if (!loaded) return;

    (async () => {
      await NavigationBar.setBackgroundColorAsync('#0000');
      await NavigationBar.setPositionAsync('absolute');
      await SplashScreen.hideAsync();
    })();
  }, [loaded]);

  return !loaded ? null : (
    <>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: tw.color('background') },
          headerTitleStyle: { color: tw.color('foreground') },
          contentStyle: { backgroundColor: tw.color('background'), marginBottom: -15 },
        }}
      />
      <StatusBar style="light" />
    </>
  );
}
