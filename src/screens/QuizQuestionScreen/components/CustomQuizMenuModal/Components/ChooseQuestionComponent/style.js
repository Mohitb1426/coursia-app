import { StyleSheet } from 'react-native';
import { ColorTheme } from '../../../../../../common/AppStyles';
import { vh } from '../../../../../../common/Dimensions';
import Fonts from '../../../../../../common/Fonts';

const styles = StyleSheet.create({
  activeQuestionStyle: {
    borderColor: ColorTheme.BLUE_58,
    borderWidth: 3,
  },
  attemptedQuestionStyle: {
    backgroundColor: ColorTheme.BLUE_60,
  },
  markedAsReviewQuestionStyle: {
    backgroundColor: ColorTheme.ORANGE,
  },
  textStyle: {
    alignSelf: 'center',
    color: ColorTheme.WHITE,
    fontFamily: Fonts.INTER_REGULAR,
    fontSize: vh(14),
    fontWeight: '500',
  },
  touchableStyle: {
    alignItems: 'center',
    backgroundColor: ColorTheme.BLUE_60,
    borderRadius: vh(25),
    height: vh(36),
    justifyContent: 'center',
    marginRight: vh(8),
    marginVertical: vh(3),
    width: vh(36),
  },
  unattemptedQuestionStyle: {
    backgroundColor: ColorTheme.WHITE,
    borderColor: ColorTheme.ADDITIONAL_DETAILS_COLOR,
    borderWidth: 0.5,
  },
});

export default styles;
