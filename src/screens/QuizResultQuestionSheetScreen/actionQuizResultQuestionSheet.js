const module_key = 'quiz_Result_Question_sheet';

export const SET_QUIZ_INSTRUCTION_MODAL = `${module_key}_quiz_instruction_modal`;
export const GET_QUIZ_QUESTION_SHEET = `${module_key}_get_quiz_question_sheet`;
export const SET_QUIZ_QUESTION_SHEET = `${module_key}_set_quiz_question_sheet`;
export const ERROR_QUIZ_QUESTION_SHEET = `${module_key}_error_quiz_question_sheet`;
export const SET_QUESTION_ID = `${module_key}_set_question_id`;
export const SET_OVERTIME_VALUE = `${module_key}_set_overtime_value`;
export const CLEAR_STATE_VALUE = `${module_key}_clear_state_value`;

export const setQuizInstructionModal = (data) => ({
  type: SET_QUIZ_INSTRUCTION_MODAL,
  payload: data,
});

export const getQuizQuestionSheet = (data) => ({
  type: GET_QUIZ_QUESTION_SHEET,
  payload: data,
});

export const setQuizQuestionSheet = (data) => ({
  type: SET_QUIZ_QUESTION_SHEET,
  payload: data,
});

export const setActiveQuestionId = (data) => ({
  type: SET_QUESTION_ID,
  payload: data,
});

export const errorQuizQuestionSheet = (data) => ({
  type: ERROR_QUIZ_QUESTION_SHEET,
  payload: data,
});

export const setOverTimeValue = () => ({
  type: SET_OVERTIME_VALUE,
  payload: {},
});

export const clearStateValue = () => ({
  type: CLEAR_STATE_VALUE,
  payload: {},
});
