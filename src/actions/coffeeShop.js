export function fetchReview() {
  return async function (dispatch) {
    const res = await fetch(process.env.REACT_APP_BACKEND_URL + "/api/Reviews");
    const result = await res.json();
    dispatch({
      type: "FETCH_REVIEW",
      payload: result,
    });
  };
}
