import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Index from './Index';
import Home from './src/Home';
import Signup from './src/Signup';
import Login from './src/Login';
import ScheduleDetails from './src/ScheduleDetails';
import NoticeBody from './src/NoticeBody';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Index" component={Index} />
        <Stack.Screen name="ScheduleDetails" component={ScheduleDetails} />
        <Stack.Screen name="NoticeBody" component={NoticeBody} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
