import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import styles from './Styles';

const ProfileScreen = ({navigation, route}) => {
  const handleClick = () => {
      navigation.navigate('Question1');
  };
  return (
    <View>
        <Text style={styles.container}>This is {route.params.username}'s profile</Text>
        <View style={styles.buttonStyle}>
            <Button title="Take the daily questionaire" onPress={handleClick} />
        </View>
    </View>
  );
};

export default ProfileScreen;
