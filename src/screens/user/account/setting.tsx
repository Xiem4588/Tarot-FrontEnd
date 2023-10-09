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
import {updateUserSuccess} from '../../../redux/store/user/actions';
import LoadingFullScreen from '../../conponents/loading';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import AvatarUpload from './component/avatar';
import ModalPriceList from './component/modalPrice';

const SettingScreen = ({navigation}: any) => {
  // Language
  useTranslation();

  // get data from store
  const user = useSelector((state: any) => state.ACCOUNTDATA.user);
  const priceList = useSelector(
    (state: any) => state.ACCOUNTDATA.user.priceList,
  );
  // console.log('----> user', user);
  const token = useSelector((state: any) => state.ACCOUNTDATA.token);

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
  const [isIntargram, setIntargram] = useState('');
  const [isFacebook, setFacebook] = useState('');
  const [isPriceList, setPriceList] = useState(priceList);
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
      case 'intargram':
        setIntargram(value);
        break;
      case 'face':
        setFacebook(value);
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
  const [isToggleIntargram, setToggleIntargram] = useState(false);
  const [isToggleFacebook, setToggleFacebook] = useState(false);
  const handleToggle = (value: string) => {
    switch (value) {
      case 'newPass':
        setTogglePass(!isTogglePass);
        break;
      case 'desc':
        setToggleDesc(!isToggleDesc);
        break;
      case 'intargram':
        setToggleIntargram(!isToggleIntargram);
        break;
      case 'facebook':
        setToggleFacebook(!isToggleFacebook);
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
    setNotification('Loading...'); // Hiển loading
    if (isTelValue) {
      if (isTelValue.length >= 10 && isTelValue.length <= 11) {
        try {
          const userUpdate = {
            fullName: isName ? isName : user.fullName,
            dateOfBirth: isDateOfBirth ? isDateOfBirth : user.dateOfBirth,
            desc: isDesc ? isDesc : user.desc,
            tel: isTelValue ? isTelValue : user.tel,
            password: isPassword ? isPassword : user.password,
            email: user?.email,
            intargram: isIntargram ? isIntargram : user.intargram,
            facebook: isFacebook ? isFacebook : user.facebook,
            priceList: isPriceList ? isPriceList : user.priceList,
          };
          // console.log('----> 1', userUpdate);
          const res = await apiUpdateAccount('setting', userUpdate, token); // Gọi API update người dùng
          dispatch(updateUserSuccess(res.user)); // gọi action cập nhật store
          setNotification('Cập nhật thành công!'); // Hiển thị thông báo cập nhật thành công
          setTogglePass(false);
          setToggleDesc(false);
          setTelError('');
        } catch (error) {
          setNotification('Không thể cập nhật vui lòng thử lại! (1)');
        }
      } else {
        setNotification('Có trường bị lỗi!');
        setTelError('Tel từ 10 or 11 số');
      }
    } else {
      try {
        const userUpdate = {
          fullName: isName ? isName : user.fullName,
          dateOfBirth: isDateOfBirth ? isDateOfBirth : user.dateOfBirth,
          desc: isDesc ? isDesc : user.desc,
          tel: isTelValue ? isTelValue : user.tel,
          password: isPassword ? isPassword : user.password,
          email: user?.email,
          intargram: isIntargram ? isIntargram : user.intargram,
          facebook: isFacebook ? isFacebook : user.facebook,
          priceList: isPriceList ? isPriceList : user.priceList,
        };
        // console.log('----> 2', userUpdate);
        const res = await apiUpdateAccount('setting', userUpdate, token);
        dispatch(updateUserSuccess(res.user));
        setNotification('Cập nhật thành công!');
        setTogglePass(false);
        setToggleDesc(false);
        setTelError('');
      } catch (error) {
        setNotification('Lỗi(0)');
      }
    }
  };

  // ModalPriceList
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const pricePackList = (data: []) => {
    const newTotalItem = [...priceList, ...data]; //nối 2 mảng lại với nhau
    setPriceList(newTotalItem);
  };

  //time date of birth
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const handleConfirm = (date: any) => {
    // 1. Lấy ngày, tháng, năm từ đối tượng date
    const selectedDay = date.getDate(); // Ngay
    const selectedMonth = date.getMonth() + 1; // Lưu ý: Tháng bắt đầu từ 0
    const selectedYear = date.getFullYear(); // Nam
    // 2. Tạo một định dạng mới cho ngày/tháng/năm
    const formattedDate = `${selectedDay}/${selectedMonth}/${selectedYear}`;
    // 3. Lưu trữ ngày đã được chọn
    setDateOfBirth(formattedDate);
    // 4. Đóng DatePickerModal
    hideDatePicker();
  };

  return (
    <WrapBgBox>
      <Header
        navigation={navigation}
        title={String(i18n.t('setting'))}
        name="setting"
        settingAccount={handleUpdateUser}
      />
      {notification && <LoadingFullScreen notification={notification} />}
      <ScrollView>
        <View style={[styles.alignItems, styles.paddingVertical10]}>
          <AvatarUpload />
        </View>
        <View style={styles.paddingHorizontal18}>
          <Text style={styles.titleBox}>{i18n.t('account')}</Text>
          <View style={[styles.RowCenterBetween, styles.paddingVertical10]}>
            <Text style={[styles.textSize16White, styles.marginRight10]}>
              {i18n.t('name')}
            </Text>
            <View style={styles.RowAlignItems}>
              <TextInput
                ref={inputRefs[0]}
                style={[
                  styles.inputTransparent,
                  styles.marginRight10,
                  styles.fontsize16White,
                  styles.maxWidth130,
                ]}
                defaultValue={user?.fullName ? user?.fullName : isName}
                onChangeText={handleChange('name')}
                placeholder={user?.fullName ? user.fullName : 'Tên đầy đủ...'}
                placeholderTextColor="#555555"
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
              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
              />
              <TouchableOpacity onPress={showDatePicker}>
                <View style={styles.RowAlignItems}>
                  <Text style={[styles.marginRight10, styles.fontsize16White]}>
                    {isDateOfBirth ? (
                      isDateOfBirth
                    ) : user?.dateOfBirth ? (
                      user.dateOfBirth
                    ) : (
                      <Text style={styles.colorGrray5}>
                        {i18n.t('YYYY/ MM/DD')}
                      </Text>
                    )}
                  </Text>
                  <MIcon name="pencil-outline" size={16} color={'#ccc'} />
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <View style={[styles.RowCenterBetween, styles.paddingVertical10]}>
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
                      styles.fontsize16White,
                      styles.maxWidth130,
                    ]}
                    value={user?.desc ? user.desc : null}
                    placeholder={user?.desc ? user.desc : 'Nội dung...'}
                    placeholderTextColor="#555555"
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
                      styles.fontsize16White,
                    ]}
                    defaultValue={user?.desc ? user.desc : null}
                    placeholder={String(i18n.t('Nhập nội dung tại đây...'))}
                    placeholderTextColor="#555555"
                    onChangeText={handleChange('desc')}
                  />
                </View>
              </View>
            ) : null}
          </View>
          {user?.typeUser === 'Expert' ? (
            <View style={[styles.RowCenterBetween, styles.paddingVertical10]}>
              <Text style={[styles.textSize16White, styles.marginRight10]}>
                {i18n.t('price_list')}
              </Text>
              <TouchableOpacity onPress={toggleModal}>
                <View style={styles.RowAlignItems}>
                  <Text style={styles.fontsize16White}>
                    {priceList.length > 0
                      ? `${priceList.length} ${i18n.t('parcel')}`
                      : `0 ${i18n.t('parcel')}`}
                  </Text>
                  <MIcon
                    style={styles.marginRightA5}
                    name="menu-right"
                    size={28}
                    color={'#fff'}
                  />
                </View>
              </TouchableOpacity>
              <ModalPriceList
                isModalVisible={isModalVisible}
                toggleModal={toggleModal}
                pricePackList={pricePackList}
              />
            </View>
          ) : null}
          <Text style={[styles.titleBox, styles.paddingTop30]}>
            {i18n.t('other')}
          </Text>
          <View style={[styles.RowCenterBetween, styles.paddingVertical10]}>
            <Text style={[styles.textSize16White, styles.marginRight10]}>
              {i18n.t('language')}
            </Text>
            <View style={styles.RowAlignItems}>
              <LanguageSwitcher />
              <MIcon
                style={styles.marginRightA5}
                name="menu-right"
                size={28}
                color={'#fff'}
              />
            </View>
          </View>
          <View style={[styles.RowCenterBetween, styles.paddingVertical10]}>
            <Text style={[styles.textSize16White, styles.marginRight10]}>
              {i18n.t('Email')}
            </Text>
            <View style={[styles.RowAlignItems]}>
              <Text
                style={[
                  styles.textSize16,
                  styles.colorGrray5,
                  styles.marginRight5,
                ]}>
                {user?.email}
              </Text>
            </View>
          </View>
          <View style={[styles.RowCenterBetween, styles.paddingVertical10]}>
            <Text style={[styles.textSize16White, styles.marginRight10]}>
              {i18n.t('tel')}
            </Text>
            <View style={styles.RowAlignItems}>
              <TextInput
                ref={inputRefs[3]}
                style={[
                  styles.inputTransparent,
                  styles.marginRight10,
                  styles.fontsize16White,
                  styles.maxWidth130,
                ]}
                defaultValue={user?.tel ? user?.tel : isTelValue}
                keyboardType="numeric" // Chỉ cho phép nhập số
                onChangeText={handleChange('tel')}
                onFocus={handleFocus}
                placeholder={user?.tel ? user.tel : 'Tel...'}
                placeholderTextColor="#555555"
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
            <View style={[styles.RowCenterBetween, styles.paddingVertical10]}>
              <Text style={[styles.textSize16White, styles.marginRight10]}>
                {i18n.t('changepassword')}
              </Text>
              <TouchableOpacity onPress={() => handleToggle('newPass')}>
                <View style={styles.RowAlignItems}>
                  <TextInput
                    style={[
                      styles.inputTransparent,
                      styles.marginRight10,
                      styles.fontsize16White,
                    ]}
                    placeholder={'Mật khẩu mới...'}
                    placeholderTextColor="#555555"
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
                      styles.fontsize16White,
                      styles.borderBottomGray,
                      styles.paddingBottom10,
                    ]}
                    placeholder={String(i18n.t('Nhập mật khẩu mới tại đây...'))}
                    placeholderTextColor="#555555"
                    onChangeText={handleChange('password')}
                  />
                </View>
              </View>
            ) : null}
          </View>
          {user?.typeUser === 'Expert' ? (
            <>
              <Text style={[styles.titleBox, styles.paddingTop30]}>
                {i18n.t('socialnetwork')}
              </Text>
              <View>
                <View
                  style={[styles.RowCenterBetween, styles.paddingVertical10]}>
                  <Text
                    style={[
                      styles.textSize16White,
                      styles.marginRight10,
                      styles.width50,
                    ]}>
                    {i18n.t('Instagram')}
                  </Text>
                  <TouchableOpacity onPress={() => handleToggle('intargram')}>
                    <View style={[styles.RowAlignItems]}>
                      <TextInput
                        style={[
                          styles.inputTransparent,
                          styles.marginRight10,
                          styles.fontsize16White,
                          styles.maxWidth130,
                        ]}
                        value={user?.intargram ? user.intargram : null}
                        placeholder={
                          user?.intargram ? user.intargram : 'Update...'
                        }
                        placeholderTextColor="#555555"
                        editable={false}
                      />
                      <View style={styles.boxOverlay} />
                      <MIcon name="pencil-outline" size={16} color={'#ccc'} />
                    </View>
                  </TouchableOpacity>
                </View>
                {isToggleIntargram ? (
                  <View style={[styles.paddingVertical10]}>
                    <View style={styles.RowAlignItems}>
                      <TextInput
                        ref={inputRefs[2]}
                        style={[
                          styles.inputTransparent,
                          styles.width100p,
                          styles.borderBottomGray,
                          styles.paddingBottom10,
                          styles.fontsize16White,
                        ]}
                        defaultValue={user?.intargram ? user.intargram : null}
                        placeholder={String(i18n.t('Add intargram...'))}
                        placeholderTextColor="#555555"
                        onChangeText={handleChange('intargram')}
                      />
                    </View>
                  </View>
                ) : null}
              </View>
              <View>
                <View
                  style={[styles.RowCenterBetween, styles.paddingVertical10]}>
                  <Text
                    style={[
                      styles.textSize16White,
                      styles.marginRight10,
                      styles.width50,
                    ]}>
                    {i18n.t('Facebook')}
                  </Text>
                  <TouchableOpacity onPress={() => handleToggle('facebook')}>
                    <View style={[styles.RowAlignItems]}>
                      <TextInput
                        style={[
                          styles.inputTransparent,
                          styles.marginRight10,
                          styles.fontsize16White,
                          styles.maxWidth130,
                        ]}
                        value={user?.facebook ? user.facebook : null}
                        placeholder={
                          user?.facebook ? user.facebook : 'Update...'
                        }
                        placeholderTextColor="#555555"
                        editable={false}
                      />
                      <View style={styles.boxOverlay} />
                      <MIcon name="pencil-outline" size={16} color={'#ccc'} />
                    </View>
                  </TouchableOpacity>
                </View>
                {isToggleFacebook ? (
                  <View style={[styles.paddingVertical10]}>
                    <View style={styles.RowAlignItems}>
                      <TextInput
                        ref={inputRefs[2]}
                        style={[
                          styles.inputTransparent,
                          styles.width100p,
                          styles.borderBottomGray,
                          styles.paddingBottom10,
                          styles.fontsize16White,
                        ]}
                        defaultValue={user?.facebook ? user.facebook : null}
                        placeholder={String(i18n.t('Add facebook...'))}
                        placeholderTextColor="#555555"
                        onChangeText={handleChange('facebook')}
                      />
                    </View>
                  </View>
                ) : null}
              </View>
            </>
          ) : null}
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
