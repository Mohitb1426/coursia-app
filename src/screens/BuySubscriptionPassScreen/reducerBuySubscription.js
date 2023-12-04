import {
  GET_SUBSCRIPTION_PLAN_DETAILS,
  SET_SUBSCRIPTION_PLAN_DETAILS,
  ERROR_GETTING_SUBSCRIPTION_PLAN_DETAILS,
  SET_SUBSCRIPTION_PAYMENT_ORDER_DATA,
  SET_DEFAULT_PAYMENT_LINK,
  VERIFY_PAYMENT_ACTION,
  GENERATE_SUBSCRIPTION_PAYMENT_ORDER,
  SET_VERIFIED_PAYMENT_DATA,
  SHOW_PAYMENT_SUCCESSFUL_SCREEN,
  ERROR_GENERATING_SUBSCRIPTION_PAYMENT_ORDER,
  ERROR_VERIFYING_PAYMENT_ACTION,
  CLOSE_MODAL,
  SET_LOADING,
  SET_TRANSACTION_ID,
} from './actionBuySubscription';

const initialState = {
  subscriptionDetails: [],
  noDataFoundSubscriptionDetails: false,
  isLoader: false,
  msgToneLink: 'https://d1ev28s1srtg0j.cloudfront.net/Race/tone/happy_notification.wav',
  razorPayData: null,
  showPaymentSuccessfulScreen: false,
  showCardPaymentFail: false,
  transactionId: '',
};

const reducerBuySubscription = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LOADING:
      return {
        ...state,
        isLoader: payload,
      };
    case SET_TRANSACTION_ID:
      return {
        ...state,
        transactionId: payload,
      };
    case GENERATE_SUBSCRIPTION_PAYMENT_ORDER:
      return {
        ...state,
        isLoader: true,
      };
    case ERROR_GENERATING_SUBSCRIPTION_PAYMENT_ORDER:
      return {
        ...state,
        isLoader: false,
      };
    case SHOW_PAYMENT_SUCCESSFUL_SCREEN:
      return {
        ...state,
        showPaymentSuccessfulScreen: payload,
      };
    case SET_SUBSCRIPTION_PLAN_DETAILS:
      return {
        ...state,
        subscriptionDetails: payload,
        isLoader: false,
      };
    case SET_DEFAULT_PAYMENT_LINK:
    case VERIFY_PAYMENT_ACTION:
      return {
        ...state,
        razorPayData: null,
        isLoader: false,
      };
    case SET_SUBSCRIPTION_PAYMENT_ORDER_DATA:
      return {
        ...state,
        razorPayData: payload,
        isLoader: false,
      };
    case GET_SUBSCRIPTION_PLAN_DETAILS:
      return {
        ...state,
        isLoader: true,
      };
    case ERROR_GETTING_SUBSCRIPTION_PLAN_DETAILS:
      return {
        ...state,
        noDataFoundSubscriptionDetails: true,
        isLoader: false,
      };
    case SET_VERIFIED_PAYMENT_DATA:
      return {
        ...state,
        showPaymentSuccessfulScreen: true,
        showCardPaymentFail: false,
      };
    case ERROR_VERIFYING_PAYMENT_ACTION:
      return {
        ...state,
        isLoading: false,
        showPaymentSuccessfulScreen: false,
        showCardPaymentFail: true,
      };
    case CLOSE_MODAL:
      return {
        ...state,
        isLoading: false,
        showCardPaymentFail: false,
        showPaymentSuccessfulScreen: false,
      };
    default:
      return state;
  }
};

export default reducerBuySubscription;
