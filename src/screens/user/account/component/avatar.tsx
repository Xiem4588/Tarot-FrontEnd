import React, {useState} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {images} from '../../../../assets/constants';
import {styles} from '../../../../assets/styles';
import * as ImagePicker from 'react-native-image-picker';
import {MediaType} from 'react-native-image-picker';
import axios from 'axios';

const AvatarUpload = () => {
  const [avatarUri, setAvatarUri] = useState<string | null>(null);

  // Hàm để gửi ảnh lên server
  const uploadImage = async (imageUri: string | undefined) => {
    try {
      const formData = new FormData();
      formData.append('avatar', imageUri || ''); // Use the imageUri directly

      const response = await axios.post(
        'http://172.16.100.47/upload-avatar',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );
      // Xử lý phản hồi từ máy chủ (nếu cần)
      console.log('Upload success:', response.data);
      return response.data;
    } catch (error) {
      console.error('Upload failed:', error);
      throw error;
    }
  };

  // Hàm để mở thư viện ảnh và chọn ảnh
  const selectAvatar = () => {
    // Cấu hình các tùy chọn cho việc mở thư viện ảnh
    const options = {
      title: 'Chọn ảnh đại diện',
      type: 'library',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
      mediaType: 'photo' as MediaType, // Thêm tùy chọn mediaType
    };

    // Mở thư viện ảnh
    ImagePicker.launchImageLibrary(options, async response => {
      if (response.didCancel) {
        console.log('Người dùng hủy bỏ việc chọn ảnh');
      } else if (response.errorCode) {
        console.log('----> errorCode: ', response.errorCode);
      } else if (response.errorMessage) {
        console.log('----> errorMessage: ', response.errorMessage);
      } else if (response.assets) {
        console.log('----> assets:', response.assets);
        setAvatarUri(String(response.assets[0].uri));
        try {
          const uploadedImageUrl = await uploadImage(response.assets[0].uri);
          console.log('----> Uploaded image URL:', uploadedImageUrl);
          setAvatarUri(uploadedImageUrl);
        } catch (error) {
          console.error('Error uploading image:', error);
        }
      } else {
        console.log('----> Gia tri khac');
      }
    });
  };

  return (
    <TouchableOpacity style={styles.zindexRelative9} onPress={selectAvatar}>
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
