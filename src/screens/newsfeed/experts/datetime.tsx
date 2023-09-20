import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
import {styles} from '../../../assets/styles';
import CalendarPicker from 'react-native-calendar-picker';
import IconMateria from 'react-native-vector-icons/MaterialCommunityIcons';
import moment from 'moment';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const {width} = Dimensions.get('window');

// Props
type BookingScreenProps = {
  navigation: any;
  route?: any;
}; //

const DateTime = ({}: /*navigation, route*/ BookingScreenProps) => {
  // lay id truyen vao tu url
  // const {id} = route.params;
  // console.log('Id duoc lay tu url', id);

  //calendar
  const [selectedStartDate, setSelectedStartDate] = useState<Date>(new Date());
  const onDateChange = (date: any) => {
    setSelectedStartDate(date);
  }; //

  //time
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [selectedTime, setSelectedTime] = useState(new Date());

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleTimeConfirm = (time: any) => {
    setSelectedTime(time);
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
        {!isTimePickerVisible && (
          <TouchableOpacity onPress={showTimePicker}>
            {/* handleDatePress */}
            <View style={[styles.btnTimeBooking, styles.RowCenterBetween]}>
              <View>
                <Text style={[styles.fontMontserrat, styles.colorBlack]}>
                  Thời gian
                </Text>
              </View>
              <View style={styles.RowCenterBetween}>
                <Text style={[styles.colorOrange, styles.fontMontserrat]}>
                  {selectedTime.toLocaleTimeString('en-US', {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </Text>
                <IconMateria name="chevron-right" size={28} color={'#F68B73'} />
              </View>
            </View>
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.marginVertical18}>
        <View style={[styles.RowAlignItems, styles.hidden]}>
          <Text style={[styles.fontSize12, styles.colorOrange]}>
            {selectedTime.toLocaleTimeString('en-US', {
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
          // onPress={() => navigation.navigate('payment', {id: id})}
          style={[styles.buttonTmp, styles.marginBottom50]}>
          <Text style={[styles.buttonText]}>Đặt lịch</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DateTime;
