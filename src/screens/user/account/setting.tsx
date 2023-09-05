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
import {useDispatch, useSelector} from 'react-redux';

const SettingScreen = ({navigation}: any) => {
  // Language
  useTranslation();

  // get data from store
  const user = useSelector((state: any) => state.account?.user);

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
            <Text style={[styles.textSize16White, styles.marginRight10]}>
              {i18n.t('name')}
            </Text>
            <TouchableOpacity
              style={styles.RowAlignItems}
              onPress={handleSetting}>
              <Text style={[styles.textSize16White, styles.marginRight10]}>
                {user?.name ? user.name : '---------'}
              </Text>
              <MIcon name="file-edit-outline" size={16} color={'#fff'} />
            </TouchableOpacity>
          </View>
          <View style={[styles.RowBetween, styles.paddingVertical10]}>
            <Text style={[styles.textSize16White, styles.marginRight10]}>
              {i18n.t('birth')}
            </Text>
            <TouchableOpacity
              style={styles.RowAlignItems}
              onPress={handleSetting}>
              <Text style={[styles.textSize16White, styles.marginRight10]}>
                {user?.date_of_birth ? user.date_of_birth : 'dd/mm/yyyy'}
              </Text>
              <MIcon name="file-edit-outline" size={16} color={'#fff'} />
            </TouchableOpacity>
          </View>
          <View style={[styles.RowBetween, styles.paddingVertical10]}>
            <Text style={[styles.textSize16White, styles.marginRight10]}>
              {i18n.t('describe')}
            </Text>
            <TouchableOpacity
              style={styles.RowAlignItems}
              onPress={handleSetting}>
              <Text style={[styles.textSize16White, styles.marginRight10]}>
                {user?.desc ? user.desc : '---------'}
              </Text>
              <MIcon name="file-edit-outline" size={16} color={'#fff'} />
            </TouchableOpacity>
          </View>
          <Text style={[styles.titleBox, styles.paddingTop30]}>
            {i18n.t('other')}
          </Text>
          <View style={[styles.RowBetween, styles.paddingVertical10]}>
            <Text style={[styles.textSize16White, styles.marginRight10]}>
              {i18n.t('language')}
            </Text>
            <View style={styles.RowAlignItems}>
              <LanguageSwitcher />
              <MIcon
                style={styles.marginLeft10}
                name="file-edit-outline"
                size={16}
                color={'#fff'}
              />
            </View>
          </View>
          <View style={[styles.RowBetween, styles.paddingVertical10]}>
            <Text style={[styles.textSize16White, styles.marginRight10]}>
              {i18n.t('Email')}
            </Text>
            <View style={[styles.RowAlignItems]}>
              <Text style={[styles.textSize16, styles.colorGrrayBold]}>
                {user?.email}
              </Text>
            </View>
          </View>
          <View style={[styles.RowBetween, styles.paddingVertical10]}>
            <Text style={[styles.textSize16White, styles.marginRight10]}>
              {i18n.t('Số điện thoại')}
            </Text>
            <TouchableOpacity
              style={styles.RowAlignItems}
              onPress={handleSetting}>
              <Text
                style={[
                  styles.colorGrray,
                  [styles.textSize16White, styles.marginRight10],
                ]}>
                {user?.tel ? user.tel : '---------'}
              </Text>
              <MIcon name="file-edit-outline" size={16} color={'#fff'} />
            </TouchableOpacity>
          </View>
          <View style={[styles.RowBetween, styles.paddingVertical10]}>
            <Text style={[styles.textSize16White, styles.marginRight10]}>
              {i18n.t('Đặt lại mật khẩu')}
            </Text>
            <TouchableOpacity
              style={styles.RowAlignItems}
              onPress={handleSetting}>
              <Text style={styles.colorGrray}>**********</Text>
              <MIcon
                style={styles.marginLeft10}
                name="file-edit-outline"
                size={16}
                color={'#fff'}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={[styles.alignItems, styles.flexBox, styles.marginBottom50]}>
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
