import React, {useEffect, useState, useCallback} from 'react';
import {useDispatch} from 'react-redux';
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
import store from '../../../redux/store';
import {styles} from '../../assets/styles';

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
  const {userID} = route.params;
  const [isLike, setLike] = useState(false);
  const [isTotalLike, setTotalLike] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    const count = store.getState().like.total;
    setTotalLike(count);
    const status = store.getState().like.status;
    setLike(status);
  }, [isLike, dispatch]);

  const handleLike = () => {
    setLike(!isLike);
    if (!isLike) {
      dispatch({type: 'LIKE'});
    } else {
      dispatch({type: 'UNLIKE'});
    }
  };

  const {width, height} = Dimensions.get('window');

  const [isLengthCard, setLengthCard] = useState(0);
  const [isDetail, setDetail] = useState<TarotCard>();
  const [isCardType, setCardType] = useState<CardType>();
  const [isBoolean, setBoolean] = useState(false);

  const fetchData = useCallback(async (cardNumber: number) => {
    try {
      const resList = await axios.get('http://localhost:3002/tarot');
      const resItem = await axios.get(
        `http://localhost:3002/tarot/${cardNumber}`,
      );
      const lengthCard = resList.data.length;
      setLengthCard(lengthCard);
      const detail = resItem.data;
      setDetail(detail);
      const isType = Math.random() < 0.5;
      setBoolean(isType);
      setCardType(detail.cardType[isType ? 'xuoi' : 'nguoc']);
    } catch (error: any) {
      Alert.alert('Error:', error);
    }
  }, []);

  useEffect(() => {
    const randomCardNumber = 1; // Math.floor(Math.random() * isLengthCard)
    fetchData(randomCardNumber);
  }, [fetchData, isLengthCard]);

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
                <Text style={styles.textOrange}>
                  {isBoolean ? '(Lá bài Xuôi)' : '(Lá bài Ngược)'}
                </Text>
              </View>
              <View style={[styles.paddingVertical10]}>
                <Avatar
                  source={{
                    uri: `http://localhost:3002/cards/${isDetail?.cardImage}`,
                  }}
                  containerStyle={[
                    styles.ImgPostCommunity,
                    {transform: [{rotate: `${isBoolean ? '0deg' : '180deg'}`}]},
                  ]}
                />
              </View>
            </View>
            <View style={[styles.flexBox, styles.paddingHorizontal18]}>
              <View style={[styles.RowCenterBetween]}>
                <View style={[styles.paddingTop20]}>
                  <Text style={[styles.fontSize18, styles.textOrange]}>
                    Ý nghĩa lá bài
                  </Text>
                </View>
                <Text style={styles.colorWhite}>
                  userID: {userID}
                  count: {isTotalLike}
                </Text>
                <View style={[styles.width40]}>
                  <TouchableOpacity onPress={() => handleLike()}>
                    <View style={styles.alignCenter}>
                      <IconMateria
                        name={isLike ? 'heart' : 'heart-outline'}
                        size={22}
                        color={isLike ? 'red' : 'white'}
                      />
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={[styles.paddingBottom30]}>
                {isCardType ? (
                  Object.entries(isCardType).map(([key, value]) => (
                    <Text
                      style={[
                        styles.textWhite,
                        styles.lineHeight22,
                        styles.marginBottom15,
                      ]}
                      key={key}>
                      <Text style={[styles.fontBold600, styles.colorWhite]}>
                        {value.title}
                      </Text>{' '}
                      {value.content}
                    </Text>
                  ))
                ) : (
                  <Text style={styles.textWhite}>No card types available</Text>
                )}
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default ScreenDetail;
