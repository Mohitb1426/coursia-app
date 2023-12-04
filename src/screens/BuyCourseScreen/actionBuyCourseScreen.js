const module_key = 'buyCourseScreen';
export const UPDATE_LOADER = `${module_key}_set_loader`;
export const ADD_FREE_COURSE = `${module_key}_add_free_course`;
export const GET_PAYMENT_LINK = `${module_key}_get_payment_link`;
export const GETTING_ERROR_BUY = `${module_key}_getting_error_buy`;
export const UPDATE_USER_PROFILE = `${module_key}_update_user_profile`;
export const GETTING_USER_PROFILE_ERROR = `${module_key}_getting_user_profile_error`;
export const GET_USER_PROFILE = `${module_key}_get_user_profile`;
export const SET_USER_PROFILE = `${module_key}_set_user_profile`;
export const SHOW_USER_FORM = `${module_key}_set_user_form`;
export const FETCHING_USER_FORM = `${module_key}_fetching_user_form`;
export const CHANGE_FORM_DATA = `${module_key}_change_form_data`;
export const USER_PROFILE_DATA_UPDATED = `${module_key}_user_profile_data_updated`;
export const GENERATE_A_PAYMENT_LINK = `${module_key}_generate_a_payment_link`;
export const SET_A_PAYMENT_LINK = `${module_key}_set_a_payment_link`;
export const GENERATE_A_PAYMENT_LINK_FOR_COURSE_UNIT = `${module_key}_generate_a_payment_link_for_course_unit`;
export const SET_MSG_TONE_LINK = `${module_key}_set_msg_tone_link`;
export const IS_DATA_UPDATED = `${module_key}_is_data_updated`;
export const GET_COURSE_UNIT_DATA = `${module_key}_get_course_unit_data`;
export const ERROR_GETTING_COURSE_UNIT_DATA = `${module_key}_error_getting_course_unit_data`;
export const VERIFICATION_PAYMENT = `${module_key}_verification_payment`;
export const SET_DEFAULT_PAYMENT_LINK = `${module_key}_set_a_default_link`;
export const ERROR_VERIFICATION_PAYMENT = `${module_key}_error_verification_payment`;
export const PAYMENT_VERIFICATION_COMPLETED = `${module_key}_payment_verification_completed`;
export const CLOSE_MODAL = `${module_key}_close_modal`;
export const SET_NAVIGATE_TO_BUY_COURSE = `${module_key}_set_navigate_to_enroll_course`;
export const IS_FORM_FILLED = `${module_key}_is_form_filled`;
export const SET_COURSE_TRANSACTION_ID = `${module_key}_set_course_transaction_id`;

export const updateLoader = (data) => ({
  type: UPDATE_LOADER,
  payload: data,
});

export const addFreeCourse = (data) => ({
  type: ADD_FREE_COURSE,
  payload: data,
});

export const getPaymentLink = (data) => ({
  type: GET_PAYMENT_LINK,
  payload: data,
});

export const gettingErrorOnBuy = (data) => ({
  type: GETTING_ERROR_BUY,
  payload: data,
});

export const gettingUserProfileError = (data) => ({
  type: GETTING_USER_PROFILE_ERROR,
  payload: data,
});

export const updateUserProfile = (data) => ({
  type: UPDATE_USER_PROFILE,
  payload: data,
});

export const setUserProfile = (data) => ({
  type: SET_USER_PROFILE,
  payload: data,
});

export const getUserProfile = () => ({
  type: GET_USER_PROFILE,
  payload: {},
});

export const showUserForm = (data) => ({
  type: SHOW_USER_FORM,
  payload: data,
});

export const changeFormData = (data) => ({
  type: CHANGE_FORM_DATA,
  payload: data,
});

export const userProfileUpdated = (data) => ({
  type: USER_PROFILE_DATA_UPDATED,
  payload: data,
});

export const generatePaymentLink = () => ({
  type: GENERATE_A_PAYMENT_LINK,
  payload: {},
});

export const generatePaymentLinkForCourseUnit = () => ({
  type: GENERATE_A_PAYMENT_LINK_FOR_COURSE_UNIT,
  payload: {},
});

export const setPaymentLink = (data) => ({
  type: SET_A_PAYMENT_LINK,
  payload: data,
});

export const setDefaultPaymentLink = () => ({
  type: SET_DEFAULT_PAYMENT_LINK,
  payload: {},
});

export const setMsgToneLink = (data) => ({
  type: SET_MSG_TONE_LINK,
  payload: data,
});

export const setIsDataUpdated = (data) => ({
  type: IS_DATA_UPDATED,
  payload: data,
});

export const getCourseUnitData = () => ({
  type: GET_COURSE_UNIT_DATA,
  payload: {},
});

export const errorGettingCourseUnitData = (data) => ({
  type: ERROR_GETTING_COURSE_UNIT_DATA,
  payload: data,
});

export const setNavigateToBuyCourse = (data) => ({
  type: SET_NAVIGATE_TO_BUY_COURSE,
  payload: data,
});

export const verifyPaymentAction = (data) => ({
  type: VERIFICATION_PAYMENT,
  payload: data,
});

export const errorGettingVerificationLink = (data) => ({
  type: ERROR_VERIFICATION_PAYMENT,
  payload: data,
});
export const paymentVerificationComplete = (data) => ({
  type: PAYMENT_VERIFICATION_COMPLETED,
  payload: data,
});

export const closeModal = () => ({
  type: CLOSE_MODAL,
  payload: {},
});

export const isFormFilled = (data) => ({
  type: IS_FORM_FILLED,
  payload: data,
});

export const setCourseTransactionId = (data) => ({
  type: SET_COURSE_TRANSACTION_ID,
  payload: data,
});
