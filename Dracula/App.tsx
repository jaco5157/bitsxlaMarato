import * as React from 'react';
import styles from './pages/Styles';
import questions from './pages/Questions';
import { PBACProvider } from './pages/PBACProvider';

import HomeScreen from './pages/HomeScreen';
import LoginScreen from './pages/LoginScreen';
import CreateScreen from './pages/CreateScreen';
import ProfileScreen from './pages/ProfileScreen';
import QuestionScreen from './pages/QuestionScreen';
import CalendarScreen from './pages/CalendarScreen';
import StatsScreen from './pages/StatsScreen';
import PBACOneScreen from './pages/PBAC01Screen';
import PBACTwoScreen from './pages/PBAC02Screen';
import PBACThreeScreen from './pages/PBAC03Screen';
import PBACFourScreen from './pages/PBAC04Screen';
import PBACResultsScreen from './pages/PBACResultsScreen';
import QuestionResultScreen from './pages/QuestionResultScreen';

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
    <PBACProvider>
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
            <Stack.Screen name="Stats" component={StatsScreen} />

            {/*} PBAC SCORE {*/}
            <Stack.Screen
              name={`PBACOneScreen`}
              component={PBACOneScreen}
              options={{title: 'PBAC Score Test'}}
            />
            <Stack.Screen
              name={`PBACTwoScreen`}
              component={PBACTwoScreen}
              options={{title: 'PBAC Score Test'}}
            />
            <Stack.Screen
              name={`PBACThreeScreen`}
              component={PBACThreeScreen}
              options={{title: 'PBAC Score Test'}}
            />
            <Stack.Screen
              name={`PBACFourScreen`}
              component={PBACFourScreen}
              options={{title: 'PBAC Score Test'}}
            />
            <Stack.Screen
              name={`PBACResultsScreen`}
              component={PBACResultsScreen}
              options={{title: 'PBAC Score Results'}}
            />
            <Stack.Screen name={`QuestionResultScreen`}component={QuestionResultScreen}/>
            {/*} QUESTIONNAIRE {*/}
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
    </PBACProvider>
    );
};

export default App;