import Constants from '../../common/Constants';
import {
  SET_OTP,
  SET_USER_TOKEN,
  IS_ACTIVE,
  SECONDS,
  RESENDING_OTP,
  GOT_RESENTED_OTP,
  VERIFYING_OTP,
  OTP_ERROR,
  AUTO_VERIFYING_OTP,
  SET_STATE_DATA,
  SET_CITY_DATA,
  GOT_ERROR_VERIFYING_TOKEN,
} from './actionOtp';

const initialState = {
  otp: '',
  isOtpSent: false,
  userId: '',
  userToken: '',
  isActive: false,
  seconds: Constants.timeout,
  isLoading: false,
  otpError: '',
  stateData: [],
  cityData: [],
};

const reducerOtp = (state = initialState, { type, payload }) => {
  switch (type) {
    case VERIFYING_OTP:
      return {
        ...state,
        isLoading: true,
        otpError: '',
      };
    case SET_OTP:
    case AUTO_VERIFYING_OTP:
      return {
        ...state,
        otp: payload?.trim(),
      };
    case SET_USER_TOKEN:
      return {
        ...state,
        userId: payload?.user_id,
        userToken: payload?.token,
        isLoading: false,
      };
    case IS_ACTIVE:
      return {
        ...state,
        isActive: payload,
      };
    case SECONDS:
      return {
        ...state,
        seconds: payload,
      };
    case RESENDING_OTP:
      return {
        ...state,
        isLoading: true,
      };
    case GOT_RESENTED_OTP:
      return {
        ...state,
        seconds: Math.random(),
        isLoading: false,
      };
    case OTP_ERROR:
      return {
        ...state,
        otpError: payload,
      };
    case SET_STATE_DATA:
      return {
        ...state,
        stateData: payload,
      };
    case SET_CITY_DATA:
      return {
        ...state,
        cityData: payload,
      };
    case GOT_ERROR_VERIFYING_TOKEN:
      return {
        ...state,
        otpError: payload,
        isLoading: false,
      };
    default:
      return state;
  }
};
export default reducerOtp;
