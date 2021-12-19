const coffeeShopReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_COFFEESHOP":
      return action.payload;

    default:
      return state;
  }
};

export default coffeeShopReducer;
