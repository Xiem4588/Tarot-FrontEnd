import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import moment from 'moment';
import {Avatar} from 'react-native-elements';
import {images, icon} from '../../../../assets/constants';
import {styles} from '../../../../assets/styles';
import WrapBgBox from '../../../../conponents/wrapBgBox';
import InforProfile from '../component/infor';
import {useFocusEffect} from '@react-navigation/native';
import {getTypeBooking} from '../../../../services';
import {useSelector} from 'react-redux';

interface Props {
  navigation: any;
}

const MyProfileUser = ({navigation}: Props) => {
  const [isOrderData, setOrderData] = useState<String[]>([]);
  const userData = useSelector(
    (state: any) => state.PRIVATE_STORE_ACCOUNT_DATA.user,
  );
  useFocusEffect(
    React.useCallback(() => {
      const checkDataBooking = async () => {
        try {
          if (userData) {
            const myEmail = await userData.email;
            const emailData = {
              email: myEmail,
            };
            const res = await getTypeBooking('ordersGuest', emailData);
            const data = await res.data;
            setOrderData(data);
          }
        } catch (error) {
          return error;
        }
      };
      checkDataBooking();
    }, [userData]),
  );
  useEffect(() => {
    console.log('--------> isOrderData', isOrderData);
  }, [isOrderData]);

  return (
    <WrapBgBox>
      <InforProfile navigation={navigation} />
      <View
        style={[styles.itemContainer, styles.paddingBox, styles.marginTop20]}>
        <Text style={styles.titleBox}>Lịch đã đặt</Text>
        <ScrollView>
          {isOrderData.map((item: any) => (
            <TouchableOpacity key={item._id} onPress={() => {}}>
              <View style={styles.item}>
                <View style={styles.avatarItem}>
                  <Avatar
                    source={images.AvatarDemo1}
                    containerStyle={styles.avatarImage}
                  />
                </View>
                <View style={styles.flexBox}>
                  <Text style={styles.nameItem}>{item.name_expert}</Text>
                  <View style={styles.RowAlignItems}>
                    <Avatar
                      source={
                        moment().isAfter(moment(item.date, 'DD MM YYYY'), 'day')
                          ? icon.iconHeartWhite
                          : icon.iconHeartActive
                      }
                      containerStyle={styles.iconSize12Mgr5}
                    />
                    <Text style={styles.fontSize12Grray}>{item.like}</Text>
                    <Avatar
                      source={icon.iconViewWhite}
                      containerStyle={styles.iconSize12Mgr5}
                    />
                    <Text style={styles.fontSize12Grray}>{item.view}</Text>
                  </View>
                  <View style={styles.RowBetween}>
                    <Text
                      style={
                        moment().isAfter(
                          moment(item.date, 'DD [tháng] M YYYY'),
                          'day',
                        )
                          ? styles.dateTime
                          : styles.dateTimeFuture
                      }>
                      {item.dataBooking.dateViewing}
                    </Text>
                    <Text
                      style={
                        moment().isAfter(
                          moment(item.date, 'DD [tháng] M YYYY'),
                          'day',
                        )
                          ? styles.dateTime
                          : styles.dateTimeFuture
                      }>
                      {item.dataBooking.timeViewing}
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <TouchableOpacity style={[styles.btnTheme2]} onPress={() => {}}>
        <Image source={icon.iconUniverse} style={styles.IconStyle2} />
        <Text style={(styles.fontSize14, styles.fontBold600)}>
          Nâng cấp lên{'\n'}gói cao cấp
        </Text>
      </TouchableOpacity>
    </WrapBgBox>
  );
};

export default MyProfileUser;
