/**
 * @format
 */

import React from 'react';
import {View, Image, Text} from 'react-native';
import {styles} from '../../../assets/styles';
import {images} from '../../../assets/constants';

const StepTwo = () => {
  return (
    <>
      <View style={styles.LaunchStyle}>
        <View style={styles.alignCenter}>
          <Image source={images.visualImageSl2} style={styles.visualImage} />
        </View>
        <View style={[styles.marginTop30]}>
          <Text
            style={[styles.fontSize18, styles.fontBold600, styles.textWhite]}>
            Nội dung các lá bài đa dạng
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
export default StepTwo;
