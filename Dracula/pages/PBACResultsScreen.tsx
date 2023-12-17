import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, Pressable } from 'react-native';
import styles, {colors} from './Styles';
import TopWave from '../components/TopWave'
import CustomText from '../components/CustomText'
import Svg, {Path} from 'react-native-svg'

import { usePBACContext } from './PBACProvider';

const PBACResultsScreen = ({ route, navigation }) => {
    const { pbacAnswers, cumulativeScore } = usePBACContext();

    useEffect(() => {
        // This effect runs whenever 'answer' changes
        console.log('Answers:', pbacAnswers, 'Cumulative score:', cumulativeScore);
    }, []);

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
       container: {
         position: "relative",
         backgroundColor: colors.white,
         height: "100%",
         width: "100%",
         color: colors.black,
         display: "flex",
         alignItems: "center",
         flexDirection: "column",
         paddingTop: 110,
         gap: 10
       },
       actions: {
           display: "flex",
           justifyContent: "space-between",
           alignItems: "center",
           flexDirection: "column",
           width: "75%",
           height: "80%",
       },
       questionsContainer: {
         display: "flex",
         flexDirection: "column",
         gap: 20,
         flexGrow: 1,
         justifyContent: "center",
         paddingBottom: 50
       },
       answers: {
         display: "flex",
         flexDirection: "row",
         gap: 20,
         width: "100%",
         justifyContent:"space-around",
       },
       answer: {
         borderRadius: 50,
         color: "white",
         width: 60,
         height: 60,
         display: "flex",
         justifyContent: "center",
         alignItems: "center",
       },
       bloodDrop: {
         position: 'absolute',
         bottom: -35,
         left: -6,
         width: 70,
         height: 70
       },
       progressBar: {
         display: "flex",
         flexDirection: "row",
         justifyContent: "space-between",
         alignItems: "center",
         width: "100%",
         position: "relative"
       },
       line: {
         width: "100%",
         backgroundColor: colors.primary,
         height: 2,
         position: "absolute",
       },
       step: {
         width: 16,
         height: 16,
         fill: colors.primary,
         backgroundColor: colors.white,
         zIndex: 1,
       }
     })



   return (
     <View style={styles.body}>
       <View style={styles.mainContainer}>
           <View style={customStyles.header}>
               <Image source={require('./../assets/logo.png')} style={{...styles.logo, width: 40, height: 40}}/>
               <CustomText style={{paddingRight: 10}}> Hola Paola! </CustomText>
           </View>
           <View style={customStyles.container}>
             <TopWave/>
             <View style={customStyles.actions}>
                 <View style={customStyles.questionsContainer}>
                     <CustomText style={{textAlign: "center"}}>{ cumulativeScore }</CustomText>
                     <View style={customStyles.answers}>
                         <Pressable onPress={ () => {
                                 navigation.navigate('Home');
                         }} style={{...customStyles.answer, backgroundColor: colors.black}}>
                             <CustomText style={{color: "white"}}> BACK </CustomText>
                         </Pressable>
                     </View>
                 </View>
             </View>
           </View>
       </View>
     </View>
    );

 };

export default PBACResultsScreen;