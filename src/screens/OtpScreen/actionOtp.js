const module_key = 'otp';
export const VERIFYING_OTP = `${module_key}_verifying_otp`;
export const AUTO_VERIFYING_OTP = `${module_key}_auto_verifying_otp`;
export const SET_OTP = `${module_key}_set_otp`;
export const SET_USER_TOKEN = `${module_key}_set_user_token`;
export const GOT_ERROR_VERIFYING_TOKEN = `${module_key}_set_error_verifying`;
export const IS_ACTIVE = `${module_key}_is_active`;
export const SECONDS = `${module_key}_seconds`;
export const RESENDING_OTP = `${module_key}_resending_otp`;
export const GOT_RESENTED_OTP = `${module_key}_got_resented_otp`;
export const ERROR_RESENDING_OTP = `${module_key}_error_resending_otp`;
export const OTP_ERROR = `${module_key}_otp_error`;
export const GET_STATE_DATA = `${module_key}_get_state_data`;
export const GET_CITY_DATA = `${module_key}_get_city_data`;
export const SET_STATE_DATA = `${module_key}_set_state_data`;
export const SET_CITY_DATA = `${module_key}_set_city_data`;

export const verifyingOtp = () => ({
  type: VERIFYING_OTP,
  payload: {},
});

export const autoVerifyingOtpAction = (data) => ({
  type: AUTO_VERIFYING_OTP,
  payload: data,
});

export const setOtp = (data) => ({
  type: SET_OTP,
  payload: data,
});

export const setToken = (data) => ({
  type: SET_USER_TOKEN,
  payload: data,
});

export const gotErrorVerifying = (data) => ({
  type: GOT_ERROR_VERIFYING_TOKEN,
  payload: data,
});

export const activateOtp = (data) => ({
  type: IS_ACTIVE,
  payload: data,
});

export const setSeconds = (data) => ({
  type: SECONDS,
  payload: data,
});

export const resendingOtp = () => ({
  type: RESENDING_OTP,
  payload: '',
});

export const resentOtp = () => ({
  type: GOT_RESENTED_OTP,
  payload: '',
});

export const errorResendingOtp = (data) => ({
  type: ERROR_RESENDING_OTP,
  payload: data,
});

export const checkOtp = (data) => ({
  type: OTP_ERROR,
  payload: data,
});

export const getStateData = () => ({
  type: GET_STATE_DATA,
  payload: {},
});

export const getCityData = (data) => ({
  type: GET_CITY_DATA,
  payload: data,
});

export const setUserStateData = (data) => ({
  type: SET_STATE_DATA,
  payload: data,
});
export const setUserCityData = (data) => ({
  type: SET_CITY_DATA,
  payload: data,
});
