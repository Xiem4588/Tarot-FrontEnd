import React, {useState} from 'react';
import {View} from 'react-native';
import Login from './login';
import Register from './register';
import {styles} from '../../../assets/styles';

const AccountScreen = ({navigation}: any) => {
  const [isLogin, setLogin] = useState(true);
  // const [isRegister, setRegister] = useState(false);
  const handleRegister = () => {
    setLogin(!isLogin);
  };
  const handleLogin = () => {
    setLogin(!isLogin);
  };
  return (
    <View style={styles.bodyScreen}>
      {isLogin ? (
        <Login navigation={navigation} handleRegister={handleRegister} />
      ) : (
        <Register navigation={navigation} handleLogin={handleLogin} />
      )}
    </View>
  );
};

export default AccountScreen;
