import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import styles from './Styles';

const CreateScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleCreate = () => {
    navigation.navigate('Profile', { username });
  };

  return (
    <View style={styles.container}>
      <Text>Please enter a username and password</Text>
      <TextInput
            style={styles.input}
            placeholder="Username"
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
      <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
      <View style={styles.buttonStyle}>
        <Button title="Create profile" onPress={handleCreate} />
      </View>
    </View>
  );
};

export default CreateScreen;
