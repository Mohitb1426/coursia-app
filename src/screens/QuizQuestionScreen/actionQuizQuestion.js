const module_key = 'quiz_question';

export const SET_QUESTION_STATUS = `${module_key}_question_status`;
export const UPDATE_QUESTION_STATUS = `${module_key}_update_question_status`;
export const SET_SCREEN = `${module_key}_set_screen`;
export const CLOSE_MENU = `${module_key}_close_menu`;
export const QUIZ_INSTRUCTION_MODEL = `${module_key}_quiz_instruction_modal`;
export const GET_REVIEW_QUIZ_DATA = `${module_key}_get_review_quiz_data`;
export const GOT_REVIEW_QUIZ_DATA = `${module_key}_got_review_quiz_data`;
export const ERROR_GETTING_REVIEW_QUIZ_DATA = `${module_key}_error_getting_review_quiz_data`;
export const SHOW_CONTENT = `${module_key}_show_content`;
export const SET_OPEN_CONFIRM_MODAL = `${module_key}_set_open_confirm_modal`;
export const IS_MODAL_OPEN = `${module_key}_is_modal_open`;
export const SET_SECTION_QUESTION_STATUS = `${module_key}_set_section_question_status`;
export const SET_CURRENT_SECTION_TIMER = `${module_key}_set_current_section_timer`;
export const OPEN_SUCCESS_MODAL = `${module_key}_open_success_modal`;
export const IS_QUIZ_ACTIVE = `${module_key}_is_quiz_active`;
export const CHECK_NEXT_AND_REVIEW = `${module_key}_check_next_and_review`;
export const CHECK_NEXT_AND_REVIEW_PAUSE = `${module_key}_check_next_and_review_pause`;
export const UPDATE_QUESTION_TIME = `${module_key}_update_question_time`;
export const ERROR_UPDATING_QUESTION_TIME = `${module_key}_error_getting_question_time`;
export const ERROR_CHECK_NEXT_AND_REVIEW = `${module_key}_error_check_next_and_review`;
export const GET_THE_QUESTION_DATA = `${module_key}_get_the_question_data`;
export const ERROR_GETTING_QUESTION_DATA = `${module_key}_error_getting_question_data`;
export const IS_SELECT_OPTION = `${module_key}_is_select_option`;
export const SUBMIT_SECTION = `${module_key}_submit_section`;
export const ERROR_SUBMITTING_SECTION = `${module_key}_error_submitting_section`;
export const ERROR_SUBMITTING_QUIZ = `${module_key}_error_submitting_quiz`;
export const SUBMIT_QUIZ = `${module_key}_submit_quiz`;
export const REGISTER_THE_DATA = `${module_key}_register_the_data`;
export const ERROR_REGISTERING_THE_DATA = `${module_key}_error_registering_the_data`;
export const IS_SWIPE_TRUE = `${module_key}_is_swipe_true`;
export const GET_DETAILS_OF_QUIZ_QUESTION = `${module_key}_get_details_of_quiz_question`;
export const ERROR_DETAILS_OF_QUIZ_QUESTION = `${module_key}_error_details_of_quiz_question`;
export const GET_CONTENT_DETAILS = `${module_key}_get_course_content_details`;
export const ERROR_GETTING_CONTENT_DETAILS = `${module_key}_error_getting_content_details`;
export const CLEAN_MODAL = `${module_key}_clean_modal`;
export const PREVIOUS_QUESTION_STATUS = `${module_key}_previous_question_status`;
export const IS_TIMER_PAUSED = `${module_key}_is_timer_paused`;
export const PAUSED_TIMER_VALUE = `${module_key}_paused_timer_value`;
export const PAUSED_QUIZ_ACTIVE_SECTION_LEFT_TIME = `${module_key}_paused_quiz_active_section_left_time`;
export const PAUSED_QUIZ_TOTAL_TIME = `${module_key}_paused_quiz_total_time`;
export const PAUSED_SCREEN_TIME = `${module_key}_paused_screen_time`;
export const RESTART_TIMER = `${module_key}_restart_timer`;
export const PAUSE_ACTIVE_QUIZ = `${module_key}_pause_active_quiz`;
export const PAUSE_QUIZ_DATA = `${module_key}_pause_quiz_data`;
export const RESTART_TIMER_DATA = `${module_key}_restart_timer_data`;
export const IS_QUIZ_RUNNING = `${module_key}_is_quiz_running`;
export const RESTART_SCREEN_TIME = `${module_key}_restart_screen_time`;
export const CUSTOM_SECTION_TIME = `${module_key}_custom_section_time`;
export const AUTO_SAVE_SECTION = `${module_key}_auto_save_section`;
export const AUTO_UPDATE_QUESTION_TIME = `${module_key}_auto_update_question_time`;
export const IS_SECTION_SUBMITTED = `${module_key}_is_section_submitted`;
export const USER_SCREEN_TIME = `${module_key}_user_screen_time`;
export const PREV_USER_SCREEN_TIME = `${module_key}_prev_user_screen_time`;
export const QUIZ_TIME_LEFT = `${module_key}_quiz_time_left`;
export const SECTION_TIME_LEFT = `${module_key}_section_time_left`;
export const QUESTION_TIME_LEFT = `${module_key}_question_time_left`;
export const SET_PAUSE_FUNCTIONS = `${module_key}_set_pause_functions`;
export const SET_RESUME_FUNCTIONS = `${module_key}_set_resume_functions`;
export const IS_TIMER_STOPPED = `${module_key}_is_timer_stopped`;
export const SET_TIMER_IN_DEFAULT_STATE = `${module_key}_set_timer_in_default_state`;
export const IS_LAST_QUESTION = `${module_key}_is_last_question`;
export const SECTION_SUBMITTED = `${module_key}_section_submitted`;
export const GET_NEXT_QUESTION = `${module_key}_get_next_question`;
export const ERROR_GETTING_NEXT_QUESTION = `${module_key}_error_getting_next_question`;

