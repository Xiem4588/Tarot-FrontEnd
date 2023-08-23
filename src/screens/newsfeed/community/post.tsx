import React from 'react';
import {Avatar, Text} from 'react-native-elements';
import {
  ImageBackground,
  TouchableOpacity,
  View,
  Dimensions,
  StyleSheet,
  Image,
} from 'react-native';
import {styles} from '../../../assets/styles';
import {images} from '../../../assets/constants';
import {
  ScrollView,
  GestureHandlerRootView,
  NativeViewGestureHandler,
} from 'react-native-gesture-handler';
import IconsMateria from 'react-native-vector-icons/MaterialCommunityIcons';

interface ModalCommentProps {
  handleScroll: () => void;
  IdAuthor: (id: string) => void;
}

const Post = ({handleScroll, IdAuthor}: ModalCommentProps) => {
  const {width, height} = Dimensions.get('window');
  return (
    <GestureHandlerRootView style={[styles.flexBox]}>
      <NativeViewGestureHandler>
        <ScrollView
          style={styles.flex1}
          pagingEnabled={true}
          onScroll={handleScroll}>
          {DATA.map(item => (
            <View key={item.id} style={{minHeight: height, minWidth: width}}>
              <ImageBackground
                source={images.bgTarotDeck}
                resizeMode="cover"
                style={styles.ImageBackgroundCommunity}
              />
              <View
                style={[
                  styles.alignCenter,
                  styles.paddingHorizontal18,
                  styles.paddingTop90,
                ]}>
                <View style={[styles.alignCenter, styles.paddingVertical10]}>
                  <Text style={styles.fonsize24White}>{item.card}</Text>
                  <Text style={[styles.fonsize20White]}>{item.title}</Text>
                </View>
                <View style={[styles.paddingVertical10]}>
                  <Image
                    source={images.ImgTarotDeck}
                    style={stylesScreen.image}
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
                    <Text style={styles.textSize18BoldWhite}>
                      {item.author.name}
                    </Text>
                    <Text style={[styles.fontSize14Grray, styles.paddingTop5]}>
                      {item.author.zodiac}
                    </Text>
                  </View>
                </View>
                <View style={[styles.Row]}>
                  <View style={[styles.boxInfo, styles.paddingVertical10]}>
                    <View>
                      <Text
                        numberOfLines={3}
                        ellipsizeMode="tail"
                        style={styles.textWhite}>
                        <Text style={[styles.fontBold700, styles.colorWhite]}>
                          {item.author.name}
                        </Text>{' '}
                        {item.author.content}{' '}
                        <TouchableOpacity>
                          <Text style={[styles.textWhiteGrray]}>thêm</Text>
                        </TouchableOpacity>
                      </Text>
                    </View>
                    <View style={[styles.Row, styles.paddingVertical10]}>
                      <View>
                        <Avatar
                          size={24}
                          rounded
                          source={images.AvatarDemo2}
                          activeOpacity={0.8}
                        />
                      </View>
                      <View style={[styles.marginLeft5, styles.flexBox]}>
                        <Text
                          numberOfLines={1}
                          ellipsizeMode="tail"
                          style={styles.textWhite}>
                          <Text style={[styles.textWhite, styles.fontBold700]}>
                            {item.user.name}{' '}
                          </Text>
                          {item.user.content}
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.marginLeft10}>
                    <View style={styles.alignCenter}>
                      <IconsMateria
                        name="heart-outline"
                        size={24}
                        color={'#fff'}
                      />
                      <Text
                        numberOfLines={1}
                        style={[styles.fonsize10White, styles.paddingTop5]}>
                        {parseInt(item.like).toLocaleString('de-DE', {
                          minimumFractionDigits: 0,
                        })}
                      </Text>
                    </View>
                    <TouchableOpacity onPress={() => IdAuthor(item.id)}>
                      <View style={[styles.alignCenter, styles.paddingTop10]}>
                        <IconsMateria
                          name="chat-outline"
                          size={24}
                          color={'#fff'}
                        />
                        <Text
                          numberOfLines={1}
                          style={[styles.fonsize10White, styles.paddingTop2]}>
                          {parseInt(item.comment).toLocaleString('de-DE', {
                            minimumFractionDigits: 0,
                          })}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
      </NativeViewGestureHandler>
    </GestureHandlerRootView>
  );
};

interface DataProps {
  id: string;
  card: string;
  title: string;
  imageCard: string;
  like: string;
  comment: string;
  author: {
    name: string;
    avatar: string;
    zodiac: string;
    content: string;
  };
  user: {
    name: string;
    avatar: string;
    content: string;
  };
}
const DATA: DataProps[] = [
  {
    id: '1',
    card: 'I',
    title: 'Chuyen gia xem baif Tarot',
    imageCard: images.ImgTarotDeck,
    like: '12425',
    comment: '45234',
    author: {
      name: 'Lanasmith',
      avatar: images.AvatarDemo1,
      zodiac: 'Bảo Bình',
      content:
        'Có hơn 8 năm kinh nghiệm Có xem khuya & lịch gấp trog ngày (có tính thêm',
    },
    user: {
      name: 'diana_slown',
      avatar: images.AvatarDemo2,
      content: 'This week we discussed all This week we discussed all',
    },
  },
  {
    id: '2',
    card: 'II',
    title: 'Chuyen gia xem baif Tarot',
    imageCard: images.ImgTarotDeck,
    like: '12425',
    comment: '45234',
    author: {
      name: 'Lanasmith',
      avatar: images.AvatarDemo2,
      zodiac: 'Bảo Bình',
      content:
        'Có hơn 8 năm kinh nghiệm Có xem khuya & lịch gấp trog ngày (có tính thêm',
    },
    user: {
      name: 'diana_slown',
      avatar: images.AvatarDemo1,
      content: '6 years of experient - RMIT university student',
    },
  },
];

const {height} = Dimensions.get('window');
const stylesScreen = StyleSheet.create({
  image: {
    height: height >= 700 ? height / 2.2 : height / 2.5,
    resizeMode: 'contain',
  },
});

export default Post;
