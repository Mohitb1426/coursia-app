const module_key = 'MaterialsTab';

export const GET_SUBJECT_LIST = `${module_key}_get_subject_list`;
export const GOT_SUBJECT_LIST = `${module_key}_got_subject_list`;
export const ERROR_GETTING_SUBJECT_LIST = `${module_key}_error_getting_subject_list`;
export const GET_STANDARD_LIST = `${module_key}_get_standard_list`;
export const GOT_STANDARD_LIST = `${module_key}_got_standard_list`;
export const ERROR_GETTING_STANDARD_LIST = `${module_key}_error_getting_standard_list`;
export const GET_MATERIALS = `${module_key}_get_materials`;
export const GOT_MATERIAL_DATA = `${module_key}_got_material_data`;
export const UPDATE_SUBJECT = `${module_key}_update_subject`;
export const UPDATE_STANDARD = `${module_key}_update_standard`;
export const ERROR_GETTING_AT_MATERIALS = `${module_key}_error_getting_material`;
export const OPEN_POP_UP_BOX = `${module_key}_open_pop_up_box`;
export const OPEN_QUIZ_COURSE_BOTTOM_SHEET = `${module_key}_open_quiz_course_bottom_sheet`;
export const CLOSE_QUIZ_COURSE_BOTTOM_SHEET = `${module_key}_close_quiz_course_bottom_sheet`;
export const SET_PAGE_NUMBER = `${module_key}_set_page_number`;
export const GOT_DATA = `${module_key}_got_data`;
export const FOOTER_LOADING = `${module_key}_footer_loading`;
export const RESET_PAGE_NUMBER = `${module_key}_reset_page_number`;
export const RESET_QUIZ_DATA = `${module_key}_reset_quiz_data`;
export const SET_UPDATE_SUBJECT_DATA = `${module_key}_set_update_subject_data`;
export const SET_UPDATE_STANDARD_DATA = `${module_key}_set_update_standard_data`;
export const IS_DATA_NULL = `${module_key}_is_data_null`;

export const updateSubject = (data) => ({
  type: UPDATE_SUBJECT,
  payload: data,
});

export const updateStandard = (data) => ({
  type: UPDATE_STANDARD,
  payload: data,
});

export const getSubjectList = () => ({
  type: GET_SUBJECT_LIST,
  payload: {},
});

export const gotSubjectList = (data) => ({
  type: GOT_SUBJECT_LIST,
  payload: data,
});

export const errorGettingSubjectList = (data) => ({
  type: ERROR_GETTING_SUBJECT_LIST,
  payload: data,
});

export const getMaterials = (data) => ({
  type: GET_MATERIALS,
  payload: data,
});

export const gotMaterialData = (data) => ({
  type: GOT_MATERIAL_DATA,
  payload: data,
});

export const errorGettingAtMaterial = (data) => ({
  type: ERROR_GETTING_AT_MATERIALS,
  payload: data,
});

export const getStandardList = () => ({
  type: GET_STANDARD_LIST,
  payload: {},
});

export const gotStandardList = (data) => ({
  type: GOT_STANDARD_LIST,
  payload: data,
});

export const errorGettingStandardList = (data) => ({
  type: ERROR_GETTING_STANDARD_LIST,
  payload: data,
});

export const isPopUpBoxOpen = (data) => ({
  type: OPEN_POP_UP_BOX,
  payload: data,
});

export const openQuizCourseBottomSheet = (data) => ({
  type: OPEN_QUIZ_COURSE_BOTTOM_SHEET,
  payload: data,
});

export const closeQuizCourseBottomSheet = (data) => ({
  type: CLOSE_QUIZ_COURSE_BOTTOM_SHEET,
  payload: data,
});

export const setPageNumber = (data) => ({
  type: SET_PAGE_NUMBER,
  payload: data,
});

export const gotData = (data) => ({
  type: GOT_DATA,
  payload: data,
});

export const isFooterLoading = (data) => ({
  type: FOOTER_LOADING,
  payload: data,
});

export const resetPageNumber = () => ({
  type: RESET_PAGE_NUMBER,
  payload: {},
});

export const resetQuizData = () => ({
  type: RESET_QUIZ_DATA,
  payload: {},
});

export const setUpdateSubjectData = (data) => ({
  type: SET_UPDATE_SUBJECT_DATA,
  payload: data,
});

export const setUpdateStandardData = (data) => ({
  type: SET_UPDATE_STANDARD_DATA,
  payload: data,
});

export const isDataNull = () => ({
  type: IS_DATA_NULL,
  payload: {},
});
