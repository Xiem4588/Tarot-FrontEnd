/**
 * @format
 */

import React, {useRef, useState} from 'react';
import {
  StatusBar,
  View,
  Text,
  // TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import Swiper from 'react-native-swiper';
import {styles} from '../../assets/styles';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import StepOne from './stepOne';
import StepTwo from './stepTwo';
import StepThree from './stepThree';
import {LanguageSwitcher} from '../../conponents/LanguageSwitcher';
import {useTranslation} from 'react-i18next';
import i18n from '../../languages/i18n';
import GoogleAdsInterstitialAd from '../../googleAds/_bannerAd';

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
            // eslint-disable-next-line react-native/no-inline-styles
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
  useTranslation();
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
      <View style={styles.hidden}>
        <LanguageSwitcher />
      </View>
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
          <TouchableOpacity onPress={() => navigation.navigate('MainNav')}>
            <View style={styles.buttonNext}>
              <Text
                style={[
                  styles.RowAlignItems,
                  styles.fontBold,
                  styles.colorBlack,
                ]}>
                {i18n.t('register')}
              </Text>
              <Text style={styles.IconAbs}>
                <MIcon name="chevron-right" size={22} color={'#000'} />
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
                  styles.RowAlignItems,
                  styles.fontBold,
                  styles.colorBlack,
                ]}>
                {i18n.t('nextmore')}
              </Text>
              <Text style={styles.IconAbs}>
                <MIcon name="chevron-right" size={22} color={'#000'} />
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      )}
      <GoogleAdsInterstitialAd />
    </>
  );
};
export default LaunchScreen;
