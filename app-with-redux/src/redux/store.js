import { createStore, applyMiddleware,compose } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers/index";

// lets enable redux dev tools
// it can be also done it simpler with https://github.com/zalmoxisus/redux-devtools-extension#13-use-redux-devtools-extension-package-from-npm
const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;



export const store = createStore(
  reducers,
  undefined,
  composeEnhancers(
    applyMiddleware(thunk) // so far this is not needed for your project
  )
);
