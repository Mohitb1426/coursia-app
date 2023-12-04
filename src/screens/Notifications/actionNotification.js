const module_key = 'notifications';
export const SET_NOTIFICATION_TAB_INDEX = `${module_key}_set_notification_tab_index`;
export const IS_LOADING = `${module_key}_is_loading`;
export const GET_NOTIFICATIONS = `${module_key}_get_notifications`;
export const ERROR_GETTING_NOTIFICATIONS = `${module_key}_error_getting_notifications`;
export const SET_NOTIFICATIONS = `${module_key}_set_notifications`;
export const SAVE_OS_TOKEN = `${module_key}_save_os_token`;
export const ERROR_SAVE_OS_TOKEN = `${module_key}_error_save_os_token`;
export const SAVED_OS_TOKEN = `${module_key}_saved_os_token`;
export const DELETE_NOTIFICATION = `${module_key}_delete_notification`;
export const ERROR_DELETE_NOTIFICATION = `${module_key}_error_delete_notification`;
export const DELETED_NOTIFICATION = `${module_key}_deleted_notification`;
export const MARK_AS_READ_NOTIFICATION = `${module_key}_mark_as_read_notification`;
export const ERROR_MARK_AS_READ_NOTIFICATION = `${module_key}_error_mark_as_read_notification`;
export const MARKED_AS_READ_NOTIFICATION = `${module_key}_marked_as_read_notification`;

export const SET_NOTIFICATION_COUNT = `${module_key}_set_notification_count`;
export const setNotificationTabIndex = (index) => ({
  type: SET_NOTIFICATION_TAB_INDEX,
  payload: index,
});

export const setNotificationCount = (count) => ({
  type: SET_NOTIFICATION_COUNT,
  payload: count,
});

export const setIsLoading = (value) => ({
  type: IS_LOADING,
  payload: value,
});
export const errorGettingNotifications = () => ({
  type: ERROR_GETTING_NOTIFICATIONS,
  payload: [],
});

export const getNotifications = () => ({
  type: GET_NOTIFICATIONS,
  payload: {},
});

export const setNotifications = (data) => ({
  type: SET_NOTIFICATIONS,
  payload: data?.data,
});
export const saveOSToken = () => ({
  type: SAVE_OS_TOKEN,
  payload: {},
});

export const errorsavingOsToken = (data) => ({
  type: ERROR_SAVE_OS_TOKEN,
  payload: data,
});

export const oSTokenSaved = () => ({
  type: SAVED_OS_TOKEN,
  payload: {},
});

export const deleteNotification = (id) => ({
  type: DELETE_NOTIFICATION,
  payload: id,
});

export const errorDeleteNotification = (data) => ({
  type: ERROR_DELETE_NOTIFICATION,
  payload: data,
});

export const deletedNotification = () => ({
  type: DELETED_NOTIFICATION,
  payload: {},
});

export const markAsReadNotification = (data) => ({
  type: MARK_AS_READ_NOTIFICATION,
  payload: data,
});

export const errorMarkAsReadNotification = (data) => ({
  type: ERROR_MARK_AS_READ_NOTIFICATION,
  payload: data,
});

export const markedAsReadNotification = () => ({
  type: MARKED_AS_READ_NOTIFICATION,
  payload: {},
});
