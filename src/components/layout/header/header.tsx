import { AppLogo } from '@/components/icons';
import { tw } from '@/components/utils';
import { ListMusicIcon, SearchIcon } from 'lucide-react-native';
import { Pressable, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const HEADER_HEIGHT = 90;

function Header() {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={tw.style(`flex-row items-center border-b border-zinc-800 bg-background px-6`, {
        height: HEADER_HEIGHT,
        paddingTop: insets.top,
      })}>
      <View style={tw`flex-row items-center gap-2`}>
        <AppLogo size={24} />
        <Text
          style={tw.style(`font-roboto text-base font-bold tracking-tight text-foreground`, {
            transform: `scaleY(1.1)`,
          })}>
          Melancholy
        </Text>
      </View>
      <View style={tw`ml-auto flex-row gap-1`}>
        <Pressable style={tw`aspect-square size-10 items-center justify-center rounded-full`}>
          <ListMusicIcon color={tw.color('white')} size={16} strokeWidth={2.5} />
        </Pressable>
        <Pressable style={tw`aspect-square size-10 items-center justify-center rounded-full`}>
          <SearchIcon color={tw.color('white')} size={16} strokeWidth={2.5} />
        </Pressable>
      </View>
    </View>
  );
}

Header.height = HEADER_HEIGHT;

export { Header };
