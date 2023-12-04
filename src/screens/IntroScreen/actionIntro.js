const module_key = 'intro';
export const SET_AUTH_STATUS = `${module_key}_set_auth_status`;
export const SET_PREVIOUS_SCREEN = `${module_key}_previous_screen`;
export const SET_CURRENT_SCREEN = `${module_key}_current_screen`;
export const GET_LANGUAGES = `${module_key}_get_languages`;
export const ERROR_GETTING_LANGUAGES = `${module_key}_error_getting_languages`;
export const SET_LANGUAGE = `${module_key}_set_language`;
export const IS_LANGUAGE_CHANGED = `${module_key}_is_language_changed`;
export const IS_PERMISSION_ASKED = `${module_key}_is_permission_asked`;
export const GET_FEATURE_LIST = `${module_key}_get_feature_list`;
export const GOT_FEATURE_LIST = `${module_key}_got_feature_list`;
export const ERROR_GETTING_FEATURE_LIST = `${module_key}_error_getting_feature_list`;

export const setAuthStatus = (data) => ({
  type: SET_AUTH_STATUS,
  payload: data,
});

export const setPreviousScreen = (data) => ({
  type: SET_PREVIOUS_SCREEN,
  payload: data,
});

export const setCurrentScreen = (data) => ({
  type: SET_CURRENT_SCREEN,
  payload: data,
});

export const errorGettingLanguage = (data) => ({
  type: ERROR_GETTING_LANGUAGES,
  payload: data,
});

export const getLanguages = () => ({
  type: GET_LANGUAGES,
  payload: {},
});

export const setLanguage = (data) => ({
  type: SET_LANGUAGE,
  payload: data?.data,
});

export const setIsLangChanged = (value) => ({
  type: IS_LANGUAGE_CHANGED,
  payload: value,
});

export const setPermissionAsked = (data) => ({
  type: IS_PERMISSION_ASKED,
  payload: data,
});

export const getFeatureList = () => ({
  type: GET_FEATURE_LIST,
  payload: {},
});

export const gotFeatureList = (data) => ({
  type: GOT_FEATURE_LIST,
  payload: data,
});

export const errorGettingFeatureList = (data) => ({
  type: ERROR_GETTING_FEATURE_LIST,
  payload: data,
});
