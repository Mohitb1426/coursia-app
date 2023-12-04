import { StyleSheet } from 'react-native';
import { ColorTheme } from '../../common/AppStyles';
import Fonts from '../../common/Fonts';
import { vh, vw } from '../../common/Dimensions';

const styles = (AppTheme) => StyleSheet.create({
  bottomButtonContainer: {
    alignItems: 'center',
    flex: 0.25,
    justifyContent: 'center',
  },
  buttonStyle: {
    borderRadius: 6,
    height: vh(48),
    marginBottom: vh(8),
    marginTop: vh(10),
    width: '100%',
  },
  containerStyle: {
    flex: 1,
  },
  correctBorderStyle: {
    backgroundColor: ColorTheme.AZURE_WEB_COLOR,
    borderColor: ColorTheme.VISTA_BLUE,
    borderWidth: 1,
  },
  correctImageStyle: {
    height: vh(22),
    width: vh(22),
  },
  customFontStyle: {
    color: AppTheme.TEXT_COLOR_HEADING_02,
    fontWeight: 'bold',
  },
  feedbackButtonStyle: {
    alignSelf: 'center',
    borderColor: ColorTheme.GREY_LIGHT_DIVIDER,
    borderRadius: vw(15),
    borderWidth: vw(1),
    color: ColorTheme.GREY_LIGHT_TEXT,
    fontSize: vw(16),
    padding: vw(15),
  },
  gestureRecognizerStyle: {
    flex: 1,
  },
  imageContainer: {
    alignItems: 'flex-end',
    flex: 1,
    justifyContent: 'center',
  },
  imageStyle: (imgHeight, height, width, imgWidth) => {
    return {
      height:
        Number(imgHeight) > height
          ? '100%'
          : Number(imgHeight === '' ? '50' : imgHeight),
      width:
        Number(imgWidth) > width ? '100%' : Number(imgWidth === '' ? '50' : imgWidth),
      resizeMode: 'contain',
    };
  },
  innerScrollViewContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: vh(15),
  },
  mainScrollViewStyle: {
    flexGrow: 1,
  },
  marksDescription: {
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    marginLeft: -28,
  },
  marksDescriptionContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: vh(5),
  },
  marksDescriptionImage: {
    height: vh(15),
    // marginRight: vh(5),
    width: vh(15),
  },
  marksForCorrectTextStyle: {
    color: ColorTheme.GREEN_BG,
    paddingLeft: 3,
  },
  marksForIncorrectTextStyle: {
    color: ColorTheme.RACE_PINK,
    paddingLeft: 3,
  },
  marksSection: {
    alignItems: 'center',
    flexDirection: 'row',
    height: vh(70),
    width: '100%',
  },
  mcqMainContainer: {
    paddingVertical: vh(20),
  },
  mcqOptionsContainer: {
    borderColor: AppTheme.DIVIDER_COLOR_01,
    borderRadius: 5,
    borderWidth: 1,
    flex: 1,
    justifyContent: 'center',
    marginVertical: vh(7),
    minHeight: vh(42),
    width: '100%',
  },
  mcqOptionsText: {
    color: AppTheme.TEXT_COLOR_HEADING_05,
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
  modalStyle: {
    justifyContent: 'center',
    marginHorizontal: vw(20),
  },
  questionImageStyle: {
    // width: vh(20),
    // height: vh(20),
  },
  questionNoContainer: {
    alignItems: 'center',
    marginRight: '2%',
  },
  questionNoSection: {
    alignItems: 'center',
    backgroundColor: ColorTheme.NATIVE_LIGHT_GREY,
    borderRadius: 14,
    height: 28,
    justifyContent: 'center',
    width: 28,
  },
  questionNoText: {
    color: ColorTheme.WHITE,
    fontFamily: Fonts.INTER_REGULAR,
    fontSize: vh(14),
  },
  questionText: {
    color: ColorTheme.black,
    fontFamily: Fonts.INTER_REGULAR,
    fontSize: vh(16),
    fontWeight: '500',
    lineHeight: 24,
  },
  questionTextContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    // justifyContent: 'flex-start',
  },
  screenContainer: {
    backgroundColor: AppTheme.PRIMARY_BACKGROUND,
    flex: 1,
    paddingVertical: vh(10),
  },
  scrollViewContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  serialNoText: {
    color: AppTheme.TEXT_COLOR_HEADING_05,
    fontFamily: Fonts.INTER_REGULAR,
    fontSize: vh(18),
    fontWeight: '500',
    paddingHorizontal: vh(5),
  },
  solutionTextStyle: {
    color: ColorTheme.GREEN_BG,
    fontFamily: Fonts.INTER_REGULAR,
    fontSize: vh(18),
    fontWeight: '500',
    lineHeight: 24,
  },
  textContainerStyle: {
    alignItems: 'flex-start',
    flex: 0.9,
  },
  unattemptedWeightAgeTextStyle: {
    color: ColorTheme.GREY_BG,
    paddingLeft: 3,
  },
  wrongBorderStyle: {
    backgroundColor: ColorTheme.AMOUR,
    borderColor: ColorTheme.RUBY,
    borderWidth: 1,
  },
});

export default styles;
