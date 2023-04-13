/**
 * @format
 */

import React, {useRef, useState} from 'react';
import {StatusBar, View, Text} from 'react-native';
import Swiper from 'react-native-swiper';
import {styles} from '../../../assets/styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import IconArrowRight from 'react-native-vector-icons/Entypo';
import StepOne from './stepOne';
import StepTwo from './stepTwo';
import StepThree from './stepThree';
const CustomPagination = (
  index: number,
  total: number /*, context: Swiper*/,
) => {
  return (
    <View style={[styles.RowAlignItems, styles.LaunchPagination]}>
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

const LaunchScreen = ({navigation}: any) => {
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
    <>
      <StatusBar barStyle="light-content" />
      <Swiper
        loop={false}
        ref={swiperRef}
        showsPagination={true}
        onIndexChanged={handleIndexChanged}
        renderPagination={CustomPagination}>
        <StepOne />
        <StepTwo />
        <StepThree />
      </Swiper>

      {isLastScreen ? (
        <View style={styles.BoxButtonNext}>
          <TouchableOpacity onPress={() => navigation.navigate('account')}>
            <View style={styles.buttonNext}>
              <Text
                style={[
                  styles.fontMontserrat,
                  styles.fontBold600,
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
                  styles.fontBold600,
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
    </>
  );
};
export default LaunchScreen;
