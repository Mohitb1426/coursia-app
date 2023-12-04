const module_key = 'student_dashboard';
export const GET_DASHBOARD_DATA = `${module_key}_get_dashboard_data`;
export const SET_DASHBOARD_DATA = `${module_key}_set_dashboard_data`;
export const ERROR_GET_DASHBOARD_DATA = `${module_key}_error_get_dashboard_data`;
export const IS_LOADING = `${module_key}_is_loading`;
export const GET_LEADER_BOARD_DATA = `${module_key}_get_leader_board_data`;
export const SET_LEADER_BOARD_DATA = `${module_key}_set_leader_board_data`;
export const ERROR_GET_LEADER_BOARD_DATA = `${module_key}_error_get_leader_board_data`;

export const getDashboardData = () => ({
  type: GET_DASHBOARD_DATA,
  payload: {},
});

export const setDashboardData = (data) => ({
  type: SET_DASHBOARD_DATA,
  payload: data,
});

export const errorDashboardData = (data) => ({
  type: ERROR_GET_DASHBOARD_DATA,
  payload: data,
});

export const setIsLoading = (value) => ({
  type: IS_LOADING,
  payload: value,
});

export const getLeaderBoardData = () => ({
  type: GET_LEADER_BOARD_DATA,
  payload: {},
});

export const setLeaderBoardData = (data) => ({
  type: SET_LEADER_BOARD_DATA,
  payload: data,
});

export const errorGetLeaderBoardData = (data) => ({
  type: ERROR_GET_LEADER_BOARD_DATA,
  payload: data,
});
