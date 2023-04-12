import React, {useState, useEffect} from 'react';
import {Avatar, Text} from 'react-native-elements';
import {
  TouchableOpacity,
  View,
  Modal,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {styles} from '../../../../assets/styles';
import {ScrollView} from 'react-native-gesture-handler';
import IconsEvi from 'react-native-vector-icons/EvilIcons';
import CommentComponent from './comment';
import {images} from '../../../../assets/constants';
import IconsMateria from 'react-native-vector-icons/MaterialCommunityIcons';
import GestureRecognizer from 'react-native-swipe-gestures';

interface ModalCommentProps {
  isID: string;
  isModalVisible: boolean;
  onClick: () => void;
}

const ModalComment = ({isID, isModalVisible, onClick}: ModalCommentProps) => {
  const [isModal, setModal] = useState(isModalVisible);
  useEffect(() => {
    setModal(isModalVisible);
  }, [isModalVisible]);

  const config = {
    velocityThreshold: 0.3, //ngưỡng tốc độ của sự kiện vuốt
    directionalOffsetThreshold: 80, //khoảng cách tối thiểu (theo đơn vị pixel) mà người dùng phải vuốt để đóng
  };

  return (
    <Modal visible={isModal} transparent={true} animationType={'slide'}>
      <GestureRecognizer
        onSwipeDown={onClick}
        config={config}
        style={styles.flexBox}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={[styles.flexBox]}>
          <TouchableOpacity onPress={onClick} style={styles.flex1} />
          <View style={[styles.modalComment]}>
            <TouchableOpacity
              onPress={onClick}
              style={[styles.alignCenter, styles.paddingVertical10]}>
              <View style={styles.closeModal} />
            </TouchableOpacity>
            <View style={styles.alignItems}>
              <View style={[styles.paddingHorizontal18, styles.marginBottom30]}>
                <ScrollView>
                  <View style={styles.borderBottom}>
                    <View style={[styles.RowAlignItems, styles.marginBottom10]}>
                      <Text
                        style={[
                          styles.fontBold700,
                          styles.fontSize16,
                          styles.colorBlack,
                        ]}>
                        {isID} Lanasmith
                      </Text>
                      <View style={[styles.RowAlignItems, styles.marginLeft10]}>
                        <IconsEvi
                          name="clock"
                          size={16}
                          color="rgba(0, 0, 0, 0.4)"
                        />
                        <Text
                          style={[styles.textBlackGrray, styles.fontSize10]}>
                          3h trước
                        </Text>
                      </View>
                    </View>
                    <Text>
                      Tại sao lá bài của tôi lại là lá ngược, ngược liệu có mang
                      đến nhiều điều xui xẻo không các chuyên gia ơi. Mình có
                      cách nào để vượt qua được nỗi sợ hãi này không ?????
                    </Text>
                  </View>
                  <CommentComponent />
                </ScrollView>
              </View>
            </View>
          </View>
          <View style={styles.boxFormComment}>
            <View style={styles.flex1}>
              <TextInput
                style={styles.inputTheme2}
                placeholder="Thêm bình luận..."
              />
              <Avatar
                size={32}
                rounded
                source={images.AvatarDemo1}
                activeOpacity={0.8}
                containerStyle={styles.myAvatar}
              />
              <TouchableOpacity style={[styles.btnMicro]} onPress={() => {}}>
                <IconsMateria name="microphone" size={22} color={'#000'} />
              </TouchableOpacity>
              <TouchableOpacity style={[styles.btnCamera]} onPress={() => {}}>
                <IconsMateria name="camera" size={22} color={'#000'} />
              </TouchableOpacity>
            </View>
            <View style={styles.marginLeft10}>
              <TouchableOpacity style={[styles.btnSend]} onPress={() => {}}>
                <IconsMateria name="send" size={24} color={'#fff'} />
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </GestureRecognizer>
      <View style={styles.spacer} />
    </Modal>
  );
};

export default ModalComment;
