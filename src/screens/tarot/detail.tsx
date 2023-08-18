import React, {useEffect, useState} from 'react';
import {Avatar, Text} from 'react-native-elements';
import {
  Alert,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  View,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Header from '../../conponents/header';
import IconMateria from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from '../../assets/styles';
import {shareAction} from '../../redux/actions';
import {store} from '../../redux/store';
import {apiRoutesMain} from '../../config';

type detailProps = {
  navigation: any;
  route: any;
};

type TarotCard = {
  cardId: string;
  cardName: string;
  cardImage: string;
  cardType: {
    xuoi: CardType;
    nguoc: CardType;
  };
};

type CardType = {
  title: any;
  content: any;
};

const ScreenDetail = ({navigation, route}: detailProps) => {
  const {width, height} = Dimensions.get('window');
  const [isCategory, setCategory] = useState(String);
  const [isUserLogin, setUserLogin] = useState(String);
  // call api
  const [isDetail, setDetail] = useState<TarotCard>();
  const [isCardType, setCardType] = useState<CardType>();
  const [isTypeCard, setTypeCard] = useState(String);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // call api all card
        const res = await apiRoutesMain('tarot');
        const lengthCard = res.data.length;

        if (lengthCard === 0) {
          // Handle the case when the card list is empty
          return;
        }

        // rendom number card
        const randomCardNumber = Math.floor(Math.random() * lengthCard);

        // detail card
        const detail = res.data[randomCardNumber];
        setDetail(detail);

        // random type card ('xuoi' or 'nguoc')
        const isType = Math.random() < 0.5 ? 'xuoi' : 'nguoc';
        setTypeCard(isType);

        // check let get data card ('xuoi' or 'nguoc')
        if (detail && detail.cardType) {
          setCardType(detail.cardType[isType === 'xuoi' ? 'xuoi' : 'nguoc']);
        }

        //params get user
        const getParams = route.params;

        // Kiểm tra và lấy giá trị của thuộc tính "category"
        if (
          getParams &&
          typeof getParams.category === 'object' &&
          getParams.category !== null
        ) {
          const categoryValue = getParams.category.category;
          setCategory(categoryValue);
        }

        // Kiểm tra và lấy giá trị của thuộc tính "user"
        if (getParams && typeof getParams.user === 'number') {
          const userValue = getParams.user;
          setUserLogin(userValue);
        }
      } catch (error: unknown) {
        // Xác định kiểu dữ liệu cho biến error
        const errorMessage =
          error instanceof Error ? error.message : 'Unknown error';

        // Xử lý lỗi API hoặc các lỗi ngoại lệ khác
        Alert.alert('Error:', errorMessage);
      }
    };

    fetchData();
  }, [route.params]);

  // click heart
  const handleShare = () => {
    // Dispatch the action after fetching data successfully
    if (isDetail) {
      const share: shareAction = {
        type: 'SHARE',
        payload: {
          userID: 'tao la 1',
          cardId: isDetail.cardId,
          typeCard: isTypeCard,
        },
      };
      store.dispatch(share);
    }
    return 'Share';
  };

  isUserLogin;

  return (
    <>
      <ImageBackground
        source={{uri: `http://localhost:3002/cards/${isDetail?.cardImage}`}}
        resizeMode="cover"
        style={styles.ImageBackgroundCommunity}
      />
      <View style={styles.positionAbsoluteTop}>
        <Header navigation={navigation} />
      </View>
      <View style={styles.backgBlackOpacity08}>
        <ScrollView>
          <View style={[{minHeight: height, minWidth: width}]}>
            <View
              style={[
                styles.alignCenter,
                styles.paddingHorizontal18,
                styles.paddingTop50,
              ]}>
              <View style={[styles.alignCenter, styles.paddingVertical10]}>
                <Text style={[styles.fonsize32White, styles.fontAbhayaLibre]}>
                  {isDetail?.cardName}
                </Text>
                {/* <Text style={styles.textOrange}>
                  {isTypeCard === 'xuoi' ? '(Lá bài Xuôi)' : '(Lá bài Ngược)'}
                </Text> */}
              </View>
              <View style={[styles.paddingVertical30]}>
                <Avatar
                  source={{
                    uri: `http://localhost:3002/cards/${isDetail?.cardImage}`,
                  }}
                  containerStyle={[
                    styles.ImgPostCommunity,
                    {
                      transform: [
                        {
                          rotate: `${
                            isTypeCard === 'xuoi' ? '0deg' : '180deg'
                          }`,
                        },
                      ],
                    },
                  ]}
                />
              </View>
            </View>
            <View style={[styles.flexBox, styles.paddingHorizontal9]}>
              <View style={[styles.RowCenterBetween, styles.zindexRelative9]}>
                <View>
                  <Text style={[styles.fontSize18, styles.textOrange]}>
                    Ý nghĩa lá bài
                  </Text>
                </View>
                <View>
                  <TouchableOpacity onPress={() => handleShare()}>
                    <View style={[styles.alignCenter]}>
                      <IconMateria
                        name={'share-variant-outline'}
                        size={32}
                        color={'white'}
                      />
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
              {isCategory === 'all' ? (
                <View style={[styles.paddingBottom30, styles.marginTopA20]}>
                  {isCardType ? (
                    Object.entries(isCardType).map(([key, value]) => (
                      <Text
                        style={[
                          styles.textWhite,
                          styles.lineHeight22,
                          styles.marginBottom15,
                        ]}
                        key={key}>
                        <Text
                          style={[
                            styles.fontBold600,
                            styles.colorWhite,
                            styles.textAlign,
                          ]}>
                          {value.title}
                        </Text>{' '}
                        {value.content}
                      </Text>
                    ))
                  ) : (
                    <Text style={styles.textWhite}>
                      No card types available
                    </Text>
                  )}
                </View>
              ) : (
                <View style={[styles.paddingBottom30, styles.marginTop20]}>
                  {isCardType
                    ? Object.entries(isCardType).map(([key, value]) => (
                        <View key={key}>
                          {value.title === isCategory ? (
                            <Text
                              style={[
                                styles.textWhite,
                                styles.lineHeight22,
                                styles.marginBottom15,
                              ]}>
                              <Text
                                style={[
                                  styles.fontBold600,
                                  styles.colorWhite,
                                  styles.textAlign,
                                ]}>
                                {value.title}
                              </Text>{' '}
                              {value.content}
                            </Text>
                          ) : (
                            ''
                          )}
                        </View>
                      ))
                    : null}
                </View>
              )}
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default ScreenDetail;
