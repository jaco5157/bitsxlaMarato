import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import styles from './Styles';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    navigation.navigate('Profile', { username });
  };

  return (
    <View style={styles.container}>
      <Text>This is the login page, please enter your username.</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <View style={styles.buttonStyle}>
        <Button title="Login" onPress={handleLogin} />
      </View>
    </View>
  );
};

export default LoginScreen;
