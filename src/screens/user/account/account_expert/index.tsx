import React, {useEffect, useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {Agenda} from 'react-native-calendars';
import InforProfile from '../component/infor';
import IconMateria from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from '../../../../assets/styles';
import ModalDataDate from './modal';

interface isProps {
  navigation: any;
}
interface isItems {
  index: string;
  day: string;
  start: string;
  end: string;
  name: string;
  summary: string;
  confirm: boolean;
}

const AgendaScreen = ({navigation}: isProps, isItems: isItems) => {
  const [items, setItems] = useState<{}>(isItems);
  useEffect(() => {
    setItems({
      '2023-05-31': [
        {
          index: '10',
          day: '2023-05-29',
          start: '09:00:00',
          end: '10:00:00',
          name: 'Dr. Khach 01',
          summary: 'Goi 30k',
          confirm: false,
        },
        {
          index: '15',
          day: '2023-05-29',
          start: '19:00:00',
          end: '19:30:00',
          name: 'Dr. Khach 02',
          summary: 'Goi 130k',
          confirm: true,
        },
      ],
      '2023-06-01': [
        {
          index: '1',
          day: '2023-05-30',
          start: '09:00:00',
          end: '10:00:00',
          name: 'Dr. 100',
          summary: 'Goi 30k',
          confirm: true,
        },
        {
          index: '2',
          day: '2023-05-30',
          start: '12:00:00',
          end: '13:00:00',
          name: 'Khach 120',
          summary: 'Goi 50k',
          confirm: false,
        },
        {
          index: '21',
          day: '2023-05-30',
          start: '14:00:00',
          end: '15:00:00',
          name: 'Khach 130',
          summary: 'Goi 50k',
          confirm: null,
        },
      ],
    });
  }, []);

  //
  const [isDataItem, setDataItem] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = (item: any) => {
    setModalVisible(!isModalVisible);
    setDataItem(item);
  };
  const toggleModal2 = () => {
    setModalVisible(!isModalVisible);
  };

  const renderItem = (item: any) => {
    const dataItem = item;
    return (
      <>
        <TouchableOpacity
          onPress={() => toggleModal(item)}
          style={[styles.boxWhiteRadius, styles.marginVertical10]}>
          <View style={[]}>
            <View style={[styles.RowBetween, styles.marginBottom10]}>
              <Text style={[styles.textBlack, styles.fontBold600]}>
                Trạng thái
              </Text>
              <Text style={[styles.textBlack, styles.fontBold600]}>
                {item.confirm === true && (
                  <View style={styles.RowCenterBetween}>
                    <Text style={[styles.marginRight5, styles.colorGrray]}>
                      Chấp thuận
                    </Text>
                    <IconMateria
                      name="check-circle-outline"
                      size={24}
                      color={'#366AF0'}
                    />
                  </View>
                )}
                {item.confirm === false && (
                  <View style={styles.RowCenterBetween}>
                    <Text style={[styles.marginRight5, styles.colorGrray]}>
                      Cancel
                    </Text>
                    <IconMateria name="cancel" size={24} color={'#9E9E9E'} />
                  </View>
                )}
                {item.confirm === null && (
                  <View style={styles.RowCenterBetween}>
                    <Text style={[styles.marginRight5, styles.colorOrange]}>
                      Chưa xem
                    </Text>
                  </View>
                )}
              </Text>
            </View>
            <View style={styles.RowCenterBetween}>
              <View style={[styles.marginRight10]}>
                <Text style={(styles.textBlack, styles.fontBold600)}>
                  {dataItem.name}
                </Text>
              </View>
              <View style={[styles.boxGrayRadius10]}>
                <Text style={[styles.textBlack]}>
                  {dataItem.start} - {dataItem.end}
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <ModalDataDate
          isModalVisible={isModalVisible}
          onClick={toggleModal2}
          dataItem={isDataItem}
        />
      </>
    );
  };

  const renderEmptyData = () => {
    return (
      <View style={styles.emptyDate}>
        <Text>Không có dữ liệu</Text>
      </View>
    );
  };

  // sử lý để lấy ngày tháng năm của Agenda
  const [selectedDate, setSelectedDate] = useState(new Date());
  const renderKnob = () => {
    // Hàm để hiển thị phần tháng năm
    // const currentDate = new Date();
    const month = selectedDate.toLocaleString('default', {month: 'long'});
    const year = selectedDate.getFullYear();
    return (
      <View style={[styles.alignItems]}>
        <Text
          style={[
            styles.textCenter,
            styles.fontBold600,
            styles.colorGrray,
          ]}>{`${month} ${year}`}</Text>
      </View>
    );
  };

  const handleDayPress = (day: any) => {
    // Xử lý sự kiện khi ngày tháng được chọn
    setSelectedDate(new Date(day.timestamp));
  };

  return (
    <>
      <InforProfile navigation={navigation} expert="expert" />
      <View
        style={[
          styles.backgWhite,
          styles.paddingVertical10,
          styles.marginBottomA10,
        ]}>
        {renderKnob()}
      </View>
      <Agenda
        // renderKnob={renderKnob}
        items={items}
        renderItem={renderItem}
        showClosingKnob={true}
        renderEmptyData={renderEmptyData}
        theme={{
          calendarBackground: '#FFF',
          dotColor: '#F78B73',
          selectedDayBackgroundColor: '#F78B73',
        }}
        onDayPress={handleDayPress} // Gọi hàm handleDayPress khi ngày được chọn
      />
    </>
  );
};

export default AgendaScreen;
