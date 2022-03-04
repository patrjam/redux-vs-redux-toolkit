import "./App.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./redux/index";

function App() {

  // unstable reference on selector (function is created every render)
  // https://react-redux.js.org/api/hooks#useselector see impacts
  const accountState = useSelector((state) => state.account); //state in redux store

  const state2 = useSelector((state) => state); //all state structure in store

  //console.log(state2)

  const dispatch = useDispatch();

  // yes this can be handy if you have multiple action creators/thunks in one place ♥
  // but see in storemode codebase we add
  const { depositMoney, withdrawMoney, depositInterestRate } = bindActionCreators(
    actionCreators,
    dispatch
  );


  return (
    <div className="App">
      <h2>Update state with redux</h2>
      <h1>{accountState}</h1>
      <button onClick={() => depositMoney(1000)}>Deposit</button>
      <button onClick={() => withdrawMoney(1000)}>Withdraw</button>
      <button onClick={depositInterestRate /* simpler :) i think it is called eta reduction but not sure */}>Deposit 2% interest rate</button>
    </div>
  );
}

export default App;
