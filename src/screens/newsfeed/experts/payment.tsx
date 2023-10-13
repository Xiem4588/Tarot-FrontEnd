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
import {icon, images} from '../../../assets/constants';
import {styles} from '../../../assets/styles';
import WrapBgBox from '../../../conponents/wrapBgBox';
import IconMateria from 'react-native-vector-icons/MaterialCommunityIcons';
import ImageViewer from 'react-native-image-zoom-viewer';
import Header from '../../../conponents/header';
import {navProps} from './types';
import {useSelector} from 'react-redux';
import Infor from './infor';
import {postUserBooking} from '../../../services';

const ScreenPayment = ({navigation, route}: navProps) => {
  // get store data
  const user = useSelector((state: any) => state.STORE_USER_DETAIL.user);
  const token = useSelector((state: any) => state.STORE_ACCOUNT_DATA.token);
  //
  const [isConfirm, setConfirm] = useState(false);
  const [isCheckPayment, setCheckPayment] = useState(false);
  const [isTimeBooking, setTimeBooking] = useState('');
  const [isDateBooking, setDateBooking] = useState('');
  const [isPrice, setPrice] = useState('');
  const [isDesc, setDesc] = useState('');
  const [isTitle, setTitle] = useState('');

  const dataBooking = route.params.dataBooking;
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (dataBooking) {
          const time = await dataBooking.time;
          setTimeBooking(time);
          const date = await dataBooking.date;
          setDateBooking(date);
          const price = await dataBooking.price;
          setPrice(price.price);
          setDesc(price.desc);
          setTitle(price.title);
        }
      } catch (error) {
        return error;
      }
    };
    fetchData();
  }, [dataBooking]);

  // set
  const confirmPayment = async () => {
    const res = await postUserBooking('booking', dataBooking, token);
    console.log('---- res postUserBooking', res);
    setCheckPayment(true);
  };

  // Copy click icon
  const copyToClipboard = (text: string) => {
    Clipboard.setString(text);
  };

  // Image Zoom
  const [isImageViewVisible, setIsImageViewVisible] = useState(false);

  return (
    <WrapBgBox>
      <Header navigation={navigation} name="payment" title={''} />

      <View style={[styles.detailUserBooking]}>
        <Infor />
        <ScrollView>
          <View style={styles.paddingHorizontal18}>
            <Text>Bạn sẽ liên kết với chuyên gia tại:</Text>
            <View style={[styles.RowAlignItems, styles.marginTop5]}>
              <Avatar
                source={icon.iconInstagram}
                containerStyle={styles.iconSize12Mgr5}
              />
              <TouchableOpacity
                onPress={() => navigation.navigate('Instagram')}>
                <Text
                  numberOfLines={1}
                  style={[styles.fontSize12, styles.colorBlue]}>
                  instagram.com/{user.intargram}
                </Text>
              </TouchableOpacity>
            </View>
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
                <Text style={styles.nameItemBlack14}>{isDateBooking}</Text>
                <Text style={styles.nameItemBlack14}>{isTimeBooking}</Text>
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
            {isCheckPayment === true ? (
              <View
                style={[
                  styles.RowAlignItemsCenter,
                  styles.marginTop20,
                  styles.marginBottom50,
                ]}>
                <IconMateria name="timer-sand" size={18} color="#F78B73" />
                <Text
                  style={[
                    styles.fontBold600,
                    styles.colorOrange,
                    styles.marginRight10,
                    styles.fontBold,
                    styles.fontSize16,
                  ]}>
                  Thanh toán đang chờ xác nhận!
                </Text>
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
