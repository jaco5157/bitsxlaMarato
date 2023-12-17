import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, Pressable } from 'react-native';
import styles, {colors} from './Styles';
import CustomText from '../components/CustomText'
import {clearStorage} from '../hooks/useStorage'

const customStyles = StyleSheet.create({
    container: {
        flexDirection: "column",
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        height: "90%",
    },
    actions: {
        display: "flex",
        flexDirection: "row",
        gap: 20,
        marginTop: 30
    },
    title: {
        color: colors.black,
        fontFamily: "Kalnia-Regular",
        fontSize: 40,
    },
    loginButton: {
        backgroundColor: colors.white,
        width: "35%"
    },
    registerButton: {
        borderWidth: 3,
        borderColor: colors.white,
        width: "35%"
    }
})

const HomeScreen = ({navigation}) => {
    const [reset, setReset] = useState(false)

    const clear = () => {
        clearStorage()
        setReset(true)
    }

  return (
    <View style={styles.body}>
        <View style={styles.mainContainer}>
            <View style={customStyles.container}>
                <Text style={customStyles.title}>DRACULA</Text>
                <Image source={require('./../assets/logo.png')} style={styles.logo}/>
                <View style={customStyles.actions}>
                    <Pressable style={{...styles.button, ...customStyles.loginButton}} onPress={() =>navigation.navigate('Login')}>
                        <CustomText style={{color: colors.black, fontFamily: "FiraSans-Medium"}}>LOGIN</CustomText>
                    </Pressable>
                    <Pressable style={{...styles.button, ...customStyles.registerButton}} onPress={() =>navigation.navigate('Create')}>
                        <CustomText style={{color: colors.white, fontFamily: "FiraSans-Medium"}}>REGISTER</CustomText>
                    </Pressable>
                    {/*
                    <Pressable style={{...styles.button, ...customStyles.registerButton}} onPress={() =>navigation.navigate('PBACOneScreen')}>
                        <CustomText style={{color: colors.white, fontFamily: "FiraSans-Medium"}}>TEST</CustomText>
                    </Pressable>*/}
                </View>
                {reset ? (<></>) : (
                    <Pressable style={{...styles.button, ...customStyles.registerButton, width: 150, marginTop: 10}} onPress={() => clear()}>
                        <CustomText style={{color: colors.white, fontFamily: "FiraSans-Medium"}}>RESET</CustomText>
                    </Pressable>
                )}

            </View>
        </View>
    </View>
  );
};

export default HomeScreen;
