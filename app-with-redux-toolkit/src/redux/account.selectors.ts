import { identityTypedSelectors } from "../selectors.types";

export const accountSelectors = identityTypedSelectors({
  getState: (state) => state.account.account,
  getAmount: (state) => state.account.account.amount,
  getLoading: (state) => state.account.account.loading,
  getError: (state) => state.account.account.error,
});
