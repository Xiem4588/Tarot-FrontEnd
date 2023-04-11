import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Avatar} from 'react-native-elements';
import {ScrollView, TouchableHighlight} from 'react-native-gesture-handler';
import {icon} from '../../../assets/constants';
import {styles} from '../../../assets/styles';
import WrapBgBox from '../../conponents/wrapBgBox';

type DataProps = {
  id: string;
  title: string;
  content: string;
  date: string;
};
const DATA: DataProps[] = [
  {
    id: '1',
    title: 'Thanh toán thành công',
    content: 'Lee Jae‑wook',
    date: '3h',
  },
  {
    id: '2',
    title: 'Bạn đã đặt lịch thành công',
    content: 'Lee Jae‑wook',
    date: '1 Day',
  },
  {
    id: '3',
    title: 'Ngày hôm nay của bạn thế nào',
    content: 'Hãy đón nhận những thông điệp sắp tới',
    date: '1 Week',
  },
  {
    id: '4',
    title: 'Công việc của bạn dạo này ổn không?',
    content: 'Hãy đón nhận những thông điệp sắp tới',
    date: '1 Mon',
  },
];

const NotifyScreen = ({navigation}: any) => {
  const [isReadNotify, setIsReadNotify] = useState(DATA.map(() => true));

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
                style={[styles.textWhite, styles.fontSize18, styles.fontBold600]}>
                Thông báo
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableHighlight onPress={() => navigation.goBack()}>
            <View style={styles.RowCenterBetween}>
              <Text style={[styles.textWhiteGrray, styles.fontSize16]}>
                Đọc tất cả
              </Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
      <View style={[styles.itemContainer, styles.paddingBox]}>
        <ScrollView>
          {DATA.map((item, index) => (
            <TouchableOpacity
              key={item.id}
              onPress={() => {
                const updatedIsReadNotify = [...isReadNotify];
                updatedIsReadNotify[index] = false;
                setIsReadNotify(updatedIsReadNotify);
                // storeData(updatedIsReadNotify);
              }}>
              <View style={styles.itemNotify}>
                {isReadNotify[index] ? (
                  <View style={styles.checkNotifyNew} />
                ) : (
                  ''
                )}
                <View style={styles.boxInfo}>
                  <Text style={styles.nameItem}>{item.title}</Text>
                  <Text style={[styles.fonsize12White, styles.paddingTop5]}>
                    {item.content}
                  </Text>
                </View>
                <Text style={[styles.fontSize14Grray, styles.marginLeft12]}>
                  {item.date}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </WrapBgBox>
  );
};

export default NotifyScreen;
