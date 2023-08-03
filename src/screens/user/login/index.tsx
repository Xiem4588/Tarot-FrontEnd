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
import {styles} from '../../../assets/styles';
import {stylesScreen} from '../styles';
import {images} from '../../../assets/constants';
import {ScrollView} from 'react-native-gesture-handler';
import IconMateria from 'react-native-vector-icons/MaterialCommunityIcons';
import validator from 'email-validator';
import i18n from '../../../languages/i18n';
import LoginSocial from '../social';
import {apiUser} from '../../../api';

interface LoginProps {
  handleInputUser: () => void;
  handleLogin: (id: string) => void;
  navigation?: any;
}

const Login = ({handleInputUser, handleLogin, navigation}: LoginProps) => {
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

  // checkLogin
  const checkLogin = async (email: string, password: string) => {
    try {
      const newUser = {
        email,
        password,
      };
      const response = await apiUser('login', newUser);
      return response.data;
    } catch (error) {
      // Xử lý lỗi tại đây (nếu cần)
      throw error;
    }
  };

  // check all to submit
  const handlePress = async () => {
    try {
      const response = await checkLogin(isEmail, isPassword);
      if (isValidEmail && isPasswordValid) {
        if (response.success) {
          handleLogin(response.userID);
        } else {
          console.log('Error login >>>>>', response.message);
          Alert.alert('Error login', response.message);
        }
      } else {
        console.log('Error login >>>>>', `${i18n.t('errorLogin')}`);
        Alert.alert(`${i18n.t('errorLogin')}`);
      }
    } catch (error) {
      // Xử lý lỗi tại đây (nếu cần)
      Alert.alert('Tài khoản chưa tồn tại, vui lòng kiểm tra lại!');
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
                {i18n.t('login')}
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
                  {i18n.t('errorEmail')}
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
                  {i18n.t('errorPass')}
                </Text>
              ) : (
                ''
              )}
            </View>
            <View style={styles.alignCenter}>
              <TouchableOpacity
                onPress={handlePress}
                style={
                  isCheckPasswordValid === 'true' && isValidEmail === 'true'
                    ? styles.buttonTmp
                    : styles.buttonFullDisable
                }>
                <Text style={[styles.buttonText, styles.fontBold600]}>
                  {i18n.t('login')}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('forgotPassword')}
                style={[styles.RowAlignItems, styles.marginTop20]}>
                <Text style={[styles.colorOrange, styles.fontBold600]}>
                  {i18n.t('forgotpassword')}
                </Text>
              </TouchableOpacity>
            </View>
            <View style={[styles.alignCenter, styles.marginVertical34]}>
              <View style={stylesScreen.border} />
              <Text style={stylesScreen.absolutePosition}>{i18n.t('or')}</Text>
            </View>
            <View style={[styles.alignCenter]}>
              <LoginSocial />
              <View
                style={[
                  styles.RowAlignItems,
                  styles.marginVertical18,
                  styles.marginBottom30,
                ]}>
                <Text style={[styles.colorGrray]}>
                  {i18n.t('donotaccount')}
                </Text>
                <TouchableOpacity
                  onPress={handleInputUser}
                  style={styles.RowAlignItems}>
                  <Text style={[styles.colorOrange, styles.marginLeft5]}>
                    {i18n.t('register')}
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

export default Login;
