import {
  GOT_COURSES,
  SET_COURSE_DETAIL,
  SET_COURSE_DETAIL_BY_ID,
  SET_COURSE_MODULES_DETAIL,
  SET_COURSE_DATA,
  GOT_COURSE_SUMMARY,
  SET_COURSE_ID,
  GET_COURSES,
  SET_ASSESSMENT_NAME,
  IS_QUIZ_BUY,
  GOT_COURSES_ERROR,
  GOT_COURSE_ERROR,
  SET_ACTIVE_COURSE_TAB,
  GET_COURSE_CATEGORIES_LIST,
  SET_COURSE_CATEGORIES_LIST,
  GET_COURSE_CATEGORIES_LIST_ERROR,
  SET_DATA,
  SET_COURSE_GROUP_ID,
  SET_TITLE,
  CHANGE_PAGE_COUNT,
  CHANGE_TOGGLE_STATUS,
} from './actionChooseCourses';

const initialState = {
  coursesData: [],
  title: '',
  price: '',
  status: '',
  activeCourseId: '',
  course_type_clp: '',
  courseModuleData: [],
  courseUnitData: [],
  courseSummary: [],
  isLoading: false,
  isCourseLoading: false,
  assessmentName: '',
  isQuizBuyStatus: false,
  courseGroupId: '',
  activeTabName: 'EXAM',
  courseCategories: [],
  recordedCourseCategories: [],
  courseListLoader: false,
  pageNo: 1,
  recordedClassToggle: false,
};

const reducerChooseCourses = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_COURSES:
      return {
        ...state,
        isCourseLoading: true,
      };
    case GOT_COURSES_ERROR:
    case GOT_COURSE_ERROR:
      return {
        ...state,
        isLoading: false,
        isCourseLoading: false,
      };
    case IS_QUIZ_BUY:
      return {
        ...state,
        isQuizBuyStatus: payload,
      };
    case GOT_COURSES:
      return {
        ...state,
        coursesData: payload,
        isCourseLoading: false,
      };
    case SET_TITLE:
      return {
        ...state,
        title: payload,
      };
    case SET_COURSE_DETAIL:
      return {
        ...state,
        title: payload?.item?.display_title,
        price: payload?.item?.course_price,
        status: payload?.item?.course_type_clp,
        activeCourseId: payload?.item?.id,
        courseTypeClp: payload?.item?.course_type_clp,
        isLoading: true,
        courseGroupId: payload?.item?.course_group_id,
      };
    case SET_COURSE_MODULES_DETAIL:
      return {
        ...state,
        courseModuleData: payload,
        isLoading: false,
      };
    case SET_COURSE_DETAIL_BY_ID:
      return {
        ...state,
        activeCourseId: payload?.item?.id,
        courseGroupId: payload?.item?.course_group_id,
        price: payload?.item?.course_price,
      };
    case SET_DATA:
      return {
        ...state,
        activeCourseId: payload?.item?.course_group_id,
        courseGroupId: payload?.item?.course_group_id,
      };
    case SET_COURSE_DATA:
      return {
        ...state,
        courseUnitData: payload,
      };
    case GOT_COURSE_SUMMARY:
      return {
        ...state,
        courseSummary: payload,
      };
    case SET_COURSE_ID:
      return {
        ...state,
        activeCourseId: payload,
      };
    case SET_ASSESSMENT_NAME:
      return {
        ...state,
        assessmentName: payload,
      };
    case SET_ACTIVE_COURSE_TAB:
      return {
        ...state,
        activeTabName: payload,
        pageNo: 1,
      };
    case GET_COURSE_CATEGORIES_LIST:
      return {
        ...state,
        courseListLoader: true,
        courseCategories: [],
        recordedCourseCategories: [],
      };
    case SET_COURSE_CATEGORIES_LIST:
      return {
        ...state,
        courseListLoader: false,
        courseCategories: payload?.all_category_id,
        recordedCourseCategories: payload?.recorded_class_id,
      };
    case GET_COURSE_CATEGORIES_LIST_ERROR:
      return {
        ...state,
        courseListLoader: false,
        courseCategories: [],
        recordedCourseCategories: [],
      };
    case SET_COURSE_GROUP_ID:
      return {
        ...state,
        courseGroupId: payload,
      };
    case CHANGE_PAGE_COUNT:
      return {
        ...state,
        pageNo: payload + 1,
      };
    case CHANGE_TOGGLE_STATUS:
      return {
        ...state,
        recordedClassToggle: payload,
      };
    default:
      return state;
  }
};
export default reducerChooseCourses;
