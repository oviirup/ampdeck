import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();
SplashScreen.setOptions({ duration: 500, fade: true });

export default function RootLayout() {
  const [loaded] = useFonts({
    Inter: require('@/assets/fonts/inter.ttf'),
  });

  React.useEffect(() => {
    if (loaded) SplashScreen.hideAsync();
  }, [loaded]);

  return !loaded ? null : (
    <>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: '#131314' },
          headerTitleStyle: { color: '#f9fafb' },
          contentStyle: { backgroundColor: '#09090b' },
        }}
      ></Stack>
      <StatusBar style="light" />
    </>
  );
}
