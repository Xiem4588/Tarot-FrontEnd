import React from 'react';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import {Avatar, LinearProgress} from 'react-native-elements';
import {images, icon} from '../../../../assets/constants';
import {styles} from '../../../../assets/styles';
import IconMateria from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props {
  navigation: any;
  expert?: string;
}

const InforProfile = ({navigation, expert}: Props) => {
  const isAvatar = true;
  return (
    <View style={[styles.avatarProfile]}>
      {!expert ? (
        <>
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
        </>
      ) : (
        ''
      )}
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
                  <IconMateria name="bell-outline" size={18} color="#ffffff" />
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
      {!expert ? (
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
      ) : (
        ''
      )}
    </View>
  );
};

export default InforProfile;
