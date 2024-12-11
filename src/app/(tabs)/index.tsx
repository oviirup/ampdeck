import { tw } from '@/components/utils';
import { Text, View } from 'react-native';

export default function HomePage() {
  return (
    <View>
      <Text style={tw`text-foreground`}>Hello world</Text>
    </View>
  );
}
