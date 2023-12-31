import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, Pressable } from 'react-native';
import styles, {colors} from './Styles';
import TopWave from '../components/TopWave'
import BottomWave from '../components/BottomWave'
import CustomText from '../components/CustomText'
import {useStorage} from '../hooks/useStorage'
import { CommonActions } from '@react-navigation/native';

const QuestionResultScreen = ({ navigation }) => {
  const [currentUser, setCurrentUser] = useStorage('DRACULA@current-user', '');
  const [cycles, setCycles, refreshCycles] = useStorage('DRACULA@cycles', {})
  const [answersQuestions] = useStorage('DRACULA@answers-questions', {})
  const currentUserLC = currentUser.toLowerCase();

  let userCycles = cycles[currentUserLC] || []
  let lastCycle = userCycles.length > 0 ? userCycles[userCycles.length-1] : []

  let lastAnswers = answersQuestions[currentUserLC]?.length > 0 ? answersQuestions[currentUserLC][answersQuestions[currentUserLC].length-1]: null;

  let score = 0;

  if (lastAnswers) {
    if (lastAnswers[0]) score += 3;
    if (lastAnswers[1]) score += 1;
    if (lastAnswers[2]) score += 3;
    if (lastAnswers[3]) score += 1;
    if (lastAnswers[4]) score += 1;
    if (lastAnswers[5]) score += 1;
  }

  const handleClick = async () => {
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
          gap: 20,
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
              <Text style={customStyles.title}>Results</Text>
              <Image source={require('./../assets/logo.png')} style={styles.logo}/>
          </View>
          <View style={customStyles.container}>
            <TopWave/>
            <View style={customStyles.actions}>
                <CustomText style={{fontSize: 20}}>Your period lasted from</CustomText>
                <Text style={customStyles.title}>{lastCycle[0]}</Text>
                <CustomText style={{fontSize: 20}}>To</CustomText>
                <Text style={customStyles.title}>{lastCycle[lastCycle.length-1]}</Text>

                <CustomText style={{fontSize: 20}}>You got {score} point(s)</CustomText>
                { score > 3 ? (
                    <CustomText style={{fontSize: 20}}>This might indicate that you have heavy menstrual bleeding.</CustomText>
                ) : (
                    <CustomText style={{fontSize: 20}}>This is a very healthy result!</CustomText>
                )}
                <Pressable style={{...styles.button, ...customStyles.loginButton}} onPress={handleClick}>
                    <CustomText style={{color: "white"}}>Back to profile</CustomText>
                </Pressable>
            </View>
            <BottomWave/>
          </View>
      </View>
    </View>
  );
};

export default QuestionResultScreen;
