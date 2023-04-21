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
* Node js default:
      - nvm alias default <version>
//
* Để đồng bộ phiên bản của các gems trong Gemfile.lock với các phiên bản được định nghĩa trong Gemfile, bạn có thể chạy lệnh bundle update trong thư mục dự án của mình. Lệnh này sẽ tìm kiếm phiên bản mới nhất của tất cả các gems trong Gemfile, cập nhật phiên bản của các gems đó trong Gemfile.lock và cài đặt các gems mới nhất đó.
      - bundle update
```
