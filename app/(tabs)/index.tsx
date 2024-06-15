import { Image, StyleSheet, Platform, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home } from '@/components/Home';
import { Details } from '@/components/Details';

export default function HomeScreen() {

  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer independent={true} >

      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} />

        <Stack.Screen name='Details' component={Details} />

      </Stack.Navigator>

    </NavigationContainer>
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
