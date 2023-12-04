import {
  View, Text, ScrollView, TouchableOpacity, ActivityIndicator, Image,
} from 'react-native';
import React, { useCallback, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles';
import { QuestionStatusContainer, AnswerSection, QuizInstructions } from './Components';
import { CustomModal } from '../../components';
import SvgIcon from '../../common/SvgIcon';
import { ColorTheme } from '../../common/AppStyles';
import { LocalizationContext } from '../../common/LocalizationProvider';
import {
  setQuizInstructionModal, getQuizQuestionSheet, setOverTimeValue, clearStateValue,
} from './actionQuizResultQuestionSheet';
import Loader from '../../components/Loader';
import Images from '../../common/Images';
import { QUIZ_RESULT_CONSTANT } from './constantsScreenQuizResultQuestion';
import { ThemeContext } from '../../common/ThemeProvider';
import useThemedStyles from '../../hooks/useThemedStyles';

export function QuizResultQuestionSheetScreen({ navigation, route }) {
  const Styles = useThemedStyles(styles);
  const { darkMode } = useContext(ThemeContext);
  const dispatch = useDispatch();
  const reducerQuizResultQuesSheet = useSelector((state) => state.reducerQuizResultQuesSheet);
  const quizUnitState = useSelector((state) => state.reducerQuizUnit);
  const { title, quizInfo } = quizUnitState;
  const {
    showInstructionModal, resultSheetData, isLoader, showOverTime,
  } = reducerQuizResultQuesSheet;
  const { QUIZ_TIME } = QUIZ_RESULT_CONSTANT;
  const { module_ID } = route.params;
  const { translations } = useContext(LocalizationContext);

  const openInstructionModal = useCallback(() => {
    dispatch(setQuizInstructionModal(true));
  }, [showInstructionModal]);

  const closeInstructionModal = useCallback(() => {
    dispatch(setQuizInstructionModal(false));
  }, [showInstructionModal]);

  useEffect(() => {
    dispatch(getQuizQuestionSheet(module_ID));
    return () => {
      dispatch(clearStateValue());
    };
  }, []);

  return (
    <View style={Styles.container}>
      <View style={Styles.headerView}>
        <TouchableOpacity
          style={Styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <SvgIcon.BackIcon color={darkMode ? ColorTheme.light01 : ColorTheme.black} />
        </TouchableOpacity>
        <Text style={Styles.headerText}>{translations.BACK}</Text>
      </View>
      <QuestionStatusContainer openQuizInstruction={openInstructionModal} />
      {resultSheetData === {} && resultSheetData === undefined && resultSheetData === null ? (
        <View style={Styles.loaderContainer}>
          <ActivityIndicator size="large" color={ColorTheme.OCEAN_GREEN} />
        </View>
      ) : (
        <View style={Styles.scrollViewContainer}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            nestedScrollEnabled
          >
            {resultSheetData.map((item) => (
              <AnswerSection navigation={navigation} data={item} componentId={module_ID} />
            ))}
            {resultSheetData[0]?.is_question_timer_enable !== QUIZ_TIME
              ? (
                <TouchableOpacity
                  style={Styles.bullet}
                  onPress={() => {
                    dispatch(setOverTimeValue());
                  }}
                >
                  <Image
                    source={
                      showOverTime
                        ? Images.LOGIN_CHECKBOX
                        : Images.BLANK_CHECKBOX
                    }
                    style={Styles.tickBoxStyle}
                    resizeMode="contain"
                  />
                  <Text style={Styles.checkboxTextStyle}>{translations.QUIZ_OVERTIME_ONLY}</Text>
                </TouchableOpacity>
              ) : null}
          </ScrollView>
        </View>
      )}
      {showInstructionModal && (
        <CustomModal
          visible={showInstructionModal}
          modalHeight="90%"
          alignBottom
          borderTopLeftRadius={0}
          borderTopRightRadius={0}
          animationIn="slideInUp"
        >
          <QuizInstructions
            closeInstructions={closeInstructionModal}
            details={quizInfo}
            title={title}
          />
        </CustomModal>
      )}
      <Loader show={isLoader} />
    </View>
  );
}

QuizResultQuestionSheetScreen.propTypes = {
  navigation: PropTypes.any,
  route: PropTypes.any,
};
