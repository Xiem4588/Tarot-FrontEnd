import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import Carousel from 'react-native-snap-carousel'; // Import CarouselProps
import {useSelector} from 'react-redux';
import {styles} from '../../../assets/styles';
import {ItemProps} from './types';
const {width} = Dimensions.get('window');

const Item = ({title, desc, price, time}: ItemProps) => (
  <View style={styles.itemCarousel}>
    <View>
      <Text style={styles.nameItemBlack16}>{title}</Text>
      <Text
        style={[styles.fontSize12, styles.marginBottom10, styles.colorBlack]}>
        {desc}
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
    <Text>{time}</Text>
  </View>
);

const PricePack = () => {
  const user = useSelector(
    (state: any) => state.STORE_USER_DETAIL.user.priceList,
  );
  // Shop
  const renderItem = ({item}: {item: ItemProps}) => (
    <Item
      _id={item._id}
      title={item.title}
      desc={item.desc}
      price={item.price}
      time={item.time}
      created_date={item.created_date}
    />
  );

  return (
    <>
      <Text style={[styles.textTitle18Black, styles.paddingHorizontal18]}>
        Bảng giá
      </Text>
      <View>
        {user && user!.length > 0 ? (
          <Carousel
            data={user}
            renderItem={renderItem}
            sliderWidth={width}
            itemWidth={width / 2.4}
            inactiveSlideScale={1}
            inactiveSlideOpacity={1}
            enableMomentum={false}
            activeSlideAlignment={'start'}
            containerCustomStyle={styles.carousel}
            scrollEnabled={user.length > 2}
          />
        ) : (
          <Text style={[styles.padding18, styles.colorGrray]}>
            Chưa có bảng giá nào được tạo!
          </Text>
        )}
      </View>
    </>
  );
};

export default PricePack;
