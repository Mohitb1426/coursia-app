const module_key = 'askDoubt';

export const SET_TOGGLE_BUTTON = `${module_key}_toggle_button`;
export const SET_TOGGLE_DEFAULT = `${module_key}_set_toggle_default`;
export const VIEW_MORE_TOGGLE_BUTTON = `${module_key}_view_more_toggle-button`;
export const CHANGE_BOTTOM_SHEET = `${module_key}_change_bottom_sheet`;
export const SET_MULTI_IMAGES = `${module_key}_set_multi_images`;
export const GET_TAG_LIST = `${module_key}_get_tag_list`;
export const GOT_TAG_LIST = `${module_key}_got_tag_list`;
export const GETTING_ERROR_TAG_LIST = `${module_key}_getting_error_tag_list`;
export const SELECTED_TAG_LIST = `${module_key}_selected_tag_list`;
export const UPLOAD_USER_COMMENT = `${module_key}_upload_user_comment`;
export const UPLOADED_USER_COMMENT = `${module_key}_uploaded_user_comment`;
export const ERROR_UPLOADING_USER_COMMENT = `${module_key}_error_uploading_user_comment`;
export const CHANGE_SUBJECT_NAME = `${module_key}_change_subject_name`;
export const CHANGE_QUESTION = `${module_key}_change_question`;
export const GET_MY_DOUBTS = `${module_key}_get_my_doubts`;
export const GOT_MY_DOUBTS = `${module_key}_got_my_doubts`;
export const ERROR_GETTING_MY_DOUBTS = `${module_key}_error_getting_my_doubts`;
export const GET_ALL_DOUBTS = `${module_key}_get_all_doubts`;
export const GOT_ALL_DOUBTS = `${module_key}_got_all_doubts`;
export const ERROR_GETTING_ALL_DOUBTS = `${module_key}_error_getting_all_doubts`;
export const NUMBER_OF_MY_DOUBT_PAGES = `${module_key}_number_of_my_doubt_pages`;
export const NUMBER_OF_ALL_DOUBT_PAGES = `${module_key}_number_of_all_doubt_pages`;
export const FILTER_TAG_LIST = `${module_key}_filter_tag_list`;
export const CLEAR_TAG_DATA = `${module_key}_clear_tag_data`;
export const DROPDOWN_ITEM_DATA = `${module_key}_dropdown_item_data`;
export const SHOW_ASK_DOUBT_SUCCESS_MODAL = `${module_key}_show_ask_doubt_success_modal`;
export const FILTER_MY_DOUBTS = `${module_key}_filter_my_doubts`;
export const FILTERED_MY_DOUBTS = `${module_key}_filtered_my_doubts`;
export const FILTER_ALL_DOUBTS = `${module_key}_filter_all_doubts`;
export const FILTERED_ALL_DOUBTS = `${module_key}_filtered_all_doubts`;
export const DISABLE_SUBMIT_BUTTON = `${module_key}_disable_submit_button`;
export const NAVIGATION_FROM_ASK_DOUBT_SCREEN = `${module_key}_navigation_from_ask_doubt_screen`;
export const REMOVE_SELECTED_IMAGES = `${module_key}_remove_selected_images`;
export const DELETE_TICKET = `${module_key}_delete_ticket`;
export const GETTING_ERROR_ON_DELETE_TICKET = `${module_key}_getting_error_on_delete_ticket`;
export const OPEN_CONFIRM_MODAL = `${module_key}_open_confirm_modal`;
export const SET_TICKET_ID = `${module_key}_set_ticket_id`;
export const OPEN_UNLOCK_SCREEN_MODAL = `${module_key}_open_unlock_screen_modal`;
export const ERROR_FILTERING_MY_DOUBTS = `${module_key}_error_filtering_my_doubts`;
export const ERROR_FILTERING_ALL_DOUBTS = `${module_key}_error_filtering_all_doubts`;
export const GET_SEARCH_ALL_DOUBTS = `${module_key}_get_all_search`;
export const GET_SEARCH_MY_DOUBTS = `${module_key}_get_my_search`;
export const SET_SEARCH_DOUBTS = `${module_key}_set_search`;
export const SET_SEARCH_TERM_ALL_DOUBTS = `${module_key}_set_search_term`;
export const ERROR_GETTING_SEARCH_ALL_DOUBTS = `${module_key}_error_getting_search`;
export const RELOAD_MY_DOUBTS = `${module_key}_reload_my_doubts`;
export const RELOADED_MY_DOUBTS = `${module_key}_reloaded_my_doubts`;
export const ERROR_RELOADING_MY_DOUBTS = `${module_key}_error_reloading_my_doubts`;
export const RELOAD_ALL_DOUBTS = `${module_key}_reload_all_doubts`;
export const RELOADED_ALL_DOUBTS = `${module_key}_reloaded_all_doubts`;
export const ERROR_RELOADING_ALL_DOUBTS = `${module_key}_error_reloading_all_doubts`;
export const SET_PAGINATION_LOADER = `${module_key}_off)pagination_loader`;
export const OPEN_IMAGE_PERMISSION_SCREEN = `${module_key}_open_image_permission_screen`;
export const CLOSE_IMAGE_PERMISSION_SCREEN = `${module_key}_close_image_permission_screen`;
export const BOTTOM_SHEET_SEARCH_DATA = `${module_key}_bottom_sheet_search_data`;
export const GOT_SEARCH_DATA = `${module_key}_got_search_data`;
export const CLEAR_DATA_ON_BACK_BUTTON_PRESS = `${module_key}_clear_data_on_back_button_press`;
export const OPEN_IMAGE = `${module_key}_open_image`;
export const CHECK_ACTIVE_FEATURE = `${module_key}_check_active_feature`;
export const SET_ACTIVE_FEATURE = `${module_key}_set_active_feature`;
export const ERROR_CHECKING_ACTIVE_FEATURE = `${module_key}_error_checking_active_feature`;

