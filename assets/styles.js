/**
 * @format style
 */
import {StyleSheet, StatusBar, Platform} from 'react-native';
import {colors} from './constants';

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
  paddingLeft18: {
    paddingLeft: 18,
  },
  paddingHorizontal9: {
    paddingHorizontal: 9,
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
    width: '100%',
    height: '100%',
    top: -5,
    position: 'absolute',
  },
  bodyScreenBlack: {
    flex: 1,
    backgroundColor: colors.lightBlack,
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
  textGrray: {
    color: 'rgba(255, 255, 255, 0.4)',
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
  widthFull: {
    width: '100%',
    height: '100%',
    flex: 1,
  },
  widthFullHW: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    flex: 1,
  },
  paddingBox: {
    zIndex: 1,
    paddingHorizontal: 12,
    position: 'relative',
  },
  paddingTop50: {
    paddingTop: 50,
  },
  paddingTop50Ios15Adroid: {
    paddingTop: Platform.OS === 'ios' ? 50 : 15,
  },
  paddingTop80: {
    paddingTop: Platform.OS === 'ios' ? 80 : 60,
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
  alignCenter: {
    alignItems: 'center',
    fontFamily: 'Montserrat',
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
    marginBottom: 10,
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
  buttonTmp: {
    width: '100%',
    height: 54,
    backgroundColor: '#F78B73',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 'auto',
    marginBottom: 50,
  },
  buttonText: {
    color: colors.defaultBlack,
    fontSize: 18,
    fontWeight: 600,
    fontFamily: 'Montserrat',
  },
  buttonClose: {
    color: colors.white,
    fontSize: 24,
    fontWeight: 600,
    fontFamily: 'Montserrat',
  },
  avatarLogin: {
    paddingTop: Platform.OS === 'ios' ? 50 : 15,
    backgroundColor: '#A9B0F5',
    height: 200,
    position: 'relative',
    marginBottom: 100,
  },
  avatarProfile: {
    paddingTop: Platform.OS === 'ios' ? 50 : 15,
    backgroundColor: '#A9B0F5',
    position: 'relative',
    paddingBottom: 20,
    marginBottom: 30,
  },
  ImgIconBag: {
    position: 'absolute',
    bottom: -80,
    height: 200,
    width: '100%',
  },
  IconStarBg: {
    position: 'absolute',
    bottom: 0,
    right: 100,
    height: 26,
    resizeMode: 'contain',
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
    fontWeight: 600,
    fontSize: 18,
    marginVertical: 8,
    color: '#000',
    fontFamily: 'Montserrat',
  },
  positionAbsolute: {
    position: 'absolute',
    bottom: -50,
  },
  positionAbsoluteTop: {
    position: 'absolute',
    // top: 0,
    zIndex: 2,
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
    fontWeight: 600,
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
  marginLeft12: {
    marginLeft: 12,
  },
  marginLeft5: {
    marginLeft: 5,
  },
  marginLeft10: {
    marginLeft: 10,
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
  marginTop20: {
    marginTop: 20,
  },
  marginTop15: {
    marginTop: 15,
  },
  marginBottom10: {
    marginBottom: 10,
  },
  marginBottom15: {
    marginBottom: 15,
  },
  marginBottom20: {
    marginBottom: 20,
  },
  marginBottom30: {
    marginBottom: 30,
  },
  marginHorizontalA9: {
    marginHorizontal: -9,
  },
  marginHorizontal18: {
    marginHorizontal: 18,
  },
  marginVertical18: {
    marginVertical: 18,
  },
  marginVertical10: {
    marginVertical: 10,
  },
  marginTopA50: {
    marginTop: -50,
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
  fontBold: {
    fontWeight: 600,
    fontFamily: 'Montserrat',
  },
  fontMontserrat: {
    fontFamily: 'Montserrat',
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
    padding: 16,
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
    width: 226,
    height: 600,
    maxHeight: 400,
    resizeMode: 'contain',
  },
  boxInfo: {
    flex: 1,
    paddingVertical: 15,
  },
  nameItem: {
    fontWeight: 600,
    fontSize: 16,
    marginBottom: 4,
    color: 'rgba(255, 255, 255, 0.87)',
    fontFamily: 'Montserrat',
  },
  nameItemBlack16: {
    fontWeight: 600,
    fontSize: 16,
    marginBottom: 4,
    color: '#000000',
    fontFamily: 'Montserrat',
  },
  nameItemBlack14: {
    fontWeight: 600,
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
    fontWeight: 600,
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
    paddingLeft: 25,
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
  colorWhite: {
    color: '#FFFFFF',
    fontFamily: 'Montserrat',
  },
  colorBlue: {
    color: '#366AF0',
    fontFamily: 'Montserrat',
  },
  colorOrange: {
    color: '#F78B73',
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
  fonsize24White: {
    fontSize: 24,
    color: '#FFFFFF',
    fontFamily: 'Montserrat',
    fontWeight: 600,
  },
  fonsize20White: {
    fontSize: 20,
    color: '#FFFFFF',
    fontFamily: 'Montserrat',
    fontWeight: 600,
  },
  image: {},
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
    fontWeight: 600,
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
    fontWeight: 600,
  },
  textTitle24Black: {
    fontWeight: 600,
    fontSize: 24,
    color: '#000000',
    fontFamily: 'Montserrat',
  },
  textTitle18Black: {
    fontWeight: 600,
    fontSize: 18,
    color: '#000000',
    fontFamily: 'Montserrat',
  },
  TabView: {
    backgroundColor: 'transparent',
    paddingVertical: 18,
    width: '100%',
    height: '100%',
    flex: 1,
    position: 'absolute',
    top: 0,
  },
  tabMenu: {
    backgroundColor: 'transparent',
    fontFamily: 'Montserrat',
    fontWeight: 600,
  },
  indicatorSelected: {
    backgroundColor: '#F68B73',
    height: 2,
    width: Platform.OS === 'ios' ? 90 : 72,
    left: 20,
  },
  BgTransparent: {
    backgroundColor: 'transparent',
    position: 'absolute',
    top: Platform.OS === 'ios' ? 40 : 25,
    zIndex: 9,
    width: '80%',
    paddingVertical: 12,
    paddingHorizontal: 18,
    marginTop: 10,
  },
  textTitleTabDefault: {
    position: 'absolute',
    left: 0,
    height: Platform.OS === 'ios' ? 24 : 25,
    color: 'rgba(255, 255, 255, 0.4)',
    fontFamily: 'Montserrat',
    fontWeight: 600,
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
    marginRight: 12,
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
    padding: 16,
  },
  btnDone: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: 16,
    fontSize: 18,
    fontWeight: 600,
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
    zIndex: 3,
  },
  LaunchPagination: {
    position: 'absolute',
    bottom: 50,
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
    fontWeight: 600,
    fontSize: 14,
  },
  IconAbs: {
    position: 'absolute',
    right: 15,
    top: 9,
  },
});
