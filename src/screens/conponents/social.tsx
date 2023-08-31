import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import IconMateria from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from '../../assets/styles';

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
        <View style={styles.separator} />
        <TouchableOpacity style={styles.btnTmpAuto} onPress={() => {}}>
          <IconMateria name="google" size={24} color={'#EB4335'} />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default SocialFirebase;
