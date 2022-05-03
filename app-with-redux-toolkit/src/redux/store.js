import { configureStore } from "@reduxjs/toolkit";
import accountSlice from "./accountSlice";
import { changeAccountState, actualBalance } from "./services";

export default configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {
          changeAccountState: async (count, interestRate = false) =>
            await changeAccountState(count, interestRate),
          actualBalance: () => actualBalance(),
        },
      },
    }),

  reducer: {
    account: accountSlice,
  },
});
