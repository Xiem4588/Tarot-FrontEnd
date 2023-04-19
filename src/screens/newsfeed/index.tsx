import React from 'react';
import {Tab, TabView} from '@rneui/themed';
import {TouchableOpacity, View} from 'react-native';
import {styles} from '../../../assets/styles';
import WrapBgBox from '../../conponents/wrapBgBox';
import ScreenCommunity from './community';
import ScreenExperts from './experts';
import {Text} from 'react-native-elements';

const NewsFeed = ({navigation}: any) => {
  const [index, setIndex] = React.useState(0);

  return (
    <WrapBgBox>
      <View style={[styles.bodyScreen]}>
        <Tab
          value={index}
          onChange={setIndex}
          style={styles.BgTransparent}
          indicatorStyle={[
            index === 0 ? styles.indicatorSelected : null,
            index === 1 ? styles.indicatorSelected : null,
          ]}>
          {/* Sử dụng TouchableWithoutFeedback thay vì Tab.Item
          để tạo ra tab để ko bị nháy nền trên android khi click */}
          <TouchableOpacity onPress={() => setIndex(0)}>
            <View style={styles.marginRight36}>
              <Text
                style={[
                  styles.textTitleTabDefault,
                  index === 0 ? styles.textTitleTabSelected : null,
                ]}>
                Chuyên gia
              </Text>
            </View>
            <View style={styles.tabItemDefault} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setIndex(1)}>
            <View>
              <Text
                style={[
                  styles.textTitleTabDefault,
                  index === 1 ? styles.textTitleTabSelected : null,
                ]}>
                Cộng đồng
              </Text>
            </View>
            <View style={styles.tabItemDefault} />
          </TouchableOpacity>
        </Tab>
        <TabView value={index} onChange={setIndex}>
          <TabView.Item style={styles.TabView}>
            <ScreenExperts navigation={navigation} />
          </TabView.Item>
          <TabView.Item style={styles.TabView}>
            <ScreenCommunity />
          </TabView.Item>
        </TabView>
      </View>
    </WrapBgBox>
  );
};

export default NewsFeed;
