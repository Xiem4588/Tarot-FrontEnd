import React, {useState, useEffect} from 'react';
import {Text} from 'react-native-elements';
import {
  TouchableOpacity,
  View,
  Modal,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  ImageBackground,
  TextInput,
} from 'react-native';
import {styles} from '../../../../assets/styles';
import GestureRecognizer from 'react-native-swipe-gestures';
import i18n from '../../../../languages/i18n';
import {images} from '../../../../assets/constants';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import LoadingFullScreen from '../../../conponents/loading';
import {useSelector} from 'react-redux';
interface ModalPriceListProps {
  isModalVisible: boolean;
  toggleModal: () => void;
  pricePackList: (data: any) => void;
}

const ModalPriceList = ({
  isModalVisible,
  toggleModal,
  pricePackList,
}: ModalPriceListProps) => {
  // get data from store
  const user = useSelector((state: any) => state.ACCOUNTDATA.user);
  const priceList = user.priceList;
  //
  const [isModal, setModal] = useState(isModalVisible);
  useEffect(() => {
    setModal(isModalVisible);
  }, [isModalVisible]);

  const config = {
    velocityThreshold: 0.3, //ngưỡng tốc độ của sự kiện vuốt
    directionalOffsetThreshold: 80, //khoảng cách tối thiểu (theo đơn vị pixel) mà người dùng phải vuốt để đóng
  };

  // Get data box price list
  interface PackData {
    created_date: string;
    title: string;
    desc: string;
    price: string;
    time: string;
  }

  const [isTitle, setTitle] = useState('');
  const [isDesc, setDesc] = useState('');
  const [isPrice, setPrice] = useState('');
  const [isTime, setTime] = useState('');
  const handleAddPack = (key: string) => (value: string) => {
    switch (key) {
      case 'title':
        setTitle(value);
        break;
      case 'desc':
        setDesc(value);
        break;
      case 'price':
        setPrice(value);
        break;
      case 'time':
        setTime(value);
        break;
      default:
        break;
    }
  };

  // check loading for submit
  const [notification, setNotification] = useState('');
  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        setNotification('');
      }, 1000);

      // Hủy timeout khi component bị hủy
      return () => clearTimeout(timer);
    }
  }, [notification]);

  // add price pack
  const [isNewItemPrice, setNewItemPrice] = useState<PackData[]>([]);
  const [isNotify, setNotify] = useState(String || null);

  const currentTime = new Date();
  const year = currentTime.getFullYear(); // Lấy năm hiện tại
  const month = currentTime.getMonth() + 1; // Lấy tháng hiện tại (0-11), cộng thêm 1 để chuyển sang (1-12)
  const date = currentTime.getDate(); // Lấy ngày hiện tại (1-31)

  const userExpertAddPricePack = {
    created_date: `${year}/${month}/${date}`,
    title: isTitle ? isTitle : '',
    desc: isDesc ? isDesc : '',
    price: isPrice ? isPrice : '',
    time: isTime ? isTime : '',
  };

  const handAddItemPrice = () => {
    if (isTitle !== '' && isDesc !== '' && isPrice !== '' && isTime !== '') {
      setNewItemPrice(() => [...priceList, userExpertAddPricePack]);
      setTitle('');
      setDesc('');
      setPrice('');
      setTime('');
      setNotify('');
      return 'Done!';
    } else {
      setNotify('Các trường là bắt buộc nhập');
      return 'Error!';
    }
  };
  const handleSavePrice = async () => {
    setNotification('Loading...'); // Hiển loading
    try {
      if (isNewItemPrice.length > 0) {
        pricePackList(isNewItemPrice);
        toggleModal();
        setNewItemPrice([]);
      } else {
        setNotify('Không có gói nào được tạo!');
        setNotification('Không có gói nào được tạo!');
      }
    } catch (error) {
      setNotification('Error! Vui lòng kiểm tra lại!');
    }
  };

  return (
    <Modal visible={isModal} transparent={true} animationType={'slide'}>
      {notification && <LoadingFullScreen notification={notification} />}
      <GestureRecognizer
        onSwipeDown={toggleModal}
        config={config}
        style={[styles.flexBox]}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={[styles.flexBox]}>
          <TouchableOpacity onPress={toggleModal} style={[styles.height30p]} />
          <View style={[styles.modalComment]}>
            <TouchableOpacity
              onPress={toggleModal}
              style={[styles.alignCenter, styles.paddingVertical10]}>
              <View style={styles.closeModal} />
            </TouchableOpacity>
            <View style={[styles.flexDirection, styles.paddingHorizontal18]}>
              <TouchableOpacity style={styles.flex1} onPress={toggleModal}>
                <Text
                  style={[
                    styles.textOrange,
                    styles.fontSize18,
                    styles.fontBold600,
                  ]}>
                  {i18n.t('cancel')}
                </Text>
              </TouchableOpacity>
              <Text
                style={[
                  styles.textBlack,
                  styles.fontSize18,
                  styles.fontBold600,
                  styles.textCenter,
                ]}>
                {i18n.t('price_list')}
              </Text>
              <TouchableOpacity style={styles.flex1} onPress={handleSavePrice}>
                <Text
                  style={[
                    styles.textOrange,
                    styles.fontSize18,
                    styles.fontBold600,
                    styles.textRight,
                  ]}>
                  {i18n.t('save')}
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.marginTop20}>
              <View style={[styles.paddingHorizontal18, styles.marginBottom30]}>
                <ScrollView>
                  {priceList
                    ? priceList.map((item: PackData, index: string) => (
                        <View key={index} style={styles.boxPriceList}>
                          <TextInput
                            style={[styles.lineItem]}
                            value={item.title}
                            onChangeText={handleAddPack('title')}
                            placeholder={String(i18n.t('Tiêu đề'))}
                          />
                          <ImageBackground
                            source={images.borderLineDashed}
                            style={styles.borderImgDashed}
                          />
                          <TextInput
                            style={[styles.lineItem]}
                            value={item.desc}
                            onChangeText={handleAddPack('desc')}
                            placeholder={String(i18n.t('Mô tả'))}
                          />
                          <ImageBackground
                            source={images.borderLineDashed}
                            style={styles.borderImgDashed}
                          />
                          <TextInput
                            style={[styles.lineItem]}
                            value={item.price}
                            onChangeText={handleAddPack('price')}
                            placeholder={String(i18n.t('Giá'))}
                          />
                          <ImageBackground
                            source={images.borderLineDashed}
                            style={styles.borderImgDashed}
                          />
                          <TextInput
                            style={[styles.lineItem]}
                            value={item.time}
                            onChangeText={handleAddPack('time')}
                            placeholder={String(i18n.t('Thời lượng'))}
                          />
                        </View>
                      ))
                    : null}
                  {isNewItemPrice
                    ? isNewItemPrice.map((item: PackData, index: number) => (
                        <View key={index} style={styles.boxPriceList}>
                          <TextInput
                            style={[styles.lineItem]}
                            value={item.title}
                            onChangeText={handleAddPack('title')}
                            placeholder={String(i18n.t('Tiêu đề'))}
                          />
                          <ImageBackground
                            source={images.borderLineDashed}
                            style={styles.borderImgDashed}
                          />
                          <TextInput
                            style={[styles.lineItem]}
                            value={item.desc}
                            onChangeText={handleAddPack('desc')}
                            placeholder={String(i18n.t('Mô tả'))}
                          />
                          <ImageBackground
                            source={images.borderLineDashed}
                            style={styles.borderImgDashed}
                          />
                          <TextInput
                            style={[styles.lineItem]}
                            value={item.price}
                            onChangeText={handleAddPack('price')}
                            placeholder={String(i18n.t('Giá'))}
                          />
                          <ImageBackground
                            source={images.borderLineDashed}
                            style={styles.borderImgDashed}
                          />
                          <TextInput
                            style={[styles.lineItem]}
                            value={item.time}
                            onChangeText={handleAddPack('time')}
                            placeholder={String(i18n.t('Thời lượng'))}
                          />
                        </View>
                      ))
                    : ''}
                  <View style={styles.boxPriceList}>
                    <TextInput
                      style={[styles.lineItem]}
                      value={isTitle}
                      onChangeText={handleAddPack('title')}
                      placeholder={String(i18n.t('Tiêu đề'))}
                    />
                    <ImageBackground
                      source={images.borderLineDashed}
                      style={styles.borderImgDashed}
                    />
                    <TextInput
                      style={[styles.lineItem]}
                      value={isDesc}
                      onChangeText={handleAddPack('desc')}
                      placeholder={String(i18n.t('Mô tả'))}
                    />
                    <ImageBackground
                      source={images.borderLineDashed}
                      style={styles.borderImgDashed}
                    />
                    <TextInput
                      style={[styles.lineItem]}
                      value={isPrice}
                      onChangeText={handleAddPack('price')}
                      placeholder={String(i18n.t('Giá'))}
                    />
                    <ImageBackground
                      source={images.borderLineDashed}
                      style={styles.borderImgDashed}
                    />
                    <TextInput
                      style={[styles.lineItem]}
                      value={isTime}
                      onChangeText={handleAddPack('time')}
                      placeholder={String(i18n.t('Thời lượng'))}
                    />
                  </View>
                  <Text
                    style={[
                      styles.fontSize14,
                      styles.marginBottom15,
                      styles.textCenter,
                      isNotify !== null ? styles.colorRed : styles.colorGreen,
                    ]}>
                    {isNotify}
                  </Text>
                  <TouchableOpacity
                    style={[
                      styles.flex1,
                      styles.alignCenter,
                      styles.marginBottom80,
                    ]}
                    onPress={handAddItemPrice}>
                    <MIcon name="plus-circle" size={46} color={'#A9B0F5'} />
                  </TouchableOpacity>
                </ScrollView>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </GestureRecognizer>
      {Platform.OS === 'ios' ? <View style={styles.spacer} /> : ''}
    </Modal>
  );
};

export default ModalPriceList;
