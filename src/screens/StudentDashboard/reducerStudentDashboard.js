import {
  IS_LOADING,
  ERROR_GET_DASHBOARD_DATA,
  SET_DASHBOARD_DATA,
  GET_DASHBOARD_DATA,
  GET_LEADER_BOARD_DATA,
  SET_LEADER_BOARD_DATA,
  ERROR_GET_LEADER_BOARD_DATA,
} from './actionStudentDashboard';

const initialState = {
  userName: '',
  studentDashboardData: [],
  studentLeaderBoardData: [],
  isLoading: false,
  errorMessage: '',
};

const reducerStudentDashboard = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_DASHBOARD_DATA:
      return {
        ...state,
        isLoading: true,
        errorMessage: '',
      };
    case SET_DASHBOARD_DATA:
      return {
        ...state,
        userName: payload.userName,
        studentDashboardData: payload.studentDashboardList,
        isLoading: false,
      };
    case ERROR_GET_DASHBOARD_DATA:
      return {
        ...state,
        isLoading: false,
        errorMessage: payload,
      };
    case IS_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case GET_LEADER_BOARD_DATA:
      return {
        ...state,
        isLoading: true,
      };
    case SET_LEADER_BOARD_DATA:
      return {
        ...state,
        isLoading: false,
        studentLeaderBoardData: payload,
      };
    case ERROR_GET_LEADER_BOARD_DATA:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};
export default reducerStudentDashboard;
