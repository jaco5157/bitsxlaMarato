import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import styles from './Styles';
import Calendar from "react-widgets/Calendar";

// Documentation on Calendar widget:
// https://jquense.github.io/react-widgets/docs/Calendar/

const ChangeDate({initialValue}) => {
    const [value, setValue] = useState(initialValue);
    return (
          <Calendar
            value={value}
            onChange={value => setValue(value)}
          />
    );
};

const CalendarScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
        <ChangeDate initialValue={new Date()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CalendarScreen;