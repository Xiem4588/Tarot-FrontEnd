import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import IconMateria from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from '../../assets/styles';
import {stylesScreen} from './styles';

const SocialFirebase = () => {
  const signInWithFacebook = () => {};

  return (
    <>
      <View style={styles.RowAlignItems}>
        <TouchableOpacity
          style={styles.btnTmpAuto}
          onPress={signInWithFacebook}>
          <IconMateria name="facebook" size={26} color={'#007AD9'} />
        </TouchableOpacity>
        <View style={stylesScreen.separator} />
        <TouchableOpacity style={styles.btnTmpAuto} onPress={() => {}}>
          <IconMateria name="google" size={24} color={'#EB4335'} />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default SocialFirebase;
