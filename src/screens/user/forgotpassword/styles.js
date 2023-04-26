/**
 * @format style
 */
import {StyleSheet, Dimensions} from 'react-native';
const {height} = Dimensions.get('window');
export const stylesScreen = StyleSheet.create({
  visualImage: {
    maxWidth: '100%',
    height: 250,
    resizeMode: 'contain',
    alignItems: 'center',
    marginVertical: 18,
  },
  visualImageContinue: {
    maxWidth: '100%',
    height: 150,
    resizeMode: 'contain',
    alignItems: 'center',
    marginVertical: 18,
  },
  image: {
    marginBottom: -80,
    marginTop: 0,
    padding: 0,
    marginLeft: 'auto',
    width: '80%',
    height: height >= 680 ? (height >= 720 ? 250 : 180) : 150,
    resizeMode: 'contain',
  },
  ellipseIcon: {
    backgroundColor: '#A9B0F5',
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
  iconRightInput: {
    position: 'absolute',
    right: 12,
    top: 12,
    zIndex: 3,
  },
  border: {
    width: '100%',
    height: 1,
    borderBottomColor: '#ccc',
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
  iconLeftInput: {
    position: 'absolute',
    left: 12,
    top: 12,
    zIndex: 3,
  },
  checkCircle: {
    position: 'absolute',
    right: 10,
    top: 25,
  },
});
