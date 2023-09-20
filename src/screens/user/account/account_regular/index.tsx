import React from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import moment from 'moment';
import {Avatar} from 'react-native-elements';
import {images, icon} from '../../../../assets/constants';
import {styles} from '../../../../assets/styles';
import WrapBgBox from '../../../../conponents/wrapBgBox';
import InforProfile from '../component/infor';

interface Props {
  navigation: any;
}

const MyProfileUser = ({navigation}: Props) => {
  return (
    <WrapBgBox>
      <InforProfile navigation={navigation} />
      <View
        style={[styles.itemContainer, styles.paddingBox, styles.marginTop20]}>
        <Text style={styles.titleBox}>Lịch đã đặt</Text>
        <ScrollView>
          {DATA.map(item => (
            <TouchableOpacity key={item.id} onPress={() => {}}>
              <View style={styles.item}>
                <View style={styles.avatarItem}>
                  <Avatar
                    source={item.avatar}
                    containerStyle={styles.avatarImage}
                  />
                </View>
                <View style={styles.flexBox}>
                  <Text style={styles.nameItem}>{item.name}</Text>
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
                      {item.date}
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
                      {item.time}
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

interface DataProps {
  id: string;
  name: string;
  date: string;
  time: string;
  like: string;
  view: string;
  avatar: object;
}
const DATA: DataProps[] = [
  {
    id: '1',
    name: 'Lee Jae‑wook',
    date: '21 tháng 9 2023',
    time: '09:55 AM',
    like: '14,087',
    view: '25,635',
    avatar: images.AvatarDemo1,
  },
  {
    id: '2',
    name: 'Seo Yul',
    date: '23 tháng 3 2023',
    time: '09:55 AM',
    like: '14,087',
    view: '25,635',
    avatar: images.AvatarDemo2,
  },
  {
    id: '3',
    name: 'Lee Jae‑wook',
    date: '10 tháng 1 2023',
    time: '09:55 AM',
    like: '14,087',
    view: '25,635',
    avatar: images.AvatarDemo1,
  },
];

export default MyProfileUser;
