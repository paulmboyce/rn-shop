import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
/** IMPORTANT: remove composeWithDevTools() for production */
import { composeWithDevTools } from "redux-devtools-extension";

import {
	reducers,
	UiMiddleware,
	LoggerMiddleware,
} from "../../../_adapters/controllers/redux";

console.log("NODE_ENV is:  [", process.env.NODE_ENV, "]");

const middleware = [thunk, UiMiddleware];
if (process.env.NODE_ENV !== "production") {
	middleware.push(LoggerMiddleware);
}

const reduxStore = createStore(
	reducers,
	/** IMPORTANT: remove composeWithDevTools() for production */
	composeWithDevTools(applyMiddleware(...middleware))
);

export { reduxStore };
