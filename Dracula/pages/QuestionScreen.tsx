import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import mysql from 'mysql2';
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

  const submitAnswersToApi = async (allAnswers) => {
    try {
        const connection = mysql.createConnection({
          host: 'localhost',
          user: 'avnadmin',
          password: 'AVNS_rDXztx4v3QSHKXauK0f',
          database: 'defaultdb',
        });

      // Replace 'your-user-id-here' with the actual user ID
      const userID = '8f802c9b-ea67-4771-82e0-ff168c4d2222';

      // Construct the SQL query to insert survey answers into the database
      const sql = `
        INSERT INTO Survey (ID, UserID, AnswerDate, Question1, Question2, Question3, Question4, Question5, Question6)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);
      `;

      // Execute the SQL query
      const [rows] = await connection.execute(sql, [
        "test", // Replace with an actual survey ID (e.g., a UUID)
        userID,
        new Date().toISOString(),
        ...allAnswers,
      ]);

      console.log('Survey answers submitted successfully!');

      // Close the database connection
      await connection.end();
    } catch (error) {
      console.error('Error submitting survey answers:', error.message);
    }
  };


/*
  const submitAnswersToApi = (allAnswers) => {
      const connection = mysql.createConnection({
            host: 'bitsxlamarato-bitsxlamarato.a.aivencloud.com:20361',
            user: 'avnadmin',
            password: 'AVNS_rDXztx4v3QSHKXauK0f',
            database: 'defaultdb',
          });


      // Submit answers to the API using the collected answers
      console.log('Submitted Answers:', allAnswers);
      // You may also navigate to another screen or perform other actions here
  };
*/

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
