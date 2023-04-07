/**
 * @format
 */

import React, {useRef, useState} from 'react';
import {AppRegistry, StatusBar, View} from 'react-native';
// import App from './src/navigation';
import {name as GameTarot} from './app.json';
import Swiper from 'react-native-swiper';
import {Image, Text} from 'react-native-elements';
import {styles} from './assets/styles';
import {images} from './assets/constants';
import {TouchableOpacity} from 'react-native-gesture-handler';
import IconArrowRight from 'react-native-vector-icons/Entypo';

const CustomPagination = (
  index: number,
  total: number /*, context: Swiper*/,
) => {
  return (
    <View style={styles.RowAlignItems}>
      {[...Array(total)].map((_, i) => {
        const isActive = i === index;
        return (
          <View
            key={i}
            style={{
              width: isActive ? 20 : 8,
              height: 8,
              borderRadius: 5,
              margin: 5,
              backgroundColor: isActive
                ? '#F78B73'
                : 'rgba(255, 255, 255, 0.4)',
            }}
            // onPress={() => context.scrollBy(i - index)}
          />
        );
      })}
    </View>
  );
};

const LaunchPage = () => {
  const [isLastScreen, setIsLastScreen] = useState(false);
  const swiperRef = useRef<Swiper>(null);
  const handleNext = () => {
    swiperRef?.current?.scrollBy(1);
  };

  const handleIndexChanged = (index: number) => {
    if (index === 2) {
      setIsLastScreen(true);
    } else {
      setIsLastScreen(false);
    }
  };

  return (
    <View style={[styles.LaunchStyle]}>
      <StatusBar barStyle="light-content" />
      <Swiper
        loop={false}
        ref={swiperRef}
        showsPagination={true}
        onIndexChanged={handleIndexChanged}
        renderPagination={CustomPagination}>
        <View style={styles.widthFull}>
          <View style={styles.alignCenter}>
            <Image source={images.visualImageSl1} style={styles.visualImage} />
          </View>
          <View style={[styles.marginTop30]}>
            <Text
              style={[styles.fontSize18, styles.fontBold, styles.textWhite]}>
              Gặp gỡ những chuyên gia hàng đầu
            </Text>
            <Text
              style={[styles.fontSize14, styles.marginTop5, styles.textWhite]}>
              Thể hiện mong muốn sâu sắc nhất của bạn. Điều gì sẽ đến với bạn?
            </Text>
          </View>
        </View>
        <View style={styles.widthFull}>
          <View style={styles.alignCenter}>
            <Image source={images.visualImageSl2} style={styles.visualImage} />
          </View>
          <View style={[styles.marginTop30]}>
            <Text
              style={[styles.fontSize18, styles.fontBold, styles.textWhite]}>
              Nội dung các lá bài đa dạng
            </Text>
            <Text
              style={[styles.fontSize14, styles.marginTop5, styles.textWhite]}>
              Thể hiện mong muốn sâu sắc nhất của bạn. Điều gì sẽ đến với bạn?
            </Text>
          </View>
        </View>
        <View style={styles.widthFull}>
          <View style={styles.alignCenter}>
            <Image source={images.visualImageSl3} style={styles.visualImage} />
          </View>
          <View style={[styles.marginTop30]}>
            <Text
              style={[styles.fontSize18, styles.fontBold, styles.textWhite]}>
              Nội dung các lá bài đa dạng
            </Text>
            <Text
              style={[styles.fontSize14, styles.marginTop5, styles.textWhite]}>
              Thể hiện mong muốn sâu sắc nhất của bạn. Điều gì sẽ đến với bạn?
            </Text>
          </View>
        </View>
      </Swiper>

      {isLastScreen ? (
        <View style={styles.BoxButtonNext}>
          <TouchableOpacity onPress={handleNext}>
            <View style={styles.buttonNext}>
              <Text
                style={[
                  styles.fontMontserrat,
                  styles.fontBold,
                  styles.RowAlignItems,
                ]}>
                Đăng ký
              </Text>
              <Text style={styles.IconAbs}>
                <IconArrowRight name="chevron-thin-right" size={18} />
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.BoxButtonNext}>
          <TouchableOpacity onPress={handleNext}>
            <View style={styles.buttonNext}>
              <Text
                style={[
                  styles.fontMontserrat,
                  styles.fontBold,
                  styles.RowAlignItems,
                ]}>
                Tiếp theo
              </Text>
              <Text style={styles.IconAbs}>
                <IconArrowRight name="chevron-thin-right" size={18} />
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};
export default LaunchPage;

AppRegistry.registerComponent(GameTarot, () => LaunchPage);
