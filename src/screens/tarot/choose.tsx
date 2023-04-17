import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
import {Image} from 'react-native-elements';
import {images} from '../../../assets/constants';
import {styles} from '../../../assets/styles';
import WrapBgBox from '../../conponents/wrapBgBox';
import Header from '../../conponents/header';
import moment from 'moment';
// import Swiper from 'react-native-swiper';
// import {FlatList} from 'react-native-gesture-handler';
import Carousel from 'react-native-snap-carousel';
const {width} = Dimensions.get('window');

type CardTarotItem = {
  id: any;
  url_image: any;
};
const cardTarot: CardTarotItem[] = [
  {id: '1', url_image: `${images.imgTarotCard}`},
  {id: '2', url_image: `${images.imgTarotCard}`},
  {id: '3', url_image: `${images.imgTarotCard}`},
  {id: '4', url_image: `${images.imgTarotCard}`},
  {id: '5', url_image: `${images.imgTarotCard}`},
  {id: '6', url_image: `${images.imgTarotCard}`},
  {id: '7', url_image: `${images.imgTarotCard}`},
  {id: '8', url_image: `${images.imgTarotCard}`},
  {id: '9', url_image: `${images.imgTarotCard}`},
  {id: '10', url_image: `${images.imgTarotCard}`},
  {id: '11', url_image: `${images.imgTarotCard}`},
  {id: '12', url_image: `${images.imgTarotCard}`},
];

const TarotCardSelector = ({navigation}: any) => {
  const [activeCardId, setActiveCardId] = useState(null);
  const renderCardTarotItem = ({item}: {item: CardTarotItem}) => {
    const isActive = item.id === activeCardId;
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('detail', setActiveCardId(item.id))}>
        <Image
          key={item.id}
          source={item.url_image}
          style={{
            width: '100%',
            height: 220,
            resizeMode: 'contain' /*marginTop: isActive ? -30 : 0*/,
          }}
        />
      </TouchableOpacity>
    );
  };

  return (
    <WrapBgBox>
      <Header navigation={navigation} name="nothing" />
      <View style={[styles.flexBox]}>
        <View style={[styles.flexBox, styles.alignItems, styles.padding18]}>
          <Text style={[styles.colorOrange, styles.marginBottom15]}>
            {moment(Date()).format('DD [tháng] M, YYYY')}
          </Text>
          <Text
            style={[styles.colorWhite, styles.fontSize18, styles.textCenter]}>
            Hít một hơi thật sâu và nghĩ đến điều mà bạn sắp đón nhận...
          </Text>
        </View>
        <View
          style={[
            styles.flexBox,
            styles.paddingVertical20,
            styles.marginBottom50,
          ]}>
          <View>
            <View style={[styles.alignCenter]}>
              <Text style={[styles.fonsize14White, styles.alignCenter]}>
                Chọn lá bài
              </Text>
            </View>
            <Image
              source={images.imgArrowUnderChoose}
              style={{resizeMode: 'contain', height: 38}}
            />
          </View>
          <View style={styles.flex1}>
            <Carousel
              data={cardTarot}
              renderItem={renderCardTarotItem}
              sliderWidth={width}
              itemWidth={120}
              loop={true}
              autoplay={false}
              // autoplayDelay={500}
              // autoplayInterval={3000}
              useScrollView={true}
              layoutCardOffset={60}
              enableMomentum={true}
              decelerationRate={0.9}
              layout={'stack'}
              hasParallaxImages={true}
              // activeSlideAlignment={'start'}
              // inactiveSlideOpacity={0.1}
              // inactiveSlideScale={0.1}
              onSnapToItem={index => {
                console.log(`Item at index ${index} is now active`);
              }}
            />
            {/* <Swiper>
              <FlatList
                horizontal={true}
                data={cardTarot}
                keyExtractor={item => item.id}
                renderItem={renderCardTarotItem}
              />
            </Swiper> */}
            <Image
              source={images.imgHandDirection}
              style={{resizeMode: 'contain', height: 38}}
            />
          </View>
        </View>
      </View>
    </WrapBgBox>
  );
};

export default TarotCardSelector;
