import { StyleSheet } from 'react-native';
import { ColorTheme, ColorThemeLight } from '../../../../common/AppStyles';
import { vh, vw } from '../../../../common/Dimensions';
import Fonts from '../../../../common/Fonts';

const styles = (AppTheme) => StyleSheet.create({
  bgImage: {
    borderRadius: vh(8),
    flex: 1,
    overflow: 'hidden',
  },
  buttonText: {
    alignItems: 'center',
    backgroundColor: ColorTheme.GREY_BACKGROUND_LIGHT,
    borderRadius: vw(3),
    height: vw(14),
    justifyContent: 'center',
    marginRight: vw(2),
    width: vw(31),
  },
  container: {
    backgroundColor: AppTheme.PRIMARY_BACKGROUND_04,
    borderRadius: vh(6),
    elevation: 4,
    flex: 1,
    flexDirection: 'row',
    height: vh(165),
    marginTop: vh(15),
    // margin: vh(5),
    // marginLeft: vw(15),
  },
  containerView: {
    flex: 0.5,
    paddingHorizontal: vw(5),
  },
  containerView1: {
    flexDirection: 'column',
    flex: 0.5,
    paddingStart: vw(8),
    paddingTop: vh(8),
  },
  courseMapped: {
    color: ColorThemeLight.TEXT_COLOR_CONTENT,
    fontSize: vh(13),
    fontWeight: '400',
    paddingHorizontal: vw(8),
    paddingTop: vh(4),
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
    height: vh(109),
    overflow: 'hidden',
    width: '100%',
  },
  langContainer: { flexDirection: 'row' },
  learnersText: {
    color: AppTheme.TEXT_COLOR_HEADING_05,
    fontSize: vh(15),
    fontWeight: '600',
    lineHeight: vh(23),
    paddingHorizontal: vw(8),
    paddingTop: vh(8),
    textAlign: 'auto',
  },
  spacer: {
    flex: 1,
  },
  starImageStyle: {
    alignSelf: 'center',
    height: vw(10),
    marginStart: vw(3),
    width: vw(10),
  },
  subText: {
    color: ColorTheme.BACKGROUND_QUATERNARY_EMPHASIS,
    fontFamily: Fonts.ROBOTO,
    fontSize: vw(11),
    fontWeight: '400',
    paddingStart: vw(8),
    paddingTop: vh(5),
  },
  subTextContainer: {
    flexDirection: 'row',
  },
  subTextContainerTwo: {
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
    paddingHorizontal: vh(1),
  },
  subTextDate: {
    color: ColorTheme.BACKGROUND_QUATERNARY_EMPHASIS,
    fontFamily: Fonts.ROBOTO,
    fontSize: vw(11),
    fontWeight: '400',
    paddingStart: vw(8),
    paddingTop: vh(5),
  },
  subTextRating: {
    color: ColorTheme.BACKGROUND_QUATERNARY_EMPHASIS,
    fontFamily: Fonts.ROBOTO,
    fontSize: vw(11),
    fontWeight: '400',
    paddingStart: vw(10),
  },
  textStyle: {
    fontSize: vh(8),
  },
  touchableContainer: {
    // backgroundColor:'red'
  },

  touchableWithoutFeedback_Style: {},
  verticalSpacer: {
    flex: 1,
  },
  viewButton: {
    alignSelf: 'baseline',
    backgroundColor: ColorTheme.GREEN_BG,
    borderRadius: 6,
    height: vh(40),
    justifyContent: 'center',
    marginHorizontal: vw(8),
    marginTop: vh(15),
  },
  viewButtonText: {
    color: ColorTheme.WHITE,
    fontSize: vh(14),
    fontWeight: '500',
    paddingHorizontal: vw(15),
  },
});

export default styles;
