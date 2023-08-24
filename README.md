```
# Getting Started with "npx react-native init GameTarot"

Map project
├── **tests**/
├── android/
├── ios/
├── node_modules/
├── src/
├── App.js
├── app.json
├── babel.config.js
├── index.js
├── package.json
├── README.md

- Note:

*  Run instructions for Android:
      • Have an Android emulator running (quickest way to get started), or a device connected.
      • cd "../GameTarot" && npx react-native run-android

*  Run instructions for iOS:
      • cd "../GameTarot" && npx react-native run-ios
      - or -
      • Open GameTarot/ios/GameTarot.xcworkspace in Xcode or run "xed -b ios"
      • Hit the Run button
      - or -
      npm start -- --reset-cache

*  Run instructions for macOS:
      • See https://aka.ms/ReactNativeGuideMacOS for the latest up-to-date instructions.

//
*  Link cac thu vien file voi nhau: 'npx react-native-asset'.

//
*  Ở đây là danh sách các font icon được hỗ trợ trong phiên bản react-native-vector-icons 9.2.0:
      AntDesign
      Entypo
      EvilIcons
      Feather
      FontAwesome
      FontAwesome5
      Foundation
      Ionicons
      MaterialIcons
      MaterialCommunityIcons
      Octicons
      SimpleLineIcons
      Zocial
      *//
      https://github.com/oblador/react-native-vector-icons#icon-component
      https://oblador.github.io/react-native-vector-icons/

//
* Add Font Icon on Android:
      Edit android/app/build.gradle ( NOT android/build.gradle ) and add the following:
      /*
            apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
      */
//
* IOS run install Pod:
      - cd to ... /ios -> pod install
//
* Android run-android:
      - Trước hết, hãy thử xóa thư mục build trong thư mục gốc của dự án và cả trong android/app. Sau đó, thử chạy lại ứng dụng bằng lệnh npx react-native run-android.
//
* Node js default:
      - nvm alias default <version>
//
* Để đồng bộ phiên bản của các gems trong Gemfile.lock với các phiên bản được định nghĩa trong Gemfile, bạn có thể chạy lệnh bundle update trong thư mục dự án của mình. Lệnh này sẽ tìm kiếm phiên bản mới nhất của tất cả các gems trong Gemfile, cập nhật phiên bản của các gems đó trong Gemfile.lock và cài đặt các gems mới nhất đó.
      - bundle update

// Cấu hình multi language cho ứng dụng dùng thư viện i18next cần chú ý
      * Với typescript thì file setup của i18n phải là i18n.js chứ không phải là đuôi .ts hay .tsx thì sẽ bị lỗi

// Một số trường hợp khi khởi chạy trên android bị lỗi khi build ko gọi đc jvascrpt thì chạy lệnh sau:
      * mở Command Prompt hoặc Terminal trên máy tính của mình và chạy lệnh npx react-native start từ thư mục gốc của dự án React Native của bạn.
```

// config lệnh Lỗi này xảy ra khi bạn cố gắng tích hợp một số Pods (thư viện) của Swift vào ứng dụng iOS của mình dưới dạng các thư viện tĩnh (static libraries). Trong trường hợp này, một trong các Pods Swift đó là FirebaseCoreInternal phụ thuộc vào GoogleUtilities, nhưng GoogleUtilities không định nghĩa các modules (tập tin phụ trợ cho việc import trong Swift khi xây dựng dưới dạng các thư viện tĩnh).

      * Để khắc phục lỗi này, bạn có thể làm theo các hướng dẫn sau đây:
      1. Mở tệp Podfile trong dự án của bạn.
      2. Thêm use_modular_headers! vào phía trên cùng của tệp Podfile, để bật tính năng tạo

// Add fonts

      Tạo file react-native.config.js rồi thêm nội dung sau:
      module.exports = {
            resolver: {
                  assetExts: ['ttf', 'png', 'jpg', 'jpeg', 'gif'], // Thêm các định dạng file asset bạn muốn hỗ trợ
            },
            project: {
                  ios: {},
                  android: {},
            },
            assets: ['src/assets/fonts'], // đường dẫn tới folder fonts
      };
      ==> sau đó chạy lệnh để link đến ứng dụng: 'npx react-native-asset'

// Android tạo file APK
Nếu bạn muốn tạo file APK trực tiếp từ bundle bằng Android Studio, hãy làm theo các bước sau:
Mở Android Studio và mở dự án React Native của bạn.
Trong menu, chọn "Build" > "Build Bundles(s)/APK(s)" > "Build APK(s)".
Android Studio sẽ tạo ra tệp APK tại android/app/build/outputs/apk/release/app-release.apk.
