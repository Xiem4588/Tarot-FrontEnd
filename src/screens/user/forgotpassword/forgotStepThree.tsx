import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Modal,
  Image,
} from 'react-native';
import {styles} from '../../../assets/styles';
import {stylesScreen} from './styles';
import {useTranslation} from 'react-i18next';
import i18n from '../../../languages/i18n';
import IconMateria from 'react-native-vector-icons/MaterialCommunityIcons';
import {images} from '../../../assets/constants';

interface ForgotProps {
  navigation: any;
}

const ForgotStepThree = ({navigation}: ForgotProps) => {
  useTranslation();

  // check update new pass
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

  // check continue forgot password
  const [isModalContinue, setModalContinue] = useState(false);
  const openModalContinue = () => {
    setModalContinue(true);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigation.navigate('MainNav');
      setModalContinue(false);
    }, 1200); // chờ 5 giây trước khi chuyển hướng

    return () => {
      clearTimeout(timeoutId); // clear timeout nếu modal bị đóng trước khi kết thúc
    };
  });

  // thoi gian dem nguoc
  const [seconds, setSeconds] = useState(7);
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
        <TouchableOpacity onPress={openModalContinue} style={styles.buttonTmp}>
          <Text style={styles.buttonText}>{i18n.t('confirm')}</Text>
        </TouchableOpacity>
      </View>
      <Modal transparent={true} visible={isModalContinue} animationType="slide">
        <View
          style={[styles.padding24, styles.flexBox, styles.backgBlackOpacity]}>
          <View style={[styles.alignItems, styles.flexBox, styles.padding18]}>
            <View style={styles.boxWhiteRadius40}>
              <View>
                <Image
                  source={images.iconContinue}
                  style={stylesScreen.visualImageContinue}
                />
              </View>
              <View style={styles.alignCenter}>
                <View style={styles.marginVertical24}>
                  <Text
                    style={[
                      styles.fontSize24,
                      styles.fontBold,
                      styles.colorOrange,
                    ]}>
                    Chúc mừng!
                  </Text>
                </View>
                <View>
                  <Text
                    style={[
                      styles.colorBlack,
                      styles.fontSize16,
                      styles.lineHeight22,
                      styles.textCenter,
                    ]}>
                    <Text style={styles.fontBold}>
                      Tài khoản của bạn đã sẵn sàng.
                    </Text>{' '}
                    Bạn sẽ được chuyển tới màn hình chính trong ít giây{' '}
                    {seconds}s.
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ForgotStepThree;
