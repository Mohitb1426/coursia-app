const module_key = 'blackBoxDashBoardScreen';

// BlackBox Summary data
export const GET_DASHBOARD_SUMMARY_DATA = `${module_key}_get_dashboard_summary_data`;
export const SET_DASHBOARD_SUMMARY_DATA = `${module_key}_set_dashboard_summary_data`;
export const ERROR_GET_DASHBOARD_SUMMARY_DATA = `${module_key}_error_get_dashboard_summary_data`;

export const getDashBoardSummary = () => ({
  type: GET_DASHBOARD_SUMMARY_DATA,
  payload: {},
});

export const setDashBoardSummary = (data) => ({
  type: SET_DASHBOARD_SUMMARY_DATA,
  payload: data,
});

export const errorGetDashBoardSummary = (data) => ({
  type: ERROR_GET_DASHBOARD_SUMMARY_DATA,
  payload: data,
});

// BlackBox Analysis data
export const GET_DASHBOARD_ANALYSIS_DATA = `${module_key}_get_dashBoard_analysis_data`;
export const SET_DASHBOARD_ANALYSIS_DATA = `${module_key}_set_dashBoard_analysis_data`;
export const ERROR_GET_DASHBOARD_ANALYSIS_DATA = `${module_key}_error_get_dashBoard_analysis_data`;

export const getDashBoardAnalysisListData = () => ({
  type: GET_DASHBOARD_ANALYSIS_DATA,
  payload: {},
});

export const setDashBoardAnalysisListData = (data) => ({
  type: SET_DASHBOARD_ANALYSIS_DATA,
  payload: data,
});

export const errorGetDashBoardAnalysisListData = (data) => ({
  type: ERROR_GET_DASHBOARD_ANALYSIS_DATA,
  payload: data,
});

export const CHECK_ACTIVE_FEATURE_BLACK_BOX = `${module_key}_check_active_feature_black_box`;
export const SET_ACTIVE_FEATURE_BLACK_BOX = `${module_key}_set_active_feature_black_box`;
export const ERROR_CHECKING_ACTIVE_FEATURE_BLACK_BOX = `${module_key}_error_check_active_feature_black_box`;

export const checkActiveFeatureBlackBox = () => ({
  type: CHECK_ACTIVE_FEATURE_BLACK_BOX,
  payload: {},
});

export const setActiveFeatureBlackBox = (data) => ({
  type: SET_ACTIVE_FEATURE_BLACK_BOX,
  payload: data,
});

export const errorCheckingActiveFeatureBlackBox = (data) => ({
  type: ERROR_CHECKING_ACTIVE_FEATURE_BLACK_BOX,
  payload: data,
});
