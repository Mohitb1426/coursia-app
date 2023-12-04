import { StyleSheet } from 'react-native';
import { ColorTheme } from '../../../../common/AppStyles';
import { vh, vw } from '../../../../common/Dimensions';
import Fonts from '../../../../common/Fonts';

const styles = (AppTheme) => StyleSheet.create({
  attemptedStyle: {
    marginLeft: 15,
  },
  buttonContainer: {
    alignItems: 'center',
    elevation: 4,
    flexDirection: 'row',
    height: vh(60),
    justifyContent: 'space-around',
    shadowColor: ColorTheme.GREY_BG,
    zIndex: 10,
  },
  buttonStyleMenu: {
    borderColor: ColorTheme.GREEN_BG,
    borderRadius: 6,
    height: vh(40),
    width: vw(156),
  },
  clockImage: {
    height: vh(37),
    width: vh(37),
  },
  container: {
    backgroundColor: AppTheme.PRIMARY_BACKGROUND,
    flex: 1,
  },
  headerText: {
    color: ColorTheme.APPLE_BLACK,
    fontFamily: Fonts.INTER_REGULAR,
    fontSize: vh(18),
    fontStyle: 'normal',
    fontWeight: '500',
    left: vw(50),
  },
  imageContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  imageStyle: {
    height: vh(24),
    marginRight: vw(3),
    width: vw(24),
  },
  mainHeader: {
    height: vh(60),
    justifyContent: 'center',
    width: '100%',
  },
  marksSection: {
    alignItems: 'center',
    flexDirection: 'row',
    height: vh(70),
    justifyContent: 'center',
    paddingHorizontal: vh(15),
    width: '100%',
  },
  questionNoContainer: {
    alignItems: 'center',
    width: '10%',
  },
  questionNoSection: {
    alignItems: 'center',
    backgroundColor: ColorTheme.GREY_BACKGROUND,
    borderRadius: 13,
    height: 26,
    justifyContent: 'center',
    width: 26,
  },
  questionNoText: {
    color: ColorTheme.WHITE,
    fontFamily: Fonts.INTER_REGULAR,
    fontSize: vh(14),
  },
  screenContainer: {
    backgroundColor: ColorTheme.WHITE,
    flex: 1,
    paddingVertical: vh(10),
  },
  scrollViewContainerMenu: {
    flex: 1,
    marginVertical: vh(10),
  },
  sectionContainer: {
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  shadowStyle: {
    position: 'relative',
    width: '100%',
    zIndex: 999,
  },
  subContainer: {
    flex: 1,
    marginHorizontal: vh(15),
    overflow: 'hidden',
  },
  submitTextStyle: {
    // marginRight: vw(25),
  },
  textStyle: {
    color: AppTheme.TEXT_COLOR_HEADING_05,
    fontFamily: Fonts.INTER_REGULAR,
    fontSize: vh(10),
    fontWeight: '400',
  },
  timerContainer: {
    flexDirection: 'row',
    width: '35%',
  },
  timerText: {
    color: ColorTheme.NATIVE_LIGHT_GREY,
    fontSize: vh(16),
    fontWeight: '500',
    paddingLeft: vh(15),
  },
  viewInstructionsButtonTextStyle: {
    marginRight: vw(17),
  },
});

export default styles;
