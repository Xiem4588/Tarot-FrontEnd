import React, {useEffect} from 'react';
import {View, ScrollView} from 'react-native';
import {styles} from '../../../assets/styles';
import WrapBgBox from '../../../conponents/wrapBgBox';
import Header from '../../../conponents/header';
import Infor from './infor';
import PricePack from './price';
import DateTime from './datetime';
import {getUserDetail} from '../../../services';
import {useDispatch} from 'react-redux';
import {ActionDetailUser} from '../../../redux/store/user/actions';
import {navProps} from './types';

const BookingScreen = ({navigation, route}: navProps) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const userID = route.params.userID;
    const userDetail = async () => {
      try {
        const res = await getUserDetail(userID);
        const userData = res.data;
        dispatch(ActionDetailUser(userData)); // gọi action cập nhật store
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
          <PricePack />
          <DateTime navigation={navigation} />
        </ScrollView>
      </View>
    </WrapBgBox>
  );
};

export default BookingScreen;
