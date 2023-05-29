import React, {useEffect, useState} from 'react';
import {Alert, Text, View, TouchableOpacity} from 'react-native';
import {Agenda} from 'react-native-calendars';
import InforProfile from '../component/infor';
import {styles} from '../../../../assets/styles';

interface Items {
  start: string;
  end: string;
  name: string;
  summary: string;
  cookies: boolean;
}

const AgendaScreen = ({navigation}: any) => {
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState<{[key: string]: Items[]}>({
    '2023-05-28': [
      {
        start: '09:00:00',
        end: '10:00:00',
        name: 'Dr. Khach 1',
        summary: 'Goi 130k',
        cookies: true,
      },
      {
        start: '15:00:00',
        end: '16:00:00',
        name: 'Dr. Khach 2',
        summary: 'Goi 100k',
        cookies: true,
      },
    ],
    '2023-05-29': [
      {
        start: '09:00:00',
        end: '10:00:00',
        name: 'Dr. Khach 3',
        summary: 'Goi 130k',
        cookies: false,
      },
      {
        start: '15:00:00',
        end: '16:00:00',
        name: 'Dr. Khach 4',
        summary: 'Goi 100k',
        cookies: true,
      },
    ],
    '2023-05-30': [
      {
        start: '09:00:00',
        end: '10:00:00',
        name: 'Dr. Khach 3',
        summary: 'Goi 130k',
        cookies: false,
      },
      {
        start: '15:00:00',
        end: '16:00:00',
        name: 'Dr. Khach 4',
        summary: 'Goi 100k',
        cookies: true,
      },
    ],
  });

  // useEffect(() => {
  //   const getData = async () => {
  //     const response = await fetch(
  //       'https://jsonplaceholder.typicode.com/posts',
  //     );
  //     const data = await response.json();
  //     Alert.alert('>>>>>>>>>', JSON.stringify(data));
  //     setItems(data);
  //   };
  //   getData();
  // }, []);

  const renderItem = (item: any) => {
    return (
      <TouchableOpacity
        onPress={() => Alert.alert('item detail')}
        style={[styles.boxWhiteRadius, styles.marginVertical10]}>
        <Text style={[styles.colorBlack]}>{item.name}</Text>
        <Text style={[styles.colorBlack]}>
          Start: {item.start}, End: {item.end}
        </Text>
        <Text style={[styles.colorBlack]}>Summary: {item.summary}</Text>
        {item.cookies ? (
          <Text style={[styles.colorBlack]}>Cookies: True</Text>
        ) : (
          <Text style={[styles.colorBlack]}>Cookies: False</Text>
        )}
      </TouchableOpacity>
    );
  };

  const renderEmptyData = () => {
    if (isLoading) {
      return (
        <View style={styles.emptyDate}>
          <Text>No data available</Text>
        </View>
      );
    } else {
      return (
        <View style={styles.emptyDate}>
          <Text>No data available</Text>
        </View>
      );
    }
  };

  return (
    <>
      <InforProfile navigation={navigation} expert="expert" />
      <View style={styles.backgWhite}>
        {/* <Text>{JSON.stringify(items)}</Text> */}
      </View>
      <Agenda
        items={items}
        renderItem={renderItem}
        showClosingKnob={true}
        renderEmptyData={renderEmptyData}
        theme={
          {
            // calendarBackground: '#fff', //agenda background
            // agendaKnobColor: 'transparent', // knob color
            // backgroundColor: 'transparent', // background color below agenda
            // agendaDayTextColor: 'transparent', // day name
            // agendaDayNumColor: 'transparent', // day number
            // agendaTodayColor: '#000', // today in list
            // monthTextColor: 'transparent', // name in calendar
            // textDefaultColor: 'red',
            // todayBackgroundColor: 'transparent',
            // textSectionTitleColor: 'transparent',
            // selectedDayBackgroundColor: 'transparent', // calendar sel date
            // dayTextColor: 'transparent', // calendar day
            // dotColor: 'white', // dots
            // textDisabledColor: 'red',
          }
        }
      />
    </>
  );
};

export default AgendaScreen;
