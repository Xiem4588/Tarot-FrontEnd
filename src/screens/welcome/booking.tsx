import React, {FC, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  DatePickerIOS,
  Modal,
} from 'react-native';
import {Avatar} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import {icon, images} from '../../../assets/constants';
import {styles} from '../../../assets/styles';
import WrapBgBox from '../../conponents/wrapBgBox';
import Carousel from 'react-native-snap-carousel';
import CalendarPicker from 'react-native-calendar-picker';

import moment from 'moment';

const {width} = Dimensions.get('window');

const data = [
  {
    id: '1',
    title: '1 vấn đề',
    describe: '3 câu hỏi + 1 câu yes/no',
    price: '150k',
  },
  {
    id: '2',
    title: '30 phút',
    describe: 'Không giới hạn câu hỏi, vấn đề + 1 lá thông điệp kết nối',
    price: '200K',
  },
  {
    id: '3',
    title: '1 Tiếng',
    describe: '3 câu hỏi + 1 câu yes/no',
    price: '300K',
  },
  {
    id: '4',
    title: '2 Tiếng',
    describe: '3 câu hỏi + 1 câu yes/no',
    price: '500k',
  },
  {
    id: '5',
    title: '3 vấn đề',
    describe: '3 câu hỏi + 1 câu yes/no',
    price: '750k',
  },
  {
    id: '6',
    title: '5 vấn đề',
    describe: '3 câu hỏi + 1 câu yes/no',
    price: '1000k',
  },
];

// Shop
type ItemProps = {
  id: string;
  title: string;
  describe: string;
  price: string;
};
const Item: FC<ItemProps> = ({id, title, describe, price}) => (
  <View key={id} style={styles.itemCarousel}>
    <View>
      <Text style={styles.nameItemBlack16}>{title}</Text>
      <Text style={[styles.fontSize12, styles.marginBottom10]}>{describe}</Text>
    </View>
    <Text
      style={[
        styles.fontSize16,
        styles.colorOrange,
        styles.marginTopAuto,
        styles.fontBold,
      ]}>
      {price}
    </Text>
  </View>
); //

// Props
type BookingScreenProps = {
  navigation: any;
  route: any;
  customHeader?: React.ReactNode;
}; //

