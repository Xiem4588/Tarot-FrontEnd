/**
 * @format
 */

import React, {useState} from 'react';
import {View, Dimensions, Alert} from 'react-native';
import EventCalendar from 'react-native-events-calendar';
import InforProfile from '../component/infor';
import CalendarPicker from 'react-native-calendar-picker';
import IconMateria from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from '../../../../assets/styles';
import moment from 'moment';

let {width} = Dimensions.get('window');

const MyProfileExpert = ({navigation}: any) => {
  const events = [
    {
      color: '#ff7b72',
      start: '2023-05-28 01:00:00',
      end: '2023-05-28 02:00:00',
      title: 'Dr. Khach 1',
      summary: 'Goi 30k',
    },
    {
      color: '#000000',
      start: '2023-05-29 01:00:00',
      end: '2023-05-29 03:30:00',
      title: 'Dr. Khach 2',
      summary: 'Goi 130k',
    },
  ];
  const eventTapped = (event: any) => {
    Alert.alert('=>> event', event);
  };

  //calendar
  const [selectedStartDate, setSelectedStartDate] = useState<Date>(new Date());
  const [initDate, setInitDate] = useState(
    moment(selectedStartDate).format('YYYY-MM-DD'),
  );

  const onDateChange = (newDate: any) => {
    setSelectedStartDate(newDate);
    setInitDate(moment(newDate).format('YYYY-MM-DD'));
  }; //
  return (
    <>
      <InforProfile navigation={navigation} expert="expert" />
      <View
        style={[
          styles.backgWhite,
          styles.marginBottomA50,
          styles.zindexRelative9,
        ]}>
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
      <EventCalendar
        key={initDate}
        eventTapped={eventTapped}
        events={events}
        width={width}
        initDate={initDate}
      />
    </>
  );
};
export default MyProfileExpert;
