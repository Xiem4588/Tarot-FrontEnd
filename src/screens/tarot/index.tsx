import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Avatar} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import {images, icon} from '../../../assets/constants';
import {styles} from '../../../assets/styles';
import WrapBgBox from '../../conponents/wrapBgBox';
import IconMateria from 'react-native-vector-icons/MaterialCommunityIcons';

const ScreenToday = ({navigation}: any) => {
  const isAvatar = true;
  return (
    <WrapBgBox>
      <View style={[styles.avatarProfile]}>
        <ImageBackground
          source={images.bgHeaderLogin}
          resizeMode="contain"
          style={[styles.ImgBgBottom]}
        />
        <Image source={icon.iconStar} style={styles.IconStarBg} />
        <View style={[styles.paddingBox]}>
          <View style={styles.RowAlignItems}>
            <Avatar
              size={48}
              rounded
              source={isAvatar ? images.AvatarDemo2 : images.avataDefault}
            />
            <Text style={[styles.marginLeft10, styles.fontBold600]}>
              Hi, Mogwrr Ohnf!
            </Text>
          </View>
          <View style={styles.RowBetween}>
            <View style={[styles.marginTop20, styles.flex1]}>
              <Text style={[styles.fontSize18, styles.fontBold600]}>
                Điều gì sắp tới sẽ đến với bạn?
              </Text>
              <Text style={[styles.fontSize14, styles.marginTop5]}>
                Hãy đón nhận những thông điệp theo một cách tích cực.
              </Text>
            </View>
            <View style={[styles.width120, styles.alignCenter]}>
              <Image
                source={images.hand}
                style={{resizeMode: 'contain', height: 120}}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.itemContainer, styles.paddingBox]}>
        <Text style={styles.titleBox}>Phương hướng dành cho bạn</Text>
        <ScrollView>
          {DATA.map(item => (
            <TouchableOpacity
              key={item.id}
              onPress={() => navigation.navigate('choose')}>
              <View
                style={[
                  styles.RowCenterBetween,
                  styles.boxWhiteRadius,
                  styles.marginBottom15,
                ]}>
                <Text style={[styles.fontSize16, styles.flex1]}>
                  {item.ques}
                </Text>
                <Text style={[styles.marginLeft12, styles.width40]}>
                  <IconMateria name="chevron-right" size={24} />
                </Text>
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
          Thông điệp {'\n'} ngày hôm nay
        </Text>
      </TouchableOpacity>
    </WrapBgBox>
  );
};

interface DataProps {
  id: string;
  ques: string;
}
const DATA: DataProps[] = [
  {
    id: '1',
    ques: 'Tình cảm của người đó dành cho bạn như thế nào?',
  },
  {
    id: '2',
    ques: 'Cơ hội công việc nào đang đến với bạn?',
  },
  {
    id: '3',
    ques: 'Bạn và người ấy sẽ kéo dài được bao lâu',
  },
  {
    id: '4',
    ques: 'Cơ hội công việc nào đang đến với bạn?',
  },
  {
    id: '5',
    ques: 'Có người nào đó đang thầm thương trộm nhớ bạn?',
  },
  {
    id: '6',
    ques: 'Có người nào đó đang thầm thương trộm nhớ bạn?',
  },
];

export default ScreenToday;
