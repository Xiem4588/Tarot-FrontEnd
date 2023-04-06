import React from 'react';
import {View} from 'react-native';
import Login from './login';
import Register from './register';
import {styles} from '../../../assets/styles';

const AccountScreen = () => {
  const login = true;
  return (
    <View style={styles.bodyScreen}>{login ? <Login /> : <Register />}</View>
  );
};

export default AccountScreen;
