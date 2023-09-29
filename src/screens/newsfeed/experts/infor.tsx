import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {Avatar} from 'react-native-elements';
import {icon, images} from '../../../assets/constants';
import {styles} from '../../../assets/styles';
import IconMateria from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector} from 'react-redux';

const Infor = () => {
  const user = useSelector((state: any) => state.userDetail.user);
  console.log('0000   ======> user', user);
  return (
    <>
      {user ? (
        <View
          style={[
            styles.RowAlignItems,
            styles.paddingHorizontal18,
            styles.marginBottom20,
          ]}>
          <View style={styles.avatarBoxImageTopA}>
            <Image
              source={user.avatar ? {uri: user.avatar} : images.avatarDefault}
              style={styles.avatarImage114}
            />
          </View>
          <View style={styles.boxInfo}>
            <Text style={styles.nameItemBlack16}>{user.fullName}</Text>
            <Text
              style={[
                styles.fontSize12,
                styles.marginBottom10,
                styles.colorBlack,
              ]}>
              {user.desc}
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
                  {user.like ? user.like : '0'}
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
                  {user.view ? user.view : '0'}
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
      ) : null}
    </>
  );
};

export default Infor;
