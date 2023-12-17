import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, Pressable } from 'react-native';
import styles, {colors} from './Styles';
import TopWave from '../components/TopWave'
import BottomWave from '../components/BottomWave'
import CustomText from '../components/CustomText'
import {useStorage} from '../hooks/useStorage'
import { CommonActions } from '@react-navigation/native';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [currentUser, setCurrentUser] = useStorage('DRACULA@current-user');

  const handleLogin = async () => {
    if (!username) return;
    await setCurrentUser(username);
    navigation.dispatch(CommonActions.reset({routes: [{ name: 'Profile'}]}))
  };

  const customStyles = StyleSheet.create({
      header: {
          flexDirection: "column",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          paddingTop: 20,
      },
      container: {
        position: "relative",
        backgroundColor: colors.white,
        height: "100%",
        width: "100%",
        color: colors.black,
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        paddingTop: 90,
        gap: 10
      },
      actions: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: 30,
          width: "75%"
      },
      title: {
          color: colors.black,
          fontWeight: "400",
          fontFamily: "Kalnia-Regular",
          fontSize: 40,
      },
      loginButton: {
          backgroundColor: colors.primary,
          width: "100%"
      }
  })

  return (
    <View style={styles.body}>
      <View style={styles.mainContainer}>
          <View style={customStyles.header}>
              <Text style={customStyles.title}>DRACULA</Text>
              <Image source={require('./../assets/logo.png')} style={styles.logo}/>
          </View>
          <View style={customStyles.container}>
          <TopWave/>
            <View style={customStyles.actions}>
              <CustomText style={{fontSize: 20, marginBottom: 20}}>Login</CustomText>
                <TextInput
                    style={styles.input}
                    placeholder="Username"
                    placeholderTextColor="gray"
                    value={username}
                    onChangeText={(text) => setUsername(text)}
                  />
                <Pressable style={{...styles.button, ...customStyles.loginButton}} onPress={handleLogin}>
                    <CustomText style={{color: "white"}}>Login</CustomText>
                </Pressable>
            </View>
            <BottomWave/>
          </View>
      </View>
    </View>
  );
};

export default LoginScreen;
