import { createEpicMiddleware } from 'redux-observable';
import { configureStore } from '@reduxjs/toolkit';
import rootEpic from './rootEpic';
import rootReducer from './rootReducer';

const epicMiddleWares = createEpicMiddleware();
const preloadedState = {};

const store = configureStore({
  reducer: rootReducer,
  middleware: [epicMiddleWares],
  preloadedState,
  enhancers: [],
});
epicMiddleWares.run(rootEpic);
export default store;
