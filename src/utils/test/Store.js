import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import reducers from "../../redux/reducers";
import { UiMiddleware } from "../../redux/middleware/UiMiddleware";
import { LoggerMiddleware } from "../../redux/middleware/LoggerMiddleware";

const middlewares = [thunk, LoggerMiddleware, UiMiddleware];

function buildStore(initialState) {
  if (!initialState) {
    initialState = {
      products: {},
      cart: {},
      orders: [],
      loggedInUser: 1,
      ui: {},
    };
  }

  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(...middlewares)
  );

  return store;
}

export { buildStore };
