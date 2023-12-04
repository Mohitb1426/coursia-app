const module_key = 'chooseCourses';
export const GET_COURSES = `${module_key}_get_courses`;
export const GOT_COURSES = `${module_key}_got_courses`;
export const GOT_COURSES_ERROR = `${module_key}_got_courses_error`;
export const SET_COURSE_DETAIL = `${module_key}_get_course_details`;
export const GOT_COURSE_ERROR = `${module_key}_got_course_error`;
export const SET_COURSE_MODULES_DETAIL = `${module_key}_set_course_modules_details`;
export const SET_COURSE_DETAIL_BY_ID = `${module_key}_set_course_by_id`;
export const SET_COURSE_ID = `${module_key}_set_course_id`;
export const SET_COURSE_DATA = `${module_key}_set_course_data`;
export const GET_COURSE_SUMMARY = `${module_key}_get_course_summary`;
export const GOT_COURSE_SUMMARY = `${module_key}_got_course_summary`;
export const GOT_COURSE_SUMMARY_ERROR = `${module_key}_got_course_summary_error`;
export const SET_ASSESSMENT_NAME = `${module_key}_set_assessment_name`;
export const IS_QUIZ_BUY = `${module_key}_is_quiz_buy`;
export const SET_ACTIVE_COURSE_TAB = `${module_key}_set_active_course_tab`;
export const GET_COURSE_CATEGORIES_LIST = `${module_key}_get_course_categories_list`;
export const SET_COURSE_CATEGORIES_LIST = `${module_key}_set_course_categories_list`;
export const GET_COURSE_CATEGORIES_LIST_ERROR = `${module_key}_get_course_categories_list_error`;
export const SET_DATA = `${module_key}_set_data`;
export const SET_COURSE_GROUP_ID = `${module_key}_set_course_group_id`;
export const SET_TITLE = `${module_key}_set_title`;
export const CHANGE_PAGE_COUNT = `${module_key}_change_page_count`;
export const CHANGE_TOGGLE_STATUS = `${module_key}_change_toggle_status`;

export const getCourses = (data) => ({
  type: GET_COURSES,
  payload: data,
});

export const gotCourses = (data) => ({
  type: GOT_COURSES,
  payload: data,
});

export const gotErrorFetchingCourses = (data) => ({
  type: GOT_COURSES_ERROR,
  payload: data,
});

export const setCourseDetails = (data) => ({
  type: SET_COURSE_DETAIL,
  payload: data,
});

export const setCourseDetailsById = (data) => ({
  type: SET_COURSE_DETAIL_BY_ID,
  payload: data,
});

export const gotErrorFetchingCourseDetail = (data) => ({
  type: GOT_COURSE_ERROR,
  payload: data,
});

export const setCourseModuleDetails = (data) => ({
  type: SET_COURSE_MODULES_DETAIL,
  payload: data,
});

export const setCourseData = (data) => ({
  type: SET_COURSE_DATA,
  payload: data,
});

export const getCourseSummary = (data) => ({
  type: GET_COURSE_SUMMARY,
  payload: data,
});

export const gotCourseSummary = (data) => ({
  type: GOT_COURSE_SUMMARY,
  payload: data,
});

export const gotErrorFetchingCourseSummary = (data) => ({
  type: GOT_COURSE_SUMMARY_ERROR,
  payload: data,
});

export const gotErrorFetchingCourseData = (data) => ({
  type: GOT_COURSE_ERROR,
  payload: data,
});

export const setCourseId = (data) => ({
  type: SET_COURSE_ID,
  payload: data,
});

export const setAssessmentName = (data) => ({
  type: SET_ASSESSMENT_NAME,
  payload: data,
});

export const isQuizBuy = (data) => ({
  type: IS_QUIZ_BUY,
  payload: data,
});

export const setActiveCourseTab = (data) => ({
  type: SET_ACTIVE_COURSE_TAB,
  payload: data,
});

export const getCoursesCategoriesList = () => ({
  type: GET_COURSE_CATEGORIES_LIST,
  payload: {},
});

export const setCourseCategoriesList = (data) => ({
  type: SET_COURSE_CATEGORIES_LIST,
  payload: data,
});

export const errorGetCourseCategoriesList = (data) => ({
  type: GET_COURSE_CATEGORIES_LIST_ERROR,
  payload: data,
});

export const setData = (data) => ({
  type: SET_DATA,
  payload: data,
});

export const setCourseGroupId = (data) => ({
  type: SET_COURSE_GROUP_ID,
  payload: data,
});

export const setTitle = (data) => ({
  type: SET_TITLE,
  payload: data,
});

export const changePageNo = (data) => ({
  type: CHANGE_PAGE_COUNT,
  payload: data,
});

export const changeToggleStatus = (data) => ({
  type: CHANGE_TOGGLE_STATUS,
  payload: data,
});
