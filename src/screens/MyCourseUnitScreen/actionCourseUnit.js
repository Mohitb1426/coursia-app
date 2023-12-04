const module_key = 'course_unit';
export const IS_LOADING = `${module_key}_loader`;
export const SET_TABLE_DATA = `${module_key}_table_data`;
export const SET_SHOW_INDEX = `${module_key}_show_index`;
export const SET_LAST_INDEX = `${module_key}_last_index`;
export const SET_SHOW_COURSE = `${module_key}_show_course`;
export const SET_SHOW_UNIT = `${module_key}_show_unit`;
export const ERROR_ON_VIDEO_DATA = `${module_key}_error_on_video_data`;
export const GET_PAID_PDF_DATA = `${module_key}_get_paid_pdf_data`;
export const GET_PAID_Video_DATA = `${module_key}_get_pai_video_data`;
export const ERROR_ON_VIDEO_PDF_DATA = `${module_key}_get_video_pdf_data`;
export const SET_COURSE_UNIT_DATA = `${module_key}_set_course_unit_data`;
export const GET_PDF_DATA = `${module_key}_get_pdf_data`;
export const COURSE_UNIT_VIEWED_ARRAY = `${module_key}_course_unit_viewed_array`;
export const COURSE_UNIT_EMPTY_ARRAY = `${module_key}_course_unit_empty_array`;
export const MY_COURSE_UNIT_VIEWED_ARRAY = `${module_key}_my_course_unit_viewed_array`;
export const MY_COURSE_UNIT_EMPTY_ARRAY = `${module_key}_my_course_unit_empty_array`;
export const NAVIGATE_TO_VIEW_PDF = `${module_key}_navigate_to_view_pdf`;

export const toggleLoader = (data) => ({
  type: IS_LOADING,
  payload: data,
});

export const setTableData = (data) => ({
  type: SET_TABLE_DATA,
  payload: data,
});

export const setShowIndex = (data) => ({
  type: SET_SHOW_INDEX,
  payload: data,
});

export const setLastIndex = (data) => ({
  type: SET_LAST_INDEX,
  payload: data,
});

export const setShowCourse = (data) => ({
  type: SET_SHOW_COURSE,
  payload: data,
});

export const setShowUnit = (data) => ({
  type: SET_SHOW_UNIT,
  payload: data,
});

export const errorOnVideoData = (data) => ({
  type: ERROR_ON_VIDEO_DATA,
  payload: data,
});

export const getPaidPdfData = (data) => ({
  type: GET_PAID_PDF_DATA,
  payload: data,
});

export const getPaidVideoData = (data) => ({
  type: GET_PAID_Video_DATA,
  payload: data,
});

export const errorOnPaidPdfOrVideoData = (data) => ({
  type: ERROR_ON_VIDEO_PDF_DATA,
  payload: data,
});

export const setCourseUnitData = (data) => ({
  type: SET_COURSE_UNIT_DATA,
  payload: data,
});

export const getPdfData = (data) => ({
  type: GET_PDF_DATA,
  payload: data,
});

export const setCourseUnitViewedArray = (data) => ({
  type: COURSE_UNIT_VIEWED_ARRAY,
  payload: data,
});

export const setCourseUnitEmptyArray = () => ({
  type: COURSE_UNIT_EMPTY_ARRAY,
  payload: [],
});

export const setMyCourseUnitViewedArray = (data) => ({
  type: MY_COURSE_UNIT_VIEWED_ARRAY,
  payload: data,
});

export const setMyCourseUnitEmptyArray = () => ({
  type: MY_COURSE_UNIT_EMPTY_ARRAY,
  payload: [],
});

export const navigateToViewPdf = (data) => ({
  type: NAVIGATE_TO_VIEW_PDF,
  payload: data,
});
