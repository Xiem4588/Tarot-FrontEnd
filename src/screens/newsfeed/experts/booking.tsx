import React, {useEffect, useState} from 'react';
import {View, ScrollView, Text, TouchableWithoutFeedback} from 'react-native';
import {styles} from '../../../assets/styles';
import WrapBgBox from '../../../conponents/wrapBgBox';
import Header from '../../../conponents/header';
import Infor from './infor';
import PricePack from './price';
import DateTime from './datetime';
import {getUserDetail} from '../../../services';
import {useDispatch, useSelector} from 'react-redux';
import {ActionDetailUser} from '../../../redux/store/user/actions';
import {navProps} from './types';

const BookingScreen = ({navigation, route}: navProps) => {
  // get store data
  const token = useSelector(
    (state: any) => state.PRIVATE_STORE_ACCOUNT_DATA.token,
  );
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
  const [isPrice, setPrice] = useState<String[] | null>(null);
  const getDataPricePack = (price: any) => {
    setPrice(price);
  };

  // get Data of component DateTime
  const [isDate, setDate] = useState<String | null>(null);
  const [isTime, setTime] = useState<String | null>(null);
  const getDataDate = (date: any) => {
    setDate(date);
  };
  const getDataTime = (time: any) => {
    setTime(time);
  };

  const dataBooking = {
    dateViewing: isDate,
    timeViewing: isTime,
    pricePack: isPrice,
  };

  // Submit Payment
  const [isCheckLogin, setCheckLogin] = useState(false);
  const handlePayment = () => {
    if (token) {
      navigation.navigate('payment', {dataBooking});
    } else {
      setCheckLogin(true);
    }
  };

  return (
    <WrapBgBox>
      <Header navigation={navigation} name="booking" title={''} />
      <View style={[styles.detailUserBooking]}>
        <Infor />
        <ScrollView>
          <PricePack getDataPricePack={getDataPricePack} />
          <DateTime getDataDate={getDataDate} getDataTime={getDataTime} />
          {isCheckLogin === true ? (
            <View style={[styles.RowAlignItemsCenter, styles.marginTop20]}>
              <Text style={[styles.colorOrange, styles.fontSize16]}>
                Vui lòng login:
              </Text>
              <TouchableWithoutFeedback>
                <Text
                  style={[
                    styles.colorGreen,
                    styles.fontSize16,
                    styles.fontBold,
                    styles.marginLeft10,
                  ]}>
                  Login!
                </Text>
              </TouchableWithoutFeedback>
            </View>
          ) : (
            ''
          )}
          <View style={styles.paddingHorizontal18}>
            <TouchableWithoutFeedback
              onPress={isPrice && isDate && isTime ? handlePayment : () => {}}>
              <View
                style={[
                  isPrice && isDate && isTime
                    ? styles.buttonTmp
                    : styles.buttonFullDisableWhite,
                  styles.marginTop20,
                  styles.marginBottom50,
                ]}>
                <Text style={styles.buttonText}>Đặt lịch!</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </ScrollView>
      </View>
    </WrapBgBox>
  );
};

export default BookingScreen;
