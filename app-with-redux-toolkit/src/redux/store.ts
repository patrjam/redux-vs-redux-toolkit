import { configureStore } from "@reduxjs/toolkit";
import accountSlice from "./accountSlice";
import { changeAccountState, actualBalance } from "./services";
import { useDispatch } from 'react-redux'

export const extraArgument = {
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

export type State = ReturnType<typeof store.getState>
export const useAppDispatch = () => useDispatch<typeof store.dispatch>()