import { configureStore } from "@reduxjs/toolkit";
import {accountSliceReducer} from "./accountSlice";
import { changeAccountState, actualBalance } from "./services";
import { useDispatch } from 'react-redux'

export const extraArgument = {
  changeAccountState,
  actualBalance,
};

export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument,
      },
    }),

  reducer: {
    account: accountSliceReducer,
  },
});

export type State = ReturnType<typeof store.getState>
export const useAppDispatch = () => useDispatch<typeof store.dispatch>()