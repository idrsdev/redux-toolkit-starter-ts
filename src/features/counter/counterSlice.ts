import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterStateT {
  value: number;
}

const initialState = {
  value: 0,
} as CounterStateT;

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      // It's okay to do this bcz immer makes it immutable
      // under the hood
      state.value++;
    },
    amountAdded(state, action: PayloadAction<number>) {
      state.value += action.payload;
    },
  },
});

export const { increment, amountAdded } = counterSlice.actions;

export default counterSlice.reducer;
