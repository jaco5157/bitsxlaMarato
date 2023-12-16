import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import styles from './Styles';
import product, cumulativeScore from './PBAC01Screen';

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

const PBACScoreScreen = ({ route, navigation }) => {
    const PBAC_question2 = ['What is the blood intensity?'];
    const currentQuestionIndex = 2;
    const cumulativeScore = 0;
    const [score, setScore] = useState("");
    const {product, answers} = route.params;

  useEffect(() => {
    // This effect runs whenever 'answer' changes
    console.log('Action on index:', currentQuestionIndex, 'Answer:', answer);
  }, [product]);

    // 2. Handle blood intensity
    const handleLow = () => {
        setScore(1);
    };
    const handleMid = () => {
        setScore(5);
    };
    const handleHigh = () => {
        if (product=='pad') {
            setScore(20);
        } else {
            setScore(10);
        }
    };


    const submitAnswersToApi = (allAnswers) => {
        // Submit answers to the API using the collected answers
        console.log('Submitted Answers:', allAnswers);
        // You may also navigate to another screen or perform other actions here
    };


  return (
    <View style={styles.container}>
      <Text>{ PBAC_question2 }</Text>
      <View style={styles.buttonStyle}>
        <Button title="Light" onPress={() => {
            handleLow();
            navigation.navigate('PBAC03Screen');
        }} />
      </View>
      <View style={styles.buttonStyle}>
        <Button title="Medium" onPress={() => {
            handleMed();
            navigation.navigate('PBAC03Screen');
        }} />
      </View>
      <View style={styles.buttonStyle}>
        <Button title="Heavy" onPress={() => {
           handleLow();
           navigation.navigate('PBAC03Screen');
       }} />
      </View>
    </View>
   );


export default PBAC02Screen;
