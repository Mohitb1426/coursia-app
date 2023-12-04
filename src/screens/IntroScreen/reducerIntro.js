import {
  SET_AUTH_STATUS,
  SET_PREVIOUS_SCREEN,
  SET_LANGUAGE,
  GET_LANGUAGES,
  ERROR_GETTING_LANGUAGES,
  IS_LANGUAGE_CHANGED,
  IS_PERMISSION_ASKED,
  GOT_FEATURE_LIST,
  SET_CURRENT_SCREEN,
} from './actionIntro';

const initialState = {
  isSignedIn: false,
  previousRouteName: '',
  currentRouteName: '',
  languageData: undefined,
  languageError: '',
  isLanguageChanged: false,
  isPermissionAsked: false,
  featureListData: {},
};

const reducerIntro = (state = initialState, { type, payload }) => {
  switch (type) {
    case GOT_FEATURE_LIST:
      return {
        ...state,
        featureListData: payload,
      };
    case SET_AUTH_STATUS:
      return {
        ...state,
        isSignedIn: payload,
      };
    case SET_PREVIOUS_SCREEN:
      return {
        ...state,
        previousRouteName: payload,
      };
    case SET_CURRENT_SCREEN:
      return {
        ...state,
        currentRouteName: payload,
      };
    case GET_LANGUAGES:
      return {
        ...state,
        languageData: {},
      };
    case SET_LANGUAGE:
      return {
        ...state,
        languageData: payload,
      };
    case ERROR_GETTING_LANGUAGES:
      return {
        ...state,
        languageError: payload,
      };
    case IS_LANGUAGE_CHANGED:
      return {
        ...state,
        isLanguageChanged: payload,
      };
    case IS_PERMISSION_ASKED:
      return {
        ...state,
        isPermissionAsked: payload,
      };
    default:
      return state;
  }
};
export default reducerIntro;
