import { Image, StyleSheet, Platform,Text ,SafeAreaView,Switch} from 'react-native';

import { ThemeContext } from '@/src/context/ThemeContext';
export default function HomeScreen() {
  return (
    <SafeAreaView>
     <Text>
      Hi App
     </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
