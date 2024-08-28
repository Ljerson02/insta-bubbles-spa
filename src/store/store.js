import { configureStore } from "@reduxjs/toolkit";
import { rootSlice, authSlice } from "./slices";

export const store = configureStore({
  reducer: {
    root: rootSlice.reducer,
    auth: authSlice.reducer,
  },
});