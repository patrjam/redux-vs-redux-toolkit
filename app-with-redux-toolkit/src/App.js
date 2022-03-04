import './App.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { depositMoney, withdrawMoney, depositInterestRate,accountReducer } from './redux/accountReducer';
import {bindActionCreators} from "redux";

function App() {
  // unstable reference on selector !
  const accountState = useSelector((state) => state.account.account)
  const dispatch = useDispatch()

  // bindActionCreators can be useful here as well   -  but i prefer this version anyway
  // const {depositMoney, withdrawMoney, depositInterestRate} = bindActionCreators(accountReducer,dispatch)
  return (
    <div className="App">
      <h2>Update state with redux-toolkit</h2>
      <h1>{ accountState }</h1>
      <button onClick={() => dispatch(depositMoney(1000)) }>Deposit</button>
      <button onClick={() => dispatch(withdrawMoney(1000))}>Withdraw</button>
      <button onClick={()=> dispatch(depositInterestRate())}>Deposit 2% interest rate</button>
    </div>
  );
}

export default App;
