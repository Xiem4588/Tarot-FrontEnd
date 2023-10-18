import React, {useState} from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Platform,
  Image,
  ActivityIndicator,
  Alert,
  ScrollView,
} from 'react-native';
import {styles} from '../../assets/styles';
import {images, icon} from '../../assets/constants';
import IconMateria from 'react-native-vector-icons/MaterialCommunityIcons';
import validator from 'email-validator';
import i18n from '../../languages/i18n';
import LoginSocial from '../conponents/social';
import {postUserAccount} from '../../services';
interface RegisterProps {
  navigation?: any;
  handleInputUser?: () => void;
}

const Register = ({handleInputUser}: RegisterProps) => {
  // check input email
  // const [isTel, setTel] = useState(Number);
  const [isEmail, setEmail] = useState(String);
  const [isValidEmail, setIsValidEmail] = useState(String);
  const handleEmailChange = (text: string) => {
    setEmail(text);
    // setTel(text);
    const isValid = validator.validate(text);
    if (isValid) {
      setIsValidEmail('true');
    } else {
      setIsValidEmail('false');
    }
  };
  // Show password
  const [isPassword, setPassword] = useState(String);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isCheckPasswordValid, setisCheckPasswordValidValid] = useState(String);
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handlePasswordChange = (text: string) => {
    setPassword(text);
    setIsPasswordValid(text.length >= 6);
    setisCheckPasswordValidValid(`${isPasswordValid}`);
  };

  // Select button
  const [isTypeUser, setTypeUser] = useState(String);
  const handleButtonPress = (buttonName: string) => {
    setTypeUser(buttonName);
  };

  // Register new Account
  const [isLoading, setIsLoading] = useState(false);
  const [isStatus, setStatus] = useState(false);
  const [isNotify, setNotify] = useState('');
  interface userType {
    email: string;
    password: string;
    typeUser: string;
    createDate?: string;
    fullName?: string;
    dateOfBirth?: string;
    desc?: string;
    tel?: string;
  }

  const RegisterAccount = async (dataUser: userType) => {
    const response = await postUserAccount('register', dataUser);
    return response;
  };

  const handlePress = async () => {
    setIsLoading(true); // Bắt đầu hiển thị trạng thái loading
    setTimeout(async () => {
      if (!isEmail || !isPassword || !isTypeUser) {
        setNotify('Các trường là bắt buộc nhập!');
      } else if (isValidEmail === 'true') {
        try {
          const newUser = {
            email: isEmail,
            password: isPassword,
            typeUser: isTypeUser,
            createDate: String(new Date().toLocaleString()),
          };

          // Reques api
          const response = await RegisterAccount(newUser);
          const data = response.data;

          if (data.status === true) {
            setNotify(data.notify);
            setStatus(data.status);
            Alert.alert(data.notify, '', [
              {
                text: 'OK',
                onPress: () => {
                  handleInputUser?.();
                },
              },
            ]);
          } else {
            Alert.alert(data.notify);
            setNotify(data.notify);
            setStatus(data.status);
          }
        } catch (error: any) {
          Alert.alert(error.data.notify);
          setNotify(error.data.notify);
          console.log('3 >>>>', error.data.notify);
        }
      } else {
        Alert.alert('error');
        setNotify('Thông tin đăng ký không hợp lệ!');
        console.log('4 >>>> Error!');
      }
      setIsLoading(false);
    }, 1000); // 1-second delay
  };

  return (
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
              {i18n.t('register')}
            </Text>
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
                Email chưa đúng
              </Text>
            ) : null}
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
                  isTypeUser === 'Guest' ? styles.borderBottomOrange4 : null,
                ]}>
                <Image
                  source={icon.iconGuest}
                  style={styles.accountIconSize24}
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
            <View style={styles.separator} />
            <View style={styles.flexBox}>
              <TouchableOpacity
                onPress={() => handleButtonPress('Expert')}
                style={[
                  styles.btnTmpAuto,
                  styles.borderBottomWhite,
                  isTypeUser === 'Expert' ? styles.borderBottomOrange4 : null,
                ]}>
                <Image
                  source={icon.iconExpert}
                  style={styles.accountIconSize24}
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
              activeOpacity={
                isValidEmail === 'true' &&
                isCheckPasswordValid === 'true' &&
                isTypeUser
                  ? 0.6
                  : 1
              }
              onPress={
                isValidEmail === 'true' &&
                isCheckPasswordValid === 'true' &&
                isTypeUser
                  ? handlePress
                  : undefined
              }
              style={[
                isValidEmail === 'true' &&
                isCheckPasswordValid === 'true' &&
                isTypeUser
                  ? styles.buttonTmp
                  : styles.buttonFullDisable,
              ]}>
              {isLoading ? (
                <ActivityIndicator color="white" />
              ) : (
                <Text style={styles.buttonText}>{i18n.t('register')}</Text>
              )}
            </TouchableOpacity>
            {isNotify && (
              <Text
                style={[
                  styles.fontSize14,
                  styles.marginVertical18,
                  isStatus !== true ? styles.colorRed : styles.colorGreen,
                ]}>
                {isNotify}
              </Text>
            )}
          </View>
          <View style={[styles.alignCenter, styles.marginVertical34]}>
            <View style={styles.accountBorderBottom} />
            <Text style={styles.absolutePosition}>Hoặc</Text>
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
  );
};

export default Register;
