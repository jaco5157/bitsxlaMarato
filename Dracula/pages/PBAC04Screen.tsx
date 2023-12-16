import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, Pressable } from 'react-native';
import styles, {colors} from './Styles';
import TopWave from '../components/TopWave'
import CustomText from '../components/CustomText'
import Svg, {Path} from 'react-native-svg'

    {/*
    SCORES
    ------
    pad light     = 1
    pad medium    = 5
    pad heavy     = 20
    tampon light  = 1
    tampon medium = 5
    tampon heavy  = 10
    clot 1p       = 1
    clot 50p      = 5
    flooding      = 5
    */}

const PBACFourScreen = ({ route, navigation }) => {
    const PBAC_questions = ['Did you have any flooding?'];
    const currentQuestionIndex = 4;
    const [score, setScore] = useState(null);
    const { cumulativeScore } = route.params;

  useEffect(() => {
    // This effect runs whenever 'answer' changes
    console.log('Action on index:', currentQuestionIndex, 'Cumulative score:', cumulativeScore);
  }, [cumulativeScore]);

    // 4. Flooding
    const handleFlooding = () => {
        cumulativeScore = cumulativeScore + 5;
//         setScore(5);
    }

    const submitScoreToApi = (cumulativeScore) => {
        console.log('Cumulative score:', cumulativeScore);
    };


// //////////// CHANGE FROM HERE

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
                     <CustomText style={{textAlign: "center"}}>{ PBAC_question4 }</CustomText>
                     <View style={customStyles.answers}>
                         <View style={{position: 'relative'}}>
                             <Pressable onPress={ () => {
                                handleFlooding();
                                navigation.navigate('HomeScreen');
                             }} style={{...customStyles.answer, backgroundColor: colors.primary}}>
                                 <Image source={require('./../assets/blood-drop.png')} style={customStyles.bloodDrop}/>
                                 <CustomText style={{color: "white"}}> YES </CustomText>
                             </Pressable>
                         </View>
                         <Pressable onPress={ () => {
                                 navigation.navigate('HomeScreen');
                         }} style={{...customStyles.answer, backgroundColor: colors.black}}>
                             <CustomText style={{color: "white"}}> NO </CustomText>
                         </Pressable>
                     </View>
                 </View>
                 {/*
//                  <View style={customStyles.progressBar}>
//                      <View style={customStyles.line}></View>
//                      {[...Array(4)].map((x, i) =>
//                          <Svg style={customStyles.step} viewBox="0 0 512 512">
//                              <Path d={progressSvgPath(i)}/>
//                          </Svg>
//                        )}
//                  </View>
*/}
             </View>
           </View>
       </View>
     </View>
    );
 };

export default PBACFourScreen;
