import {
  SET_TOGGLE_BUTTON,
  VIEW_MORE_TOGGLE_BUTTON,
  CHANGE_BOTTOM_SHEET,
  GOT_TAG_LIST,
  SELECTED_TAG_LIST,
  SET_MULTI_IMAGES,
  CHANGE_SUBJECT_NAME,
  CHANGE_QUESTION,
  GOT_MY_DOUBTS,
  GOT_ALL_DOUBTS,
  FILTER_TAG_LIST,
  CLEAR_TAG_DATA,
  DROPDOWN_ITEM_DATA,
  SHOW_ASK_DOUBT_SUCCESS_MODAL,
  UPLOADED_USER_COMMENT,
  NUMBER_OF_MY_DOUBT_PAGES,
  NUMBER_OF_ALL_DOUBT_PAGES,
  FILTER_MY_DOUBTS,
  FILTER_ALL_DOUBTS,
  FILTERED_MY_DOUBTS,
  FILTERED_ALL_DOUBTS,
  DISABLE_SUBMIT_BUTTON,
  NAVIGATION_FROM_ASK_DOUBT_SCREEN,
  REMOVE_SELECTED_IMAGES,
  OPEN_CONFIRM_MODAL,
  SET_TICKET_ID,
  GETTING_ERROR_ON_DELETE_TICKET,
  OPEN_UNLOCK_SCREEN_MODAL,
  DELETE_TICKET,
  ERROR_FILTERING_MY_DOUBTS,
  ERROR_FILTERING_ALL_DOUBTS,
  UPLOAD_USER_COMMENT,
  ERROR_UPLOADING_USER_COMMENT,
  GET_SEARCH_ALL_DOUBTS,
  ERROR_GETTING_SEARCH_ALL_DOUBTS,
  SET_SEARCH_TERM_ALL_DOUBTS,
  ERROR_GETTING_ALL_DOUBTS,
  ERROR_GETTING_MY_DOUBTS,
  SET_SEARCH_DOUBTS,
  RELOADED_MY_DOUBTS,
  RELOADED_ALL_DOUBTS,
  ERROR_RELOADING_ALL_DOUBTS,
  ERROR_RELOADING_MY_DOUBTS,
  SET_PAGINATION_LOADER,
  OPEN_IMAGE_PERMISSION_SCREEN,
  CLOSE_IMAGE_PERMISSION_SCREEN,
  BOTTOM_SHEET_SEARCH_DATA,
  GOT_SEARCH_DATA,
  CLEAR_DATA_ON_BACK_BUTTON_PRESS,
  OPEN_IMAGE,
  SET_ACTIVE_FEATURE,
  ERROR_CHECKING_ACTIVE_FEATURE,
  SET_TOGGLE_DEFAULT,
} from './actionAskDoubt';

const initialState = {
  isLoading: false,
  isActiveToggleButton: false,
  isViewMoreToggleButton: false,
  bottomSheetStatus: false,
  selectedImages: [],
  tagList: [],
  filterTagList: [],
  selectedTagList: [],
  subject: '',
  userQuestion: '',
  myDoubtsList: [],
  allDoubtsList: [],
  myDoubtPage: 1,
  allDoubtPage: 1,
  dropDownItemData: [],
  showAskDoubtSuccessModal: false,
  disableSubmitButton: false,
  navigationFromAskDoubt: false,
  openModal: false,
  ticketId: '',
  unlockScreenModal: false,
  activityIndicatorState: false,
  searchDoubtText: '',
  searchTerm: '',
  noDataFoundAllDoubts: false,
  noDataFoundMyDoubts: false,
  loader: false,
  imagePermission: false,
  isSearchDone: false,
  data: [],
  openImage: false,
  passActivate: false,
};

