import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {images} from '../../assets/constants';
import {styles} from '../../assets/styles';
import {stylesScreen} from './styles';
import {useTranslation} from 'react-i18next';
import i18n from '../../languages/i18n';
import IconMateria from 'react-native-vector-icons/MaterialCommunityIcons';

interface ForgotProps {
  selectedButton: string;
  handleNext: () => void;
  handleButtonPress: (buttonName: string) => void;
}

const ForgotPassword = ({
  handleButtonPress,
  selectedButton,
  handleNext,
}: ForgotProps) => {
  useTranslation();

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

  // thoi gian dem nguoc
  const [seconds, setSeconds] = useState(60);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(() => seconds - 1);
    }, 1000);

    // Hủy interval khi seconds = 0
    if (seconds === 0) {
      clearInterval(interval);
    }
    // Hủy interval khi component unmount
    return () => clearInterval(interval);
  }, [seconds]);

  return (
    <View>
      <View style={[styles.alignItems]}>
        <Image
          source={images.visuaforgotpassword}
          style={stylesScreen.visualImage}
        />
      </View>
      <View style={styles.marginBottom20}>
        <Text style={styles.fontsize16White}>
          Chọn thông tin liên lạc để đặt lại mật khẩu
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => (handleButtonPress ? handleButtonPress('sms') : '')}
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
          <Text style={[styles.colorBlack, styles.fontBold700]}>
            {hiddenPhone}
          </Text>
        </View>
        {selectedButton === 'sms' ? (
          <View style={stylesScreen.checkCircle}>
            <IconMateria name="check-circle" size={16} color="#4BAE4F" />
          </View>
        ) : (
          ''
        )}
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => (handleButtonPress ? handleButtonPress('email') : '')}
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
          <Text style={[styles.colorBlack, styles.fontBold700]}>
            {hiddenEmail}
          </Text>
        </View>
        {selectedButton === 'email' ? (
          <View style={stylesScreen.checkCircle}>
            <IconMateria name="check-circle" size={16} color="#4BAE4F" />
          </View>
        ) : (
          ''
        )}
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handleNext}
        style={selectedButton ? styles.buttonTmp : styles.buttonFullDisable}>
        <Text style={styles.buttonText}>{i18n.t('next')}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ForgotPassword;
