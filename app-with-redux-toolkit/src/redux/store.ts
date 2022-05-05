import { configureStore } from "@reduxjs/toolkit";
import accountSlice from "./accountSlice";
import { changeAccountState, actualBalance } from "./services";

const extraArgument = {
  changeAccountState: async (count: number, interestRate = false) =>
    await changeAccountState(count, interestRate),
  actualBalance: () => actualBalance(),
};

export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument,
      },
    }),

  reducer: {
    account: accountSlice,
  },
});
