import {
  fetchDepositError,
  fetchDepositRequest,
} from "../reducers/accountReducer.js";
import { fetchDepositSuccess } from "../reducers/accountReducer.js";
import {
  fetchWithdrawRequest,
  fetchWithdrawSuccess,
  fetchWithdrawError,
  fetchDepositInterestRateRequest,
  fetchDepositInterestRateSuccess,
  fetchDepositInterestRateError,
} from "../reducers/accountReducer.js";

export const depositMoney = (amount) => {
  return (dispatch) => {
    dispatch(fetchDepositRequest());
    new Promise((resolve, reject) => {
      const randomError = Math.floor(Math.random() * 4); 
      randomError !== 0 // 25% chance of failure
        ? resolve(
            setTimeout(() => {
              console.log("Adding money...");
              dispatch(fetchDepositSuccess(amount));
            }, 2000)
          )
        : reject(dispatch(fetchDepositError("Your money was stolen.")));
    });
  };
};

export const withdrawMoney = (amount) => {
  return (dispatch) => {
    dispatch(fetchWithdrawRequest());
    new Promise((resolve, reject) => {
      const randomError = Math.floor(Math.random() * 4); 
      randomError !== 0 // 25% chance of failure
        ? resolve(
            setTimeout(() => {
              console.log("Removing money...");
              dispatch(fetchWithdrawSuccess(amount));
            }, 2000)
          )
        : reject(dispatch(fetchWithdrawError("Your money was stolen.")));
    });
  };
};

export const depositInterestRate = () => {
  return (dispatch) => {
    dispatch(fetchDepositInterestRateRequest());
    const randomError = Math.floor(Math.random() * 3); 

    console.log(randomError);

    randomError === 2 //33% change of failure
      ? dispatch(
          fetchDepositInterestRateError("Your 2% interest rate of money was stolen.")
        )
      : dispatch(fetchDepositInterestRateSuccess());
  };
};
