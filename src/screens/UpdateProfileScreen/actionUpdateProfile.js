const module_key = 'updateProfileScreen';

export const UPDATE_USER_PROFILE = `${module_key}_update_user_profile`;
export const GETTING_USER_PROFILE_ERROR = `${module_key}_getting_user_profile_error`;
export const GET_USER_PROFILE = `${module_key}_get_user_profile`;
export const SET_USER_PROFILE = `${module_key}_set_user_profile`;
export const SHOW_USER_FORM = `${module_key}_set_user_form`;
export const CHANGE_FORM_DATA = `${module_key}_change_form_data`;
export const PROFILE_UPDATED = `${module_key}_profile_updated`;
export const UPDATE_PROFILE = `${module_key}_update_profile`;
export const GET_USER_PROFILE_FROM_ASK_DOUBT = `${module_key}_get_user_profile_from_ask_doubt`;
export const SET_USER_PROFILE_FROM_ASK_DOUBT = `${module_key}_set_user_profile_from_ask_doubt`;
export const GET_USER_PROFILE_FROM_COMMENT_QUIZ = `${module_key}_get_user_profile_from_comment_quiz`;
export const SET_USER_PROFILE_FROM_COMMENT_QUIZ = `${module_key}_set_user_profile_from_comment_quiz`;
export const TOGGLE_PROFILE_GENDER = `${module_key}_toggle_profile_gender`;
export const GET_PROFILE_IMAGE = `${module_key}_get_profile_image`;
export const SET_PROFILE_IMAGE = `${module_key}_set_profile_image`;

export const gettingUserProfileError = (data) => ({
  type: GETTING_USER_PROFILE_ERROR,
  payload: data,
});

export const updateUserProfile = (data) => ({
  type: UPDATE_USER_PROFILE,
  payload: data,
});

export const setProfileGender = (data) => ({
  type: TOGGLE_PROFILE_GENDER,
  payload: data,
});

export const setUserProfile = (data) => ({
  type: SET_USER_PROFILE,
  payload: data,
});

export const getUserProfile = (data) => ({
  type: GET_USER_PROFILE,
  payload: data,
});

export const showUserForm = (data) => ({
  type: SHOW_USER_FORM,
  payload: data,
});

export const changeFormData = (data) => ({
  type: CHANGE_FORM_DATA,
  payload: data,
});

export const setProfileUpdated = (data) => ({
  type: PROFILE_UPDATED,
  payload: data,
});

export const updateProfile = (data) => ({
  type: UPDATE_PROFILE,
  payload: data,
});

export const getUserProfileFromAskDoubt = (data) => ({
  type: GET_USER_PROFILE_FROM_ASK_DOUBT,
  payload: data,
});

export const setUserProfileFromAskDoubt = (data) => ({
  type: SET_USER_PROFILE_FROM_ASK_DOUBT,
  payload: data,
});
export const getUserProfileFromCommentQuiz = (data) => ({
  type: GET_USER_PROFILE_FROM_COMMENT_QUIZ,
  payload: data,
});

export const setUserProfileFromCommentQuiz = (data) => ({
  type: SET_USER_PROFILE_FROM_COMMENT_QUIZ,
  payload: data,
});

export const getProfileImage = (data) => ({
  type: GET_PROFILE_IMAGE,
  payload: data,
});

export const setProfileImage = (data) => ({
  type: SET_PROFILE_IMAGE,
  payload: data,
});
