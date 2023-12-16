import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import styles from './Styles';

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
    const PBAC_question1 = ['Choose product type:'];
    const currentQuestionIndex = 1;
    const [product, setProduct] = useState("");
    const { answers } = route.params;

  useEffect(() => {
    // This effect runs whenever 'answer' changes
    console.log('Action on index:', currentQuestionIndex, 'Product:', product);
  }, [product]);

    // 1. Handle product type
    const handlePad = () => {
        setProduct('pad');
    };
    const handleTampon = () => {
        setProduct('tampon');
    };


    const submitAnswersToApi = (allAnswers) => {
        // Submit answers to the API using the collected answers
        console.log('Submitted Answers:', allAnswers);
        // You may also navigate to another screen or perform other actions here
    };


  return (
    <View style={styles.container}>
      <Text>{ PBAC_question1 }</Text>
      <View style={styles.buttonStyle}>
        <Button title="Pad" onPress={() => {
             handlePad();
             navigation.navigate('PBAC02Screen');
        }} />
      </View>
      <View style={styles.buttonStyle}>
        <Button title="Tampon"onPress={() => {
            handleTampon();
            navigation.navigate('PBAC02Screen');
        }} />
      </View>
    </View>
   );

export default PBAC01Screen;
