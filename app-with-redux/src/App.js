import "./App.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  depositInterestRateToAccount,
  depositMoneyToAccount,
  withdrawMoneyToAccount,
} from "./redux/reducers/accountReducer";

function App() {
  const state = useSelector((state) => state); //all state structure in store

  const dispatch = useDispatch();

  return (
    <div className="App">
      <h2>Update state with redux</h2>
      <h1>{state.amount}$</h1>
      <button className="button" onClick={() => dispatch(depositMoneyToAccount())}>Deposit</button>
      <button className="button" onClick={() => dispatch(withdrawMoneyToAccount())}>
        Withdraw
      </button>
      <button className="button" onClick={() => dispatch(depositInterestRateToAccount())}>
        Deposit 2% interest rate
      </button>
      <h3>
        {state.loading ? (
          <div className="spinner">
            <div className="bounce1"></div>
            <div className="bounce2"></div>
            <div className="bounce3"></div>
          </div>
        ) : (
          state.error
        )}
      </h3>
    </div>
  );
}

export default App;
