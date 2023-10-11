import React, {useEffect, useState} from 'react';
import {View, Text, Dimensions} from 'react-native';
import Carousel from 'react-native-snap-carousel'; // Import CarouselProps
import {useSelector} from 'react-redux';
import {styles} from '../../../assets/styles';
import {ItemProps} from './types';
const {width} = Dimensions.get('window');

const PricePack = () => {
  const [isPriceList, setPriceList] = useState([]);
  //
  const user = useSelector((state: any) => state.STORE_USER_DETAIL.user);
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (user) {
          const data = await user.priceList;
          setPriceList(data);
        }
      } catch (error) {
        return error;
      }
    };
    fetchData();
  }, [user]);

  const renderItem = ({item}: {item: ItemProps}) => (
    <View id={item._id} style={styles.itemCarousel}>
      <View>
        <Text style={styles.nameItemBlack16}>{item.title}</Text>
        <Text
          style={[styles.fontSize12, styles.marginBottom10, styles.colorBlack]}>
          {item.desc}
        </Text>
      </View>
      <Text
        style={[
          styles.fontSize16,
          styles.colorOrange,
          styles.marginTopAuto,
          styles.fontBold700,
        ]}>
        {item.price}
      </Text>
      <Text>{item.time}</Text>
    </View>
  );

  return (
    <>
      <Text style={[styles.textTitle18Black, styles.paddingHorizontal18]}>
        Bảng giá
      </Text>
      <View>
        {isPriceList && isPriceList.length > 0 ? (
          <Carousel
            data={isPriceList}
            renderItem={renderItem}
            sliderWidth={width}
            itemWidth={width / 2.4}
            inactiveSlideScale={1}
            inactiveSlideOpacity={1}
            enableMomentum={false}
            activeSlideAlignment={'start'}
            containerCustomStyle={styles.carousel}
            scrollEnabled={isPriceList.length > 2}
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
