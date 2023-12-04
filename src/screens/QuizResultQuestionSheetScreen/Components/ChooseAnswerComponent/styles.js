import { StyleSheet } from 'react-native';
import { ColorTheme } from '../../../../common/AppStyles';
import Fonts from '../../../../common/Fonts';
import { vh } from '../../../../common/Dimensions';

const styles = StyleSheet.create({
  attemptedQuestionStyle: {
    backgroundColor: ColorTheme.BLUE_60,
  },
  markedAsReviewQuestionStyle: {
    backgroundColor: ColorTheme.PINK,
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
    marginHorizontal: vh(5),
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
