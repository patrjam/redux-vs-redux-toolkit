import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { accountReducer } from "./reducers/accountReducer";

const composeEnhancers =  (typeof window !== 'undefined' &&
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;


export const store = createStore(accountReducer,
  composeEnhancers(
applyMiddleware(thunk))
)