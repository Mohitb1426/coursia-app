const module_key = 'drawer';

export const SET_TOGGLE_BUTTON = `${module_key}_toggle_button`;
export const IS_COMING_FROM_DRAWER = `${module_key}_is_coming_from_drawer`;
export const GET_DRAWER_DATA = `${module_key}_get_drawer_data`;
export const ERROR_GET_DRAWER_DATA = `${module_key}_error_get_drawer_data`;
export const SET_DRAWER_DATA = `${module_key}_set_drawer_data`;
export const GET_ACTIVE_PASS_DETAILS = `${module_key}_get_active_pass_details`;
export const SET_ACTIVE_PASS_DETAILS = `${module_key}_set_active_pass_details`;
export const ERROR_GETTING_USER_PASS_DETAILS = `${module_key}_error_getting_user_pass_details`;

export const setActiveToggleButton = (data) => ({
  type: SET_TOGGLE_BUTTON,
  payload: data,
});

export const setIsComingFromDrawer = (data) => ({
  type: IS_COMING_FROM_DRAWER,
  payload: data,
});
export const errorGettingDrawerData = (data) => ({
  type: ERROR_GET_DRAWER_DATA,
  payload: data,
});

export const getDrawerData = () => ({
  type: GET_DRAWER_DATA,
  payload: {},
});

export const setDrawerData = (data) => ({
  type: SET_DRAWER_DATA,
  payload: data?.data,
});

export const getActivePassDetails = () => ({
  type: GET_ACTIVE_PASS_DETAILS,
  payload: {},
});

export const setActivePassDetails = (data) => ({
  type: SET_ACTIVE_PASS_DETAILS,
  payload: data,
});

export const errorGettingUserPassDetails = (data) => ({
  type: ERROR_GETTING_USER_PASS_DETAILS,
  payload: data,
});
