import React, {useEffect, useState} from 'react';
import {Platform, View, Text, TouchableOpacity} from 'react-native';
import {BannerAd, BannerAdSize, TestIds} from 'react-native-google-mobile-ads';
import {styles} from '../assets/styles';

const adUnitIdBannerAd = __DEV__
  ? TestIds.BANNER
  : Platform.OS === 'ios'
  ? 'ca-app-pub-4915408027379842~9093201129'
  : 'ca-app-pub-4915408027379842/2034034411';

const GoogleAdsBannerAd = () => {
  const [showAd, setShowAd] = useState(true);
  const [showCloseButton, setShowCloseButton] = useState(false);
  const [countdown, setCountdown] = useState(6);

  useEffect(() => {
    let countdownInterval: string | number | NodeJS.Timeout | undefined;

    if (countdown > 0) {
      countdownInterval = setInterval(() => {
        setCountdown(prevCountdown => prevCountdown - 1);
      }, 1500);
    } else {
      setShowCloseButton(true);
    }

    return () => {
      clearInterval(countdownInterval);
    };
  }, [countdown]);

  const handleCloseBanner = () => {
    setShowAd(false);
    setShowCloseButton(false);
  };

  return (
    <View style={styles.zindexRelative9}>
      {showAd && (
        <>
          <View style={[styles.BtnBannerAds, styles.RowCenterBetween]}>
            <Text style={styles.marginRight10}>{countdown}s</Text>
            {showCloseButton && (
              <TouchableOpacity onPress={handleCloseBanner}>
                <Text>Close Ad</Text>
              </TouchableOpacity>
            )}
          </View>
          <BannerAd
            unitId={adUnitIdBannerAd}
            size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
            requestOptions={{
              requestNonPersonalizedAdsOnly: false,
            }}
          />
        </>
      )}
    </View>
  );
};

export default GoogleAdsBannerAd;
