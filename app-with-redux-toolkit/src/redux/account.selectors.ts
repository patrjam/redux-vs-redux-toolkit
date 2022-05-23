import { createSelectors } from "../selectors.types";

export const accountSelectors = createSelectors({
  getState: (state) => state.account.account,
  getAmount: (state) => state.account.account.amount,
  getLoading: (state) => state.account.account.loading,
  getError: (state) => state.account.account.error,
});
