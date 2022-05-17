import './App.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getAmount, getLoading, getError, getState } from './redux/account.selectors';
import { depositMoney, withdrawMoney, depositInterestRate } from './redux/accountSlice';

function App() {
  const amount = useSelector(getAmount)
  const loading = useSelector(getLoading)
  const error = useSelector(getError)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <h2>Update state with redux-toolkit</h2>
      <h1>{amount}$</h1>
      <button className="button" onClick={() => dispatch(depositMoney())}>Deposit</button>
      <button className="button" onClick={() => dispatch(withdrawMoney())}>Withdraw</button>
      <button className="button" onClick={() => dispatch(depositInterestRate())}>Deposit 2% interest rate</button>
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
