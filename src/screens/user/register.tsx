import React, {useState} from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Platform,
  Image,
  StyleSheet,
  Alert,
  Dimensions,
} from 'react-native';
import {styles} from '../../../assets/styles';
import {images, icon} from '../../../assets/constants';
import {ScrollView} from 'react-native-gesture-handler';
import WrapBgBox from '../../conponents/wrapBgBox';
import IconMateria from 'react-native-vector-icons/MaterialCommunityIcons';
import validator from 'email-validator';
interface RegisterProps {
  navigation?: any;
  handleInputUser?: () => void;
}

const Register = ({handleInputUser}: RegisterProps) => {
  // check input email
  const [isEmail, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState('');
  const handleEmailChange = (text: string) => {
    setEmail(text);
    const isValid = validator.validate(text);
    if (isValid) {
      setIsValidEmail('true');
    } else {
      setIsValidEmail('false');
    }
  };
  // Show password
  const [isPassword, setPassword] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isCheckPasswordValid, setisCheckPasswordValidValid] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handlePasswordChange = (text: string) => {
    setPassword(text);
    setIsPasswordValid(text.length >= 8);
    setisCheckPasswordValidValid(`${isPasswordValid}`);
  };
  // Select button
  const [selectedButton, setSelectedButton] = useState('');
  const handleButtonPress = (buttonName: string) => {
    setSelectedButton(buttonName);
  };
  // check all to submit
  const handlePress = () => {
    if (isValidEmail && isPassword) {
      handleInputUser?.();
    } else {
      Alert.alert('Error! Một hoặc nhiều trường có lỗi vui lòng thử lại!');
    }
  };

  return (
    <WrapBgBox>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={[styles.flexBox]}>
        <ScrollView style={styles.scrollView}>
          <View style={[styles.paddingHorizontal24]}>
            <Image source={images.imageLoginTop} style={stylesScreen.image} />
            <View>
              <Text
                style={[
                  styles.fontsize48,
                  styles.colorWhite,
                  styles.fontBold,
                  styles.marginBottom30,
                ]}>
                Đăng ký
              </Text>
            </View>
            <View style={styles.inputContainer}>
              <IconMateria
                name="email-outline"
                size={16}
                color="#000"
                style={stylesScreen.iconLeftInput}
              />
              <TextInput
                style={styles.inputForm}
                value={isEmail}
                onChangeText={handleEmailChange}
                placeholder="Email"
              />
              {isValidEmail === 'false' ? (
                <Text style={[styles.colorOrange, styles.marginTop5]}>
                  Email chưa đúng
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
                placeholder="***********"
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
            <View style={[styles.Row]}>
              <View style={styles.flexBox}>
                <TouchableOpacity
                  onPress={() => handleButtonPress('Guest')}
                  style={[
                    styles.btnTmpAuto,
                    styles.borderBottomWhite,
                    selectedButton === 'Guest'
                      ? styles.borderBottomOrange
                      : null,
                  ]}>
                  <Image
                    source={icon.iconGuest}
                    style={stylesScreen.iconSize24}
                  />
                  <Text
                    style={[
                      styles.fontSize14,
                      styles.colorBlack,
                      styles.fontBold600,
                      styles.marginTop5,
                    ]}>
                    Khách
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={stylesScreen.separator} />
              <View style={styles.flexBox}>
                <TouchableOpacity
                  onPress={() => handleButtonPress('Expert')}
                  style={[
                    styles.btnTmpAuto,
                    styles.borderBottomWhite,
                    selectedButton === 'Expert'
                      ? styles.borderBottomOrange
                      : null,
                  ]}>
                  <Image
                    source={icon.iconExpert}
                    style={stylesScreen.iconSize24}
                  />
                  <Text
                    style={[
                      styles.fontSize14,
                      styles.colorBlack,
                      styles.fontBold600,
                      styles.marginTop5,
                    ]}>
                    Chuyên gia
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={[styles.alignCenter, styles.marginTop24]}>
              <TouchableOpacity
                onPress={handlePress}
                style={
                  isCheckPasswordValid === 'true' &&
                  isValidEmail === 'true' &&
                  selectedButton
                    ? styles.buttonTmp
                    : styles.buttonFullDisable
                }>
                <Text style={styles.buttonText}>Đăng ký</Text>
              </TouchableOpacity>
            </View>
            <View style={[styles.alignCenter, styles.marginVertical34]}>
              <View style={stylesScreen.borderBottom} />
              <Text style={stylesScreen.absolutePosition}>Hoặc</Text>
            </View>
            <View style={[styles.alignCenter]}>
              <View style={styles.RowAlignItems}>
                <TouchableOpacity style={styles.btnTmpAuto} onPress={() => {}}>
                  <IconMateria name="facebook" size={26} color={'#007AD9'} />
                </TouchableOpacity>
                <View style={stylesScreen.separator} />
                <TouchableOpacity
                  style={[styles.btnTmpAuto]}
                  onPress={() => {}}>
                  <IconMateria name="google" size={24} color={'#EB4335'} />
                </TouchableOpacity>
              </View>
              <View
                style={[
                  styles.RowAlignItems,
                  styles.marginVertical18,
                  styles.marginBottom30,
                ]}>
                <Text style={[styles.colorGrray]}>Bạn đã có tài khoản?</Text>
                <TouchableOpacity
                  onPress={handleInputUser}
                  style={styles.RowAlignItems}>
                  <Text style={[styles.colorOrange, styles.marginLeft5]}>
                    đăng nhập
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
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
    height: height >= 680 ? (height >= 720 ? 220 : 150) : 120,
    resizeMode: 'contain',
  },
  iconSize24: {
    height: 24,
    resizeMode: 'contain',
  },
  iconLeftInput: {
    position: 'absolute',
    left: 12,
    top: 12,
    zIndex: 3,
  },
  iconRightInput: {
    position: 'absolute',
    right: 12,
    top: 12,
    zIndex: 3,
  },
  borderBottom: {
    width: '100%',
    height: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.4)',
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
});

export default Register;
