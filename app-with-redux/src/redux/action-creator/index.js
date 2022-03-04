
// as you are not dealing with async actions (fetching from API)
// all action creators can just return actions directly
// no thunks needed


// sample service
const withdrawMoneyService = (amount)=>{
  return new Promise((res,rej)=>{
    setTimeout(()=>{res('done')},5000)
  })
}



// in storemode we use duck pattern to organise https://github.com/erikras/ducks-modular-redux
// all in one file is simpler
export const depositMoney = (amount) => {
  return (dispatch) => {
    dispatch({
      type: "deposit", //good practice is not to hard code action types (typescript or file with all types as consts) - single source of truth
      payload: amount,
    });
  };
};

export const withdrawMoney = (amount) => {
  return (dispatch) => {
    dispatch({
      type: "withdraw",
      payload: amount,
    });
  };
};

export const depositInterestRate = () => {
  return (dispatch) => {
    dispatch({
      type: "depositInterestRate"
    })
  }
}
