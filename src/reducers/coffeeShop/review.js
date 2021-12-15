const reviewReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_REVIEW":
      return action.payload;
    default:
      return state;
  }
};

export default reviewReducer;
