/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
import {Image} from 'react-native-elements';
import {images} from '../../assets/constants';
import {styles} from '../../assets/styles';
import WrapBgBox from '../../conponents/wrapBgBox';
import Header from '../../conponents/header';
import moment from 'moment';
import Carousel from 'react-native-snap-carousel';
const {width} = Dimensions.get('window');

type Item = {
  id: string;
  image: Object;
  navigation?: any;
};

// lấy ra 76 lá bài với đường dẫn image
const TarotCardSelector = ({navigation}: any) => {
  const data = Array.from({length: 20}, (_, i) => ({
    id: String(i + 1),
    image: `${images.imgTarotCardDefault1}`,
  }));

  const renderItem = ({item}: {item: Item}) => {
    const handlePress = () => {
      navigation.navigate('detail', {userID: 1});
    };

    return (
      <TouchableOpacity
        onPress={() => handlePress()}
        style={{paddingBottom: 100}}>
        <Image
          key={item.id}
          source={item.image}
          style={{
            width: '100%',
            height: 300,
            resizeMode: 'contain',
          }}
        />
      </TouchableOpacity>
    );
  };

  return (
    <WrapBgBox>
      <View style={styles.positionAbsoluteTop}>
        <Header navigation={navigation} name="nothing" />
      </View>
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
          <View>
            <Carousel
              data={data}
              renderItem={renderItem}
              sliderWidth={width}
              itemWidth={80}
              loop={true}
              autoplay={false}
              useScrollView={false}
              layoutCardOffset={0}
              enableMomentum={true}
              decelerationRate={0.9}
              layout={'default'}
              hasParallaxImages={true}
            />
          </View>
          <View
            style={{
              transform: [{translateY: -60}],
              position: 'relative',
              zIndex: -1,
            }}>
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
