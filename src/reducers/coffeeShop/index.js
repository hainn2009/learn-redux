const coffeeShopReducer = (state = { reviews: [] }, action) => {
  switch (action.type) {
    case "FETCH_REVIEW":
      return { reviews: action.payload };
    default:
      return state;
  }
};
export default coffeeShopReducer;
