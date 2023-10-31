import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  ImageBackground,
} from 'react-native';
import {Agenda} from 'react-native-calendars';
import IconMateria from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from '../../../assets/styles';
import {images} from '../../../assets/constants';
import {useSelector} from 'react-redux';
import {getRoutesMain} from '../../../services';
interface dateTimeProps {
  getDataTime: (time: string) => void;
  getDataDate: (date: string) => void;
}

const DateTime = ({getDataTime, getDataDate}: dateTimeProps) => {
  const [isDropdownDate, setDropdownDate] = useState(false);
  const [isDropdownTime, setDropdownTime] = useState(false);
  const [isSelectTime, setSelectTime] = useState<String | null>(null);
  const [isIndexTime, setIndexTime] = useState<Number | null>(null);
  const [isTypeTime, setTypeTime] = useState(false);
  // togg
  const handleDropdown = (value: string) => {
    switch (value) {
      case 'date':
        setDropdownDate(!isDropdownDate);
        break;
      case 'time':
        setDropdownTime(!isDropdownTime);
        break;
      default:
        break;
    }
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
  const handleTimeConfirm = (selectedTime: string, index: number) => {
    setSelectTime(String(selectedTime));
    getDataTime(String(selectedTime));
    setIndexTime(index);
    // handleDropdown('time');
  };

  // sử lý để lấy ngày tháng năm của Agenda
  const today = new Date();
  const selectedDay = today.getDate(); // Ngay
  const selectedMonth = today.getMonth() + 1; // Lưu ý: Tháng bắt đầu từ 0
  const selectedYear = today.getFullYear(); // Nam
  const formattedDateToday = `${selectedDay}-${selectedMonth}-${selectedYear}`;
  const [isSelectedDate, setSelectedDate] = useState(formattedDateToday);
  const handleDayPress = (dateSelect: any) => {
    const parts = dateSelect.dateString.split('-');
    if (parts.length === 3) {
      const year = parts[0];
      const month = parts[1];
      const day = parts[2];
      const formattedDate = `${day}-${month}-${year}`;
      setSelectedDate(String(formattedDate));
      getDataDate(String(formattedDate));
      // handleDropdown('date');
    } else {
      console.log('Ngày không hợp lệ.');
    }
  };

  // setting Agenda
  const renderEmptyData = () => {
    return (
      <>
        <Text style={[styles.backgWhite, styles.height1]} />
      </>
    );
  };

  // check dataBooking
  const [isDisableTimeBooking, setDisableTimeBooking] = useState<string[]>();
  const userExpert = useSelector(
    (state: any) => state.PUBLIC_STORE_USER_DETAIL.user,
  );
  const emailToFind = userExpert.email;

  useEffect(() => {
    getDataDate(String(isSelectedDate));
    const checkDataBooking = async () => {
      try {
        const res = await getRoutesMain('booking');
        const data = await res.data;
        const itemsWithExpertEmail = await data.filter(
          (item: any) => item.email_expert === emailToFind,
        );
        const datesMatchingTarget = [];
        if (itemsWithExpertEmail && isSelectedDate) {
          for (const item of itemsWithExpertEmail) {
            if (
              isSelectedDate &&
              item.dataBooking &&
              item.dataBooking.dateViewing === isSelectedDate
            ) {
              datesMatchingTarget.push(item);
            } else {
              datesMatchingTarget.push();
            }
          }
        }
        if (datesMatchingTarget) {
          const timeViewingArray = datesMatchingTarget.map(
            (time: any) => time.dataBooking.timeViewing,
          );
          setDisableTimeBooking(timeViewingArray);
        }
      } catch (error) {
        console.error('---> Null', error);
      }
    };
    checkDataBooking();
  }, [
    emailToFind,
    formattedDateToday,
    getDataDate,
    isSelectTime,
    isSelectedDate,
  ]);

  return (
    <View style={styles.paddingHorizontal18}>
      <Text style={[styles.textTitle18Black, styles.marginTop20]}>
        Đặt lịch
      </Text>
      <View style={[styles.marginTop15, styles.boxWhiteRadius]}>
        <TouchableWithoutFeedback onPress={() => handleDropdown('date')}>
          <View style={[styles.RowCenterBetween]}>
            <View style={styles.RowAlignItems}>
              {isDropdownDate === false ? (
                <IconMateria name="menu-up" size={24} color={'#000'} />
              ) : (
                <IconMateria name="menu-down" size={24} color={'#000'} />
              )}
              <Text style={[styles.fontMontserrat, styles.colorBlack]}>
                Chọn ngày xem:
              </Text>
            </View>
            <View style={styles.RowCenterBetween}>
              <Text
                style={[
                  styles.colorBlack,
                  styles.fontMontserrat,
                  styles.fontBold,
                  styles.marginRight5,
                ]}>
                {isSelectedDate ? (
                  isSelectedDate
                ) : (
                  <Text style={[styles.colorGrray, styles.fontBoldNormal]}>
                    YYYY/MM/DD
                  </Text>
                )}
              </Text>
              <IconMateria name="calendar-blank" size={16} color={'#000'} />
            </View>
          </View>
        </TouchableWithoutFeedback>
        {isDropdownDate === false ? (
          <View style={[styles.marginTop10]}>
            <ImageBackground
              source={images.borderLineDashed}
              style={[styles.borderImgDashed, styles.marginBottom10]}
            />
            <Agenda
              // renderKnob={renderKnob}
              minDate={String(new Date())}
              showClosingKnob={true}
              renderEmptyData={renderEmptyData}
              onDayPress={handleDayPress}
              theme={{
                calendarBackground: '#FFF',
                dotColor: '#F78B73',
                selectedDayBackgroundColor: '#F78B73',
              }}
            />
          </View>
        ) : null}
      </View>
      <View style={[styles.marginTop15]}>
        <View style={[styles.boxWhiteRadius]}>
          <TouchableWithoutFeedback onPress={() => handleDropdown('time')}>
            <View style={[styles.RowCenterBetween]}>
              <View style={styles.RowAlignItems}>
                {isDropdownTime === false ? (
                  <IconMateria name="menu-up" size={24} color={'#000'} />
                ) : (
                  <IconMateria name="menu-down" size={24} color={'#000'} />
                )}
                <Text style={[styles.fontMontserrat, styles.colorBlack]}>
                  Chọn giờ bắt đầu:
                </Text>
              </View>
              <View style={styles.RowCenterBetween}>
                <Text
                  style={[
                    styles.colorBlack,
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
          {isDropdownTime === false ? (
            <View style={[styles.marginTop10]}>
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
                  <Text>Đã đặt</Text>
                </View>
              </View>
              <View
                style={[
                  styles.RowCenterLlexWrap,
                  styles.marginTop20,
                  styles.marginHorizontalA9,
                ]}>
                {isTypeTime === false && isDisableTimeBooking
                  ? amTimeSlots.map((time, index) => (
                      <View
                        key={index}
                        style={[
                          styles.defaultTime,
                          isDisableTimeBooking.includes(time) // Kiểm tra nếu giá trị có trong isDisableTimeBooking
                            ? styles.disableTime
                            : isIndexTime === index
                            ? styles.activeTime
                            : null,
                        ]}>
                        <TouchableWithoutFeedback
                          onPress={() =>
                            isDisableTimeBooking.includes(time)
                              ? {}
                              : handleTimeConfirm(time, index)
                          }>
                          <Text
                            style={[
                              styles.timeBox,
                              isDisableTimeBooking.includes(time)
                                ? styles.colorGray
                                : null,
                            ]}>
                            {time.replace(/\sAM$|\sPM$/, '')}
                          </Text>
                        </TouchableWithoutFeedback>
                      </View>
                    ))
                  : isDisableTimeBooking &&
                    pmTimeSlots.map((time, index) => (
                      <View
                        key={index}
                        style={[
                          styles.defaultTime,
                          isDisableTimeBooking.includes(time)
                            ? styles.disableTime
                            : isIndexTime === amTimeSlots.length + index
                            ? styles.activeTime
                            : null,
                        ]}>
                        <TouchableWithoutFeedback
                          onPress={() =>
                            isDisableTimeBooking.includes(time)
                              ? {}
                              : handleTimeConfirm(
                                  time,
                                  amTimeSlots.length + index,
                                )
                          }>
                          <Text
                            style={[
                              styles.timeBox,
                              isDisableTimeBooking.includes(time)
                                ? styles.colorGray
                                : null,
                            ]}>
                            {time.replace(/\sAM$|\sPM$/, '')}
                          </Text>
                        </TouchableWithoutFeedback>
                      </View>
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
