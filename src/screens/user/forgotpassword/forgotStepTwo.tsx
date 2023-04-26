import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import {styles} from '../../../assets/styles';
import {useTranslation} from 'react-i18next';
import i18n from '../../../languages/i18n';

interface ForgotProps {
  selectedButton: string;
  handleConfirm: () => void;
}

const ForgotStepTwo = ({selectedButton, handleConfirm}: ForgotProps) => {
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

  // Input enter OTP
  const [otp, setOtp] = useState(['', '', '', '', '']);
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
    <View style={[styles.marginTop50]}>
      <View>
        <Text style={[styles.fonsize16White]}>
          OTP đã được gửi tới{' '}
          <Text style={styles.fontBold}>
            {selectedButton === 'sms' ? hiddenPhone : hiddenEmail}
          </Text>
        </Text>
      </View>
      <View style={[styles.Row, styles.alignItems, styles.marginVertical34]}>
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
      <View style={[styles.Row, styles.alignItems, styles.marginBottom30]}>
        <Text style={styles.fonsize16White}>
          Thời gian còn lại: <Text style={styles.colorRed}>{seconds}</Text>{' '}
          giây.
        </Text>
        {seconds === 0 ? (
          <TouchableOpacity
            style={styles.marginLeft5}
            onPress={() => setSeconds(60)}>
            <Text
              style={[
                styles.fonsize16White,
                styles.fontBold700,
                styles.colorOrange,
              ]}>
              Gửi lại
            </Text>
          </TouchableOpacity>
        ) : (
          ''
        )}
      </View>
      <TouchableOpacity onPress={handleConfirm} style={styles.buttonTmp}>
        <Text style={styles.buttonText}>{i18n.t('confirm')}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ForgotStepTwo;
