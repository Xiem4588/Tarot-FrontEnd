import React, {useState} from 'react';
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
import {icon, images} from '../../../../assets/constants';
import {styles} from '../../../../assets/styles';
import WrapBgBox from '../../../conponents/wrapBgBox';
import Carousel from 'react-native-snap-carousel';
import CalendarPicker from 'react-native-calendar-picker';
import IconMateria from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../../../conponents/header';
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

const Item = ({id, title, describe, price}: ItemProps) => (
  <View key={id} style={styles.itemCarousel}>
    <View>
      <Text style={styles.nameItemBlack16}>{title}</Text>
      <Text
        style={[styles.fontSize12, styles.marginBottom10, styles.colorBlack]}>
        {describe}
      </Text>
    </View>
    <Text
      style={[
        styles.fontSize16,
        styles.colorOrange,
        styles.marginTopAuto,
        styles.fontBold700,
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

const BookingScreen = ({navigation, route}: BookingScreenProps) => {
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
      <Header navigation={navigation} name="booking" />
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
            <Text
              style={[
                styles.fontSize12,
                styles.marginBottom10,
                styles.colorBlack,
              ]}>
              Có hơn 8 năm kinh nghiệm {'\n'} Có xem khuya & lịch gấp trog ngày
              (có tính thêm phụ phí)
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
                todayBackgroundColor="transparent"
                todayTextStyle={styles.todayTextStyle}
                selectedDayColor="transparent"
                selectedDayTextColor="#4BAE4F"
                selectedDayStyle={styles.selectedDayTextStyle}
                headingLevel={1}
                minDate={new Date()}
                disabledDates={[new Date(2023, 3, 20), new Date(2023, 3, 21)]}
                previousComponent={
                  <IconMateria
                    name="chevron-left"
                    size={34}
                    color={'#F68B73'}
                  />
                }
                nextComponent={
                  <IconMateria
                    name="chevron-right"
                    size={34}
                    color={'#F68B73'}
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
                      <Text style={[styles.fontMontserrat, styles.colorBlack]}>Thời gian</Text>
                    </View>
                    <View style={styles.RowCenterBetween}>
                      <Text style={[styles.colorOrange, styles.fontMontserrat]}>
                        {date.toLocaleTimeString('en-US', {
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </Text>
                      <IconMateria
                        name="chevron-right"
                        size={28}
                        color={'#F68B73'}
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
                style={[styles.buttonTmp, styles.marginBottom50]}
                onPress={() => navigation.navigate('payment', {id: id})}>
                <Text style={[styles.buttonText]}>Đặt lịch</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </WrapBgBox>
  );
};

export default BookingScreen;
