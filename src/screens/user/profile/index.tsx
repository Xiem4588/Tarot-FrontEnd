import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import moment from 'moment';
import {Avatar, LinearProgress} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import {images, icon} from '../../../assets/constants';
import {styles} from '../../../assets/styles';
import WrapBgBox from '../../../conponents/wrapBgBox';
import IconMateria from 'react-native-vector-icons/MaterialCommunityIcons';

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
            <TouchableOpacity
              style={[styles.buttonEllipseSm]}
              onPress={() => navigation.navigate('setting')}>
              <IconMateria name="cog-outline" size={18} color="#ffffff" />
            </TouchableOpacity>
            <View>
              <Avatar
                size={66}
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
                    <IconMateria
                      name="bell-outline"
                      size={18}
                      color="#ffffff"
                    />
                    <View style={styles.notifyNew} />
                  </View>
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
      <TouchableOpacity
        style={[styles.btnTheme2]}
        onPress={() => navigation.navigate('choose')}>
        <Image
          source={icon.iconUniverse}
          style={{resizeMode: 'contain', height: 38}}
        />
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

export default MyProfile;
