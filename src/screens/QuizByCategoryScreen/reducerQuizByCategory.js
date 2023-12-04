import {
  ERROR_GETTING_QUIZ_COURSES,
  GET_QUIZ_COURSES,
  GOT_QUIZ_COURSES,
  GOT_STANDARD_LIST,
  GOT_SUBJECT_LIST,
  UPDATE_STANDARD,
  UPDATE_SUBJECT,
  OPEN_POP_UP_BOX,
  OPEN_QUIZ_COURSE_BOTTOM_SHEET,
  CLOSE_QUIZ_COURSE_BOTTOM_SHEET,
  SET_PAGE_NUMBER,
  GOT_DATA,
  FOOTER_LOADING,
  RESET_PAGE_NUMBER,
  RESET_QUIZ_DATA,
  SET_UPDATE_STANDARD_DATA,
  SET_UPDATE_SUBJECT_DATA,
  IS_DATA_NULL,
} from './actionQuizByCategory';

const initialState = {
  openPopUpBox: false,
  subjectList: [],
  standardList: [],
  quizCourseData: [],
  selectedSubject: [],
  selectedStandard: [],
  isLoading: false,
  screenLoadingState: true,
  openBottomSheet: false,
  pageNumber: 1,
  isGotData: false,
  loader: true,
  updateSubjectData: [],
  updateStandardData: [],
};

export const reducerQuizByCategory = (state = initialState, { type, payload }) => {
  switch (type) {
    case OPEN_POP_UP_BOX:
      return {
        ...state,
        openPopUpBox: payload,
      };
    case UPDATE_SUBJECT:
      return {
        ...state,
        selectedSubject: payload,
      };
    case GET_QUIZ_COURSES:
      return {
        ...state,
        isLoading: true,
      };
    case UPDATE_STANDARD:
      return {
        ...state,
        selectedStandard: payload,
      };
    case GOT_STANDARD_LIST:
      return {
        ...state,
        standardList: payload,
      };
    case GOT_SUBJECT_LIST:
      return {
        ...state,
        subjectList: payload,
      };
    case GOT_QUIZ_COURSES:
      return {
        ...state,
        quizCourseData: state.quizCourseData.concat(payload),
        isLoading: false,
        screenLoadingState: false,
      };
    case ERROR_GETTING_QUIZ_COURSES:
      return {
        ...state,
        isLoading: false,
        screenLoadingState: false,
        loader: false,
      };
    case OPEN_QUIZ_COURSE_BOTTOM_SHEET:
      return {
        ...state,
        openBottomSheet: true,
      };
    case CLOSE_QUIZ_COURSE_BOTTOM_SHEET:
      return {
        ...state,
        openBottomSheet: false,
      };
    case SET_PAGE_NUMBER:
      return {
        ...state,
        pageNumber: state.pageNumber + 1,
      };
    case GOT_DATA:
      return {
        ...state,
        isGotData: payload,
      };
    case FOOTER_LOADING:
      return {
        ...state,
        loader: payload,
        isLoading: false,
      };
    case IS_DATA_NULL:
      return {
        ...state,
        loader: false,
        isLoading: false,
        screenLoadingState: false,
      };
    case RESET_PAGE_NUMBER:
      return {
        ...state,
        pageNumber: 1,
      };
    case RESET_QUIZ_DATA:
      return {
        ...state,
        quizCourseData: [],
        screenLoadingState: true,

      };
    case SET_UPDATE_STANDARD_DATA:
      return {
        ...state,
        updateStandardData: payload,
      };
    case SET_UPDATE_SUBJECT_DATA:
      return {
        ...state,
        updateSubjectData: payload,
      };
    default:
      return state;
  }
};
