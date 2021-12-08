const initialState = [];
const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_CONTACT":
      fetch("http://localhost:3000/api/contacts", {
        method: "get",
      })
        .then((res) => res.json())
        .then((res) => (res[0] ? res[0].name : state));
      return state;
    case "ADD_CONTACT":
      return;
    default:
      return state;
  }
};

export default contactReducer;
