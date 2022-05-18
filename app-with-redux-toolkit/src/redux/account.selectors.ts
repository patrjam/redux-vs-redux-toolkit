import { State } from "./store";

const createSelectors = <
  K extends string,
  Selectors extends Record<K, (state: State) => any>
>(
  selectors: Selectors
) => selectors;

export const accountSelectors = createSelectors({
  getState: (state) => state.account.account,
  getAmount: (state) => state.account.account.amount,
  getLoading: (state) => state.account.account.loading,
  getError: (state) => state.account.account.error,
});
