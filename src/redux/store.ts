import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import combineReducers from "./reducers/index";
import movieSaga from "./sagas/movieSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: combineReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
  devTools: true,
});

sagaMiddleware.run(movieSaga);

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
