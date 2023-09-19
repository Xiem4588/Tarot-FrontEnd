import React, {useState} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {images} from '../../../../assets/constants';
import {styles} from '../../../../assets/styles';
import * as ImagePicker from 'react-native-image-picker';
import {saveImageServer} from '../../../../services';
// import {hot} from '../../../../services/env';

const AvatarUpload = () => {
  const [avatarUri, setAvatarUri] = useState<string | null>(null);

  // Hàm để gửi ảnh lên server
  const uploadAvatar = async (avatar: string) => {
    try {
      if (!avatar) {
        return null;
      } else {
        const formData = new FormData();
        const response = await fetch(avatar);
        const blob = await response.blob();
        formData.append('avatar', blob, 'avatar.jpg');

        const serverResponse = await saveImageServer('upload-avatar', formData);

        return serverResponse;
      }
    } catch (error) {
      console.error('Lỗi! (001)', error);
      return 'Lỗi! (001)';
    }
  };

  // Hàm để mở thư viện ảnh và chọn ảnh
  const handleSelectAvatar = () => {
    const options = {
      mediaType: 'photo' as ImagePicker.MediaType,
    };

    // Mở thư viện ảnh
    ImagePicker.launchImageLibrary(options, async response => {
      if (response.didCancel) {
        return 'Chọn ảnh bị hủy';
      } else if (response.errorCode) {
        return 'Lỗi khi chọn ảnh';
      } else {
        try {
          if (
            response.assets &&
            response.assets[0].uri &&
            response.assets.length > 0
          ) {
            const avatar = response.assets[0].uri;
            const uploadedAvatar = await uploadAvatar(avatar);
            setAvatarUri(avatar);
            return uploadedAvatar;
          } else {
            console.error('Không có ảnh được chọn');
          }
        } catch (error) {
          console.error('Lỗi khi tải ảnh lên server: (2)', error);
        }
      }
    });
  };

  return (
    <TouchableOpacity
      style={styles.zindexRelative9}
      onPress={handleSelectAvatar}>
      <View style={[styles.avatarProfileEllipse]}>
        <Image
          source={avatarUri ? {uri: avatarUri} : images.AvatarDemo1}
          style={[styles.avatarProfileEllipse]}
        />
      </View>
      <Image
        source={images.icon_camera}
        style={[styles.positionAbsoluteBottom, styles.imageSize24]}
      />
    </TouchableOpacity>
  );
};

export default AvatarUpload;
