import {
  GET_SUBSCRIPTION_PLAN,
  SET_SUBSCRIPTION_PLAN,
  ERROR_GETTING_SUBSCRIPTION,
  OPEN_ACTIVATE_MODAL,
  SET_PLAN_ID,
  ACTIVATE_SUBSCRIPTION_PASS,
  SET_AMOUNT,
  SET_LIST_LOADING,
} from './actionSubscription';

const initialState = {
  openModal: false,
  subscription: [],
  noDataFoundSubscription: false,
  isLoader: false,
  planId: 0,
  passAmount: '',
  isListLoading: false,
};

const reducerSubscription = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LIST_LOADING:
      return {
        ...state,
        isListLoading: payload,
      };
    case OPEN_ACTIVATE_MODAL:
      return {
        ...state,
        openModal: payload,
      };
    case SET_SUBSCRIPTION_PLAN:
      return {
        ...state,
        subscription: payload,
        isListLoading: false,
        isLoader: false,
      };
    case GET_SUBSCRIPTION_PLAN:
      return {
        ...state,
        isLoader: !state.isListLoading,
      };
    case ERROR_GETTING_SUBSCRIPTION:
      return {
        ...state,
        noDataFoundSubscription: true,
      };
    case SET_PLAN_ID:
      return {
        ...state,
        planId: payload,
      };
    case ACTIVATE_SUBSCRIPTION_PASS:
      return {
        ...state,
        openModal: false,
      };
    case SET_AMOUNT:
      return {
        ...state,
        passAmount: payload,
      };
    default:
      return state;
  }
};

export default reducerSubscription;
