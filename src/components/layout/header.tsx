import { Button } from '@/components/core';
import { AppLogo } from '@/components/icons';
import { tw } from '@/components/utils';
import { ListMusicIcon, SearchIcon } from 'lucide-react-native';
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const HEADER_HEIGHT = 56;

function Header() {
  const insets = useSafeAreaInsets();
  return (
    <View style={tw.style('border-b border-zinc-800 bg-background', { paddingTop: insets.top })}>
      <View style={tw.style('flex-row items-center px-4', { height: HEADER_HEIGHT })}>
        <View style={tw`flex-row items-center gap-1`}>
          <AppLogo size={20} />
          <Text
            style={tw.style(`font-roboto text-base font-bold tracking-tight text-foreground`, {
              transform: `scaleY(1.1)`,
            })}>
            AmpDeck
          </Text>
        </View>
        <View style={tw`ml-auto flex-row gap-1`}>
          <Button size="base" style={tw`aspect-square rounded-full`}>
            <ListMusicIcon color={tw.color('white')} size={16} strokeWidth={2} />
          </Button>
          <Button size="base" style={tw`aspect-square rounded-full`}>
            <SearchIcon color={tw.color('white')} size={16} strokeWidth={2} />
          </Button>
        </View>
      </View>
    </View>
  );
}

Header.height = HEADER_HEIGHT;

export { Header };
