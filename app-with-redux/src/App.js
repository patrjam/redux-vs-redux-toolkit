import "./App.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  depositInterestRateToAccount,
  depositMoneyToAccount,
  withdrawMoneyToAccount,
} from "./redux/accountReducer";
import { getAmount, getError, getLoading } from "./redux/account.selectors";

function App() {
  const amount = useSelector(getAmount);
  const loading = useSelector(getLoading);
  const error = useSelector(getError);

  const dispatch = useDispatch();

  return (
    <div className="App">
      <h2>Update state with redux</h2>
      <h1>{amount}$</h1>
      <button
        className="button"
        onClick={() => dispatch(depositMoneyToAccount())}
      >
        Deposit
      </button>
      <button
        className="button"
        onClick={() => dispatch(withdrawMoneyToAccount())}
      >
        Withdraw
      </button>
      <button
        className="button"
        onClick={() => dispatch(depositInterestRateToAccount())}
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
