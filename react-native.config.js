//react-native.config.js

module.exports = {
  resolver: {
    assetExts: ['ttf', 'png', 'jpg', 'jpeg', 'gif'], // Thêm các định dạng file asset bạn muốn hỗ trợ
  },
  project: {
    ios: {},
    android: {},
  },
  assets: ['src/assets/fonts'],
};
