import React, {useEffect, useState} from 'react';
import {Text, View, TouchableOpacity, ImageBackground} from 'react-native';
import {Agenda} from 'react-native-calendars';
import InforProfile from '../component/infor';
import IconMateria from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from '../../../../assets/styles';
import ModalDataDate from './modal';
import {getTypeBooking} from '../../../../services';
import {useSelector} from 'react-redux';
import {useFocusEffect} from '@react-navigation/native';
import formattedDateToday from '../../../conponents/dateToday';
import {images} from '../../../../assets/constants';

interface isProps {
  navigation: any;
}

const AgendaScreen = ({navigation}: isProps) => {
  const [originalData, setOriginalData] = useState({});
  const [formatData, setFormatData] = useState({});
  const userData = useSelector(
    (state: any) => state.PRIVATE_STORE_ACCOUNT_DATA.user,
  );

  useFocusEffect(
    React.useCallback(() => {
      const checkDataBooking = async () => {
        try {
          if (userData) {
            const myEmail = await userData.email;
            const emailData = {
              email: myEmail,
            };
            const res = await getTypeBooking('typeBooking', emailData);
            const data = await res.data;
            setOriginalData(data);
          }
        } catch (error) {
          return error;
        }
      };
      checkDataBooking();
    }, [userData]),
  );

  interface AgendaEntry {
    name_guest: string;
    name_expert: string;
    dateViewing: string;
    timeViewing: string;
    confirm: boolean;
  }
  type AgendaItems = Record<string, AgendaEntry[]>;

  useEffect(() => {
    try {
      // Chuyển đổi dữ liệu vào định dạng cho Agenda
      const newData: AgendaItems = {};
      (originalData as AgendaItems[]).forEach((item: any) => {
        // Lấy ngày từ item
        const date = item.dataBooking.dateViewing;
        // Định dạng lại ngày cho đúng kiểu của Agenda
        let DateAgenda = null;
        const oldDate = date.split('-');
        if (oldDate.length === 3) {
          const year = oldDate[2];
          const month = oldDate[1];
          const day = oldDate[0];
          DateAgenda = `${year}-${month}-${day}`;
        } else {
          return null;
        }

        // Tạo đối tượng sự kiện
        const event: AgendaEntry = {
          name_guest: item.name_guest,
          name_expert: item.name_expert,
          dateViewing: item.dataBooking.dateViewing,
          timeViewing: item.dataBooking.timeViewing,
          confirm: item.confirm,
        };
        // Thêm sự kiện vào mảng của ngày tương ứng hoặc tạo mảng mới nếu chưa có
        if (!newData[DateAgenda]) {
          newData[DateAgenda] = [event];
        } else {
          newData[DateAgenda].push(event);
        }
      });
      setFormatData(newData);
    } catch (error) {}
  }, [originalData]);

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
    console.log('----> data item', item);
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
                  {dataItem.name_guest}
                </Text>
              </View>
              <View style={[styles.boxGrayRadius10]}>
                <Text style={[styles.textBlack]}>{dataItem.timeViewing}</Text>
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
  const [isSelectedDate, setSelectedDate] = useState(formattedDateToday);
  const handleDayPress = (dateSelect: any) => {
    const parts = dateSelect.dateString.split('-');
    if (parts.length === 3) {
      const year = parts[0];
      const month = parts[1];
      const day = parts[2];
      const formattedDate = `${day}-${month}-${year}`;
      setSelectedDate(String(formattedDate));
    } else {
      console.log('Ngày không hợp lệ.');
    }
  };

  return (
    <>
      <InforProfile navigation={navigation} expert="expert" />
      <View
        style={[
          styles.backgWhite,
          styles.paddingHorizontal18,
          styles.marginBottomA10,
        ]}>
        <ImageBackground
          source={images.borderLineDashed}
          style={[styles.borderImgDashed, styles.marginBottom10]}
        />
        <View style={[styles.RowAlignItems, styles.padding10]}>
          <Text style={[styles.colorGray]}>Check order ngày: </Text>
          <Text style={[styles.colorBlack, styles.fontBold600]}>
            {isSelectedDate}
          </Text>
        </View>
      </View>
      <Agenda
        minDate={String(new Date())}
        items={formatData}
        showClosingKnob={true}
        renderItem={renderItem}
        renderEmptyData={renderEmptyData}
        theme={{
          calendarBackground: '#FFF',
          dotColor: '#F78B73',
          selectedDayBackgroundColor: '#F78B73',
        }}
        onDayPress={handleDayPress}
      />
    </>
  );
};

export default AgendaScreen;
