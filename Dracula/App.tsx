import * as React from 'react';
import styles from './pages/Styles';
import questions from './pages/Questions';

import HomeScreen from './pages/HomeScreen';
import LoginScreen from './pages/LoginScreen';
import CreateScreen from './pages/CreateScreen';
import ProfileScreen from './pages/ProfileScreen';
import QuestionScreen from './pages/QuestionScreen';
import CalendarScreen from './pages/CalendarScreen';
import PBACOneScreen from './pages/PBAC01Screen';
import PBACTwoScreen from './pages/PBAC02Screen';
import PBACThreeScreen from './pages/PBAC03Screen';
import PBACFourScreen from './pages/PBAC04Screen';

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
import {useStorage} from './hooks/useStorage'

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
            <Stack.Screen name="PBACOneScreen" component={PBACOneScreen} />
            <Stack.Screen name="PBACTwoScreen" component={PBACTwoScreen} initialParams={cumulativeScore = 0} />
            <Stack.Screen name="PBACThreeScreen" component={PBACThreeScreen} initialParams={cumulativeScore} />
            <Stack.Screen name="PBACFourScreen" component={PBACFourScreen} initialParams={cumulativeScore} />

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