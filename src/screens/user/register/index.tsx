import React, {useEffect, useState} from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Platform,
  Image,
} from 'react-native';
import {styles} from '../../../assets/styles';
import {stylesScreen} from '../styles';
import {images, icon} from '../../../assets/constants';
import {ScrollView} from 'react-native-gesture-handler';
import IconMateria from 'react-native-vector-icons/MaterialCommunityIcons';
import validator from 'email-validator';
import i18n from '../../../languages/i18n';
import LoginSocial from '../social';
import {apiUser} from '../../../api';
interface RegisterProps {
  navigation?: any;
  handleInputUser?: () => void;
}

const Register = ({handleInputUser}: RegisterProps) => {
  // check input email
  const [isID, setIdUser] = useState(String);
  const [isTel, setTel] = useState(String);
  const [isEmail, setEmail] = useState(String);
  const [isValidEmail, setIsValidEmail] = useState(String);
  const handleEmailChange = (text: string) => {
    setEmail(text);
    setTel(text);
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

  //
  useEffect(() => {
    setIdUser(String(Math.floor(Math.random() * 2000)));
  }, []);

  // Select button
  const [isTypeUser, setTypeUser] = useState('');
  const handleButtonPress = (buttonName: string) => {
    setTypeUser(buttonName);
  };

  // RegisterAccount
  const RegisterAccount = async (
    id: string,
    tel: string,
    email: string,
    password: string,
    typeUser: string,
  ) => {
    // Kiểm tra các giá trị đầu vào có khác rỗng không
    if (!id || !tel || !email || !password || !typeUser) {
      throw new Error('Vui lòng điền đầy đủ thông tin đăng ký.');
    }
    const newUser = {
      id,
      tel,
      email,
      password,
      typeUser,
    };
    const response = await apiUser('register', newUser);
    return response.data;
  };

  // submit
  const handlePress = async () => {
    try {
      const response = await RegisterAccount(
        isID,
        isTel,
        isEmail,
        isPassword,
        isTypeUser,
      );

      if (response.success) {
        console.log('Trạng thái đăng ký >>> ', response.message);
      } else {
        console.log('Trạng thái đăng ký >>>', response.error);
      }
    } catch (error) {
      console.log(error);
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
                    isTypeUser === 'Guest' ? styles.borderBottomOrange : null,
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
                    isTypeUser === 'Expert' ? styles.borderBottomOrange : null,
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
                  styles.buttonTmp
                  // isCheckPasswordValid === 'true' &&
                  // isValidEmail === 'true' &&
                  // TypeUser
                  //   ? styles.buttonTmp
                  //   : styles.buttonFullDisable
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
