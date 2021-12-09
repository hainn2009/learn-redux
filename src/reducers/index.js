import counterReducer from "./counter";
import loggedReducer from "./looged";
import contactReducer from "./contact";
import { combineReducers } from "redux";

const allReducer = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer,
  contact: contactReducer,
});

export default allReducer;
