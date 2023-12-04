const module_key = 'blackBoxQuestionScreen';

export const GET_QUESTIONS_LIST = `${module_key}_get_question_list`;
export const SET_QUESTIONS_LIST = `${module_key}_set_question_list`;
export const ERROR_GET_QUESTION_LIST = `${module_key}_error_get_question_list`;
export const UPDATE_QUESTION_LIST = `${module_key}_update_question_list`;

export const getQuestionList = () => ({
  type: GET_QUESTIONS_LIST,
  payload: {},
});

export const setQuestionList = (data) => ({
  type: SET_QUESTIONS_LIST,
  payload: data,
});

export const errorGetQuestionList = (data) => ({
  type: ERROR_GET_QUESTION_LIST,
  payload: data,
});

export const updateQuestionList = (data) => ({
  type: UPDATE_QUESTION_LIST,
  payload: data,
});

export const SHOW_CONFIRMATION_MODAL = `${module_key}_show_confirmation_modal`;
export const SHOW_SUCCESS_MODAL = `${module_key}_show_success_modal`;

export const showConfirmationModal = (data) => ({
  type: SHOW_CONFIRMATION_MODAL,
  payload: data,
});

export const showSuccessModal = (data) => ({
  type: SHOW_SUCCESS_MODAL,
  payload: data,
});

export const BLACK_BOX_QUIZ_SUBMIT = `${module_key}_black_box_quiz_submit`;
export const SET_BLACK_BOX_QUIZ_SUBMITTED = `${module_key}_set_black_box_quiz_submitted`;
export const ERROR_BLACK_BOX_QUIZ_SUBMIT = `${module_key}_error_black_box_quiz_submit`;

export const blackBoxQuizSubmit = () => ({
  type: BLACK_BOX_QUIZ_SUBMIT,
  payload: {},
});

export const blackBoxQuizSubmitted = (data) => ({
  type: SET_BLACK_BOX_QUIZ_SUBMITTED,
  payload: data,
});

export const errorBlackBoxQuizSubmit = (data) => ({
  type: ERROR_BLACK_BOX_QUIZ_SUBMIT,
  payload: data,
});
