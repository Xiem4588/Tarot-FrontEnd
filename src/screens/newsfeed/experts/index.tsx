import React from 'react';
import {Avatar, Text} from 'react-native-elements';
import {TouchableOpacity, View} from 'react-native';
import {styles} from '../../../assets/styles';
import {images} from '../../../assets/constants';
import {
  ScrollView,
  GestureHandlerRootView,
  NativeViewGestureHandler,
} from 'react-native-gesture-handler';
import IconMateria from 'react-native-vector-icons/MaterialCommunityIcons';

const ScreenExperts = ({navigation}: any) => {
  return (
    <GestureHandlerRootView style={[styles.flexBox]}>
      <View style={[styles.paddingTop90]}>
        <NativeViewGestureHandler>
          <ScrollView>
            <View style={[styles.paddingHorizontal18]}>
              <Text style={[styles.fonsize20White]}>
                Chuyên gia xem bài Tarot
              </Text>
              <Text
                style={[
                  styles.fonsize14White,
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
              {DATA.map((item, index) => (
                <TouchableOpacity
                  key={item.id}
                  onPress={() => navigation.navigate('booking', {id: item.id})}
                  style={[
                    styles.width50,
                    styles.paddingHorizontal9,
                    index % 2 === 0 && styles.marginTopA50,
                  ]}>
                  <View key={item.id} style={styles.itemTimeline}>
                    <View style={styles.flexBox}>
                      <Text style={[styles.nameItemBlack16]}>{item.name}</Text>
                      <Text
                        numberOfLines={3}
                        style={[
                          styles.fontSize10,
                          styles.marginBottom10,
                          styles.colorBlack,
                        ]}>
                        {item.content}
                      </Text>
                    </View>
                    <View style={styles.RowBetween}>
                      <View style={[styles.marginLeftBottomA18]}>
                        <Avatar
                          source={item.avatar}
                          containerStyle={styles.avatarImage}
                        />
                      </View>
                      <View style={[styles.marginTopAuto]}>
                        <View style={styles.RowAlignItems}>
                          <IconMateria name="heart" size={16} color={'red'} />
                          <Text
                            style={[
                              styles.fontSize12,
                              styles.marginLeft5,
                              styles.colorBlack,
                            ]}>
                            {item.like}
                          </Text>
                        </View>
                        <View
                          style={[styles.RowAlignItems, styles.paddingTop5]}>
                          <IconMateria
                            name="eye-outline"
                            size={14}
                            color={'#000'}
                          />
                          <Text
                            style={[
                              styles.fontSize12,
                              styles.marginLeft5,
                              styles.colorBlack,
                            ]}>
                            {item.view}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </NativeViewGestureHandler>
      </View>
    </GestureHandlerRootView>
  );
};

interface DataProps {
  id: string;
  name: string;
  content: string;
  like: string;
  view: string;
  avatar: object;
}
const DATA: DataProps[] = [
  {
    id: '1',
    name: 'Lee Jae‑wook',
    content:
      'Có hơn 8 năm kinh nghiệm Có xem khuya & lịch gấp trog ngày (có tính thêm ...',
    like: '14,087',
    view: '25,635',
    avatar: images.AvatarDemo1,
  },
  {
    id: '2',
    name: 'Seo Yul',
    content: '6 years of experient - RMIT university student',
    like: '14,087',
    view: '25,635',
    avatar: images.AvatarDemo2,
  },
  {
    id: '3',
    name: 'Lee Jae‑wook',
    content: '6 years of experient - RMIT university student',
    like: '14,087',
    view: '25,635',
    avatar: images.AvatarDemo1,
  },
  {
    id: '4',
    name: 'Lee Jae‑wook',
    content:
      'Có hơn 8 năm kinh nghiệm Có xem khuya & lịch gấp trog ngày (có tính thêm ...',
    like: '14,087',
    view: '25,635',
    avatar: images.AvatarDemo1,
  },
  {
    id: '5',
    name: 'Seo Yul',
    content: '6 years of experient - RMIT university student',
    like: '14,087',
    view: '25,635',
    avatar: images.AvatarDemo2,
  },
  {
    id: '6',
    name: 'Lee Jae‑wook',
    content: '6 years of experient - RMIT university student',
    like: '14,087',
    view: '25,635',
    avatar: images.AvatarDemo1,
  },
];

export default ScreenExperts;
