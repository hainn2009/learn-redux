export const increment = () => ({
  type: 'INCREMENT',
});
export const decrement = () => ({
  type: 'DECREMENT',
});
export const incrementByAmount = (amount) => ({
  type: 'INCREMENT_BY_AMOUNT',
  amount,
});
