import { combineReducers } from "redux";
import { loginReducer } from "./loginReducer";
import { movieReducer } from "./movieReducer";

export default combineReducers({
  loginReducer: loginReducer,
  movieReducer: movieReducer,
});
