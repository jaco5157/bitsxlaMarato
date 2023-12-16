import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import styles from './Styles';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
        <View style={styles.buttonStyle}>
            <Button
                  title="Login"
                  onPress={() =>navigation.navigate('Login')}/>
        </View>
        <View style={styles.buttonStyle}>
            <Button
                title="Create profile"
                onPress={() =>navigation.navigate('Create')}/>
        </View>
    </View>
  );
};

export default HomeScreen;
