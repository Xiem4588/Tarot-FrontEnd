import React, {useState} from 'react';
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

const Login = ({navigation}: any) => {
  const [username, setUsername] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [password, setPassword] = useState('');
  return (
    <WrapBgBox>
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
          <Avatar size={80} source={images.avataDefault} />
        </View>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.flexBox}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.container}>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>
                Tên của bạn<Text style={styles.required}>*</Text>
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
                Ngày sinh<Text style={styles.required}>*</Text>
              </Text>
              <TextInput
                style={styles.input}
                value={dateOfBirth}
                onChangeText={setDateOfBirth}
                placeholder="dd/mm/yy"
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
      <View style={styles.paddingHorizontal18}>
        <TouchableOpacity
          style={styles.buttonTmp}
          onPress={() => navigation.navigate('tabNavigator')}>
          <Text style={styles.buttonText}>Đăng ký</Text>
        </TouchableOpacity>
      </View>
    </WrapBgBox>
  );
};

export default Login;
