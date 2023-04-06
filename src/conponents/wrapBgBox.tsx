import React from 'react';
import {ImageBackground, StatusBar} from 'react-native';
import {styles} from '../../assets/styles';
import type {PropsWithChildren} from 'react';
import {images} from '../../assets/constants';

const WrapBgBox = ({children}: PropsWithChildren) => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <ImageBackground
        source={images.ImageBackground}
        resizeMode="cover"
        style={styles.ImageBackground}>
        {children}
      </ImageBackground>
    </>
  );
};

export default WrapBgBox;
