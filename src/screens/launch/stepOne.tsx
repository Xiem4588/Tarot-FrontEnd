/**
 * @format
 */

import React from 'react';
import {View, Image, Text} from 'react-native';
import {styles} from '../../../assets/styles';
import {images} from '../../../assets/constants';

const StepOne = () => {
  return (
    <>
      <View style={styles.LaunchStyle}>
        <View style={styles.alignCenter}>
          <Image source={images.visualImageSl1} style={styles.visualImage} />
        </View>
        <View style={[styles.marginTop30]}>
          <Text
            style={[styles.fontSize18, styles.fontBold600, styles.textWhite]}>
            Gặp gỡ những chuyên gia hàng đầu
          </Text>
          <Text
            style={[styles.fontSize14, styles.marginTop5, styles.textWhite]}>
            Thể hiện mong muốn sâu sắc nhất của bạn. Điều gì sẽ đến với bạn?
          </Text>
        </View>
      </View>
    </>
  );
};
export default StepOne;
