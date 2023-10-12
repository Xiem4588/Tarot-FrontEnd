import React, {useEffect, useState} from 'react';
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

  // get Data of component PricePack
  const [isDataPricePack, setDataPricePack] = useState([]);
  const getDataPricePack = (price: any) => {
    setDataPricePack(price);
  };
  console.log('------------> 1', isDataPricePack);

  // get Data of component DateTime
  const [isDataDateTime, setDataDateTime] = useState([]);
  const getDataDateTime = (date: any) => {
    setDataDateTime(date);
  };
  console.log('------------> 2', isDataDateTime);

  return (
    <WrapBgBox>
      <Header navigation={navigation} name="booking" title={''} />
      <View style={[styles.detailUserBooking]}>
        <Infor />
        <ScrollView>
          <PricePack getDataPricePack={getDataPricePack} />
          <DateTime navigation={navigation} getDataDateTime={getDataDateTime} />
        </ScrollView>
      </View>
    </WrapBgBox>
  );
};

export default BookingScreen;
