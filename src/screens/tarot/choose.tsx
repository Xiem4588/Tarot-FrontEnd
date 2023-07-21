//  choose.tsx
import React from 'react';
import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
import {Image} from 'react-native-elements';
import {images} from '../../assets/constants';
import {styles} from '../../assets/styles';
import WrapBgBox from '../../conponents/wrapBgBox';
import Header from '../../conponents/header';
import moment from 'moment';
import Carousel from 'react-native-snap-carousel';

// get width window
const {width} = Dimensions.get('window');

// props
type Item = {
  id: string;
  image: Object;
  navigation?: any;
};

// lấy ra 76 lá bài với đường dẫn image
const TarotCardSelector = ({navigation}: any) => {
  const data = Array.from({length: 76}, (_, i) => ({
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
        style={styles.TouchabItem}>
        <Image key={item.id} source={item.image} style={styles.ImageItem} />
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
              style={styles.ImageLineIcon}
            />
          </View>
          <View>
            <Carousel
              data={data}
              renderItem={renderItem}
              sliderWidth={width}
              itemWidth={width / 9}
              loop={true}
              autoplay={true}
              useScrollView={true}
              layoutCardOffset={15}
              enableMomentum={true}
              decelerationRate={0}
              layout={'default'}
              hasParallaxImages={true}
            />
          </View>
          <View style={styles.BoxImageScrollCard}>
            <Image
              source={images.imgHandDirection}
              style={styles.ImageScrollCard}
            />
          </View>
        </View>
      </View>
    </WrapBgBox>
  );
};

export default TarotCardSelector;
