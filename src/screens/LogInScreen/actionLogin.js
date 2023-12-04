const module_key = 'login';
export const SET_MOBILE_NUMBER = `${module_key}_set_data`;
export const SENDING_OTP = `${module_key}_sending_otp`;
export const ERROR_SENDING_OTP = `${module_key}_error_sending_otp`;
export const OTP_SENT = `${module_key}_otp_sent`;
export const OPEN_WEB_VIEW = `${module_key}_open_webview`;
export const IS_LOADING = `${module_key}_loader`;
export const MOBILE_ERROR = `${module_key}_mobile_error`;
export const TERMS_CONDITION = `${module_key}_terms_condition`;
export const IS_ACTIVE = `${module_key}_is_active`;
export const CHANGE_NUMBER = `${module_key}_change_number`;
export const SCROLL_ENABLED = `${module_key}_scroll_enabled`;

export const setMobileNumber = (data) => ({
  type: SET_MOBILE_NUMBER,
  payload: data,
});

export const sendingOtp = () => ({
  type: SENDING_OTP,
  payload: {},
});

export const errorSendingOtp = (data) => ({
  type: ERROR_SENDING_OTP,
  payload: data,
});

export const otpSent = () => ({
  type: OTP_SENT,
  payload: {},
});

export const openingWebView = (data) => ({
  type: OPEN_WEB_VIEW,
  payload: data,
});

export const toggleLoader = (data) => ({
  type: IS_LOADING,
  payload: data,
});

export const checkMobileError = (data) => ({
  type: MOBILE_ERROR,
  payload: data,
});

export const setTermCondition = (data) => ({
  type: TERMS_CONDITION,
  payload: data,
});

export const activateLogin = (data) => ({
  type: IS_ACTIVE,
  payload: data,
});

export const changeNumber = (data) => ({
  type: CHANGE_NUMBER,
  payload: data,
});

export const setScrollEnabled = (data) => ({
  type: SCROLL_ENABLED,
  payload: data,
});
