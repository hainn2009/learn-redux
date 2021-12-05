const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 2;
    case 'INCREMENT_BY_AMOUNT':
      return state + action.amount;
    case 'DECREMENT':
      return state - 2;
    default:
      return state;
  }
};
export default counterReducer;
