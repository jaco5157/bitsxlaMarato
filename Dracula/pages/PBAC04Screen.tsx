import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import styles from './Styles';
import cumulativeScore from './PBAC03Screen';

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
    const PBAC_questions = ['Did you have any flooding?'];
    const currentQuestionIndex = 4;
    const [score, setScore] = useState("");
    const { cumulativeScore, answers } = route.params;

  useEffect(() => {
    // This effect runs whenever 'answer' changes
    console.log('Action on index:', currentQuestionIndex, 'Answer:', product);
    }, [product]);

    // 4. Flooding
    const handleFlooding0 = () => {
        setScore(0);
    }
    const handleFlooding = () => {
        setScore(5);
    }

    const submitAnswersToApi = (allAnswers) => {
        // Submit answers to the API using the collected answers
        console.log('Submitted Answers:', allAnswers);
        // You may also navigate to another screen or perform other actions here
    };

  return (
    <View style={styles.container}>
      <Text>{ PBAC_question3 }</Text>
      <View style={styles.buttonStyle}>
        <Button title="No" onPress={() => {
             handleFlooding0();
             navigation.navigate('HomeScreen');
         }} />
      </View>
      <View style={styles.buttonStyle}>
        <Button title="Yes" onPress={() => {
             handleFlooding();
             navigation.navigate('HomeScreen');
        }} />
      </View>
    </View>
   );

};

export default PBAC04Screen;
