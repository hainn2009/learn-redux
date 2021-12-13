import counterReducer from "./counter";
import loggedReducer from "./looged";
import contactReducer from "./contact";
import coffeeShopReducer from "./coffeeShop";
import { combineReducers } from "redux";

const allReducer = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer,
  contact: contactReducer,
  coffeeShop: coffeeShopReducer,
});

export default allReducer;