const reducerAskDoubt = (state = initialState, { type, payload }) => {
  switch (type) {
    case ERROR_CHECKING_ACTIVE_FEATURE:
      return {
        ...state,
        passActivate: false,
      };
    case SET_TOGGLE_DEFAULT:
      return {
        ...state,
        isActiveToggleButton: false,
      };
    case SET_ACTIVE_FEATURE:
      return {
        ...state,
        passActivate: payload,
      };
    case OPEN_IMAGE:
      return {
        ...state,
        openImage: payload,
      };
    case DELETE_TICKET:
      return {
        ...state,
        isLoading: true,
      };
    case SET_PAGINATION_LOADER:
      return {
        ...state,
        loader: payload,
      };
    case ERROR_UPLOADING_USER_COMMENT:
      return {
        ...state,
        isLoading: false,
        bottomSheetStatus: false,
      };
    case UPLOAD_USER_COMMENT:
      return {
        ...state,
        isLoading: true,
      };
    case SET_TOGGLE_BUTTON:
      return {
        ...state,
        isActiveToggleButton: payload,
        selectedTagList: [],
      };
    case CLEAR_TAG_DATA:
      // console.log('clearing Data');
      return {
        ...state,
        navigationFromAskDoubt: false,
        filterTagList: [],
        selectedTagList: [],
        selectedImages: [],
        myDoubtPage: 1,
        allDoubtPage: 1,
        isActiveToggleButton: true,
        isViewMoreToggleButton: false,
        subject: '',
        userQuestion: '',
      };
    case VIEW_MORE_TOGGLE_BUTTON:
      return {
        ...state,
        isViewMoreToggleButton: payload,
      };
    case CHANGE_BOTTOM_SHEET:
      return {
        ...state,
        bottomSheetStatus: payload,
      };
    case CLEAR_DATA_ON_BACK_BUTTON_PRESS:
      return {
        ...state,
        imagePermission: false,
        selectedTagList: [],
        selectedImages: [],
        subject: '',
        userQuestion: '',
        data: [],
      };
    case SET_MULTI_IMAGES:
      return {
        ...state,
        selectedImages: state.selectedImages.concat(payload),
      };
    case REMOVE_SELECTED_IMAGES:
      return {
        ...state,
        selectedImages: payload,
      };
    case GOT_TAG_LIST:
      return {
        ...state,
        tagList: payload,
      };
    case SELECTED_TAG_LIST:
      return {
        ...state,
        selectedTagList: payload,
      };
    case CHANGE_SUBJECT_NAME:
      return {
        ...state,
        subject: payload,
      };
    case CHANGE_QUESTION:
      return {
        ...state,
        userQuestion: payload,
      };
    case GOT_MY_DOUBTS:
      return {
        ...state,
        myDoubtsList: state.myDoubtsList.concat(payload || []),
        noDataFoundMyDoubts: false,
      };
    case RELOADED_MY_DOUBTS:
      return {
        ...state,
        myDoubtsList: payload,
        noDataFoundMyDoubts: false,
      };
    case GOT_ALL_DOUBTS:
      return {
        ...state,
        allDoubtsList: state.allDoubtsList.concat(payload || []),
        noDataFoundAllDoubts: false,
      };
    case RELOADED_ALL_DOUBTS:
      return {
        ...state,
        allDoubtsList: payload,
        noDataFoundAllDoubts: false,
      };
    case NUMBER_OF_MY_DOUBT_PAGES:
      return {
        ...state,
        myDoubtPage: state.myDoubtPage + 1,
      };
    case NUMBER_OF_ALL_DOUBT_PAGES:
      return {
        ...state,
        allDoubtPage: state.allDoubtPage + 1,
      };
    case FILTER_TAG_LIST:
      return {
        ...state,
        filterTagList: payload,
      };
    case DROPDOWN_ITEM_DATA:
      return {
        ...state,
        dropDownItemData: payload,
      };
    case SHOW_ASK_DOUBT_SUCCESS_MODAL:
      return {
        ...state,
        showAskDoubtSuccessModal: payload,
        subject: '',
        userQuestion: '',
        filterTagList: [],
        selectedImages: [],
      };
    case OPEN_CONFIRM_MODAL:
      return {
        ...state,
        openModal: payload,
        ticketId: '',
        isLoading: false,
      };
    case UPLOADED_USER_COMMENT:
      return {
        ...state,
        isLoading: false,
        showAskDoubtSuccessModal: true,
      };
    case FILTER_MY_DOUBTS:
      return {
        ...state,
        myDoubtsList: [],
        // isLoading: true,
      };
    case ERROR_RELOADING_MY_DOUBTS:
    case ERROR_FILTERING_MY_DOUBTS:
      return {
        ...state,
        myDoubtsList: [],
        // isLoading: false,
        noDataFoundMyDoubts: true,
        activityIndicatorState: false,
      };
    case ERROR_RELOADING_ALL_DOUBTS:
    case ERROR_FILTERING_ALL_DOUBTS:
      return {
        ...state,
        allDoubtsList: [],
        // isLoading: false,
        noDataFoundAllDoubts: true,
        activityIndicatorState: false,
      };
    case FILTER_ALL_DOUBTS:
      return {
        ...state,
        allDoubtsList: [],
        // isLoading: true,
      };
    case FILTERED_MY_DOUBTS:

      return {
        ...state,
        myDoubtsList: payload,
        // isLoading: false,
        noDataFoundMyDoubts: false,
      };
    case FILTERED_ALL_DOUBTS:
      return {
        ...state,
        allDoubtsList: payload,
        // isLoading: false,
        noDataFoundAllDoubts: false,
      };

    case GOT_SEARCH_DATA:
      return {
        ...state,
        isSearchDone: payload,
        loader: true,
      };
    case DISABLE_SUBMIT_BUTTON:
      return {
        ...state,
        disableSubmitButton: payload,
      };
    case NAVIGATION_FROM_ASK_DOUBT_SCREEN:
      return {
        ...state,
        navigationFromAskDoubt: payload,
      };
    case SET_TICKET_ID:
      return {
        ...state,
        ticketId: payload,
        openModal: true,
      };
    case GETTING_ERROR_ON_DELETE_TICKET:
      return {
        ...state,
        openModal: false,
      };
    case OPEN_UNLOCK_SCREEN_MODAL:
      return {
        ...state,
        unlockScreenModal: payload,
      };
    case SET_SEARCH_TERM_ALL_DOUBTS:
      return {
        ...state,
        searchTerm: payload,
      };
    case GET_SEARCH_ALL_DOUBTS:
      return {
        ...state,
        searchData: [],
      };
    case ERROR_GETTING_SEARCH_ALL_DOUBTS:
      return {
        ...state,
        searchData: [],
      };
    case SET_SEARCH_DOUBTS:
      return {
        ...state,
        searchDoubtText: payload,
      };
    case ERROR_GETTING_MY_DOUBTS:
      return {
        ...state,
        noDataFoundMyDoubts: true,
        loader: false,
      };
    case ERROR_GETTING_ALL_DOUBTS:
      return {
        ...state,
        noDataFoundAllDoubts: true,
        loader: false,
      };
    case OPEN_IMAGE_PERMISSION_SCREEN:
      return {
        ...state,
        bottomSheetStatus: false,
        imagePermission: payload,
      };
    case CLOSE_IMAGE_PERMISSION_SCREEN:
      return {
        ...state,
        imagePermission: payload,
        bottomSheetStatus: true,
      };
    case BOTTOM_SHEET_SEARCH_DATA:
      return {
        ...state,
        data: payload,
      };
    default:
      return state;
  }
};

export default reducerAskDoubt;
