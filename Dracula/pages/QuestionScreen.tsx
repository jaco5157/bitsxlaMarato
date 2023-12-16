import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import styles from './Styles';
import questions from './Questions';

const QuestionScreen = ({ route, navigation }) => {
  const { question, isLastQuestion, answers, currentQuestionIndex } = route.params;
  const [answer, setAnswer] = useState(null);
  const nextQuestionIndex = currentQuestionIndex + 1;

  useEffect(() => {
      // This effect runs whenever 'answer' changes
      console.log('Action on index:', currentQuestionIndex, 'Answer:', answer);
  }, [answer]);

  const handleYes = () => {
    setAnswer(true);
  };

  const handleNo = () => {
    setAnswer(false);
  };

  useEffect(() => {
    if (answer !== null) {
        const nextQuestionIndex = currentQuestionIndex + 1;

        // Check if it's the last question
        if (isLastQuestion) {
            submitAnswersToApi([...answers, answer]);
        } else {
        // If it's not the last question, navigate to the next question
            navigation.push(`Question${nextQuestionIndex+1}`, {
                question: questions[nextQuestionIndex],
                isLastQuestion: nextQuestionIndex === questions.length - 1,
                answers: [...answers, answer], // Add the current answer to the answers array
                currentQuestionIndex: nextQuestionIndex,
              });
        }
    }
  }, [answer]);

  const submitAnswersToApi = (allAnswers) => {
      // Submit answers to the API using the collected answers
      console.log('Submitted Answers:', allAnswers);
      // You may also navigate to another screen or perform other actions here
  };

  return (
    <View style={styles.container}>
      <Text>{question}</Text>
      <View style={styles.buttonStyle}>
        <Button title="Yes" onPress={handleYes} />
      </View>
      <View style={styles.buttonStyle}>
        <Button title="No" onPress={handleNo} />
      </View>
    </View>
   );
};

export default QuestionScreen;
