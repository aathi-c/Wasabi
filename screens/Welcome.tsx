import React, {useLayoutEffect} from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { Button } from 'react-native-elements';
import { ScrollLocky } from 'react-scroll-locky';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";

const WelcomeScreen: React.FC<StackScreenProps<any>> = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  })
  return (
    
      <ImageBackground 
        source={require('../static/IMG_0858.jpg')} style={{width:'100%', height:'100%'}} >
      
      <View style={styles.container}>
        <View style={styles.button1}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Sign In')}>
                <Text style={styles.text}>Sign In</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.button2}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Sign Up')}>
                <Text style={styles.text}>Sign Up</Text>
            </TouchableOpacity>
        </View>
        </View>
      

      </ImageBackground>
     
      
  );
}

const styles = StyleSheet.create({
  container: {
 flexDirection: 'row',
 alignItems: 'center',
 justifyContent: 'center',
 transform: [{translateY:responsiveHeight(80)}]
  },
  text: {
    fontSize: responsiveHeight(2.3),
    fontWeight: 'bold',
    letterSpacing: responsiveWidth(0.09),
    color: 'white',
  },
  button1: {
    paddingBottom: responsiveWidth(1.1),
    paddingRight: responsiveWidth(2),
   
   flexDirection: 'row'
  
    
  },
  button2: {
    paddingBottom: responsiveWidth(1.1),
    paddingRight: responsiveWidth(2),
   
   flexDirection: 'row'
  
    
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: responsiveWidth(1),
    borderRadius: 25,
    backgroundColor: 'rgb(35, 43, 43)',
    flexDirection: 'row',
    paddingRight: responsiveWidth(3),
    paddingLeft: responsiveWidth(3),
    
  }

});

export default WelcomeScreen;