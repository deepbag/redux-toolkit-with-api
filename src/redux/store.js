import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counterSlice";
import apiSlices from "./slices/apiSlices";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    api: apiSlices,
  },
});
