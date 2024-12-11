import { Dock } from '@/components/layout/dock';
import { Header } from '@/components/layout/header';
import { tw } from '@/components/utils';
import { Stack, Tabs } from 'expo-router';

export default function TabsLayout() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <Tabs
        screenOptions={{
          header: () => <Header />,
          sceneStyle: { backgroundColor: tw.color('background') },
        }}
        tabBar={() => <Dock />}
      />
    </>
  );
}
