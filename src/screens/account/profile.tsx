import React from 'react';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import moment from 'moment';
import {Avatar, LinearProgress} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import {images, icon} from '../../../assets/constants';
import {styles} from '../../../assets/styles';
import WrapBgBox from '../../conponents/wrapBgBox';

const MyProfile = ({navigation}: any) => {
  const isAvatar = true;
  return (
    <WrapBgBox>
      <View style={[styles.avatarProfile]}>
        <ImageBackground
          source={images.bgHeaderLogin}
          resizeMode="contain"
          style={[styles.ImgBgBottom]}
        />
        <ImageBackground
          source={images.imgHeaderRegister2}
          resizeMode="contain"
          style={[styles.ImgIconBag]}
        />
        <View style={[styles.paddingBox]}>
          <View style={styles.RowCenterBetween}>
            <TouchableOpacity>
              <Text style={styles.buttonTmpSm}>Nâng cấp</Text>
            </TouchableOpacity>
            <View style={styles.avataProfileEllipse}>
              <Avatar
                size={80}
                rounded
                source={isAvatar ? images.AvatarDemo2 : images.avataDefault}
                onPress={() => console.log('Works!')}
                activeOpacity={0.8}
              />
            </View>
            <View>
              <View style={styles.RowBetween}>
                <TouchableOpacity onPress={() => navigation.navigate('notify')}>
                  <View style={styles.buttonEllipseSm}>
                    <Avatar
                      source={icon.iconNotify}
                      containerStyle={styles.iconSize16}
                    />
                    <View style={styles.notifyNew} />
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.buttonEllipseSm, styles.marginLeft12]}
                  onPress={() => navigation.navigate('setting')}>
                  <Avatar
                    source={icon.iconSetting}
                    containerStyle={styles.iconSize16}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.alignCenter}>
            <Text style={styles.nameProfile}>Mogwrr Ohnf</Text>
            <Text style={styles.status}>
              Là một người luôn luôn lo xa và mang nhiều tâm tư suy nghĩ. Mông
              lung về tương lai sẽ xảy đến Chính sửa
            </Text>
            <View style={styles.Row}>
              <View style={styles.Row}>
                <Avatar
                  source={icon.iconCalendar}
                  containerStyle={styles.iconSize16Mgr5}
                />
                <Text style={[styles.Row, styles.actionItem]}>23/06/1996</Text>
              </View>
              <View style={styles.Row}>
                <Avatar
                  source={icon.iconZodiac}
                  containerStyle={styles.iconSize16Mgr5}
                />
                <Text style={styles.actionItem}>Cung Sư tử</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.paddingBox, styles.boxProgress]}>
          <View style={styles.RowBetween}>
            <Avatar
              source={icon.iconDecorate1}
              containerStyle={styles.iconSize24}
            />
            <Avatar
              source={icon.iconDecorate2}
              containerStyle={styles.iconSize24}
            />
          </View>
          <LinearProgress
            style={styles.progress}
            trackColor="rgba(0, 0, 0, 0.5)"
            color="#F78B73"
            value={0.5}
            variant="determinate"
          />
          <View style={styles.RowBetween}>
            <View style={styles.Row}>
              <Avatar
                source={icon.iconViewPng}
                containerStyle={styles.iconSize16Mgr5}
              />
              <Text style={styles.fontSize12}>500</Text>
            </View>
            <Text style={styles.fontSize12}>500</Text>
          </View>
        </View>
      </View>
      <View style={[styles.itemContainer, styles.paddingBox]}>
        <Text style={styles.titleBox}>Lịch đã đặt</Text>
        <ScrollView>
          {DATA.map(item => (
            <TouchableOpacity key={item.id} onPress={() => navigation.goBack()}>
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

export default MyProfile;
