import React, {useState} from 'react';
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
interface dateTimeProps {
  getDataTime: (time: string) => void;
  getDataDate: (date: string) => void;
}

const DateTime = ({getDataTime, getDataDate}: dateTimeProps) => {
  const [isDropdownDate, setDropdownDate] = useState(false);
  const [isDropdownTime, setDropdownTime] = useState(false);
  const [isSelectTime, setSelectTime] = useState<String | null>(null);
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

  // get date
  // const onDateChange = (date: any) => {
  //   const formatDate = moment(date).format('DD-MM-YYYY');
  //   getDataDate(String(formatDate));
  // };

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
    // handleDropdown('time');
    console.log('Selected Time:', selectedTime);
  };

  // sử lý để lấy ngày tháng năm của Agenda
  const [selectedDate, setSelectedDate] = useState(String);

  const handleDayPress = (dateSelect: any) => {
    setSelectedDate(String(dateSelect.dateString));
    getDataDate(String(dateSelect.dateString));
    // handleDropdown('date');
  };

  // setting Agenda
  // const [isStyleCalendar, setStyleCalendar] = useState(false);
  const renderEmptyData = () => {
    return (
      <>
        <Text style={[styles.backgWhite, styles.height1]} />
        {/* {isStyleCalendar === false ? (
          <Text style={[styles.backgWhite, styles.height1]} />
        ) : (
          <Text style={[styles.backgWhite, styles.height200px]} />
        )} */}
      </>
    );
  };

  // Knob
  // const handleStyle = () => {
  //   setStyleCalendar(!isStyleCalendar);
  //   console.log('----> isStyleCalendar', isStyleCalendar);
  // };
  // const renderKnob = () => {
  //   return (
  //     <>
  //       <TouchableWithoutFeedback onPress={() => handleStyle()}>
  //         <View style={[styles.alignItems]}>
  //           <Text style={[styles.btnKnob]} />
  //         </View>
  //       </TouchableWithoutFeedback>
  //     </>
  //   );
  // };

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
                {selectedDate ? (
                  selectedDate
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
