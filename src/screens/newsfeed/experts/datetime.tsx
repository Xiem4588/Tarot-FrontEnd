import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Dimensions,
  ImageBackground,
} from 'react-native';
import {styles} from '../../../assets/styles';
import CalendarPicker from 'react-native-calendar-picker';
import IconMateria from 'react-native-vector-icons/MaterialCommunityIcons';
import moment from 'moment';
import {images} from '../../../assets/constants';
const {width} = Dimensions.get('window');
interface dateTimeProps {
  getDataTime: (time: string) => void;
  getDataDate: (date: string) => void;
}

const DateTime = ({getDataTime, getDataDate}: dateTimeProps) => {
  const [isDropdownTime, setDropdownTime] = useState(false);
  const [isSelectTime, setSelectTime] = useState<String | null>(null);
  const [isTypeTime, setTypeTime] = useState(false);
  // togg
  const dropdownTime = () => {
    setDropdownTime(!isDropdownTime);
  };

  // get date
  const onDateChange = (date: any) => {
    const formatDate = moment(date).format('DD-MM-YYYY');
    getDataDate(String(formatDate));
  };

  // Tạo một mảng lưu trữ các giờ và phút
  const timeSlots = [];
  const totalSlots = (24 * 60) / 30; // Tổng số khoảng 30 phút trong một ngày

  for (let i = 0; i < totalSlots; i++) {
    const totalMinutes = i * 30;
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    // Định dạng thời gian thành chuỗi "hh:mm AM/PM"
    // const formattedHours = hours > 12 ? hours - 12 : hours;
    const amPm = hours >= 12 ? 'PM' : 'AM';
    const formattedTime = `${hours.toString().padStart(2, '0')} : ${minutes
      .toString()
      .padStart(2, '0')} ${amPm}`;
    timeSlots.push(formattedTime);
  }
  const amTimeSlots = timeSlots.filter(time => time.endsWith('AM')); // Lọc ra các mục có giờ là AM
  const pmTimeSlots = timeSlots.filter(time => time.endsWith('PM')); // Lọc ra các mục có giờ là PM

  // get time
  const handleTimeConfirm = (selectedTime: string) => {
    setSelectTime(String(selectedTime));
    getDataTime(String(selectedTime));
    dropdownTime();
    console.log('Selected Time:', selectedTime);
  };

  return (
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
          selectedDayTextColor="#FFF"
          selectedDayStyle={styles.selectedDayTextStyle}
          headingLevel={1}
          minDate={new Date()}
          disabledDates={[new Date(2023, 3, 20), new Date(2023, 3, 21)]}
          previousComponent={
            <IconMateria name="chevron-left" size={34} color={'#F68B73'} />
          }
          nextComponent={
            <IconMateria name="chevron-right" size={34} color={'#F68B73'} />
          }
        />
      </View>
      <View style={[styles.marginTop15]}>
        <View style={[styles.btnTimeBooking]}>
          <TouchableWithoutFeedback onPress={dropdownTime}>
            <View style={[styles.RowCenterBetween]}>
              <View>
                <Text style={[styles.fontMontserrat, styles.colorBlack]}>
                  Chọn thời gian bắt đầu:
                </Text>
              </View>
              <View style={styles.RowCenterBetween}>
                <Text
                  style={[
                    styles.colorOrange,
                    styles.fontMontserrat,
                    styles.fontBold,
                    styles.marginRight5,
                  ]}>
                  {isSelectTime ? (
                    isSelectTime
                  ) : (
                    <Text style={[styles.colorGrray, styles.fontBoldNormal]}>
                      00 : 00
                    </Text>
                  )}
                </Text>
                <IconMateria
                  name="clock-time-five-outline"
                  size={16}
                  color={'#000'}
                />
              </View>
            </View>
          </TouchableWithoutFeedback>
          {isDropdownTime === true ? (
            <View style={[styles.marginTop20]}>
              <ImageBackground
                source={images.borderLineDashed}
                style={styles.borderImgDashed}
              />
              <View style={[styles.RowCenterBetween, styles.marginTop20]}>
                <View style={[styles.RowAlignItemsCenter]}>
                  <IconMateria
                    name="rectangle-outline"
                    size={12}
                    color={'#000'}
                  />
                  <Text>Lịch còn trống</Text>
                </View>
                <View style={[styles.RowAlignItemsCenter]}>
                  <IconMateria name="rectangle" size={12} color={'#F68B73'} />
                  <Text>Giờ được chọn</Text>
                </View>
                <View style={[styles.RowAlignItemsCenter]}>
                  <IconMateria name="rectangle" size={12} color={'#CCC'} />
                  <Text>Đã hết</Text>
                </View>
              </View>
              <View
                style={[
                  styles.RowCenterLlexWrap,
                  styles.marginTop20,
                  styles.marginHorizontalA9,
                ]}>
                {isTypeTime === false
                  ? amTimeSlots.map((time, index) => (
                      <TouchableWithoutFeedback
                        key={index}
                        onPress={() => handleTimeConfirm(time)}>
                        <Text style={[styles.timeBox]}>
                          {time.replace(/\sAM$|\sPM$/, '')}
                        </Text>
                      </TouchableWithoutFeedback>
                    ))
                  : pmTimeSlots.map((time, index) => (
                      <TouchableWithoutFeedback
                        key={index}
                        onPress={() => handleTimeConfirm(time)}>
                        <Text style={[styles.timeBox]}>
                          {time.replace(/\sAM$|\sPM$/, '')}
                        </Text>
                      </TouchableWithoutFeedback>
                    ))}
              </View>
              <View
                style={[
                  styles.marginTop10,
                  styles.RowAlignItemsCenter,
                  styles.bgGraySelect,
                ]}>
                <TouchableWithoutFeedback
                  onPress={() => setTypeTime(!isTypeTime)}>
                  <Text
                    style={[
                      isTypeTime === false ? styles.backgWhite : null,
                      styles.tabTime,
                    ]}>
                    AM
                  </Text>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
                  onPress={() => setTypeTime(!isTypeTime)}>
                  <Text
                    style={[
                      isTypeTime === true ? styles.backgWhite : null,
                      styles.tabTime,
                    ]}>
                    PM
                  </Text>
                </TouchableWithoutFeedback>
              </View>
            </View>
          ) : null}
        </View>
      </View>
    </View>
  );
};

export default DateTime;
