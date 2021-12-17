export function fetchReview() {
  return async function (dispatch, getState) {
    const {
      coffeeShop: { coffeeShops, reviewers },
    } = getState();
    if (coffeeShops.length === 0) dispatch(fetchCoffeeShop());
    if (reviewers.length === 0) dispatch(fetchReviewer());
    const res = await fetch(process.env.REACT_APP_BACKEND_URL + "/api/Reviews");
    const result = await res.json();
    dispatch({
      type: "FETCH_REVIEW",
      payload: result,
    });
  };
}
export const fetchCoffeeShop = () => async (dispatch) => {
  const res = await fetch(process.env.REACT_APP_BACKEND_URL + "/api/CoffeeShops");
  const result = await res.json();
  dispatch({
    type: "FETCH_COFFEESHOP",
    payload: result,
  });
};
export const fetchReviewer = () => async (dispatch) => {
  const res = await fetch(process.env.REACT_APP_BACKEND_URL + "/api/Reviewers");
  const result = await res.json();
  dispatch({
    type: "FETCH_REVIEWER",
    payload: result,
  });
};
