import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import movieReducer from "./movieReducer";

export default combineReducers({
  login: loginReducer,
  movie: movieReducer,
});

export type RootState = ReturnType<typeof combineReducers>;
