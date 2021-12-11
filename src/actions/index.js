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
export const fetchContact = () => async (dispatch) => {
  const res = await fetch("http://localhost:4001/api/contacts");
  const contacts = await res.json();
  dispatch(fetchContactSuccessfully(contacts));
};
export const fetchContactSuccessfully = (contacts) => ({
  type: "FETCH_CONTACT",
  payload: contacts,
});
export const addContact = (contact) => async (dispatch) => {
  const res = await fetch("http://localhost:4001/api/contacts", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(contact),
  });
  const savedContact = await res.json();
  dispatch({
    type: "ADD_CONTACT",
    payload: savedContact,
  });
};
export const editContact = (contact) => async (dispatch) => {
  try {
    const res = await fetch(`http://localhost:4001/api/contacts`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(contact),
    });
    const savedContact = await res.json();
    dispatch({
      type: "EDIT_CONTACT",
      payload: savedContact,
    });
  } catch (e) {
    console.log(e);
    dispatch({
      type: "EDIT_FAILURE",
      payload: e,
    });
  }
};
export const deleteContact = (id) => async (dispatch) => {
  const res = await fetch(`http://localhost:4001/api/contacts/${id}`, {
    method: "delete",
  });
  const result = await res.json();

  if (result.count > 0)
    dispatch({
      type: "DELETE_CONTACT",
      payload: id,
    });
};
