import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, Pressable } from 'react-native';
import styles, {colors} from './Styles';
import TopWave from '../components/TopWave'
import CustomText from '../components/CustomText'
import Svg, {Path} from 'react-native-svg'


const ProfileScreen = ({navigation, route}) => {
  const handleClick = () => {
      navigation.navigate('Question1');
  };

  const customStyles = StyleSheet.create({
        header: {
            flexDirection: "row",
            alignItems: "center",
            display: "flex",
            justifyContent: "space-between",
            paddingLeft: 10,
            paddingTop: 5,
            width: "100%"
        },
        headerLeft: {
            flexDirection: "row",
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            gap: 20
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
            <View style={customStyles.header}>
              <View style={customStyles.headerLeft}>
                  <Svg height="16" width="14" viewBox="0 0 448 512">
                      <Path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
                  </Svg>
                <Image source={require('./../assets/logo.png')} style={{...styles.logo, width: 40, height: 40}}/>
              </View>
            </View>
            <View style={customStyles.container}>
              <TopWave/>
              <View style={customStyles.actions}>
                  <View>
                      <CustomText style={{textAlign: "center"}}>Hey <CustomText style={styles.highlight}>Paola</CustomText>!</CustomText>
                      <CustomText style={{fontFamily: "FiraSans-Light", textAlign: "center"}}>Ready to get to know your cycle better?</CustomText>
                  </View>
                  <Pressable style={{...styles.button, backgroundColor: colors.primary, width: "100%", paddingTop: 25, paddingBottom: 25}} onPress={handleClick}>
                    <CustomText style={{color: colors.white}}>My period has started</CustomText>
                  </Pressable>
                  <View  style={{marginTop: 50}}>
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
