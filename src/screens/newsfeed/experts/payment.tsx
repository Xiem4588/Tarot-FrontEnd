import React, {useEffect, useState} from 'react';
import {
  Switch,
  View,
  Text,
  TouchableOpacity,
  Clipboard,
  Modal,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import {Avatar} from 'react-native-elements';
import {images} from '../../../assets/constants';
import {styles} from '../../../assets/styles';
import WrapBgBox from '../../../conponents/wrapBgBox';
import IconMateria from 'react-native-vector-icons/MaterialCommunityIcons';
import ImageViewer from 'react-native-image-zoom-viewer';
import Header from '../../../conponents/header';
import {navProps} from './types';
import {useDispatch, useSelector} from 'react-redux';
import Infor from './infor';
import {postUserBooking} from '../../../services';

const ScreenPayment = ({navigation, route}: navProps) => {
  const currentTime = new Date().toLocaleString();
  // get store data
  const user_Public = useSelector(
    (state: any) => state.PUBLIC_STORE_USER_DETAIL.user,
  );
  const token = useSelector(
    (state: any) => state.PRIVATE_STORE_ACCOUNT_DATA.token,
  );
  const user_Private = useSelector(
    (state: any) => state.PRIVATE_STORE_ACCOUNT_DATA.user,
  );
  //
  const [isConfirm, setConfirm] = useState(false);
  const [isBackHome, setBackHome] = useState(false);
  const [isCheckPayment, setCheckPayment] = useState(false);
  const [isDateViewing, setDateViewing] = useState('');
  const [isTimeViewing, setTimeViewing] = useState('');
  const [isPrice, setPrice] = useState('');
  const [isDesc, setDesc] = useState('');
  const [isTitle, setTitle] = useState('');
  const [inNotif, setNotif] = useState('');
  const [inTokenStatus, setTokenStatus] = useState<Boolean>(true);

  const dataBooking = route.params.dataBooking;
  console.log('---dataBooking', dataBooking);
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (dataBooking) {
          const timeViewing = await dataBooking.timeViewing;
          setTimeViewing(timeViewing);
          const dateViewing = await dataBooking.dateViewing;
          setDateViewing(dateViewing);
          const pricePack = await dataBooking.pricePack;
          setPrice(pricePack.price);
          setDesc(pricePack.desc);
          setTitle(pricePack.title);
        }
      } catch (error) {
        return error;
      }
    };
    fetchData();
  }, [dataBooking]);

  // Confirm Payment
  const confirmPayment = async () => {
    const newBooking = {
      email_guest: user_Private.email,
      email_expert: user_Public.email,
      name_guest: user_Private.fullName
        ? user_Private.fullName
        : user_Private.email,
      name_expert: user_Public.fullName
        ? user_Public.fullName
        : user_Public.email,
      id_guest: user_Private._id,
      id_expert: user_Public._id,
      dateBooking: String(currentTime),
      dataBooking,
    };
    if (newBooking.email_guest) {
      const res = await postUserBooking('userBooking', newBooking, token);
      if (res.status === true) {
        setCheckPayment(true);
        setBackHome(true);
      } else if (res.status === false) {
        setNotif('Có lỗi vui lòng kiểm tra và thử lại!');
      } else if (res.tokenStatus === false) {
        setTokenStatus(false);
      }
    } else {
      console.log('----> console', console.error);
      return console.error('Lỗi (!)');
    }
  };

  // Xóa token khỏi AsyncStorage khi người dùng đăng xuất
  const dispatch = useDispatch();
  const signOut = async () => {
    dispatch({
      type: 'LOG_OUT',
    });
  };
  const handleLogout = () => {
    signOut();
    navigation.navigate('user');
  };

  // Copy click icon
  const copyToClipboard = (text: string) => {
    Clipboard.setString(text);
  };

  // Image Zoom
  const [isImageViewVisible, setIsImageViewVisible] = useState(false);

  return (
    <WrapBgBox>
      <Header
        navigation={navigation}
        backHome={isBackHome}
        name="payment"
        title={''}
      />

      <View style={[styles.detailUserBooking]}>
        <Infor />
        <ScrollView>
          <View style={styles.paddingHorizontal18}>
            <Text style={[styles.textTitle18Black]}>Thời gian</Text>
            <View
              style={[
                styles.marginTop15,
                styles.boxWhiteRadius,
                styles.overflow,
              ]}>
              <View>
                <Text style={styles.nameItemBlack16}>
                  {isTitle ? isTitle : '...'}
                </Text>
                <Text style={[styles.fontSize12, styles.marginBottom10]}>
                  {isDesc ? isDesc : '...'}
                </Text>
              </View>
              <View style={[styles.RowCenterBetween, styles.borderTopDashed]}>
                <Text style={styles.nameItemBlack14}>{isDateViewing}</Text>
                <Text style={styles.nameItemBlack14}>{isTimeViewing}</Text>
              </View>
            </View>
            <Text style={[styles.textTitle18Black, styles.marginTop20]}>
              Thông tin thanh toán
            </Text>
            <View
              style={[
                styles.marginTop15,
                styles.boxWhiteRadius,
                styles.overflow,
              ]}>
              <View style={[styles.RowCenterBetween, styles.marginBottom10]}>
                <Text>Tổng thanh toán</Text>
                <Text style={[styles.fontBold600, styles.colorOrange]}>
                  {isPrice ? isPrice : ''} VND
                </Text>
              </View>
              <View style={[styles.borderTopDashed]}>
                <View style={[styles.RowCenterBetween]}>
                  <Text>Tên tài khoản:</Text>
                  <Text style={[styles.fontBold600]}>Hoang Thanh Tung</Text>
                </View>
                <View
                  style={[styles.RowCenterBetween, styles.marginVertical10]}>
                  <Text>Số tài khoản:</Text>
                  <TouchableOpacity
                    onPress={() => copyToClipboard('195556488')}>
                    <Text style={[styles.fontBold600]}>
                      <IconMateria
                        name="content-copy"
                        size={16}
                        color="#F78B73"
                      />{' '}
                      195556488
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={[styles.RowCenterBetween]}>
                  <Text>Ngân hàng:</Text>
                  <Text style={[styles.fontBold600]}>Techcombank</Text>
                </View>
              </View>
              <View style={[styles.RowCenterBetween, styles.marginTop30]}>
                <View>
                  <Text>Nội dung chuyển tiền:</Text>
                  <TouchableOpacity
                    onPress={() => copyToClipboard('Thanh toan Tarot 546881')}>
                    <Text style={styles.fontBold600}>
                      Thanh toan Tarot 546881{' '}
                      <IconMateria
                        name="content-copy"
                        size={16}
                        color="#F78B73"
                      />
                    </Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity
                  style={styles.alignCenter}
                  onPress={() => setIsImageViewVisible(true)}>
                  <Avatar size={64} source={images.imgQrcode} />
                  <Text style={styles.fontSize10}>zoom</Text>
                </TouchableOpacity>
                <Modal visible={isImageViewVisible} transparent={true}>
                  <ImageViewer
                    imageUrls={[
                      {
                        url: 'https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Ftomochain.com%2F&chs=180x180&choe=UTF-8&chld=L|2',
                      },
                    ]}
                    enableSwipeDown={true}
                    onSwipeDown={() => setIsImageViewVisible(false)}
                  />
                </Modal>
              </View>
            </View>
            <Text
              style={[
                styles.fontSize10,
                styles.colorBlack,
                styles.marginVertical18,
                styles.fontStyleItalic,
              ]}>
              <Text style={styles.fontBold}>Lưu ý</Text>(*): Copy và dán nội
              dung chuyển tiền khi thực hiện thanh toán
            </Text>
            {isCheckPayment === true ? (
              <View style={[styles.marginBottom50]}>
                <View style={[styles.buttonTmp, styles.RowAlignItemsCenter]}>
                  <IconMateria name="timer-sand" size={18} color="#000" />
                  <Text
                    style={[
                      styles.fontBold600,
                      styles.colorBlack,
                      styles.marginRight10,
                      styles.fontBold,
                      styles.fontSize16,
                    ]}>
                    Thanh toán đang chờ xác nhận!
                  </Text>
                </View>
                <View style={[styles.RowAlignItemsCenter, styles.marginTop10]}>
                  <TouchableWithoutFeedback
                    onPress={() => navigation.navigate('newsfeed')}>
                    <Text
                      style={[
                        styles.fontBold600,
                        styles.colorOrange,
                        styles.marginRight10,
                        styles.fontBold,
                        styles.fontSize16,
                      ]}>
                      Về trang chủ
                    </Text>
                  </TouchableWithoutFeedback>
                </View>
              </View>
            ) : inTokenStatus && inTokenStatus === false ? (
              <View style={[styles.RowAlignItemsCenter, styles.marginTop10]}>
                <Text style={[styles.textCenter]}>
                  Phiên đặng nhập đã hết hạn vui lòng
                </Text>
                <TouchableWithoutFeedback onPress={handleLogout}>
                  <Text
                    style={[
                      styles.colorGreen,
                      styles.fontSize16,
                      styles.fontBold,
                      styles.marginLeft10,
                    ]}>
                    Login.
                  </Text>
                </TouchableWithoutFeedback>
              </View>
            ) : (
              <>
                <View style={[styles.RowAlignItemsCenter, styles.marginTop10]}>
                  <Switch
                    onValueChange={setConfirm}
                    value={isConfirm}
                    style={styles.scale07}
                  />
                  <Text
                    style={[
                      isConfirm === false
                        ? styles.colorOrange
                        : styles.colorGreen,
                      styles.fontSize16,
                      styles.fontBold,
                    ]}>
                    Xác nhận đã thanh toán!
                  </Text>
                </View>
                {inNotif && (
                  <Text
                    style={[
                      styles.marginTop10,
                      styles.colorRed,
                      styles.textCenter,
                    ]}>
                    {inNotif}
                  </Text>
                )}
                <TouchableWithoutFeedback
                  onPress={isConfirm === true ? confirmPayment : () => {}}>
                  <View
                    style={[
                      isConfirm === false
                        ? styles.buttonFullDisableWhite
                        : styles.buttonTmp,
                      styles.marginTop20,
                      styles.marginBottom50,
                    ]}>
                    <Text style={styles.buttonText}>Confirm!</Text>
                  </View>
                </TouchableWithoutFeedback>
              </>
            )}
          </View>
        </ScrollView>
      </View>
    </WrapBgBox>
  );
};

export default ScreenPayment;
