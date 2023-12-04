const module_key = 'enrollCourse';

export const IS_LOADING = `${module_key}_loader`;
export const BUY_COURSES = `${module_key}_buy_courses`;

export const CHECK_RECORDED_CLASS_ACTIVE_PASS = `${module_key}_check_recorded_class_active_pass`;
export const SET_RECORDED_CLASS_ACTIVE_PASS = `${module_key}_set_recorded_class_active_pass`;
export const ERROR_CHECK_RECORDED_CLASS_ACTIVE_PASS = `${module_key}_error_check_recorded_class_active_pass`;

export const toggleLoader = (data) => ({
  type: IS_LOADING,
  payload: data,
});

export const buyCourse = (data) => ({
  type: BUY_COURSES,
  payload: data,
});

export const checkRecordedClassPass = () => ({
  type: CHECK_RECORDED_CLASS_ACTIVE_PASS,
  payload: {},
});

export const setRecordedClassPass = (data) => ({
  type: SET_RECORDED_CLASS_ACTIVE_PASS,
  payload: data,
});

export const errorCheckRecordedClassPass = (data) => ({
  type: ERROR_CHECK_RECORDED_CLASS_ACTIVE_PASS,
  payload: data,
});
