import {
  GET_QUESTIONS_LIST,
  SET_QUESTIONS_LIST,
  ERROR_GET_QUESTION_LIST,
  SHOW_CONFIRMATION_MODAL,
  BLACK_BOX_QUIZ_SUBMIT,
  SET_BLACK_BOX_QUIZ_SUBMITTED,
  ERROR_BLACK_BOX_QUIZ_SUBMIT,
  SHOW_SUCCESS_MODAL,
  UPDATE_QUESTION_LIST,
} from './actionBlackBoxQuestion';

const initialState = {
  quizQuestionList: [],
  isLoader: false,
  confirmModalShow: false,
  successModalShow: false,
  examId: '',
};

const reducerBlackBoxQuestion = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_QUESTIONS_LIST:
      return {
        ...state,
        isLoader: true,
      };
    case SET_QUESTIONS_LIST:
      return {
        ...state,
        isLoader: false,
        quizQuestionList: payload?.questions,
        examId: payload?.exam_id,
      };
    case UPDATE_QUESTION_LIST:
      return {
        ...state,
        quizQuestionList: [...payload],
      };
    case ERROR_GET_QUESTION_LIST:
      return {
        ...state,
        isLoader: false,
      };
    case SHOW_CONFIRMATION_MODAL:
      return {
        ...state,
        confirmModalShow: payload,
      };
    case BLACK_BOX_QUIZ_SUBMIT:
      return {
        ...state,
        confirmModalShow: false,
        isLoader: true,
      };
    case SET_BLACK_BOX_QUIZ_SUBMITTED:
      return {
        ...state,
        isLoader: false,
        successModalShow: true,
      };
    case ERROR_BLACK_BOX_QUIZ_SUBMIT:
      return {
        ...state,
        isLoader: false,
      };
    case SHOW_SUCCESS_MODAL:
      return {
        ...state,
        successModalShow: payload,
      };
    default:
      return state;
  }
};
export default reducerBlackBoxQuestion;
