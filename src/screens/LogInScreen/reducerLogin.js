import {
  OTP_SENT,
  SET_MOBILE_NUMBER,
  OPEN_WEB_VIEW,
  MOBILE_ERROR,
  TERMS_CONDITION,
  IS_ACTIVE,
  IS_LOADING,
  SENDING_OTP,
  CHANGE_NUMBER,
  SCROLL_ENABLED,
} from './actionLogin';

const initialState = {
  mobile: '',
  isOtpSent: false,
  isLoading: false,
  openWebView: {
    isVisible: false,
    url: '',
  },
  mobileError: '',
  termCondition: true,
  isActive: false,
  scrollState: false,
};

const reducerLogin = (state = initialState, { type, payload }) => {
  switch (type) {
    case SENDING_OTP:
      return {
        ...state,
        isLoading: true,
      };
    case SET_MOBILE_NUMBER:
      return {
        ...state,
        mobile: payload,
      };
    case OTP_SENT:
      return {
        ...state,
        isOtpSent: true,
        isLoading: false,
      };
    case OPEN_WEB_VIEW:
      return {
        ...state,
        openWebView: {
          isVisible: payload?.isVisible,
          url: payload?.url,
        },
      };
    case IS_LOADING:
      return {
        ...state,
        isLoading: payload,
      };
    case MOBILE_ERROR:
      return {
        ...state,
        mobileError: payload,
      };
    case TERMS_CONDITION:
      return {
        ...state,
        termCondition: payload,
      };
    case IS_ACTIVE:
      return {
        ...state,
        isActive: payload,
      };
    case CHANGE_NUMBER:
      return {
        ...state,
        isOtpSent: payload,
      };
    case SCROLL_ENABLED:
      return {
        ...state,
        scrollState: payload,
      };
    default:
      return state;
  }
};
export default reducerLogin;