export const setActiveToggleButton = (data) => ({
  type: SET_TOGGLE_BUTTON,
  payload: data,
});

export const setDefault = () => ({
  type: SET_TOGGLE_DEFAULT,
  payload: {},
});
export const setPaginationLoader = (data) => ({
  type: SET_PAGINATION_LOADER,
  payload: data,
});
export const changeBottomSheetStatus = (data) => ({
  type: CHANGE_BOTTOM_SHEET,
  payload: data,
});
export const setMultiImages = (data) => ({
  type: SET_MULTI_IMAGES,
  payload: data,
});
export const getTagList = () => ({
  type: GET_TAG_LIST,
  payload: {},
});
export const gotTagList = (data) => ({
  type: GOT_TAG_LIST,
  payload: data,
});
export const gettingErrorTagList = (data) => ({
  type: GETTING_ERROR_TAG_LIST,
  payload: data,
});
export const setSelectedTagList = (data) => ({
  type: SELECTED_TAG_LIST,
  payload: data,
});
export const uploadUserComment = () => ({
  type: UPLOAD_USER_COMMENT,
  payload: {},
});
export const uploadedUserComment = (data) => ({
  type: UPLOADED_USER_COMMENT,
  payload: data,
});
export const errorUploadingUserComment = (data) => ({
  type: ERROR_UPLOADING_USER_COMMENT,
  payload: data,
});
export const changeSubjectText = (data) => ({
  type: CHANGE_SUBJECT_NAME,
  payload: data,
});
export const changeQuestionText = (data) => ({
  type: CHANGE_QUESTION,
  payload: data,
});

export const getMyDoubts = () => ({
  type: GET_MY_DOUBTS,
  payload: {},
});

export const reloadMyDoubts = () => ({
  type: RELOAD_MY_DOUBTS,
  payload: {},
});

export const reloadedMyDoubts = (data) => ({
  type: RELOADED_MY_DOUBTS,
  payload: data,
});

export const gotMyDoubts = (data) => ({
  type: GOT_MY_DOUBTS,
  payload: data,
});

export const errorGettingMyDoubts = (data) => ({
  type: ERROR_GETTING_MY_DOUBTS,
  payload: data,
});

export const errorReloadingMyDoubts = (data) => ({
  type: ERROR_RELOADING_MY_DOUBTS,
  payload: data,
});

export const errorGettingFilteredMyDoubts = (data) => ({
  type: ERROR_FILTERING_MY_DOUBTS,
  payload: data,
});

export const errorGettingFilteredAllDoubts = (data) => ({
  type: ERROR_FILTERING_ALL_DOUBTS,
  payload: data,
});

export const getAllDoubts = () => ({
  type: GET_ALL_DOUBTS,
  payload: {},
});

export const reloadAllDoubts = () => ({
  type: RELOAD_ALL_DOUBTS,
  payload: {},
});
export const reloadedAllDoubts = (data) => ({
  type: RELOADED_ALL_DOUBTS,
  payload: data,
});

export const gotAllDoubts = (data) => ({
  type: GOT_ALL_DOUBTS,
  payload: data,
});

