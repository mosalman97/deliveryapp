import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

// screens
import WelcomeScreen from '../screens/welcome/WelcomeScreen';
import SplashScreen from '../screens/SplashScreen';

// packages
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        {/* <Stack.Screen name="SplashScreen" component={SplashScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
