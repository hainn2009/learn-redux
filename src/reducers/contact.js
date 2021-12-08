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
      return [...state, { id: state.length > 0 ? state[state.length - 1].id + 1 : 1, name: action.payload.name }];
    default:
      return state;
  }
};

export default contactReducer;
