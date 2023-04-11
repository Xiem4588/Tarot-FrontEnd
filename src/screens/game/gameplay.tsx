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

const ScreenGamePlay = () => {
  const {width, height} = Dimensions.get('window');

  return (
    <View style={[styles.flexBox, {minHeight: height, minWidth: width}]}>
      <ScrollView pagingEnabled={true}>
        <View key={1} style={{minHeight: height, minWidth: width}}>
          <ImageBackground
            source={images.bgTarotDeck}
            resizeMode="cover"
            style={styles.ImageBackgroundCommunity}
          />
          <View
            style={[
              styles.alignCenter,
              styles.paddingHorizontal18,
              styles.paddingTop80,
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
            <View style={[styles.RowAlignItems]}>
              <Avatar
                size={60}
                rounded
                source={images.AvatarDemo1}
                activeOpacity={0.8}
              />
              <View style={styles.marginLeft12}>
                <Text style={styles.textSize18BoldWhite}>Lanasmith</Text>
                <Text style={[styles.fontSize14Grray, styles.paddingTop5]}>
                  Bảo bình
                </Text>
              </View>
            </View>
            <View style={[styles.Row]}>
              <View style={[styles.boxInfo, styles.paddingVertical10]}>
                <Text
                  numberOfLines={3}
                  ellipsizeMode="tail"
                  style={styles.textWhite}>
                  <Text style={[styles.fontBold600, styles.colorWhite]}>
                    Lanasmith
                  </Text>{' '}
                  Tại sao lá bài của tôi lại là lá ngược, ngược liệu có mang đến
                  nhiều điều xui xẻo không các...{' '}
                  <TouchableOpacity>
                    <Text style={[styles.textWhiteGrray]}>thêm</Text>
                  </TouchableOpacity>
                </Text>
                <View style={[styles.RowAlignItems, styles.paddingVertical10]}>
                  <Avatar
                    size={24}
                    rounded
                    source={images.AvatarDemo2}
                    activeOpacity={0.8}
                  />
                  <View style={[styles.RowAlignItems, styles.marginLeft5]}>
                    <Text
                      numberOfLines={1}
                      ellipsizeMode="tail"
                      style={styles.textWhite}>
                      <Text style={[styles.textWhite, styles.fontBold600]}>
                        diana_slown{' '}
                      </Text>
                      This week we discussed all This week we discussed all
                    </Text>
                  </View>
                </View>
              </View>
              <View style={[styles.width60]}>
                <View style={styles.alignCenter}>
                  <Avatar
                    source={icon.iconHeartWhite}
                    containerStyle={styles.iconSize20}
                  />
                  <Text style={[styles.fonsize12White, styles.paddingTop5]}>
                    1,355
                  </Text>
                </View>
                <View style={[styles.alignCenter, styles.paddingTop10]}>
                  <Avatar
                    source={icon.iconCommentWhite}
                    containerStyle={styles.iconSize20}
                  />
                  <Text style={[styles.fonsize12White]}>10</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View key={2} style={{minHeight: height, minWidth: width}}>
          <ImageBackground
            source={images.bgTarotDeck}
            resizeMode="cover"
            style={styles.ImageBackgroundCommunity}
          />
          <View
            style={[
              styles.alignCenter,
              styles.paddingHorizontal18,
              styles.paddingTop80,
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
            <View style={[styles.RowAlignItems]}>
              <Avatar
                size={60}
                rounded
                source={images.AvatarDemo1}
                activeOpacity={0.8}
              />
              <View style={styles.marginLeft12}>
                <Text style={styles.textSize18BoldWhite}>Lanasmith</Text>
                <Text style={[styles.fontSize14Grray, styles.paddingTop5]}>
                  Bảo bình
                </Text>
              </View>
            </View>
            <View style={[styles.Row]}>
              <View style={[styles.boxInfo, styles.paddingVertical10]}>
                <Text
                  numberOfLines={3}
                  ellipsizeMode="tail"
                  style={styles.textWhite}>
                  <Text style={[styles.fontBold600, styles.colorWhite]}>
                    Lanasmith
                  </Text>{' '}
                  Tại sao lá bài của tôi lại là lá ngược, ngược liệu có mang đến
                  nhiều điều xui xẻo không các...{' '}
                  <TouchableOpacity>
                    <Text style={[styles.textWhiteGrray]}>thêm</Text>
                  </TouchableOpacity>
                </Text>
                <View style={[styles.RowAlignItems, styles.paddingVertical10]}>
                  <Avatar
                    size={24}
                    rounded
                    source={images.AvatarDemo2}
                    activeOpacity={0.8}
                  />
                  <View style={[styles.RowAlignItems, styles.marginLeft5]}>
                    <Text
                      numberOfLines={1}
                      ellipsizeMode="tail"
                      style={styles.textWhite}>
                      <Text style={[styles.textWhite, styles.fontBold600]}>
                        diana_slown{' '}
                      </Text>
                      This week we discussed all This week we discussed all
                    </Text>
                  </View>
                </View>
              </View>
              <View style={[styles.width60]}>
                <View style={styles.alignCenter}>
                  <Avatar
                    source={icon.iconHeartWhite}
                    containerStyle={styles.iconSize20}
                  />
                  <Text style={[styles.fonsize12White, styles.paddingTop5]}>
                    1,355
                  </Text>
                </View>
                <View style={[styles.alignCenter, styles.paddingTop10]}>
                  <Avatar
                    source={icon.iconCommentWhite}
                    containerStyle={styles.iconSize20}
                  />
                  <Text style={[styles.fonsize12White]}>10</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ScreenGamePlay;
