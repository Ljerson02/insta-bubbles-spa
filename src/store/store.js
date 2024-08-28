import { configureStore } from "@reduxjs/toolkit";
import { rootSlice } from "./slices/root";

export const store = configureStore({
  reducer: {
    root: rootSlice.reducer,
  },
});