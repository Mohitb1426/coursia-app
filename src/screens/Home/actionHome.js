const module_key = 'home';
export const SET_IS_LOADING = `${module_key}_set_is_loading`;
export const GET_SEARCH = `${module_key}_get_search`;
export const ERROR_GETTING_SEARCH = `${module_key}_error_getting_search`;
export const SET_SEARCH = `${module_key}_set_search`;
export const GET_MIDDLE_MENU = `${module_key}_get_middle_menu`;
export const SET_MIDDLE_MENU = `${module_key}_set_middle_menu`;
export const ERROR_GETTING_MENU = `${module_key}_error_getting_menu`;

export const SET_SEARCH_TERM = `${module_key}_set_search_term`;

export const GET_STORY_CAROUSEL_DATA = `${module_key}_get_story_carousel_data`;
export const SET_CAROUSEL_DATA = `${module_key}_set_carousel_data`;
export const SET_STORY_DATA = `${module_key}_set_story_data`;
export const ERROR_GETTING_STORY_CAROUSEL_DATA = `${module_key}_error_getting_story_carousel_data`;
export const ERROR_GETTING_STORY_DATA = `${module_key}_error_getting_story_data`;
export const ERROR_GETTING_CAROUSEL_DATA = `${module_key}_error_getting_carousel_data`;
export const READ_STORY = `${module_key}_read_story`;
export const READ_STORY_SUCCESS = `${module_key}_read_story_success`;
export const ERROR_READ_STORY = `${module_key}_error_read_story`;
export const NO_DATA_FOUND = `${module_key}_no_data_found`;
export const SET_SEARCH_LOADING = `${module_key}_loading`;

export const GET_HOME_SCREEN_COMPONENT_ORDER = `${module_key}_get_home_screen_component_order`;
export const SET_HOME_SCREEN_COMPONENT_ORDER = `${module_key}_set_home_screen_component_order`;
export const ERROR_HOME_SCREEN_COMPONENT_ORDER = `${module_key}_error_home_screen_component_order`;

export const GET_HOME_SCREEN_BANNERS = `${module_key}_get_home_screen_banners`;
export const SET_HOME_SCREEN_BANNERS_DATA = `${module_key}_set_home_screen_banners_data`;
export const ERROR_GET_HOME_SCREEN_BANNERS = `${module_key}_error_get_home_screen_banners`;

export const setIsLoading = (data) => ({
  type: SET_IS_LOADING,
  payload: data,
});

export const setSearchLoading = (data) => ({
  type: SET_SEARCH_LOADING,
  payload: data,
});

export const errorGetSearch = (data) => ({
  type: ERROR_GETTING_SEARCH,
  payload: data,
});

export const setNoData = (data) => ({
  type: NO_DATA_FOUND,
  payload: data,
});

export const getSearch = () => ({
  type: GET_SEARCH,
  payload: {},
});

export const setSearch = (data) => ({
  type: SET_SEARCH,
  payload: data?.data,
});

export const setSearchTerm = (data) => ({
  type: SET_SEARCH_TERM,
  payload: data,
});

export const getStoryCarouselData = (data) => ({
  type: GET_STORY_CAROUSEL_DATA,
  payload: data,
});

export const setCarouselData = (data) => ({
  type: SET_CAROUSEL_DATA,
  payload: data,
});

export const setStoryData = (data) => ({
  type: SET_STORY_DATA,
  payload: data,
});

export const errorGetStoryCarouselData = (data) => ({
  type: ERROR_GETTING_STORY_CAROUSEL_DATA,
  payload: data,
});

export const errorGetStoryData = (data) => ({
  type: ERROR_GETTING_STORY_DATA,
  payload: data,
});

export const errorGetCarouselData = (data) => ({
  type: ERROR_GETTING_CAROUSEL_DATA,
  payload: data,
});

export const readStory = (data) => ({
  type: READ_STORY,
  payload: data,
});

export const readStorySuccess = (data) => ({
  type: READ_STORY_SUCCESS,
  payload: data,
});

export const errorReadStory = (data) => ({
  type: ERROR_READ_STORY,
  payload: data,
});
export const getMiddleMenuData = (data) => ({
  type: GET_MIDDLE_MENU,
  payload: data,
});

export const setMiddleMenuData = (data) => ({
  type: SET_MIDDLE_MENU,
  payload: data,
});

export const errorGettingMenuDta = (data) => ({
  type: ERROR_GETTING_SEARCH,
  payload: data,
});

export const getHomeScreenComponentOrder = () => ({
  type: GET_HOME_SCREEN_COMPONENT_ORDER,
  payload: {},
});

export const setHomeScreenComponentOrder = (data) => ({
  type: SET_HOME_SCREEN_COMPONENT_ORDER,
  payload: data,
});

export const errorHomeScreenComponentOrder = (data) => ({
  type: ERROR_HOME_SCREEN_COMPONENT_ORDER,
  payload: data,
});

export const getHomeScreenBanners = () => ({
  type: GET_HOME_SCREEN_BANNERS,
  payload: {},
});

export const setHomeScreenBannersData = (data) => ({
  type: SET_HOME_SCREEN_BANNERS_DATA,
  payload: data,
});

export const errorGetHomeScreenBanners = (data) => ({
  type: ERROR_GET_HOME_SCREEN_BANNERS,
  payload: data,
});
