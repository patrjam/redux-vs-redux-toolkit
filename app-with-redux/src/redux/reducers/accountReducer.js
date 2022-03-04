const initialState = 0;

const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case "deposit": // hardcoded (see action-creator/index.js)
      return state + action.payload;
    case "withdraw":
      return state - action.payload;
    case "depositInterestRate":
      return state + state * 0.2;
    default:
      return state;
  }
};

export default accountReducer;
