import {
  SET_USER_PROFILE,
  UPDATE_LOADER,
  SHOW_USER_FORM,
  CHANGE_FORM_DATA,
  USER_PROFILE_DATA_UPDATED,
  SET_A_PAYMENT_LINK,
  GENERATE_A_PAYMENT_LINK_FOR_COURSE_UNIT,
  GENERATE_A_PAYMENT_LINK,
  SET_MSG_TONE_LINK,
  GETTING_ERROR_BUY,
  GETTING_USER_PROFILE_ERROR,
  IS_DATA_UPDATED,
  VERIFICATION_PAYMENT,
  SET_DEFAULT_PAYMENT_LINK,
  PAYMENT_VERIFICATION_COMPLETED,
  ERROR_VERIFICATION_PAYMENT,
  CLOSE_MODAL,
  SET_NAVIGATE_TO_BUY_COURSE,
  IS_FORM_FILLED,
  GET_USER_PROFILE,
  SET_COURSE_TRANSACTION_ID,
} from './actionBuyCourseScreen';

const initialState = {
  isLoading: false,
  showForm: false,
  customerData: {
    firstName: '',
    lastName: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    pincode: '',
    name: '',
    mobile: '',
    email: '',
  },
  isSubmitActive: false,
  msgToneLink: 'https://d1ev28s1srtg0j.cloudfront.net/Race/tone/happy_notification.wav',
  isDataUpdated: false,
  razorPayData: null,
  showCardPaymentSuccess: false,
  showCardPaymentFail: false,
  navigateToBuyCourse: false,
  checkFormFilled: false,
  enrollCourseLoader: false,
  courseTransactionId: '',
};

const reducerBuyCourse = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_COURSE_TRANSACTION_ID:
      return {
        ...state,
        courseTransactionId: payload,
      };
    case IS_FORM_FILLED:
      return {
        ...state,
        checkFormFilled: payload,
      };
    case GET_USER_PROFILE:
      return {
        ...state,
        enrollCourseLoader: true,
      };
    case GENERATE_A_PAYMENT_LINK_FOR_COURSE_UNIT:
      return {
        ...state,
        isLoading: true,
      };
    case GENERATE_A_PAYMENT_LINK:
      return {
        ...state,
        isLoading: true,
      };
    case UPDATE_LOADER:
      return {
        ...state,
        isLoading: payload,
      };
    case SET_USER_PROFILE:
      return {
        ...state,
        customerData: {
          ...state.customerData,
          firstName: payload?.first_middle_name?.trim() || '',
          lastName: payload?.last_name?.trim() || '',
          address1: payload?.address1?.trim() || '',
          address2: payload?.address2?.trim() || '',
          city: payload?.city?.trim() || '',
          state: payload?.state?.trim() || '',
          pincode: payload?.pincode?.trim() || '',
          name: payload?.name?.trim() || '',
          mobile: payload?.mobile?.trim() || '',
          email: payload?.email?.trim() || '',
          code: payload?.code?.trim() || '',
        },
        showForm: true,
        enrollCourseLoader: false,
      };
    case SHOW_USER_FORM:
      return {
        ...state,
        showForm: payload,
      };
    case CHANGE_FORM_DATA:
      return {
        ...state,
        customerData: payload,
      };
    case USER_PROFILE_DATA_UPDATED:
      return {
        ...state,
        isSubmitActive: payload,
      };
    case SET_A_PAYMENT_LINK:
      return {
        ...state,
        razorPayData: payload,
        isLoading: false,
      };
    case SET_DEFAULT_PAYMENT_LINK:
    case VERIFICATION_PAYMENT:
      return {
        ...state,
        razorPayData: null,
        isLoading: false,
      };
    case SET_MSG_TONE_LINK:
      return {
        ...state,
        msgToneLink: payload,
      };
    case GETTING_USER_PROFILE_ERROR:
    case GETTING_ERROR_BUY:
      return {
        ...state,
        isLoading: false,
        showCardPaymentFail: true,
      };
    case PAYMENT_VERIFICATION_COMPLETED:
      return {
        ...state,
        isLoading: false,
        showCardPaymentFail: false,
        showCardPaymentSuccess: true,
      };
    case ERROR_VERIFICATION_PAYMENT:
      return {
        ...state,
        isLoading: false,
        showCardPaymentFail: true,
        showCardPaymentSuccess: false,
      };
    case CLOSE_MODAL:
      return {
        ...state,
        isLoading: false,
        showCardPaymentFail: false,
        showCardPaymentSuccess: false,
      };
    case IS_DATA_UPDATED:
      return {
        ...state,
        isDataUpdated: payload,
      };
    case SET_NAVIGATE_TO_BUY_COURSE:
      return {
        ...state,
        navigateToBuyCourse: payload,
      };
    default:
      return state;
  }
};
export default reducerBuyCourse;
