import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  StyleSheet,
  TextInput,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {images} from '../../../assets/constants';
import {styles} from '../../../assets/styles';
import WrapBgBox from '../../../conponents/wrapBgBox';
import Header from '../../../conponents/header';
import IconMateria from 'react-native-vector-icons/MaterialCommunityIcons';
import {useTranslation} from 'react-i18next';
import i18n from '../../../languages/i18n';

const ForgotPassword = ({navigation}: any) => {
  useTranslation();

  // Select button
  const [selectedButton, setSelectedButton] = useState('');
  const handleButtonPress = (buttonName: string) => {
    setSelectedButton(buttonName);
  };

  // Ma hoa Email
  const email = 'Ohdlf12345@gmail.com';
  const lengthEmail = email.indexOf('@'); // xác định số ký tự từ đầu đến giá trị @ của email
  const prefixEmail = email.slice(0, lengthEmail - 8); // lấy 5 ký tự đầu tiên của phần tiền tố
  const suffixEmail = email.slice(lengthEmail - 2); // lấy 3 ký tự phần đuôi của email
  const hiddenEmail = prefixEmail + '*****' + suffixEmail;
  // Ma hoa SDT
  const phoneNumber = '+84 541234584';
  const lengthPhone = phoneNumber.length;
  const prefixPhone = phoneNumber.slice(0, lengthPhone - 6); // lấy 5 ký tự đầu tiên của phần tiền tố
  const suffixPhone = phoneNumber.slice(lengthPhone - 3); // lấy 3 ký tự phần đuôi của phone number
  const hiddenPhone = prefixPhone + '*****' + suffixPhone;

  // screen confrirm
  const [isConfirm, setConfirm] = useState(true);
  const handleNext = () => {
    setConfirm(false);
  };

  // screen set new password
  const [isNewPass, setNewPass] = useState(true);
  const handleConfirm = () => {
    setNewPass(false);
  };

  // check new pass
  const [isPassword, setPassword] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isCheckPasswordValid, setisCheckPasswordValidValid] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const handlePasswordChange = (text: string) => {
    setPassword(text);
    setIsPasswordValid(text.length >= 8);
    setisCheckPasswordValidValid(`${isPasswordValid}`);
  };
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  // Input enter OTP
  const [otp, setOtp] = useState(['', '', '', '']);
  const handleOtpChange = (index: number, value: string) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  };

  // thoi gian dem nguoc
  const [seconds, setSeconds] = useState(60);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds - 1);
    }, 1000);

    // Hủy interval khi seconds = 0
    if (seconds === 0) {
      clearInterval(interval);
    }
    // Hủy interval khi component unmount
    return () => clearInterval(interval);
  }, [seconds]);

  return (
    <WrapBgBox>
      <Header navigation={navigation} title={i18n.t('forgotpassword')} />
      <ScrollView>
        <View style={[styles.paddingHorizontal18]}>
          {isConfirm ? (
            <View>
              <View style={[styles.alignItems]}>
                <Image
                  source={images.visuaforgotpassword}
                  style={styles.visualImage}
                />
              </View>
              <View style={styles.marginBottom20}>
                <Text style={styles.fonsize16White}>
                  Chọn thông tin liên lạc để đặt lại mật khẩu
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => handleButtonPress('sms')}
                style={[
                  styles.RowAlignItems,
                  styles.btnTmpAutoLeft,
                  styles.borderBottomWhite,
                  selectedButton === 'sms' ? styles.borderBottomOrange : null,
                ]}>
                <View style={[stylesScreen.ellipseIcon]}>
                  <IconMateria name="chat-outline" size={16} color="#000" />
                </View>
                <View style={styles.marginLeft10}>
                  <Text
                    style={[
                      styles.fontSize12,
                      styles.colorGrray,
                      styles.marginBottom5,
                    ]}>
                    {i18n.t('otpfromsms')}
                  </Text>
                  <Text>{hiddenPhone}</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleButtonPress('email')}
                style={[
                  styles.RowAlignItems,
                  styles.btnTmpAutoLeft,
                  styles.borderBottomWhite,
                  styles.marginVertical18,
                  selectedButton === 'email' ? styles.borderBottomOrange : null,
                ]}>
                <View style={[stylesScreen.ellipseIcon]}>
                  <IconMateria name="email-outline" size={16} color="#000" />
                </View>
                <View style={styles.marginLeft10}>
                  <Text
                    style={[
                      styles.fontSize12,
                      styles.colorGrray,
                      styles.marginBottom5,
                    ]}>
                    {i18n.t('otpfromemail')}
                  </Text>
                  <Text>{hiddenEmail}</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={handleNext}
                style={
                  selectedButton ? styles.buttonTmp : styles.buttonFullDisable
                }>
                <Text style={styles.buttonText}>{i18n.t('next')}</Text>
              </TouchableOpacity>
            </View>
          ) : isNewPass ? (
            <View style={[styles.marginTop50]}>
              <View style={styles.marginBottom20}>
                <Text style={[styles.fonsize16White]}>
                  OTP đã được gửi tới{' '}
                  <Text style={styles.fontBold}>
                    {selectedButton === 'sms' ? hiddenPhone : hiddenEmail}
                  </Text>
                </Text>
              </View>
              <View style={[styles.RowCenterBetween]}>
                {otp.map((item, index) => (
                  <TextInput
                    key={index}
                    style={styles.inputOtp}
                    maxLength={1}
                    onChangeText={value => handleOtpChange(index, value)}
                    value={item}
                    keyboardType="numeric"
                  />
                ))}
              </View>
              <View
                style={[
                  styles.Row,
                  styles.alignItems,
                  styles.marginVertical34,
                ]}>
                {seconds === 0 ? (
                  <Text style={styles.fonsize16White}>Đã hết thời gian</Text>
                ) : (
                  <Text style={styles.fonsize16White}>
                    Thời gian còn lại:{' '}
                    <Text style={styles.colorRed}>{seconds}</Text> giây
                  </Text>
                )}
              </View>
              <TouchableOpacity
                onPress={handleConfirm}
                style={
                  seconds === 0 && selectedButton
                    ? styles.buttonTmp
                    : styles.buttonFullDisable
                }>
                <Text style={styles.buttonText}>{i18n.t('confirm')}</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={[styles.marginTop50, styles.flexBox]}>
              <View>
                <View style={styles.marginBottom20}>
                  <Text style={[styles.fonsize16White]}>Tạo mật khẩu mới</Text>
                </View>
                <View style={styles.inputContainer}>
                  <IconMateria
                    name="lock-outline"
                    size={16}
                    color="#000"
                    style={stylesScreen.iconLeftInput}
                  />
                  <TextInput
                    style={styles.inputForm}
                    value={isPassword}
                    onChangeText={handlePasswordChange}
                    placeholder="Mật khẩu mới"
                    secureTextEntry={!showPassword}
                  />
                  <TouchableOpacity
                    onPress={handleShowPassword}
                    style={stylesScreen.iconRightInput}>
                    <IconMateria
                      name={showPassword ? 'eye-outline' : 'eye-off-outline'}
                      size={16}
                      color="#000"
                    />
                  </TouchableOpacity>
                  {isCheckPasswordValid === 'false' ? (
                    <Text style={[styles.colorOrange, styles.marginTop5]}>
                      Password phải lớn hơn 8 ký tự
                    </Text>
                  ) : (
                    ''
                  )}
                </View>
                <View style={styles.inputContainer}>
                  <IconMateria
                    name="lock-outline"
                    size={16}
                    color="#000"
                    style={stylesScreen.iconLeftInput}
                  />
                  <TextInput
                    style={styles.inputForm}
                    value={isPassword}
                    onChangeText={handlePasswordChange}
                    placeholder="Nhập lại mật khẩu"
                    secureTextEntry={!showPassword}
                  />
                  <TouchableOpacity
                    onPress={handleShowPassword}
                    style={stylesScreen.iconRightInput}>
                    <IconMateria
                      name={showPassword ? 'eye-outline' : 'eye-off-outline'}
                      size={16}
                      color="#000"
                    />
                  </TouchableOpacity>
                  {isCheckPasswordValid === 'false' ? (
                    <Text style={[styles.colorOrange, styles.marginTop5]}>
                      Password phải lớn hơn 8 ký tự
                    </Text>
                  ) : (
                    ''
                  )}
                </View>
              </View>
              <View style={styles.marginTopAuto}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('MainNav')}
                  style={
                    selectedButton ? styles.buttonTmp : styles.buttonFullDisable
                  }>
                  <Text style={styles.buttonText}>{i18n.t('confirm')}</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </View>
      </ScrollView>
    </WrapBgBox>
  );
};

const {height} = Dimensions.get('window');
const stylesScreen = StyleSheet.create({
  image: {
    marginBottom: -80,
    marginTop: 0,
    padding: 0,
    marginLeft: 'auto',
    width: '80%',
    height: height >= 680 ? (height >= 720 ? 250 : 180) : 150,
    resizeMode: 'contain',
  },
  ellipseIcon: {
    backgroundColor: '#A9B0F5',
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
  iconRightInput: {
    position: 'absolute',
    right: 12,
    top: 12,
    zIndex: 3,
  },
  border: {
    width: '100%',
    height: 1,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    zIndex: -1,
  },
  absolutePosition: {
    position: 'absolute',
    top: -10, // Đặt top bằng âm để đưa văn bản lên trên
    backgroundColor: '#171717',
    paddingHorizontal: 16,
    color: '#616161',
    fontFamily: 'Montserrat',
  },
  separator: {
    width: 18,
  },

  iconLeftInput: {
    position: 'absolute',
    left: 12,
    top: 12,
    zIndex: 3,
  },
});

export default ForgotPassword;
