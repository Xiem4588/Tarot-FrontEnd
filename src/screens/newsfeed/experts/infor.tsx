import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Avatar} from 'react-native-elements';
import {icon, images} from '../../../assets/constants';
import {styles} from '../../../assets/styles';
import IconMateria from 'react-native-vector-icons/MaterialCommunityIcons';

const Infor = () => {
  return (
    <View
      style={[
        styles.RowAlignItems,
        styles.paddingHorizontal18,
        styles.marginBottom20,
      ]}>
      <View style={styles.avatarBoxImageTopA}>
        <Avatar
          source={images.AvatarDemo1}
          containerStyle={styles.avatarImage114}
        />
      </View>
      <View style={styles.boxInfo}>
        <Text style={styles.nameItemBlack16}>Lee Jae‑wook</Text>
        <Text
          style={[styles.fontSize12, styles.marginBottom10, styles.colorBlack]}>
          Có hơn 8 năm kinh nghiệm {'\n'} Có xem khuya & lịch gấp trog ngày (có
          tính thêm phụ phí)
        </Text>
        <View style={styles.RowAlignItems}>
          <View style={styles.RowAlignItems}>
            <IconMateria name="heart" size={16} color={'red'} />
            <Text
              style={[
                styles.fontSize12,
                styles.marginLeft5,
                styles.colorBlack,
              ]}>
              14,087
            </Text>
          </View>
          <View style={[styles.RowAlignItems, styles.marginLeft12]}>
            <IconMateria name="eye-outline" size={16} color={'#000'} />
            <Text
              style={[
                styles.fontSize12,
                styles.marginLeft5,
                styles.colorBlack,
              ]}>
              25,635
            </Text>
          </View>
          <View style={[styles.RowAlignItems, styles.marginLeft12]}>
            <Avatar
              source={icon.iconInstagram}
              containerStyle={styles.iconSize12Mgr5}
            />
            <TouchableOpacity onPress={() => {}}>
              <Text style={[styles.fontSize12, styles.colorBlue]}>
                Instagram
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Infor;
