import React, {useState, useEffect} from 'react';
import {Text} from 'react-native-elements';
import {
  TouchableOpacity,
  View,
  Modal,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import {styles} from '../../../../assets/styles';
import GestureRecognizer from 'react-native-swipe-gestures';
import i18n from '../../../../languages/i18n';

interface ModalPriceListProps {
  isModalVisible: boolean;
  onClick: () => void;
}

const ModalPriceList = ({isModalVisible, onClick}: ModalPriceListProps) => {
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
            <View style={[styles.RowBetween, styles.paddingHorizontal18]}>
              <TouchableOpacity onPress={onClick}>
                <Text
                  style={[
                    styles.textOrange,
                    styles.fontSize18,
                    styles.fontBold600,
                  ]}>
                  {i18n.t('cancel')}
                </Text>
              </TouchableOpacity>
              <Text
                style={[
                  styles.textBlack,
                  styles.fontSize18,
                  styles.fontBold600,
                ]}>
                Bảng giá
              </Text>
              <TouchableOpacity onPress={onClick}>
                <Text
                  style={[
                    styles.textOrange,
                    styles.fontSize18,
                    styles.fontBold600,
                  ]}>
                  {i18n.t('save')}
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.marginTop20}>
              <View style={[styles.paddingHorizontal18, styles.marginBottom30]}>
                <ScrollView>
                  <View style={styles.itemCarousel}>
                    <View>
                      <Text
                        style={[
                          styles.fontSize12,
                          styles.marginBottom10,
                          styles.colorBlack,
                        ]}>
                        Gói không giới hạn
                      </Text>
                    </View>
                    <Text
                      style={[
                        styles.fontSize16,
                        styles.colorOrange,
                        styles.marginTopAuto,
                        styles.fontBold700,
                      ]}>
                      200k
                    </Text>
                  </View>
                </ScrollView>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </GestureRecognizer>
      {Platform.OS === 'ios' ? <View style={styles.spacer} /> : ''}
    </Modal>
  );
};

export default ModalPriceList;
