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
import IconMateria from 'react-native-vector-icons/MaterialCommunityIcons';

interface RegisterProps {
  navigation: any;
  handleLogin: () => void;
}

const Login = ({navigation, handleLogin}: RegisterProps) => {
  const [username, setUsername] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [password, setPassword] = useState('');
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
              <Avatar size={80} source={images.avataDefault} />
            </View>
          </View>
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
      <View style={[styles.paddingHorizontal18, styles.alignRight]}>
        <TouchableOpacity
          style={styles.buttonTmp}
          onPress={() => navigation.navigate('MainNav')}>
          <Text style={styles.buttonText}>Đăng ký</Text>
        </TouchableOpacity>

        <View
          style={[
            styles.RowAlignItems,
            styles.marginVertical18,
            styles.marginBottom30,
          ]}>
          <Text style={[styles.colorWhite, styles.fontSize12]}>
            Đã có tài khoản
          </Text>
          <TouchableOpacity onPress={handleLogin} style={styles.RowAlignItems}>
            <Text
              style={[
                styles.colorOrange,
                styles.marginLeft5,
                styles.fontSize12,
              ]}>
              đăng nhập
            </Text>
            <IconMateria name="chevron-right" size={18} color="#F78B73" />
          </TouchableOpacity>
        </View>
      </View>
    </WrapBgBox>
  );
};

export default Login;
