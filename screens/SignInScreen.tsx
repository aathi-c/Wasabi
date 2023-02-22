import React, { useEffect, useLayoutEffect } from 'react';
import { ImageBackground, StyleSheet, Text, View, Dimensions, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button, Header } from 'react-native-elements';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { BackgroundImage } from 'react-native-elements/dist/config';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";

const auth = getAuth();

const SignInScreen = () => {
  
  const [value, setValue] = React.useState({
    email: '',
    password: '',
    error: ''
  })

  async function signIn() {
    if (value.email === '' || value.password === '') {
      setValue({
        ...value,
        error: 'Email and password are mandatory.'
      })
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, value.email, value.password);
    } catch (error) {
      setValue({
        ...value,
        error: error.message,
      })
    }
  }

  
const backgroundImage = require('../static/BG4.jpg');
  return (


    
      <ImageBackground source={require('../static/BG.jpg')} style={{width:'100%', height:'100%'}} >

    <View style={styles.controls}>
    {!!value.error && <View style={styles.error}><Text style={styles.error}>{value.error}</Text></View>}
        <Input
          placeholder='Email'
          containerStyle={styles.control}
          value={value.email}
          onChangeText={(text) => setValue({ ...value, email: text })}
          style={styles.patch}
          leftIcon={<Icon
            name='envelope'
            size={16}
            color='white'
            
          />}
        />

        <Input
          placeholder='Password'
          containerStyle={styles.control}
          value={value.password}
          
          onChangeText={(text) => setValue({ ...value, password: text })}
          secureTextEntry={true}
          style={styles.patch}
          leftIcon={<Icon
            name='key'
            size={16}
            color='white'
          />}
        />
      
        <TouchableOpacity style={styles.button} onPress={signIn}>
          <Text style={styles.text}>Sign In</Text>
          
        </TouchableOpacity>

        
      </View>
    

      </ImageBackground>
    
          
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    
    alignItems: 'center',
    justifyContent: 'center',
  },

  controls: {
    flex: 1,
    width: responsiveWidth(20),
    alignItems: 'center',
    justifyContent: 'center',
    transform: [{translateX:responsiveWidth(40)}],
    color: 'white',
    
    

  },

  control: {
    marginTop: 10,
    backgroundColor:'transparent',
    color: 'white',
    fontSize: responsiveHeight(20)
  },

  text: {
    fontSize: responsiveHeight(2.3),
    fontWeight: 'bold',
    letterSpacing: responsiveWidth(0.09),
    color: 'white',
    justifyContent: 'center'
  },
  error: {
    marginTop: 10,
    padding: 10,
    color: '#2e856e',
    fontSize: responsiveWidth(1.5)
    
  },

  userImage: {
    width:50,
    height:50,
  },

  foregroundContainer: {
    width: Dimensions.get('window').width,
    height:140,
    flex:1,
    flexDirection:'row',
    
  },

  button: {
    width: responsiveWidth(20),
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: responsiveWidth(1),
    borderRadius: 25,
    backgroundColor: 'rgb(35, 43, 43)',
    flexDirection: 'row',
    paddingRight: responsiveWidth(3),
    paddingLeft: responsiveWidth(3),
    transform: [{translateY: responsiveHeight(2)}]
  },

  patch: {
    color: 'white'
  }
  
});

export default SignInScreen;