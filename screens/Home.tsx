import React, { useLayoutEffect, useRef } from 'react';
import { Image, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useAuthentication } from '../utils/hooks/useAuthentication';
import { Button } from 'react-native-elements';
import { getAuth, signOut } from 'firebase/auth';
import { NavigationContainer, NavigationRouteContext, useNavigation } from '@react-navigation/native';
import { NativeScreenNavigationContainer } from 'react-native-screens';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions"; 
import {AntDesign, Entypo, Ionicons} from "@expo/vector-icons";
import Swiper from "react-native-deck-swiper";
import { renderNode } from 'react-native-elements/dist/helpers';


const auth = getAuth();

export default function HomeScreen() {
  const { user } = useAuthentication();
  const navigation = useNavigation();
  const swipeRef = useRef(null);
 
  return (
  
    <ImageBackground source={require('../static/BG.jpg')} style={styles.image} >
    

    <View style={styles.moveLogo}>
        <TouchableOpacity  onPress={() => {navigation.navigate("Chat")}}>
          <Ionicons name="chatbubbles-sharp" size={responsiveWidth(3.5)} color="white"/>
        </TouchableOpacity>
    </View>

    <View>
      <TouchableOpacity >
        <Image source={require('../static/BG.jpg')} style={styles.logo}></Image>
      </TouchableOpacity>
    </View>

    

    {/* Buttons */}
    <View>
        <TouchableOpacity style={styles.like}>
          <Entypo name="cross" size={responsiveWidth(6)} color='white'></Entypo>
        </TouchableOpacity>

        <TouchableOpacity style={styles.dislike}>
            <Entypo name="check" size={responsiveWidth(5)} color='white'></Entypo>
        </TouchableOpacity>
        </View>

    {/* Sign Out */}
    
    <View>
        <TouchableOpacity style={styles.button} onPress={() => signOut(auth)}>
          <Text  style={styles.text}> Sign Out</Text>
        </TouchableOpacity> 
    </View>
    </ImageBackground> 
    
    
  ); 
}

const styles = StyleSheet.create({
  text: {
    fontSize: responsiveHeight(2.3),
    fontWeight: 'bold',
    letterSpacing: responsiveWidth(0.09),
    color: 'white',
    justifyContent: 'center'
  },

  button: {
    flex:1,
    width: responsiveWidth(10),
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: responsiveWidth(0.5),
    borderRadius: responsiveWidth(2),
    backgroundColor: 'rgb(35, 43, 43)',
    flexDirection: 'row',
    
    transform: [{translateY: responsiveHeight(75)}, {translateX: responsiveWidth(88)}],
    
  },

  moveLogo: {
   justifyContent: 'flex-end',
   alignContent: 'flex-end',
   textAlign: 'right',
   paddingRight: responsiveWidth(3),
   paddingTop: responsiveHeight(2)

    
  },

  logo: {
    
    width: responsiveWidth(15),
    height: responsiveHeight(6),
    transform: [{translateX: responsiveWidth(45)}, {translateY: responsiveHeight(-10)}],
    
  },

  like: {
    
    alignItems: 'center',
    justifyContent: 'center',
    width: 16,
    height: 16,
    transform: [{translateX:responsiveWidth(44)},{translateY:responsiveHeight(75)}],
    paddingleft: responsiveWidth(4),
    paddingRight: responsiveWidth(4),
    
  },

  dislike: {
    
    alignItems: 'center',
    justifyContent: 'center',
    width: 16,
    height: 16,
    transform: [{translateX:responsiveWidth(57)},{translateY:responsiveHeight(72.5)}],
    
  },

  

  render: {
    
    backgroundColor: 'rgb(35, 43, 43)',
    height: responsiveHeight(63),
    width: responsiveWidth(25),
    borderRadius: responsiveWidth(2),
    color: 'white',
    transform: [{translateX:responsiveWidth(15)}]
    
    
  },

  pic: {
  flex:1,
  height: responsiveHeight(50),
  width: responsiveWidth(25),
  borderRadius: responsiveWidth(2),
  
  },

  cards: {
    backgroundColor: 'black',
    
  },

 textCardHeader: {
  fontSize: responsiveHeight(2.3),
  fontWeight: 'bold',
  letterSpacing: responsiveWidth(0.09),
  color: 'white',
  justifyContent: 'center',
  paddingLeft: responsiveWidth(1),
  
  
 },

 textCardHeaderAge: {
  
  fontSize: responsiveHeight(2.3),
  fontWeight: 'bold',
  letterSpacing: responsiveWidth(0.09),
  color: 'white',
  
  transform:[{translateX: responsiveWidth(22)},{translateY: responsiveHeight(-2.7)}]
  
  
 },

 textCardSub: {
  fontSize: responsiveHeight(2),
  letterSpacing: responsiveWidth(0.09),
  color: 'white',
  justifyContent: 'center',
  paddingLeft: responsiveWidth(1),
  transform:[{translateY: responsiveHeight(-2)}]
 },

 image: {
   width: responsiveWidth(100),
   height: responsiveHeight(100),
  
 }



});


//Grab user's email to customize page, 
// <Text style={{color:'transparent'}}>Welcome {user?.email}!</Text>
