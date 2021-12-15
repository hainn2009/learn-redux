const reviewerReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_REVIEWER":
      return action.payload;
    default:
      return state;
  }
};

export default reviewerReducer;
