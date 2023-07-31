import React, {useState, useEffect} from 'react';
import {Text} from 'react-native-elements';
import {
  TouchableOpacity,
  View,
  Modal,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {styles} from '../../../../assets/styles';
import {ScrollView} from 'react-native-gesture-handler';
import GestureRecognizer from 'react-native-swipe-gestures';
import IconMateria from 'react-native-vector-icons/MaterialCommunityIcons';

interface ModalDataDateProps {
  isModalVisible: boolean;
  dataItem: any;
  onClick: () => void;
}

const ModalDataDate = ({
  isModalVisible,
  dataItem,
  onClick,
}: ModalDataDateProps) => {
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
        style={[styles.flexBox, styles.backgBlackOpacity]}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={[styles.flexBox]}>
          <TouchableOpacity onPress={onClick} style={[styles.height40p]} />
          <View style={[styles.modalComment]}>
            <TouchableOpacity
              onPress={onClick}
              style={[styles.alignCenter, styles.paddingVertical10]}>
              <View style={styles.closeModal} />
            </TouchableOpacity>
            <View style={[styles.RowCenterBetween, styles.paddingHorizontal18]}>
              <TouchableOpacity onPress={onClick}>
                <Text
                  style={[
                    styles.colorOrange,
                    styles.fontBold600,
                    styles.fontSize16,
                  ]}>
                  Hủy lịch
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={onClick}>
                <View style={styles.RowCenterBetween}>
                  {dataItem.confirm === true && (
                    <View style={styles.RowCenterBetween}>
                      <Text style={[styles.marginRight5, styles.colorGrray]}>
                        Chấp thuận
                      </Text>
                      <IconMateria
                        name="check-circle-outline"
                        size={24}
                        color={'#366AF0'}
                      />
                    </View>
                  )}
                  {dataItem.confirm === false && (
                    <View style={styles.RowCenterBetween}>
                      <Text style={[styles.marginRight5, styles.colorGrray]}>
                        Cancel
                      </Text>
                      <IconMateria name="cancel" size={24} color={'#9E9E9E'} />
                    </View>
                  )}
                </View>
              </TouchableOpacity>
            </View>
            <View style={[styles.margin18, styles.marginBottom30]}>
              <ScrollView>
                <Text style={[styles.textBlack, styles.marginBottom15]}>
                  {dataItem.index}-Tên:{' '}
                  <Text style={[styles.textBlack, styles.fontBold600]}>
                    {dataItem.name}
                  </Text>
                </Text>
                <View
                  style={[styles.boxWhiteRadius, styles.paddingHorizontal18]}>
                  <View
                    style={[styles.RowCenterBetween, styles.marginBottom10]}>
                    <Text style={[styles.textBlack, styles.fontBold600]}>
                      Bắt đầu
                    </Text>
                    <View style={styles.RowBetween}>
                      <View
                        style={[styles.boxGrayRadius10, styles.marginRight10]}>
                        <Text style={[styles.textBlack, styles.fontBold600]}>
                          {dataItem.start}
                        </Text>
                      </View>
                      <View style={[styles.boxGrayRadius10]}>
                        <Text style={(styles.textBlack, styles.fontBold600)}>
                          {dataItem.day}
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.RowCenterBetween}>
                    <Text style={[styles.textBlack, styles.fontBold600]}>
                      Kết thúc
                    </Text>
                    <View style={styles.RowBetween}>
                      <View
                        style={[styles.boxGrayRadius10, styles.marginRight10]}>
                        <Text style={(styles.textBlack, styles.fontBold600)}>
                          {dataItem.end}
                        </Text>
                      </View>
                      <View style={[styles.boxGrayRadius10]}>
                        <Text style={(styles.textBlack, styles.fontBold600)}>
                          {dataItem.day}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View
                  style={[
                    styles.boxWhiteRadius,
                    styles.paddingHorizontal18,
                    styles.marginTop15,
                  ]}>
                  <View style={styles.RowCenterBetween}>
                    <Text style={[styles.textBlack, styles.fontBold600]}>
                      Summary
                    </Text>
                    <View style={styles.RowBetween}>
                      <View
                        style={[styles.boxGrayRadius10, styles.marginRight10]}>
                        <Text
                          style={[
                            styles.textBlack,
                            styles.fontBold600,
                            styles.colorOrange,
                          ]}>
                          {dataItem.summary}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View
                  style={[
                    styles.boxWhiteRadius,
                    styles.paddingHorizontal18,
                    styles.marginTop15,
                  ]}>
                  <View>
                    <Text
                      style={[styles.textBlackGrray, styles.marginBottom10]}>
                      Ghi chú nội bộ
                    </Text>
                    <Text style={[styles.fontBold600, styles.colorOrange]}>
                      Update...
                    </Text>
                  </View>
                </View>
              </ScrollView>
            </View>
          </View>
        </KeyboardAvoidingView>
      </GestureRecognizer>
      {Platform.OS === 'ios' ? (
        <View style={[styles.spacer, styles.BgTransparent]} />
      ) : (
        ''
      )}
    </Modal>
  );
};

export default ModalDataDate;
