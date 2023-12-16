import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const LoginPage = ({ navigation }) => {
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    navigation.navigate('Profile', { username });
  };

  return (
    <View style={styles.container}>
      <Text>This is the login page, please enter your username.</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <View style={styles.buttonStyle}>
        <Button title="Login" onPress={handleLogin} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
    width: '100%',
  },
  buttonStyle: {
    width: '80%',
  },
});

export default LoginPage;
