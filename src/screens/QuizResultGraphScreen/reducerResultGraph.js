import {
  SET_GRAPH_RESULT_DATA,
  HIDE_GRAPH_INTRO_SCREEN,
  ERROR_GRAPH_RESULT_DATA,
  GET_GRAPH_RESULT_DATA,
} from './actionResultGraph';

const initialState = {
  graphResultData: {},
  isIntroScreenShow: true,
  isLoader: false,
  errorData: '',
};

const reducerResultGraph = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_GRAPH_RESULT_DATA:
      return {
        ...state,
        isLoader: false,
        graphResultData: {},
      };
    case SET_GRAPH_RESULT_DATA:
      return {
        ...state,
        isLoader: false,
        graphResultData: payload,
      };
    case HIDE_GRAPH_INTRO_SCREEN:
      return {
        ...state,
        isIntroScreenShow: payload,
      };
    case ERROR_GRAPH_RESULT_DATA:
      return {
        ...state,
        isLoader: false,
        errorData: payload,
      };
    default:
      return state;
  }
};
export default reducerResultGraph;
