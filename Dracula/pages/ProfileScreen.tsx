import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, Pressable, TouchableWithoutFeedback } from 'react-native';
import styles, {colors} from './Styles';
import TopWave from '../components/TopWave'
import CustomText from '../components/CustomText'
import Svg, {Path} from 'react-native-svg'
import {useStorage} from '../hooks/useStorage'
import { CommonActions } from '@react-navigation/native';
import Header from '../components/Header'


const ProfileScreen = ({navigation, route}) => {
  const [currentUser] = useStorage('DRACULA@current-user', '')
  const [cycles, setCycles, refreshCycles] = useStorage('DRACULA@cycles', {})

    const currentUserLC = currentUser.toLowerCase();
    let userCycles = cycles[currentUserLC] || []
    let lastCycle = userCycles.length > 0 ? userCycles[userCycles.length-1] : []

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => refreshCycles());
        return unsubscribe;
      }, [navigation]);

    useEffect(() => {
        userCycles = cycles[currentUserLC] || []
        lastCycle = userCycles.length > 0 ? userCycles[userCycles.length-1] : []
    }, [cycles]);


  const handleClick = () => {
      navigation.navigate('Question1');
  };

  const endCycle = () => {
    userCycles[userCycles.length-1].push(new Date().toLocaleDateString('en-CA'))
    cycles[currentUserLC] = userCycles;
    setCycles(cycles)
    navigation.navigate("Question1")
  }

  const customStyles = StyleSheet.create({
        container: {
          position: "relative",
          backgroundColor: colors.white,
          height: "100%",
          width: "100%",
          color: colors.black,
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          paddingTop: 90
        },
        actions: {
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            width: "75%",
            flexGrow: 1,
            gap: 30
        }
      })

    return (
      <View style={styles.body}>
        <View style={styles.mainContainer}>
            <Header/>
            <View style={customStyles.container}>
              <TopWave/>
              <View style={customStyles.actions}>

                  {lastCycle.length === 1 ? (
                    <>
                        <View>
                          <CustomText style={{textAlign: "center"}}>Hey <CustomText style={styles.highlight}>{currentUser}</CustomText>!</CustomText>
                          <CustomText style={{fontFamily: "FiraSans-Light", textAlign: "center"}}>Your cycle has started last <CustomText>{new Date(lastCycle[0]).toDateString()}</CustomText></CustomText>
                      </View>
                      <Pressable style={{...styles.button, backgroundColor: colors.primary, width: "100%", paddingTop: 25, paddingBottom: 25}} onPress={() => endCycle()}>
                          <CustomText style={{color: colors.white}}>Add a sanitory product used</CustomText>
                        </Pressable>
                      <Pressable style={{...styles.button, backgroundColor: colors.white, borderColor: colors.primary, borderWidth: 3, width: "100%"}} onPress={() => endCycle()}>
                        <CustomText style={{color: colors.primary}}>My cycle has now ended</CustomText>
                      </Pressable>
                    </>
                  ) : (
                  <>
                        <View>
                          <CustomText style={{textAlign: "center"}}>Hey <CustomText style={styles.highlight}>{currentUser}</CustomText>!</CustomText>
                          <CustomText style={{fontFamily: "FiraSans-Light", textAlign: "center"}}>Ready to get to know your cycle better?</CustomText>
                      </View>
                        <Pressable style={{...styles.button, backgroundColor: colors.primary, width: "100%", paddingTop: 25, paddingBottom: 25}} onPress={() => navigation.navigate("Calendar")}>
                          <CustomText style={{color: colors.white}}>My cycle has started</CustomText>
                        </Pressable>
                    </>
                  )}

                  <View  style={{marginTop: 30}}>
                      <CustomText style={{fontFamily: "FiraSans-Light", textAlign: "center"}}>Did you know?</CustomText>
                      <CustomText style={{textAlign: "center"}}>Your menstrual cycle is a window into your <CustomText style={styles.highlight}>overall health</CustomText>.</CustomText>
                  </View>
                  <Pressable style={{...styles.button, backgroundColor: colors.black, width: "100%"}} onPress={handleClick}>
                    <CustomText style={{color: colors.white}}>Review your cycle history</CustomText>
                  </Pressable>
              </View>
            </View>
        </View>
      </View>
    );
};

export default ProfileScreen;
