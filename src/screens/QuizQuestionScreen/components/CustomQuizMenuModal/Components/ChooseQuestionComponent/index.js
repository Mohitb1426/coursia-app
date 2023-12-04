import { Text, TouchableOpacity } from 'react-native';
import React from 'react';
import propTypes from 'prop-types';
import { useSelector } from 'react-redux';
import styles from './style';
import { QUIZ_CONSTANTS } from '../../../../constantsScreenQuizQuestion';
import { ColorTheme } from '../../../../../../common/AppStyles';

function ChooseQuestionComponent({
  questionNumber,
  status,
  onPress,
  active,
  remainingTime,
  id,
}) {
  // eslint-disable-next-line operator-linebreak
  const questionContainerStyle =
    // eslint-disable-next-line no-nested-ternary
    status === QUIZ_CONSTANTS.UNATTEMPTED
      ? styles.unattemptedQuestionStyle
      : status === QUIZ_CONSTANTS.UNATTEMPTED_REVIEW || status === QUIZ_CONSTANTS.ATTEMPTED_REVIEW
        ? styles.markedAsReviewQuestionStyle
        : styles.attemptedQuestionStyle;

  const quizUnitState = useSelector((state) => state.reducerQuizUnit);
  const quizInstructionsState = useSelector((state) => state.reducerQuizInstructions);
  const { isSectionTimerEnable, isQuizTimerZero } = quizUnitState;
  const { activeQuestionsData } = quizInstructionsState;
  const { activeQuestionId } = activeQuestionsData;

  // eslint-disable-next-line consistent-return
  const checkButtonEnable = () => {
    if (isQuizTimerZero) {
      return false;
    }
    if (isSectionTimerEnable) {
      return false;
    }

    if (active && remainingTime <= 3) {
      return true;
    }
  };
  return (
    <TouchableOpacity
      style={[
        styles.touchableStyle,
        questionContainerStyle,
        // eslint-disable-next-line eqeqeq
        activeQuestionId == id
          ? styles.activeQuestionStyle
          : {},
      ]}
      onPress={onPress}
      disabled={checkButtonEnable()}
    >
      <Text
        style={[
          styles.textStyle,
          status === 0
            ? { color: ColorTheme.ADDITIONAL_DETAILS_COLOR }
            : { color: ColorTheme.WHITE },
          activeQuestionId === id
            ? { color: ColorTheme.ADDITIONAL_DETAILS_COLOR }
            : {},
        ]}
      >
        {questionNumber}
      </Text>
    </TouchableOpacity>
  );
}

ChooseQuestionComponent.propTypes = {
  questionNumber: propTypes.any,
  status: propTypes.any,
  onPress: propTypes.func,
  active: propTypes.any,
  remainingTime: propTypes.any,
  id: propTypes.any,
};

export default ChooseQuestionComponent;
