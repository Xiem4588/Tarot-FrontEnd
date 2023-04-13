import React, {useEffect, useState} from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {styles} from '../../../assets/styles';
import {images} from '../../../assets/constants';
import {ScrollView} from 'react-native-gesture-handler';
import {Avatar} from 'react-native-elements';
import WrapBgBox from '../../conponents/wrapBgBox';
import IconMateria from 'react-native-vector-icons/MaterialCommunityIcons';

interface LoginProps {
  navigation: any;
  handleRegister: () => void;
}

const Login = ({navigation, handleRegister}: LoginProps) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  //
  // const [isRegister, setRegister] = useState(handleRegister);
  // useEffect(() => {
  //   setRegister(handleRegister);
  // }, [handleRegister]);

  return (
    <WrapBgBox>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.flexBox}>
        <ScrollView style={styles.scrollView}>
          <View style={[styles.avatarLogin, styles.alignItems]}>
            <ImageBackground
              source={images.bgHeaderLogin}
              resizeMode="contain"
              style={[styles.ImgBgBottom]}
            />
            <ImageBackground
              source={images.imgHeaderRegister}
              resizeMode="contain"
              style={[styles.ImgIconBag]}
            />
            <View style={[styles.avataProfileEllipse, styles.positionAbsolute]}>
              <Avatar size={80} rounded source={images.avataDefault} />
            </View>
          </View>
          <View style={styles.container}>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>
                Tên đăng nhập<Text style={styles.required}>*</Text>
              </Text>
              <TextInput
                style={styles.input}
                value={username}
                onChangeText={setUsername}
                placeholder="Nhập tên đăng nhập"
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>
                Mật khẩu<Text style={styles.required}>*</Text>
              </Text>
              <TextInput
                style={styles.input}
                value={password}
                onChangeText={setPassword}
                placeholder="***********"
                secureTextEntry
              />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <View style={[styles.paddingHorizontal18, styles.alignRight]}>
        <TouchableOpacity
          style={styles.buttonTmp}
          onPress={() => navigation.navigate('MainNav')}>
          <Text style={styles.buttonText}>Đăng nhập</Text>
        </TouchableOpacity>
        <View
          style={[
            styles.RowAlignItems,
            styles.marginVertical18,
            styles.marginBottom30,
          ]}>
          <Text style={[styles.colorWhite, styles.fontSize12]}>
            Chưa có tài khoản
          </Text>
          <TouchableOpacity
            onPress={handleRegister}
            style={styles.RowAlignItems}>
            <Text
              style={[
                styles.colorOrange,
                styles.marginLeft5,
                styles.fontSize12,
              ]}>
              đăng ký
            </Text>
            <IconMateria name="chevron-right" size={18} color="#F78B73" />
          </TouchableOpacity>
        </View>
      </View>
    </WrapBgBox>
  );
};

export default Login;
