import React, {useEffect, useState} from 'react';
import {View, ScrollView, TouchableOpacity, Text} from 'react-native';
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
    const userID = route.params.id;
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
  const [isPrice, setPrice] = useState([]);
  const getDataPricePack = (price: any) => {
    setPrice(price);
  };

  // get Data of component DateTime
  const [isDate, setDate] = useState('');
  const [isTime, setTime] = useState('');
  const getDataDate = (date: any) => {
    setDate(date);
  };
  const getDataTime = (time: any) => {
    setTime(time);
  };
  const dataBooking = {
    price: isPrice,
    date: isDate,
    time: isTime,
  };

  console.log('---> inforAppointment', dataBooking);
  return (
    <WrapBgBox>
      <Header navigation={navigation} name="booking" title={''} />
      <View style={[styles.detailUserBooking]}>
        <Infor />
        <ScrollView>
          <PricePack getDataPricePack={getDataPricePack} />
          <DateTime getDataDate={getDataDate} getDataTime={getDataTime} />
          <View style={styles.paddingHorizontal18}>
            <TouchableOpacity
              onPress={() => navigation.navigate('payment', {dataBooking})}
              style={[
                styles.buttonTmp,
                styles.marginBottom80,
                styles.marginTop20,
              ]}>
              <Text style={[styles.buttonText]}>Đặt lịch</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </WrapBgBox>
  );
};

export default BookingScreen;
