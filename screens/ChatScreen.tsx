import React, { useLayoutEffect } from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { useAuthentication } from '../utils/hooks/useAuthentication';
import { Button } from 'react-native-elements';
import { getAuth, signOut } from 'firebase/auth';
import { NavigationRouteContext } from '@react-navigation/native';
import { NativeScreenNavigationContainer } from 'react-native-screens';

const auth = getAuth();

export default function ChatScreen() {
  const { user } = useAuthentication();
  
  
 
  return (
    <ImageBackground source={require('../static/wasabi-pattern-bg.jpg')} style={{width:'100%', height:'100%'}} >
    <View style={styles.container}>
      <Text style={{color:'transparent'}}>Welcome {user?.email}!</Text>

        <Button title="Sign Out" style={styles.button} onPress={() => signOut(auth)} />
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginTop: 10
  }
});
