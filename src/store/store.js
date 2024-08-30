import { configureStore } from "@reduxjs/toolkit";
import { rootSlice, authSlice } from "./slices";
import { bubblesSlice } from "./slices/bubbles/bubblesSlice";

export const store = configureStore({
  reducer: {
    root: rootSlice.reducer,
    auth: authSlice.reducer,
    bubbles: bubblesSlice.reducer,
  },
});