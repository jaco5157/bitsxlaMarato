import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Svg, {Path} from 'react-native-svg'
import { View, Text, TextInput, Button, StyleSheet, Image, Pressable, TouchableWithoutFeedback, Animated } from 'react-native';
import styles, {colors} from '../pages/Styles'

const style = {
    position: "absolute",
    top: 0
}

const customStyles = StyleSheet.create({
      header: {
          flexDirection: "row",
          alignItems: "center",
          display: "flex",
          justifyContent: "space-between",
          paddingLeft: 10,
          paddingRight: 10,
          paddingTop: 5,
          width: "100%"
      },
      headerLeft: {
          flexDirection: "row",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          gap: 20
      }
    })

const Header = () => {
    const navigation = useNavigation();
    return (
        <View style={customStyles.header}>
        <View style={customStyles.headerLeft}>
            <TouchableWithoutFeedback>
                <Svg height="16" width="14" viewBox="0 0 448 512">
                    <Path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
                </Svg>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('Profile')}>
                <Image source={require('./../assets/logo-2.png')} style={{...styles.logo, width: 40, height: 40}}/>
            </TouchableWithoutFeedback>

        </View>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Home')}>
          <Svg height="16" width="16" viewBox="0 0 512 512" fill={colors.black}>
            <Path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V256c0 17.7 14.3 32 32 32s32-14.3 32-32V32zM143.5 120.6c13.6-11.3 15.4-31.5 4.1-45.1s-31.5-15.4-45.1-4.1C49.7 115.4 16 181.8 16 256c0 132.5 107.5 240 240 240s240-107.5 240-240c0-74.2-33.8-140.6-86.6-184.6c-13.6-11.3-33.8-9.4-45.1 4.1s-9.4 33.8 4.1 45.1c38.9 32.3 63.5 81 63.5 135.4c0 97.2-78.8 176-176 176s-176-78.8-176-176c0-54.4 24.7-103.1 63.5-135.4z"/>
          </Svg>
        </TouchableWithoutFeedback>
      </View>
    );
}

export default Header;

