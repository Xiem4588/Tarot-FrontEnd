import React, {useState} from 'react';
import {Dimensions, View} from 'react-native';
import {styles} from '../../../../assets/styles';
import ModalComment from './modal';
import Post from './post';

const ScreenCommunity = () => {
  const {width, height} = Dimensions.get('window');
  const [isModalVisible, setModalVisible] = useState(false);
  const [isID, setIsID] = useState('');
  const IdAuthor = (id: string) => {
    setModalVisible(!isModalVisible);
    setIsID(id);
    console.log(isModalVisible);
  };
  const handleScroll = () => {
    if (isModalVisible) {
      setModalVisible(false);
    }
  };
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={[styles.flexBox, {minHeight: height, minWidth: width}]}>
      <Post
        IdAuthor={(id: string) => IdAuthor(id)}
        handleScroll={handleScroll}
      />
      <ModalComment
        isID={isID}
        isModalVisible={isModalVisible}
        onClick={toggleModal}
      />
    </View>
  );
};

export default ScreenCommunity;
