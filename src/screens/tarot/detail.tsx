import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import {Avatar, Text} from 'react-native-elements';
import {
  Alert,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from '../../assets/styles';
import {images} from '../../assets/constants';
import {ScrollView} from 'react-native-gesture-handler';
import Header from '../../conponents/header';
import IconMateria from 'react-native-vector-icons/MaterialCommunityIcons';

// Props
type detailProps = {
  navigation: any;
  route: any;
}; //

type TarotCard = {
  cardId: string;
  cardName: string;
  cardImage: string;
  cardType: {
    xuoi: {
      dannhap: string;
      tongquan: string;
      congviec: string;
      tinhyeu: string;
      taichinh: string;
      suckhoe: string;
      tinhthan: string;
    };
    nguoc: {
      dannhap: string;
      tongquan: string;
      congviec: string;
      tinhyeu: string;
      taichinh: string;
      suckhoe: string;
      tinhthan: string;
    };
  };
};

type CardType = {
  dannhap: {
    title: string,
    content: string,
  };
  tongquan: {
    title: string,
    content: string,
  };
  congviec: {
    title: string,
    content: string,
  };
  tinhyeu: {
    title: string,
    content: string,
  };
  taichinh: {
    title: string,
    content: string,
  };
  suckhoe: {
    title: string,
    content: string,
  };
  tinhthan: {
    title: string,
    content: string,
  };
}

const ScreenDetail = ({navigation, route}: detailProps) => {
  const {width, height} = Dimensions.get('window');
  const [isLike, setLike] = useState(false);
  const handleLike = () => {
    setLike(!isLike);
  };

  
  // api
  const [isLengthCard, setLengthCard] = useState(0);
  const [isDetail, setDetail] = useState<TarotCard>();
  const [isCardType, setCardType] = useState<CardType>();
  const [isBoolean, setBoolean] = useState(false);
  const [isNumberCard, setNumberCard] = useState(0);

  const fetchData = useCallback(async (cardNumber: number) => {
    try {
      const resList = await axios.get(`http://localhost:3002/tarot`);
      const resItem = await axios.get(`http://localhost:3002/tarot/${cardNumber}`);
      const lengthCard = resList.data.length;
      setLengthCard(lengthCard);
      const detail = resItem.data;
      setDetail(detail);
      const isType = Math.random() < 0.5;
      if (isType === true) {
        setBoolean(isType);
        setCardType(resItem.data.cardType.xuoi);
      } else if (isType === false) {
        setBoolean(isType);
        setCardType(resItem.data.cardType.nguoc);
      }
    } catch (error: any) {
      Alert.alert('Error:', error);
    }
  }, []);

  useEffect(() => {
    const randomCardNumber = Math.floor(Math.random() * isLengthCard);
    fetchData(randomCardNumber);
    setNumberCard(randomCardNumber)
  }, [fetchData, isLengthCard]);

  console.log('Số thẻ bài: =>>>>>>>> ', isNumberCard);
  console.log('Tổng mảng có: =>>>>>>>> ', isLengthCard);
  console.log('True: Xuôi, False: Ngược: =>>>>>>>> ', String(isBoolean));
  console.log('Detail: =>>>>>>>> ', isDetail);
  return (
    <>
      <View style={styles.positionAbsoluteTop}>
        <Header navigation={navigation} name="nothing" />
      </View>
      <ScrollView>
        <ImageBackground
          source={images.bgTarotDeck}
          resizeMode="cover"
          style={styles.ImageBackgroundCommunity}
        />
        <View style={{minHeight: height, minWidth: width}}>
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
              <Text style={styles.textOrange}>{isBoolean === true ? '(Lá bài Xuôi)' : '(Lá bài Ngược)' }</Text>
            </View>
            <View style={[styles.paddingVertical10]}>
                <Avatar
                  source={{ uri: `http://localhost:3002/cards/${isDetail?.cardImage}` }}
                  containerStyle={[
                    styles.ImgPostCommunity,
                    { transform: [{ rotate: `${isBoolean === true ? '0deg' : '180deg'}` }] }
                  ]}
                />
            </View>
          </View>
          <View style={[styles.flexBox, styles.paddingHorizontal18]}>
            <View style={[styles.RowCenterBetween]}>
              <View style={[styles.paddingTop20]}>
                <Text style={[styles.colorWhite, styles.textOrange]}>Ý nghĩa lá bài</Text>
              </View>
              <View style={[styles.width40]}>
                <TouchableOpacity onPress={handleLike}>
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
              {isCardType ?
                (Object.entries(isCardType).map(([key, value]) => (
                  <Text
                    style={[
                      styles.textWhite,
                      styles.lineHeight22,
                      styles.marginBottom15,
                    ]}
                    key={key}
                  >
                    <Text style={[styles.fontBold600, styles.colorWhite]}>
                      {value.title}
                    </Text>{' '} {value.content}
                  </Text>
                ))
                ) : (
                  <Text style={styles.textWhite}>No card types available</Text>
                )
              }
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default ScreenDetail;
