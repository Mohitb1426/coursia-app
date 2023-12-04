import { StyleSheet } from 'react-native';
import { ColorTheme, ColorThemeLight } from '../../common/AppStyles';
import { vh, vw } from '../../common/Dimensions';
import Fonts from '../../common/Fonts';

const styles = StyleSheet.create({
  TermsSectionButton: {
    alignItems: 'center',
    height: vh(30),
    justifyContent: 'center',
  },
  TermsSectionImage: {
    height: vh(25),
    position: 'absolute',
    right: vw(10),
    width: vw(20),
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
    flex: 0.95,
  },
  backButton: {
    alignItems: 'center',
    height: vw(40),
    justifyContent: 'center',
    left: 0,
    position: 'absolute',
    width: vw(50),
  },
  cardContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: vh(20),
  },
  cardText: {
    color: ColorTheme.LIGHT_BLUE_GREY_COMBO,
    fontFamily: Fonts.INTER_REGULAR,
    fontSize: vh(13),
  },

  containerStyle: {
    width: vw(340),
  },

  crossButtonContainer: {
    flex: 0.05,
    justifyContent: 'center',
  },

  customButtonStyle: {
    borderRadius: 8,
    borderWidth: 0.5,
    height: vh(48),
    marginTop: vh(40),
    width: vw(344),
  },
  dropDownContainerStyle: {
    borderRadius: 0,
    borderWidth: 0.5,
    height: vh(150),
    width: vw(340),
  },
  dropdownStyle: {
    backgroundColor: ColorTheme.secondary,
    borderBottomColor: ColorTheme.LIGHTGREY_SUCCESSTEXT,
    borderBottomWidth: 0.8,
    borderColor: ColorTheme.BLACK_1,
    borderRadius: 0,
    marginVertical: vh(2),
    maxWidth: vw(340),
  },

  dropdown_PlaceholderStyle: {
    color: ColorTheme.GREY_BG,
    fontSize: vw(15),
    fontWeight: '500',
  },
  dropdown_TextStyle: {
    color: ColorTheme.APPLE_BLACK,
    fontFamily: Fonts.INTER_REGULAR,
    fontSize: vw(16),
  },
  formContainer: {
    padding: vh(10),
  },
  headerText: {
    color: ColorTheme.APPLE_BLACK,
    fontFamily: Fonts.INTER_REGULAR,
    fontSize: vh(18),
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: vh(29),
  },
  headerView: {
    alignItems: 'center',
    flexDirection: 'row',
    height: vh(60),
    justifyContent: 'center',
    width: '100%',
  },
  header_backButton: {
    height: '50%',
    width: '50%',
  },
  imageCloseContainer: {
    height: vh(12),
    position: 'absolute',
    right: 10,
    width: vh(12),
  },
  imageSuccessContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  infoHeading: {
    color: ColorThemeLight.TEXT_COLOR_HEADING,
    fontSize: vw(22),
    fontWeight: '600',
    marginStart: vw(3),
    marginTop: vh(10),
  },
  innerContainer: {
    justifyContent: 'center',
    paddingTop: vh(15),
  },
  keyboardContainer: { flex: 1 },
  mainContainer: {
    backgroundColor: ColorThemeLight.PRIMARY_BACKGROUND,
    flex: 1,
  },
  mainImageContainer: { flex: 1 },
  modalCustomStyle: { justifyContent: 'center' },
  scrollView: {
    backgroundColor: ColorTheme.WHITE,
    flex: 1,
  },
  subContainer: { flex: 0.075, justifyContent: 'center' },
  successTextContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: vh(20),
  },
  successTextStyle: {
    color: ColorTheme.GREEN_BG,
    fontFamily: Fonts.INTER_SEMI_BOLD,
    fontSize: vh(18),
  },
  textContainer: {
    justifyContent: 'center',
    marginHorizontal: vh(20),
  },
  textHeadingStyle: {
    color: ColorTheme.APPLE_BLACK,
    fontFamily: Fonts.INTER_REGULAR,
    fontSize: vw(12),
    marginTop: vh(10),
  },
  textPaymentFail: {
    color: ColorTheme.ERROR_RED,
    fontFamily: Fonts.INTER_SEMI_BOLD,
    fontSize: vh(18),
  },
  topTextStyle: {
    color: ColorTheme.placeholderColor,
    fontSize: vw(10),
    fontWeight: '400',
    marginStart: vw(20),
    marginTop: vh(10),
  },
});

export default styles;
