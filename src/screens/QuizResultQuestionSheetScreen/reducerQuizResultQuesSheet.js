import {
  SET_QUIZ_INSTRUCTION_MODAL, SET_QUIZ_QUESTION_SHEET, ERROR_QUIZ_QUESTION_SHEET,
  GET_QUIZ_QUESTION_SHEET, SET_QUESTION_ID, SET_OVERTIME_VALUE, CLEAR_STATE_VALUE,
} from './actionQuizResultQuestionSheet';

const initialState = {
  showInstructionModal: false,
  isLoader: false,
  resultSheetData: [],
  errorResultSheet: '',
  activeQuestionId: '',
  showOverTime: false,
};

const reducerQuizResultQuesSheet = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_QUIZ_QUESTION_SHEET:
      return {
        ...state,
        isLoader: true,
      };
    case SET_QUESTION_ID:
      return {
        ...state,
        activeQuestionId: payload,
      };

    case SET_QUIZ_INSTRUCTION_MODAL:
      return {
        ...state,
        showInstructionModal: payload,
      };
    case SET_QUIZ_QUESTION_SHEET:
      return {
        ...state,
        isLoader: false,
        resultSheetData: payload,
      };
    case ERROR_QUIZ_QUESTION_SHEET:
      return {
        ...state,
        errorResultSheet: payload,
      };
    case SET_OVERTIME_VALUE:
      return {
        ...state,
        showOverTime: !state.showOverTime,
      };
    case CLEAR_STATE_VALUE:
      return {
        ...state,
        showOverTime: false,
        showInstructionModal: false,
        isLoader: false,
      };
    default:
      return state;
  }
};
export default reducerQuizResultQuesSheet;
