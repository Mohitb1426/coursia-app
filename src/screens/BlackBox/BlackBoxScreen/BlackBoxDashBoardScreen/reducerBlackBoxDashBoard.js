import {
  GET_DASHBOARD_SUMMARY_DATA,
  SET_DASHBOARD_SUMMARY_DATA,
  ERROR_GET_DASHBOARD_SUMMARY_DATA,
  GET_DASHBOARD_ANALYSIS_DATA,
  SET_DASHBOARD_ANALYSIS_DATA,
  ERROR_GET_DASHBOARD_ANALYSIS_DATA,
  CHECK_ACTIVE_FEATURE_BLACK_BOX,
  SET_ACTIVE_FEATURE_BLACK_BOX,
  ERROR_CHECKING_ACTIVE_FEATURE_BLACK_BOX,
} from './actionBlackBoxDashBoard';

const initialState = {
  blackBoxSummary: {
    totalCount: 0,
    correctCount: 0,
    unattemptedCount: 0,
    incorrectCount: 0,
  },
  analysisListData: [],
  analysisLoader: false,
  summaryLoader: false,
  showLockModal: false,
};

const reducerBlackBoxDashBoard = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_DASHBOARD_SUMMARY_DATA:
      return {
        ...state,
        summaryLoader: true,
      };
    case SET_DASHBOARD_SUMMARY_DATA:
      return {
        ...state,
        summaryLoader: false,
        blackBoxSummary: {
          totalCount: payload.total_count,
          correctCount: payload.correct_count,
          unattemptedCount: payload.unattempted_count,
          incorrectCount: payload.incorrect_count,
        },
      };
    case ERROR_GET_DASHBOARD_SUMMARY_DATA:
      return {
        ...state,
        blackBoxSummary: {
          totalCount: 0,
          correctCount: 0,
          unattemptedCount: 0,
          incorrectCount: 0,
        },
      };
    case GET_DASHBOARD_ANALYSIS_DATA:
      return {
        ...state,
        analysisLoader: true,
        analysisListData: [],
      };
    case SET_DASHBOARD_ANALYSIS_DATA:
      return {
        ...state,
        analysisLoader: false,
        analysisListData: [...payload],
      };
    case ERROR_GET_DASHBOARD_ANALYSIS_DATA:
      return {
        ...state,
        analysisLoader: false,
      };
    case CHECK_ACTIVE_FEATURE_BLACK_BOX:
      return {
        ...state,
        showLockModal: false,
      };
    case SET_ACTIVE_FEATURE_BLACK_BOX:
      return {
        ...state,
        showLockModal: payload,
      };
    case ERROR_CHECKING_ACTIVE_FEATURE_BLACK_BOX:
      return {
        ...state,
        showLockModal: false,
      };
    default:
      return state;
  }
};
export default reducerBlackBoxDashBoard;
