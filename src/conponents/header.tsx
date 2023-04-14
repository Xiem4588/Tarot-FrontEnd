import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from '../../assets/styles';
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
          <TouchableOpacity onPress={() => {}}>
            <View style={styles.RowCenterBetween}>
              {name === 'notify' ? (
                <Text style={[styles.textWhiteGrray, styles.fontSize16]}>
                  Đọc tất cả
                </Text>
              ) : name === 'setting' ? (
                <Text
                  style={[
                    styles.textOrange,
                    styles.fontSize18,
                    styles.fontBold600,
                  ]}>
                  Lưu
                </Text>
              ) : (
                ''
              )}
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};
export default Header;
