import moment from 'moment';
import {
  IS_LOADING,
  GET_AVAILABLE_DATES,
  SET_AVAILABLE_DATES,
  ERROR_GET_AVAILABLE_DATES,
  IS_LOADING_AVAILABLE_DATES,
  ERROR_GET_CURRENT_AFFAIRS_DATA,
  SET_CURRENT_AFFAIRS_DATA,
  GET_CURRENT_AFFAIRS_DATA,
  AUTO_CURRENT_INDEX,
  SET_INITIAL_CURRENT_AFFAIRS_DATA,
  OPEN_PICER,
  CURRENT_DATE,
  CURRENT_PAGE,
  ERROR_CURRENT_AFFAIRS_BOOKMARK,
  CURRENT_AFFAIRS_BOOKMARK_DONE,
  DEFAULT_DATE,
  SET_CURRENT_DATE_INDEX,
  GET_CURRENT_AFFAIRS_DOWNLOAD_DATA,
  SET_CURRENT_AFFAIRS_DOWNLOAD_DATA,
  SET_SELECTED_DATE,
  ERROR_NO_INTERNET,
  OPEN_CURRENT_AFFAIRS_MODAL,
} from './actionCurrentAffairs';

const initialState = {
  currentDate: '',
  currentPage: 0,
  autoCurrentIndex: '',
  manualCurrentIndex: 0,
  isPickerOpen: false,
  availableDates: [],
  currentAffairsData: [],
  isLoading: false,
  isLoadingAvailableDates: false,
  errorMessage: '',
  swipeCurrentIndex: 0,
  currentDateIndex: 0,
  offlineCurrentAffairsData: [],
  selectedDate: '',
  errorData: '',
  noInternet: false,
  openCurrentAffairModal: false,
  currentAffairsContent: [],
};

const reducerCurrentAffairs = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_CURRENT_AFFAIRS_DATA:
      return {
        ...state,
        isLoading: true,
        errorMessage: '',
      };
    case SET_CURRENT_AFFAIRS_DATA:
      return {
        ...state,
        isLoading: false,
        currentAffairsData: payload,
      };

    case SET_INITIAL_CURRENT_AFFAIRS_DATA:
      return {
        ...state,
        isLoading: false,
        currentAffairsData: payload,
      };
    case OPEN_PICER:
      return {
        ...state,
        isPickerOpen: payload,
      };
    case CURRENT_DATE:
      return {
        ...state,
        currentDate: payload,
      };
    case CURRENT_PAGE:
      return {
        ...state,
        currentPage: payload,
      };
    case AUTO_CURRENT_INDEX:
      return {
        ...state,
        autoCurrentIndex: payload,
      };
    case ERROR_GET_CURRENT_AFFAIRS_DATA:
      return {
        ...state,
        isLoading: false,
        errorData: payload,
      };
    case IS_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case GET_AVAILABLE_DATES:
      return {
        ...state,
        isLoadingAvailableDates: true,
        errorMessage: '',
      };
    case SET_AVAILABLE_DATES:
      return {
        ...state,
        availableDates: payload,
      };
    case ERROR_GET_AVAILABLE_DATES:
      return {
        ...state,
        isLoadingAvailableDates: false,
        errorMessage: payload,
      };
    case IS_LOADING_AVAILABLE_DATES:
      return {
        ...state,
        isLoadingAvailableDates: payload,
      };
    case CURRENT_AFFAIRS_BOOKMARK_DONE:
    case ERROR_CURRENT_AFFAIRS_BOOKMARK:
      return {
        ...state,
        isLoading: false,
      };
    case DEFAULT_DATE:
      return {
        ...state,
        currentDateIndex: 0,
      };
    case SET_CURRENT_DATE_INDEX:
      return {
        ...state,
        currentDateIndex: payload,
      };
    case GET_CURRENT_AFFAIRS_DOWNLOAD_DATA:
      return {
        ...state,
        offlineCurrentAffairsData: [],
      };
    case SET_CURRENT_AFFAIRS_DOWNLOAD_DATA:
      return {
        ...state,
        offlineCurrentAffairsData: payload,
        isLoading: false,
      };
    case SET_SELECTED_DATE:
      return {
        ...state,
        selectedDate: (moment(payload, 'DD-MM-YYYY').format('YYYY-MM-DD')),
      };
    case ERROR_NO_INTERNET:
      return {
        ...state,
        noInternet: payload,
      };
    case OPEN_CURRENT_AFFAIRS_MODAL:
      return {
        ...state,
        openCurrentAffairModal: payload?.isOpenModal,
        currentAffairsContent: payload.content,
      };
    default:
      return state;
  }
};
export default reducerCurrentAffairs;
