export function fetchReview() {
  return async function (dispatch) {
    // const {
    //   coffeeShop: { coffeeShops, reviewers },
    // } = getState();
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
export const fetchAll = () => (dispatch) => {
  // await fetchCoffeeShop();
  // await fetchReviewer();
  // await fetchReview();
  fetch(process.env.REACT_APP_BACKEND_URL + "/api/CoffeeShops")
    .then((res) => res.json())
    .then((result) =>
      dispatch({
        type: "FETCH_COFFEESHOP",
        payload: result,
      })
    );
  fetch(process.env.REACT_APP_BACKEND_URL + "/api/Reviewers")
    .then((res) => res.json())
    .then((result) =>
      dispatch({
        type: "FETCH_REVIEWER",
        payload: result,
      })
    );
  fetch(process.env.REACT_APP_BACKEND_URL + "/api/Reviews")
    .then((res) => res.json())
    .then((result) =>
      dispatch({
        type: "FETCH_REVIEW",
        payload: result,
      })
    );
};
