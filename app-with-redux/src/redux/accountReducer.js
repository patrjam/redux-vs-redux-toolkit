const initialState = {
  loading: false,
  amount: 0,
  error: null,
};

const FETCH_DEPOSIT_REQUEST = "FETCH_DEPOSIT_REQUEST";
const FETCH_DEPOSIT_SUCCESS = "FETCH_DEPOSIT_SUCCESS";
const FETCH_DEPOSIT_FAILURE = "FETCH_DEPOSIT_FAILURE";
// -----
const FETCH_WITHDRAW_REQUEST = "FETCH_WITHDRAW_REQUEST";
const FETCH_WITHDRAW_SUCCESS = "FETCH_WITHDRAW_SUCCESS";
const FETCH_WITHDRAW_FAILURE = "FETCH_WITHDRAW_FAILURE";
// -----
const FETCH_DEPOSIT_INTERESTRATE_REQUEST = "FETCH_DEPOSIT_INTERESTRATE_REQUEST";
const FETCH_DEPOSIT_INTERESTRATE_SUCCESS = "FETCH_DEPOSIT_INTERESTRATE_SUCCESS";
const FETCH_DEPOSIT_INTERESTRATE_FAILURE = "FETCH_DEPOSIT_INTERESTRATE_FAILURE";

export const fetchDepositRequest = () => {
  return {
    type: FETCH_DEPOSIT_REQUEST,
  };
};

export const fetchDepositSuccess = (amount) => {
  return {
    type: FETCH_DEPOSIT_SUCCESS,
    payload: amount,
  };
};

export const fetchDepositError = (error) => {
  return {
    type: FETCH_DEPOSIT_FAILURE,
    payload: error,
  };
};

export const fetchWithdrawRequest = () => {
  return {
    type: FETCH_WITHDRAW_REQUEST,
  };
};

export const fetchWithdrawSuccess = (amount) => {
  return {
    type: FETCH_WITHDRAW_SUCCESS,
    payload: amount,
  };
};

export const fetchWithdrawError = (error) => {
  return {
    type: FETCH_WITHDRAW_FAILURE,
    payload: error,
  };
};

export const fetchDepositInterestRateRequest = () => {
  return {
    type: FETCH_DEPOSIT_INTERESTRATE_REQUEST,
  };
};

export const fetchDepositInterestRateSuccess = (amount) => {
  return {
    type: FETCH_DEPOSIT_INTERESTRATE_SUCCESS,
    payload: amount,
  };
};

export const fetchDepositInterestRateError = (error) => {
  return {
    type: FETCH_DEPOSIT_INTERESTRATE_FAILURE,
    payload: error,
  };
};

export const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DEPOSIT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_DEPOSIT_SUCCESS:
      return {
        loading: false,
        amount: action.payload,
        error: null,
      };
    case FETCH_DEPOSIT_FAILURE:
      return {
        loading: false,
        amount: 0,
        error: action.payload,
      };

    //---
    case FETCH_WITHDRAW_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_WITHDRAW_SUCCESS:
      return {
        loading: false,
        amount: action.payload,
        error: null,
      };
    case FETCH_WITHDRAW_FAILURE:
      return {
        loading: false,
        amount: 0,
        error: action.payload,
      };

    // -----
    case FETCH_DEPOSIT_INTERESTRATE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_DEPOSIT_INTERESTRATE_SUCCESS:
      return {
        loading: false,
        amount: action.payload,
        error: null,
      };
    case FETCH_DEPOSIT_INTERESTRATE_FAILURE:
      return {
        loading: false,
        amount: state.amount,
        error: action.payload,
      };
    default:
      return state;
  }
};

// todo move logic into thunk + write test
export const depositMoney =
  () =>
  async (dispatch, getState, { services }) => {
    dispatch(fetchDepositRequest());

    let deposit;
    try {
      deposit = await services.account.changeAccountState(1000);
    } catch (error) {
      return dispatch(
        fetchDepositError("Sorry, all of your money was stolen.")
      );
    }
    return dispatch(fetchDepositSuccess(deposit));
  };

export const withdrawMoney =
  () =>
  async (dispatch, getState, { services }) => {
    dispatch(fetchWithdrawRequest());

    let withdrawMoney;

    try {
      withdrawMoney = await services.account.changeAccountState(-1000);
    } catch (error) {
      return dispatch(fetchWithdrawError("Your money was stolen."));
    }
    return dispatch(fetchWithdrawSuccess(withdrawMoney));
  };

export const depositInterestRate =
  () =>
  async (dispatch, getState, { services }) => {
    dispatch(fetchDepositInterestRateRequest());

    let balance, interestRate, newBalance;

    balance = await services.account.actualBalance();
    interestRate = balance * 0.02;

    try {
      newBalance = await services.account.changeAccountState(
        interestRate,
        true
      );
    } catch (error) {
      return dispatch(fetchDepositInterestRateError("Sorry - some issue, no money added."));
    }
    return dispatch(fetchDepositInterestRateSuccess(newBalance));
  };
