import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import mysql from 'mysql2';
import styles from './Styles';
=======
import { View, Text, TextInput, Button, StyleSheet, Image, Pressable } from 'react-native';
>>>>>>> origin/feat/react-app
import questions from './Questions';
import styles, {colors} from './Styles';
import TopWave from '../components/TopWave'
import CustomText from '../components/CustomText'
import Svg, {Path} from 'react-native-svg'


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

    const progressSvgPath = (i) => {
        if (i < currentQuestionIndex)
            return "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
        else if (i === currentQuestionIndex)
            return "M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256-96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"
        else
            return "M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"
    }


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
              <CustomText style={{paddingRight: 10}}>Hola Paola!</CustomText>
          </View>
          <View style={customStyles.container}>
            <TopWave/>
            <View style={customStyles.actions}>
                <View style={customStyles.questionsContainer}>
                    <CustomText style={{textAlign: "center"}}>{question}</CustomText>
                    <View style={customStyles.answers}>
                        <View style={{position: 'relative'}}>
                            <Pressable onPress={handleYes} style={{...customStyles.answer, backgroundColor: colors.primary}}>
                                <Image source={require('./../assets/blood-drop.png')} style={customStyles.bloodDrop}/>
                                <CustomText style={{color: "white"}}>YES</CustomText>
                            </Pressable>
                        </View>
                        <Pressable onPress={handleNo} style={{...customStyles.answer, backgroundColor: colors.black}}>
                            <CustomText style={{color: "white"}}>NO</CustomText>
                        </Pressable>
                    </View>
                </View>
                <View style={customStyles.progressBar}>
                    <View style={customStyles.line}></View>
                    {[...Array(6)].map((x, i) =>
                        <Svg style={customStyles.step} viewBox="0 0 512 512">
                            <Path d={progressSvgPath(i)}/>
                        </Svg>
                      )}



                </View>
            </View>
          </View>
      </View>
    </View>
   );
};

export default QuestionScreen;
