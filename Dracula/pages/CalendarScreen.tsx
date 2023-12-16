import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import styles from './Styles';
import {Calendar} from "react-native-calendars"


// Documentation on Calendar widget:
// https://jquense.github.io/react-widgets/docs/Calendar/

const customStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const ChangeDate = ({initialValue}) => {
    const [value, setValue] = useState(initialValue);
      useEffect(() => {
          // This effect runs whenever 'answer' changes
          console.log(value);
      }, [value]);
    return (
    <View>
      <Calendar
        value={value}
        onDayPress={day => setValue(day.dateString)}
      />
    </View>

    );
};

const CalendarScreen = ({navigation}) => {
  return (
    <View style={customStyles.container}>

        <ChangeDate initialValue={new Date()} />
    </View>
  );
};

export default CalendarScreen;