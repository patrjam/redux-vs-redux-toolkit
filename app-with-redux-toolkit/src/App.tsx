import "./App.css";
import { useSelector } from "react-redux";
import { accountSelectors } from "./redux/account.selectors";
import {
  depositMoney,
  withdrawMoney,
  depositInterestRate,
} from "./redux/accountSlice";
import { useAppDispatch } from "./redux/store";

function App() {
  const amount = useSelector(accountSelectors.getAmount);
  const loading = useSelector(accountSelectors.getLoading);
  const error = useSelector(accountSelectors.getError);
  const dispatch = useAppDispatch();
  return (
    <div className="App">
      <h2>Update state with redux-toolkit</h2>
      <h1>{amount}$</h1>
      <button className="button" onClick={() => dispatch(depositMoney())}>
        Deposit
      </button>
      <button className="button" onClick={() => dispatch(withdrawMoney())}>
        Withdraw
      </button>
      <button
        className="button"
        onClick={() => dispatch(depositInterestRate())}
      >
        Deposit 2% interest rate
      </button>
      <h3>
        {loading ? (
          <div className="spinner">
            <div className="bounce1"></div>
            <div className="bounce2"></div>
            <div className="bounce3"></div>
          </div>
        ) : (
          error
        )}
      </h3>
    </div>
  );
}

export default App;
