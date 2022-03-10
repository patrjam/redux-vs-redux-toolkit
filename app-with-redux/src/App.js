import "./App.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./redux/index";

function App() {
  
  const state = useSelector((state) => state); //all state structure in store

  console.log(state, "TOTO JE STATE");

  const dispatch = useDispatch();

  const { depositMoney, withdrawMoney, depositInterestRate } =
    bindActionCreators(actionCreators, dispatch);

  return (
    <div className="App">
      <h2>Update state with redux</h2>
      <h1>{state.amount}</h1>
      <button onClick={() => depositMoney(1000)}>Deposit</button>
      <button onClick={() => withdrawMoney(1000)}>Withdraw</button>
      <button onClick={depositInterestRate}>Deposit 2% interest rate</button>
      <h3>
        {state.loading === true ? (
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
