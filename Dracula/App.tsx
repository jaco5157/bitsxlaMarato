import * as React from 'react';
import styles from './pages/Styles';
import questions from './pages/Questions';

import HomeScreen from './pages/HomeScreen';
import LoginScreen from './pages/LoginScreen';
import CreateScreen from './pages/CreateScreen';
import ProfileScreen from './pages/ProfileScreen';
import QuestionScreen from './pages/QuestionScreen';
import CalendarScreen from './pages/CalendarScreen';
import PBAC01Screen from './pages/PBAC01Screen';
import PBAC02Screen from './pages/PBAC02Screen';
import PBAC03Screen from './pages/PBAC03Screen';
import PBAC04Screen from './pages/PBAC04Screen';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  TextInput,
} from 'react-native';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Welcome to Dracula'}}
        />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Create" component={CreateScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Calendar" component={CalendarScreen} />
        <Stack.Screen name="PBAC01Screen" component={PBAC01Screen} />
        <Stack.Screen name="PBAC02Screen" component={PBAC02Screen} />
        <Stack.Screen name="PBAC03Screen" component={PBAC03Screen} />
        <Stack.Screen name="PBAC04Screen" component={PBAC04Screen} />

        {questions.map((question, index) => (
          <Stack.Screen
            key={index}
            name={`Question${index + 1}`}
            component={QuestionScreen}
            initialParams={{
              question,
              isLastQuestion: index === questions.length - 1,
              answers: [], // Initialize answers array
              currentQuestionIndex: index,
            }}/>
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;