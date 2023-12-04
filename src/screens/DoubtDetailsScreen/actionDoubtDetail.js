const module_key = 'DoubtsDetailsScreen';

export const GET_DOUBTS = `${module_key}_get_doubts`;
export const GOT_DOUBTS = `${module_key}_got_doubts`;
export const ERROR_GETTING_DOUBTS = `${module_key}_error_getting_doubts`;

export const getDoubtDetails = (data) => ({
  type: GET_DOUBTS,
  payload: data,
});

export const gotDoubtDetails = (data) => ({
  type: GOT_DOUBTS,
  payload: data,
});

export const errorGettingDoubts = (data) => ({
  type: ERROR_GETTING_DOUBTS,
  payload: data,
});
