import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import {Avatar} from 'react-native-elements';
import {images} from '../../../assets/constants';
import {styles} from '../../../assets/styles';
import WrapBgBox from '../../../conponents/wrapBgBox';
import Header from '../../../conponents/header';
import {LanguageSwitcher} from '../../../conponents/LanguageSwitcher';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useTranslation} from 'react-i18next';
import i18n from '../../../languages/i18n';
import {useDispatch, useSelector} from 'react-redux';
import {apiUpdateAccount} from '../../../services';
import {updateUserSuccess} from '../../../redux/store/user/account/types';
import LoadingFullScreen from '../../conponents/loading';
import DatePicker from 'react-native-datepicker';
import AvatarUpload from './component/avatar';

const SettingScreen = ({navigation}: any) => {
  // Language
  useTranslation();

  // get data from store
  const user = useSelector((state: any) => state.account?.user);
  const token = useSelector((state: any) => state.account?.token);

  // Xóa token khỏi AsyncStorage khi người dùng đăng xuất
  const dispatch = useDispatch();
  const signOut = async () => {
    dispatch({
      type: 'LOG_OUT',
    });
  };

  const handleLogout = () => {
    signOut();
    navigation.navigate('user');
  };

  // edit input
  const [isName, setName] = useState('');
  const [isDateOfBirth, setDateOfBirth] = useState('');
  const [isDesc, setDesc] = useState('');
  const [isTelValue, setTelValue] = useState('');
  const [isPassword, setPassword] = useState('');
  const handleChange = (key: string) => (value: string) => {
    switch (key) {
      case 'name':
        setName(value);
        break;
      case 'date':
        setDateOfBirth(value);
        break;
      case 'desc':
        setDesc(value);
        break;
      case 'tel':
        setTelValue(String(value));
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  //
  const [notification, setNotification] = useState('');
  useEffect(() => {
    if (notification) {
      // Nếu có thông báo, thiết lập một timeout để tự động ẩn nó sau 3 giây
      const timer = setTimeout(() => {
        setNotification('');
      }, 1000);

      // Hủy timeout khi component bị hủy
      return () => clearTimeout(timer);
    }
  }, [notification]);

  // Toggle
  const [isTogglePass, setTogglePass] = useState(false);
  const [isToggleDesc, setToggleDesc] = useState(false);
  const handleToggle = (value: string) => {
    switch (value) {
      case 'newPass':
        setTogglePass(!isTogglePass);
        break;
      case 'desc':
        setToggleDesc(!isToggleDesc);
        break;
      default:
        break;
    }
  };

  // focus Input: Sử dụng một useRef để tham chiếu đến trường TextInput:
  const inputRefs = [
    useRef<TextInput | null>(null),
    useRef<TextInput | null>(null),
    useRef<TextInput | null>(null),
    useRef<TextInput | null>(null),
    useRef<TextInput | null>(null),
  ];

  const focusInput = (index: number) => {
    inputRefs[index]?.current?.focus();
  };

  // date of birth
  const handleDateChange = (date: string) => {
    setDateOfBirth(date);
  };
  // Lấy ngày hiện tại
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth() + 1; // Tháng bắt đầu từ 0
  const currentDay = today.getDate();
  // Định dạng ngày hiện tại thành "DD/MM/YYYY"
  const formattedCurrentDate = `${currentDay}/${currentMonth}/${currentYear}`;
  // click icon open DatePicker
  const datePickerRef = useRef<DatePicker | null>(null);
  const handleIconPress = () => {
    if (datePickerRef.current) {
      datePickerRef.current.onPressDate();
    }
  };

  // check tel
  const [telError, setTelError] = useState('');
  const handleFocus = () => {
    if (isTelValue.length >= 10 && isTelValue.length <= 11) {
      setTelError('');
    } else {
      setTelError('Tel từ 10 or 11 số');
    }
  };
  useEffect(() => {
    handleFocus();
  });

  // submit save setting
  const handleUpdateUser = async () => {
    // Hiển loading
    setNotification('Loading...');
    if (isTelValue) {
      if (isTelValue.length >= 10 && isTelValue.length <= 11) {
        try {
          // Tạo object mới chứa các giá trị cập nhật
          const updatedData = {
            fullName: isName ? isName : user.fullName,
            dateOfBirth: isDateOfBirth ? isDateOfBirth : user.dateOfBirth,
            desc: isDesc ? isDesc : user.desc,
            tel: isTelValue ? isTelValue : user.tel,
            password: isPassword ? isPassword : user.password,
            email: user?.email,
          };

          // Gọi API để cập nhật thông tin người dùng
          const res = await apiUpdateAccount('setting', updatedData, token);

          // Sau khi cập nhật thành công, gọi action để cập nhật Redux store
          dispatch(updateUserSuccess(res.user));

          // Hiển thị thông báo cập nhật thành công
          setNotification('Cập nhật thành công!');

          // Set toggle
          setTogglePass(false);
          setToggleDesc(false);
          setTelError('');
          console.log('Cập nhật thành công!');
        } catch (error) {
          // Xử lý lỗi từ API ở đây
          console.error('Lỗi cập nhật', error);
          setNotification('Không thể cập nhật vui lòng thử lại!');
        }
      } else {
        setNotification('Có trường bị lỗi!');
        setTelError('Tel từ 10 or 11 số');
      }
    } else {
      try {
        // Tạo object mới chứa các giá trị cập nhật
        const updatedData = {
          fullName: isName ? isName : user.fullName,
          dateOfBirth: isDateOfBirth ? isDateOfBirth : user.dateOfBirth,
          desc: isDesc ? isDesc : user.desc,
          tel: isTelValue ? isTelValue : '',
          password: isPassword ? isPassword : user.password,
          email: user?.email,
        };

        // Gọi API để cập nhật thông tin người dùng
        const res = await apiUpdateAccount('setting', updatedData, token);

        // Sau khi cập nhật thành công, gọi action để cập nhật Redux store
        dispatch(updateUserSuccess(res.user));

        // Hiển thị thông báo cập nhật thành công
        setNotification('Cập nhật thành công!');

        // Set toggle
        setTogglePass(false);
        setToggleDesc(false);
        setTelError('');
        console.log('Cập nhật thành công!');
      } catch (error) {
        // Xử lý lỗi từ API ở đây
        console.error('Lỗi cập nhật', error);
        setNotification('Không thể cập nhật vui lòng thử lại!');
      }
    }
  };

  return (
    <WrapBgBox>
      <Header
        navigation={navigation}
        title={String(i18n.t('setting'))}
        name="setting"
        settingUser={handleUpdateUser}
      />
      {notification && <LoadingFullScreen notification={notification} />}
      <ScrollView>
        <View style={[styles.alignItems, styles.paddingVertical10]}>
          <AvatarUpload />
        </View>
        <View style={styles.paddingHorizontal18}>
          <Text style={styles.titleBox}>{i18n.t('account')}</Text>
          <View style={[styles.RowBetween, styles.paddingVertical10]}>
            <Text style={[styles.textSize16White, styles.marginRight10]}>
              {i18n.t('name')}
            </Text>
            <View style={styles.RowAlignItems}>
              <TextInput
                ref={inputRefs[0]}
                style={[
                  styles.inputTransparent,
                  styles.marginRight10,
                  styles.fonsize16White,
                  styles.maxWidth130,
                ]}
                defaultValue={user?.fullName ? user?.fullName : isName}
                onChangeText={handleChange('name')}
                placeholder={user?.fullName ? user.fullName : 'Full name...'}
                editable={true}
              />
              <TouchableOpacity onPress={() => focusInput(0)}>
                <MIcon name="pencil-outline" size={16} color={'#ccc'} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={[styles.RowCenterBetween, styles.paddingVertical10]}>
            <Text
              style={[
                styles.textSize16White,
                styles.marginRight10,
                styles.width50,
              ]}>
              {i18n.t('birth')}
            </Text>
            <View style={styles.RowAlignItems}>
              <DatePicker
                ref={datePickerRef}
                date={
                  isDateOfBirth
                    ? isDateOfBirth
                    : user?.dateOfBirth
                    ? user.dateOfBirth
                    : null
                }
                mode="date"
                placeholder="DD/MM/YYYY"
                format="DD/MM/YYYY"
                minDate="01/01/1900"
                maxDate={formattedCurrentDate}
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                showIcon={false}
                customStyles={{
                  dateInput: {
                    borderWidth: 0,
                  },
                  dateText: {
                    fontSize: 16,
                    color: '#fff',
                    fontFamily: 'Montserrat',
                    textAlign: 'right',
                  },
                }}
                onDateChange={handleDateChange}
              />
              <TouchableOpacity onPress={handleIconPress}>
                <MIcon name="pencil-outline" size={16} color={'#ccc'} />
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <View style={[styles.RowBetween, styles.paddingVertical10]}>
              <Text
                style={[
                  styles.textSize16White,
                  styles.marginRight10,
                  styles.width50,
                ]}>
                {i18n.t('description')}
              </Text>
              <TouchableOpacity onPress={() => handleToggle('desc')}>
                <View style={[styles.RowAlignItems]}>
                  <TextInput
                    style={[
                      styles.inputTransparent,
                      styles.marginRight10,
                      styles.fonsize16White,
                      styles.maxWidth130,
                    ]}
                    value={user?.desc ? user.desc : null}
                    placeholder={user?.desc ? user.desc : 'Content...'}
                    editable={false}
                  />
                  <View style={styles.boxOverlay} />
                  <MIcon name="pencil-outline" size={16} color={'#ccc'} />
                </View>
              </TouchableOpacity>
            </View>
            {isToggleDesc ? (
              <View style={[styles.paddingVertical10]}>
                <View style={styles.RowAlignItems}>
                  <TextInput
                    ref={inputRefs[2]}
                    style={[
                      styles.inputTransparent,
                      styles.width100p,
                      styles.borderBottomGray,
                      styles.paddingBottom10,
                      styles.fonsize16White,
                    ]}
                    placeholder={String(i18n.t('Enter new status'))}
                    onChangeText={handleChange('desc')}
                  />
                </View>
              </View>
            ) : null}
          </View>
          <Text style={[styles.titleBox, styles.paddingTop30]}>
            {i18n.t('other')}
          </Text>
          <View style={[styles.RowBetween, styles.paddingVertical10]}>
            <Text style={[styles.textSize16White, styles.marginRight10]}>
              {i18n.t('language')}
            </Text>
            <View style={styles.RowAlignItems}>
              <LanguageSwitcher />
              <MIcon name="menu-right" size={20} color={'#fff'} />
            </View>
          </View>
          <View style={[styles.RowBetween, styles.paddingVertical10]}>
            <Text style={[styles.textSize16White, styles.marginRight10]}>
              {i18n.t('Email')}
            </Text>
            <View style={[styles.RowAlignItems]}>
              <Text
                style={[
                  styles.textSize16,
                  styles.colorGrrayBold,
                  styles.marginRight5,
                ]}>
                {user?.email}
              </Text>
              <MIcon name="pencil-off-outline" size={18} color={'#666'} />
            </View>
          </View>
          <View style={[styles.RowBetween, styles.paddingVertical10]}>
            <Text style={[styles.textSize16White, styles.marginRight10]}>
              {i18n.t('tel')}
            </Text>
            <View style={styles.RowAlignItems}>
              <TextInput
                ref={inputRefs[3]}
                style={[
                  styles.inputTransparent,
                  styles.marginRight10,
                  styles.fonsize16White,
                  styles.maxWidth130,
                ]}
                defaultValue={user?.tel ? user?.tel : isTelValue}
                keyboardType="numeric" // Chỉ cho phép nhập số
                onChangeText={handleChange('tel')}
                onFocus={handleFocus}
                placeholder={user?.tel ? user.tel : 'Tel...'}
              />
              <TouchableOpacity onPress={() => focusInput(3)}>
                <MIcon name="pencil-outline" size={16} color={'#ccc'} />
              </TouchableOpacity>
            </View>
          </View>
          {isTelValue && telError !== '' && (
            <View>
              <Text
                style={[
                  styles.colorRed,
                  styles.marginBottom15,
                  styles.textRight,
                  styles.marginRight10,
                ]}>
                {telError}
              </Text>
            </View>
          )}
          <View>
            <View style={[styles.RowBetween, styles.paddingVertical10]}>
              <Text style={[styles.textSize16White, styles.marginRight10]}>
                {i18n.t('changepassword')}
              </Text>
              <TouchableOpacity onPress={() => handleToggle('newPass')}>
                <View style={styles.RowAlignItems}>
                  <TextInput
                    style={[
                      styles.inputTransparent,
                      styles.marginRight10,
                      styles.fonsize16White,
                    ]}
                    value={'***************'}
                    editable={false}
                  />
                  <View style={styles.boxOverlay} />
                  <MIcon name="pencil-outline" size={16} color={'#ccc'} />
                </View>
              </TouchableOpacity>
            </View>
            {isTogglePass ? (
              <View style={[styles.paddingVertical10]}>
                <View style={styles.RowAlignItems}>
                  <TextInput
                    style={[
                      styles.inputTransparent,
                      styles.width100p,
                      styles.fonsize16White,
                      styles.borderBottomGray,
                      styles.paddingBottom10,
                    ]}
                    placeholder={String(i18n.t('Enter new password'))}
                    onChangeText={handleChange('password')}
                  />
                </View>
              </View>
            ) : null}
          </View>
        </View>
        <View
          style={[styles.alignItems, styles.flexBox, styles.marginBottom50]}>
          <Avatar
            source={images.imgSettingDecorate}
            size={150}
            containerStyle={styles.resizeModeContain}
          />
          <TouchableOpacity onPress={handleLogout}>
            <Text style={styles.buttonTmpSmWhite05}>{i18n.t('logout')}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </WrapBgBox>
  );
};

export default SettingScreen;
