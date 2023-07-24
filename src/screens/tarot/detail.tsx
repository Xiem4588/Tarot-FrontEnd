import React, {useEffect, useState, useCallback} from 'react';
import axios from 'axios';
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
import {LikeAction} from '../../redux/actions';
import store from '../../redux/store';

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

  const fetchData = useCallback(async () => {
    try {
      // call api
      const resList = await axios.get('http://localhost:3002/tarot');
      // total card
      const lengthCard = resList.data.length;

      const randomCardNumber = Math.floor(Math.random() * lengthCard);

      const resItem = await axios.get(
        `http://localhost:3002/tarot/${randomCardNumber}`,
      );

      // detail card
      const detail = resItem.data;
      setDetail(detail);

      // random type card ('xuoi' or 'nguoc')
      const isType = Math.random() < 0.5 ? 'xuoi' : 'nguoc';
      setTypeCard(isType);

      // check let get data card ('xuoi' or 'nguoc')
      setCardType(detail.cardType[isType === 'xuoi' ? 'xuoi' : 'nguoc']);

      // Dispatch the action after fetching data successfully
      const action: LikeAction = {
        type: 'RANDOM_CARD',
        payload: {
          cardId: detail.cardId,
          typeCard: isType,
        },
      };

      //params get user
      const getParams = route.params;
      // Kiểm tra và lấy giá trị của thuộc tính "category"
      if (
        typeof getParams.category === 'object' &&
        getParams.category !== null
      ) {
        const categoryValue = getParams.category.category;
        setCategory(categoryValue);
      }
      // Kiểm tra và lấy giá trị của thuộc tính "user"
      if (typeof getParams.user === 'number') {
        const userValue = getParams.user;
        setUserLogin(userValue);
      }

      store.dispatch(action);
    } catch (error: any) {
      Alert.alert('Error:', error);
    }
  }, [route.params]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // click heart
  const handleShare = () => {
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
        <Header navigation={navigation} name="nothing" />
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
                <Text style={[styles.fonsize20White]}>
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
              <View style={[styles.RowCenterBetween]}>
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
                        <>
                          {value.title === isCategory ? (
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
                          ) : (
                            ''
                          )}
                        </>
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
