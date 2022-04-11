import './App.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { depositMoney, withdrawMoney, depositInterestRate } from './redux/accountReducer';

function App() {
  const accountState = useSelector((state) => state.account.account)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <h2>Update state with redux-toolkit</h2>
      <h1>{ accountState }</h1>
      <button className="button" onClick={() => dispatch(depositMoney(1000)) }>Deposit</button>
      <button className="button" onClick={() => dispatch(withdrawMoney(1000))}>Withdraw</button>
      <button className="button" onClick={()=> dispatch(depositInterestRate())}>Deposit 2% interest rate</button>
    </div>
  );
}

export default App;
