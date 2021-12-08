export const increment = () => ({
  type: "INCREMENT",
});
export const decrement = () => ({
  type: "DECREMENT",
});
export const incrementByAmount = (amount) => ({
  type: "INCREMENT_BY_AMOUNT",
  amount,
});
export const addContact = (contact) => ({
  type: "ADD_CONTACT",
  payload: contact,
});
export const editContact = (id, contact) => ({
  type: "EDIT_CONTACT",
  payload: { id, contact },
});
export const deleteContact = (id) => ({
  type: "DELETE_CONTACT",
  payload: id,
});
