import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import styles from './Styles';
import cumulativeScore from './PBAC02Screen';

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

const PBACThreeScreen = ({ route, navigation }) => {
    const PBAC_question3 = ['Did you have any blood clots, and if so, what size?'];
    const currentQuestionIndex = 3;
    const [score, setScore] = useState("");
    const { cumulativeScore, answers } = route.params;

  useEffect(() => {
    // This effect runs whenever 'answer' changes
    console.log('Action on index:', currentQuestionIndex, 'Answer:', product);
    }, [product]);

    // 3. Handle clots
    const handleClot0 = () => {
        setScore(0);
    }
    const handleClot1p = () => {
        setScore(1);
    }
    const handleClot50p = () => {
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
            <Button title="None" onPress={() => {
                 handleClot0();
                 navigation.navigate('PBAC03Screen');
             }} />
          </View>
          <View style={styles.buttonStyle}>
            <Button title="1p" onPress={() => {
                 handleClot1p();
                 navigation.navigate('PBAC03Screen');
            }} />
          </View>
          <View style={styles.buttonStyle}>
            <Button title="5p" onPress={() => {
                 handleClot50p();
                 navigation.navigate('PBAC03Screen');
             }} />
          </View>
        </View>
       );

};

export default PBACThreeScreen;
