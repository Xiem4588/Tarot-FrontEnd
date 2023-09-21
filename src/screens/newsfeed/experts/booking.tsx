import React, {useEffect} from 'react';
import {View, ScrollView} from 'react-native';
import {styles} from '../../../assets/styles';
import WrapBgBox from '../../../conponents/wrapBgBox';
import Header from '../../../conponents/header';
import Infor from './infor';
import Pack from './pack';
import DateTime from './datetime';
import {getUserDetail} from '../../../services';
import {useDispatch} from 'react-redux';
import {detailUserSuccess} from '../../../redux/store/user/account/types';
// Props
type bookingProps = {
  navigation: any;
  route: any;
};

const BookingScreen = ({navigation, route}: bookingProps) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const userId = route.params.id;
    const userDetail = async () => {
      try {
        const res = await getUserDetail(userId);
        const userData = res.data;
        console.log('5432534234', userData);
        dispatch(detailUserSuccess(userData)); // gọi action cập nhật store
        return userData;
      } catch (error) {
        console.error('Lỗi khi lấy thông tin người dùng', error);
      }
    };
    userDetail();
  }, [dispatch, route.params]);

  return (
    <WrapBgBox>
      <Header navigation={navigation} name="booking" title={''} />
      <View style={[styles.detailUserBooking]}>
        <Infor />
        <ScrollView>
          <Pack />
          <DateTime navigation={navigation} />
        </ScrollView>
      </View>
    </WrapBgBox>
  );
};

export default BookingScreen;
