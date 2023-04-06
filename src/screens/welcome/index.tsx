import React from 'react';
import {Tab, TabView} from '@rneui/themed';
import {View} from 'react-native';
import {styles} from '../../../assets/styles';
import WrapBgBox from '../../conponents/wrapBgBox';
import ScreenCommunity from './community';
import ScreenExperts from './experts';
import {Text} from 'react-native-elements';

const WelcomScreen = ({navigation}: any) => {
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
          <Tab.Item>
            <Text
              style={[
                styles.textTitleTabDefault,
                index === 0 ? styles.textTitleTabSelected : null,
              ]}>
              Chuyên gia
            </Text>
          </Tab.Item>
          <Tab.Item>
            <Text
              style={[
                styles.textTitleTabDefault,
                index === 1 ? styles.textTitleTabSelected : null,
              ]}>
              Cộng đồng
            </Text>
          </Tab.Item>
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

export default WelcomScreen;
