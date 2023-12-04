import React, { useContext, useEffect } from 'react';
import { View, Text } from 'react-native';
import propTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { ColorTheme } from '../../common/AppStyles';
import Fonts from '../../common/Fonts';
import CustomButton from '../../components/CustomButton';
import { Card } from './components/Card';
import { get_register_data } from '../../database/migrations';
import { LocalizationContext } from '../../common/LocalizationProvider';
import styles from './style';
import { ComponentHeader } from '../../components';
import {
  setActiveQuestions,
  setTotalActiveSection, setActiveQuestionsData, setShowOptionsResume, setNumberOfSections,
} from './actionQuizInstructions';
import useBackButton from '../../hooks/useBackButton';
import {
  pauseActiveQuiz, setIsQuizActive, setIsSelectOption, setTimerInDefaultState, setUserScreenTime,
} from '../QuizQuestionScreen/actionQuizQuestion';
import { Routes } from '../../routes/Routes';
import { getScreenTime } from '../../utilities/commonFunction/getScreenTime';
import useThemedStyles from '../../hooks/useThemedStyles';

export function QuizInstructionsScreen({ check = false, navigation }) {
  const Styles = useThemedStyles(styles);
  const { translations } = useContext(LocalizationContext);
  const dispatch = useDispatch();
  const quizUnitState = useSelector((state) => state.reducerQuizUnit);
  const {
    quizInfo, title, isResumeQuiz, resumeData,
  } = quizUnitState;
  const {
    lastQuizSectionId,
    lastQuizQuestionId,
    lastQuizQuestionTime,
    lastQuizSectionRemainingTime,
  } = resumeData;

  const navigateBack = () => {
    if (isResumeQuiz) {
      dispatch(pauseActiveQuiz(lastQuizQuestionTime));
    }
    navigation.goBack();
    return true;
  };

  useEffect(() => {
    if (isResumeQuiz) {
      get_register_data().then((data) => {
        const sectionOrderId = [...new Set(data.map((item) => item.sectionOrder))];
        const totalSectionId = [...new Set(data.map((item) => item.sectionId))];
        const newArray = [];
        dispatch(setNumberOfSections(sectionOrderId.length));
        for (let i = 0; i < sectionOrderId.length; i += 1) {
          const object = data.filter((obj) => obj.sectionId === String(lastQuizSectionId));
          const qnsArray = [];
          object.forEach((item) => {
            const qns = {
              sectionId: item.sectionId,
              questionName: item.questionName,
              answers: JSON.parse(item.options),
              questionOrder: item.questionOrder,
              questionId: item.questionId,
              questionTime: item.questionTime,
              questionNegativeMarks: item.questionNegativeMarks,
              questionMarks: item.questionMarks,
              questionUnattemptedMarks: item.questionUnattemptedMarks,
              questionGroupId: item.questionGroupId,
              selectedOption: item.selectedOption,
            };
            qnsArray.push(qns);
          });
          newArray.push({
            sectionOrder: sectionOrderId[i],
            questions: qnsArray,
            isDone: false,
            sectionId: object[0]?.sectionId,
            sectionTime: object[0]?.sectionTime,
          });
        }
        dispatch(setActiveQuestions(newArray));
        let currentQuestion = [];
        let activeSection;
        newArray.forEach((item) => {
          // eslint-disable-next-line max-len
          currentQuestion = item.questions.find((obj) => String(obj?.questionGroupId) === String(lastQuizQuestionId));
          if (String(item?.sectionId) === String(currentQuestion.sectionId)) {
            activeSection = item;
          }
        });
        const optionsArray = [];
        activeSection?.questions.forEach((item) => {
          if (item?.selectedOption) {
            let answerId = item?.selectedOption?.split(',');
            answerId = answerId.map((e) => Number(e));
            const element = {
              activeQuestionOrder: Number(item?.questionOrder),
              options: answerId,
            };
            optionsArray.push(element);
          } else {
            const element = {
              activeQuestionOrder: Number(item?.questionOrder),
              options: [],
            };
            optionsArray.push(element);
          }
        });
        dispatch(setShowOptionsResume(true));
        dispatch(setIsSelectOption(optionsArray));
        dispatch(setTotalActiveSection(totalSectionId));
        dispatch(setActiveQuestionsData({
          activeQuestions: activeSection?.questions,
          activeSection,
          activeSectionTime: lastQuizSectionRemainingTime,
          activeQuestionSectionTime: lastQuizQuestionTime,
          activeQuestionOrder: Number(currentQuestion?.questionOrder),
          activeQuestionId: currentQuestion?.questionId,
          activeQuestionTitle: currentQuestion?.questionName,
          activeQuestionOptions: currentQuestion?.answers,
          lastSectionQuestion:
          activeSection?.questions[Number(activeSection?.questions?.length) - 1],
          activeSectionId: activeSection?.sectionId,
          activeQuestionMarks: currentQuestion?.questionMarks,
          activeQuestionNegativeMarks: currentQuestion?.questionNegativeMarks,
          activeQuestionUnattemptedMarks: currentQuestion?.questionUnattemptedMarks,
          activeQuestionGroupId: currentQuestion?.questionGroupId,
        }));
      });
    } else {
      get_register_data().then((data) => {
        const sectionOrderId = [...new Set(data.map((item) => item.sectionOrder))];
        const totalSectionId = [...new Set(data.map((item) => item.sectionId))];
        const newArray = [];
        dispatch(setNumberOfSections(sectionOrderId.length));
        for (let i = 0; i < sectionOrderId.length; i += 1) {
          const object = data.filter((obj) => obj.sectionOrder === sectionOrderId[i]);
          const qnsArray = [];
          object.forEach((item) => {
            const qns = {
              questionName: item.questionName,
              answers: JSON.parse(item.options),
              questionOrder: item.questionOrder,
              questionId: item.questionId,
              questionTime: item.questionTime,
              questionNegativeMarks: item.questionNegativeMarks,
              questionMarks: item.questionMarks,
              questionUnattemptedMarks: item.questionUnattemptedMarks,
              questionGroupId: item.questionGroupId,
            };
            qnsArray.push(qns);
          });
          newArray.push({
            sectionOrder: sectionOrderId[i],
            questions: qnsArray,
            isDone: false,
            sectionId: object[0]?.sectionId,
            sectionTime: object[0]?.sectionTime,
          });
        }
        dispatch(setActiveQuestions(newArray));
        const activeSection = newArray.filter((e) => !e.isDone).sort((a, b) => {
          return a.sectionOrder - b.sectionOrder;
        });
        dispatch(setTotalActiveSection(totalSectionId));
        dispatch(setActiveQuestionsData({
          activeQuestions: activeSection[0]?.questions,
          activeSection: activeSection[0],
          activeSectionTime: activeSection[0]?.sectionTime,
          activeQuestionSectionTime: activeSection[0]?.questions[0]?.questionTime,
          activeQuestionOrder: Number(activeSection[0]?.questions[0]?.questionOrder),
          activeQuestionId: activeSection[0]?.questions[0]?.questionId,
          activeQuestionTitle: activeSection[0]?.questions[0]?.questionName,
          activeQuestionOptions: activeSection[0]?.questions[0]?.answers,
          lastSectionQuestion:
          activeSection[0]?.questions[Number(activeSection[0]?.questions?.length) - 1],
          activeSectionId: activeSection[0]?.sectionId,
          activeQuestionMarks: activeSection[0]?.questions[0]?.questionMarks,
          activeQuestionNegativeMarks: activeSection[0]?.questions[0]?.questionNegativeMarks,
          activeQuestionUnattemptedMarks: activeSection[0]?.questions[0]?.questionUnattemptedMarks,
          activeQuestionGroupId: activeSection[0]?.questions[0]?.questionGroupId,
        }));
      });
    }
  }, []);

  useBackButton(() => {
    navigateBack();
    return true;
  });
  return (
    <View style={Styles.container}>
      <ComponentHeader goBack={navigateBack} headerText={translations.BACK} />

      <View style={Styles.cardContainer}>
        <Card details={quizInfo} moduleTitle={title} />
      </View>

      <View style={Styles.instructionsContainer}>
        <View style={Styles.subContainer}>
          <Text style={Styles.headingTextStyle}>
            {translations.INSTRUCTION_HEADING}
          </Text>
        </View>
        <View style={Styles.textContainer}>
          <Text style={Styles.textStyle}>
            {translations.INSTRUCTIONS_TEXT_1}
          </Text>
          <Text style={Styles.textStyle}>
            {translations.INSTRUCTIONS_TEXT_2}
          </Text>
          <Text style={Styles.textStyle}>
            {translations.INSTRUCTIONS_TEXT_4}
          </Text>
          <Text style={Styles.textStyle}>
            {translations.INSTRUCTIONS_TEXT_5}
          </Text>
        </View>

        <View style={Styles.buttonContainer}>
          {!check ? (
            <CustomButton
              customStyle={Styles.buttonStyle}
              onButtonPress={() => {
                dispatch(setTimerInDefaultState());
                dispatch(setIsQuizActive(true));
                navigation.navigate(Routes.SCREEN_QUIZ_QUESTION_SCREEN);
                dispatch(setUserScreenTime(getScreenTime()));
              }}
              buttonText={translations.BEGIN}
              isDisabled={false}
              textColor={ColorTheme.WHITE}
              buttonColor={ColorTheme.GREEN_BG}
              fontFamily={Fonts.INTER_BOLD}
            />
          ) : null}
        </View>
      </View>
    </View>
  );
}

QuizInstructionsScreen.propTypes = {
  check: propTypes.bool,
  navigation: propTypes.any,
};
