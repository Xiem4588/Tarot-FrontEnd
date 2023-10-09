import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {images, icon} from '../../assets/constants';
import {styles} from '../../assets/styles';
import WrapBgBox from '../../conponents/wrapBgBox';
import IconMateria from 'react-native-vector-icons/MaterialCommunityIcons';
// import GoogleAdsBannerAd from '../../googleAds/_bannerAd';
import {useSelector} from 'react-redux';
import LoadingFullScreen from '../conponents/loading';
const ScreenToday = ({navigation}: any) => {
  const user = useSelector((state: any) => state.ACCOUNTDATA?.user);
  const [isLoading, setIsLoading] = useState(false);
  const [isCategory, setCategory] = useState(String);

  const [notification, setNotification] = useState('');
  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        setNotification('');
      }, 1000);

      // Hủy timeout khi component bị hủy
      return () => clearTimeout(timer);
    }
  }, [notification]);

  const handlePress = async (value: string) => {
    setIsLoading(true); // Bắt đầu hiển thị trạng thái loading
    setNotification('Loading...'); // Hiển loading
    // try {
    setTimeout(async () => {
      if (value === 'all') {
        navigation.navigate('choose', {category: value});
      } else {
        setCategory(value);
        navigation.navigate('choose', {category: value});
        setCategory('');
      }
      setIsLoading(false);
      setNotification(''); // Hiển loading
    }, 50); // delay
    // setNotification('Loading...'); // Hiển loading
    // try {
    //   if (value === 'all') {
    //     navigation.navigate('choose', {category: value});
    //   } else {
    //     setCategory(value);
    //     navigation.navigate('choose', {category: value});
    //     setCategory('');
    //   }
    // } catch (error) {
    //   setNotification('Error! Vui lòng kiểm tra lại!');
    // }
  };

  return (
    <>
      {isLoading ? <LoadingFullScreen notification={notification} /> : null}
      <View style={[styles.flexBox]}>
        <WrapBgBox>
          <View style={[styles.avatarProfile]}>
            <ImageBackground
              source={images.bgHeaderLogin}
              resizeMode="contain"
              style={[styles.ImgBgBottom]}
            />
            <Image source={icon.iconStar} style={styles.IconStarBg} />
            <View style={[styles.paddingBox]}>
              <View style={styles.RowAlignItems}>
                <Image
                  source={images.avatarDefault}
                  style={[styles.avatarProfileEllipse48]}
                />
                {user?.fullName ? (
                  <Text style={[styles.marginLeft10, styles.nameProfile]}>
                    {user.fullName}
                  </Text>
                ) : user?.email ? (
                  <Text style={[styles.marginLeft10, styles.nameProfile]}>
                    {user?.email}
                  </Text>
                ) : (
                  <TouchableOpacity onPress={() => navigation.navigate('user')}>
                    <Text style={[styles.marginLeft10, styles.nameProfile]}>
                      Login
                    </Text>
                  </TouchableOpacity>
                )}
              </View>
              <View style={styles.RowBetween}>
                <View style={[styles.marginTop20, styles.flex1]}>
                  <Text
                    style={[
                      styles.fontSize18,
                      styles.fontBold700,
                      styles.colorBlack,
                    ]}>
                    Điều gì sắp tới sẽ đến với bạn?
                  </Text>
                  <Text
                    style={[
                      styles.fontSize14,
                      styles.marginTop5,
                      styles.colorBlack,
                    ]}>
                    Hãy đón nhận những thông điệp theo một cách tích cực.
                  </Text>
                </View>
                <View style={[styles.boxIconwidth120, styles.alignCenter]}>
                  <Image source={images.hand} style={styles.IconHand} />
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.itemContainer, styles.paddingBox]}>
            <Text style={[styles.titleBox, styles.marginTop15]}>
              Phương hướng dành cho bạn
            </Text>
            <ScrollView>
              {DATA.map(item => (
                <TouchableOpacity
                  activeOpacity={1}
                  key={item.id}
                  onPress={() => handlePress(item.category)}>
                  <View
                    style={[
                      styles.RowCenterBetween,
                      styles.boxWhiteRadius,
                      styles.marginBottom15,
                    ]}>
                    <Text
                      style={[
                        styles.fontSize16,
                        styles.flex1,
                        item.category === isCategory
                          ? styles.colorOrange
                          : styles.colorBlack,
                      ]}>
                      {item.ques}
                    </Text>
                    <Text style={[styles.marginLeft12, styles.width40]}>
                      <IconMateria
                        name="chevron-right"
                        size={24}
                        color={
                          item.category === isCategory ? '#F78B73' : '#999'
                        }
                      />
                    </Text>
                  </View>
                </TouchableOpacity>
              ))}
              <View style={styles.marginBottom80} />
            </ScrollView>
          </View>
          <TouchableOpacity
            onPress={() => handlePress('all')}
            activeOpacity={1}
            style={[styles.btnTheme2]}>
            <Image source={icon.iconUniverse} style={styles.IconUniverse} />
            <Text
              style={[styles.fontSize14, styles.fontBold, styles.colorBlack]}>
              Thông điệp {'\n'} ngày hôm nay
            </Text>
          </TouchableOpacity>
        </WrapBgBox>
        {/* <GoogleAdsBannerAd /> */}
      </View>
    </>
  );
};

interface DataProps {
  id: string;
  category: string;
  ques: string;
}
const DATA: DataProps[] = [
  {
    id: '1',
    category: 'Dẫn nhập',
    ques: '"Dẫn nhập" là cái quái gì ta?',
  },
  {
    id: '2',
    category: 'Tổng quan',
    ques: '"Tổng quan" cho cuộc sống của tôi có gì phải lưu ý?',
  },
  {
    id: '3',
    category: 'Công việc',
    ques: '"Công việc" của bạn dạo này thế nào?',
  },
  {
    id: '4',
    category: 'Tình yêu',
    ques: '"Tình yêu" hôm nay có gì thay đổi?',
  },
  {
    id: '5',
    category: 'Tài chính',
    ques: '"Tài chính" hôm nay có gì phải quan tâm?',
  },
  {
    id: '6',
    category: 'Sức khỏe',
    ques: '"sức khỏe" tôi hôm nay ra sao?',
  },
  {
    id: '7',
    category: 'Tinh thần',
    ques: 'Hôm nay "tinh thần" của tôi thế nào?',
  },
];

export default ScreenToday;
