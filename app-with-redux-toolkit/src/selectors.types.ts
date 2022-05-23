import { State } from "./redux/store";

/*
Generic for automatic typed State arguments
*/

export const createSelectors = <
  K extends string,
  Selectors extends Record<K, (state: State) => any>
>(
  selectors: Selectors
) => selectors;
