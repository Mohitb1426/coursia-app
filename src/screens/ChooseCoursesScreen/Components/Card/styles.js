import { StyleSheet } from 'react-native';
import { ColorTheme, ColorThemeLight } from '../../../../common/AppStyles';
import { vh, vw } from '../../../../common/Dimensions';
import Fonts from '../../../../common/Fonts';

const styles = (AppTheme) => StyleSheet.create({
  bgImage: {
    borderTopLeftRadius: vh(10),
    borderTopRightRadius: vh(10),
    flex: 1,
    overflow: 'hidden',
  },
  buttonText: {
    alignItems: 'center',
    backgroundColor: ColorTheme.GREY_BACKGROUND_LIGHT,
    borderRadius: vw(3),
    justifyContent: 'center',
    marginRight: vw(2),
    width: vw(31),
  },
  container: {
    backgroundColor: AppTheme.PRIMARY_BACKGROUND_01,
    borderRadius: vh(7),
    elevation: 4,
    margin: vh(5),
    marginLeft: vw(15),
    minHeight: vh(268),
    width: vw(190),
  },
  containerView: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: vw(5),
    width: '100%',
  },
  courseMapped: {
    color: ColorThemeLight.TEXT_COLOR_CONTENT,
    fontSize: vh(12),
    fontWeight: '400',
    paddingHorizontal: vw(8),
    paddingTop: vh(4),
  },
  ctaButton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
    marginHorizontal: 5,
    paddingTop: 10,
  },
  dotStyle: {
    alignSelf: 'center',
    backgroundColor: ColorTheme.OLD_SILVER,
    borderRadius: 1,
    height: 2,
    marginRight: vw(7),
    width: 2,
  },
  image: {
    borderTopEndRadius: vh(7),
    borderTopStartRadius: vh(7),
    height: vh(120),
    overflow: 'hidden',
    width: vw(190),
  },
  langContainer: { flexDirection: 'row' },
  learnersText: {
    color: AppTheme.TEXT_COLOR_HEADING_05,
    fontSize: vh(15),
    fontWeight: '500',
    paddingHorizontal: vw(8),
    paddingTop: vh(4),
    textAlign: 'left',
  },
  spacer: {
    flex: 1,
  },
  starImageStyle: {
    alignSelf: 'center',
    height: vw(10),
    marginStart: 5,
    width: vw(10),
  },
  subText: {
    color: ColorTheme.BACKGROUND_QUATERNARY_EMPHASIS,
    fontFamily: Fonts.ROBOTO,
    fontSize: vw(11),
    fontWeight: '400',
  },
  subTextContainer: {
    flexDirection: 'row',
    paddingHorizontal: vw(8),
    paddingTop: 5,
  },
  subTextContainerTwo: {
    flexDirection: 'row',
    paddingHorizontal: vh(8),
    paddingTop: vh(8),
  },
  textStyle: {
    fontSize: vh(8),
  },
  touchableWithoutFeedback_Style: {
    flex: 0.8,
  },
  tryFreeText: {
    color: ColorTheme.WHITE,
    fontFamily: Fonts.ROBOTO,
    fontSize: vh(14),
    fontWeight: '500',
    justifyContent: 'flex-end',
  },
  verticalSpacer: {
    flex: 1,
  },
  viewButton: {
    alignItems: 'center',
    backgroundColor: ColorTheme.GREEN_BG,
    borderRadius: 6,
    height: vh(32),
    justifyContent: 'center',
    padding: 2,
    width: '99%',
  },
});

export default styles;
