import {
  SET_IS_LOADING,
  GET_SEARCH,
  ERROR_GETTING_SEARCH,
  SET_SEARCH,
  SET_SEARCH_TERM,
  GET_STORY_CAROUSEL_DATA,
  SET_CAROUSEL_DATA,
  SET_STORY_DATA,
  ERROR_GETTING_STORY_CAROUSEL_DATA,
  ERROR_GETTING_STORY_DATA,
  ERROR_GETTING_CAROUSEL_DATA,
  READ_STORY_SUCCESS,
  ERROR_READ_STORY,
  SET_MIDDLE_MENU,
  ERROR_GETTING_MENU,
  NO_DATA_FOUND,
  SET_SEARCH_LOADING,
  GET_HOME_SCREEN_COMPONENT_ORDER,
  SET_HOME_SCREEN_COMPONENT_ORDER,
  ERROR_HOME_SCREEN_COMPONENT_ORDER,
  GET_HOME_SCREEN_BANNERS,
  SET_HOME_SCREEN_BANNERS_DATA,
  ERROR_GET_HOME_SCREEN_BANNERS,
} from './actionHome';

const initialState = {
  isLoading: false,
  searchData: [],
  searchTerm: '',
  carouselData: [],
  storyData: [],
  isCarouselLoading: false,
  isStoryLoading: false,
  modulesData: [],
  showNoData: false,
  searchLoading: false,
  isScreenLoading: true,
  homeScreenComponentOrder: [],
  homeScreenComponentError: false,
  middleBannersData: [],
  webinarBannersData: [],
  referBannersData: [],

};

const reducerHome = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_IS_LOADING:
      return {
        ...state,
        isLoading: payload,
      };
    case SET_SEARCH_LOADING:
      return {
        ...state,
        searchLoading: payload,
      };

    case SET_SEARCH_TERM:
      return {
        ...state,
        searchTerm: payload,
      };
    case GET_SEARCH:
      return {
        ...state,
        searchLoading: true,
        showNoData: false,
        searchData: [],
      };
    case ERROR_GETTING_SEARCH:
      return {
        ...state,
        searchLoading: false,
        showNoData: true,
        searchData: [],
      };
    case SET_SEARCH:
      return {
        ...state,
        searchLoading: false,
        searchData: payload,
      };
    case NO_DATA_FOUND:
      return {
        ...state,
        showNoData: payload,
      };
    case GET_STORY_CAROUSEL_DATA:
      return {
        ...state,
        isCarouselLoading: payload === 'all' ? true : payload === 2,
        isStoryLoading: payload === 'all' ? true : payload === 1,
      };
    case SET_CAROUSEL_DATA:
      return {
        ...state,
        isCarouselLoading: false,
        carouselData: [...payload],
      };
    case SET_STORY_DATA:
      return {
        ...state,
        isStoryLoading: false,
        storyData: [...payload],
      };
    case ERROR_GETTING_CAROUSEL_DATA:
      return {
        ...state,
        isCarouselLoading: false,
        carouselData: [],
      };
    case ERROR_GETTING_STORY_DATA:
      return {
        ...state,
        isStoryLoading: false,
        storyData: [],
      };
    case ERROR_GETTING_STORY_CAROUSEL_DATA:
      return {
        ...state,
        isCarouselLoading: false,
        isStoryLoading: false,
        carouselData: [],
        storyData: [],
      };
    case READ_STORY_SUCCESS:
      return {
        ...state,
        storyData: [...payload],
      };
    case ERROR_READ_STORY:
      return {
        ...state,
      };
    case SET_MIDDLE_MENU:
      return {
        ...state,
        modulesData: payload,
      };
    case ERROR_GETTING_MENU:
      return {
        ...state,
        modulesData: [],
      };
    case GET_HOME_SCREEN_COMPONENT_ORDER:
      return {
        ...state,
        isScreenLoading: true,
        homeScreenComponentError: false,
      };
    case SET_HOME_SCREEN_COMPONENT_ORDER:
      return {
        ...state,
        isScreenLoading: false,
        homeScreenComponentOrder: payload,
      };
    case ERROR_HOME_SCREEN_COMPONENT_ORDER:
      return {
        ...state,
        isScreenLoading: false,
        homeScreenComponentError: true,
      };
    case GET_HOME_SCREEN_BANNERS:
      return {
        ...state,
        isScreenLoading: true,
      };
    case SET_HOME_SCREEN_BANNERS_DATA:
      return {
        ...state,
        isScreenLoading: false,
        middleBannersData: payload.middle_banners,
        webinarBannersData: payload.webinars_card,
        referBannersData: payload.refer_card,
      };
    case ERROR_GET_HOME_SCREEN_BANNERS:
      return {
        ...state,
        isScreenLoading: false,
      };
    default:
      return state;
  }
};
export default reducerHome;
