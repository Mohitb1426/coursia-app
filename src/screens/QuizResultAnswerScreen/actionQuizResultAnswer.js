const module_key = 'quizResultAnswer';

export const GET_QUIZ_ANSWER = `${module_key}_get_quiz_answer`;
export const SET_QUIZ_ANSWER = `${module_key}_set_quiz_answer`;
export const ERROR_QUIZ_ANSWER = `${module_key}_error_quiz_answer`;
export const GET_QUIZ_SAVE_BOOKMARK = `${module_key}_get_quiz_bookmark`;
export const SET_QUIZ_BOOKMARK = `${module_key}_set_quiz_bookmark`;
export const SUCCESSFULLY_QUIZ_BOOKMARK = `${module_key}_successfully_quiz_bookmark`;
export const ERROR_QUIZ_BOOKMARK = `${module_key}_error_quiz_bookmark`;
export const CHANGE_LOADER = `${module_key}_change_loader`;
export const SHOW_INTRO_SCREEN = `${module_key}_show_intro_screen`;
export const CREATE_COMMENT_QUIZ = `${module_key}_set_comment_quiz`;
export const ERROR_CREATE_COMMENT_QUIZ = `${module_key}_error_comment_quiz`;
export const SUCCESS_CREATE_COMMENT_QUIZ = `${module_key}_success_comment_quiz`;
export const GET_QUIZ_COMMENT = `${module_key}_get_quiz_comment`;
export const SUCCESS_GET_COMMENT_QUIZ = `${module_key}_success_get_comment_quiz`;
export const ERROR_GET_COMMENT_QUIZ = `${module_key}_error_get_comment_quiz`;
export const SET_COURSE_ID = `${module_key}_set_course_id`;

export const SET_SHOW_FEEDBACK_MODAL = `${module_key}_set_show_feedback_modal`;
export const SET_SHOW_FEEDBACK_CONFIRMATION_MODAL = `${module_key}_set_show_feedback_confirmation_modal`;
export const GET_COURSE_DETAILS = `${module_key}_get_course_details`;
export const SET_COURSE_DETAILS = `${module_key}_set_course_details`;
export const ERROR_GET_COURSE_DETAILS = `${module_key}_error_course_details`;
export const CLEAR_COMMENT_QUIZ_DATA = `${module_key}_clear_comment_quiz_data`;
export const SET_POST_COMMENT_DATA = `${module_key}_set_post_comment_data`;
export const SET_FROM_QUIZ_ANSWERS = `${module_key}_set_from_quiz_answer`;
export const SET_GROUP_ID = `${module_key}_set_group_id`;

export const createQuizComment = (data) => ({
  type: CREATE_COMMENT_QUIZ,
  payload: data,
});

export const setPostCommentData = (data) => ({
  type: SET_POST_COMMENT_DATA,
  payload: data,
});

export const setFromQuizResult = (data) => ({
  type: SET_FROM_QUIZ_ANSWERS,
  payload: data,
});
export const setGroupId = (data) => ({
  type: SET_GROUP_ID,
  payload: data,
});

export const clearQuizCommentData = () => ({
  type: CLEAR_COMMENT_QUIZ_DATA,
  payload: [],
});

export const setShowFeedbackModal = (data) => ({
  type: SET_SHOW_FEEDBACK_MODAL,
  payload: data,
});

export const setShowFeedbackConfirmationModal = (data) => ({
  type: SET_SHOW_FEEDBACK_CONFIRMATION_MODAL,
  payload: data,
});
export const setCourseId = (data) => ({
  type: SET_COURSE_ID,
  payload: data,
});

export const errorCreateQuizComment = (data) => ({
  type: ERROR_CREATE_COMMENT_QUIZ,
  payload: data,
});

export const successCreateQuizComment = (data) => ({
  type: SUCCESS_CREATE_COMMENT_QUIZ,
  payload: data,
});
export const getQuizComment = (data) => ({
  type: GET_QUIZ_COMMENT,
  payload: data,
});

export const successGetQuizComment = (data) => ({
  type: SUCCESS_GET_COMMENT_QUIZ,
  payload: data,
});

export const errorGetQuizComment = (data) => ({
  type: ERROR_GET_COMMENT_QUIZ,
  payload: data,
});
export const getQuizAnswer = (data) => ({
  type: GET_QUIZ_ANSWER,
  payload: data,
});

export const setQuizAnswer = (data) => ({
  type: SET_QUIZ_ANSWER,
  payload: data,
});

export const errorQuizAnswer = (data) => ({
  type: ERROR_QUIZ_ANSWER,
  payload: data,
});

export const setQuizBookmark = (data) => ({
  type: SET_QUIZ_BOOKMARK,
  payload: data,
});

export const getQuizSaveBookmark = () => ({
  type: GET_QUIZ_SAVE_BOOKMARK,
  payload: {},
});

export const successFullySetQuizBookmark = (data) => ({
  type: SUCCESSFULLY_QUIZ_BOOKMARK,
  payload: data,
});
export const errorQuizBookmark = (data) => ({
  type: ERROR_QUIZ_BOOKMARK,
  payload: data,
});
export const changeLoaderStatus = (data) => ({
  type: CHANGE_LOADER,
  payload: data,
});

export const setShowIntroScreen = (data) => ({
  type: SHOW_INTRO_SCREEN,
  payload: data,
});
export const getCourseDetails = (data) => ({
  type: GET_COURSE_DETAILS,
  payload: data,
});

export const setCourseDetails = (data) => ({
  type: SET_COURSE_DETAILS,
  payload: data,
});

export const errorGetCourseDetails = (data) => ({
  type: ERROR_GET_COURSE_DETAILS,
  payload: data,
});
