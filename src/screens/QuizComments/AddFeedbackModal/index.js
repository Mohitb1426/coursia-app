import {
  TouchableOpacity, View, TextInput, Text, ActivityIndicator, Keyboard,
} from 'react-native';
import React, { useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { useNavigation } from '@react-navigation/native';
import styles from './style';

import { LocalizationContext } from '../../../common/LocalizationProvider';
import {
  createQuizComment,
  setFromQuizResult,
  setPostCommentData,
  setShowFeedbackModal,
} from '../../QuizResultAnswerScreen/actionQuizResultAnswer';
import { validateEmail } from '../../../utilities';
import { Routes } from '../../../routes/Routes';
import useThemedStyles from '../../../hooks/useThemedStyles';
import { ThemeContext } from '../../../common/ThemeProvider';

function AddFeedbackModal({
  questionId, moduleId, courseId, section_id, serial_no, group_id,
}) {
  const Styles = useThemedStyles(styles);
  const { appTheme } = useContext(ThemeContext);
  const [textValue, setTextValue] = useState('');
  const [subjectValue, setSubjectValue] = useState('');
  const { translations } = useContext(LocalizationContext);
  const reducerQuizResultAnswer = useSelector((state) => state.reducerQuizResultAnswer);
  const { isPostingQuizComment } = reducerQuizResultAnswer;
  const dispatch = useDispatch();
  const profileState = useSelector((state) => state.reducerUpdateProfile);
  const { customerData } = profileState;
  const navigation = useNavigation();

  const postComment = () => {
    Keyboard.dismiss();
    dispatch(
      setPostCommentData({
        questionId,
        moduleId,
        courseId,
        subjectValue,
        textValue,
        serial_no,
        section_id,
        group_id,
      }),
    );
    if (
      customerData?.firstName === ''
      || customerData?.lastName === ''
      || customerData?.email === ''
      || !validateEmail(customerData?.email)
    ) {
      dispatch(setShowFeedbackModal(false));
      dispatch(setFromQuizResult(true));
      navigation.navigate(Routes.SCREEN_UPDATE_PROFILE);
    } else {
      dispatch(createQuizComment());
    }
  };

  return (
    <View style={Styles.containerStyle}>
      <TextInput
        style={Styles.textInpoutSubjectStyle}
        placeholderTextColor={appTheme.TEXT_COLOR_HEADING}
        value={subjectValue}
        maxLength={200}
        placeholder={translations.QUIZ_SUBJECT}
        autoFocus
        onChangeText={(item) => {
          setSubjectValue(item);
        }}
      />
      <TextInput
        placeholderTextColor={appTheme.TEXT_COLOR_HEADING}
        style={Styles.textInputStyle}
        value={textValue}
        placeholder={translations.TYPE_YOUR_DOUBT}
        multiline
        onChangeText={(item) => {
          setTextValue(item);
        }}
      />
      {!isPostingQuizComment ? (
        <TouchableOpacity
          onPress={() => {
            if (subjectValue.length > 0 && textValue.length > 0) {
              postComment();
            }
          }}
        >
          <View
            style={
              subjectValue.length > 0 && textValue.length > 0
                ? Styles.submitContainer
                : Styles.submitContainerDisabled
            }
          >
            <Text style={Styles.submitButtonStyle}>{translations.SUBMIT}</Text>
          </View>
        </TouchableOpacity>
      ) : (
        <ActivityIndicator size="large" color="#000" />
      )}
    </View>
  );
}

AddFeedbackModal.propTypes = {
  questionId: PropTypes.any,
  moduleId: PropTypes.any,
  courseId: PropTypes.any,
  serial_no: PropTypes.any,
  section_id: PropTypes.any,
  group_id: PropTypes.any,
};
export default AddFeedbackModal;
