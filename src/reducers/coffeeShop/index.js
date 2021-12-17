const coffeeShopReducer = (state = { coffeeShops: [], reviews: [], reviewers: [], isLoading: false }, action) => {
  switch (action.type) {
    case "FETCH_COFFEESHOP":
      return { ...state, coffeeShops: action.payload };
    case "FETCH_REVIEW":
      return { ...state, reviews: action.payload };
    case "FETCH_REVIEWER":
      return { ...state, reviewers: action.payload };
    case "FETCH_ALL":
      return action.payload;
    default:
      return state;
  }
};

export default coffeeShopReducer;
