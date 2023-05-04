import React, {useState} from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Platform,
  Image,
  Alert,
} from 'react-native';
import {styles} from '../../assets/styles';
import {stylesScreen} from './styles';
import {images, icon} from '../../assets/constants';
import {ScrollView} from 'react-native-gesture-handler';
import IconMateria from 'react-native-vector-icons/MaterialCommunityIcons';
import validator from 'email-validator';
import i18n from '../../languages/i18n';
import LoginSocial from './social';
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
    if (isValidEmail && isPassword && selectedButton) {
      handleInputUser?.();
    } else {
      Alert.alert('Error! Một hoặc nhiều trường có lỗi vui lòng thử lại!');
    }
  };

  return (
    <>
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
                {i18n.t('register')}
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
                <Text style={styles.buttonText}>{i18n.t('register')}</Text>
              </TouchableOpacity>
            </View>
            <View style={[styles.alignCenter, styles.marginVertical34]}>
              <View style={stylesScreen.borderBottom} />
              <Text style={stylesScreen.absolutePosition}>Hoặc</Text>
            </View>
            <View style={[styles.alignCenter]}>
              <LoginSocial />
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
    </>
  );
};

export default Register;
