/**
 * @format style
 */
import {StyleSheet, Dimensions} from 'react-native';
const {height} = Dimensions.get('window');
export const stylesScreen = StyleSheet.create({
  image: {
    marginBottom: -80,
    marginTop: 0,
    padding: 0,
    marginLeft: 'auto',
    width: '80%',
    height: height >= 680 ? (height >= 720 ? 220 : 150) : 120,
    resizeMode: 'contain',
  },
  iconSize24: {
    height: 24,
    resizeMode: 'contain',
  },
  iconLeftInput: {
    position: 'absolute',
    left: 12,
    top: 12,
    zIndex: 3,
  },
  iconRightInput: {
    position: 'absolute',
    right: 12,
    top: 12,
    zIndex: 3,
  },
  borderBottom: {
    width: '100%',
    height: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.4)',
    borderBottomWidth: 1,
    zIndex: -1,
  },
  absolutePosition: {
    position: 'absolute',
    top: -10, // Đặt top bằng âm để đưa văn bản lên trên
    backgroundColor: '#171717',
    paddingHorizontal: 16,
    color: '#616161',
    fontFamily: 'Montserrat',
  },
  separator: {
    width: 18,
  },
  border: {
    width: '100%',
    height: 1,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    zIndex: -1,
  },
});