export const errorGettingAllDoubts = (data) => ({
  type: ERROR_GETTING_ALL_DOUBTS,
  payload: data,
});

export const errorReloadingAllDoubts = (data) => ({
  type: ERROR_RELOADING_ALL_DOUBTS,
  payload: data,
});

export const setViewMoreToggleButton = (data) => ({
  type: VIEW_MORE_TOGGLE_BUTTON,
  payload: data,
});

export const numberOfMyDoubtPages = (data) => ({
  type: NUMBER_OF_MY_DOUBT_PAGES,
  payload: data,
});

export const numberOfAllDoubtPages = (data) => ({
  type: NUMBER_OF_ALL_DOUBT_PAGES,
  payload: data,
});

export const setFilterTagList = (data) => ({
  type: FILTER_TAG_LIST,
  payload: data,
});

export const clearTagData = (data) => ({
  type: CLEAR_TAG_DATA,
  payload: data,
});

export const setDropDownItemData = (data) => ({
  type: DROPDOWN_ITEM_DATA,
  payload: data,
});

export const openAskDoubtSuccessModal = (data) => ({
  type: SHOW_ASK_DOUBT_SUCCESS_MODAL,
  payload: data,
});

export const openConfirmModal = (data) => ({
  type: OPEN_CONFIRM_MODAL,
  payload: data,
});

export const filterMyDoubts = (data) => ({
  type: FILTER_MY_DOUBTS,
  payload: data,
});

export const setFilterMyDoubts = (data) => ({
  type: FILTERED_MY_DOUBTS,
  payload: data,
});

export const filterAllDoubts = (data) => ({
  type: FILTER_ALL_DOUBTS,
  payload: data,
});

export const setFilterAllDoubts = (data) => ({
  type: FILTERED_ALL_DOUBTS,
  payload: data,
});

export const gotSearchData = (data) => ({
  type: GOT_SEARCH_DATA,
  payload: data,
});

export const setActiveSubmitButton = (data) => ({
  type: DISABLE_SUBMIT_BUTTON,
  payload: data,
});

export const fromAskDoubtScreen = (data) => ({
  type: NAVIGATION_FROM_ASK_DOUBT_SCREEN,
  payload: data,
});

export const removeSelectedImages = (data) => ({
  type: REMOVE_SELECTED_IMAGES,
  payload: data,
});

export const deleteTicket = (data) => ({
  type: DELETE_TICKET,
  payload: data,
});

export const gettingErrorOnDeleteTicket = (data) => ({
  type: GETTING_ERROR_ON_DELETE_TICKET,
  payload: data,
});

export const setTicketId = (data) => ({
  type: SET_TICKET_ID,
  payload: data,
});

export const openUnlockScreenModal = (data) => ({
  type: OPEN_UNLOCK_SCREEN_MODAL,
  payload: data,
});

export const getSearchMyDoubts = () => ({
  type: GET_SEARCH_MY_DOUBTS,
  payload: {},
});

export const getSearchAllDoubts = () => ({
  type: GET_SEARCH_ALL_DOUBTS,
  payload: {},
});

export const setSearchDoubtsText = (data) => ({
  type: SET_SEARCH_DOUBTS,
  payload: data,
});

export const setSearchTerm = (data) => ({
  type: SET_SEARCH_TERM_ALL_DOUBTS,
  payload: data,
});

export const errorGetSearch = (data) => ({
  type: ERROR_GETTING_SEARCH_ALL_DOUBTS,
  payload: data,
});

export const openImagePermissionModal = (data) => ({
  type: OPEN_IMAGE_PERMISSION_SCREEN,
  payload: data,
});

export const closeImagePermissionModal = (data) => ({
  type: CLOSE_IMAGE_PERMISSION_SCREEN,
  payload: data,
});

export const setBottomSheetSearchData = (data) => ({
  type: BOTTOM_SHEET_SEARCH_DATA,
  payload: data,
});

export const clearDataOnBackButtonPress = () => ({
  type: CLEAR_DATA_ON_BACK_BUTTON_PRESS,
  payload: {},
});

export const isOpenImage = (data) => ({
  type: OPEN_IMAGE,
  payload: data,
});

export const checkActiveFeature = () => ({
  type: CHECK_ACTIVE_FEATURE,
  payload: {},
});

export const setActiveFeature = (data) => ({
  type: SET_ACTIVE_FEATURE,
  payload: data,
});

export const errorCheckingActiveFeature = (data) => ({
  type: ERROR_CHECKING_ACTIVE_FEATURE,
  payload: data,
});
