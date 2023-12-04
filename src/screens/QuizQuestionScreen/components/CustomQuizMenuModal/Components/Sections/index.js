/* eslint-disable eqeqeq */
import { View, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import ComponentHeader from '../ComponentHeader';
import ChooseQuestionComponent from '../ChooseQuestionComponent';
import styles from './style';
import ComponentQuestionStatus from '../ComponentQuestionStatus';
import { QUIZ_CONSTANTS } from '../../../../constantsScreenQuizQuestion';
import { setSaveNextAndReview } from '../../../../actionQuizQuestion';

function Sections({
  data, options, userScreenTime,
}) {
  const [noOfQuestions, setNoOfQuestions] = useState({
    attempted: 0,
    unAttempted: 0,
    markAsReview_Attempted: 0,
    markAsReview_Unattempted: 0,
  });
  const dispatch = useDispatch();
  const quizInstructionState = useSelector((state) => state.reducerQuizInstructions);
  const { activeQuestionsData } = quizInstructionState;
  const { activeQuestionId } = activeQuestionsData;
  const { activeSectionId } = activeQuestionsData;
  const [attemptedPercentage, setAttemptedPercentage] = useState(0);
  const checkActiveSectionData = data?.section_id == activeSectionId;

  const renderData = ({ item }) => {
    return (
      <ChooseQuestionComponent
        questionNumber={item?.srno}
        status={item?.status}
        onPress={() => openQuestion(item)}
        active={checkActiveSectionData}
        remainingTime={item?.remaining_time}
        id={item?.id}
      />
    );
  };

  const openQuestion = (item) => {
    const previousQuestionData = data?.questions.filter((e) => activeQuestionId == e?.id);
    const checkNoOptions = options.length
      ? previousQuestionData[0]?.status : QUIZ_CONSTANTS.UNATTEMPTED;
    dispatch(setSaveNextAndReview({
      order: item?.srno.toString(),
      finalOptions: options,
      // screenTime: userScreenTime(),
      screenTime: userScreenTime,
      status: checkNoOptions,
    }));
  };

  const counter = () => {
    let counterOne = 0;
    let counterTwo = 0;
    let counterThree = 0;
    let counterFour = 0;
    setNoOfQuestions({
      attempted: 0,
      unAttempted: 0,
      markAsReview_Attempted: 0,
      markAsReview_Unattempted: 0,
    });
    data?.questions.forEach((item) => {
      if (item.status === QUIZ_CONSTANTS.UNATTEMPTED) {
        counterOne += 1;
      } else if (item?.status == QUIZ_CONSTANTS.UNATTEMPTED_REVIEW) {
        counterTwo += 1;
      } else if (item?.status == QUIZ_CONSTANTS.ATTEMPTED_REVIEW) {
        counterFour += 1;
      } else {
        counterThree += 1;
      }
    });
    setNoOfQuestions({
      attempted: counterThree,
      unAttempted: counterOne,
      markAsReview_Attempted: counterFour,
      markAsReview_Unattempted: counterTwo,
    });
    quizCompletedPercent(counterThree);
  };

  const quizCompletedPercent = (attempted) => {
    const percentage = (attempted / (data?.questions.length || 1)).toFixed(
      2,
    );
    setAttemptedPercentage(percentage);
  };

  useEffect(() => {
    counter();
  }, []);

  return (
    <View pointerEvents={checkActiveSectionData ? 'auto' : 'none'} style={[styles.mainContainer, checkActiveSectionData ? {} : styles.mainViewStyle]}>
      {data?.is_no_section !== 0 && (
        <ComponentHeader
          title={data?.title}
          active={data?.section_status}
          attemptedPercent={attemptedPercentage}
        />
      )}

      <ComponentQuestionStatus
        sectionStatus={data?.section_status}
        qnStatus={noOfQuestions}
      />

      <FlatList
        data={data?.questions?.slice()}
        renderItem={renderData}
        keyExtractor={(item) => item?.srno.toString()}
        numColumns={8}
      />
    </View>
  );
}

Sections.propTypes = {
  data: propTypes.any,
  options: propTypes.any,
  userScreenTime: propTypes.any,
};

export default Sections;
