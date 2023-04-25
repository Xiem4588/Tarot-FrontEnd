/**
 * @format
 */

import React, {useRef, useState} from 'react';
import {StatusBar, View, Text, TouchableHighlight} from 'react-native';
import Swiper from 'react-native-swiper';
import {styles} from '../../assets/styles';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import StepOne from './stepOne';
import StepTwo from './stepTwo';
import StepThree from './stepThree';
import {LanguageSwitcher} from '../../conponents/LanguageSwitcher';

MIcon.loadFont();

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
      <View style={styles.hidden}>
        <LanguageSwitcher />
      </View>
      {isLastScreen ? (
        <View style={styles.BoxButtonNext}>
          <TouchableHighlight onPress={() => navigation.navigate('MainNav')}>
            <View style={styles.buttonNext}>
              <Text
                style={[
                  styles.RowAlignItems,
                  styles.fontBold,
                  styles.colorBlack,
                ]}>
                Đăng ký
              </Text>
              <Text style={styles.IconAbs}>
                <MIcon name="chevron-right" size={22} color={'#000'} />
              </Text>
            </View>
          </TouchableHighlight>
        </View>
      ) : (
        <View style={styles.BoxButtonNext}>
          <TouchableHighlight onPress={handleNext}>
            <View style={styles.buttonNext}>
              <Text
                style={[
                  styles.RowAlignItems,
                  styles.fontBold,
                  styles.colorBlack,
                ]}>
                Tiếp theo
              </Text>
              <Text style={styles.IconAbs}>
                <MIcon name="chevron-right" size={22} color={'#000'} />
              </Text>
            </View>
          </TouchableHighlight>
        </View>
      )}
    </>
  );
};
export default LaunchScreen;
