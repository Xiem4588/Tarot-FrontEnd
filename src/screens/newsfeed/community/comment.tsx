import React from 'react';
import {Avatar, Text} from 'react-native-elements';
import {TouchableOpacity, View} from 'react-native';
import {styles} from '../../../../assets/styles';
import {images} from '../../../../assets/constants';
import IconsAnt from 'react-native-vector-icons/AntDesign';

interface isProps {
  focusInput: () => void;
}

const CommentComponent = ({focusInput}: isProps) => {
  return (
    <View>
      <View style={[styles.boxUserComment, styles.marginTop15]}>
        <Avatar
          size={32}
          rounded
          source={images.AvatarDemo1}
          activeOpacity={0.8}
          containerStyle={styles.userAvatarComment}
        />
        <View style={[styles.Row]}>
          <View style={styles.flexBox}>
            <Text style={[styles.fontSize12, styles.colorBlack]}>
              <Text style={[styles.fontBold700]}>diana_slown </Text>
              This week we discussed all things teen skincare with our girls
              Honorcita.
            </Text>
            <View style={[styles.RowAlignItems, styles.marginTop5]}>
              <View style={[styles.RowAlignItems]}>
                <IconsAnt name="hearto" size={12} />
                <Text style={[styles.fontSize12, styles.marginLeft5]}>14</Text>
              </View>
              <View style={styles.marginLeft12}>
                <TouchableOpacity onPress={focusInput}>
                  <Text style={[styles.fontSize12, styles.fontBold600]}>
                    Trả lời
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={[styles.marginTop10]}>
            <Text style={[styles.fontSize12, styles.textBlackGrray]}>3h</Text>
          </View>
        </View>
      </View>
      <View style={[styles.boxUserComment, styles.marginTop15]}>
        <Avatar
          size={32}
          rounded
          source={images.AvatarDemo1}
          activeOpacity={0.8}
          containerStyle={styles.userAvatarComment}
        />
        <View style={[styles.Row]}>
          <View style={styles.flexBox}>
            <Text style={[styles.fontSize12, styles.colorBlack]}>
              <Text style={[styles.fontBold700]}>diana_slown </Text>
              This week we discussed all things teen skincare with our girls
              Honorcita.
            </Text>
            <View style={[styles.RowAlignItems, styles.marginTop5]}>
              <View style={[styles.RowAlignItems]}>
                <IconsAnt name="heart" size={12} color="red" />
                <Text style={[styles.fontSize12, styles.marginLeft5]}>14</Text>
              </View>
              <View style={styles.marginLeft12}>
                <TouchableOpacity onPress={focusInput}>
                  <Text style={[styles.fontSize12, styles.fontBold600]}>
                    Trả lời
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={[styles.boxUserComment, styles.marginTop15]}>
              <Avatar
                size={32}
                rounded
                source={images.AvatarDemo1}
                activeOpacity={0.8}
                containerStyle={styles.userAvatarComment}
              />
              <View style={[styles.Row]}>
                <View style={styles.flexBox}>
                  <Text style={[styles.fontSize12, styles.colorBlack]}>
                    <Text style={[styles.fontBold700]}>diana_slown </Text>
                    me toooo :)))
                  </Text>
                  <View style={[styles.RowAlignItems, styles.marginTop5]}>
                    <View style={[styles.RowAlignItems]}>
                      <IconsAnt name="heart" size={12} color="red" />
                      <Text style={[styles.fontSize12, styles.marginLeft5]}>
                        14
                      </Text>
                    </View>
                    <View style={styles.marginLeft12}>
                      <TouchableOpacity onPress={focusInput}>
                        <Text style={[styles.fontSize12, styles.fontBold600]}>
                          Trả lời
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
                <View
                  style={[
                    styles.marginTop10,
                    styles.marginRight20,
                    styles.marginLeft10,
                  ]}>
                  <Text style={[styles.fontSize12, styles.textBlackGrray]}>
                    3h
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.marginTop10]}>
            <Text style={[styles.fontSize12, styles.textBlackGrray]}>3h</Text>
          </View>
        </View>
      </View>
      <View style={[styles.boxUserComment, styles.marginTop15]}>
        <Avatar
          size={32}
          rounded
          source={images.AvatarDemo1}
          activeOpacity={0.8}
          containerStyle={styles.userAvatarComment}
        />
        <View style={[styles.Row]}>
          <View style={styles.flexBox}>
            <Text style={[styles.fontSize12, styles.colorBlack]}>
              <Text style={[styles.fontBold700]}>diana_slown </Text>
              This week we discussed all things teen skincare with our girls
              Honorcita.
            </Text>
            <View style={[styles.RowAlignItems, styles.marginTop5]}>
              <View style={[styles.RowAlignItems]}>
                <IconsAnt name="hearto" size={12} />
                <Text style={[styles.fontSize12, styles.marginLeft5]}>14</Text>
              </View>
              <View style={styles.marginLeft12}>
                <TouchableOpacity onPress={focusInput}>
                  <Text style={[styles.fontSize12, styles.fontBold600]}>
                    Trả lời
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={[styles.boxUserComment, styles.marginTop15]}>
              <Avatar
                size={32}
                rounded
                source={images.AvatarDemo1}
                activeOpacity={0.8}
                containerStyle={styles.userAvatarComment}
              />
              <View style={[styles.Row]}>
                <View style={styles.flexBox}>
                  <Text style={[styles.fontSize12, styles.colorBlack]}>
                    <Text style={[styles.fontBold700]}>diana_slown </Text>
                    me toooo :)))
                  </Text>
                  <View style={[styles.RowAlignItems, styles.marginTop5]}>
                    <View style={[styles.RowAlignItems]}>
                      <IconsAnt name="hearto" size={12} />
                      <Text style={[styles.fontSize12, styles.marginLeft5]}>
                        14
                      </Text>
                    </View>
                    <View style={styles.marginLeft12}>
                      <TouchableOpacity onPress={focusInput}>
                        <Text style={[styles.fontSize12, styles.fontBold600]}>
                          Trả lời
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
                <View
                  style={[
                    styles.marginTop10,
                    styles.marginRight20,
                    styles.marginLeft10,
                  ]}>
                  <Text style={[styles.fontSize12, styles.textBlackGrray]}>
                    3h
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.marginTop10]}>
            <Text style={[styles.fontSize12, styles.textBlackGrray]}>3h</Text>
          </View>
        </View>
      </View>
      <View style={[styles.boxUserComment, styles.marginTop15]}>
        <Avatar
          size={32}
          rounded
          source={images.AvatarDemo1}
          activeOpacity={0.8}
          containerStyle={styles.userAvatarComment}
        />
        <View style={[styles.Row]}>
          <View style={styles.flexBox}>
            <Text style={[styles.fontSize12, styles.colorBlack]}>
              <Text style={[styles.fontBold700]}>diana_slown </Text>
              This week we discussed all things teen skincare with our girls
              Honorcita.
            </Text>
            <View style={[styles.RowAlignItems, styles.marginTop5]}>
              <View style={[styles.RowAlignItems]}>
                <IconsAnt name="hearto" size={12} />
                <Text style={[styles.fontSize12, styles.marginLeft5]}>14</Text>
              </View>
              <View style={styles.marginLeft12}>
                <TouchableOpacity onPress={focusInput}>
                  <Text style={[styles.fontSize12, styles.fontBold600]}>
                    Trả lời
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={[styles.boxUserComment, styles.marginTop15]}>
              <Avatar
                size={32}
                rounded
                source={images.AvatarDemo1}
                activeOpacity={0.8}
                containerStyle={styles.userAvatarComment}
              />
              <View style={[styles.Row]}>
                <View style={styles.flexBox}>
                  <Text style={[styles.fontSize12, styles.colorBlack]}>
                    <Text style={[styles.fontBold700]}>diana_slown </Text>
                    me toooo :)))
                  </Text>
                  <View style={[styles.RowAlignItems, styles.marginTop5]}>
                    <View style={[styles.RowAlignItems]}>
                      <IconsAnt name="hearto" size={12} />
                      <Text style={[styles.fontSize12, styles.marginLeft5]}>
                        14
                      </Text>
                    </View>
                    <View style={styles.marginLeft12}>
                      <TouchableOpacity onPress={focusInput}>
                        <Text style={[styles.fontSize12, styles.fontBold600]}>
                          Trả lời
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
                <View
                  style={[
                    styles.marginTop10,
                    styles.marginRight20,
                    styles.marginLeft10,
                  ]}>
                  <Text style={[styles.fontSize12, styles.textBlackGrray]}>
                    3h
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.marginTop10]}>
            <Text style={[styles.fontSize12, styles.textBlackGrray]}>3h</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CommentComponent;
