import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, Pressable } from 'react-native';
import styles, {colors} from './Styles';
import TopWave from '../components/TopWave'
import CustomText from '../components/CustomText'
import Svg, {Path} from 'react-native-svg'

const PBACResultsScreen = ({ route, navigation }) => {
    const { pbacAnswers, cumulativeScore } = route.params;

  useEffect(() => {
    // This effect runs whenever 'answer' changes
    console.log('Answers:', pbacAnswers, 'Cumulative score:', cumulativeScore);
  }, [pbacAnswers, cumulativeScore]);

// //////////// CHANGE FROM HERE


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
                    <Text style={customStyles.title}> Product: pbacAnswers(0) </Text>
                    <Text style={customStyles.title}> Amount of blood: pbacAnswers(1) </Text>
                    <Text style={customStyles.title}> Presence of blood clots: pbacAnswers(2)  </Text>
                    <Text style={customStyles.title}> Flooding: pbacAnswers(3) </Text>
                    <Text style={customStyles.title}> Cumulative score: cumulativeScore </Text>
                    <Pressable style={{...styles.button, ...customStyles.loginButton}} onPress={() =>navigation.navigate('HomeScreen')}>
                        <CustomText style={{color: colors.black, fontFamily: "FiraSans-Medium"}}> RETURN TO HOMEPAGE </CustomText>
                    </Pressable>
                </View>
            </View>
        </View>
    </View>
  );
};

export default PBACResultsScreen;
