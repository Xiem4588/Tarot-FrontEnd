import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
import {styles} from '../../../assets/styles';
import CalendarPicker from 'react-native-calendar-picker';
import IconMateria from 'react-native-vector-icons/MaterialCommunityIcons';
import moment from 'moment';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
const {width} = Dimensions.get('window');
interface dateTimeProps {
  getDataTime: (time: any) => void;
  getDataDate: (date: any) => void;
}

const DateTime = ({getDataTime, getDataDate}: dateTimeProps) => {
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [isSelectTime, setSelectTime] = useState<String | null>(null);

  // get date
  const onDateChange = (date: any) => {
    const formatDate = moment(date).format('DD-MM-YYYY');
    getDataDate(formatDate);
  };

  //get time
  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };
  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };
  const handleTimeConfirm = (time: any) => {
    const formatTime = time.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    });
    setSelectTime(formatTime);
    getDataTime(formatTime);
    hideTimePicker();
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
        <DateTimePickerModal
          isVisible={isTimePickerVisible}
          mode="time"
          onConfirm={handleTimeConfirm}
          onCancel={hideTimePicker}
        />
        <TouchableOpacity onPress={showTimePicker}>
          <View style={[styles.btnTimeBooking, styles.RowCenterBetween]}>
            <View>
              <Text style={[styles.fontMontserrat, styles.colorBlack]}>
                Thời gian
              </Text>
            </View>
            <View style={styles.RowCenterBetween}>
              <Text style={[styles.colorOrange, styles.fontMontserrat]}>
                {isSelectTime ? isSelectTime : 'Chọn Thời gian'}
              </Text>
              <IconMateria name="chevron-right" size={28} color={'#F68B73'} />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DateTime;
