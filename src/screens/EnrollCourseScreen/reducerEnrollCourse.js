import {
  IS_LOADING,
  CHECK_RECORDED_CLASS_ACTIVE_PASS,
  SET_RECORDED_CLASS_ACTIVE_PASS,
  ERROR_CHECK_RECORDED_CLASS_ACTIVE_PASS,
} from './actionEnrollCourse';

const initialState = {
  isLoading: false,
  passActivated: false,
};

const reducerEnrollCourse = (state = initialState, { type, payload }) => {
  switch (type) {
    case IS_LOADING:
      return {
        ...state,
        isLoading: payload,
      };
    case CHECK_RECORDED_CLASS_ACTIVE_PASS:
      return {
        ...state,
        isLoading: true,
        passActivated: false,
      };
    case SET_RECORDED_CLASS_ACTIVE_PASS:
      return {
        ...state,
        isLoading: false,
        passActivated: payload,
      };
    case ERROR_CHECK_RECORDED_CLASS_ACTIVE_PASS:
      return {
        ...state,
        isLoading: false,
        passActivated: false,
      };
    default:
      return state;
  }
};

export default reducerEnrollCourse;
