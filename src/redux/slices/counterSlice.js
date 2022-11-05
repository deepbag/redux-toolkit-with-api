import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    handlePlus: (state, action) => {
      state.value += action.payload;
    },
    handleMinus: (state, action) => {
      state.value -= action.payload;
    },
  },
});
export const { handlePlus, handleMinus } = counterSlice.actions;

export default counterSlice.reducer;
