const module_key = 'quizResultGraph';

export const GET_GRAPH_RESULT_DATA = `${module_key}_get_graph_result_data`;
export const SET_GRAPH_RESULT_DATA = `${module_key}_set_graph_result_data`;
export const ERROR_GRAPH_RESULT_DATA = `${module_key}_error_graph_result_data`;
export const HIDE_GRAPH_INTRO_SCREEN = `${module_key}_hide_intro_screen`;

export const hideGraphIntroScreen = (data) => ({
  type: HIDE_GRAPH_INTRO_SCREEN,
  payload: data,
});

export const getGraphResultData = (data) => ({
  type: GET_GRAPH_RESULT_DATA,
  payload: data,
});

export const setGraphResultData = (data) => ({
  type: SET_GRAPH_RESULT_DATA,
  payload: data,
});

export const errorGraphResultData = (data) => ({
  type: ERROR_GRAPH_RESULT_DATA,
  payload: data,
});
