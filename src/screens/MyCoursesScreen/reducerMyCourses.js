import {
  SET_MY_COURSE_UNIT_DATA,
  SET_COURSES_DATA_BY_ID,
  SET_VIEWED_ARRAY,
  GOT_CONTINUE_WATCH_DATA,
  GET_UPDATED_PROGRESS_OF_COURSE, GOT_CONTINUE_VIDEO_URL, GET_MY_COURSE_DATA, ERROR_GETTING_COURSE,
  ERROR_GETTING_CONTINUE_WATCH_DATA,
  ERROR_GETTING_USER_COURSE_DATA,
} from './actionMyCourses';

const initialState = {
  myCourseData: [],
  viewedArray: [],
  isLoading: false,
  continueWatchData: [],
  myCourseUnitData: {},
  gotUrl: false,
};

export const reducerMyCourses = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_MY_COURSE_DATA:
      return {
        ...state,
        isLoading: true,
      };
    case ERROR_GETTING_COURSE:
      return {
        ...state,
        isLoading: false,
      };
    case GET_UPDATED_PROGRESS_OF_COURSE:
      return {
        ...state,
        isLoading: true,
      };
    case SET_COURSES_DATA_BY_ID:
      return {
        ...state,
        myCourseData: payload,
      };
    case SET_VIEWED_ARRAY:
      return {
        ...state,
        viewedArray: payload,
      };
    case GOT_CONTINUE_WATCH_DATA:
      return {
        ...state,
        continueWatchData: payload,
        isLoading: false,
      };
    case SET_MY_COURSE_UNIT_DATA:
      return {
        ...state,
        myCourseUnitData: payload,
        isLoading: false,
      };
    case GOT_CONTINUE_VIDEO_URL:
      return {
        ...state,
        gotUrl: payload,
      };
    case ERROR_GETTING_USER_COURSE_DATA:
    case ERROR_GETTING_CONTINUE_WATCH_DATA:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};
