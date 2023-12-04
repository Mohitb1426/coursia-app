import { StyleSheet } from 'react-native';
import { ColorTheme } from '../../common/AppStyles';
import { screenHeightDefault, vh, vw } from '../../common/Dimensions';
import Fonts from '../../common/Fonts';

const styles = (AppTheme) => StyleSheet.create({
  Button1Style: {
    borderRadius: 6,
    // borderWidth: 0,
    // elevation: 3,
    marginBottom: vh(40),
    marginTop: vh(20),
    minHeight: vh(50),
    width: vw(329),
  },
  Button2Style: {
    marginBottom: vh(33),
    marginTop: vh(10),
  },
  CustomTextInput_container: {
    backgroundColor: ColorTheme.LIGHT_BACKGROUND,
    height: vh(60),
    width: vw(291),
  },
  PromotionalSection_Container: {
    marginTop: vh(20),
    width: vw(291),
  },
  PromotionalSection_SubContainer: {
    flexDirection: 'row',
    marginTop: 4,
  },
  PromotionalSection_mainContainer: {
    width: vw(291),
  },
  andTextStyle: {
    color: ColorTheme.PALATINATE_BLUE,
    fontFamily: Fonts.ROBOTO,
    fontSize: vw(12),
    fontWeight: '400',
    marginHorizontal: vw(4),
  },
  bullet: {
    marginRight: vw(10),
    paddingTop: vh(2),
  },
  container: {
    flex: 1,
    height: screenHeightDefault,
  },
  firstTextStyle: {
    color: ColorTheme.DARK_GREY,
    fontFamily: Fonts.ROBOTO,
    fontSize: vw(12),
    fontWeight: '400',
    marginLeft: vw(5),
  },
  headerText: {
    alignSelf: 'center',
    color: ColorTheme.APPLE_BLACK,
    fontFamily: Fonts.INTER_SEMI_BOLD,
    fontSize: vw(24),
    marginTop: vh(30),
  },
  loginBoxContainer: {
    alignItems: 'center',
    backgroundColor: AppTheme.PRIMARY_BACKGROUND,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    flex: 0.4,
    // marginTop: vh(130),
  },
  mainContainer: {
    flex: 1,
  },
  mobileTextStyle: {
    color: ColorTheme.APPLE_BLACK,
    fontFamily: Fonts.INTER_REGULAR,
    fontSize: 12,
    fontWeight: '400',
    justifyContent: 'flex-end',
  },
  orText: {
    color: ColorTheme.GREY_TEXT,
    fontFamily: Fonts.OPEN_SANS_REGULAR,
    fontSize: vh(14),
    fontWeight: 'normal',
    marginVertical: vh(40),
    textAlign: 'center',
  },
  passWgTxt: {
    color: ColorTheme.GREEN_BG,
    fontFamily: Fonts.INTER_REGULAR,
    fontSize: vw(12),
  },
  scrollView: {
    // flexGrow: 1,
    height: screenHeightDefault,
  },
  studentLogoContainer: {
    alignItems: 'center',
    flex: 0.6,
    justifyContent: 'center',
  },
  subContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  subHeadingText: {
    alignSelf: 'center',
    color: ColorTheme.APPLE_BLACK,
    fontFamily: Fonts.INTER_SEMI_BOLD,
    fontSize: vw(22),
    marginTop: vh(5),
  },
  termsPolicyContainer: {
    flexDirection: 'row',
    marginBottom: vh(20),
  },
  termsText: {
    color: ColorTheme.PALATINATE_BLUE,
    fontFamily: Fonts.ROBOTO,
    fontSize: vw(12),
    fontWeight: '400',
  },
  tickBoxStyle: {
    height: vh(20),
    width: vw(15),
  },
  welcomeTextStyle: {
    color: AppTheme.TEXT_COLOR_HEADING_05,
    fontFamily: Fonts.ROBOTO,
    fontSize: vh(24),
    fontWeight: 'bold',
    marginBottom: vh(20),
    marginTop: vh(40),
  },
});

export default styles;
