import { createSlice } from "@reduxjs/toolkit";

const initialState = 0;

export const accountReducer = createSlice({
  name: "account",
  initialState: {
    account: initialState,
  },
  reducers: {
    depositMoney: (state, action) => {
      state.account = state.account + action.payload;
    },
    withdrawMoney: (state, action) => {
      state.account = state.account - action.payload;
    },
    depositInterestRate: (state) => {
      state.account = state.account + state.account * 0.2;
    },
  },
});

export const { depositMoney, withdrawMoney, depositInterestRate } =
  accountReducer.actions;
export default accountReducer.reducer;
