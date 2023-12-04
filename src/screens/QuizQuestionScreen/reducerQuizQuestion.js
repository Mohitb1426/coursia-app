import {
  SET_QUESTION_STATUS,
  SET_SCREEN,
  CLOSE_MENU,
  GOT_REVIEW_QUIZ_DATA,
  GET_REVIEW_QUIZ_DATA,
  SHOW_CONTENT,
  SET_OPEN_CONFIRM_MODAL,
  IS_MODAL_OPEN,
  SET_SECTION_QUESTION_STATUS,
  SET_CURRENT_SECTION_TIMER,
  QUIZ_INSTRUCTION_MODEL,
  OPEN_SUCCESS_MODAL,
  IS_QUIZ_ACTIVE,
  IS_SWIPE_TRUE,
  IS_SELECT_OPTION,
  CLEAN_MODAL,
  UPDATE_QUESTION_STATUS,
  PREVIOUS_QUESTION_STATUS,
  IS_TIMER_PAUSED,
  PAUSED_TIMER_VALUE,
  PAUSED_QUIZ_ACTIVE_SECTION_LEFT_TIME,
  PAUSED_QUIZ_TOTAL_TIME,
  PAUSED_SCREEN_TIME,
  IS_QUIZ_RUNNING,
  RESTART_SCREEN_TIME,
  CUSTOM_SECTION_TIME,
  IS_SECTION_SUBMITTED,
  USER_SCREEN_TIME,
  PREV_USER_SCREEN_TIME,
  QUIZ_TIME_LEFT,
  SECTION_TIME_LEFT,
  QUESTION_TIME_LEFT,
  CHECK_NEXT_AND_REVIEW,
  IS_TIMER_STOPPED,
  AUTO_SAVE_SECTION,
  SET_TIMER_IN_DEFAULT_STATE,
  IS_LAST_QUESTION,
} from './actionQuizQuestion';
import { STOP_TIMER_CONSTANTS } from './constantsScreenQuizQuestion';

const initialState = {
  isSectionSubmitted: false,
  isLoading: false,
  questionStatus: {
    attempted: 0,
    markAsReview_Attempted: 0,
    markAsReview_Unattempted: 0,
    unAttempted: 0,
  },
  isOnMenuScreen: false,
  isQuizInstructionModalOpen: false,
  reviewQuizData: [],
  showContent: false,
  openConfirmModal: false,
  isModalOpen: false,
  sectionQuestionStatus: {
    attempted: 0,
    markAsReview_Attempted: 0,
    markAsReview_Unattempted: 0,
    unAttempted: 0,
  },
  currentSectionTime: {
    hours: 0,
    minutes: 0,
    seconds: 0,
  },
  openSuccessModal: false,
  isQuizActive: false,
  isSelectOption: [],
  isSwipeTrue: false,
  previousQuestionStatus: 0,
  isTimerPaused: false,
  pausedTimerValue: 0,
  pausedQuizActiveSectionLeftTime: 0,
  pausedQuizTotalTime: 0,
  pausedScreenTime: 0,
  isQuizRunning: true,
  restartScreenTime: false,
  customSectionTime: 0,
  userScreenTime: 0,
  prevUserScreenTime: 0,

  quizTime: -1,
  sectionTime: -1,
  questionTime: -1,
  stopTimer: STOP_TIMER_CONSTANTS.INITIAL,
  isLastQuestion: false,
};

