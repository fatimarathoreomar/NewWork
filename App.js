{/*import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

});*/}

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Login from './src/screens/Login';
import Signup from './src/screens/Signup'
import FreelancerProfile from './src/screens/FreelancerProfile'
import ForgotPassword from './src/screens/ForgotPassword';


import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
/* ... */
// Wrap your app with the new GestureHandler
 <GestureHandlerRootView style={{ flex: 1 }}>
</GestureHandlerRootView> 
const Stack = createStackNavigator(); 

 function App() {
  return (
   
     <Stack.Navigator screenOptions={{
       headerShown: false,
       animation: 'slide_from_right'}} >
       {/* <Stack.Screen name="Login" component={Login}/>
       <Stack.Screen name="Signup" component={Signup}/>  */}
       <Stack.Screen name="FreelancerProfile" component={FreelancerProfile}/>
        <Stack.Screen name="ForgotPassword" component={ForgotPassword}/> 
     </Stack.Navigator>
   
  );
}

export default () =>{
  return (
    <NavigationContainer>
      <App/>
    </NavigationContainer>
  )
}



