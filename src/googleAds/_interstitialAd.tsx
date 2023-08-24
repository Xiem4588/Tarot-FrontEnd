import {useEffect, useState} from 'react';
import {Platform} from 'react-native';
import {
  AdEventType,
  InterstitialAd,
  TestIds,
} from 'react-native-google-mobile-ads';

// InterstitialAd
const adUnitIdInterstitialAd = __DEV__
  ? TestIds.INTERSTITIAL
  : Platform.OS === 'ios'
  ? 'ca-app-pub-4915408027379842~9093201129'
  : 'ca-app-pub-4915408027379842/2034034411';

const interstitial = InterstitialAd.createForAdRequest(adUnitIdInterstitialAd, {
  requestNonPersonalizedAdsOnly: true,
  keywords: ['fashion', 'clothing'],
});

const GoogleAdsInterstitialAd = () => {
  const [loadedInterstitialAd, setLoadedInterstitialAd] = useState(false);

  useEffect(() => {
    const unsubscribe = interstitial.addAdEventListener(
      AdEventType.LOADED,
      () => {
        setLoadedInterstitialAd(true);
        interstitial.show();
      },
    );
    interstitial.load();
    return unsubscribe;
  }, []);

  // No advert ready to show yet
  if (!loadedInterstitialAd) {
    return null;
  }
  return null; // You might return some UI components here if needed
};

export default GoogleAdsInterstitialAd;