export const ASSESSMENT_MODULE_STATUS = `${module_key}_assessment_module_status`;
export const ERROR_ASSESSMENT_MODULE_STATUS = `${module_key}_assessment_module_status`;

export const setQuestionStatus = (data) => ({
  type: SET_QUESTION_STATUS,
  payload: data,
});

export const updateQuestionStatus = (data) => ({
  type: UPDATE_QUESTION_STATUS,
  payload: data,
});

export const setScreen = (data) => ({
  type: SET_SCREEN,
  payload: data,
});

export const closeMenu = () => ({
  type: CLOSE_MENU,
  payload: {},
});

export const setQuizInstructionModalOpen = (data) => ({
  type: QUIZ_INSTRUCTION_MODEL,
  payload: data,
});

export const getReviewQuizData = () => ({
  type: GET_REVIEW_QUIZ_DATA,
  payload: [],
});

export const gotReviewQuizData = (data) => ({
  type: GOT_REVIEW_QUIZ_DATA,
  payload: data,
});

export const gotErrorReviewQuizData = (data) => ({
  type: ERROR_GETTING_REVIEW_QUIZ_DATA,
  payload: data,
});

export const setShowContent = (data) => ({
  type: SHOW_CONTENT,
  payload: data,
});

export const setOpenConfirmModal = (data) => ({
  type: SET_OPEN_CONFIRM_MODAL,
  payload: data,
});

export const setIsModalOpen = (data) => ({
  type: IS_MODAL_OPEN,
  payload: data,
});

export const setSectionQuestionStatus = (data) => ({
  type: SET_SECTION_QUESTION_STATUS,
  payload: data,
});

export const setCurrentSectionTimer = (data) => ({
  type: SET_CURRENT_SECTION_TIMER,
  payload: data,
});

export const setOpenSuccessModal = (data) => ({
  type: OPEN_SUCCESS_MODAL,
  payload: data,
});

export const setIsQuizActive = (data) => ({
  type: IS_QUIZ_ACTIVE,
  payload: data,
});

export const setSaveNextAndReview = (data) => {
  return ({
    type: CHECK_NEXT_AND_REVIEW,
    payload: data,
  });
};

export const setSaveNextAndReviewPauseQuiz = (data) => {
  return ({
    type: CHECK_NEXT_AND_REVIEW_PAUSE,
    payload: data,
  });
};

export const updateTheQuestionTime = (data) => {
  return ({
    type: UPDATE_QUESTION_TIME,
    payload: data,
  });
};

export const errorCheckNextAndReview = (data) => ({
  type: ERROR_CHECK_NEXT_AND_REVIEW,
  payload: data,
});

export const getTheQuestionData = (data) => ({
  type: GET_THE_QUESTION_DATA,
  payload: data,
});

export const errorGettingQuestionData = (data) => ({
  type: ERROR_GETTING_QUESTION_DATA,
  payload: data,
});

export const errorUpdatingQuestionTime = (data) => ({
  type: ERROR_UPDATING_QUESTION_TIME,
  payload: data,
});

export const setIsSelectOption = (data) => ({
  type: IS_SELECT_OPTION,
  payload: data,
});

export const submitTheSection = (data) => ({
  type: SUBMIT_SECTION,
  payload: data,
});

export const errorSubmittingSection = (data) => ({
  type: ERROR_SUBMITTING_SECTION,
  payload: data,
});

