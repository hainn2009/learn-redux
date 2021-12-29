import { createSlice } from "@reduxjs/toolkit";

export const meetUpSlice = createSlice({
  name: "meetUps",
  initialState: [],
  reducers: {
    fetchMeetUp1: (state, action) => {
      state = action.payload;
    },
    addMeetUp: (state, action) => {
      state.push(action.payload);
    },
    deleteMeetUp: (state, action) => {
      state = state.filter((i) => i.id !== action.payload.id);
    },
  },
});

export const { fetchMeetUp1, addMeetUp, deleteMeetUp } = meetUpSlice.actions;

export const fetchMeetUp = () => async (dispatch) => {
  const res = await fetch("");
  const meetUps = await res.json();
  dispatch(fetchMeetUp1(meetUps));
};

export default meetUpSlice.reducer;
