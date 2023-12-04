/* eslint-disable react-native/sort-styles */
import { StyleSheet } from 'react-native';
import { ColorTheme, ColorThemeLight } from '../../common/AppStyles';
import {
  screenHeightDefault, screenWidthDefault, vh, vw,
} from '../../common/Dimensions';
import Fonts from '../../common/Fonts';

const styles = (AppTheme) => StyleSheet.create({
  andTextStyle: {
    color: ColorTheme.PALATINATE_BLUE,
    fontSize: vw(12),
    fontWeight: '400',
    marginHorizontal: vw(4),
  },
  container: {
    flex: 1,
  },
  customButtonCustomStyle: {
    borderWidth: 0,
    elevation: 3,
    marginBottom: vh(33),
    marginTop: vh(90),
    width: vw(295),
  },
  editContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },

  editText: {
    alignSelf: 'center',
    color: ColorTheme.blue02,
    fontSize: vw(14),
    marginTop: vh(10),
    textAlign: 'center',
  },

  headerText: {
    alignSelf: 'center',
    color: AppTheme.TEXT_COLOR_HEADING_05,
    fontFamily: Fonts.ROBOTO,
    fontSize: vw(24),
    fontWeight: '700',
    marginTop: vh(60),
  },

  imageBackground: {
    flex: 1,
    height: screenHeightDefault,
    width: screenWidthDefault,
  },
  imageStyle: {
    position: 'absolute',
    left: (screenWidthDefault - 250) / 2,
    right: (screenWidthDefault - 250) / 2,
    top: 20,
  },
  innerCard: {
    backgroundColor: AppTheme.PRIMARY_BACKGROUND,
    borderTopLeftRadius: vh(20),
    borderTopRightRadius: vh(20),
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  innerContainer: {
    flexDirection: 'column',
    // height: '100%',
    height: screenHeightDefault,
  },
  otpInputSection: {
    alignItems: 'center',
    marginTop: vh(0),
  },
  otpItem: {
    backgroundColor: AppTheme.CARD_BACKGROUND_01,
    borderColor: AppTheme.CARD_BACKGROUND_01,
    borderRadius: vh(6),
    color: AppTheme.TEXT_COLOR_HEADING_05,
    height: vh(55),
    width: vw(45),
  },
  otpItemHigh: {
    backgroundColor: AppTheme.CARD_BACKGROUND_01,
    borderRadius: vh(6),
    color: ColorThemeLight.TEXT_COLOR_CONTENT,
    height: vh(55),
    width: vw(45),
  },
  otpView: { alignSelf: 'center', height: 100, width: '60%' },
  policyText: {
    alignSelf: 'center',
    color: ColorTheme.blue02,
    fontSize: vw(12),
    fontWeight: '400',
    marginBottom: vh(10),
    textAlign: 'center',
  },
  resendOTP: {
    alignSelf: 'center',
    color: ColorThemeLight.PRIMARY_COLOR,
    fontSize: vw(15),
    fontWeight: '500',
    marginTop: vh(10),
    textAlign: 'center',
  },
  scrollView: {
    // flex: 1,
    // backgroundColor: 'red',
  },
  secondsText: {
    alignSelf: 'center',
    color: AppTheme.TEXT_COLOR_HEADING_05,
    fontSize: vw(32),
    height: vh(50),
    fontWeight: '400',
    marginTop: vh(10),
    textAlign: 'center',
  },
  subHeadingText: {
    alignSelf: 'center',
    color: ColorThemeLight.BACKGROUND_QUATERNARY_EMPHASIS,
    fontFamily: Fonts.ROBOTO,
    fontSize: vw(16),
    marginTop: vh(10),
    textAlign: 'center',
  },
  subHeadingTextWithImage: {
    alignSelf: 'center',
    color: ColorThemeLight.BACKGROUND_QUATERNARY_EMPHASIS,
    fontSize: vw(13),
    marginTop: vh(10),
    textAlign: 'center',
  },
  termsContainer: {
    alignContent: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: 50,
    width: '100%',
  },
  termsPolicyContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: vh(35),
  },
  termsText: {
    color: ColorTheme.PALATINATE_BLUE,
    fontFamily: Fonts.ROBOTO,
    fontSize: vw(12),
    fontWeight: '400',
  },
});

export default styles;
