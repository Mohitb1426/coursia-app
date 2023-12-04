import {
  ERROR_GETTING_AT_MATERIALS,
  GET_MATERIALS,
  GOT_MATERIAL_DATA,
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
} from './actionMaterialsTab';

const initialState = {
  openPopUpBox: false,
  subjectList: [],
  standardList: [],
  materialsData: [],
  selectedSubject: [],
  selectedStandard: [],
  isLoading: false,
  openBottomSheet: false,
  pageNumber: 1,
  isGotData: false,
  loader: true,
  updateStandardData: [],
  updateSubjectData: [],
  screenLoadingState: true,
};

export const reducerMaterialsTab = (state = initialState, { type, payload }) => {
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
    case GET_MATERIALS:
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
    case GOT_MATERIAL_DATA:
      return {
        ...state,
        materialsData: state.materialsData.concat(payload),
        isLoading: false,
        screenLoadingState: false,
      };
    case ERROR_GETTING_AT_MATERIALS:
      return {
        ...state,
        isLoading: false,
        loader: false,
        screenLoadingState: false,
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
      };
    case RESET_PAGE_NUMBER:
      return {
        ...state,
        pageNumber: 1,
      };
    case RESET_QUIZ_DATA:
      return {
        ...state,
        materialsData: [],
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
    case IS_DATA_NULL:
      return {
        ...state,
        loader: false,
        isLoading: false,
        screenLoadingState: false,
      };
    default:
      return state;
  }
};
