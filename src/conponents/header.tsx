import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from '../assets/styles';
import IconMateria from 'react-native-vector-icons/MaterialCommunityIcons';
interface HeaderProps {
  navigation?: any;
  title?: string;
  name?: string;
}
const Header = ({navigation, title, name}: HeaderProps) => {
  return (
    <>
      <View style={styles.paddingTop50Ios15Adroid}>
        <View style={[styles.RowBetween, styles.paddingHorizontal18]}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View style={styles.RowCenterBetween}>
              <IconMateria
                name="keyboard-backspace"
                size={28}
                color="#ffffff"
              />
              <Text
                style={[
                  styles.textWhite,
                  styles.fontSize18,
                  styles.fontBold600,
                  styles.marginLeft10,
                ]}>
                {title}
              </Text>
            </View>
          </TouchableOpacity>
          <View style={styles.RowCenterBetween}>
            {name === 'notify' ? (
              <TouchableOpacity onPress={() => {}}>
                <Text style={[styles.textWhiteGrray, styles.fontSize16]}>
                  Đọc tất cả
                </Text>
              </TouchableOpacity>
            ) : name === 'setting' ? (
              <TouchableOpacity onPress={() => {}}>
                <Text
                  style={[
                    styles.textOrange,
                    styles.fontSize18,
                    styles.fontBold600,
                  ]}>
                  Lưu
                </Text>
              </TouchableOpacity>
            ) : name === 'booking' ? (
              <>
                <TouchableOpacity onPress={() => {}}>
                  <View style={styles.buttonEllipseSm}>
                    <IconMateria name="heart" size={18} color={'red'} />
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.buttonEllipseSm, styles.marginLeft12]}
                  onPress={() => {}}>
                  <IconMateria name="export-variant" size={18} color={'#fff'} />
                </TouchableOpacity>
              </>
            ) : name === 'payment' ? (
              <TouchableOpacity
                style={[styles.buttonEllipseSm, styles.marginLeft12]}
                onPress={() => {}}>
                <IconMateria
                  name="comment-text-outline"
                  size={16}
                  color="#fff"
                />
              </TouchableOpacity>
            ) : (
              ''
            )}
          </View>
        </View>
      </View>
    </>
  );
};
export default Header;
