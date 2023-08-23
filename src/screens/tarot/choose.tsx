//  choose.tsx
import React, {useEffect, useRef, useState} from 'react';
import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
import {Image} from 'react-native-elements';
import {images} from '../../assets/constants';
import {styles} from '../../assets/styles';
import WrapBgBox from '../../conponents/wrapBgBox';
import Header from '../../conponents/header';
import moment from 'moment';
import Carousel from 'react-native-snap-carousel';

// get width window
const screenWidth = Dimensions.get('window').width;
const itemWidth = screenWidth / 10;
const totalWidth = itemWidth * 10; // Tổng kích thước của 12 mục

// props

type chooseProps = {
  navigation: any;
  route: any;
};
type Item = {
  id: string;
  image: Object;
  navigation?: any;
};

// lấy ra 76 lá bài với đường dẫn image
const TarotCardSelector = ({navigation, route}: chooseProps) => {
  const [isCategory, setCategory] = useState(String);
  const data = Array.from({length: 76}, (_, i) => ({
    id: String(i + 1),
    image: `${images.imgTarotCardDefault1}`,
  }));

  useEffect(() => {
    const fetchData = async () => {
      const category = await route.params;
      setCategory(category);
    };
    fetchData();
  }, [route]);

  const renderItem = ({item}: {item: Item}) => {
    const handlePress = () => {
      navigation.navigate('detail', {user: 1, category: isCategory});
    };

    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => handlePress()}
        style={styles.TouchabItem}>
        <Image key={item.id} source={item.image} style={styles.ImageItem} />
      </TouchableOpacity>
    );
  };

  const carouselRef = useRef(null);
  const layoutCardOffset = (screenWidth - totalWidth) / 2;

  console.log('screen choose: title >>>>>>', isCategory);

  return (
    <WrapBgBox>
      <View style={styles.positionAbsoluteTop}>
        <Header navigation={navigation} name="nothing" title={''} />
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
              ref={carouselRef}
              data={data}
              renderItem={renderItem}
              sliderWidth={screenWidth}
              itemWidth={itemWidth}
              loop={true}
              autoplay={false}
              useScrollView={true}
              layoutCardOffset={layoutCardOffset}
              enableMomentum={true}
              decelerationRate={0}
              layout={'default'}
              hasParallaxImages={true}
              firstItem={76 / 2}
              onSnapToItem={(index: number) => {
                console.log('Item được nhấn:', data[index]);
              }}
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
