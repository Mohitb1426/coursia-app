import { Text, TouchableOpacity } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import styles from './styles';
import { QUIZ_CONSTANTS } from '../../../../utilities/constants/QuizConstants';
import { ColorTheme } from '../../../../common/AppStyles';

function ChooseAnswerComponent(props) {
  const reducerQuizResultQuesSheet = useSelector((state) => state.reducerQuizResultQuesSheet);
  const {
    showOverTime,
  } = reducerQuizResultQuesSheet;
  const {
    questionNumber, status, onPress, isOverTime,
  } = props;
  let questionContainerStyle;
  if (status === QUIZ_CONSTANTS.UNATTEMPTED) {
    // eslint-disable-next-line no-nested-ternary
    questionContainerStyle = !showOverTime ? styles.unattemptedQuestionStyle
      : isOverTime ? styles.unattemptedQuestionStyle
        : [styles.unattemptedQuestionStyle, { backgroundColor: ColorTheme.grey }];
  } else if (status === QUIZ_CONSTANTS.UNATTEMPTED_REVIEW) {
    // eslint-disable-next-line no-nested-ternary
    questionContainerStyle = !showOverTime ? styles.markedAsReviewQuestionStyle
      : isOverTime ? styles.markedAsReviewQuestionStyle
        : [styles.markedAsReviewQuestionStyle, { backgroundColor: ColorTheme.grey }];
  } else {
    // eslint-disable-next-line no-nested-ternary
    questionContainerStyle = !showOverTime ? styles.attemptedQuestionStyle
      : isOverTime ? styles.attemptedQuestionStyle
        : [styles.attemptedQuestionStyle, { backgroundColor: ColorTheme.grey }];
  }
  return (
    <TouchableOpacity
      style={[styles.touchableStyle,
        questionContainerStyle,
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          styles.textStyle,
          status === 0
            ? { color: ColorTheme.ADDITIONAL_DETAILS_COLOR }
            : { color: ColorTheme.WHITE },
        ]}
      >
        {questionNumber}
      </Text>
    </TouchableOpacity>
  );
}

ChooseAnswerComponent.propTypes = {
  questionNumber: PropTypes.any,
  status: PropTypes.any,
  onPress: PropTypes.func,
  isOverTime: PropTypes.bool,
};

export default ChooseAnswerComponent;
