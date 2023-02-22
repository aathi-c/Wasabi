import React from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button } from 'react-native-elements';
import { StackScreenProps } from '@react-navigation/stack';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
const auth = getAuth();

const SignUpScreen: React.FC<StackScreenProps<any>> = ({ navigation }) => {
  const [value, setValue] = React.useState({
    email: '',
    password: '',
    error: ''
  })

  async function signUp() {
    if (value.email === '' || value.password === '') {
      setValue({
        ...value,
        error: 'Email and password are mandatory.'
      })
      return;
    }
  
    try {
      await createUserWithEmailAndPassword(auth, value.email, value.password);
      navigation.navigate('Sign In');
    } catch (error) {
      setValue({
        ...value,
        error: error.message,
      })
    }
  }


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
            color="white"
          />}
        />

        <TouchableOpacity style={styles.button} onPress={signUp}>
          <Text style={styles.text}>Sign Up</Text>
          
        </TouchableOpacity>
        
        
         
      </View>
    
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  controls: {
    flex: 1,
    width: responsiveWidth(20),
    alignItems: 'center',
    justifyContent: 'center',
    transform: [{translateX:responsiveWidth(40)}]
  },

  control: {
    marginTop: 10,
    tintColor: 'black'
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
    transform: [{translateY: responsiveHeight(3)}]
  },

  patch: {
    color: 'white'
  }
});

export default SignUpScreen;