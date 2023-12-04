import {
  GET_QUIZ_DETAIL_LIST,
  SET_QUIZ_DETAIL_LIST,
  ERROR_GET_QUIZ_DETAIL_LIST,
  SHOW_RETAKE_MODAL,
  SET_RETAKE_POPUP_DATA,
  SET_RETAKE_INCORRECT,
  SET_RETAKE_UNATTEMPTED,
  CHANGE_PAGE_COUNT,
} from './actionBlackBoxQuizDetailList';

const initialState = {
  quizQuestionList: [],
  isLoading: false,
  modalVisible: false,
  checkUnattempted: false,
  checkIncorrect: false,
  pageNo: 1,
  retakePopupData: {
    name: '',
    analysis_data: {
      total_count: 0,
      correct_count: 0,
      incorrect_count: 0,
      unattempted_count: 0,
    },
  },
};

const reducerBlackBoxQuizDetailList = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_QUIZ_DETAIL_LIST:
      return {
        ...state,
        isLoading: true,
      };
    case SET_QUIZ_DETAIL_LIST:
      return {
        ...state,
        quizQuestionList: payload,
        isLoading: false,
      };
    case ERROR_GET_QUIZ_DETAIL_LIST:
      return {
        ...state,
        isLoading: false,
      };
    case SHOW_RETAKE_MODAL:
      return {
        ...state,
        modalVisible: payload,
      };
    case SET_RETAKE_POPUP_DATA:
      return {
        ...state,
        checkIncorrect: false,
        checkUnattempted: false,
        retakePopupData: payload,
      };
    case SET_RETAKE_INCORRECT:
      return {
        ...state,
        checkIncorrect: payload,
      };
    case SET_RETAKE_UNATTEMPTED:
      return {
        ...state,
        checkUnattempted: payload,
      };
    case CHANGE_PAGE_COUNT:
      return {
        ...state,
        pageNo: payload + 1,
      };
    default:
      return state;
  }
};
export default reducerBlackBoxQuizDetailList;