const reducerQuizQuestion = (state = initialState, { type, payload }) => {
  switch (type) {
    case IS_LAST_QUESTION:
      return {
        ...state,
        isLastQuestion: payload,
      };
    case SET_TIMER_IN_DEFAULT_STATE:
      return {
        ...state,
        quizTime: -1,
        sectionTime: -1,
        questionTime: -1,
      };
    case AUTO_SAVE_SECTION:
      return {
        ...state,
        stopTimer: STOP_TIMER_CONSTANTS.STOP_THE_TIMER,
      };
    case IS_TIMER_STOPPED:
      return {
        ...state,
        stopTimer: payload,
      };
    case CHECK_NEXT_AND_REVIEW:
      return {
        ...state,
        stopTimer: STOP_TIMER_CONSTANTS.STOP_THE_TIMER,
      };
    case IS_SECTION_SUBMITTED:
      return {
        ...state,
        isSectionSubmitted: payload,
      };
    case SET_QUESTION_STATUS:
      return {
        ...state,
        questionStatus: {
          ...state.questionStatus,
          attempted: payload.attempted,
          markAsReview_Attempted: payload.markAsReview_Attempted,
          markAsReview_Unattempted: payload.markAsReview_Unattempted,
          unAttempted: payload.unAttempted,
        },
      };
    case UPDATE_QUESTION_STATUS:
      return {
        ...state,
        questionStatus: {
          ...state.questionStatus,
          attempted: state.questionStatus.attempted + payload.attempted,
          markAsReview_Attempted:
          state.questionStatus.markAsReview_Attempted + payload.markAsReview_Attempted,
          markAsReview_Unattempted:
          state.questionStatus.markAsReview_Unattempted + payload.markAsReview_Unattempted,
          unAttempted: state.questionStatus.unAttempted + payload.unAttempted,
        },
      };
    case SET_SCREEN:
      return {
        ...state,
        isOnMenuScreen: payload,
      };
    case CLOSE_MENU:
      return {
        ...state,
        isOnMenuScreen: false,
        isQuizInstructionModalOpen: false,
      };
    case GET_REVIEW_QUIZ_DATA:
      return {
        ...state,
        isLoading: true,
      };
    case GOT_REVIEW_QUIZ_DATA:
      return {
        ...state,
        reviewQuizData: payload,
        isOnMenuScreen: true,
        isLoading: false,
      };
    case SHOW_CONTENT:
      return {
        ...state,
        showContent: payload,
      };
    case SET_OPEN_CONFIRM_MODAL:
      return {
        ...state,
        openConfirmModal: payload,
      };
    case IS_MODAL_OPEN:
      return {
        ...state,
        isModalOpen: payload,
      };
    case SET_SECTION_QUESTION_STATUS:
      return {
        ...state,
        sectionQuestionStatus: {
          ...state.sectionQuestionStatus,
          attempted: payload.attempted,
          markAsReview_Attempted: payload.markAsReview_Attempted,
          markAsReview_Unattempted: payload.markAsReview_Unattempted,
          unAttempted: payload.unAttempted,
        },
      };
    case SET_CURRENT_SECTION_TIMER:
      return {
        ...state,
        currentSectionTime: {
          ...state.currentSectionTime,
          hours: payload.h,
          minutes: payload.m,
          seconds: payload.s,
        },
      };
    case QUIZ_INSTRUCTION_MODEL:
      return {
        ...state,
        isQuizInstructionModalOpen: payload,
      };
    case OPEN_SUCCESS_MODAL:
      return {
        ...state,
        openSuccessModal: payload,
      };
    case IS_QUIZ_ACTIVE:
      return {
        ...state,
        isQuizActive: payload,
      };
    case IS_SWIPE_TRUE:
      return {
        ...state,
        isSwipeTrue: payload,
      };
    case IS_SELECT_OPTION:
      return {
        ...state,
        isSelectOption: payload,
      };
    case CLEAN_MODAL:
      return {
        ...state,
        showContent: false,
        openConfirmModal: false,
        isLoading: false,
        openSuccessModal: false,
        isQuizInstructionModalOpen: false,
        pausedQuizActiveSectionLeftTime: 0,
        pausedQuizTotalTime: 0,
        pausedTimerValue: 0,
        pausedScreenTime: 0,
      };
    case PREVIOUS_QUESTION_STATUS:
      return {
        ...state,
        previousQuestionStatus: payload,
      };
    case IS_TIMER_PAUSED:
      return {
        ...state,
        isTimerPaused: payload,
      };
    case PAUSED_TIMER_VALUE:
      return {
        ...state,
        pausedTimerValue: payload,
      };
    case PAUSED_QUIZ_ACTIVE_SECTION_LEFT_TIME:
      return {
        ...state,
        pausedQuizActiveSectionLeftTime: payload,
      };
    case PAUSED_QUIZ_TOTAL_TIME:
      return {
        ...state,
        pausedQuizTotalTime: payload,
      };
    case PAUSED_SCREEN_TIME:
      return {
        ...state,
        pausedScreenTime: payload,
      };
    case IS_QUIZ_RUNNING:
      return {
        ...state,
        isQuizRunning: payload,
      };
    case RESTART_SCREEN_TIME:
      return {
        ...state,
        restartScreenTime: payload,
      };
    case CUSTOM_SECTION_TIME:
      return {
        ...state,
        customSectionTime: payload,
      };
    case USER_SCREEN_TIME:
      return {
        ...state,
        userScreenTime: payload,
      };
    case PREV_USER_SCREEN_TIME:
      return {
        ...state,
        prevUserScreenTime: payload,
      };
    case QUIZ_TIME_LEFT:
      return {
        ...state,
        quizTime: payload,
      };
    case SECTION_TIME_LEFT:
      return {
        ...state,
        sectionTime: payload,
      };
    case QUESTION_TIME_LEFT:
      return {
        ...state,
        questionTime: payload,
      };
    default: return state;
  }
};

export default reducerQuizQuestion;
