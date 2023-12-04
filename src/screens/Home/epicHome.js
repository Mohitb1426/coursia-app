// const TAG = 'epicHome';

import { ofType } from 'redux-observable';
import { from, of } from 'rxjs';
import {
  mergeMap, pluck, map, takeUntil, catchError,
} from 'rxjs/operators';
import Config from '../../common/Config';
import { makeGetRequest, makePostRequest } from '../../common/NetworkOps';
import {
  errorGetSearch,
  GET_SEARCH,
  setSearch,
  GET_STORY_CAROUSEL_DATA,
  setCarouselData,
  setStoryData,
  errorGetStoryCarouselData,
  errorGetCarouselData,
  errorGetStoryData,
  READ_STORY,
  readStorySuccess,
  errorReadStory,
  errorGettingMenuDta, GET_MIDDLE_MENU, setMiddleMenuData,
  GET_HOME_SCREEN_COMPONENT_ORDER,
  setHomeScreenComponentOrder,
  errorHomeScreenComponentOrder,
  GET_HOME_SCREEN_BANNERS,
  setHomeScreenBannersData,
  errorGetHomeScreenBanners,
} from './actionHome';

export async function getHomeSearch(searchTerm) {
  const res = await makeGetRequest(`${Config.home.homeSearch}?searchTerm=${searchTerm}`);
  return res;
}
export async function getMiddleMenuData() {
  const res = await makeGetRequest(Config.home.middleMenuData);
  return res;
}

export async function getStoryCarousel(id) {
  const res = await makeGetRequest(`${Config.home.getStoryCarousel}/${id}`);
  return res;
}

export async function readStoryCall(id, posts) {
  const body = {
    story_id: id,
    post_id: posts,
  };
  const res = await makePostRequest(Config.home.readStoryURL, body);
  return res;
}

export async function homeScreenOrderApiCall() {
  const res = await makeGetRequest(`${Config.home.getHomeScreenComponentAPI}?screen=Home`);
  return res;
}

export async function homeScreenBanners() {
  const res = await makeGetRequest(Config.home.getHomeScreenBanner);
  return res;
}

export const epicSearch = (action$, state$) => action$.pipe(
  ofType(GET_SEARCH),
  pluck('payload'),
  mergeMap(() => {
    const { searchTerm } = state$.value.reducerHome;
    return from(getHomeSearch(searchTerm)).pipe(
      map((res) => {
        // debugLog(`search result: ${JSON.stringify(res)}`);
        if (res.code === 200) return setSearch(res);
        return errorGetSearch(res.message);
      }),
      takeUntil(action$.pipe(ofType(GET_SEARCH))),
      catchError((error) => {
        return of(errorGetSearch(error.response?.data?.message || ''));
      }),
    );
  }),
);

export const epicGetStoryCarouseData = (action$) => action$.pipe(
  ofType(GET_STORY_CAROUSEL_DATA),
  pluck('payload'),
  mergeMap((id) => {
    return from(getStoryCarousel(id)).pipe(
      mergeMap((res) => {
        if (id === 1) {
          if (res.code === 200) return setStoryData(res.data?.Stories);
          return errorGetStoryData(res.message);
        } if (id === 2) {
          if (res.code === 200) return setCarouselData(res.data?.Carousel);
          return errorGetCarouselData(res.message);
        }
        if (res.code === 200) {
          return of(setStoryData(res.data?.Stories), setCarouselData(res.data?.Carousel));
        }
        return errorGetStoryCarouselData(res.message);
      }),
      takeUntil(action$.pipe(ofType(GET_STORY_CAROUSEL_DATA))),
      catchError((error) => {
        if (id === 1) {
          return of(errorGetStoryData(error.response?.data?.message || ''));
        } if (id === 2) {
          return of(errorGetCarouselData(error.response?.data?.message || ''));
        }
        return of(errorGetStoryCarouselData(error.response?.data?.message || ''));
      }),
    );
  }),
);

export const epicReadStory = (action$, state$) => action$.pipe(
  ofType(READ_STORY),
  pluck('payload'),
  mergeMap((data) => {
    const { storyData } = state$.value.reducerHome;
    const { id, posts } = data;
    return from(readStoryCall(id, posts)).pipe(
      map((res) => {
        if (res.code === 200) {
          const story = [...storyData];
          const update_post = res.data?.Stories[0];
          story[story.findIndex((el) => el.id === update_post.id)] = update_post;
          return readStorySuccess([...story]);
        }
        return errorReadStory(res.message);
      }),
      takeUntil(action$.pipe(ofType(READ_STORY))),
      catchError((error) => {
        return of(errorReadStory(error.response?.data?.message || ''));
      }),
    );
  }),
);

export const epicGetMiddleMenu = (action$) => action$.pipe(
  ofType(GET_MIDDLE_MENU),
  pluck('payload'),
  mergeMap(() => {
    return from(getMiddleMenuData()).pipe(
      map((res) => {
        if (res.code === 200) return setMiddleMenuData(res?.data);
        return errorGettingMenuDta(res.message);
      }),
      takeUntil(action$.pipe(ofType(GET_MIDDLE_MENU))),
      catchError((error) => {
        return of(errorGettingMenuDta(error.response?.data?.message || ''));
      }),
    );
  }),
);

export const epicHomeScreenComponentOrder = (action$) => action$.pipe(
  ofType(GET_HOME_SCREEN_COMPONENT_ORDER),
  pluck('payload'),
  mergeMap(() => {
    return from(homeScreenOrderApiCall()).pipe(
      map((res) => {
        if (res.code === 200) return setHomeScreenComponentOrder(res?.data);
        return errorHomeScreenComponentOrder(res.message);
      }),
      takeUntil(action$.pipe(ofType(GET_HOME_SCREEN_COMPONENT_ORDER))),
      catchError((error) => {
        return of(errorHomeScreenComponentOrder(error.response?.data?.message || ''));
      }),
    );
  }),
);

export const epicGetHomeScreenBanner = (action$) => action$.pipe(
  ofType(GET_HOME_SCREEN_BANNERS),
  pluck('payload'),
  mergeMap(() => {
    return from(homeScreenBanners()).pipe(
      map((res) => {
        if (res.code === 200) return setHomeScreenBannersData(res?.data);
        return errorGetHomeScreenBanners(res.message);
      }),
      takeUntil(action$.pipe(ofType(GET_HOME_SCREEN_BANNERS))),
      catchError((error) => {
        return of(errorGetHomeScreenBanners(error.response?.data?.message || ''));
      }),
    );
  }),
);
