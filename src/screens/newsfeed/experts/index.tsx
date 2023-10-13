import React, {useState} from 'react';
import {Text} from 'react-native-elements';
import {TouchableOpacity, View, ScrollView, Image} from 'react-native';
import {styles} from '../../../assets/styles';
import IconMateria from 'react-native-vector-icons/MaterialCommunityIcons';
import {getTypeUser} from '../../../services';
import {images} from '../../../assets/constants';
import {navProps, typeUser} from './types';

const ScreenExperts = ({navigation}: navProps) => {
  const [isUsers, setUsers] = useState<typeUser[]>([]);
  const getUsers = async () => {
    try {
      const res = await getTypeUser('expert');
      const users = res.data;
      setUsers(users);
    } catch (error) {
      return error;
    }
  };
  getUsers();
  return (
    <View style={[styles.flexBox, styles.paddingTop90]}>
      <ScrollView>
        <View style={[styles.paddingHorizontal18]}>
          <Text style={[styles.fontsize20White]}>Chuyên gia xem bài Tarot</Text>
          <Text
            style={[
              styles.fontsize14White,
              styles.paddingVertical10,
              styles.marginBottom10,
            ]}>
            Thể hiện mong muốn sâu sắc nhất của bạn. Điều gì sẽ đến với bạn?
          </Text>
        </View>
        <View
          style={[
            styles.RowWrap,
            styles.paddingHorizontal9,
            styles.paddingTop50,
          ]}>
          {isUsers &&
            isUsers.map((user, index) => (
              <TouchableOpacity
                key={user._id}
                onPress={() => navigation.navigate('booking', {id: user._id})}
                style={[
                  styles.width50,
                  styles.paddingHorizontal9,
                  index % 2 === 0 && styles.marginTopA50,
                ]}>
                <View key={user._id} style={styles.itemTimeline}>
                  <View style={styles.flexBox}>
                    <Text style={[styles.nameItemBlack16]}>
                      {user.fullName
                        ? user.fullName
                        : user.email.slice(0, user.email.indexOf('@'))}
                    </Text>
                    <Text
                      numberOfLines={3}
                      style={[
                        styles.fontSize12,
                        styles.marginBottom10,
                        styles.colorBlack,
                      ]}>
                      {user.desc ? (
                        user.desc
                      ) : (
                        <Text style={[styles.colorGrray5, styles.fontSize10]}>
                          Không có mô tả nào!
                        </Text>
                      )}
                    </Text>
                  </View>
                  <View style={styles.RowBetween}>
                    <View style={[styles.marginLeftBottomA18]}>
                      <Image
                        source={
                          user.avatar
                            ? {uri: user.avatar}
                            : images.avatarDefault
                        }
                        style={[styles.avatarImage]}
                      />
                    </View>
                    <View style={[styles.marginTopAuto]}>
                      <View style={styles.RowAlignItemsRight}>
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
                      <View
                        style={[styles.RowAlignItemsRight, styles.paddingTop5]}>
                        <IconMateria
                          name="eye-outline"
                          size={16}
                          color={'#000'}
                        />
                        <Text
                          style={[
                            styles.fontSize12,
                            styles.marginLeft5,
                            styles.colorBlack,
                          ]}>
                          {user.view ? user.view : '0'}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default ScreenExperts;
