/**
 * @format style
 */
import {StyleSheet, StatusBar, Platform, Dimensions} from 'react-native';
import {colors} from './constants';
const {width, height} = Dimensions.get('window');

if (width >= 768 && height >= 1024) {
  // Thiết bị có độ phân giải màn hình iPad Pro
} else if (width >= 414 && height >= 896) {
  // Thiết bị có độ phân giải màn hình iPhone X/XS/11 Pro Max/12 Pro Max
} else if (width >= 375 && height >= 812) {
  // Thiết bị có độ phân giải màn hình iPhone X/XS/11 Pro/12 Pro
} else if (width >= 375 && height >= 667) {
  // Thiết bị có độ phân giải màn hình iPhone 6/7/8 Plus
} else if (width >= 320 && height >= 568) {
  // Thiết bị có độ phân giải màn hình iPhone 5/SE/6/7/8
} else {
  // Thiết bị có độ phân giải màn hình nhỏ hơn các giá trị độ phân giải chuẩn
}
const avatarLoginHeight = height >= 700 ? 180 : 150;

export const styles = StyleSheet.create({
  bodyScreen: {
    flex: 1,
    backgroundColor: colors.transparent,
  },
  SafeAreaView: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.transparent,
    paddingHorizontal: 18,
  },
  paddingHorizontal18: {
    paddingHorizontal: 18,
  },
  paddingHorizontal24: {
    paddingHorizontal: 24,
  },
  paddingLeft18: {
    paddingLeft: 18,
  },
  paddingRight30: {
    paddingLeft: 30,
  },
  paddingHorizontal9: {
    paddingHorizontal: 9,
  },
  paddingTop2: {
    paddingTop: 2,
  },
  paddingTop5: {
    paddingTop: 5,
  },
  paddingTop30: {
    paddingTop: 30,
  },
  paddingTop20: {
    paddingTop: 20,
  },
  paddingTop10: {
    paddingTop: 10,
  },
  ImageBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: colors.lightBlack,
  },
  ImageBackgroundCommunity: {
    flex: 1,
    width: width,
    height: height,
    position: 'absolute',
  },
  bodyScreenBlack: {
    flex: 1,
    backgroundColor: colors.lightBlack,
  },
  backgBlack: {
    backgroundColor: '#000',
  },
  backgBlackOpacity: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  backgBlackOpacity08: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  backgWhite: {
    backgroundColor: '#fff',
  },
  navigationContainer: {
    flex: 1,
    backgroundColor: colors.transparent,
  },
  textWhite: {
    color: '#FFFFFF',
    lineHeight: 20,
    fontFamily: 'Montserrat',
  },
  textOrange: {
    color: '#F68B73',
  },
  textWhiteGrray: {
    color: 'rgba(255, 255, 255, 0.4)',
  },
  textBlackGrray: {
    color: 'rgba(0, 0, 0, 0.4)',
  },
  lineHeight24: {
    lineHeight: 24,
  },
  lineHeight22: {
    lineHeight: 22,
  },
  flexBox: {
    flex: 1,
  },
  flex1: {
    flex: 1,
  },
  flex0: {
    flex: 0,
  },
  width50: {
    width: '50%',
  },
  height30p: {
    height: '30%',
  },
  height40p: {
    height: '40%',
  },
  height100px: {
    height: 100,
  },
  height200px: {
    height: 200,
  },
  fullWidthHeight: {
    width: '100%',
    height: '100%',
    flex: 1,
  },
  fullWidht: {
    width: '100%',
    resizeMode: 'contain',
  },
  paddingBox: {
    zIndex: 1,
    paddingHorizontal: 18,
    position: 'relative',
  },
  paddingTop50: {
    paddingTop: 50,
  },
  paddingTop40: {
    paddingTop: height >= 700 ? 40 : Platform.OS === 'ios' ? 20 : 0,
  },
  paddingTop50Ios15Adroid: {
    paddingTop:
      height >= 700
        ? Platform.OS === 'ios'
          ? 60
          : 25
        : Platform.OS === 'ios'
        ? 25
        : 15,
  },
  paddingTop90: {
    paddingTop:
      height >= 700
        ? Platform.OS === 'ios'
          ? 90
          : 70
        : Platform.OS === 'ios'
        ? 70
        : 55,
  },
  paddingVertical30: {
    paddingVertical: 30,
  },
  paddingVertical20: {
    paddingVertical: 20,
  },
  paddingVertical10: {
    paddingVertical: 10,
  },
  paddingBottom10: {
    paddingBottom: 10,
  },
  paddingBottom30: {
    paddingBottom: 30,
  },
  paddingVertical5: {
    paddingVertical: 5,
  },
  paddingVertical3: {
    paddingVertical: 3,
  },
  paddingHorizontal10: {
    paddingHorizontal: 10,
  },
  padding18: {
    padding: 18,
  },
  padding24: {
    padding: 24,
  },
  alignCenter: {
    alignItems: 'center',
    fontFamily: 'Montserrat',
  },
  textCenter: {
    textAlign: 'center',
  },
  alignRight: {
    alignItems: 'flex-end',
  },
  iconTab: {
    width: 34,
    height: 34,
    resizeMode: 'contain',
  },
  imgMode: {
    width: '100%',
    height: '100%',
  },
  resizeModeContain: {
    flex: 1,
    width: '100%',
    marginVertical: 50,
  },
  iconTabUn: {
    width: 8,
    height: 8,
    top: 20,
    position: 'absolute',
    overflow: 'hidden',
    borderRadius: 100,
    backgroundColor: '#F78B73',
  },
  inputContainer: {
    marginBottom: 24,
    width: '100%',
  },
  label: {
    fontSize: 14,
    fontWeight: 'normal',
    fontFamily: 'Montserrat',
    color: '#FFFFFF',
  },
  required: {
    color: 'rgba(255, 92, 92, 1)',
  },
  input: {
    height: 50,
    paddingHorizontal: 16,
    marginVertical: 12,
    borderWidth: 0,
    borderRadius: 36,
    backgroundColor: '#F2F2F2',
  },
  inputOtp: {
    backgroundColor: '#F2F2F2',
    paddingVertical: 14,
    width: 55,
    textAlign: 'center',
    marginHorizontal: 7,
    borderRadius: 12,
    fontSize: 24,
    fontWeight: 'bold',
  },
  inputForm: {
    height: 42,
    paddingHorizontal: 36,
    borderRadius: 36,
    color: '#000',
    backgroundColor: '#F2F2F2',
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
  buttonTmp: {
    width: '100%',
    height: 50,
    backgroundColor: '#F78B73',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 'auto',
  },
  buttonFullDisable: {
    width: '100%',
    height: 50,
    backgroundColor: '#383838',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 'auto',
  },
  btnTmpAuto: {
    minWidth: 88,
    padding: 12,
    paddingBottom: 8,
    minHeight: 56,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
  },
  btnTmpAutoLeft: {
    padding: 12,
    paddingBottom: 8,
    minHeight: 56,
    backgroundColor: '#FFF',
    alignItems: 'center',
    borderRadius: 16,
  },
  buttonText: {
    color: colors.defaultBlack,
    fontSize: 16,
    fontWeight: '700',
    fontFamily: 'Montserrat',
  },
  buttonClose: {
    color: colors.white,
    fontSize: 24,
    fontWeight: '600',
    fontFamily: 'Montserrat',
  },
  avatarLogin: {
    paddingTop: height >= 700 ? (Platform.OS === 'ios' ? 50 : 25) : 15,
    backgroundColor: '#A9B0F5',
    height: avatarLoginHeight,
    position: 'relative',
    marginBottom: 100,
  },
  avatarProfile: {
    backgroundColor: '#A9B0F5',
    position: 'relative',
    paddingBottom: 20,
    paddingTop: height >= 700 ? (Platform.OS === 'ios' ? 60 : 25) : 15,
  },
  ImgIconBag: {
    position: 'absolute',
    bottom: -80,
    height: 200,
    width: '100%',
  },
  ImgBgBottom: {
    position: 'absolute',
    bottom: -30,
    height: 50,
    width: '100%',
  },
  avatarDefaultEllipse: {
    width: 80,
    height: 80,
    borderRadius: 50,
    position: 'absolute',
    bottom: -50,
  },
  avataProfileEllipse: {
    width: 80,
    height: 80,
    borderRadius: 50,
    alignContent: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  nameProfile: {
    fontWeight: '600',
    fontSize: 18,
    marginVertical: 8,
    color: '#000',
    fontFamily: 'Montserrat',
  },
  positionAbsolute: {
    position: 'absolute',
    bottom: -50,
  },
  positionAbsoluteLoadingLeft: {
    position: 'absolute',
    left: 25,
    top: 15,
  },
  positionAbsoluteLoadingRight: {
    position: 'absolute',
    right: 25,
    top: 15,
  },
  positionAbsoluteTop: {
    position: 'absolute',
    zIndex: 2,
  },
  zindexRelative9: {
    position: 'relative',
    zIndex: 9,
  },
  buttonTmpSm: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    borderRadius: 16,
    paddingVertical: 10,
    paddingHorizontal: 12,
    lineHeight: 14,
    color: '#FFFFFF',
    fontSize: 12,
    textAlign: 'center',
    overflow: 'hidden',
  },
  buttonTmpSmWhite05: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    borderRadius: 16,
    paddingVertical: 10,
    paddingHorizontal: 12,
    lineHeight: 14,
    color: '#FFFFFF',
    fontSize: 12,
    textAlign: 'center',
    overflow: 'hidden',
    fontWeight: '600',
    fontFamily: 'Montserrat',
  },
  buttonEllipseSm: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    borderRadius: 50,
    padding: 10,
    textAlign: 'center',
  },
  marginRight5: {
    marginRight: 5,
  },
  marginRight10: {
    marginRight: 10,
  },
  marginRight20: {
    marginRight: 20,
  },
  marginRight30: {
    marginRight: 30,
  },
  marginRight36: {
    marginRight: 36,
  },
  marginLeft12: {
    marginLeft: 12,
  },
  marginLeft5: {
    marginLeft: 5,
  },
  marginLeft10: {
    marginLeft: 10,
  },
  marginLeft18: {
    marginLeft: 18,
  },
  margin18: {
    margin: 18,
  },
  marginLeft24: {
    marginLeft: 24,
  },
  marginLeft34: {
    marginLeft: 34,
  },
  marginTop5: {
    marginTop: 5,
  },
  marginTop10: {
    marginTop: 10,
  },
  marginTop30: {
    marginTop: 30,
  },
  marginTop50: {
    marginTop: 50,
  },
  marginTop100P: {
    marginTop: '100%',
  },
  marginTop200: {
    marginTop: 200,
  },
  marginTop20: {
    marginTop: 20,
  },
  marginTop24: {
    marginTop: 24,
  },
  marginTop15: {
    marginTop: 15,
  },
  marginBottom10: {
    marginBottom: 10,
  },
  marginBottom5: {
    marginBottom: 5,
  },
  marginBottom15: {
    marginBottom: 15,
  },
  marginBottom20: {
    marginBottom: 20,
  },
  marginBottom24: {
    marginBottom: 24,
  },
  marginBottom30: {
    marginBottom: 30,
  },
  marginBottom50: {
    marginBottom: 50,
  },
  marginBottom80: {
    marginBottom: 80,
  },
  marginBottomA80: {
    marginBottom: -80,
  },
  marginBottomA50: {
    marginBottom: -50,
  },
  marginBottomA40: {
    marginBottom: -40,
  },
  marginBottomA10: {
    marginBottom: -10,
  },
  marginBottomA20: {
    marginBottom: -20,
  },
  marginBottomA30: {
    marginBottom: -30,
  },
  marginBottom_50: {
    marginBottom: -50,
  },
  marginHorizontalA9: {
    marginHorizontal: -9,
  },
  marginHorizontal18: {
    marginHorizontal: 18,
  },
  marginHorizontal10: {
    marginHorizontal: 10,
  },
  marginVertical18: {
    marginVertical: 18,
  },
  marginVertical24: {
    marginVertical: 24,
  },
  marginVertical34: {
    marginVertical: 34,
  },
  marginVertical10: {
    marginVertical: 10,
  },
  marginTopA50: {
    marginTop: -50,
  },
  marginTopA30: {
    marginTop: -30,
  },
  marginTopA20: {
    marginTop: -20,
  },
  marginTopAuto: {
    marginTop: 'auto',
  },
  marginLeftBottomA18: {
    marginBottom: -18,
    marginLeft: -18,
  },
  fontSize18: {
    fontSize: 18,
    fontFamily: 'Montserrat',
  },
  fontSize16: {
    fontSize: 16,
    fontFamily: 'Montserrat',
  },
  fontSize14: {
    fontSize: 14,
    fontFamily: 'Montserrat',
  },
  fontBold600: {
    fontWeight: '600',
    fontFamily: 'Montserrat',
  },
  fontBold700: {
    fontWeight: '700',
    fontFamily: 'Montserrat',
  },
  fontBold: {
    fontWeight: 'bold',
    fontFamily: 'Montserrat',
  },
  fontMontserrat: {
    fontFamily: 'Montserrat',
  },
  fontAbhayaLibre: {
    fontFamily: 'AbhayaLibre-Regular',
  },
  notifyNew: {
    width: 8,
    height: 8,
    top: 3,
    right: 0,
    position: 'absolute',
    overflow: 'hidden',
    borderRadius: 100,
    backgroundColor: '#FF5C5C',
    zIndex: 1,
  },
  //
  itemContainer: {
    flex: 1,
    paddingTop: 22,
    backgroundColor: colors.transparent,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#000000',
    padding: 12,
    marginBottom: 24,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  itemTimeline: {
    backgroundColor: '#FFFFFF',
    padding: 12,
    marginBottom: 24,
    borderRadius: 10,
    shadowColor: '#000',
    minHeight: 190,
  },
  itemNotify: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#000000',
    paddingHorizontal: 16,
    marginBottom: 16,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  checkNotifyNew: {
    width: 8,
    height: 8,
    marginRight: 12,
    overflow: 'hidden',
    borderRadius: 100,
    backgroundColor: '#FF5C5C',
    zIndex: 1,
  },
  avatarItem: {
    marginRight: 16,
    marginBottom: -24,
  },
  avatarImage: {
    width: 84,
    height: 106,
  },
  avatarImage114: {
    width: 114,
    height: 143,
  },
  avatarBoxImageTopA: {
    width: 114,
    height: 140,
    marginRight: 16,
    marginTop: -30,
  },
  ImgPostCommunity: {
    width: 200,
    height: 315,
    resizeMode: 'contain',
  },
  boxInfo: {
    flex: 1,
    paddingVertical: 15,
  },
  nameItem: {
    fontWeight: '600',
    fontSize: 16,
    marginBottom: 4,
    color: 'rgba(255, 255, 255, 0.87)',
    fontFamily: 'Montserrat',
  },
  nameItemBlack16: {
    fontWeight: '600',
    fontSize: 16,
    marginBottom: 4,
    color: '#000000',
    fontFamily: 'Montserrat',
  },
  nameItemBlack14: {
    fontWeight: '600',
    fontSize: 14,
    marginBottom: 4,
    color: '#000000',
    fontFamily: 'Montserrat',
  },
  textSize16: {
    color: '#ffffff',
    fontSize: 16,
    fontFamily: 'Montserrat',
  },
  textSize18BoldWhite: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'Montserrat',
  },
  dateTime: {
    color: '#ffffff',
    fontSize: 16,
    paddingTop: 14,
    fontFamily: 'Montserrat',
  },
  dateTimeToday: {
    color: '#F78B73',
    fontSize: 16,
    paddingTop: 14,
    fontFamily: 'Montserrat',
  },
  dateTimeFuture: {
    color: '#F78B73',
    fontSize: 16,
    paddingTop: 14,
    fontFamily: 'Montserrat',
  },
  Row: {
    flexDirection: 'row',
  },
  RowWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  columnContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'stretch', // thêm thuộc tính này
  },
  RowAlignItems: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  RowCenterBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  RowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  RowBetweendEnd: {
    flexDirection: 'row',
    alignContent: 'space-around',
    justifyContent: 'space-between',
  },
  actionItem: {
    marginRight: 16,
    fontSize: 12,
    fontFamily: 'Montserrat',
  },
  fontSize12Grray: {
    marginRight: 16,
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.87)',
    fontFamily: 'Montserrat',
  },
  fontSize14Grray: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.4)',
    fontFamily: 'Montserrat',
  },
  width68: {
    width: 68,
    paddingLeft: 10,
    fontFamily: 'Montserrat',
  },
  width60: {
    width: 60,
    paddingLeft: 25,
  },
  width40: {
    width: 40,
    paddingLeft: 20,
  },
  width120: {
    width: 120,
    paddingLeft: 10,
    fontFamily: 'Montserrat',
  },
  width80p: {
    width: '80%',
  },
  width70p: {
    width: '70%',
  },
  width20p: {
    width: '20%',
  },
  width30p: {
    width: '30%',
  },
  width40p: {
    width: '40%',
  },
  colorWhite: {
    color: '#FFFFFF',
    fontFamily: 'Montserrat',
  },
  textAlign: {
    textAlign: 'justify',
  },
  colorGrray: {
    color: '#9E9E9E',
    fontFamily: 'Montserrat',
  },
  colorBlack: {
    color: 'rgba(0, 0, 0, 1)',
    fontWeight: '500',
    fontFamily: 'Montserrat',
  },
  textBlack: {
    color: '#000000',
    fontWeight: '500',
    fontFamily: 'Montserrat',
  },
  colorBlue: {
    color: '#366AF0',
    fontWeight: '500',
    fontFamily: 'Montserrat',
  },
  colorGreen: {
    color: 'green',
    fontWeight: '500',
    fontFamily: 'Montserrat',
  },
  colorOrange: {
    color: '#F78B73',
    fontWeight: '500',
    fontFamily: 'Montserrat',
  },
  colorRed: {
    color: '#FF2F2F',
    fontWeight: '500',
    fontFamily: 'Montserrat',
  },
  fonsize10White: {
    fontSize: 10,
    color: '#FFFFFF',
    fontFamily: 'Montserrat',
  },
  fonsize12White: {
    fontSize: 12,
    color: '#FFFFFF',
    fontFamily: 'Montserrat',
  },
  fonsize14White: {
    fontSize: 14,
    lineHeight: 18,
    color: '#FFFFFF',
    fontFamily: 'Montserrat',
  },
  fonsize16White: {
    fontSize: 16,
    color: '#FFFFFF',
    fontFamily: 'Montserrat',
  },
  fonsize24White: {
    fontSize: 24,
    color: '#FFFFFF',
    fontFamily: 'Montserrat',
    fontWeight: '600',
  },
  fonsize20White: {
    fontSize: 20,
    color: '#FFFFFF',
    fontFamily: 'Montserrat',
    fontWeight: '600',
  },
  fonsize32White: {
    fontSize: 32,
    color: '#FFFFFF',
  },
  fontsize48: {
    fontSize: 48,
  },
  imageItem: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  status: {
    color: '#000000',
    fontSize: 14,
    marginBottom: 10,
    textAlign: 'center',
    fontFamily: 'Montserrat',
  },
  titleBox: {
    color: '#F78B73',
    fontWeight: '600',
    fontSize: 16,
    marginBottom: 16,
    fontFamily: 'Montserrat',
  },
  //
  alignItems: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  progress: {
    marginVertical: 5,
    height: 9,
    borderRadius: 10,
    padding: 2,
    paddingHorizontal: 4,
  },
  boxProgress: {
    marginVertical: 12,
  },
  fontSize12: {
    fontSize: 12,
    fontFamily: 'Montserrat',
  },
  fontSize24: {
    fontSize: 24,
    fontFamily: 'Montserrat',
  },
  fontSize10: {
    fontSize: 10,
    fontFamily: 'Montserrat',
  },
  fontSize6: {
    fontSize: 6,
    fontFamily: 'Montserrat',
  },
  iconSize8Mgr5: {
    width: 8,
    height: 8,
    marginRight: 5,
    resizeMode: 'contain',
  },
  iconSize12Mgr5: {
    width: 12,
    height: 12,
    marginRight: 5,
    resizeMode: 'contain',
  },
  iconSize16Mgr5: {
    width: 16,
    height: 16,
    marginRight: 5,
    resizeMode: 'contain',
  },
  iconSize16: {
    width: 16,
    height: 16,
    resizeMode: 'contain',
  },
  iconSize20: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  iconSize24: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  iconBack24: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
    marginRight: 10,
  },
  iconSize12: {
    width: 12,
    height: 16,
    resizeMode: 'contain',
  },
  iconSize10: {
    width: 10,
    height: 17,
    resizeMode: 'contain',
  },
  //
  scrollView: {
    marginBottom: 16,
    flex: 1,
  },
  //
  tabTitle: {
    color: '#ffffff',
    fontFamily: 'Montserrat',
    fontWeight: '600',
  },
  textTitle24Black: {
    fontWeight: '600',
    fontSize: 24,
    color: '#000000',
    fontFamily: 'Montserrat',
  },
  textTitle18Black: {
    fontWeight: '600',
    fontSize: 18,
    color: '#000000',
    fontFamily: 'Montserrat',
  },
  TabView: {
    backgroundColor: 'transparent',
    width: '100%',
    height: '100%',
    flex: 1,
    position: 'absolute',
    top: 0,
  },
  tabMenu: {
    backgroundColor: 'transparent',
    fontFamily: 'Montserrat',
    fontWeight: '600',
  },
  indicatorSelected: {
    backgroundColor: '#F68B73',
    height: 2,
    width: Platform.OS === 'ios' ? 94 : 76,
    left: 18,
  },
  tabItemDefault: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    height: 2,
    width: Platform.OS === 'ios' ? 94 : 76,
    position: 'absolute',
    bottom: -12,
  },
  tabItemSelected: {
    backgroundColor: '#F68B73',
    width: '100%',
    height: 2,
    zIndex: 3,
    position: 'relative',
    marginTop: 10,
  },
  BgTransparent: {
    backgroundColor: 'transparent',
    position: 'absolute',
    top:
      height >= 700
        ? Platform.OS === 'ios'
          ? 30
          : 10
        : Platform.OS === 'ios'
        ? 15
        : 0,
    zIndex: 9,
    width: '80%',
    paddingVertical: 12,
    paddingHorizontal: 18,
    marginTop: 10,
  },
  textTitleTabDefault: {
    color: 'rgba(255, 255, 255, 0.4)',
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    fontSize: 16,
  },
  textTitleTabSelected: {
    color: '#F68B73',
  },
  //
  detailUserBooking: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    // padding: 12,
    // paddingRight: 0,
    marginTop: 30,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  flexBoxWhite: {
    flex: 1,
    backgroundColor: '#F2F2F2',
  },

  listFlatList: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  itemCarousel: {
    backgroundColor: '#FFFFFF',
    marginLeft: 12,
    padding: 12,
    borderRadius: 10,
    flex: 1,
  },
  boxWhiteRadius: {
    backgroundColor: '#FFFFFF',
    padding: 12,
    borderRadius: 10,
    flex: 1,
  },
  boxGrayRadius10: {
    backgroundColor: '#F2F2F2',
    padding: 12,
    borderRadius: 10,
  },
  boxWhiteRadius40: {
    backgroundColor: '#FFFFFF',
    padding: 32,
    borderRadius: 40,
  },
  titleFlatList: {
    fontSize: 18,
  },
  carousel: {
    marginTop: 16,
  },
  hidden: {
    display: 'none',
  },
  overflow: {
    overflow: 'hidden',
  },
  datePickerButton: {
    padding: 10,
    backgroundColor: '#ccc',
    borderRadius: 5,
    marginTop: 10,
  },
  btnTimeBooking: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    textAlign: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  btnDone: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: 16,
    fontSize: 18,
    fontWeight: '600',
    color: '#F78B73',
    fontFamily: 'Montserrat',
    marginTop: 50,
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    padding: 18,
  },
  borderTopDashed: {
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: 'rgba(0, 0, 0, 0.2)',
    paddingHorizontal: 20,
    paddingVertical: 12,
    marginHorizontal: -20,
    marginBottom: -15,
  },
  borderBottom: {
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.4)',
  },

  borderBottomOrange: {
    borderBottomColor: '#F78B73',
    borderBottomWidth: 4,
  },
  borderBottomWhite: {
    borderBottomColor: '#FFF',
    borderBottomWidth: 4,
  },

  //
  LaunchStyle: {
    flex: 1,
    backgroundColor: colors.lightBlack,
    paddingHorizontal: 18,
    paddingVertical: 50,
    paddingTop: 100,
  },
  visualImage: {
    width: 250,
    height: 370,
    resizeMode: 'contain',
    alignItems: 'center',
  },
  BoxButtonNext: {
    position: 'absolute',
    bottom: 50,
    right: 18,
    zIndex: 9,
  },
  LaunchPagination: {
    position: 'absolute',
    bottom: 60,
    left: 18,
    zIndex: 3,
  },
  buttonNext: {
    backgroundColor: '#F78B73',
    minWidth: 120,
    borderRadius: 56,
    paddingLeft: 16,
    paddingVertical: 10,
    fontFamily: 'Montserrat',
    fontWeight: '600',
    fontSize: 14,
  },
  IconAbs: {
    position: 'absolute',
    right: 10,
    top: 8,
  },
  modalComment: {
    flex: 1,
    marginTop: 'auto',
    backgroundColor: '#F2F2F2',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  modalTransparent: {
    flex: 1,
    maxHeight: '34%',
    backgroundColor: 'transparent',
  },
  closeModal: {
    width: 54,
    height: 4,
    borderRadius: 4,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  userAvatarComment: {
    position: 'absolute',
    top: 2,
    left: 0,
  },
  boxUserComment: {
    paddingLeft: 46,
  },
  myAvatar: {
    position: 'absolute',
    left: 10,
    top: 10,
  },
  btnMicro: {
    position: 'absolute',
    right: 40,
    top: 14,
  },
  btnCamera: {
    position: 'absolute',
    right: 10,
    top: 14,
  },
  btnSend: {
    backgroundColor: '#F78B73',
    borderRadius: 100,
    height: 46,
    width: 46,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{rotate: '-30deg'}],
  },
  transformX3: {
    transform: [{translateX: 3}],
  },
  inputTheme2: {
    height: 50,
    paddingLeft: 50,
    paddingRight: 70,
    borderWidth: 0,
    borderRadius: 36,
    backgroundColor: '#f2f2f2',
  },
  boxFormComment: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  btnTheme2: {
    backgroundColor: '#A9B0F5',
    height: 50,
    borderRadius: 100,
    paddingRight: 18,
    flexDirection: 'row',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 18,
    bottom: 18,
    zIndex: 5,
  },
  spacer: {
    paddingBottom: 20,
    backgroundColor: '#FFF',
  },

  todayTextStyle: {
    color: '#000',
    textAlign: 'center',
    borderRadius: 14,
    fontWeight: 'bold',
    backgroundColor: 'transparent',
  },
  selectedDayTextStyle: {
    color: '#FFF',
    textAlign: 'center',
    borderRadius: 14,
    fontWeight: 'bold',
    backgroundColor: '#F68B73',
  },
  tooltip: {
    position: 'absolute',
    right: 5,
    top: -5,
    fontSize: 20,
  },
  emptyDate: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  opacity0: {
    opacity: 0.1,
  },
  ImageBackgroundHand: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.lightBlack,
  },
  IconStarBg: {
    position: 'absolute',
    bottom: 0,
    right: 100,
    height: 26,
    resizeMode: 'contain',
  },
  IconHand: {
    resizeMode: 'contain',
    height: 120,
  },
  IconUniverse: {
    resizeMode: 'contain',
    height: 42,
  },
  ImageItem: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
  },
  TouchabItem: {
    paddingBottom: 100,
    marginHorizontal: -15,
  },
  ImageLineIcon: {
    resizeMode: 'contain',
    height: 38,
  },
  BoxImageScrollCard: {
    transform: [{translateY: -60}],
    position: 'relative',
    zIndex: -1,
  },
  ImageScrollCard: {
    resizeMode: 'contain',
    height: 38,
  },
});
