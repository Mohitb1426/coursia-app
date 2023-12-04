const module_key = 'CURRENT_AFFAIRS';
export const GET_CURRENT_AFFAIRS_DATA = `${module_key}_get_current_affairs`;
export const SET_CURRENT_AFFAIRS_DATA = `${module_key}_set_current_affairs`;
export const SET_INITIAL_CURRENT_AFFAIRS_DATA = `${module_key}_set_initial_current_affairs`;
export const ERROR_GET_CURRENT_AFFAIRS_DATA = `${module_key}_error_get_current_affairs`;
export const IS_LOADING = `${module_key}_is_loading`;
export const GET_AVAILABLE_DATES = `${module_key}_get_available_dates`;
export const SET_AVAILABLE_DATES = `${module_key}_set_available_dates`;
export const ERROR_GET_AVAILABLE_DATES = `${module_key}_error_get_available_dates`;
export const IS_LOADING_AVAILABLE_DATES = `${module_key}_is_loading_available_dates`;
export const AUTO_CURRENT_INDEX = `${module_key}_auto_current_index`;
export const MANUAL_CURRENT_INDEX = `${module_key}_manual_current_index`;
export const OPEN_PICER = `${module_key}_set_open_picker`;
export const CURRENT_DATE = `${module_key}_set_current_date`;
export const CURRENT_PAGE = `${module_key}_set_current_page`;
export const SET_CURRENT_AFFAIRS_BOOKMARK = `${module_key}_set_current_affairs_bookmark`;
export const ERROR_CURRENT_AFFAIRS_BOOKMARK = `${module_key}_error_current_affairs_bookmark`;
export const CURRENT_AFFAIRS_BOOKMARK_DONE = `${module_key}_current_affairs_bookmark_done`;
export const IS_SWIPE_LEFT = `${module_key}_is_swipe_left`;
export const IS_SWIPE_RIGHT = `${module_key}_is_swipe_right`;
export const DEFAULT_DATE = `${module_key}_default_date`;
export const SET_CURRENT_DATE_INDEX = `${module_key}_set_current_date_index`;
export const GET_CURRENT_AFFAIRS_DOWNLOAD_DATA = `${module_key}_get_current_affairs_download_data`;
export const SET_CURRENT_AFFAIRS_DOWNLOAD_DATA = `${module_key}_set_current_affairs_download_data`;
export const SET_SELECTED_DATE = `${module_key}_set_selected_date`;
export const ERROR_NO_INTERNET = `${module_key}_error_no_internet`;
export const REMOVE_CURRENT_AFFAIRS_BOOKMARK = `${module_key}_remove_current_affairs_bookmark`;
export const ADDED_CURRENT_AFFAIRS_BOOKMARK = `${module_key}_added_current_affairs_bookmark`;
export const OPEN_CURRENT_AFFAIRS_MODAL = `${module_key}_open_current_affairs_modal`;

export const getCurrentAffairsData = (data) => ({
  type: GET_CURRENT_AFFAIRS_DATA,
  payload: data,
});
export const setAutoCurrentIndex = (data) => ({
  type: AUTO_CURRENT_INDEX,
  payload: data,
});

export const setCurrentDate = (data) => ({
  type: CURRENT_DATE,
  payload: data,
});
export const setCurrentPage = (data) => ({
  type: CURRENT_PAGE,
  payload: data,
});

export const setManualCurrentIndex = (data) => ({
  type: AUTO_CURRENT_INDEX,
  payload: data,
});

export const setCurrentAffairsData = (data) => ({
  type: SET_CURRENT_AFFAIRS_DATA,
  payload: data,
});

export const setOpenPicker = (data) => ({
  type: OPEN_PICER,
  payload: data,
});

export const setInitialCurrentAffairData = (data) => ({
  type: SET_INITIAL_CURRENT_AFFAIRS_DATA,
  payload: data,
});

export const errorCurrentAffairsData = (data) => ({
  type: ERROR_GET_CURRENT_AFFAIRS_DATA,
  payload: data,
});

export const setIsLoading = (value) => ({
  type: IS_LOADING,
  payload: value,
});

export const getAvailableDatesData = (data) => ({
  type: GET_AVAILABLE_DATES,
  payload: data,
});

export const setAvailableDatesData = (data) => ({
  type: SET_AVAILABLE_DATES,
  payload: data,
});

export const errorAvailableDatessData = (data) => ({
  type: ERROR_GET_AVAILABLE_DATES,
  payload: data,
});

export const setIsLoadingAvailableDates = (value) => ({
  type: IS_LOADING_AVAILABLE_DATES,
  payload: value,
});

export const setCurrentAffairsBookmark = (data) => ({
  type: SET_CURRENT_AFFAIRS_BOOKMARK,
  payload: data,
});

export const errorCurrentAffairsBookmark = (data) => ({
  type: ERROR_CURRENT_AFFAIRS_BOOKMARK,
  payload: data,
});

export const currentAffairsBookmarkDone = (data) => ({
  type: CURRENT_AFFAIRS_BOOKMARK_DONE,
  payload: data,
});

export const setDefaultDate = (data) => ({
  type: DEFAULT_DATE,
  payload: data,
});
export const setCurrentDateIndex = (data) => ({
  type: SET_CURRENT_DATE_INDEX,
  payload: data,
});

export const getCurrentAffairsDownloadData = (data) => ({
  type: GET_CURRENT_AFFAIRS_DOWNLOAD_DATA,
  payload: data,
});

export const setCurrentAffairsDownloadData = (data) => ({
  type: SET_CURRENT_AFFAIRS_DOWNLOAD_DATA,
  payload: data,
});

export const setSelectedDate = (data) => ({
  type: SET_SELECTED_DATE,
  payload: data,
});

export const errorNoInternet = (data) => ({
  type: ERROR_NO_INTERNET,
  payload: data,
});

export const removeCurrentAffairBookmark = (data) => ({
  type: REMOVE_CURRENT_AFFAIRS_BOOKMARK,
  payload: data,
});

export const addedCurrentAffairBookmark = (data) => ({
  type: ADDED_CURRENT_AFFAIRS_BOOKMARK,
  payload: data,
});

export const openCurrentAffairsModal = (data) => ({
  type: OPEN_CURRENT_AFFAIRS_MODAL,
  payload: data,
});
