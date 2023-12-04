import {
  GET_ALL_COURSES,
  SET_ALL_COURSES,
  ERROR_ALL_COURSES,
  PAGE_COUNT_ALL_COURSES,
} from './actionViewAllChooseCourse';

const initialState = {
  allCoursesData: [],
  isLoading: false,
  isCourseLoading: false,
  pageNo: 1,
};

const reducerViewAllChooseCourses = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_COURSES:
      return {
        ...state,
        isCourseLoading: true,
      };
    case ERROR_ALL_COURSES:
      return {
        ...state,
        isLoading: false,
        isCourseLoading: false,
      };
    case SET_ALL_COURSES:
      return {
        ...state,
        allCoursesData: payload,
        isCourseLoading: false,
      };
    case PAGE_COUNT_ALL_COURSES:
      return {
        ...state,
        pageNo: payload + 1,
      };
    default:
      return state;
  }
};
export default reducerViewAllChooseCourses;
