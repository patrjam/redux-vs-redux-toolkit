import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  amount: 0,
  error: null,
};

export const depositMoney = createAsyncThunk(
  "depositMoney",
  async (_, { extra: { changeAccountState } }) => {
    return await changeAccountState(1000);
  }
);

export const withdrawMoney = createAsyncThunk(
  "withdrawMoney",
  async (_, { extra: { changeAccountState } }) => {
    return await changeAccountState(-1000);
  }
);

export const depositInterestRate = createAsyncThunk(
  "depositInterestRate",
  async (_, { extra: { changeAccountState, actualBalance } }) => {
    let balance, interestRate, newBalance;

    balance = await actualBalance();
    interestRate = balance * 0.02;
    newBalance = await changeAccountState(interestRate, true);

    return newBalance;
  }
);

export const accountSlice = createSlice({
  name: "account",
  initialState: {
    account: initialState,
  },
  extraReducers: {
    [depositMoney.fulfilled]: (state, action) => {
      state.account.amount = action.payload;
      state.account.error = null;
      state.account.loading = false;
    },
    [depositMoney.rejected]: (state, action) => {
      state.account.amount = 0;
      state.account.error = "Stolen money!";
      state.account.loading = false;
    },
    [depositMoney.pending]: (state, action) => {
      state.account.loading = true;
    },
    [withdrawMoney.fulfilled]: (state, action) => {
      state.account.amount = action.payload;
      state.account.error = null;
      state.account.loading = false;
    },
    [withdrawMoney.rejected]: (state, action) => {
      state.account.amount = 0;
      state.account.error = "Stolen money!";
      state.account.loading = false;
    },
    [withdrawMoney.pending]: (state, action) => {
      state.account.loading = true;
    },
    [depositInterestRate.fulfilled]: (state, action) => {
      state.account.amount = action.payload;
      state.account.error = null;
      state.account.loading = false;
    },
    [depositInterestRate.rejected]: (state, action) => {
      state.account.amount = action.payload || 0;
      state.account.error = "Stolen money!";
      state.account.loading = false;
    },
    [depositInterestRate.pending]: (state, action) => {
      state.account.loading = true;
    },
  },
});

export default accountSlice.reducer;
