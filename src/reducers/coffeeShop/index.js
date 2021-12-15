import { combineReducers } from "redux";
import coffeeShops from "./coffeeShop";
import reviews from "./review";
import reviewers from "./reviewer";

const coffeeShopReducer = combineReducers({
  coffeeShops,
  reviews,
  reviewers,
});

export default coffeeShopReducer;
