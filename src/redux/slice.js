import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  Name: "",
  fetchStage: false,
  fetchData: null,
  fetchRep: null,
  fetchRepStage: false,
};
const hooks = createSlice({
  name: "finder",
  initialState,
  reducers: {
    setName(state, action) {
      console.log(action.payload);
      state.Name = action.payload;
    },
    addFetchData(state, action) {
      console.log(action.payload);
      state.fetchData = action.payload;
    },
    addFetchStage(state, action) {
      console.log(action.payload);
      state.fetchStage = action.payload;
    },
    AddFetchRep(state, action) {
      console.log(action.payload);
      state.fetchRep = action.payload;
    },
    addFetchRepStage(state, action) {
      console.log(action.payload);
      state.fetchRepStage = action.payload;
    },
  },
});

export const GitActions = hooks.actions;
export default hooks;
