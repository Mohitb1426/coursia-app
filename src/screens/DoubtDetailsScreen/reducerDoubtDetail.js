import { ERROR_GETTING_DOUBTS, GET_DOUBTS, GOT_DOUBTS } from './actionDoubtDetail';

const initialState = {
  doubtsData: [],
  isLoading: false,
};

export const reducerDoubtDetail = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_DOUBTS:
      return {
        ...state,
        isLoading: true,
      };
    case GOT_DOUBTS:
      return {
        ...state,
        doubtsData: payload,
        isLoading: false,
      };
    case ERROR_GETTING_DOUBTS:
      return {
        ...state,
        isLoading: false,
      };
    default: return state;
  }
};
