import React from 'react';
import {View, Text} from 'react-native';
import {styles} from '../../assets/styles';

interface Props {
  notification: string;
}

const LoadingFullScreen = ({notification}: Props) => {
  return (
    <View style={[styles.loadingFullScreen, styles.alignItems]}>
      <Text style={[styles.fontsize18White]}>{notification}</Text>
    </View>
  );
};

export default LoadingFullScreen;
