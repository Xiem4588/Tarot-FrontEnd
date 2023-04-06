import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {Avatar} from 'react-native-elements';
import {ScrollView, TouchableHighlight} from 'react-native-gesture-handler';
import {images, icon} from '../../../assets/constants';
import {styles} from '../../../assets/styles';
import WrapBgBox from '../../conponents/wrapBgBox';

type DataProps = {
  id: string;
  name: string;
  dateOfBirth: string;
  describe: string;
  language: string;
};
const DATA: DataProps = {
  id: '1',
  name: 'Mogwrr Ohnf',
  dateOfBirth: '23/06/1996',
  describe: 'Là một người...',
  language: 'Vietnamese',
};

const SettingScreen = ({navigation}: any) => {
  return (
    <WrapBgBox>
      <View style={styles.paddingTop50Ios15Adroid}>
        <View style={[styles.RowBetween, styles.paddingHorizontal18]}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View style={styles.RowCenterBetween}>
              <Avatar
                source={icon.iconBackWhite}
                containerStyle={styles.iconBack24}
              />
              <Text
                style={[styles.textWhite, styles.fontSize18, styles.fontBold]}>
                Cài đặt
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableHighlight onPress={() => navigation.goBack()}>
            <View style={styles.RowCenterBetween}>
              <Text
                style={[styles.textOrange, styles.fontSize18, styles.fontBold]}>
                Lưu
              </Text>
            </View>
          </TouchableHighlight>
        </View>
        <ScrollView>
          <View style={[styles.alignItems, styles.paddingVertical30]}>
            <View style={[styles.avataProfileEllipse]}>
              <Avatar size={80} source={images.AvatarDemo1} />
            </View>
          </View>
          <View style={styles.paddingHorizontal18}>
            <Text style={styles.titleBox}>Lịch đã đặt</Text>
            <View style={[styles.RowBetween, styles.paddingVertical10]}>
              <Text style={styles.textSize16}>Tên</Text>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={styles.textSize16}>{DATA.name}</Text>
              </TouchableOpacity>
            </View>
            <View style={[styles.RowBetween, styles.paddingVertical10]}>
              <Text style={styles.textSize16}>Ngày sinh</Text>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={styles.textSize16}>{DATA.dateOfBirth}</Text>
              </TouchableOpacity>
            </View>
            <View style={[styles.RowBetween, styles.paddingVertical10]}>
              <Text style={styles.textSize16}>Mô tả</Text>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={styles.textSize16}>{DATA.describe}</Text>
              </TouchableOpacity>
            </View>
            <Text style={[styles.titleBox, styles.paddingTop30]}>
              Cài đặt khác
            </Text>
            <View style={[styles.RowBetween, styles.paddingVertical10]}>
              <Text style={styles.textSize16}>Ngôn ngữ</Text>
              <TouchableOpacity
                style={styles.RowAlignItems}
                onPress={() => navigation.goBack()}>
                <Text style={styles.textSize16}>{DATA.language}</Text>
                <Avatar
                  source={icon.iconArrowRight}
                  containerStyle={styles.iconSize16}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={[styles.alignItems, styles.flexBox]}>
            <Avatar
              source={images.imgSettingDecorate}
              size={150}
              containerStyle={styles.resizeModeContain}
            />
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={styles.buttonTmpSmWhite05}>Đăng xuất</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </WrapBgBox>
  );
};

export default SettingScreen;
