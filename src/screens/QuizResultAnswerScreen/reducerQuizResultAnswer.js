import {
  SET_QUIZ_ANSWER,
  GET_QUIZ_ANSWER,
  ERROR_QUIZ_ANSWER,
  CHANGE_LOADER,
  ERROR_QUIZ_BOOKMARK,
  SET_QUIZ_BOOKMARK,
  SHOW_INTRO_SCREEN,
  CREATE_COMMENT_QUIZ,
  SUCCESS_CREATE_COMMENT_QUIZ,
  ERROR_CREATE_COMMENT_QUIZ,
  GET_QUIZ_COMMENT,
  SUCCESS_GET_COMMENT_QUIZ,
  ERROR_GET_COMMENT_QUIZ,
  SET_COURSE_ID,
  SET_SHOW_FEEDBACK_CONFIRMATION_MODAL,
  SET_SHOW_FEEDBACK_MODAL,
  GET_COURSE_DETAILS,
  SET_COURSE_DETAILS,
  ERROR_GET_COURSE_DETAILS,
  CLEAR_COMMENT_QUIZ_DATA,
  SET_GROUP_ID,
  SET_POST_COMMENT_DATA,
  SET_FROM_QUIZ_ANSWERS,
} from './actionQuizResultAnswer';

const initialState = {
  courseId: [],
  quizAnswerData: [],
  commentQuizData: [],
  courseDetails: [],
  isPostingQuizComment: false,
  isLoading: false,
  errorData: '',
  showIntroScreen: true,
  showFeedbackScreen: false,
  showFeedbackConfirmationScreen: false,
  groupId: '',
  postCommentData: {},
  fromQuizResults: false,
};

const reducerQuizResultAnswer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_FROM_QUIZ_ANSWERS:
      return {
        ...state,
        fromQuizResults: payload,
      };
    case SET_POST_COMMENT_DATA:
      return {
        ...state,
        postCommentData: payload,
      };
    case SET_COURSE_ID:
      return {
        ...state,
        courseId: payload,
      };
    case SET_GROUP_ID:
      return {
        ...state,
        groupId: payload,
      };
    case CLEAR_COMMENT_QUIZ_DATA:
      return {
        ...state,
        commentQuizData: [],
      };
    case SET_SHOW_FEEDBACK_CONFIRMATION_MODAL:
      return {
        ...state,
        showFeedbackConfirmationScreen: payload,
      };
    case SET_SHOW_FEEDBACK_MODAL:
      return {
        ...state,
        showFeedbackScreen: payload,
      };
    case CREATE_COMMENT_QUIZ:
      return {
        ...state,
        isPostingQuizComment: true,
      };
    case SUCCESS_CREATE_COMMENT_QUIZ:
      return {
        ...state,
        isPostingQuizComment: false,
        showFeedbackConfirmationScreen: true,
        showFeedbackScreen: false,
      };
    case ERROR_CREATE_COMMENT_QUIZ:
      return {
        ...state,
        isPostingQuizComment: false,
        errorData: payload,
      };
    case GET_QUIZ_COMMENT:
      return {
        ...state,
        commentQuizData: [],
      };
    case SUCCESS_GET_COMMENT_QUIZ:
      return {
        ...state,
        commentQuizData: payload,
      };
    case ERROR_GET_COMMENT_QUIZ:
      return {
        ...state,
        commentQuizData: [],
        errorData: payload,
      };
    case GET_QUIZ_ANSWER:
      return {
        ...state,
        isLoading: true,
      };
    case SET_QUIZ_ANSWER:
      return {
        ...state,
        isLoading: false,
        quizAnswerData: payload,
      };
    case ERROR_QUIZ_ANSWER:
      return {
        ...state,
        isLoading: false,
        errorData: payload,
      };
    case CHANGE_LOADER:
    case ERROR_QUIZ_BOOKMARK:
      return {
        ...state,
        isLoading: payload,
      };
    case SET_QUIZ_BOOKMARK:
      return {
        ...state,
        isLoading: true,
      };
    case SHOW_INTRO_SCREEN:
      return {
        ...state,
        showIntroScreen: payload,
      };
    case GET_COURSE_DETAILS:
      return {
        ...state,
        isLoading: true,
      };
    case SET_COURSE_DETAILS:
      return {
        ...state,
        isLoading: false,
        courseDetails: payload,
      };
    case ERROR_GET_COURSE_DETAILS:
      return {
        ...state,
        isLoading: false,
        errorData: payload,
        courseDetails: [],
      };
    default:
      return state;
  }
};
export default reducerQuizResultAnswer;
