import React from 'react';
import {Avatar, Text} from 'react-native-elements';
import {
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from '../../../assets/styles';
import {images, icon} from '../../../assets/constants';
import {ScrollView} from 'react-native-gesture-handler';

const ScreenDetail = ({navigation}: any) => {
  const {width, height} = Dimensions.get('window');

  return (
    <>
      <ImageBackground
        source={images.bgTarotDeck}
        resizeMode="contain"
        style={styles.ImageBackgroundCommunity}
      />
      <View
        style={[styles.paddingTop50Ios15Adroid, styles.positionAbsoluteTop]}>
        <View style={[styles.RowBetween, styles.paddingHorizontal18]}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Avatar source={icon.iconBackWhite} size={24} />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        <View style={{minHeight: height, minWidth: width}}>
          <View
            style={[
              styles.alignCenter,
              styles.paddingHorizontal18,
              styles.paddingTop50,
            ]}>
            <View style={[styles.alignCenter, styles.paddingVertical10]}>
              <Text style={styles.fonsize24White}>X</Text>
              <Text style={[styles.fonsize20White]}>
                Chuyên gia xem bài Tarot
              </Text>
            </View>
            <View style={[styles.paddingVertical10]}>
              <Avatar
                source={images.ImgTarotDeck}
                containerStyle={styles.ImgPostCommunity}
              />
            </View>
          </View>
          <View style={[styles.flexBox, styles.paddingHorizontal18]}>
            <View style={[styles.RowCenterBetween]}>
              <View style={[styles.boxInfo]}>
                <Text style={[styles.colorWhite]}>Ý nghĩa lá bài</Text>
                <Text style={[styles.textOrange, styles.fontSize16]}>
                  Wheel of Fortune ngược
                </Text>
              </View>
              <View style={[styles.width40]}>
                <View style={styles.alignCenter}>
                  <Avatar
                    source={icon.iconHeartActive}
                    containerStyle={styles.iconSize20}
                  />
                </View>
              </View>
            </View>
            <View style={[styles.boxInfo, styles.paddingVertical10]}>
              <Text
                style={[
                  styles.textWhite,
                  styles.lineHeight22,
                  styles.marginBottom15,
                ]}>
                <Text style={[styles.fontBold600, styles.colorWhite]}>
                  Dẫn nhập:
                </Text>{' '}
                Bài Wheel of Fortune xuất hiện ngược nghĩa là sẽ có thay đổi
                trong sự vật, sự việc, hoàn cảnh. Trong đa số trường hợp, đây là
                những thay đổi tích cực và cần thiết nhưng với vài người, thay
                đổi có thể rất khó khăn, thậm chí là khó chịu. Nếu cần giúp đỡ
                để đối mặt với thay đổi, hãy đi nhờ vả mọi người. Đừng ép mình
                đơn độc, đừng đối đầu với con sóng, hãy linh hoạt đi cùng nó,
                chấp nhận rằng thay đổi là quy luật tất yếu của cuộc sống. Sẽ
                chẳng lợi ích gì nếu chống lại nó.
              </Text>
              <Text
                style={[
                  styles.textWhite,
                  styles.lineHeight22,
                  styles.marginBottom15,
                ]}>
                <Text style={[styles.fontBold600, styles.colorWhite]}>
                  Dẫn nhập:
                </Text>{' '}
                Bài Wheel of Fortune xuất hiện ngược nghĩa là sẽ có thay đổi
                trong sự vật, sự việc, hoàn cảnh. Trong đa số trường hợp, đây là
                những thay đổi tích cực và cần thiết nhưng với vài người, thay
                đổi có thể rất khó khăn, thậm chí là khó chịu. Nếu cần giúp đỡ
                để đối mặt với thay đổi, hãy đi nhờ vả mọi người. Đừng ép mình
                đơn độc, đừng đối đầu với con sóng, hãy linh hoạt đi cùng nó,
                chấp nhận rằng thay đổi là quy luật tất yếu của cuộc sống. Sẽ
                chẳng lợi ích gì nếu chống lại nó.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default ScreenDetail;
