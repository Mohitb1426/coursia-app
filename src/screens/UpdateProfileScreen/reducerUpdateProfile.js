import {
  SET_USER_PROFILE,
  SHOW_USER_FORM,
  CHANGE_FORM_DATA,
  GET_USER_PROFILE,
  PROFILE_UPDATED,
  SET_USER_PROFILE_FROM_ASK_DOUBT,
  SET_USER_PROFILE_FROM_COMMENT_QUIZ,
  TOGGLE_PROFILE_GENDER,
  GETTING_USER_PROFILE_ERROR,
  GET_PROFILE_IMAGE,
  SET_PROFILE_IMAGE,
} from './actionUpdateProfile';

const initialState = {
  isProfileGenderSelected: false,
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
    id: '',
    image_url: '',
  },
  profileUpdated: false,
};

const reducerUpdateProfile = (state = initialState, { type, payload }) => {
  switch (type) {
    case GETTING_USER_PROFILE_ERROR:
      return {
        ...state,
        isLoading: false,
      };
    case GET_USER_PROFILE:
      return {
        ...state,
        isLoading: true,
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
          id: payload?.id || '',
          image_url: payload?.image_url || '',
        },
        showForm: true,
        isLoading: false,
      };
    case SET_USER_PROFILE_FROM_ASK_DOUBT:
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
          id: payload?.id || '',
        },
        showForm: false,
        isLoading: false,
      };
    case SET_USER_PROFILE_FROM_COMMENT_QUIZ:
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
          id: payload?.id || '',
        },
        showForm: false,
        isLoading: false,
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
    case PROFILE_UPDATED:
      return {
        ...state,
        profileUpdated: payload,
      };
    case TOGGLE_PROFILE_GENDER:
      return {
        ...state,
        isProfileGenderSelected: payload,
      };
    case GET_PROFILE_IMAGE:
      return {
        ...state,
        isLoading: true,
      };
    case SET_PROFILE_IMAGE:
      return {
        ...state,
        customerData: {
          ...state.customerData,
          image_url: payload?.trim() || '',
        },
        isLoading: false,
      };
    default:
      return state;
  }
};
export default reducerUpdateProfile;
