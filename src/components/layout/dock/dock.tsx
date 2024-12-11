import { tw } from '@/components/utils';
import { Disc3Icon, FlameIcon, HomeIcon, PodcastIcon } from 'lucide-react-native';
import React from 'react';
import { Pressable, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const DOCK_HEIGHT = 100;

function Dock() {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={tw.style(`w-full flex-row items-center justify-between rounded-t-2xl bg-zinc-900 px-6`, {
        height: DOCK_HEIGHT,
        paddingBottom: insets.bottom,
        transform: `translateY(-${insets.bottom}px)`,
      })}>
      <Pressable style={tw`h-12 w-16 items-center justify-center`}>
        <HomeIcon size={20} strokeWidth={2} color={tw.color('white')} />
      </Pressable>
      <Pressable style={tw`h-12 w-16 items-center justify-center`}>
        <FlameIcon size={20} strokeWidth={2} color={tw.color('white')} />
      </Pressable>
      <Pressable style={tw`h-12 w-16 items-center justify-center`}>
        <PodcastIcon size={20} strokeWidth={2} color={tw.color('white')} />
      </Pressable>
      <Pressable style={tw`h-12 w-16 items-center justify-center`}>
        <Disc3Icon size={20} strokeWidth={2} color={tw.color('white')} />
      </Pressable>
    </View>
  );
}

Dock.height = DOCK_HEIGHT;

export { Dock };
