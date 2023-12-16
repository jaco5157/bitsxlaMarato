import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, Pressable } from 'react-native';
import styles, {colors} from './Styles';
import CustomText from '../components/CustomText'

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
                </View>
            </View>
        </View>
    </View>
  );
};

export default HomeScreen;
