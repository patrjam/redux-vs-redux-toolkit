import {
  accountReducer,
  fetchDepositRequest,
  fetchDepositSuccess,
  fetchDepositError,
  fetchWithdrawRequest,
  fetchWithdrawSuccess,
  fetchWithdrawError,
  fetchDepositInterestRateRequest,
  fetchDepositInterestRateSuccess,
  fetchDepositInterestRateError,
  depositMoney,
  withdrawMoney,
  depositInterestRate,
} from "../src/redux/accountReducer";

describe("reducer", () => {
  it("state after dispatching fetchDepositRequest", () => {
    const previousState = { loading: false, amount: 0, error: null };
    const nextState = { loading: true, amount: 0, error: null };
    expect(accountReducer(previousState, fetchDepositRequest())).toEqual(
      nextState
    );
  });

  it("state after dispatching fetchDepositSuccess", () => {
    const previousState = { loading: true, amount: 0, error: null };
    const nextState = { loading: false, amount: 1000, error: null };
    expect(accountReducer(previousState, fetchDepositSuccess(1000))).toEqual(
      nextState
    );
  });

  it("state after dispatching fetchDepositError", () => {
    const previousState = { loading: true, amount: 1000, error: null };
    const nextState = { loading: false, amount: 0, error: "Deposit stolen." };
    expect(
      accountReducer(previousState, fetchDepositError("Deposit stolen."))
    ).toEqual(nextState);
  });

  it("state after dispatching fetchWithdrawRequest", () => {
    const previousState = { loading: false, amount: 1000, error: null };
    const nextState = { loading: true, amount: 1000, error: null };
    expect(accountReducer(previousState, fetchWithdrawRequest())).toEqual(
      nextState
    );
  });

  it("state after dispatching fetchWithdrawSuccess", () => {
    const previousState = { loading: true, amount: 1000, error: null };
    const nextState = { loading: false, amount: 0, error: null };
    expect(accountReducer(previousState, fetchWithdrawSuccess(0))).toEqual(
      nextState
    );
  });

  it("state after dispatching fetchWithdrawError", () => {
    const previousState = { loading: true, amount: 1000, error: null };
    const nextState = { loading: false, amount: 0, error: "Withdraw stolen." };
    expect(
      accountReducer(previousState, fetchWithdrawError("Withdraw stolen."))
    ).toEqual(nextState);
  });

  it("state after dispatching fetchDepositInterestRateRequest", () => {
    const previousState = { loading: false, amount: 2000, error: null };
    const nextState = { loading: true, amount: 2000, error: null };
    expect(
      accountReducer(previousState, fetchDepositInterestRateRequest())
    ).toEqual(nextState);
  });

  it("state after dispatching fetchDepositInterestRateSuccess", () => {
    const previousState = { loading: true, amount: 1000, error: null };
    const nextState = { loading: false, amount: 1020, error: null };
    expect(
      accountReducer(previousState, fetchDepositInterestRateSuccess(1020))
    ).toEqual(nextState);
  });

  it("state after dispatching fetchDepositInterestRateError", () => {
    const previousState = { loading: true, amount: 1020, error: null };
    const nextState = { loading: false, amount: 1020, error: "Some error." };
    expect(
      accountReducer(
        previousState,
        fetchDepositInterestRateError("Some error.")
      )
    ).toEqual(nextState);
  });


   // todo i am missing unhappy path in thunk tests - you will need to inject different services
  describe("thunks", () => {
    let fetchedData;

    const services = {
      services: {
        account: {
          changeAccountState: () => Promise.resolve(fetchedData),
          actualBalance: () => Promise.resolve(),
        },
      },
    };

    it("depositMoney", async () => {
      fetchedData = 1000;

      expect(
        await getDispatchedActionsFromThunk({
          thunk: depositMoney,
          extraArgs: services,
        })
      ).toEqual([fetchDepositRequest(), fetchDepositSuccess(fetchedData)]);
    });

    it("withdrawMoney", async () => {
      fetchedData = -2000;
      expect(
        await getDispatchedActionsFromThunk({
          thunk: withdrawMoney,
          extraArgs: services,
        })
      ).toEqual([fetchWithdrawRequest(), fetchWithdrawSuccess(fetchedData)]);
    });

    it("depositInterestRate", async () => {
      fetchedData = 1020;
      expect(
        await getDispatchedActionsFromThunk({
          thunk: depositInterestRate,
          extraArgs: services,
        })
      ).toEqual([
        fetchDepositInterestRateRequest(),
        fetchDepositInterestRateSuccess(fetchedData),
      ]);
    });

    it("depositInterestRate unhappy path", async () => {
      expect(
        await getDispatchedActionsFromThunk({
          thunk: depositInterestRate,
          extraArgs: services,
        })
      ).not.toEqual([fetchDepositRequest()]);
    });
  });
});

const getDefaultArgs = () => ({
  thunk: null,
  thunkArgs: [],
  dispatch: jest.fn(() => Promise.resolve()),
  getState: jest.fn(() => ({})),
  extraArgs: {},
});

export default async function getDispatchedActionsFromThunk(args) {
  const mergedArgs = { ...getDefaultArgs(), ...args };
  if (!mergedArgs.thunk) {
    throw new Error("Thunk is required argument!");
  }
  if (mergedArgs.dispatch.mock === undefined) {
    throw new Error("Dispatch must be type od jest.fn!");
  }
  const obtainedThunk = mergedArgs.thunk(...mergedArgs.thunkArgs);
  await obtainedThunk(
    mergedArgs.dispatch,
    mergedArgs.getState,
    mergedArgs.extraArgs
  );
  return mergedArgs.dispatch.mock.calls.map((item) => {
    const action = item[0];
    if (typeof action === "function") {
      return "thunk";
    }
    return action;
  });
}
