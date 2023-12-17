import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, Pressable } from 'react-native';
import styles, {colors} from './Styles';
import TopWave from '../components/TopWave'
import CustomText from '../components/CustomText'
import Header from '../components/Header'
import Svg, {Path} from 'react-native-svg'
import {useStorage} from '../hooks/useStorage'

import { usePBACContext } from './PBACProvider';

const PBACResultsScreen = ({ route, navigation }) => {
    const { pbacAnswers, cumulativeScore, resetValues } = usePBACContext();

    const handleReset = () => {
        resetValues();
    }

    const [PBAC, setPBAC, refreshPBAC] = useStorage('DRACULA@PBAC', {})
    const [currentUser] = useStorage('DRACULA@current-user', '')


    const answer = {
       cumulativeScore: cumulativeScore,
       answers: pbacAnswers
   }

    const currentUserLC = currentUser.toLowerCase()
    if (PBAC[currentUserLC] === undefined)
        PBAC[currentUserLC] = [answer]
    else
        PBAC[currentUserLC] = [...PBAC[currentUserLC], answer]

//      setPBAC(PBAC).then(() => {
//          console.log('Answers:', answers);
//          console.log(PBAC[currentUserLC])
//      })

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

        headerText: {
           fontSize: 20,
           fontWeight: 'bold',
        },
        table: {
           borderWidth: 1,
           borderColor: '#000',
           marginBottom: 16,
        },
        row: {
           flexDirection: 'row',
           borderBottomWidth: 1,
           borderColor: '#000',
        },
        cellHeader: {
           flex: 1,
           padding: 8,
           fontWeight: 'bold',
        },
        cell: {
           flex: 1,
           padding: 8,
        },
        footer: {
           marginTop: 16,
        },
        footerText: {
           fontSize: 18,
           fontWeight: 'bold',
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
           <Header/>

           <View style={customStyles.container}>
             <TopWave/>
            <CustomText style={{color:colors.primary, fontFamily:"FiraSans-Bold", fontSize:22}}>PBAC Score</CustomText>

             <View style={customStyles.actions}>
                 <View style={customStyles.questionsContainer}>
                     {/* RESULTS TABLE */}
                     <CustomText style={{textAlign: "center"}}>{ `PBAC Score: `, cumulativeScore }</CustomText>

                          <View style={styles.container}>
                            <View style={styles.header}>
                              <Text style={styles.headerText}>Summary</Text>
                            </View>
                            <View style={styles.table}>
                              <View style={styles.row}>
                                <Text style={styles.cellHeader}> Choose product type: </Text>
                                <Text style={styles.cellHeader}>Answer</Text>
                              </View>
                              {pbacAnswers.map((answer, index) => (
                                <View key={index} style={styles.row}>
                                  <Text style={styles.cell}>{`Question 1`}</Text>
                                  <Text style={styles.cell}>{`Response`}</Text>
                                </View>
                              ))}
                            </View>
                            <View style={styles.footer}>
                              <Text style={styles.footerText}>Cumulative Score: {cumulativeScore}</Text>
                            </View>
                          </View>

                     {/* BACK BUTTON */}
                     <View style={customStyles.answers}>
                         <Pressable onPress={ () => {
                                 handleReset();
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