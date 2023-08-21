//react-native.config.js

module.exports = {
  assets: ['src/assets/fonts'],
  android: {
    sourceDir: 'path_to_your_android_project/app/src/main',
    resourceDirs: [
      'src/assets/fonts', // Đường dẫn tới thư mục chứa font trên Android
    ],
  },
  resolver: {
    assetExts: ['ttf', 'otf'], // Thêm các định dạng file asset bạn muốn hỗ trợ
  },
};
