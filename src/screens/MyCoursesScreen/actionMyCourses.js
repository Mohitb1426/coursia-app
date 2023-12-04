const module_key = 'myCourses';

export const SET_COURSES_DATA_BY_ID = `${module_key}_set_courses_data_by_id`;
export const SET_VIEWED_ARRAY = `${module_key}_set_viewed_array`;
export const GET_UPDATED_PROGRESS_OF_COURSE = `${module_key}_get_updated_progress_of_course`;
export const ERROR_GETTING_PROGRESS_OF_COURSE = `${module_key}_error_getting_updated_progress_of_course`;
export const GET_USER_COURSE = `${module_key}_get_user_course`;
export const ERROR_GETTING_USER_COURSE_DATA = `${module_key}_error_getting_user_course_data`;
export const GET_CONTINUE_WATCH_DATA = `${module_key}_get_continue_watch_data`;
export const GOT_CONTINUE_WATCH_DATA = `${module_key}_got_continue_watch_data`;
export const ERROR_GETTING_CONTINUE_WATCH_DATA = `${module_key}_error_getting_continue_watch_data`;
export const GET_MY_COURSE_DATA = `${module_key}_get_my_course_data`;
export const SET_MY_COURSE_UNIT_DATA = `${module_key}_set_my_course_unit_data`;
export const ERROR_GETTING_COURSE = `${module_key}_error_getting_course`;
export const START_CONTINUE_VIDEO = `${module_key}_start_continue_video`;
export const GET_CONTINUE_VIDEO_URL = `${module_key}_get_continue_video_url`;
export const GOT_CONTINUE_VIDEO_URL = `${module_key}_got_continue_video_url`;

export const setViewedArray = (data) => ({
  type: SET_VIEWED_ARRAY,
  payload: data,
});

export const getProgressOfCourse = () => ({
  type: GET_UPDATED_PROGRESS_OF_COURSE,
  payload: [],
});

export const errorGettingProgressOfCourse = (data) => ({
  type: ERROR_GETTING_PROGRESS_OF_COURSE,
  payload: data,
});

export const getUserCourse = () => ({
  type: GET_USER_COURSE,
  payload: [],
});

export const setCoursesDataById = (data) => ({
  type: SET_COURSES_DATA_BY_ID,
  payload: data,
});

export const errorGettingUserCourseData = (data) => ({
  type: ERROR_GETTING_USER_COURSE_DATA,
  payload: data,
});

export const getContinueWatchData = () => ({
  type: GET_CONTINUE_WATCH_DATA,
  payload: [],
});

export const gotContinueWatchData = (data) => ({
  type: GOT_CONTINUE_WATCH_DATA,
  payload: data,
});

export const errorGettingContinueWatchData = (data) => ({
  type: ERROR_GETTING_CONTINUE_WATCH_DATA,
  payload: data,
});

export const getMyCourseData = (data) => ({
  type: GET_MY_COURSE_DATA,
  payload: data,
});

export const setMyCourseUnitData = (data) => ({
  type: SET_MY_COURSE_UNIT_DATA,
  payload: data,
});

export const errorGettingFetchingData = (data) => ({
  type: ERROR_GETTING_COURSE,
  payload: data,
});

export const startContinueVideo = (data) => ({
  type: START_CONTINUE_VIDEO,
  payload: data,
});

export const getContinueVideoUrl = (data) => ({
  type: GET_CONTINUE_VIDEO_URL,
  payload: data,
});

export const continueWatchSuccess = (data) => ({
  type: GOT_CONTINUE_VIDEO_URL,
  payload: data,
});
