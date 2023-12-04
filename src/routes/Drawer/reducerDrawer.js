import AsyncKeys from '../../common/AsyncKeys';
import { LANGUAGE_ENGLISH } from '../../common/LocalizationProvider';
import StorageUtils from '../../common/StorageUtils';
import {
  IS_COMING_FROM_DRAWER,
  SET_TOGGLE_BUTTON,
  SET_DRAWER_DATA,
  GET_DRAWER_DATA,
  ERROR_GET_DRAWER_DATA,
  SET_ACTIVE_PASS_DETAILS,
  ERROR_GETTING_USER_PASS_DETAILS,
} from './actionDrawer';

const initialState = {
  isActiveToggleButton:
    StorageUtils.getString(AsyncKeys.ASYNC_KEY_SELECTED_APP_LANGUAGE, LANGUAGE_ENGLISH)
    === LANGUAGE_ENGLISH,
  isComingFromDrawer: false,
  drawerData: JSON.parse(StorageUtils.getString(AsyncKeys.ASYNC_KEY_HAMBURGER_MENU_DATA, '[]')),
  activePassData: {},
};

const reducerDrawer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_ACTIVE_PASS_DETAILS:
      return {
        ...state,
        activePassData: payload,
      };
    case ERROR_GETTING_USER_PASS_DETAILS:
      return {
        ...state,
        activePassData: {},
      };
    case SET_TOGGLE_BUTTON:
      return {
        ...state,
        isActiveToggleButton: payload,
      };
    case IS_COMING_FROM_DRAWER:
      return {
        ...state,
        isComingFromDrawer: payload,
      };
    case GET_DRAWER_DATA:
      return {
        ...state,
      };
    case SET_DRAWER_DATA:
      return {
        ...state,
        drawerData: payload,
      };
    case ERROR_GET_DRAWER_DATA:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default reducerDrawer;
