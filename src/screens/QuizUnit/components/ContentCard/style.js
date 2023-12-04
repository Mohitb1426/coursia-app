import { StyleSheet, Dimensions } from 'react-native';
import { ColorTheme } from '../../../../common/AppStyles';
import { vh, vw } from '../../../../common/Dimensions';
import Fonts from '../../../../common/Fonts';

const { width } = Dimensions.get('window');

const styles = (AppTheme) => StyleSheet.create({
  additionalDetails: {
    color: ColorTheme.ADDITIONAL_DETAILS_COLOR,
    fontFamily: Fonts.INTER_REGULAR,
    fontSize: vh(13),
    fontWeight: '500',
    height: vh(19),
  },
  belowContainer: {
    flex: 0.5,
    justifyContent: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginRight: vw(10),
  },
  imageStyle: {
    height: vh(14),
    marginRight: vw(3),
    width: vw(14),
  },
  imagesContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  imagesContainerResult: {
    flex: 0.55,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  lowerContainerStyle: {
    alignItems: 'center',
    backgroundColor: AppTheme.PRIMARY_BACKGROUND_10,
    flex: 0.3,
    flexDirection: 'row',
    paddingHorizontal: vw(10),
  },
  mainContainer: {
    backgroundColor: AppTheme.PRIMARY_BACKGROUND_01,
    borderColor: AppTheme.BOX_BORDER_GREY_01,
    borderRadius: 8,
    borderWidth: vh(1),
    flex: 1,
    height: vh(122),
    marginVertical: vh(15),
    overflow: 'hidden',
    width: width * 0.89,
  },
  playButtonContainer: {
    // flex: 0.1,
  },
  playButtonStyle: {
    height: vh(26),
    width: vw(26),
  },
  quizPlayImageContainer: {
    alignItems: 'flex-end',
  },
  quizStartContainer: {
    alignItems: 'flex-end',
    flex: 0.4,
    paddingHorizontal: vw(1),
  },
  quizTextContainer: {
    // alignItems: "flex-end",
    // backgroundColor: "yellow"
  },
  quizTextStyle: {
    color: ColorTheme.GREEN_BG,
    fontFamily: Fonts.INTER_REGULAR,
    fontSize: vh(14),
    fontWeight: '500',
    paddingLeft: vh(10),
    textDecorationLine: 'underline',
  },
  renderTextContainer: {
    flexDirection: 'row',
    flex: 0.65,
  },
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subjectName: {
    color: AppTheme.TEXT_COLOR_HEADING_05,
    fontFamily: Fonts.INTER_REGULAR,
    fontSize: vh(16),
    fontWeight: '700',
    marginBottom: vh(8),
    marginTop: vh(12),
  },
  titleContainerStyle: {
    flex: 1,
    justifyContent: 'space-between',
  },
  titleTextContainer: {
    // flex: 0.8,
  },
  upperContainer: {
    flex: 0.5,
    justifyContent: 'flex-end',
  },
  upperContainerStyle: {
    // backgroundColor: 'red',
    borderBottomColor: AppTheme.DIVIDER_COLOR_01,
    borderBottomWidth: 1,
    flex: 0.7,
    paddingHorizontal: vw(12),
  },
});

export default styles;
