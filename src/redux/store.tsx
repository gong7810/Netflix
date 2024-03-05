import { legacy_createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers/index";

const sagaMiddleware = createSagaMiddleware();

const store = legacy_createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

export default store;
