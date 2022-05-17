import {State} from "./store"

export const getState = (state: State) => state.account.account;
export const getAmount = (state: State) => state.account.account.amount;
export const getLoading = (state: State) => state.account.account.loading;
export const getError = (state: State) => state.account.account.error;
