import React from 'react';
import {View} from 'react-native';
import {
  ScrollView,
  GestureHandlerRootView,
  NativeViewGestureHandler,
} from 'react-native-gesture-handler';
import {styles} from '../../../assets/styles';
import WrapBgBox from '../../../conponents/wrapBgBox';
import Header from '../../../conponents/header';
import Infor from './infor';
import Pack from './pack';
import DateTime from './datetime';

// Props
type BookingScreenProps = {
  navigation: any;
  route: any;
  customHeader?: React.ReactNode;
}; //

const BookingScreen = ({navigation, route}: BookingScreenProps) => {
  // lay id truyen vao tu url
  const {id} = route.params;
  console.log('Id duoc lay tu url', id);

  return (
    <GestureHandlerRootView style={[styles.flexBox]}>
      <WrapBgBox>
        <Header navigation={navigation} name="booking" title={''} />
        <View style={[styles.detailUserBooking]}>
          <Infor />
          <ScrollView>
            <NativeViewGestureHandler>
              <Pack />
              <DateTime navigation={navigation} route={route} />
            </NativeViewGestureHandler>
          </ScrollView>
        </View>
      </WrapBgBox>
    </GestureHandlerRootView>
  );
};

export default BookingScreen;
