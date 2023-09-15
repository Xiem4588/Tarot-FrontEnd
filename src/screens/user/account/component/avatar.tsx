import React, {useState} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {images} from '../../../../assets/constants';
import {styles} from '../../../../assets/styles';
import * as ImagePicker from 'react-native-image-picker';
import {saveImageServer} from '../../../../services';
import {hot} from '../../../../services/env';

const AvatarUpload = () => {
  const [avatarUri, setAvatarUri] = useState<string | null>(null);

  // Hàm để gửi ảnh lên server
  const saveImage = async (imageUri: string) => {
    try {
      const blob = await fetch(imageUri).then(response => response.blob());
      console.log('-------> (1)', blob);

      const formData = new FormData();
      formData.append('avatar', blob, 'avatar.jpg');

      const res = await saveImageServer('upload-avatar', formData);
      console.log('-------> (2)', res.data);
      if (res.data) {
        setAvatarUri(`${hot}/upload/${res.data.avatarPath}/avatar.jpg`);
        return 'ok';
      } else {
        console.error('Không nhận được đường dẫn ảnh từ phản hồi');
      }
    } catch (error) {
      console.error('Lỗi khi tải ảnh lên server:', error);
    }
  };

  // Hàm để mở thư viện ảnh và chọn ảnh
  const selectImageAvatar = () => {
    const options = {
      title: 'Chọn ảnh đại diện',
      type: 'library',
      mediaType: 'photo' as ImagePicker.MediaType,
      storageOptions: {
        path: 'images',
        skipBackup: true,
      },
    };

    // Mở thư viện ảnh
    ImagePicker.launchImageLibrary(options, async response => {
      if (response.didCancel) {
        return 'Chọn ảnh bị hủy';
      } else if (response.errorCode) {
        return 'Lỗi khi chọn ảnh';
      } else {
        try {
          if (response.assets && response.assets.length > 0) {
            const selectedImageUri = response.assets[0].uri;
            setAvatarUri(selectedImageUri!);
            const uploadedImageUrl = await saveImage(String(selectedImageUri));
            return uploadedImageUrl;
          } else {
            console.error('Không có ảnh được chọn');
          }
        } catch (error) {
          console.error('Lỗi khi tải ảnh lên server:', error);
        }
      }
    });
  };

  return (
    <TouchableOpacity
      style={styles.zindexRelative9}
      onPress={selectImageAvatar}>
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
