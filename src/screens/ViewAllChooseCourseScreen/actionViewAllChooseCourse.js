const module_key = 'viewAllChooseCourses';
export const GET_ALL_COURSES = `${module_key}_get_all_courses`;
export const SET_ALL_COURSES = `${module_key}_set_all_courses`;
export const ERROR_ALL_COURSES = `${module_key}_error_all_courses`;
export const PAGE_COUNT_ALL_COURSES = `${module_key}_page_count_all_courses`;

export const getAllCourses = (data) => ({
  type: GET_ALL_COURSES,
  payload: data,
});

export const setAllCourses = (data) => ({
  type: SET_ALL_COURSES,
  payload: data,
});

export const errorAllCourses = (data) => ({
  type: ERROR_ALL_COURSES,
  payload: data,
});

export const pageCountAllCourses = (data) => ({
  type: PAGE_COUNT_ALL_COURSES,
  payload: data,
});