const BookingScreen: FC<BookingScreenProps> = ({
  navigation,
  route,
}: BookingScreenProps) => {
  // lay id truyen vao tu url
  const {id} = route.params;
  console.log('Id duoc lay tu url', id);

  //Shop
  const renderItem = ({item}: any) => (
    <Item
      id={item.id}
      title={item.title}
      describe={item.describe}
      price={item.price}
    />
  ); //

  //calendar
  const [selectedStartDate, setSelectedStartDate] = useState<Date>(new Date());
  const onDateChange = (date: any) => {
    setSelectedStartDate(date);
  }; //

  //time
  const [date, setDate] = useState(new Date());
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);

  const handleDatePress = () => {
    setIsDatePickerVisible(true);
  };

  const handleDonePress = () => {
    setIsDatePickerVisible(false);
  };

  return (
    <WrapBgBox>
      <View style={styles.paddingTop50Ios15Adroid}>
        <View style={[styles.RowBetween, styles.paddingHorizontal18]}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Avatar source={icon.iconBackWhite} size={24} />
          </TouchableOpacity>
          <View>
            <View style={styles.RowBetween}>
              <TouchableOpacity onPress={() => navigation.navigate('notify')}>
                <View style={styles.buttonEllipseSm}>
                  <Avatar source={icon.iconHeartActive} size={16} />
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.buttonEllipseSm, styles.marginLeft12]}
                onPress={() => navigation.navigate('setting')}>
                <Avatar source={icon.iconDownloadWhite} size={16} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      <View style={[styles.detailUserBooking]}>
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
            <Text style={[styles.fontSize12, styles.marginBottom10]}>
              Có hơn 8 năm kinh nghiệm {'\n'} Có xem khuya & lịch gấp trog ngày
              (có tính thêm phụ phí)
            </Text>
            <View style={styles.RowAlignItems}>
              <View style={styles.RowAlignItems}>
                <Avatar
                  source={icon.iconHeartActive}
                  containerStyle={styles.iconSize12Mgr5}
                />
                <Text style={styles.fontSize12}>14,087</Text>
              </View>
              <View style={[styles.RowAlignItems, styles.marginLeft12]}>
                <Avatar
                  source={icon.iconViewBlack}
                  containerStyle={styles.iconSize12Mgr5}
                />
                <Text style={styles.fontSize12}>25,635</Text>
              </View>
              <View style={[styles.RowAlignItems, styles.marginLeft12]}>
                <Avatar
                  source={icon.iconInstagram}
                  containerStyle={styles.iconSize12Mgr5}
                />
                <TouchableOpacity
                  onPress={() => navigation.navigate('Instagram')}>
                  <Text style={[styles.fontSize12, styles.colorBlue]}>
                    Instagram
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <ScrollView>
          <Text style={[styles.textTitle18Black, styles.paddingHorizontal18]}>
            Bảng giá
          </Text>
          <View style={styles.paddingLeft18}>
            <Carousel
              data={data}
              renderItem={renderItem}
              sliderWidth={width}
              itemWidth={width / 2.4}
              inactiveSlideScale={1}
              inactiveSlideOpacity={1}
              enableMomentum={false}
              activeSlideAlignment={'start'}
              containerCustomStyle={styles.carousel}
            />
          </View>
          <View style={styles.paddingHorizontal18}>
            <Text style={[styles.textTitle18Black, styles.marginTop20]}>
              Đặt lịch
            </Text>
            <View style={[styles.marginTop15, styles.boxWhiteRadius]}>
              <CalendarPicker
                width={width - 40}
                onDateChange={onDateChange}
                todayBackgroundColor="#E6E6E6"
                selectedDayColor="#F68B73"
                selectedDayTextColor="#FFFFFF"
                headingLevel={1}
                previousComponent={
                  <Avatar
                    source={icon.iconPreviousOrange}
                    containerStyle={styles.iconSize10}
                  />
                }
                nextComponent={
                  <Avatar
                    source={icon.iconNextOrange}
                    containerStyle={styles.iconSize10}
                  />
                }
              />
            </View>
            <View style={[styles.marginTop15]}>
              <Modal visible={isDatePickerVisible} animationType="slide">
                <View style={styles.modal}>
                  {isDatePickerVisible && (
                    <>
                      <DatePickerIOS
                        date={date}
                        onDateChange={setDate}
                        mode="time"
                        locale={'en-US'}
                      />
                      <TouchableOpacity onPress={handleDonePress}>
                        <Text style={styles.btnDone}>DONE!</Text>
                      </TouchableOpacity>
                    </>
                  )}
                </View>
              </Modal>
              {!isDatePickerVisible && (
                <TouchableOpacity onPress={handleDatePress}>
                  <View
                    style={[styles.btnTimeBooking, styles.RowCenterBetween]}>
                    <View>
                      <Text style={styles.fontMontserrat}>Thời gian</Text>
                    </View>
                    <View style={styles.RowCenterBetween}>
                      <Text style={[styles.colorOrange, styles.fontMontserrat]}>
                        {date.toLocaleTimeString('en-US', {
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </Text>
                      <Avatar
                        source={icon.iconNextOrange}
                        containerStyle={[
                          styles.iconSize10,
                          styles.marginLeft12,
                        ]}
                      />
                    </View>
                  </View>
                </TouchableOpacity>
              )}
            </View>
            <View style={styles.marginVertical18}>
              <View style={[styles.RowAlignItems, styles.hidden]}>
                <Text style={[styles.fontSize12, styles.colorOrange]}>
                  {date.toLocaleTimeString('en-US', {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </Text>
                <Text
                  style={[
                    styles.fontSize12,
                    styles.colorOrange,
                    styles.marginLeft12,
                  ]}>
                  {moment(selectedStartDate).format('DD-MM-YYYY')}
                </Text>
              </View>
              <TouchableOpacity
                style={styles.buttonTmp}
                onPress={() => navigation.navigate('payment', {id: id})}>
                <Text style={styles.buttonText}>Đặt lịch</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </WrapBgBox>
  );
};

export default BookingScreen;
