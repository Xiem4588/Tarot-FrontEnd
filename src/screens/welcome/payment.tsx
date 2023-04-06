import React, {FC, useRef, useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Clipboard,
  Animated,
  Modal,
} from 'react-native';
import {Avatar} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import {icon, images} from '../../../assets/constants';
import {styles} from '../../../assets/styles';
import WrapBgBox from '../../conponents/wrapBgBox';
import Icon from 'react-native-vector-icons/AntDesign';
import ImageViewer from 'react-native-image-zoom-viewer';

// Props
type BookingScreenProps = {
  navigation: any;
  route: any;
  customHeader?: React.ReactNode;
}; //

const ScreenPayment: FC<BookingScreenProps> = ({
  navigation,
  route,
}: BookingScreenProps) => {
  // ID item
  const {id} = route.params;
  console.log('>>> nhan id truyen vao', id);

  // Copy click icon
  const copyToClipboard = (text: string) => {
    Clipboard.setString(text);
  };

  // Animation icon loading
  const spinValue = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 3000,
        useNativeDriver: true,
      }),
    ).start();
  });
  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });
  // end Animation

  // Image Zoom
  const [isImageViewVisible, setIsImageViewVisible] = useState(false);

  return (
    <WrapBgBox>
      <View style={styles.paddingTop50Ios15Adroid}>
        <View style={[styles.RowBetween, styles.paddingHorizontal18]}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Avatar source={icon.iconBackWhite} size={24} />
          </TouchableOpacity>
          <View>
            <View style={styles.RowBetween}>
              <TouchableOpacity onPress={() => navigation.navigate('notify')}>
                <View style={styles.buttonEllipseSm}>
                  <Avatar source={icon.iconHeartActive} size={16} />
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.buttonEllipseSm, styles.marginLeft12]}
                onPress={() => navigation.navigate('setting')}>
                <Avatar source={icon.iconDownloadWhite} size={16} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      <View style={[styles.detailUserBooking]}>
        <View
          style={[
            styles.RowAlignItems,
            styles.paddingHorizontal18,
            styles.marginBottom20,
          ]}>
          <View style={styles.avatarBoxImageTopA}>
            <Avatar
              source={images.AvatarDemo1}
              containerStyle={styles.avatarImage114}
            />
          </View>
          <View style={styles.boxInfo}>
            <Text style={styles.nameItemBlack16}>Lee Jae‑wook</Text>
            <Text style={[styles.fontSize12, styles.marginBottom10]}>
              Có hơn 8 năm kinh nghiệm {'\n'} Có xem khuya & lịch gấp trog ngày
              (có tính thêm phụ phí)
            </Text>
            <View style={styles.RowAlignItems}>
              <View style={styles.RowAlignItems}>
                <Avatar
                  source={icon.iconHeartActive}
                  containerStyle={styles.iconSize12Mgr5}
                />
                <Text style={styles.fontSize12}>14,087</Text>
              </View>
              <View style={[styles.RowAlignItems, styles.marginLeft12]}>
                <Avatar
                  source={icon.iconViewBlack}
                  containerStyle={styles.iconSize12Mgr5}
                />
                <Text style={styles.fontSize12}>25,635</Text>
              </View>
              <View style={[styles.RowAlignItems, styles.marginLeft12]}>
                <Avatar
                  source={icon.iconInstagram}
                  containerStyle={styles.iconSize12Mgr5}
                />
                <TouchableOpacity
                  onPress={() => navigation.navigate('Instagram')}>
                  <Text style={[styles.fontSize12, styles.colorBlue]}>
                    Instagram
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
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
                  instagram.com/tarotbymacduong/?__coig_restricted=1
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
                <Text style={styles.nameItemBlack16}>30 phút</Text>
                <Text style={[styles.fontSize12, styles.marginBottom10]}>
                  Không giới hạn câu hỏi, vấn đề + 1 lá thông điệp kết nối
                </Text>
              </View>
              <View style={[styles.RowCenterBetween, styles.borderTopDashed]}>
                <Text style={styles.nameItemBlack14}>16 Tháng 2 2023</Text>
                <Text style={styles.nameItemBlack14}>09:55 AM</Text>
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
                <Text style={[styles.fontBold, styles.colorOrange]}>
                  300,000 VND
                </Text>
              </View>
              <View style={[styles.borderTopDashed]}>
                <View style={[styles.RowCenterBetween]}>
                  <Text>Tên tài khoản:</Text>
                  <Text style={[styles.fontBold]}>Hoang Thanh Tung</Text>
                </View>
                <View
                  style={[styles.RowCenterBetween, styles.marginVertical10]}>
                  <Text>Số tài khoản:</Text>
                  <TouchableOpacity
                    onPress={() => copyToClipboard('195556488')}>
                    <Text style={[styles.fontBold]}>
                      <Avatar source={icon.iconCopy} size={14} /> 195556488
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={[styles.RowCenterBetween]}>
                  <Text>Ngân hàng:</Text>
                  <Text style={[styles.fontBold]}>Techcombank</Text>
                </View>
              </View>
              <View style={[styles.RowCenterBetween, styles.marginTop30]}>
                <View>
                  <Text>Nội dung chuyển tiền:</Text>
                  <TouchableOpacity
                    onPress={() => copyToClipboard('Thanh toan Tarot 546881')}>
                    <Text style={styles.fontBold}>
                      Thanh toan Tarot 546881{' '}
                      <Avatar source={icon.iconCopy} size={14} />
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
            <View style={[styles.RowAlignItems, styles.marginTop10]}>
              <Text
                style={[
                  styles.fontBold,
                  styles.colorOrange,
                  styles.marginRight10,
                ]}>
                Thanh toán đang chờ xác nhận!
              </Text>
              <Animated.View style={{transform: [{rotate: spin}]}}>
                <Icon name="loading1" size={14} color="#F78B73" />
              </Animated.View>
            </View>
            <TouchableOpacity
              style={[styles.buttonTmp, styles.marginTop20]}
              onPress={() => navigation.goBack()}>
              <Text style={styles.buttonText}>Quay lại</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </WrapBgBox>
  );
};

export default ScreenPayment;
