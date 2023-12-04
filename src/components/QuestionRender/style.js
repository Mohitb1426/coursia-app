import { StyleSheet } from 'react-native';
import { ColorTheme } from '../../common/AppStyles';
import { vh, vw } from '../../common/Dimensions';
import Fonts from '../../common/Fonts';

const styles = StyleSheet.create({
  bottomButtonContainer: {
    alignItems: 'center',
    flex: 0.25,
    justifyContent: 'center',
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
  buttonStyle: {
    borderRadius: 6,
    height: vh(48),
    marginBottom: vh(8),
    marginTop: vh(10),
    width: '100%',
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
    backgroundColor: ColorTheme.WHITE,
    flex: 1,
  },
  gestureRecognizerStyle: {
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
  marksDescription: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '90%',
  },
  marksDescriptionContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: vh(5),
  },
  marksDescriptionImage: {
    height: vh(15),
    marginRight: vh(5),
    width: vh(15),
  },
  marksSection: {
    alignItems: 'center',
    flexDirection: 'row',
    height: vh(70),
    justifyContent: 'center',
    paddingHorizontal: vh(15),
    width: '100%',
  },
  mcqMainContainer: {
    paddingVertical: vh(20),
  },
  mcqOptionsContainer: {
    borderColor: ColorTheme.LIGHT_GREY_BORDER,
    borderRadius: 5,
    borderWidth: 1,
    flex: 1,
    justifyContent: 'center',
    marginVertical: vh(7),
    minHeight: vh(42),
    width: '100%',
  },
  mcqOptionsText: {
    color: ColorTheme.APPLE_BLACK,
    fontFamily: Fonts.INTER_REGULAR,
    fontSize: vh(18),
    fontWeight: '500',
    paddingHorizontal: vh(15),
  },
  mcqTextContainerStyle: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  mcqTextImageContainerStyle: {
    marginHorizontal: '2%',
  },
  mcqTextImageStyle: {
    height: 50,
    width: 50,
  },
  questionImageStyle: {
    // width: 20,
    // height: 20,
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
  questionText: {
    color: ColorTheme.APPLE_BLACK,
    fontFamily: Fonts.INTER_REGULAR,
    fontSize: vh(16),
    lineHeight: 24,
  },
  questionTextContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    // justifyContent: 'flex-start',
  },
  screenContainer: {
    backgroundColor: ColorTheme.WHITE,
    flex: 1,
    paddingVertical: vh(10),
  },
  scrollViewContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: vh(15),
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
  },
  submitTextStyle: {
    marginRight: vw(25),
  },
  textStyle: {
    color: ColorTheme.APPLE_BLACK,
    fontFamily: Fonts.INTER_REGULAR,
    fontSize: vh(12),
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
