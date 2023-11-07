import React, {useEffect, useState} from 'react';
import {View, Text, Dimensions, TouchableWithoutFeedback} from 'react-native';
import Carousel from 'react-native-snap-carousel'; // Import CarouselProps
import {useSelector} from 'react-redux';
import {styles} from '../../../assets/styles';
import {ItemProps} from './types';
import IconMateria from 'react-native-vector-icons/MaterialCommunityIcons';
const {width} = Dimensions.get('window');

interface priceProps {
  getDataPricePack: (price: any) => void;
}

const PricePack = ({getDataPricePack}: priceProps) => {
  const [isPriceList, setPriceList] = useState([]);

  // get priceList store
  const user = useSelector((state: any) => state.PUBLIC_STORE_USER_DETAIL.user);
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

  // Selection item
  const [isItemID, setItemID] = useState('');
  const toggleItemSelection = (id: string) => {
    setItemID(id);
    const isItemSelected = isPriceList.find((item: any) => item._id === id);
    getDataPricePack(isItemSelected);
  };

  const renderItem = ({item}: {item: ItemProps}) => (
    <>
      <TouchableWithoutFeedback
        onPress={() => toggleItemSelection(`${item._id}`)}>
        <View
          style={[
            styles.itemCarousel,
            isItemID && isItemID === item._id
              ? styles.borderBottomOrange6
              : null,
          ]}>
          <View>
            <Text style={styles.nameItemBlack16}>{item.title}</Text>
            <Text
              style={[
                styles.fontSize12,
                styles.marginBottom10,
                styles.colorBlack,
              ]}>
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
          {isItemID && isItemID === item._id ? (
            <View style={styles.checkCircleTop15}>
              <IconMateria name="check-circle" size={16} color="#F78B73" />
            </View>
          ) : (
            <View style={styles.checkCircleTop15}>
              <IconMateria name="check-circle" size={16} color="#DDD" />
            </View>
          )}
        </View>
      </TouchableWithoutFeedback>
    </>
  );

  return (
    <>
      <Text style={[styles.textTitle18Black, styles.paddingHorizontal18]}>
        Chọn gói dịch vụ:
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
