import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  amount: 0,
  error: null,
};

let accountBalance = 0

export const accountReducer = createSlice({
  name: "account",
  initialState: {
    account: initialState,
  },
  reducers: {
    changeAmountSuccess: (state, action) => {
      //console.log(state.account, action, ".....xxxx.........")
      //console.log("incrementByAmount | ", "state.account:", state.account.amount, "action.payload:", action.payload)
      state.account.amount = action.payload
      state.account.error = null
      state.account.loading = false
      //console.log("..", state.account.amount)

    },
    changeAmountFailure: (state, action) => {
      //console.log(state, "::state", action, ": changeAmountFailure")
      state.account.amount = action.payload
      state.account.error = "Stolen money!"
      state.account.loading = false

    },
    changeAmountRequest: (state, action) => {
      //console.log(state, "::state", action, ": changeAmountRequest")
      state.account.loading = true


    }

  },
});

//zatial je servisa ako fcia
export const depositMoney1 = (deltaAmount, interestRateCalculation = false) => async dispatch => {
  dispatch(changeAmountRequest())
  console.log("deltaAmount: ", deltaAmount, "|", " accountBalance: ", accountBalance)
  //accountBalance = Math.round(accountBalance + deltaAmount)
  const randomError = Math.floor(Math.random() * 2);
  console.log("2. deltaAmount: ", deltaAmount, "|", " accountBalance: ", accountBalance)
  return await new Promise((resolve, reject) => {

    setTimeout(() => {

      randomError !== 0 // 25% chance of failure
        ? //resolve((accountBalance = Math.round(accountBalance + deltaAmount)))
        resolve(dispatch(changeAmountSuccess(accountBalance = Math.round(accountBalance + deltaAmount))), console.log("OK, do fcie som poslala:", accountBalance))
        : reject(
          //console.log("shiiiiit", accountBalance),
          interestRateCalculation ? accountBalance : dispatch(changeAmountFailure(accountBalance = 0)),
          new Error("Sorry, money stolen!")
        );
    }, 2000);
  });
}

/* export const changeAccountState = async (
  deltaAmount,
  interestRateCalculation = false
) => {
  const randomError = Math.floor(Math.random() * 4);
  return await new Promise((resolve, reject) => {
    setTimeout(() => {
      randomError !== 0 // 25% chance of failure
        ? resolve((accountBalance = Math.round(accountBalance + deltaAmount)))
        : reject(
          interestRateCalculation ? accountBalance : (accountBalance = 0),
          new Error("Sorry, money stolen!")
        );
    }, 2000);
  });
};

export const actualBalance = () => {
  return accountBalance;
}; */

export const { depositMoney, withdrawMoney, depositInterestRate, changeAmountSuccess, changeAmountFailure, changeAmountRequest } =
  accountReducer.actions;
export default accountReducer.reducer;
