import './gesture-handler';
import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './screens/Main';
import VoiceCallPage from './screens/Calling';


const App = () => {
  const Stack = createStackNavigator();

  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={ Main } />
        <Stack.Screen name="Call" component={ VoiceCallPage } />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App;