import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type InitState = {
  loading: boolean;
  amount: number | unknown;
  error: string;
};

type ExtraType = {
  changeAccountState: (count: number, interestRate?: boolean) => number;
  actualBalance: () => number;
};

const initialState = {
  loading: false,
  amount: 0,
  error: "",
} as InitState;

export const depositMoney = createAsyncThunk<
  number,
  void,
  { extra: ExtraType }
>("depositMoney", async (_, { extra }) => {
  console.log(extra);
  return await extra.changeAccountState(1000);
});

export const withdrawMoney = createAsyncThunk<
  number,
  void,
  { extra: ExtraType }
>("withdrawMoney", async (_, { extra }) => {
  return await extra.changeAccountState(-1000);
});

export const depositInterestRate = createAsyncThunk<
  number,
  void,
  { extra: ExtraType }
>("depositInterestRate", async (_, { extra }) => {
  let balance, interestRate, newBalance;

  balance = await extra.actualBalance();
  interestRate = balance * 0.02;
  newBalance = await extra.changeAccountState(interestRate, true);

  return newBalance;
});

export const accountSlice = createSlice({
  name: "account",
  initialState: {
    account: initialState,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(depositMoney.fulfilled, (state, action) => {
      state.account.amount = action.payload;
      state.account.error = "";
      state.account.loading = false;
    });
    builder.addCase(depositMoney.rejected, (state, action) => {
      state.account.amount = 0;
      state.account.error = "Stolen money!";
      state.account.loading = false;
    });
    builder.addCase(depositMoney.pending, (state, action) => {
      state.account.loading = true;
    });
    builder.addCase(withdrawMoney.fulfilled, (state, action) => {
      state.account.amount = action.payload;
      state.account.error = "";
      state.account.loading = false;
    });
    builder.addCase(withdrawMoney.rejected, (state, action) => {
      state.account.amount = 0;
      state.account.error = "Stolen money!";
      state.account.loading = false;
    });
    builder.addCase(withdrawMoney.pending, (state, action) => {
      state.account.loading = true;
    });
    builder.addCase(depositInterestRate.fulfilled, (state, action) => {
      console.log(action.payload);
      state.account.amount = action.payload;
      state.account.error = "";
      state.account.loading = false;
    });
    builder.addCase(depositInterestRate.rejected, (state, action) => {
      state.account.amount = action.payload || 0;
      state.account.error = "Stolen money!";
      state.account.loading = false;
    });
    builder.addCase(depositInterestRate.pending, (state, action) => {
      state.account.loading = true;
    });
  },
});

export default accountSlice.reducer;
