import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Platform,
  Image,
  Alert,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import {styles} from '../../assets/styles';
import {images} from '../../assets/constants';
import IconMateria from 'react-native-vector-icons/MaterialCommunityIcons';
import validator from 'email-validator';
import i18n from '../../languages/i18n';
import LoginSocial from '../conponents/social';
import {apiUser} from '../../services';
import GoogleAdsRewardedAd from '../../googleAds/_rewardedAd';

interface LoginProps {
  handleInputUser: () => void;
  navigation: any;
}

const Login = ({handleInputUser, navigation}: LoginProps) => {
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

  // checkInput
  const [isLoading, setIsLoading] = useState(false);
  const [isStatus, setStatus] = useState(Boolean);
  const [isNotify, setNotify] = useState(String);
  interface userType {
    email: string;
    password: string;
  }

  const requesUserLogin = async (dataUser: userType) => {
    try {
      const res = await apiUser('login', dataUser);
      return res.data;
    } catch (error) {
      throw error;
    }
  };

  // add store
  const dispatch = useDispatch();
  const handlePress = async () => {
    setIsLoading(true);

    setTimeout(async () => {
      try {
        // Reques api
        const dataUser = {
          email: isEmail,
          password: isPassword,
        };
        if (isValidEmail && isPasswordValid) {
          const data = await requesUserLogin(dataUser);
          console.log('----> data login', data);
          if (data.status === true) {
            // add to store
            dispatch({
              type: 'LOGIN_SUCCESS',
              payload: data.token,
            });
          } else {
            Alert.alert(data.notify);
            setStatus(data.status);
            setNotify(data.notify);
          }
        } else {
          Alert.alert(`${i18n.t('errorLogin')}`);
          setNotify(`${i18n.t('errorLogin')}`);
        }
      } catch (error) {
        // Xử lý lỗi tại đây (nếu cần)
        Alert.alert('Network Error 1');
      }
      setIsLoading(false);
    }, 1000); // 1-second delay
  };

  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={[styles.flexBox]}>
        <ScrollView style={styles.scrollView}>
          <View style={[styles.paddingHorizontal24]}>
            <Image source={images.imageLoginTop} style={styles.accountImage} />
            <View>
              <Text
                style={[
                  styles.fontsize36,
                  styles.colorWhite,
                  styles.fontBold,
                  styles.marginBottom30,
                ]}>
                {i18n.t('login')}
              </Text>
              {isNotify && (
                <Text
                  style={[
                    styles.fontSize14,
                    styles.marginBottom15,
                    isStatus !== true ? styles.colorRed : styles.colorGreen,
                  ]}>
                  {isNotify}
                </Text>
              )}
            </View>
            <View style={styles.inputContainer}>
              <IconMateria
                name="email-outline"
                size={16}
                color="#000"
                style={styles.iconLeftInput}
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
                style={styles.iconLeftInput}
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
                style={styles.iconRightInput}>
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
                activeOpacity={
                  isCheckPasswordValid === 'true' && isValidEmail === 'true'
                    ? 0.6
                    : 1
                }
                onPress={
                  isCheckPasswordValid === 'true' && isValidEmail === 'true'
                    ? handlePress
                    : undefined
                }
                style={
                  isCheckPasswordValid === 'true' && isValidEmail === 'true'
                    ? styles.buttonTmp
                    : styles.buttonFullDisable
                }>
                {isLoading ? (
                  <ActivityIndicator color="white" />
                ) : (
                  <Text style={[styles.buttonText, styles.fontBold600]}>
                    {i18n.t('login')}
                  </Text>
                )}
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
              <View style={styles.border} />
              <Text style={styles.absolutePosition}>{i18n.t('or')}</Text>
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
      <GoogleAdsRewardedAd />
    </>
  );
};

export default Login;
