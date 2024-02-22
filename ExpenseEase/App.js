
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer,DefaultTheme} from '@react-navigation/native'

import Home from './screens/Home'
const theme = {
  ...DefaultTheme,
  color: {
    ...DefaultTheme.colors,
    border:"transparent"

  }

}

const Stack = createStackNavigator()


export default function App() {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
      screenOptions={{
        headerShown: false,

      }}
      initialRouteName={'Home'}
      >
        <Stack.Screen name="Home" component={Home}/>

      </Stack.Navigator>

    </NavigationContainer>
  );
}


