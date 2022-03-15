import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { accountReducer } from "./accountReducer";
import {services} from "../redux/services";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const thunkMiddleware = thunk.withExtraArgument({ services: services });

export const store = createStore(
  accountReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);
