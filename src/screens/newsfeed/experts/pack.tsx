import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import Carousel from 'react-native-snap-carousel'; // Import CarouselProps
import {styles} from '../../../assets/styles';

const {width} = Dimensions.get('window');

const data = [
  {
    id: '1',
    title: '1 vấn đề',
    describe: '3 câu hỏi + 1 câu yes/no',
    price: '150k',
  },
  {
    id: '2',
    title: '30 phút',
    describe: 'Không giới hạn câu hỏi, vấn đề + 1 lá thông điệp kết nối',
    price: '200K',
  },
  {
    id: '3',
    title: '1 Tiếng',
    describe: '3 câu hỏi + 1 câu yes/no',
    price: '300K',
  },
  {
    id: '4',
    title: '2 Tiếng',
    describe: '3 câu hỏi + 1 câu yes/no',
    price: '500k',
  },
  {
    id: '5',
    title: '3 vấn đề',
    describe: '3 câu hỏi + 1 câu yes/no',
    price: '750k',
  },
  {
    id: '6',
    title: '5 vấn đề',
    describe: '3 câu hỏi + 1 câu yes/no',
    price: '1000k',
  },
];

// Shop
type ItemProps = {
  id: string;
  title: string;
  describe: string;
  price: string;
};

const Item = ({id, title, describe, price}: ItemProps) => (
  <View key={id} style={styles.itemCarousel}>
    <View>
      <Text style={styles.nameItemBlack16}>{title}</Text>
      <Text
        style={[styles.fontSize12, styles.marginBottom10, styles.colorBlack]}>
        {describe}
      </Text>
    </View>
    <Text
      style={[
        styles.fontSize16,
        styles.colorOrange,
        styles.marginTopAuto,
        styles.fontBold700,
      ]}>
      {price}
    </Text>
  </View>
);

const Pack = () => {
  // Shop
  const renderItem = ({item}: {item: ItemProps}) => (
    <Item
      id={item.id}
      title={item.title}
      describe={item.describe}
      price={item.price}
    />
  );

  return (
    <>
      <Text style={[styles.textTitle18Black, styles.paddingHorizontal18]}>
        Bảng giá
      </Text>
      <View>
        <Carousel
          data={data}
          renderItem={renderItem}
          sliderWidth={width}
          itemWidth={width / 2.4}
          inactiveSlideScale={1}
          inactiveSlideOpacity={1}
          enableMomentum={false}
          activeSlideAlignment={'start'}
          containerCustomStyle={styles.carousel}
        />
      </View>
    </>
  );
};

export default Pack;