export const submitTheQuiz = (data) => ({
  type: SUBMIT_QUIZ,
  payload: data,
});

export const errorSubmittingQuiz = (data) => ({
  type: ERROR_SUBMITTING_QUIZ,
  payload: data,
});

export const registerTheData = (data) => ({
  type: REGISTER_THE_DATA,
  payload: data,
});

export const errorRegisteringTheData = (data) => ({
  type: ERROR_REGISTERING_THE_DATA,
  payload: data,
});

export const setIsSwipeTrue = (data) => ({
  type: IS_SWIPE_TRUE,
  payload: data,
});

export const getDetailsOfQuizQuestion = () => ({
  type: GET_DETAILS_OF_QUIZ_QUESTION,
  payload: {},
});

export const errorDetailsOfQuizQuestion = (data) => ({
  type: ERROR_DETAILS_OF_QUIZ_QUESTION,
  payload: data,
});

export const getContentDetails = (data) => ({
  type: GET_CONTENT_DETAILS,
  payload: data,
});

export const errorGettingContentDetails = (data) => ({
  type: ERROR_GETTING_CONTENT_DETAILS,
  payload: data,
});

export const cleanModel = () => ({
  type: CLEAN_MODAL,
  payload: {},
});

export const setPreviousQuestionStatus = (data) => ({
  type: PREVIOUS_QUESTION_STATUS,
  payload: data,
});

export const pauseTimer = (data) => ({
  type: IS_TIMER_PAUSED,
  payload: data,
});

export const setPausedTimerValue = (data) => ({
  type: PAUSED_TIMER_VALUE,
  payload: data,
});

export const setPauseActiveSectionTime = (data) => ({
  type: PAUSED_QUIZ_ACTIVE_SECTION_LEFT_TIME,
  payload: data,
});

export const setPauseQuizTotalTime = (data) => ({
  type: PAUSED_QUIZ_TOTAL_TIME,
  payload: data,
});

export const setPauseScreenTime = (data) => ({
  type: PAUSED_SCREEN_TIME,
  payload: data,
});

export const restartTimer = () => ({
  type: RESTART_TIMER,
  payload: {},
});

export const pauseActiveQuiz = (data) => ({
  type: PAUSE_ACTIVE_QUIZ,
  payload: data,
});

export const pauseQuizData = (data) => ({
  type: PAUSE_QUIZ_DATA,
  payload: data,
});

export const restartTimerData = (data) => ({
  type: RESTART_TIMER_DATA,
  payload: data,
});

export const setIsQuizRunning = (data) => ({
  type: IS_QUIZ_RUNNING,
  payload: data,
});

export const setRestartScreenTime = (data) => ({
  type: RESTART_SCREEN_TIME,
  payload: data,
});

export const setCustomSectionTime = (data) => ({
  type: CUSTOM_SECTION_TIME,
  payload: data,
});

export const autoSaveSection = (data) => ({
  type: AUTO_SAVE_SECTION,
  payload: data,
});

export const autoUpdateQuestionTime = (data) => ({
  type: AUTO_UPDATE_QUESTION_TIME,
  payload: data,
});

export const setIsSectionSubmitStatus = (data) => ({
  type: IS_SECTION_SUBMITTED,
  payload: data,
});

export const setUserScreenTime = (data) => ({
  type: USER_SCREEN_TIME,
  payload: data,
});

export const setPrevUserScreenTime = (data) => ({
  type: PREV_USER_SCREEN_TIME,
  payload: data,
});

export const setQuizTimeLeft = (data) => ({
  type: QUIZ_TIME_LEFT,
  payload: data,
});

export const setSectionTimeLeft = (data) => ({
  type: SECTION_TIME_LEFT,
  payload: data,
});

export const setQuestionTimeLeft = (data) => ({
  type: QUESTION_TIME_LEFT,
  payload: data,
});

export const isTimerStopped = (data) => ({
  type: IS_TIMER_STOPPED,
  payload: data,
});

export const setTimerInDefaultState = () => ({
  type: SET_TIMER_IN_DEFAULT_STATE,
  payload: {},
});

export const isLastQuestion = (data) => ({
  type: IS_LAST_QUESTION,
  payload: data,
});

export const getNextQuestion = (data) => ({
  type: GET_NEXT_QUESTION,
  payload: data,
});

export const errorGettingNextQuestion = (data) => ({
  type: ERROR_GETTING_NEXT_QUESTION,
  payload: data,
});

export const assessmentModuleStatus = (data) => ({
  type: ASSESSMENT_MODULE_STATUS,
  payload: data,
});

export const errorAssessmentModuleStatus = (data) => ({
  type: ERROR_ASSESSMENT_MODULE_STATUS,
  payload: data,
});
