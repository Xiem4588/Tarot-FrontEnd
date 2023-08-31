import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {Avatar} from 'react-native-elements';
import {images} from '../../../assets/constants';
import {styles} from '../../../assets/styles';
import WrapBgBox from '../../../conponents/wrapBgBox';
import Header from '../../../conponents/header';
import {LanguageSwitcher} from '../../../conponents/LanguageSwitcher';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useTranslation} from 'react-i18next';
import i18n from '../../../languages/i18n';
import {useDispatch} from 'react-redux';

type DataProps = {
  name: string;
  dateOfBirth: string;
  describe: string;
  language: string;
};
const DATA: DataProps = {
  name: 'Mogwrr Ohnf',
  dateOfBirth: '23/06/1996',
  describe: 'Là một người...',
  language: 'Vietnamese',
};

const SettingScreen = ({navigation}: any) => {
  useTranslation();
  // Xóa token khỏi AsyncStorage khi người dùng đăng xuất
  const dispatch = useDispatch();
  const signOut = async () => {
    dispatch({
      type: 'LOG_OUT',
    });
  };
  const handleSetting = () => {
    console.log('----> setting');
  };

  const handleLogout = () => {
    signOut();
    navigation.navigate('user');
  };

  return (
    <WrapBgBox>
      <Header
        navigation={navigation}
        title={String(i18n.t('setting'))}
        name="setting"
      />
      <ScrollView>
        <View style={[styles.alignItems, styles.paddingVertical30]}>
          <View style={[styles.avataProfileEllipse]}>
            <Avatar size={80} source={images.AvatarDemo1} />
          </View>
        </View>
        <View style={styles.paddingHorizontal18}>
          <Text style={styles.titleBox}>{i18n.t('account')}</Text>
          <View style={[styles.RowBetween, styles.paddingVertical10]}>
            <Text style={styles.textSize16}>{i18n.t('name')}</Text>
            <TouchableOpacity
              style={styles.RowAlignItems}
              onPress={handleSetting}>
              <Text style={styles.textSize16}>{DATA.name}</Text>
              <MIcon name="chevron-right" size={28} color={'#fff'} />
            </TouchableOpacity>
          </View>
          <View style={[styles.RowBetween, styles.paddingVertical10]}>
            <Text style={styles.textSize16}>{i18n.t('birth')}</Text>
            <TouchableOpacity
              style={styles.RowAlignItems}
              onPress={handleSetting}>
              <Text style={styles.textSize16}>{DATA.dateOfBirth}</Text>
              <MIcon name="chevron-right" size={28} color={'#fff'} />
            </TouchableOpacity>
          </View>
          <View style={[styles.RowBetween, styles.paddingVertical10]}>
            <Text style={styles.textSize16}>{i18n.t('describe')}</Text>
            <TouchableOpacity
              style={styles.RowAlignItems}
              onPress={handleSetting}>
              <Text style={styles.textSize16}>{DATA.describe}</Text>
              <MIcon name="chevron-right" size={28} color={'#fff'} />
            </TouchableOpacity>
          </View>
          <Text style={[styles.titleBox, styles.paddingTop30]}>
            {i18n.t('other')}
          </Text>
          <View style={[styles.RowBetween, styles.paddingVertical10]}>
            <Text style={styles.textSize16}>{i18n.t('language')}</Text>
            <View style={styles.RowAlignItems}>
              <LanguageSwitcher />
              <MIcon name="chevron-right" size={28} color={'#fff'} />
            </View>
          </View>
        </View>
        <View style={[styles.alignItems, styles.flexBox]}>
          <Avatar
            source={images.imgSettingDecorate}
            size={150}
            containerStyle={styles.resizeModeContain}
          />
          <TouchableOpacity onPress={handleLogout}>
            <Text style={styles.buttonTmpSmWhite05}>{i18n.t('logout')}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </WrapBgBox>
  );
};

export default SettingScreen;
