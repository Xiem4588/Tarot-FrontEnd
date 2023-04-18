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
} from 'react-native';
import {styles} from '../../../assets/styles';
import {images, icon} from '../../../assets/constants';
import {ScrollView} from 'react-native-gesture-handler';
import WrapBgBox from '../../conponents/wrapBgBox';
import IconMateria from 'react-native-vector-icons/MaterialCommunityIcons';

interface RegisterProps {
  navigation: any;
  handleInputUser: () => void;
}

const Register = ({navigation, handleInputUser}: RegisterProps) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
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
                value={username}
                onChangeText={setUsername}
                placeholder="Email"
              />
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
                value={password}
                onChangeText={setPassword}
                placeholder="***********"
                secureTextEntry
              />
              <IconMateria
                name="eye-off-outline"
                size={16}
                color="#000"
                style={stylesScreen.iconRightInput}
              />
            </View>
            <View style={[styles.Row]}>
              <View style={styles.flexBox}>
                <TouchableOpacity
                  style={[styles.btnTmpAuto]}
                  onPress={() => {}}>
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
                  style={[styles.btnTmpAuto, styles.borderBottomOrange]}
                  onPress={() => {}}>
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
                onPress={() => navigation.navigate('MainNav')}
                style={[styles.buttonFullDisable]}>
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

const stylesScreen = StyleSheet.create({
  image: {
    marginBottom: -80,
    marginTop: 0,
    padding: 0,
    marginLeft: 'auto',
    width: '80%',
    height: Platform.OS === 'ios' ? 220 : 180,
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
