import React from 'react';
import {View, ScrollView} from 'react-native';
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
    <WrapBgBox>
      <Header navigation={navigation} name="booking" title={''} />
      <View style={[styles.detailUserBooking]}>
        <Infor />
        <ScrollView>
          <Pack />
          <DateTime navigation={navigation} route={route} />
        </ScrollView>
      </View>
    </WrapBgBox>
  );
};

export default BookingScreen;
