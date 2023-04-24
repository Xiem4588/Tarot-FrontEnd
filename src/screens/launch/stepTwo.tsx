/**
 * @format
 */

import React from 'react';
import {View, Image, Text} from 'react-native';
import {styles} from '../../assets/styles';
import {images} from '../../assets/constants';
import {useTranslation} from 'react-i18next';
import i18n from '../../languages/i18n';

const StepTwo = () => {
  useTranslation();
  return (
    <>
      <View style={styles.LaunchStyle}>
        <View style={styles.alignCenter}>
          <Image source={images.visualImageSl2} style={styles.visualImage} />
        </View>
        <View style={[styles.marginTop30]}>
          <Text
            style={[styles.fontSize18, styles.fontBold600, styles.textWhite]}>
            {i18n.t('stepTwoTitle')}
          </Text>
          <Text
            style={[styles.fontSize14, styles.marginTop5, styles.textWhite]}>
            {i18n.t('stepTwoDec')}
          </Text>
        </View>
      </View>
    </>
  );
};
export default StepTwo;
