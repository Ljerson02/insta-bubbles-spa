import { createSlice } from "@reduxjs/toolkit";

export const rootSlice = createSlice({
  name: "root",
  initialState: {
    value: 0,
  },
  reducers: {
    setRootValue: (state, payload) => {
      state.value = payload;
    },
  },
});

export const { setRootValue } = rootSlice.actions;

