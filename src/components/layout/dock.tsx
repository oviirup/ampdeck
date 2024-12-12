import { tw } from '@/components/utils';
import { isFunction } from '@/lib/assertions';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { NavigationRoute, ParamListBase } from '@react-navigation/native';
import { CircleIcon } from 'lucide-react-native';
import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const DOCK_HEIGHT = 80;

function Dock({ state, descriptors, navigation }: BottomTabBarProps) {
  const insets = useSafeAreaInsets();

  type TabProps = {
    entry: NavigationRoute<ParamListBase, string>;
    index: number;
  };
  const Tab = ({ entry, index }: TabProps) => {
    const { options: opts } = descriptors[entry.key];
    const focused = state.index === index;
    const title = opts.title ?? entry.name;
    const icon = opts.tabBarIcon;
    const label = opts.tabBarLabel;
    const color = focused ? '#fff' : '#9292a0';
    const position = opts.tabBarLabelPosition ?? 'below-icon';

    const handleOnPress = () => {
      const event = navigation.emit({ type: 'tabPress', target: entry.key, canPreventDefault: true });
      if (!focused && !event.defaultPrevented) {
        navigation.navigate(entry.name, entry.params);
      }
    };

    return title === null ? null : (
      <Pressable
        onPress={handleOnPress}
        style={tw.style('flex flex-1 flex-col items-center justify-center gap-0.5 text-center')}>
        <View
          style={tw.style(
            'h-9 w-full flex-row items-center justify-center rounded-full',
            focused ? 'bg-input' : 'bg-card',
          )}>
          {isFunction(icon) ? (
            icon({ focused, color, size: 20 })
          ) : (
            <CircleIcon size={20} strokeWidth={focused ? 2 : 1.5} color={color} />
          )}
        </View>
        <Text style={tw.style('text-center text-xs', focused ? 'font-medium' : 'font-normal', { color })}>
          {isFunction(label) ? label({ focused, color, position, children: title }) : title}
        </Text>
      </Pressable>
    );
  };

  return (
    <View
      style={tw.style('w-full flex-row rounded-t-2xl bg-card', {
        paddingBottom: insets.bottom,
        transform: `translateY(${-insets.bottom}px)`,
      })}>
      <View style={tw.style(`flex-1 flex-row items-center justify-between gap-4 px-6`, { height: DOCK_HEIGHT })}>
        {state.routes.map((entry, index) => (
          <Tab key={entry.key} {...{ entry, index }} />
        ))}
      </View>
    </View>
  );
}

Dock.height = DOCK_HEIGHT;

export { Dock };
