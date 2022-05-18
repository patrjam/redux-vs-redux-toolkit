import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "./helpers.types";

export const initialState = {
  loading: false,
  amount: 0,
  error: null as string | null,
};

export const depositMoney = createAsyncThunk(
  "depositMoney",
  async (_, { extra }) => {
    return await extra.changeAccountState(1000);
  }
);

export const withdrawMoney = createAsyncThunk(
  "withdrawMoney",
  async (_, { extra }) => {
    return await extra.changeAccountState(-1000);
  }
);

export const depositInterestRate = createAsyncThunk(
  "depositInterestRate",
  async (_, { extra }) => {
    let balance, interestRate, newBalance;

    balance = await extra.actualBalance();
    interestRate = balance * 0.02;
    newBalance = await extra.changeAccountState(interestRate, true);

    return newBalance;
  }
);

export const accountSlice = createSlice({
  name: "account",
  initialState: {
    account: initialState,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(depositMoney.fulfilled, (state, action) => {
        state.account.amount = action.payload;
        state.account.error = null;
        state.account.loading = false;
      })
      .addCase(depositMoney.rejected, (state, action) => {
        state.account.amount = 0;
        state.account.error = "Stolen money!";
        state.account.loading = false;
      })
      .addCase(depositMoney.pending, (state, action) => {
        state.account.loading = true;
      })
      .addCase(withdrawMoney.fulfilled, (state, action) => {
        state.account.amount = action.payload;
        state.account.error = null;
        state.account.loading = false;
      })
      .addCase(withdrawMoney.rejected, (state, action) => {
        state.account.amount = 0;
        state.account.error = "Stolen money!";
        state.account.loading = false;
      })
      .addCase(withdrawMoney.pending, (state, action) => {
        state.account.loading = true;
      })
      .addCase(depositInterestRate.fulfilled, (state, action) => {
        state.account.amount = action.payload;
        state.account.error = null;
        state.account.loading = false;
      })
      .addCase(depositInterestRate.rejected, (state, action) => {
        state.account.amount = Number(action.error.message) || 0;
        state.account.error = "Sorry, no interest rate bonus added!";
        state.account.loading = false;
      })
      .addCase(depositInterestRate.pending, (state, action) => {
        state.account.loading = true;
      });
  },
});

export const accountSliceReducer = accountSlice.reducer;
