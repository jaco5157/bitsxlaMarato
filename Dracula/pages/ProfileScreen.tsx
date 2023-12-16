import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import styles from './pages/Styles';

const ProfileScreen = ({navigation, route}) => {
  return <Text>This is {route.params.username}'s profile</Text>;
};

export default ProfileScreen;
