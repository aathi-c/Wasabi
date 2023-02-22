import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import WelcomeScreen from '../screens/Welcome';
import SignInScreen from '../screens/SignInScreen';
import SignOutScreen from '../screens/SignUpScreen';
import { BackgroundImage } from 'react-native-elements/dist/config';
import { Image, ImageBackground, Text, View } from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";

const Stack = createStackNavigator();


export default function AuthStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={WelcomeScreen}/>
        <Stack.Screen name='Sign In' component={SignInScreen} options={{headerTintColor:"white", headerTransparent: 'true'}} />
        <Stack.Screen name="Sign Up" component={SignOutScreen} options={{headerTintColor:"white",headerTransparent: 'true'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
