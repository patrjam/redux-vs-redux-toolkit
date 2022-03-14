import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { accountReducer } from "./accountReducer";

const composeEnhancers =  (typeof window !== 'undefined' &&
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;


export const store = createStore(accountReducer,
  composeEnhancers(
    // todo use thunk.withExtraArgument(services)
applyMiddleware(thunk))
)
