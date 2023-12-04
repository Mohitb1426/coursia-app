const module_key = 'blackBoxQuizDetailListScreen';

export const GET_QUIZ_DETAIL_LIST = `${module_key}_get_quiz_detail_list`;
export const SET_QUIZ_DETAIL_LIST = `${module_key}_set_quiz_detail_list`;
export const ERROR_GET_QUIZ_DETAIL_LIST = `${module_key}_error_get_quiz_detail_list`;
export const SHOW_RETAKE_MODAL = `${module_key}_show_retake_modal`;
export const SET_RETAKE_POPUP_DATA = `${module_key}_set_retake_popup_data`;
export const SET_RETAKE_UNATTEMPTED = `${module_key}_set_retake_unattempted`;
export const SET_RETAKE_INCORRECT = `${module_key}_set_retake_incorrect`;
export const CHANGE_PAGE_COUNT = `${module_key}_change_page_count`;

export const getQuizDetailList = (data) => ({
  type: GET_QUIZ_DETAIL_LIST,
  payload: data,
});

export const setQuizDetailList = (data) => ({
  type: SET_QUIZ_DETAIL_LIST,
  payload: data,
});

export const errorGetQuizDetailList = (data) => ({
  type: ERROR_GET_QUIZ_DETAIL_LIST,
  payload: data,
});

export const showRetakeModal = (data) => ({
  type: SHOW_RETAKE_MODAL,
  payload: data,
});

export const setRetakePopUpData = (data) => ({
  type: SET_RETAKE_POPUP_DATA,
  payload: data,
});

export const setRetakeUnattempted = (data) => ({
  type: SET_RETAKE_UNATTEMPTED,
  payload: data,
});

export const setRetakeIncorrect = (data) => ({
  type: SET_RETAKE_INCORRECT,
  payload: data,
});

export const changePageNo = (data) => ({
  type: CHANGE_PAGE_COUNT,
  payload: data,
});
