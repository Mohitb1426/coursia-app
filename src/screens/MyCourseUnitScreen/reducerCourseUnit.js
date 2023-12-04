import {
  IS_LOADING,
  SET_TABLE_DATA,
  SET_SHOW_INDEX,
  SET_LAST_INDEX,
  SET_SHOW_COURSE,
  SET_SHOW_UNIT,
  MY_COURSE_UNIT_VIEWED_ARRAY,
  MY_COURSE_UNIT_EMPTY_ARRAY,
  COURSE_UNIT_VIEWED_ARRAY,
  COURSE_UNIT_EMPTY_ARRAY,
  NAVIGATE_TO_VIEW_PDF,
} from './actionCourseUnit';

const initialState = {
  isLoading: false,
  tableData: [],
  showIndex: false,
  lastIndex: false,
  showCourse: true,
  showUnit: true,
  courseUnitViewedArray: [],
  myCourseUnitViewedArray: [],
  openPdf: false,
};

const reducerCourseUnit = (state = initialState, { type, payload }) => {
  switch (type) {
    case IS_LOADING:
      return {
        ...state,
        isLoading: payload,
      };
    case SET_TABLE_DATA:
      return {
        ...state,
        tableData: payload,
      };
    case SET_SHOW_INDEX:
      return {
        ...state,
        showIndex: payload,
      };
    case SET_LAST_INDEX:
      return {
        ...state,
        lastIndex: payload,
      };
    case SET_SHOW_COURSE:
      return {
        ...state,
        showCourse: payload,
      };
    case SET_SHOW_UNIT:
      return {
        ...state,
        showUnit: payload,
      };
    case MY_COURSE_UNIT_VIEWED_ARRAY:
      return {
        ...state,
        myCourseUnitViewedArray: payload,
      };
    case MY_COURSE_UNIT_EMPTY_ARRAY:
      return {
        ...state,
        myCourseUnitViewedArray: payload,
      };
    case COURSE_UNIT_VIEWED_ARRAY:
      return {
        ...state,
        courseUnitViewedArray: payload,
      };
    case COURSE_UNIT_EMPTY_ARRAY:
      return {
        ...state,
        courseUnitViewedArray: payload,
      };
    case NAVIGATE_TO_VIEW_PDF:
      return {
        ...state,
        openPdf: payload,
      };
    default:
      return state;
  }
};

export default reducerCourseUnit;
