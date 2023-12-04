import { StyleSheet, Dimensions } from 'react-native';
import { ColorTheme } from '../../common/AppStyles';
import { vh, vw } from '../../common/Dimensions';
import Fonts from '../../common/Fonts';

const { width } = Dimensions.get('window');

const styles = (AppTheme) => StyleSheet.create({
  CustomTextInput_container: {
    backgroundColor: ColorTheme.WHITE,
    borderBottomWidth: 0.5,
    height: vh(60),
    marginBottom: vh(5),
    marginTop: vh(5),
    width: vw(291),
  },
  Load_more: {
    alignSelf: 'center',
    height: vh(15),
    width: vh(18),
  },
  PrivacySection_Button: {
    height: vh(30),
    justifyContent: 'center',
  },
  PrivacySection_Image: {
    backgroundColor: ColorTheme.VERY_LIGHT_GREY,
    height: vh(20),
    position: 'absolute',
    right: 10,
    tintColor: ColorTheme.GREEN_COLOR,
    width: vw(20),
  },
  Table_SubContainer: {
    flexDirection: 'row',
  },
  Table_container: {
    backgroundColor: ColorTheme.YELLOW_COLOR,
    flexDirection: 'row',
  },
  TermsSection_Button: {
    height: vh(30),
    justifyContent: 'center',
  },
  TermsSection_WebView: {
    height: '100%',
    width: '100%',
  },
  TermsSection_mainContainer: {
    flex: 1,
  },
  Video_Container1: {
    backgroundColor: ColorTheme.BLACK_13,
  },
  Video_Container2: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: ColorTheme.GREEN,
    justifyContent: 'center',
  },
  Video_Container2_Sub: {
    backgroundColor: ColorTheme.LIGHT_GREY,
    borderRadius: 100 / 2,
    height: 100,
    width: 100,
  },
  Video_mainContainer: {
    flex: 0.4,
    marginHorizontal: '2%',
    paddingVertical: '2%',
  },
  backButton: {
    alignItems: 'center',
    height: vw(40),
    justifyContent: 'center',
    left: 0,
    position: 'absolute',
    width: vw(50),
  },
  buttonContainer: {
    backgroundColor: ColorTheme.WHITE,
    elevation: 10,
    flex: 0.15,
    justifyContent: 'center',
  },
  buttonSubContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerStyle: {
    flexGrow: 1,
  },
  colFirst: {
    alignItems: 'center',
    flexDirection: 'row',
    flex: 0.85,
  },
  colSecond: {
    alignItems: 'flex-end',
    flex: 0.15,
    justifyContent: 'center',
  },
  containerBgColor: {
    backgroundColor: ColorTheme.WHITE,
  },
  containerStyle: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    margin: vh(5),
  },
  customButtonCustomStyle: {
    alignItems: 'center',
    borderRadius: 5,
    fontWeight: vh(16),
    height: vh(48),
    justifyContent: 'center',
    width: vw(340),
  },
  flatListContainer: {
    // flex: 0.3,
  },
  headerText: {
    color: ColorTheme.APPLE_BLACK,
    fontSize: vh(15),
    fontWeight: '600',
  },
  headerView: {
    alignItems: 'center',
    flexDirection: 'row',
    height: vh(60),
    justifyContent: 'center',
    width: '100%',
  },
  header_backButton: {
    height: vh(15),
    width: vw(20),
  },
  imageStyle: {
    height: '100%', width: '100%',
  },
  leftStyle: {
    flexGrow: 1,
    left: width * 0.09,
  },
  listContainer: {
    justifyContent: 'center',
    marginVertical: '2%',
  },
  lockContainer: {
    alignItems: 'center',
    alignSelf: 'center',
    elevation: 10,
    justifyContent: 'center',
    position: 'absolute',
  },
  lockSubContainer: {
    backgroundColor: ColorTheme.LIGHT_BACKGROUND,
    borderRadius: 100 / 2,
    height: 100,
    width: 100,
  },
  mainContainer: {
    backgroundColor: AppTheme.PRIMARY_BACKGROUND_10,
    flex: 1,
  },
  notViewStyle: {
    color: ColorTheme.VER_LIGHT_GREY,
    fontFamily: Fonts.INTER_MEDIUM,
    fontSize: vh(11),
    textAlign: 'center',
  },
  renderItemView: {
    alignSelf: 'flex-end',
    height: vh(130),
    paddingHorizontal: vh(10),
    width: width * 0.8,
  },
  rightStyle: {
    flexGrow: 1, right: width * 0.09,
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    margin: '2%',
  },
  scrollViewStyle: {
    opacity: 0.3,
  },
  titleStyle: {
    color: AppTheme.TEXT_COLOR_HEADING_05,
    fontFamily: Fonts.INTER_REGULAR,
    fontSize: vh(13),
    marginHorizontal: '5%',
  },
  unitContainer: { alignItems: 'center', flex: 1, marginTop: '2%' },
  unitListContainer: {
    margin: '1%',
    padding: '1%',
  },
  unitSubContainer: {
    backgroundColor: AppTheme.PRIMARY_BACKGROUND_01,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    elevation: 15,
    marginTop: vh(5),
    width: width - 50,
  },
  viewStyle: {
    color: ColorTheme.GREEN_BG,
    fontFamily: Fonts.INTER_MEDIUM,
    fontSize: vh(11),
    textAlign: 'center',
  },
});

export default styles;
